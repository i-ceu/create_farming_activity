import { createLogger, format, transports } from "winston";

const { combine, timestamp, printf, colorize } = format;

// Define a custom format for console logs with colorization
const consoleFormat = combine(
  colorize(),
  timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
  })
);

// Define a custom format for file logs without colorization
const fileFormat = combine(
  timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
  })
);

const logger = createLogger({
  level: "info",
  transports: [
    new transports.Console({
      format: consoleFormat,
    }),
    new transports.File({
      filename: "combined.log",
      format: fileFormat,
    }),
  ],
});

export default logger;
