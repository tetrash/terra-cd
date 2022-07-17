import { IsEnum } from "class-validator";
import process from "process";

export enum App {
  Server = "server",
  TerraformAgent = "terraform-agent",
}

export enum LogLevels {
  error = "error",
  warn  = "warn",
  info  = "info",
  http  = "http",
  verbose = "verbose",
  debug = "debug",
  silly = "silly",
}

export class BaseConfig {
  @IsEnum(App)
  app: App = process.env.APP as App;

  @IsEnum(LogLevels)
  logLevel: LogLevels = process.env.LOG_LEVEL as LogLevels || process.env.NODE_ENV === "production" ? LogLevels.http : LogLevels.silly;
}
