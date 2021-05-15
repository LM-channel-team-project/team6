import { Request, Response, NextFunction } from "express";
import * as custom from "@utils/custom";
import * as PostService from "@services/post.service";

// findAll Posts
export const findPosts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await PostService.findPosts(req.query);
    if (!result) {
      throw new custom.CustomError(400, custom.message.POST_FIND_ALL_FAIL);
    }
    res
      .status(200)
      .json(
        custom.JSONResponse(200, custom.message.POST_FIND_ALL_SUCCESS, result),
      );
  } catch (error) {
    next(error);
  }
};

// findOne Post
export const findPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await PostService.findPost(req.params.id);
    if (!result) {
      throw new custom.CustomError(400, custom.message.POST_NO_IDX);
    }
    res
      .status(200)
      .json(custom.JSONResponse(200, custom.message.POST_FIND_SUCCESS, result));
  } catch (error) {
    next(error);
  }
};

// Create Post
export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await PostService.createPost(req.body, req.user);
    if (!result) {
      throw new custom.CustomError(400, custom.message.POST_CREATE_FAIL);
    }
    res
      .status(201)
      .json(
        custom.JSONResponse(201, custom.message.POST_CREATE_SUCCESS, result),
      );
  } catch (error) {
    next(error);
  }
};

// Update Post
export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await PostService.updatePost(req.body, req.params.id);
    if (!result) {
      throw new custom.CustomError(400, custom.message.POST_UPDATE_FAIL);
    }
    res
      .status(200)
      .json(
        custom.JSONResponse(200, custom.message.POST_UPDATE_SUCCESS, result),
      );
  } catch (error) {
    next(error);
  }
};

// Delete Post
export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await PostService.deletePost(req.params.id);
    if (!result) {
      throw new custom.CustomError(400, custom.message.POST_DELETE_FAIL);
    }
    res
      .status(200)
      .json(custom.JSONResponse(200, custom.message.POST_DELETE_SUCCESS));
  } catch (error) {
    next(error);
  }
};

export const clickLikePost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await PostService.clickLikePost(req.params.id);
    if (!result) {
      throw new custom.CustomError(400, custom.message.NULL_VALUE);
    }
    res.status(200).json(custom.JSONResponse(200, custom.message.OK, result));
  } catch (error) {
    next(error);
  }
};
