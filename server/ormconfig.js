import path from "path";

const env = process.env.NODE_ENV === "production" ? "build" : "src";
const dir = path.join(__dirname, env);

export default {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [`${dir}/models/entity/**/*`],
  migrations: [`${dir}/models/migration/**/*`],
  subscribers: [`${dir}/models/subscriber/**/*`],
  cli: {
    entitiesDir: `${dir}/models/entity`,
    migrationsDir: `${dir}/models/migration`,
    subscribersDir: `${dir}/models/subscriber`,
  },
};
