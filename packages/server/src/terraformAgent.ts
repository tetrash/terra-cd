import {createTerraformAgentFeedbackTopic, createTerraformAgentTopic} from "./helpers/nats";
import {TerraformAgentConfig} from "./config/terraformAgentConfig";
import { connect } from "nats";

export async function startTerraformAgent(config: TerraformAgentConfig) {
  const nc = await connect({ servers: config.natsHost })
  const applicationTopic = createTerraformAgentTopic(nc);
  const applicationFeedbackTopic = createTerraformAgentFeedbackTopic(nc);
  await applicationTopic.subscribe(async (msg, m) => {
    applicationFeedbackTopic.publish({ data: msg.data, feedback: "OK", id: msg.id });
  });
}
