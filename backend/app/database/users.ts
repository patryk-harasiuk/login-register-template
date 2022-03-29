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
