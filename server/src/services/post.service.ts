import { getRepository } from "typeorm";
import { Post } from "@models/entity/Post";
import * as custom from "@utils/custom";

// Get Posts
export const findPosts = async (postQuery: any) => {
  const { filter, page, limit } = postQuery;
  const posts = await getRepository(Post).find({
    relations: ["user"],
    skip: (page - 1) * limit,
    take: limit,
  });
  if (!posts) {
    throw new custom.CustomError(400, custom.message.POST_FIND_ALL_FAIL);
  }
  return posts;
};

// Get Post
export const findPost = async (postId: string) => {
  const post = await getRepository(Post).findOne(postId, {
    relations: ["user"],
  });
  if (!post) {
    throw new custom.CustomError(400, custom.message.POST_NO_IDX);
  }
  return post;
};

// Create Post
export const createPost = async (postBody: Post) => {
  const { title, content, hashtags, user } = postBody;
  const postRecord = getRepository(Post).create({
    title,
    content,
    hashtags,
    user,
  });
  console.log(postBody, postRecord); // Test
  const result = await getRepository(Post).save(postRecord);
  return result;
};

// Update Post
export const updatePost = async (postBody: Post, postId: string) => {
  const post = await getRepository(Post).findOne(postId, {
    relations: ["user"],
  });
  if (!post) {
    throw new custom.CustomError(400, custom.message.POST_NO_IDX);
  }
  const postRecord = getRepository(Post).merge(post, postBody);
  const result = await getRepository(Post).save(postRecord);
  return result;
};

// Delete Post
export const deletePost = async (postId: string) => {
  const post = await getRepository(Post).findOne(postId, {
    relations: ["user"],
  });
  if (!post) {
    throw new custom.CustomError(400, custom.message.POST_NO_IDX);
  }
  const result = await getRepository(Post).delete(postId);
  return result;
};

// Like Clicked
export const clickLikePost = async () => {};

// Order by Week
export const filterWeekPost = async () => {};

// Order by Latest
export const filterLatestPost = async () => {};

// Order by Like
export const filterLikePost = async () => {};
