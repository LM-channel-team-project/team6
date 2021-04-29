import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import * as custom from "@utils/custom";

// Create Not Found(404) error
export const error404 = (req: Request, res: Response, next: NextFunction) => {
  const error = new custom.CustomError(
    custom.status.NOT_FOUND,
    custom.message.NOT_FOUND,
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
  const statusCode = err.status || custom.status.INTERNAL_SERVER_ERROR;
  const statusMessage = err.message || custom.message.INTERNAL_SERVER_ERROR;

  res.status(statusCode).json(custom.JSONResponse(statusCode, statusMessage));
};
