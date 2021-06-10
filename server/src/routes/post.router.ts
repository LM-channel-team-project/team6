import express from "express";
import fs from "fs";
import path from "path";
import multer from "multer";
import verificationUser from "@middlewares/jwtverification.middleware";
import verifyPostOwner from "@middlewares/verifyPostOwner.middleware";
import { PostController } from "@controllers/v1";

const root = path.dirname(path.dirname(__dirname));
const dir = path.join(root, "uploads");

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(
      null,
      path.basename(file.originalname, ext) + new Date().valueOf() + ext,
    );
  },
});

const upload = multer({ dest: "./uploads/", storage: storage });

// ----------------------------------------------------------------

const router = express.Router();

// Post filter (QS=week, latest)
router.patch(
  "/like/:id",
  [verificationUser, verifyPostOwner],
  PostController.clickLikePost,
);

router.get("/week", verificationUser, PostController.findPostsByWeek);
router.get("/view", verificationUser, PostController.findPostsByView);
router.get("/like", verificationUser, PostController.findPostsByLike);
router.get("/latest", verificationUser, PostController.findPostsByLatest);

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
router.post(
  "/",
  verificationUser,
  upload.single("postImg"),
  PostController.createPost,
);
router.get("/:id", verificationUser, PostController.findPost);

router.get("/", verificationUser, PostController.findPosts);

export default router;
