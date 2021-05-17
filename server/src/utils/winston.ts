import { StreamOptions } from "morgan";
import winston from "winston";
import winstonDaily from "winston-daily-rotate-file";

const logDir = "logs";
const { combine, timestamp, printf, colorize, simple } = winston.format;

// log format
const logFormat = printf((info) => {
  return `${info.timestamp} ${info.level}: ${info.message}`;
});

/**
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const logger = winston.createLogger({
  transports: [
    // info level
    new winstonDaily({
      level: "info",
      datePattern: "YYYY-MM-DD",
      dirname: logDir,
      filename: `%DATE%.log`,
      json: false,
      maxFiles: 30, // Day 30
      zippedArchive: true,
      format: combine(timestamp(), logFormat),
    }),
    // error level
    new winstonDaily({
      level: "error",
      datePattern: "YYYY-MM-DD",
      dirname: logDir + "/error",
      filename: `%DATE%.error.log`,
      json: false,
      maxFiles: 30,
      zippedArchive: true,
      format: combine(timestamp(), logFormat),
    }),
  ],
});

const stream: StreamOptions = {
  write: (message: any) => {
    logger.info(message.substring(0, message.lastIndexOf("\n")));
  },
};

// development
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      level: "debug",
      handleExceptions: true,
      format: combine(timestamp(), colorize(), simple()),
    }),
  );
}

export { logger, stream };
