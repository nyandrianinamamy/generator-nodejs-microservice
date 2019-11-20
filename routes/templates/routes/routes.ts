import { Router } from 'express';
import { <%= camel %>Controller } from '../controller';
export class <%= pascal %>RoutesBuilder {
    router: Router;
    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.route('/')
            .get(<%= camel %>Controller.find.bind(<%= camel %>Controller))
            .post(<%= camel %>Controller.create.bind(<%= camel %>Controller));
        this.router
            .route('/:id')
            .get(<%= camel %>Controller.findById.bind(<%= camel %>Controller))
            .delete(<%= camel %>Controller.deleteById.bind(<%= camel %>Controller))
            .put(<%= camel %>Controller.update.bind(<%= camel %>Controller));
    }
}
