import { NextFunction, Request, Response } from "express";
import { resMSG, resError } from "@utils/module";

// Authenticated check
export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    const error = new resError(403, resMSG.AUTH_NOT_AUTHENTICATED);
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
    const error = new resError(400, resMSG.AUTH_AUTHENTICATED);
    next(error);
  }
};
