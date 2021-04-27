import passport from "passport";
import localStrategy from "./strategy/localStrategy";
import kakaoStrategy from "./strategy/kakaoStrategy";
import githubStrategy from "./strategy/githubStrategy";

import { getRepository } from "typeorm";
import { User } from "../models/entity/User";

type VerifyCallback = (error: any, user?: any, info?: any) => void;

const passportConfig = () => {
  passport.serializeUser((user: any, done: VerifyCallback) => {
    done(null, user.id);
  });
  passport.deserializeUser(async (id: any, done: VerifyCallback) => {
    try {
      const user = await getRepository(User).findOne({ where: { id: id } });
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

  passport.use("local", localStrategy);
  passport.use("kakao", kakaoStrategy);
  passport.use("github", githubStrategy);
};

export default passportConfig;
