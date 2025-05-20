
import "reflect-metadata";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import hpp from "hpp";
import morgan from "morgan";
import compression from "compression";
import { createConnection } from "typeorm";
import { NODE_ENV, PORT, LOG_FORMAT, ORIGIN, CREDENTIALS } from "../src/config";
import { Routes } from "../src/interfaces/routes.interfaces";
import connectDatabase from "./helpers/connect.helper";
import logger from "../logger";
// import { connectionOptions } from "./helpers/database_configurations";

const stream = {
  write: (message: string) => {
    console.log(message.substring(0, message.lastIndexOf("\n")));
  },
};

class App {
  static listen(arg0: number, arg1: {}) {
    throw new Error("Method not implemented.");
  }
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    // this.connectToDatabase();
    console.log( process.env.POSTGRES_HOST," ", process.env.POSTGRES_PORT, " " ,process.env.POSTGRES_USERNAME, "  " ,process.env.POSTGRES_PASSWORD," ", PORT)

    this.app = express();
    this.env = NODE_ENV || "development";
    this.port = process.env.PORT || 3000;
    
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running in ${this.env} mode on port ${this.port}`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(morgan("dev", { stream }));
    this.app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }));
    this.app.use(hpp());
    this.app.use(compression());
    this.app.use(express.json({ limit: "2mb" }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use("/", route.router);
    });
  }
}

export default App;
