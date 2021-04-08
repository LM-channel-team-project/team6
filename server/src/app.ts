import express, { NextFunction, Request, Response } from "express";
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import createError, { HttpError } from 'http-errors';
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT|| 8000;

app.use(
    (req: Request, res: Response, next: NextFunction) => {
        if (process.env.NODE_ENV === 'production') {
            morgan('combined')(req, res, next);
        } else {
            morgan('dev')(req, res, next);
        }
    },
    express.static(path.join(__dirname, 'src/public')),
    express.json(),
    express.urlencoded({ extended: false }),
    cors({
        origin:
            process.env.NODE_ENV === 'production'
            ? process.env.CLIENT_PRODUCTION
            : process.env.CLIENT_DEVELOPMENT
    }),
);

// router
app.use("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("<h1>Team 6</h1>"); // 임시
});

// error handling
app.use((req: Request, res: Response, next: NextFunction) => {
    const error = createError();
    error.statusCode = 404;
    error.message = "NOT_FOUND";
    next(error);
});

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "INTERNAL_SERVER_ERROR";
    res.json({
        statusCode: statusCode,
        message: message
    })
});

app.listen(port, () => {
    console.log(`server ${port} on`)
});