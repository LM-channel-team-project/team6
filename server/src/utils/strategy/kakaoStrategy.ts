import dotenv from "dotenv";
import { Strategy as kakaoStrategy } from "passport-kakao";

import { getRepository } from "typeorm";
import { User } from "../../models/entity/User";

dotenv.config();

type VerifyCallback = (error: any, user?: any, info?: any) => void;

// server domain
const serverDomain =
  process.env.NODE_ENV === "production"
    ? process.env.SERVER_URL_PRODUCTION
    : process.env.SERVER_URL_DEVELOPMENT;

// kakao oauth configuration
const kakaoConfig = {
  clientID: process.env.KAKAO_CLIENT_ID || "default",
  clientSecret: process.env.KAKAO_CLIENT_SECRET || "default",
  callbackURL: `${serverDomain}/api/v1/auth/oauth/kakao/callback`,
};

// kakao oauth verify function
const kakaoVerify = async (
  accessToken: string,
  refreshToken: string,
  profile: any,
  done: VerifyCallback,
) => {
  const {
    provider,
    id,
    username,
    _json: {
      kakao_account: { email },
    },
  } = profile;

  try {
    const user = await getRepository(User).findOne({
      where: { oauthId: id, provider: "kakao" },
    });

    if (user) {
      done(null, user);
    } else {
      const newUser = getRepository(User).create({
        email,
        password: accessToken,
        nickname: username,
        username: username,
        oauthId: id,
        provider: provider,
      });

      await getRepository(User).save(newUser);

      done(null, newUser);
    }
  } catch (err) {
    done(err);
  }
};

const strategy = new kakaoStrategy(kakaoConfig, kakaoVerify);

export default strategy;
