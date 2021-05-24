import express from "express";
import passport from "passport";
import verificationUser from "@middlewares/jwtverification.middleware";
import { AuthController } from "@controllers/v1";

const router = express.Router();

// OAuth
// - Kakao
router.get(
  "/oauth/kakao",
  passport.authenticate("kakao", { scope: ["profile"], session: false }),
);
router.get("/oauth/kakao/callback", AuthController.kakaoCallbacks);

// - Github
router.get(
  "/oauth/github",
  passport.authenticate("github", { scope: ["profile"], session: false }),
);
router.get("/oauth/github/callback", AuthController.githubCallbacks);

// Local
// - Login, SignUp, Logout
router.get("/logout", AuthController.logout);
router.post("/signup", AuthController.createUser);
router.post("/", AuthController.localCallbacks);

// - User Update, User Delete, Find One User
router.get("/:id", verificationUser, AuthController.findUser);
router.patch("/:id", verificationUser, AuthController.updateUserGeneral);
router.delete("/:id", verificationUser, AuthController.deleteUser);

router.get("/", verificationUser, AuthController.findUsers);

export default router;
