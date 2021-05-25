import express from "express";
import verificationUser from "@middlewares/jwtverification.middleware";
import verifyPostOwner from "@middlewares/verifyPostOwner.middleware";
import { PostController } from "@controllers/v1";

const router = express.Router();

// Post filter (QS=week, latest)
router.patch(
  "/like/:id",
  [verificationUser, verifyPostOwner],
  PostController.clickLikePost,
);

router.patch(
  "/:id",
  [verificationUser, verifyPostOwner],
  PostController.updatePost,
);
router.delete(
  "/:id",
  [verificationUser, verifyPostOwner],
  PostController.deletePost,
);
router.get("/:id", verificationUser, PostController.findPost);
router.post("/", verificationUser, PostController.createPost);
router.get("/", verificationUser, PostController.findPosts);

export default router;
