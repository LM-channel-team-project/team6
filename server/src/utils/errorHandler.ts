import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import {
  customStatus,
  customMessage,
  customError,
  jsonResponse,
} from "../utils";

// Create Not Found(404) error
export const error404 = (req: Request, res: Response, next: NextFunction) => {
  const error = new customError(
    customStatus.NOT_FOUND,
    customMessage.NOT_FOUND,
  );
  next(error);
};

// Error handler
export const errorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = err.status || customStatus.INTERNAL_SERVER_ERROR;
  const statusMessage = err.message || customMessage.INTERNAL_SERVER_ERROR;

  res.status(statusCode).json(jsonResponse(statusCode, statusMessage));
};
