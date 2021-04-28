import { Request, Response, NextFunction } from "express";
import * as custom from "@utils/custom";
import bcrypt from "bcrypt";

import { getRepository } from "typeorm";
import { User } from "@models/entity/User";

/*
  URL: /api/v1/auth
  User
    id: number;
    nickname: string;
    username: string;
    email: string;
    password: string;
    oauthId: string;
    provider: string;
*/

// - passport callbacks
export const callbacks = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res
    .status(custom.status.OK)
    .json(
      custom.JSONResponse(custom.status.OK, custom.message.USER_LOGIN_SUCCESS),
    );
};

// - signUp
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { nickname, username, email, password } = req.body;

  try {
    const user = await getRepository(User).findOne({ where: { email } });
    if (user) {
      throw new custom.CustomError(
        custom.status.BAD_REQUEST,
        custom.message.USER_ALREADY_USED_EMAIL,
      );
    }
    const hash = await bcrypt.hash(password, 12);

    const result = await getRepository(User).save({
      email,
      nickname,
      username,
      password: hash,
    });

    res
      .status(custom.status.CREATED)
      .json(
        custom.JSONResponse(
          custom.status.CREATED,
          custom.message.USER_SIGNUP_SUCCESS,
          result,
        ),
      );
  } catch (err) {
    next(err);
  }
};

// Logout
export const logOut = (req: Request, res: Response, next: NextFunction) => {
  req.logOut();
  res.redirect(`${process.env.SERVER_URL_DEVELOPMENT}/api/v1/auth`);
};

// User Update
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await getRepository(User).findOne({
      where: { id: req.params.id },
    });

    if (!user) {
      throw new custom.CustomError(
        custom.status.NOT_FOUND,
        custom.message.USER_LOGIN_FIND_USER_FAIL,
      );
    }

    getRepository(User).merge(user, req.body);
    const result = await getRepository(User).save(user);
    res
      .status(custom.status.OK)
      .json(
        custom.JSONResponse(
          custom.status.OK,
          custom.message.USER_CHANGE_NICKNAME_SUCCESS,
          result,
        ),
      );
  } catch (err) {
    next(err);
  }
};

// User Delete
export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await getRepository(User).delete(req.params.id);

    if (!result) {
      throw new custom.CustomError(
        custom.status.BAD_REQUEST,
        custom.message.USER_WITHDRAW_FAIL,
      );
    }
    req.logOut();
    res
      .status(custom.status.OK)
      .json(
        custom.JSONResponse(
          custom.status.OK,
          custom.message.USER_WITHDRAW_SUCCESS,
          result,
        ),
      );
  } catch (err) {
    next(err);
  }
};

// findAll
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await getRepository(User).find();

    if (!users) {
      throw new custom.CustomError(
        custom.status.NOT_FOUND,
        custom.message.USER_FIND_ALL_FAIL,
      );
    }
    res
      .status(custom.status.OK)
      .json(
        custom.JSONResponse(
          custom.status.OK,
          custom.message.USER_FIND_ALL_SUCCESS,
          users,
        ),
      );
  } catch (err) {
    next(err);
  }
};

// findOne
export const findOne = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await getRepository(User).findOne(req.params.id);

    if (!user) {
      throw new custom.CustomError(
        custom.status.NOT_FOUND,
        custom.message.USER_FIND_ONE_FAIL,
      );
    }
    res
      .status(custom.status.OK)
      .json(
        custom.JSONResponse(
          custom.status.OK,
          custom.message.USER_FIND_ONE_SUCCESS,
          user,
        ),
      );
  } catch (err) {
    next(err);
  }
};
