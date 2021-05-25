import { Strategy as localStrategy } from "passport-local";
import bcrypt from "bcrypt";

import { resMSG } from "@utils/module";
import { getRepository } from "typeorm";
import { User } from "@models/entity/User";

type VerifyCallback = (error: any, user?: any, info?: any) => void;

// local verify function
const localVerify = async (
  email: string,
  password: string,
  done: VerifyCallback,
) => {
  let user;
  try {
    user = await getRepository(User).findOne({ where: { email } });
    if (!user)
      return done(null, false, {
        message: resMSG.AUTH_NOT_EXIST_USER,
      });

    const result = await bcrypt.compare(password, user.password);

    if (!result)
      return done(null, false, {
        message: resMSG.AUTH_MISS_MATCH_PW,
      });
  } catch (err) {
    done(err);
  }
  done(null, user);
};

const strategy = new localStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  localVerify,
);

export default strategy;
