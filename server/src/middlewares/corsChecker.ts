import { Request } from "express";

const corsChecker = (req: Request, callback: any) => {
  let corsOptions;

  const acceptList: any[] = []; // url list

  if (acceptList.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }

  callback(null, corsOptions);
};

export default corsChecker;
