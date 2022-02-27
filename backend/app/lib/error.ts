import { HTTPCode } from "types/HTTP";

export default class APIError extends Error {
  public code: number;

  constructor(message: string, code = HTTPCode.INTERNAL_SERVER_ERROR) {
    super(message);

    this.code = code;
  }
}

export const createAPIError = (error: any) =>
  error instanceof APIError ? error : new APIError(error.message || error);
