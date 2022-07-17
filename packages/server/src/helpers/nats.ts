import { NatsConnection, JSONCodec, Msg } from "nats";
import { logger } from "./logger";

export class Topic<T extends { id: string }> {
  public readonly jc = JSONCodec<T>();
  constructor(private readonly nc: NatsConnection, private readonly subject: string) {}

  async subscribe(cb: (msg: T, m: Msg) => void) {
    if (this.nc.isClosed()) {
      throw new Error("Nats connection not established");
    }

    const sub = await this.nc.subscribe(this.subject);
    logger.info(`Subscribed to ${this.subject}, awaiting messages`);

    for await (const m of sub) {
      const msg = this.jc.decode(m.data);
      logger.verbose(`Received message (${msg.id}) from ${this.subject}`);
      logger.debug(`Message (${msg.id}): ${JSON.stringify(msg)}`);
      const profile = logger.startTimer();
      try {
        await cb(msg, m);
      } catch (e) {
        logger.error(`Error handling message (${msg.id}): ${e.toString()}`);
      } finally {
        profile.done({ message: `Message (${msg.id}) processed` });
      }
    }

    await this.nc.drain();
  }

  async publish(msg: T) {
    if (this.nc.isClosed()) {
      throw new Error("Nats connection not established");
    }

    await this.nc.publish(this.subject, this.jc.encode(msg));
    logger.verbose(`Published message to ${this.subject}`);
    logger.debug(`Message: ${JSON.stringify(msg)}`);
  }
}

export interface NatsMessage<t> {
  id: string;
  data: t;
}

export interface NatsMessageWithFeedback extends NatsMessage<string> {
  feedback: string;
}

export const createTerraformAgentTopic = (nc: NatsConnection) => new Topic<NatsMessage<{ terraform: { version: string } }>>(nc, "terraform.jobs");
export const createTerraformAgentFeedbackTopic = (nc: NatsConnection) => new Topic<NatsMessageWithFeedback>(nc, "terraform.feedback");
