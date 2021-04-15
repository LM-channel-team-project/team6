import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";

import { customStatus, customMessage, customError, jsonResponse } from "../module";

import { User } from "../entity/User";

// 모든 유저 조회
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

// 특정 유저 조회
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

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = getRepository(User).create(req.body);

    if (!user) {
      throw new customError(customStatus.NOT_FOUND, customMessage.USER_SIGNUP_FAIL);
    }
    const result = await getRepository(User).save(user);
    res
      .status(customStatus.OK)
      .json(jsonResponse(customStatus.CREATED, customMessage.USER_SIGNUP_SUCCESS, result));
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await getRepository(User).findOne(req.params.id);

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
    res
      .status(customStatus.OK)
      .json(jsonResponse(customStatus.OK, customMessage.USER_WITHDRAW_SUCCESS, result));
  } catch (err) {
    next(err);
  }
};
