export enum DBTable {
    USERS = "users",
}

export type DBSchemaUser = {
    id: string;
    username: string;
    password: string;
    created: Date;
};
