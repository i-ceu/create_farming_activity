import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { config } from "dotenv";
config();
export const connectionOptions: (
  | PostgresConnectionOptions
  | MysqlConnectionOptions
)[] = [
  {
    name: "postgresdb",
    type: "postgres",
    host: String(process.env.POSTGRES_HOST),
    port: Number(process.env.POSTGRES_PORT),
    username: String(process.env.POSTGRES_USERNAME),
    password: String(process.env.POSTGRES_PASSWORD),
    database: "recruitment-db",
    synchronize: false,
    logging: false,
    entities: ["src/entities/**/*.{ts,js}"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/entities",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber",
    },
    poolErrorHandler: (err: Error) => {
      console.error(
        `Database Pool Error Detected: ${err.message}`
      );
    },
  },
  {
    name: "postgresdb-portfolio",
    type: "postgres",
    host: String(process.env.POSTGRES_HOST),
    port: Number(process.env.POSTGRES_PORT),
    username: String(process.env.POSTGRES_USERNAME),
    password: String(process.env.POSTGRES_PASSWORD),
    database: "portfolio-db",
    synchronize: false,
    logging: false,
    entities: ["src/entities/**/*.{ts,js}"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/entities",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber",
    },
    poolErrorHandler: (err: Error) => {
      console.error(
        `Database Pool Error Detected: ${err.message}`
      );
    },
  },
  {
    name: "postgresdb-inventory",
    type: "postgres",
    host: String(process.env.POSTGRES_HOST),
    port: Number(process.env.POSTGRES_PORT),
    username: String(process.env.POSTGRES_USERNAME),
    password: String(process.env.POSTGRES_PASSWORD),
    database: "inventory-db",
    synchronize: false,
    logging: false,
    entities: ["src/entities/**/*.{ts,js}"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/entities",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber",
    },
    poolErrorHandler: (err: Error) => {
      console.error(
        `Database Pool Error Detected: ${err.message}`
      );
    },
  },
  {
    name: "postgresdb-farming",
    type: "postgres",
    host: String(process.env.POSTGRES_HOST),
    port: Number(process.env.POSTGRES_PORT),
    username: String(process.env.POSTGRES_USERNAME),
    password: String(process.env.POSTGRES_PASSWORD),
    database: "farming-db",
    synchronize: false,
    logging: false,
    entities: ["src/entities/**/*.{ts,js}"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/entities",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber",
    },
    extra: {
      connectionLimit: 5,
      idleTimeoutMillis: 120000,
      connectionTimeoutMillis: 60000,
    },
    poolErrorHandler: (err: Error) => {
      console.error(
        `Database Pool Error Detected: ${err.message}`
      );
    },
  },

  {
    name: "postgresdb-planning",
    type: "postgres",
    host: String(process.env.POSTGRES_HOST),
    port: Number(process.env.POSTGRES_PORT),
    username: String(process.env.POSTGRES_USERNAME),
    password: String(process.env.POSTGRES_PASSWORD),
    database: "planning-db",
    synchronize: false,
    logging: false,
    entities: ["src/entities/**/*.{ts,js}"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/entities",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber",
    },
    poolErrorHandler: (err: Error) => {
      console.error(
        `Database Pool Error Detected: ${err.message}`
      );
    },
  },
  {
    name: "postgresdb-recruitment",
    type: "postgres",
    host: String(process.env.POSTGRES_HOST),
    port: Number(process.env.POSTGRES_PORT),
    username: String(process.env.POSTGRES_USERNAME),
    password: String(process.env.POSTGRES_PASSWORD),
    database: "recruitment-db",
    synchronize: false,
    logging: false,
    entities: ["src/entities/**/*.{ts,js}"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/entities",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber",
    },
    poolErrorHandler: (err: Error) => {
      console.error(
        `Database Pool Error Detected: ${err.message}`
      );
    },
  },
 
];
