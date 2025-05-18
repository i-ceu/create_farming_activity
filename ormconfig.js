module.exports =
   [
      {
         "name": "postgresdb",
         "type": "postgres",
         "username": process.env.USER,
         "password": process.env.PASSWORD,
         "host": process.env.HOST,
         "port": process.env.DB_PORT,
         "database": process.env.DATABASE,
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
         "username": process.env.USER,
         "password": process.env.PASSWORD,
         "host": process.env.HOST,
         "port": process.env.DB_PORT,
         "database": process.env.DATABASE,
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
         "username": process.env.USER,
         "password": process.env.PASSWORD,
         "host": process.env.HOST,
         "port": process.env.DB_PORT,
         "database": process.env.DATABASE,
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
         "username": process.env.USER,
         "password": process.env.PASSWORD,
         "host": process.env.HOST,
         "port": process.env.DB_PORT,
         "database": process.env.DATABASE,
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
         "username": process.env.USER,
         "password": process.env.PASSWORD,
         "host": process.env.HOST,
         "port": process.env.DB_PORT,
         "database": process.env.DATABASE,
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
         "username": process.env.USER,
         "password": process.env.PASSWORD,
         "host": process.env.HOST,
         "port": process.env.DB_PORT,
         "database": process.env.DATABASE,
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
         "username": process.env.USER,
         "password": process.env.PASSWORD,
         "host": process.env.HOST,
         "port": process.env.DB_PORT,
         "database": process.env.DATABASE,
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
         "username": process.env.USER,
         "password": process.env.PASSWORD,
         "host": process.env.HOST,
         "port": process.env.DB_PORT,
         "database": process.env.DATABASE,
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
