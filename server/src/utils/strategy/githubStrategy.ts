import { Strategy as githubStrategy } from "passport-github";
import dotenv from "dotenv";
import { getRepository } from "typeorm";
import { User } from "../../models/entity/User";

dotenv.config();

type VerifyCallback = (error: any, user?: any, info?: any) => void;

const serverDomain =
  process.env.NODE_ENV === "production"
    ? process.env.SERVER_URL_PRODUCTION
    : process.env.SERVER_URL_DEVELOPMENT;

const githubConfig = {
  clientID: process.env.GITHUB_CLIENT_ID || "default",
  clientSecret: process.env.GITHUB_CLIENT_SECRET || "default",
  callbackURL: `${serverDomain}/api/auth/oauth/github/callback`,
};

const githubVerify = async (
  accessToken: string,
  refreshToken: string,
  profile: any,
  done: VerifyCallback,
) => {
  const {
    provider,
    displayName,
    username,
    _json: { id, email },
  } = profile;

  try {
    const user = await getRepository(User).findOne({ where: { oauthId: id, provider: "github" } });

    if (user) {
      done(null, user);
    } else {
      const newUser = getRepository(User).create({
        email,
        nickname: displayName,
        password: accessToken,
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

const strategy = new githubStrategy(githubConfig, githubVerify);

export default strategy;
