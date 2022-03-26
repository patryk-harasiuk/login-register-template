import { DBSchemaUser, DBTable, User } from "../types";
import DB from "./knex";

export const getAllUsers = async (): Promise<DBSchemaUser[]> =>
    (await DB(DBTable.USERS).select("*")) as DBSchemaUser[];

export const createUser = async (body: User): Promise<DBSchemaUser> =>
    await DB(DBTable.USERS)
        .insert(body)
        .returning(["id", "username", "password", "created"]);

export const findUserByUsername = async (
    username: string
): Promise<DBSchemaUser[]> =>
    await DB(DBTable.USERS).select("*").where("username", username);

export const insertToken = async (userId: string, token: any) =>
    await DB(DBTable.REFRESH_TOKENS)
        .where("user_id", userId)
        .del()
        .insert({ user_id: userId, jti: token });

export const getToken = async (jti: string) =>
    await DB(DBTable.REFRESH_TOKENS).select("jti").where("jti", jti);
