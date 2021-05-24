import express from "express";
import passport from "passport";
import verificationUser from "@middlewares/jwtverification.middleware";
import { AuthController } from "@controllers/v1";

const router = express.Router();

// Oauth - Kakao
router.get(
  "/oauth/kakao",
  passport.authenticate("kakao", { scope: ["profile"], session: false }),
);
router.get("/oauth/kakao/callback", AuthController.authKakaoLogin);

// Oauth - Github
router.get(
  "/oauth/github",
  passport.authenticate("github", { scope: ["profile"], session: false }),
);
router.get("/oauth/github/callback", AuthController.authGithubLogin);

// Local
// - Login, SignUp, Logout
router.get("/logout", verificationUser, AuthController.authLogout);
router.post("/signin", AuthController.authLocalLogin);
router.post("/signup", AuthController.authCreateUser);

// - User Update, User Delete, Find One User
router.get("/:id", verificationUser, AuthController.authFindOne);
router.patch("/:id", verificationUser, AuthController.authUpdateUserGeneral);
router.delete("/:id", verificationUser, AuthController.authDeleteUser);

router.get("/", verificationUser, AuthController.authFindAll);

export default router;
