import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import { resJSON, resMSG, resError } from "@utils/module";
import { logger } from "./winston";

// Create Not Found(404) error
export const errorNotFound = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const error = new resError(404, resMSG.NOT_FOUND);
  next(error);
};

// Error handler
export const errorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = err.status || 500;
  const statusMessage = err.message || resMSG.INTERNAL_SERVER_ERROR;

  logger.error(statusMessage);

  res.status(statusCode).json(resJSON(false, statusMessage));
};
