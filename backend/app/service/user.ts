import bcryptjs from "bcryptjs";
// import { createAPIError } from "../lib";
import { createUser } from "../database/users";
import { User } from "../types";

export const hashPassword = async (password: string) => {
    const salt = await bcryptjs.genSalt(10);

    const hashedPassword = await bcryptjs.hash(password, salt);

    return hashedPassword;
};

export const checkPassword = async (
    password: string,
    hashedPassword: string
) => {
    const isPasswordCorrect = await bcryptjs.compare(password, hashedPassword);

    return isPasswordCorrect;
};

export const registerUser = async (body: User) => {
    const { password } = body;

    const hashedPassword = await hashPassword(password);

    const user = await createUser({ ...body, password: hashedPassword });

    return user;
};
