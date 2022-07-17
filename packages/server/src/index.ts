import { config } from "dotenv";
config();

import {startServer} from "./server";
import {logger} from "./helpers/logger";
import {ServerConfig} from "./config/server";
import {TerraformAgentConfig} from "./config/terraformAgentConfig";
import {startTerraformAgent} from "./terraformAgent";
import {App} from "./config/base";

async function start() {
  logger.info(`Starting ${process.env.APP}`)
  switch (process.env.APP) {
    case (App.Server):
      const serverConfig = await ServerConfig.getConfig();
      await startServer(serverConfig);
      break;
    case (App.TerraformAgent):
      const applicationControllerConfig = await TerraformAgentConfig.getConfig();
      await startTerraformAgent(applicationControllerConfig);
      break;
    default:
      logger.error(`Unknown app: ${process.env.APP}`);
      process.exit(1);
  }
}

start().catch((e) => logger.error(e.toString()));
