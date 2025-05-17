import { createConnections } from "typeorm";
import { connectionOptions } from "./database_configurations";

export default async function connectDatabase(callback: any) {
  try {
    await createConnections(connectionOptions);
    console.log("Databse Connections Successfully established");
    callback();
  } catch (err) {
    console.log("Connection to database failed" + err.message);
  }
}
