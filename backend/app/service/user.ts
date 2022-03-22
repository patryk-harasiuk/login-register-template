import bcryptjs from "bcryptjs";
import { createUser, findUserByUsername } from "../database/users";
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

const getAndValidateUser = async (username: string, password: string) => {
    const result = await findUserByUsername(username);
    if (!result.length) throw new Error("Invalid credentials");

    if (!checkPassword(password, result[0].password))
        throw new Error("Invalid credentials");

    return result[0];
};

export const registerUser = async (body: User) => {
    const { password } = body;

    const hashedPassword = await hashPassword(password);

    const user = await createUser({ ...body, password: hashedPassword });

    return user;
};

export const loginUser = async (body: User) => {
    const { username, password } = body;

    const user = await getAndValidateUser(username, password);

    return user;
};
