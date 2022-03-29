import Joi from "joi";
import Config from "../../lib/config";
import {
    createRefreshToken,
    createAccessToken,
    addTokenToDatabase,
    decodeToken,
} from "../../lib/token";
import { loginUser } from "../../service/user";
import { HTTPMethod, APIRoute } from "../../types";

export default {
    method: HTTPMethod.POST,
    url: "/login",
    schema: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
    }).required(),
    controller: async (req) => {
        const userBody = req.body;
        const user = await loginUser(userBody);

        const accessToken = await createAccessToken(
            user.id,
            Config.USER_SECRET
        );
        const refreshToken = await createRefreshToken(
            user.id,
            Config.USER_SECRET
        );

        const { jti } = await decodeToken(refreshToken, Config.USER_SECRET);

        await addTokenToDatabase(user.id, jti);

        return {
            user,
            accessToken,
            refreshToken,
        };
    },
} as APIRoute;
