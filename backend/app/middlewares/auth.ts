import { Request, Response, NextFunction } from "express";
import { closeWithError } from "../lib";
import Config from "../lib/config";
import { decodeToken, getTokenFromHeader } from "../lib/token";
import { createAPIError } from "../lib";

export const validateTokenMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = await getTokenFromHeader(req);

        const decodedToken = await decodeToken(token, Config.USER_SECRET);

        next();
    } catch (error) {
        closeWithError(res, createAPIError(error));
    }
};
