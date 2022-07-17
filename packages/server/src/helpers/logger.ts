import {config, createLogger, format, transports } from "winston";
import process from "process";
import {LogLevels} from "../config/base";

const logFormat = format.printf(info => `${info.timestamp} ${info.level} [${info.service}]: ${info.message}`)

export const logger = createLogger({
  levels: config.npm.levels,
  level: process.env.LOG_LEVEL || process.env.NODE_ENV === "production" ? LogLevels.http : LogLevels.silly,
  defaultMeta: { service: process.env.APP },
  format: format.combine(
    format.timestamp(),
  ),
  transports: [
    new transports.Console({ format: logFormat }),
    new transports.File({
      filename: 'error.log',
      level: 'error',
      maxsize: 5242880, //5MB
      maxFiles: 5,
      format: format.combine(
        format.timestamp(),
        format.json()
      )
    }),
    new transports.File({
      filename: 'combined.log',
      level: 'http',
      maxsize: 5242880, //5MB
      maxFiles: 5,
      format: format.combine(
        format.timestamp(),
        format.json()
      )
    }),
  ],
});
