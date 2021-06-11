import { Between, getRepository } from "typeorm";
import { Post } from "@models/entity/Post";
import { resJSON, resMSG, resError, getWeek } from "@utils/module";

// Get Posts
export const findPosts = async (postQuery: any) => {
  const { page, limit } = postQuery;

  const posts = await getRepository(Post).find({
    relations: ["user"],
    skip: (page - 1) * limit,
    take: limit,
  });

  if (!posts) {
    throw new resError(400, resMSG.POST_FIND_ALL_FAIL);
  }
  return posts;
};

export const findPostsByWeek = async (postQuery: any) => {
  const { page, limit } = postQuery;
  const week = getWeek();

  const posts = await getRepository(Post).find({
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

  if (!posts) {
    throw new resError(400, resMSG.POST_FIND_ALL_FAIL);
  }
  return posts;
};

export const findPostsByView = async (postQuery: any) => {
  const { page, limit } = postQuery;

  const posts = await getRepository(Post).find({
    relations: ["user"],
    order: {
      views: "DESC",
    },
    skip: (page - 1) * limit,
    take: limit,
  });

  if (!posts) {
    throw new resError(400, resMSG.POST_FIND_ALL_FAIL);
  }
  return posts;
};

export const findPostsByLike = async (postQuery: any) => {
  const { page, limit } = postQuery;

  const posts = await getRepository(Post).find({
    relations: ["user"],
    order: {
      likes: "DESC",
    },
    skip: (page - 1) * limit,
    take: limit,
  });

  if (!posts) {
    throw new resError(400, resMSG.POST_FIND_ALL_FAIL);
  }
  return posts;
};

export const findPostsByLatest = async (postQuery: any) => {
  const { page, limit } = postQuery;

  const posts = await getRepository(Post).find({
    relations: ["user"],
    order: {
      createdAt: "DESC",
    },
    skip: (page - 1) * limit,
    take: limit,
  });

  if (!posts) {
    throw new resError(400, resMSG.POST_FIND_ALL_FAIL);
  }
  return posts;
};

// Get Post (increment view)
export const findPost = async (postId: string) => {
  const post = await getRepository(Post).findOne(postId, {
    relations: ["user"],
  });
  if (!post) {
    throw new resError(400, resMSG.POST_NOT_EXIST_POST);
  }
  const postRecord = getRepository(Post).merge(post, { views: post.views + 1 });
  const result = await getRepository(Post).save(postRecord);
  return result;
};

// Create Post
export const createPost = async (postBody: Post, user: any, postFile?: any) => {
  const { title, content } = postBody;

  const serverURL =
    process.env.NODE_ENV === "production"
      ? process.env.SERVER_URL_PRODUCTION
      : process.env.ERVER_URL_DEVELOPMENT;

  const postRecord = getRepository(Post).create({
    title,
    content,
    user: user.id,
    postImg: postFile && `${serverURL}/uploads/${postFile["filename"]}`,
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
    throw new resError(400, resMSG.POST_NOT_EXIST_POST);
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
    throw new resError(400, resMSG.POST_NOT_EXIST_POST);
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
    throw new resError(400, resMSG.POST_NOT_EXIST_POST);
  }
  const postRecord = getRepository(Post).merge(post, { likes: post.likes + 1 });
  const result = await getRepository(Post).save(postRecord);
  return result;
};
