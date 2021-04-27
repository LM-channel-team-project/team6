import { NextFunction, Request, Response } from "express";
import { customStatus, customMessage, customError } from "../utils";

// Authenticated check
export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    const error = new customError(
      customStatus.FORBIDDEN,
      customMessage.USER_NOT_AUTHENTICATED,
    );
    next(error);
  }
};

// Not Authenticated check
export const isNotAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    const error = new customError(
      customStatus.FORBIDDEN,
      customMessage.USER_AUTHENTICATED,
    );
    next(error);
  }
};
