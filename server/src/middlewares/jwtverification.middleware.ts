import { NextFunction, Request, Response } from "express";
import * as custom from "@utils/custom";
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
    const error = new custom.CustomError(
      403,
      custom.message.USER_NOT_AUTHENTICATED,
    );
    next(error);
  } else {
    try {
      const token = authorization;
      const { id, nickname, username, email, oauthId, provider }: any =
        await verifyToken(token);
      const user = await findUser(id);

      if (!user) {
        const error = new custom.CustomError(
          400,
          custom.message.USER_FIND_ONE_FAIL,
        );
        next(error);
      }
      req.user = { id, nickname, username, email, oauthId, provider };
      return next();
    } catch (err) {
      const error = new custom.CustomError(
        400,
        "JWT 토큰이 만료되었습니다.",
        err,
      );
      next(error);
    }
  }
};

export default verificationUser;
