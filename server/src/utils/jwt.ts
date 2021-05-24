import { User } from "@models/entity/User";
import jwt from "jsonwebtoken";

const createToken = async (user: User) => {
  const { id, nickname, username, email, oauthId, provider } = user;

  if (process.env.JWT_SECRET_KEY === undefined) return false;
  return jwt.sign(
    { id, nickname, username, email, oauthId, provider },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "1d",
    },
  );
};
const verifyToken = async (token: string) => {
  if (process.env.JWT_SECRET_KEY === undefined) return false;
  return jwt.verify(token, process.env.JWT_SECRET_KEY);
};

export { createToken, verifyToken };
