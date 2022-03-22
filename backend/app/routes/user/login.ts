import Joi from "joi";
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

        return user;
    },
} as APIRoute;
