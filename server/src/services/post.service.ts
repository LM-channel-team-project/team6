import { Between, getRepository } from "typeorm";
import { Post } from "@models/entity/Post";
import * as custom from "@utils/custom";

// Get Posts
export const findPosts = async (postQuery: any) => {
  const { filter, page, limit } = postQuery;
  const week = custom.getWeek();

  var posts: Post[];

  switch (filter) {
    case "week":
      posts = await getRepository(Post).find({
        relations: ["user"],
        where: {
          createdAt: Between(week[0], week[1]),
        },
        order: {
          likes: "DESC",
        },
        skip: (page - 1) * limit,
        take: limit,
      });
      break;
    case "view":
      posts = await getRepository(Post).find({
        relations: ["user"],
        order: {
          views: "DESC",
        },
        skip: (page - 1) * limit,
        take: limit,
      });
      break;
    case "like":
      posts = await getRepository(Post).find({
        relations: ["user"],
        order: {
          likes: "DESC",
        },
        skip: (page - 1) * limit,
        take: limit,
      });
      break;
    case "latest":
      posts = await getRepository(Post).find({
        relations: ["user"],
        order: {
          createdAt: "DESC",
        },
        skip: (page - 1) * limit,
        take: limit,
      });
      break;
    default:
      posts = await getRepository(Post).find({
        relations: ["user"],
        skip: (page - 1) * limit,
        take: limit,
      });
      break;
  }

  if (!posts) {
    throw new custom.CustomError(400, custom.message.POST_FIND_ALL_FAIL);
  }
  return posts;
};

// Get Post (increment view)
export const findPost = async (postId: string) => {
  const post = await getRepository(Post).findOne(postId, {
    relations: ["user"],
  });
  if (!post) {
    throw new custom.CustomError(400, custom.message.POST_NO_IDX);
  }
  const postRecord = getRepository(Post).merge(post, { views: post.views + 1 });
  const result = await getRepository(Post).save(postRecord);
  return result;
};

// Create Post
export const createPost = async (postBody: Post, user: any) => {
  const { title, content } = postBody;
  const postRecord = getRepository(Post).create({
    title,
    content,
    user: user.id,
  });
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
export const clickLikePost = async (postId: string) => {
  const post = await getRepository(Post).findOne(postId, {
    relations: ["user"],
  });
  if (!post) {
    throw new custom.CustomError(400, custom.message.POST_NO_IDX);
  }
  const postRecord = getRepository(Post).merge(post, { likes: post.likes + 1 });
  const result = await getRepository(Post).save(postRecord);
  return result;
};
