import express from "express";
import passport from "passport";
import { isAuthenticated, isNotAuthenticated } from "@middlewares/authenticate";
import { AuthController } from "@controllers/v1";
/*
  URL: /api/auth
*/

const router = express.Router();

// OAuth
// - Kakao
router.get(
  "/oauth/kakao",
  isNotAuthenticated,
  passport.authenticate("kakao", { scope: ["profile"] }),
);
router.get(
  "/oauth/kakao/callback",
  passport.authenticate("kakao"),
  AuthController.callbacks,
);

// - Github
router.get(
  "/oauth/github",
  isNotAuthenticated,
  passport.authenticate("github", { scope: ["profile"] }),
);
router.get(
  "/oauth/github/callback",
  passport.authenticate("github"),
  AuthController.callbacks,
);

// Local
// - Login, SignUp, Logout
router.get("/logout", isAuthenticated, AuthController.logout);
router.post("/signup", isNotAuthenticated, AuthController.createUser);
router.post(
  "/",
  isNotAuthenticated,
  passport.authenticate("local"),
  AuthController.callbacks,
);

// - User Update, User Delete, Find One User
router.get("/:id", isAuthenticated, AuthController.findOne);
router.patch("/:id", isAuthenticated, AuthController.updateUserGeneral);
router.delete("/:id", isAuthenticated, AuthController.deleteUser);

router.get("/", isAuthenticated, AuthController.findAll);

export default router;
