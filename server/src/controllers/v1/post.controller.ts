import { Request, Response, NextFunction } from "express";
import {
  customStatus,
  customMessage,
  customError,
  jsonResponse,
} from "../../utils";

import { getRepository } from "typeorm";
import { Post } from "../../models/entity/Post";

// findAll Posts
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const posts = await getRepository(Post).find({ relations: ["user"] });

    if (!posts) {
      throw new customError(
        customStatus.NOT_FOUND,
        customMessage.POST_FIND_ALL_FAIL,
      );
    }

    console.log(req.sessionID);

    res
      .status(customStatus.OK)
      .json(
        jsonResponse(
          customStatus.OK,
          customMessage.POST_FIND_ALL_SUCCESS,
          posts,
        ),
      );
  } catch (err) {
    next(err);
  }
};

// findOne Post
export const findOne = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const post = await getRepository(Post).findOne(req.params.id, {
      relations: ["user"],
    });

    if (!post) {
      throw new customError(customStatus.NOT_FOUND, customMessage.POST_NO_IDX);
    }

    res
      .status(customStatus.OK)
      .json(
        jsonResponse(customStatus.OK, customMessage.POST_FIND_SUCCESS, post),
      );
  } catch (err) {
    next(err);
  }
};

// Create Post
export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const post = new Post();
    post.title = req.body.title;
    post.content = req.body.content;
    post.hashtags = req.body.hashtags;
    post.user = req.body.userId;

    if (!post) {
      throw new customError(
        customStatus.NOT_FOUND,
        customMessage.POST_CREATE_FAIL,
      );
    }

    const result = await getRepository(Post).save(post);
    if (!result) {
      throw new customError(
        customStatus.NOT_FOUND,
        customMessage.POST_CREATE_FAIL,
      );
    }

    res
      .status(customStatus.CREATED)
      .json(
        jsonResponse(
          customStatus.CREATED,
          customMessage.POST_CREATE_SUCCESS,
          result,
        ),
      );
  } catch (err) {
    next(err);
  }
};

// Update Post
export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const post = await getRepository(Post).findOne(req.params.id);

    if (!post) {
      throw new customError(customStatus.NOT_FOUND, customMessage.POST_NO_IDX);
    }

    getRepository(Post).merge(post, req.body);
    const result = await getRepository(Post).save(post);

    if (!result) {
      throw new customError(customStatus.NOT_FOUND, customMessage.POST_NO_IDX);
    }

    res
      .status(customStatus.OK)
      .json(
        jsonResponse(customStatus.OK, customMessage.POST_FIND_SUCCESS, result),
      );
  } catch (err) {
    next(err);
  }
};

// Delete Post
export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const post = await getRepository(Post).findOne(req.params.id);

    if (!post) {
      throw new customError(customStatus.NOT_FOUND, customMessage.POST_NO_IDX);
    }

    const result = await getRepository(Post).delete(req.params.id);

    if (!result) {
      throw new customError(
        customStatus.NOT_FOUND,
        customMessage.POST_DELETE_FAIL,
      );
    }

    res
      .status(customStatus.OK)
      .json(jsonResponse(customStatus.OK, customMessage.POST_DELETE_SUCCESS));
  } catch (err) {
    next(err);
  }
};
