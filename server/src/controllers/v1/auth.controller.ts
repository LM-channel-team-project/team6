import { Request, Response, NextFunction } from "express";
import { createToken, verifyToken } from "@utils/jwt";
import { resJSON, resMSG, resError } from "@utils/module";
import * as AuthService from "@services/auth.service";
import passport from "passport";

const clientURL =
  process.env.NODE_ENV === "production"
    ? process.env.CLIENT_URL_PRODUCTION
    : process.env.CLIENT_URL_DEVELOPMENT;

// Get Users
export const authFindAll = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AuthService.findUsers();
    res.status(200).json(resJSON(true, resMSG.AUTH_FIND_ALL_SUCCESS, result));
  } catch (err) {
    next(err);
  }
};

// Get User
export const authFindOne = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AuthService.findUser(req.params.id);
    res.status(200).json(resJSON(true, resMSG.AUTH_FIND_ONE_SUCCESS, result));
  } catch (err) {
    next(err);
  }
};

// Create and Save
export const authCreateUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AuthService.createUser(req.body);
    res.status(201).json(resJSON(true, resMSG.AUTH_SIGNUP_SUCCESS, result));
  } catch (err) {
    next(err);
  }
};

// Update General Information and Save
export const authUpdateUserGeneral = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AuthService.updateUserGeneral(req.body, req.params.id);
    res
      .status(200)
      .json(resJSON(true, resMSG.AUTH_CHANGE_NICKNAME_SUCCESS, result));
  } catch (err) {
    next(err);
  }
};

// Update Password and Save
export const authUpdateUserPassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AuthService.updateUserPassword(
      req.body,
      req.params.id,
    );
    res.status(200).json(resJSON(true, resMSG.AUTH_CHANGE_PW_SUCCESS, result));
  } catch (err) {
    next(err);
  }
};

// Delete
export const authDeleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AuthService.deleteUser(req.params.id);
    return res
      .status(200)
      .cookie("x-access-token", "")
      .json(resJSON(true, resMSG.AUTH_DELETE_SUCCESS, result));
  } catch (err) {
    next(err);
  }
};

// Logout
export const authLogout = (req: Request, res: Response, next: NextFunction) => {
  return res
    .status(200)
    .cookie("x-access-token", "")
    .json(resJSON(true, resMSG.AUTH_LOGOUT_SUCCESS));
};

// Callbacks
export const authGithubLogin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user: any = req.query.code;

  if (!user) {
    const error = new resError(400, resMSG.AUTH_LOGIN_FAIL);
    next(error);
  }

  const token = await createToken(user);

  res.status(200).json(resJSON(true, resMSG.AUTH_LOGIN_SUCCESS, token));
};

export const authKakaoLogin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user: any = req.query.code;

  if (!user) {
    const error = new resError(400, resMSG.AUTH_LOGIN_FAIL);
    next(error);
  }

  const token = await createToken(user);

  res.status(200).json(resJSON(true, resMSG.AUTH_LOGIN_SUCCESS, token));
};

export const authLocalLogin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user = req.body;

  if (!user) {
    const error = new resError(400, resMSG.AUTH_LOGIN_FAIL);
    next(error);
  }

  const token = await createToken(user);
  res.status(200).json(resJSON(true, resMSG.AUTH_LOGIN_SUCCESS, token));
};
