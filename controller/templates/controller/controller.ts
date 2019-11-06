import { NextFunction, Request, Response } from 'express';
import { wrapResponse } from '../../utils/response.util';
import { <%= camel %>Service } from '../services';

export class <%= pascal %>ControllerBuilder {
    async create(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        wrapResponse(<%= camel %>Service.add<%= pascal %>(req.body), req, res, next);
    }
    async deleteById(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        wrapResponse(<%= camel %>Service.delete<%= pascal %>ById(req.params.id), req, res, next);
    }
    async findAll(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        wrapResponse(<%= camel %>Service.getAll<%= pascal %>s(), req, res, next);
    }
    async findById(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        wrapResponse(<%= camel %>Service.find<%= pascal %>ById(req.params.id), req, res, next);
    }
}
