import express from "express";
import passport from "passport";
import { isLogined, isNotLogined } from "../middlewares/authenticate";
import { AuthController } from "../controllers";

const router = express.Router();

/*
  URL: /api/auth
*/

// OAuth
// - Kakao
router.get("/oauth/kakao", isNotLogined, passport.authenticate("kakao", { scope: ["profile"] }));
router.get("/oauth/kakao/callback", passport.authenticate("kakao"), AuthController.Callbacks);

// - Github
router.get("/oauth/github", isNotLogined, passport.authenticate("github", { scope: ["profile"] }));
router.get("/oauth/github/callback", passport.authenticate("github"), AuthController.Callbacks);

// - User update, User delete
router.put("/:id", isLogined, AuthController.updateUser);
router.delete("/:id", isLogined, AuthController.deleteUser);

// Local
// - Login, SignUp, Logout
router.post("/signup", isNotLogined, AuthController.createUser);
router.get("/logout", AuthController.logOut);
router.post("/", isNotLogined, passport.authenticate("local"), AuthController.Callbacks);
router.get("/:id", isLogined, AuthController.findOne); //  임시 테스트용
router.get("/", isLogined, AuthController.findAll); // 임시 테스트용

export default router;
