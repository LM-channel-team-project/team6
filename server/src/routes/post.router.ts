import express from "express";
import { PostController } from "@controllers/v1/";

const router = express.Router();

router.get("/", PostController.findAll);
router.get("/:id", PostController.findOne);
router.post("/", PostController.createPost);
router.put("/:id", PostController.updatePost);
router.delete("/:id", PostController.deletePost);

export default router;
