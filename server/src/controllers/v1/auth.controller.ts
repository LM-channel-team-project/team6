import { Request, Response, NextFunction } from "express";
import { createToken, verifyToken } from "@utils/jwt";
import * as custom from "@utils/custom";
import * as AuthService from "@services/auth.service";
import passport from "passport";

// Get Users
export const findUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AuthService.findUsers();
    res
      .status(200)
      .json(
        custom.JSONResponse(
          200,
          custom.message.USER_FIND_ALL_SUCCESS,
          true,
          result,
        ),
      );
  } catch (error) {
    next(error);
  }
};

// Get User
export const findUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AuthService.findUser(req.params.id);
    res
      .status(200)
      .json(
        custom.JSONResponse(
          200,
          custom.message.USER_FIND_ONE_SUCCESS,
          true,
          result,
        ),
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
        custom.JSONResponse(
          201,
          custom.message.USER_SIGNUP_SUCCESS,
          true,
          result,
        ),
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
          true,
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
          true,
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
        custom.JSONResponse(
          200,
          custom.message.USER_WITHDRAW_SUCCESS,
          true,
          result,
        ),
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
      .json(custom.JSONResponse(200, custom.message.USER_LOGOUT_SUCCESS, true));
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
export const githubCallbacks = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  passport.authenticate(
    "github",
    { session: false },
    async (err: any, user: any, info: any) => {
      if (err || !user) {
        const error = new custom.CustomError(
          400,
          custom.message.USER_LOGIN_FAIL,
        );
        next(error);
      }

      req.login(user, (err) => {
        if (err) {
          const error = new custom.CustomError(
            400,
            custom.message.USER_LOGIN_FAIL,
          );
          next(error);
        }
      });

      const token = await createToken(user);
      const clientURL =
        process.env.NODE_ENV === "production"
          ? process.env.CLIENT_URL_PRODUCTION
          : process.env.CLIENT_URL_DEVELOPMENT;

      return res
        .status(200)
        .redirect(`${clientURL}/login?access_token=${token}`);
    },
  )(req, res);
};

export const kakaoCallbacks = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  passport.authenticate(
    "kakao",
    { session: false },
    async (err: any, user: any, info: any) => {
      if (err || !user) {
        const error = new custom.CustomError(
          400,
          custom.message.USER_LOGIN_FAIL,
        );
        next(error);
      }

      req.login(user, (err) => {
        if (err) {
          const error = new custom.CustomError(
            400,
            custom.message.USER_LOGIN_FAIL,
          );
          next(error);
        }
      });

      const token = await createToken(user);
      const clientURL =
        process.env.NODE_ENV === "production"
          ? process.env.CLIENT_URL_PRODUCTION
          : process.env.CLIENT_URL_DEVELOPMENT;

      return res
        .status(200)
        .redirect(`${clientURL}/login?access_token=${token}`);
    },
  )(req, res);
};

export const localCallbacks = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  passport.authenticate(
    "local",
    { session: false },
    async (err: any, user: any, info: any) => {
      if (err || !user) {
        const error = new custom.CustomError(
          400,
          custom.message.USER_LOGIN_FAIL,
        );
        next(error);
      }

      req.login(user, (err) => {
        if (err) {
          const error = new custom.CustomError(
            400,
            custom.message.USER_LOGIN_FAIL,
          );
          next(error);
        }
      });

      const token = await createToken(user);

      return res
        .status(200)
        .json(
          custom.JSONResponse(
            200,
            custom.message.USER_LOGIN_SUCCESS,
            true,
            token,
          ),
        );
    },
  )(req, res);
};
