import express from "express";
import AuthRouter from "./authRouter";
import PostRouter from "./postRouter";

const router = express.Router();

router.use("/auth", AuthRouter);
router.use("/post", PostRouter);

export default router;
