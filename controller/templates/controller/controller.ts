import { NextFunction, Request, Response } from 'express';
import { wrapResponse } from '../../utils/response.util';
import { <%= camel %>Service } from '../services';

export class <%= pascal %>ControllerBuilder {
    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        wrapResponse(<%= camel %>Service.create(req.body), req, res, next);
    }
    async deleteById(req: Request, res: Response, next: NextFunction): Promise<void> {
        wrapResponse(<%= camel %>Service.deleteById(req.params.id), req, res, next);
    }
    async find(req: Request, res: Response, next: NextFunction): Promise<void> {
        wrapResponse(<%= camel %>Service.find(req.query), req, res, next);
    }
    async findById(req: Request, res: Response, next: NextFunction): Promise<void> {
        wrapResponse(<%= camel %>Service.findById(req.params.id), req, res, next);
    }
    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        wrapResponse(<%= camel %>Service.update(req.params.id, req.body), req, res, next);
    }
}
