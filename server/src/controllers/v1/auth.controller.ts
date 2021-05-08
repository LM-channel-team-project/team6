import { Request, Response, NextFunction } from "express";
import * as custom from "@utils/custom";
import * as AuthService from "@services/auth.service";

// Get Users
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AuthService.findAll();
    res
      .status(200)
      .json(
        custom.JSONResponse(200, custom.message.USER_FIND_ALL_SUCCESS, result),
      );
  } catch (error) {
    next(error);
  }
};

// Get User
export const findOne = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AuthService.findOne(req.params.id);
    res
      .status(200)
      .json(
        custom.JSONResponse(200, custom.message.USER_FIND_ONE_SUCCESS, result),
      );
  } catch (error) {
    next(error);
  }
};

// Create and Save
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AuthService.createUser(req.body);
    res
      .status(201)
      .json(
        custom.JSONResponse(201, custom.message.USER_SIGNUP_SUCCESS, result),
      );
  } catch (error) {
    next(error);
  }
};

// Update General Information and Save
export const updateUserGeneral = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AuthService.updateUserGeneral(req.body, req.params.id);
    res
      .status(200)
      .json(
        custom.JSONResponse(
          200,
          custom.message.USER_CHANGE_NICKNAME_SUCCESS,
          result,
        ),
      );
  } catch (error) {
    next(error);
  }
};

// Update Password and Save
export const updateUserPassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AuthService.updateUserPassword(
      req.body,
      req.params.id,
    );
    res
      .status(200)
      .json(
        custom.JSONResponse(
          200,
          custom.message.USER_CHANGE_NICKNAME_SUCCESS,
          result,
        ),
      );
  } catch (error) {
    next(error);
  }
};

// Delete
export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AuthService.deleteUser(req.params.id);
    req.logout();
    res
      .status(200)
      .json(
        custom.JSONResponse(200, custom.message.USER_WITHDRAW_SUCCESS, result),
      );
  } catch (error) {
    next(error);
  }
};

// Logout
export const logout = (req: Request, res: Response, next: NextFunction) => {
  try {
    req.logout();
    res
      .status(200)
      .json(custom.JSONResponse(200, custom.message.USER_LOGOUT_SUCCESS));
  } catch (error) {
    const err = new custom.CustomError(
      400,
      custom.message.USER_LOGOUT_FAIL,
      error,
    );
    next(err);
  }
};

// Callbacks
export const callbacks = (req: Request, res: Response) => {
  // change this code
  res
    .status(200)
    .json(custom.JSONResponse(200, custom.message.USER_LOGIN_SUCCESS));
};
