import Config from "../../lib/config";
import APIError from "../../lib/error";
import {
    addTokenToDatabase,
    compareJTI,
    createAccessToken,
    createRefreshToken,
    decodeToken,
    getTokenFromHeader,
} from "../../lib/token";
import { APIRoute } from "../../types/API";
import { HTTPCode, HTTPMethod } from "../../types/HTTP";

export default {
    method: HTTPMethod.POST,
    url: "/token/refresh",
    controller: async (req) => {
        const token = await getTokenFromHeader(req);

        const { jti, id } = await decodeToken(token, Config.USER_SECRET);

        const isJTIValid = await compareJTI(jti);

        if (!isJTIValid)
            throw new APIError(
                "Auth error: wrong token",
                HTTPCode.UNAUTHORIZED
            );

        const accessToken = await createAccessToken(id, Config.USER_SECRET);

        const refreshToken = await createRefreshToken(id, Config.USER_SECRET);

        await addTokenToDatabase(
            id,
            (
                await decodeToken(refreshToken, Config.USER_SECRET)
            ).jti
        );

        return { accessToken, refreshToken };
    },
} as APIRoute;
