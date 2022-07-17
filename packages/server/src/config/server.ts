import { IsPort, IsString, validateOrReject } from "class-validator";
import {BaseConfig} from "./base";
import * as process from "process";

export class ServerConfig extends BaseConfig {
  static async getConfig(): Promise<ServerConfig> {
    const config = new ServerConfig();
    await validateOrReject(config);
    return config;
  }

  @IsPort()
  port: string = process.env.PORT || "3000";

  @IsString()
  natsHost: string = process.env.NATS_HOST || "localhost";
}
