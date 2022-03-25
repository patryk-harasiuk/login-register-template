const getConfigString = (prop: string): string => {
    const value = process.env[prop] || null;

    return value ? `${value}` : value;
};

const getConfigNumber = (prop: string): number => {
    const value = process.env[prop] || null;

    return value ? parseFloat(`${value}`) : null;
};

const getConfigBoolean = (prop: string): boolean => {
    const value = process.env[prop] || null;

    return value ? value === "true" : null;
};

function getConfig(prop: string, type: "string"): string;

function getConfig(prop: string, type: "number"): number;

function getConfig(prop: string, type: "boolean"): boolean;

function getConfig(
    prop: string,
    type: "string" | "number" | "boolean"
): string | number | boolean {
    switch (type) {
        case "string":
            return getConfigString(prop);
        case "number":
            return getConfigNumber(prop);
        case "boolean":
            return getConfigBoolean(prop);
        default:
            return getConfigString(prop);
    }
}

export default class Config {
    public static node_env = getConfig("NODE_ENV", "string");
    public static PORT = getConfig("PORT", "number");

    public static DB_HOST = getConfig("DB_HOST", "string");
    public static DB_PORT = getConfig("DB_PORT", "number");
    public static DB_USER = getConfig("DB_USER", "string");
    public static DB_PASSWORD = getConfig("DB_PASSWORD", "string");
    public static DB_DATABASE = getConfig("DB_DATABASE", "string");
    public static USER_SECRET = getConfig("USER_SECRET", "string");
    public static USER_REFRESH_SECRET = getConfig(
        "USER_REFRESH_SECRET",
        "string"
    );
    public static ACCESS_EXPIRATION = getConfig("ACCESS_EXPIRATION", "string");
    public static REFRESH_EXPIRATION = getConfig(
        "REFRESH_EXPIRATION",
        "string"
    );
}
