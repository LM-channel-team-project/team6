import { NextFunction, Request, Response } from "express";
import { customStatus, customMessage, customError, jsonResponse } from "../utils";
import { getRepository } from "typeorm";
import { User } from "../models/entity/User";
import bcrypt from "bcrypt";

/*
  URL: /api/auth
  User
    id: number;
    nickname: string;
    username: string;
    email: string;
    password: string;
    oauthId: string;
    provider: string;
*/

// passport callbacks
export const Callbacks = async (req: Request, res: Response, next: NextFunction) => {
  res.status(customStatus.OK).json(jsonResponse(customStatus.OK, customMessage.USER_LOGIN_SUCCESS));
};

// signUp, Logout
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { nickname, username, email, password } = req.body;

  try {
    const user = await getRepository(User).findOne({ where: { email } });
    if (user) {
      throw new customError(customStatus.BAD_REQUEST, customMessage.USER_ALREADY_USED_EMAIL);
    }
    const hash = await bcrypt.hash(password, 12);

    const result = await getRepository(User).save({
      email,
      nickname,
      username,
      password: hash,
    });

    res
      .status(customStatus.OK)
      .json(jsonResponse(customStatus.CREATED, customMessage.USER_SIGNUP_SUCCESS, result));
  } catch (err) {
    next(err);
  }
};

export const logOut = (req: Request, res: Response, next: NextFunction) => {
  req.logOut();
  res.redirect(`${process.env.SERVER_URL_DEVELOPMENT}/api/auth`);
};

// User Update, Delete
export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await getRepository(User).findOne({ where: { id: req.params.id } });

    if (!user) {
      throw new customError(customStatus.NOT_FOUND, customMessage.NOT_FOUND);
    }

    getRepository(User).merge(user, req.body);
    const result = await getRepository(User).save(user);
    res
      .status(customStatus.OK)
      .json(jsonResponse(customStatus.OK, customMessage.USER_CHANGE_NICKNAME_SUCCESS, result));
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await getRepository(User).delete(req.params.id);

    if (!result) {
      throw new customError(customStatus.NOT_FOUND, customMessage.USER_WITHDRAW_FAIL);
    }
    req.logOut();
    res
      .status(customStatus.OK)
      .json(jsonResponse(customStatus.OK, customMessage.USER_WITHDRAW_SUCCESS, result));
  } catch (err) {
    next(err);
  }
};

// findA
export const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await getRepository(User).find();

    if (!users) {
      throw new customError(customStatus.NOT_FOUND, customMessage.USER_FIND_ALL_FAIL);
    }
    res
      .status(customStatus.OK)
      .json(jsonResponse(customStatus.OK, customMessage.USER_FIND_ALL_SUCCESS, users));
  } catch (err) {
    next(err);
  }
};

export const findOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await getRepository(User).findOne(req.params.id);

    if (!user) {
      throw new customError(customStatus.NOT_FOUND, customMessage.USER_FIND_ONE_FAIL);
    }
    res
      .status(customStatus.OK)
      .json(jsonResponse(customStatus.OK, customMessage.USER_FIND_ONE_SUCCESS, user));
  } catch (err) {
    next(err);
  }
};
