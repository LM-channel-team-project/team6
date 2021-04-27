import passport from "passport";
import localStrategy from "./strategy/localStrategy";
import kakaoStrategy from "./strategy/kakaoStrategy";
import githubStrategy from "./strategy/githubStrategy";

import { getRepository } from "typeorm";
import { User } from "../models/entity/User";

const passportInit = () => {
  passport.serializeUser((user: any, done: (error: any, user?: any, info?: any) => void) => {
    done(null, user.id);
  });
  passport.deserializeUser(async (id: any, done: (error: any, user?: any, info?: any) => void) => {
    await getRepository(User)
      .findOne({ where: { id: id } })
      .then((user) => done(null, user))
      .catch((err) => done(err));
  });

  passport.use("local", localStrategy);
  passport.use("kakao", kakaoStrategy);
  passport.use("github", githubStrategy);
};

export default passportInit;
