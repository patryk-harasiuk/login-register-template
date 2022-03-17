import { Knex } from "knex";

export const up = async (knex: Knex) => {
    return knex.schema.createTable("users", (table) => {
        table.bigIncrements("id").notNullable();

        table.string("username").notNullable();
        table.string("password").notNullable();
        table.dateTime("created").defaultTo(knex.raw("NOW()"));

        table.index("id");
        table.unique(["id"], "user_id_unique");
    });
};

export const down = async (knex: Knex) => knex.schema.dropTable("users");
