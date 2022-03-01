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

export class Config {
  public static node_env: string = getConfig("NODE_ENV", "string");
  public static PORT: number = getConfig("PORT", "number");
}
