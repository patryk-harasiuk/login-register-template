import jwt from "jsonwebtoken";

export type User = {
    username: string;
    password: string;
};

export type Token = jwt.JwtPayload;
