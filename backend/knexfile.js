const path = require("path");
const dotenv = require("dotenv");
const { knexSnakeCaseMappers } = require("objection");

dotenv.config({
    path: process.argv[process.argv.findIndex((e) => e === "--envfile") + 1],
});

module.exports = {
    client: "pg",
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    },
    migrations: {
        directory: path.resolve(__dirname, "dist/app/database/migrations"),
    },
    seeds: {
        directory: path.resolve(__dirname, "dist/app/database/seeds"),
    },

    ...knexSnakeCaseMappers(),
};
