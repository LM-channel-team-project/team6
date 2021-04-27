import "reflect-metadata";
import { createConnection, getConnection } from "typeorm";

import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import cors from "cors";
import http from "http";
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";

import { error404, errorHandler } from "./utils/errorHandler";
import passportConfig from "./utils/passport.config";
import router from "./routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

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
  // classify test mode
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
