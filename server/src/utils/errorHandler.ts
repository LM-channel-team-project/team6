import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import * as custom from "@utils/custom";
import { logger } from "./winston";

// Create Not Found(404) error
export const error404 = (req: Request, res: Response, next: NextFunction) => {
  const error = new custom.CustomError(404, custom.message.NOT_FOUND);
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
  const statusMessage = err.message || custom.message.INTERNAL_SERVER_ERROR;

  logger.error(statusMessage);

  res
    .status(statusCode)
    .json(custom.JSONResponse(statusCode, statusMessage, false));
};
