import { Strategy as localStrategy } from "passport-local";
import bcrypt from "bcrypt";
import * as custom from "@utils/custom";
import { getRepository } from "typeorm";
import { User } from "@models/entity/User";

type VerifyCallback = (error: any, user?: any, info?: any) => void;

// local verify function
const localVerify = async (
  email: string,
  password: string,
  done: VerifyCallback,
) => {
  try {
    const user = await getRepository(User).findOne({ where: { email } });

    if (user) {
      const result = await bcrypt.compare(password, user.password);

      if (result) {
        done(null, user);
      } else {
        done(null, false, {
          message: custom.message.USER_LOGIN_MISS_MATCH_PW,
        });
      }
    } else {
      done(null, false, {
        message: custom.message.USER_LOGIN_FIND_USER_FAIL,
      });
    }
  } catch (err) {
    done(err);
  }
};

const strategy = new localStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  localVerify,
);

export default strategy;
