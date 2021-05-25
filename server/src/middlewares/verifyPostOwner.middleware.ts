import { NextFunction, Request, Response } from "express";
import { resMSG, resError } from "@utils/module";
import * as PostService from "@services/post.service";

const verifyPostOwner = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const post = await PostService.findPost(req.params.id);

    if (!req.user) {
      const error = new resError(403, resMSG.AUTH_NOT_AUTHENTICATED);
      return next(error);
    }

    if (compareUser(req.user, post.user)) {
      next();
    } else {
      const error = new resError(403, resMSG.POST_NOT_MATCH_OWNER);
      return next(error);
    }
  } catch (err) {
    const error = new resError(403, resMSG.POST_NOT_EXIST_POST);
    return next(error);
  }
};

const compareUser = (reqUser: any, postUser: any) => {
  if (reqUser.email === postUser.email && reqUser.id === postUser.id) {
    return true;
  } else {
    return false;
  }
};

export default verifyPostOwner;
