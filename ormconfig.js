module.exports =
   [
      {
         "name": "postgresdb",
         "type": "postgres",
         "username": process.env.POSTGRES_USERNAME,
         "password": process.env.POSTGRES_PASSWORD,
         "host": process.env.POSTGRES_HOST,
         "port": process.env.POSTGRES_PORT,
         "database": "postgres",
         "synchronize": false,
         "logging": false,
         "entities": [
            "src/entity/**/*.{ts,js}"
         ],
         "migrations": [
            "src/migration/**/*.ts"
         ],
         "subscribers": [
            "src/subscriber/**/*.ts"
         ],
         "cli": {
            "entitiesDir": "src/entity",
            "migrationsDir": "src/migration",
            "subscribersDir": "src/subscriber"
         }
      },
      {
         "name": "postgresdb-portfolio",
         "type": "postgres",
         "username": process.env.POSTGRES_USERNAME,
         "password": process.env.POSTGRES_PASSWORD,
         "host": process.env.POSTGRES_HOST,
         "port": process.env.POSTGRES_PORT,
         "database": "portfolio-db",
         "synchronize": false,
         "logging": false,
         "entities": [
            "src/entity/**/*.{ts,js}"
         ],
         "migrations": [
            "src/migration/**/*.ts"
         ],
         "subscribers": [
            "src/subscriber/**/*.ts"
         ],
         "cli": {
            "entitiesDir": "src/entity",
            "migrationsDir": "src/migration",
            "subscribersDir": "src/subscriber"
         }
      },
      {
         "name": "postgresdb-inventory",
         "type": "postgres",
         "username": process.env.POSTGRES_USERNAME,
         "password": process.env.POSTGRES_PASSWORD,
         "host": process.env.POSTGRES_HOST,
         "port": process.env.POSTGRES_PORT,
         "database": "inventory-db",
         "synchronize": false,
         "logging": false,
         "entities": [
            "src/entity/**/*.{ts,js}"
         ],
         "migrations": [
            "src/migration/**/*.ts"
         ],
         "subscribers": [
            "src/subscriber/**/*.ts"
         ],
         "cli": {
            "entitiesDir": "src/entity",
            "migrationsDir": "src/migration",
            "subscribersDir": "src/subscriber"
         }
      },
      {
         "name": "postgresdb-farming",
         "type": "postgres",
         "username": process.env.POSTGRES_USERNAME,
         "password": process.env.POSTGRES_PASSWORD,
         "host": process.env.POSTGRES_HOST,
         "port": process.env.POSTGRES_PORT,
         "database": "farming-db",
         "synchronize": false,
         "logging": false,
         "entities": [
            "src/entity/**/*.{ts,js}"
         ],
         "migrations": [
            "src/migration/**/*.ts"
         ],
         "subscribers": [
            "src/subscriber/**/*.ts"
         ],
         "cli": {
            "entitiesDir": "src/entity",
            "migrationsDir": "src/migration",
            "subscribersDir": "src/subscriber"
         },
         "poolSize": 5,
         "extra": {
            "connectionLimit": 5,
            "idleTimeoutMillis": 120000,
            "connectionTimeoutMillis": 60000
         }
      },
      {
         "name": "mysqldb",
         "type": "mysql",
         "username": process.env.POSTGRES_USERNAME,
         "password": process.env.POSTGRES_PASSWORD,
         "host": process.env.POSTGRES_HOST,
         "port": process.env.POSTGRES_PORT,
         "database": "msql",
         "synchronize": false,
         "logging": false,
         "entities": [
            "src/entity/**/*.{ts,js}"
         ],
         "migrations": [
            "src/migration/**/*.ts"
         ],
         "subscribers": [
            "src/subscriber/**/*.ts"
         ],
         "cli": {
            "entitiesDir": "src/entity",
            "migrationsDir": "src/migration",
            "subscribersDir": "src/subscriber"
         }
      },
      {
         "name": "mysqldb_verification",
         "type": "mysql",
         "username": process.env.POSTGRES_USERNAME,
         "password": process.env.POSTGRES_PASSWORD,
         "host": process.env.POSTGRES_HOST,
         "port": process.env.POSTGRES_PORT,
         "database": "mysqldb_verification",
         "synchronize": false,
         "logging": false,
         "entities": [
            "src/entity/**/*.{ts,js}"
         ],
         "migrations": [
            "src/migration/**/*.ts"
         ],
         "subscribers": [
            "src/subscriber/**/*.ts"
         ],
         "cli": {
            "entitiesDir": "src/entity",
            "migrationsDir": "src/migration",
            "subscribersDir": "src/subscriber"
         }
      },
      {
         "name": "postgresdb-planning",
         "type": "postgres",
         "username": process.env.POSTGRES_USERNAME,
         "password": process.env.POSTGRES_PASSWORD,
         "host": process.env.POSTGRES_HOST,
         "port": process.env.POSTGRES_PORT,
         "database": "planning-db",
         "synchronize": false,
         "logging": false,
         "entities": [
            "src/entity/**/*.{ts,js}"
         ],
         "migrations": [
            "src/migration/**/*.ts"
         ],
         "subscribers": [
            "src/subscriber/**/*.ts"
         ],
         "cli": {
            "entitiesDir": "src/entity",
            "migrationsDir": "src/migration",
            "subscribersDir": "src/subscriber"
         }
      },
      {
         "name": "postgresdb-recruitment",
         "type": "postgres",
         "username": process.env.POSTGRES_USERNAME,
         "password": process.env.POSTGRES_PASSWORD,
         "host": process.env.POSTGRES_HOST,
         "port": process.env.POSTGRES_PORT,
         "database": "recruitment-db",
         "synchronize": false,
         "logging": false,
         "entities": [
            "src/entity/**/*.{ts,js}"
         ],
         "migrations": [
            "src/migration/**/*.ts"
         ],
         "subscribers": [
            "src/subscriber/**/*.ts"
         ],
         "cli": {
            "entitiesDir": "src/entity",
            "migrationsDir": "src/migration",
            "subscribersDir": "src/subscriber"
         }
      }
   ]
