import { NextFunction, Request, Response } from "express";
import * as custom from "@utils/custom";

// Authenticated check
export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    const error = new custom.CustomError(
      custom.status.FORBIDDEN,
      custom.message.USER_NOT_AUTHENTICATED,
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
    const error = new custom.CustomError(
      custom.status.FORBIDDEN,
      custom.message.USER_AUTHENTICATED,
    );
    next(error);
  }
};
