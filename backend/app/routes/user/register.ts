import Joi from "joi";
import { registerUser } from "../../service/user";
import { HTTPMethod, APIRoute } from "../../types";

export default {
    method: HTTPMethod.POST,
    url: "/register",
    schema: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
    }).required(),
    controller: async (req) => {
        const userBody = req.body;
        const user = await registerUser(userBody);

        return user;
    },
} as APIRoute;
