import express from "express";
import { isAuthenticated, isNotAuthenticated } from "@middlewares/authenticate";
import { PostController } from "@controllers/v1/";

const router = express.Router();

// Post filter (QS=week, latest)
router.patch("/like/:id", PostController.clickLikePost);
router.get("/:id", PostController.findPost);
router.patch("/:id", isAuthenticated, PostController.updatePost);
router.delete("/:id", isAuthenticated, PostController.deletePost);

router.post("/", isAuthenticated, PostController.createPost);
router.get("/", PostController.findPosts);

export default router;
