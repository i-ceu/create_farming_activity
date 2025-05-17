import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import "reflect-metadata";
import { getConnection } from "typeorm";
import connectDatabase from "./helpers/connect.helper";
import DueActivityRoute from "./routes/due_activity_schedule.routes";
import App from "./app";

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
});

(async () => {
  // code: cron jobs

  await connectDatabase(() => {
    const app = new App([
      new DueActivityRoute(),
    ]);
    app.listen();
  });
  
})();
