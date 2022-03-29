import { DBTable } from "../types";
import knex from "./knex";

export const insertToken = async (userId: string, jti: string) => {
    await knex.raw(
        `DELETE FROM ${DBTable.REFRESH_TOKENS} WHERE user_id = '${userId}'`
    );
    await knex.raw(
        `INSERT INTO ${DBTable.REFRESH_TOKENS} (jti, user_id) VALUES ('${jti}', '${userId}')`
    );
};

export const getToken = async (jti: string) =>
    await knex.raw(
        `SELECT jti, user_id FROM ${DBTable.REFRESH_TOKENS} WHERE jti = '${jti}';`
    );
