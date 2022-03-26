import jwt from "jsonwebtoken";
import APIError from "./error";
import { HTTPCode, Token } from "../types";
import { Request } from "express";
import Config from "./config";
import { getToken, insertToken } from "../database/users";
import { v4 as uuidv4 } from "uuid";

export const createAccessToken = async (
    id: string,
    hash: string
): Promise<string> => {
    return jwt.sign({ _id: id }, hash, {
        // expiresIn: `${Config.ACCESS_EXPIRATION}m`,
        expiresIn: "10s",
        jwtid: uuidv4(),
    });
};

export const decodeToken = async (token: string, hash: string) => {
    return new Promise<Token>((resolve, reject) =>
        jwt.verify(token, hash, (error, decoded) => {
            if (error && error.name === "TokenExpiredError") {
                return reject(
                    new APIError(
                        "Auth error: Token has expired",
                        HTTPCode.UNAUTHORIZED
                    )
                );
            }

            if (error)
                return reject(
                    new APIError(
                        "Auth error: Token invalid",
                        HTTPCode.UNAUTHORIZED
                    )
                );
            return resolve(decoded as Token);
        })
    );
};

export const createRefreshToken = async (
    id: string,
    hash: string
): Promise<string> => {
    return jwt.sign({ _id: id }, hash, {
        expiresIn: `${Config.REFRESH_EXPIRATION}s`,
        jwtid: uuidv4(),
    });
};

export const getTokenFromDatabase = async (jti: string) => {
    const tokens = await getToken(jti);

    if (tokens.length)
        throw new APIError(
            "Auth error: Could not find token",
            HTTPCode.UNAUTHORIZED
        );

    return tokens[0];
};

export const getTokenFromHeader = async (req: Request) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token)
        throw new APIError("Auth error: Missing token", HTTPCode.UNAUTHORIZED);

    return token;
};

export const addTokenToDatabase = async (userId: string, jti: string) => {
    return await insertToken(userId, jti);
};
