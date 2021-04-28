import express from "express";
import passport from "passport";
import { isAuthenticated, isNotAuthenticated } from "@middlewares/authenticate";
import { AuthController } from "@controllers/v1";

const router = express.Router();

/*
  URL: /api/auth
*/

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

// - User Update, User Delete, Find One User
router.get("/:id", isAuthenticated, AuthController.findOne);
router.put("/:id", isAuthenticated, AuthController.updateUser);
router.delete("/:id", isAuthenticated, AuthController.deleteUser);

// Local
// - Login, SignUp, Logout
router.get("/logout", isAuthenticated, AuthController.logOut);
router.post("/signup", isNotAuthenticated, AuthController.createUser);
router.post(
  "/",
  isNotAuthenticated,
  passport.authenticate("local"),
  AuthController.callbacks,
);

router.get("/", isAuthenticated, AuthController.findAll);

export default router;
