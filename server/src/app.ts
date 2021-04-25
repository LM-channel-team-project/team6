import "reflect-metadata";
import { createConnection } from "typeorm";

import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";
import { HttpError } from "http-errors";

import router from "./route";
import { customStatus, customMessage, customError, jsonResponse } from "./util";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(
  (req: Request, res: Response, next: NextFunction) => {
    if (process.env.NODE_ENV === "production") {
      morgan("combined")(req, res, next);
    } else {
      morgan("dev")(req, res, next);
    }
  },
  express.static(path.join(__dirname, "src/public")),
  express.json(),
  express.urlencoded({ extended: false }),
  cookieParser(process.env.COOKIE_SECRET),
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET || "default",
    cookie: {
      httpOnly: true,
      secure: false,
    },
  }),
  passport.initialize(),
  passport.session(),
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.CLIENT_PRODUCTION
        : process.env.CLIENT_DEVELOPMENT,
  }),
);

// DB Connection
// createConnection()
//   .then(() => {
//     console.log("Database Connected :) ");
//   })
//   .catch((err) => console.log(err));

// router
app.use("/api", router);

// error handling
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new customError(customStatus.NOT_FOUND, customMessage.NOT_FOUND);
  next(error);
});

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.status || customStatus.INTERNAL_SERVER_ERROR;
  const statusMessage = err.message || customMessage.INTERNAL_SERVER_ERROR;

  res.status(statusCode).json(jsonResponse(statusCode, statusMessage));
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server listening on : ${port}`);
  });
}

export default app;
