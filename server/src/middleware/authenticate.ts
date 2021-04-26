import { NextFunction, Request, Response } from "express";
import { customStatus, customMessage, customError } from "../util";

const isLogined = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    const error = new customError(customStatus.FORBIDDEN, customMessage.USER_NOT_AUTHENTICATED);
    next(error);
  }
};

const isNotLogined = (req: Request, res: Response, next: NextFunction) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    const error = new customError(customStatus.FORBIDDEN, customMessage.USER_AUTHENTICATED);
    next(error);
  }
};

export { isLogined, isNotLogined };
