import Joi from "joi";
import Config from "../../lib/config";
import { v4 as uuidv4 } from "uuid";
import {
    createRefreshToken,
    createAccessToken,
    addTokenToDatabase,
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
            uuidv4(),
            Config.USER_SECRET
        );
        const refreshToken = await createRefreshToken(
            uuidv4(),
            Config.USER_REFRESH_SECRET
        );

        addTokenToDatabase(user.id, refreshToken);

        return {
            user,
            accessToken,
        };
    },
} as APIRoute;
