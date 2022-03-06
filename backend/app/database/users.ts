import { DBSchemaUser, DBTable } from "../types/DB";
import DB from "./knex";

export const getAllUsers = async (): Promise<DBSchemaUser[]> =>
    (await DB(DBTable.USERS).select("*")) as DBSchemaUser[];
