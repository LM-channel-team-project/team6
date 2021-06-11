import { Request, Response, NextFunction } from "express";
import { resJSON, resMSG, resError } from "@utils/module";
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
      throw new resError(400, resMSG.POST_FIND_ALL_FAIL);
    }
    res.status(200).json(resJSON(true, resMSG.POST_FIND_ALL_SUCCESS, result));
  } catch (error) {
    next(error);
  }
};

export const findPostsByWeek = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await PostService.findPostsByWeek(req.query);
    if (!result) {
      throw new resError(400, resMSG.POST_FIND_ALL_FAIL);
    }
    res.status(200).json(resJSON(true, resMSG.POST_FIND_ALL_SUCCESS, result));
  } catch (error) {
    next(error);
  }
};

export const findPostsByView = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await PostService.findPostsByView(req.query);
    if (!result) {
      throw new resError(400, resMSG.POST_FIND_ALL_FAIL);
    }
    res.status(200).json(resJSON(true, resMSG.POST_FIND_ALL_SUCCESS, result));
  } catch (error) {
    next(error);
  }
};

export const findPostsByLike = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await PostService.findPostsByLike(req.query);
    if (!result) {
      throw new resError(400, resMSG.POST_FIND_ALL_FAIL);
    }
    res.status(200).json(resJSON(true, resMSG.POST_FIND_ALL_SUCCESS, result));
  } catch (error) {
    next(error);
  }
};

export const findPostsByLatest = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await PostService.findPostsByLatest(req.query);
    if (!result) {
      throw new resError(400, resMSG.POST_FIND_ALL_FAIL);
    }
    res.status(200).json(resJSON(true, resMSG.POST_FIND_ALL_SUCCESS, result));
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
      throw new resError(400, resMSG.POST_NOT_EXIST_POST);
    }
    res.status(200).json(resJSON(true, resMSG.POST_FIND_SUCCESS, result));
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
    const result = await PostService.createPost(req.body, req.user, req.file);
    if (!result) {
      throw new resError(400, resMSG.POST_CREATE_FAIL);
    }
    res.status(201).json(resJSON(true, resMSG.POST_CREATE_SUCCESS, result));
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
      throw new resError(400, resMSG.POST_UPDATE_FAIL);
    }
    res.status(200).json(resJSON(true, resMSG.POST_UPDATE_SUCCESS, result));
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
      throw new resError(400, resMSG.POST_DELETE_FAIL);
    }
    res.status(200).json(resJSON(true, resMSG.POST_DELETE_SUCCESS));
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
      throw new resError(400, resMSG.BAD_REQUEST);
    }
    res.status(200).json(resJSON(true, resMSG.OK, result));
  } catch (error) {
    next(error);
  }
};
