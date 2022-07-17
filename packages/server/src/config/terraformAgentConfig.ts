import { IsString, validateOrReject } from "class-validator";
import { BaseConfig } from "./base";

export class TerraformAgentConfig extends BaseConfig {
  static async getConfig(): Promise<TerraformAgentConfig> {
    const config = new TerraformAgentConfig();
    await validateOrReject(config);
    return config;
  }

  @IsString()
  natsHost: string = process.env.NATS_HOST || "localhost";
}
