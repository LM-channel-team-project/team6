const baseURL = process.env.NODE_ENV === "production" ? "build" : "src";

console.log(baseURL);

export default {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [`${baseURL}/models/entity/**/*`],
  migrations: [`${baseURL}/models/migration/**/*`],
  subscribers: [`${baseURL}/models/subscriber/**/*`],
  cli: {
    entitiesDir: `${baseURL}/models/entity`,
    migrationsDir: `${baseURL}/models/migration`,
    subscribersDir: `${baseURL}/models/subscriber`,
  },
};
