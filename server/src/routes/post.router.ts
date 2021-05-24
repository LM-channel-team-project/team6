import express from "express";
import {
  isAuthenticated,
  isNotAuthenticated,
} from "@middlewares/authenticate.middleware";
import verificationUser from "@middlewares/jwtverification.middleware";
import { PostController } from "@controllers/v1/";

const router = express.Router();

// Post filter (QS=week, latest)
router.patch("/like/:id", verificationUser, PostController.clickLikePost);
router.get("/:id", verificationUser, PostController.findPost);
router.patch(
  "/:id",
  isAuthenticated,
  verificationUser,
  PostController.updatePost,
);
router.delete(
  "/:id",
  isAuthenticated,
  verificationUser,
  PostController.deletePost,
);

router.post("/", isAuthenticated, verificationUser, PostController.createPost);
router.get("/", verificationUser, PostController.findPosts);

export default router;
