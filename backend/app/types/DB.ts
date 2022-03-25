export enum DBTable {
    USERS = "users",
    REFRESH_TOKENS = "refresh_tokens",
}

export type DBSchemaUser = {
    id: string;
    username: string;
    password: string;
    created: Date;
};
