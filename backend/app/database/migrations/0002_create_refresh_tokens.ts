import { Knex } from "knex";

export const up = async (knex: Knex) => {
    return knex.schema.createTable("refresh_tokens", (table) => {
        table.bigIncrements("id").notNullable();

        table.uuid("jti").notNullable();
        table
            .uuid("user_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE");
    });
};

export const down = async (knex: Knex) =>
    knex.schema.dropTable("refresh_tokens");
