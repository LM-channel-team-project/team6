import "module-alias/register";
import "reflect-metadata";
import dotenv from "dotenv";

dotenv.config();

import express from "express";
import morgan from "morgan";
import path from "path";
import cors from "cors";
import http from "http";
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";
import { createConnection, getConnection } from "typeorm";
import swaggerUi from "swagger-ui-express";
import Yaml from "yamljs";

import router from "@routes/index";
import passportConfig from "@utils/passport.config";
import { error404, errorHandler } from "@utils/errorHandler";

const app = express();
const port = process.env.PORT || 5000;
const swaggerDocs = Yaml.load(path.join(__dirname, "../build/swagger.yaml"));

// app configuration
app.use(
  process.env.NODE_ENV === "production" ? morgan("combined") : morgan("dev"),
);
app.use(express.static(path.join(__dirname, "src/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET || "default",
    cookie: {
      httpOnly: true,
      secure: false,
    },
  }),
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.CLIENT_URL_PRODUCTION
        : process.env.CLIENT_URL_DEVELOPMENT,
  }),
);

// possport configuation
passportConfig();

// router settings
app.use("/api/v1", router); // v1
app.use("/api-docs/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// error handlers
app.use(error404);
app.use(errorHandler);

// server run/stop function
const stopServer = async (server: http.Server, err?: string) => {
  // database disconnection for safety
  const connection = getConnection();
  await connection.close();

  // server close
  server.close();
  process.exit();
};

const runServer = async () => {
  // test mode
  if (process.env.NODE_ENV === "test") return;

  // server on
  const server = app.listen(port, () => {
    console.log(`>> server on | Port: ${port}`);
  });

  try {
    // database connection
    const connection = await createConnection();
    console.log(`>> database connected | DB Type: ${process.env.DB_TYPE}`);
  } catch (err) {
    stopServer(server, err);
  }
};

runServer();
