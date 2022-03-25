import { AnySchema } from "joi";
import { Request, Response, NextFunction } from "express";
import { HTTPMethod } from "./HTTP";

export type APIRoute = {
    method: HTTPMethod;
    url: string;
    schema?: AnySchema;
    middleware?: any[];
    controller: (req?: Request, res?: Response, next?: NextFunction) => void;
};
