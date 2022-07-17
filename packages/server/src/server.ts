import express from "express";
import { connect } from "nats";
import morgan from "morgan";
import {ServerConfig} from "./config/server";
import {createTerraformAgentFeedbackTopic} from "./helpers/nats";
import {logger} from "./helpers/logger";

export async function startServer(config: ServerConfig) {
  const server = express();

  const nc = await connect({ servers: config.natsHost })
  const terraformAgentFeedbackTopic = createTerraformAgentFeedbackTopic(nc);

  terraformAgentFeedbackTopic.subscribe(async (msg) => {
    logger.debug(`Received feedback: ${msg.feedback}`);
  });

  server.use(morgan("short", { stream: { write: (log: string) => logger.http(log.trim()) } }));

  server.get("/", (req, res) => {
    res.send("Hello World!");
  });

  server.listen(config.port, () => {
    logger.info(`Server started on port ${config.port}`);
  });
}
