import express from "express";
import AuthRouter from "./auth.router";
import PostRouter from "./post.router";

const router = express.Router();

router.use("/auth", AuthRouter);
router.use("/post", PostRouter);

export default router;
