import { NextFunction, Request, Response } from "express";
import { resMSG, resError } from "@utils/module";
import { findUser } from "@services/auth.service";
import { verifyToken } from "@utils/jwt";

const verificationUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    headers: { authorization },
  } = req;

  if (!authorization) {
    const error = new resError(403, resMSG.AUTH_NOT_AUTHENTICATED);
    next(error);
  } else {
    try {
      const token = authorization;
      const { id, nickname, username, email, oauthId, provider }: any =
        await verifyToken(token);
      const user = await findUser(id);

      if (!user) {
        const error = new resError(400, resMSG.AUTH_FIND_ONE_FAIL);
        next(error);
      }
      req.user = { id, nickname, username, email, oauthId, provider };
      return next();
    } catch (err) {
      const error = new resError(400, resMSG.AUTH_EXPIRED_TOKEN, err);
      next(error);
    }
  }
};

export default verificationUser;
