import { Router } from 'express';
import { MigrationRoutes } from './migration/routes';


export class AppRoutes {
    constructor() {}

    static get routes(): Router {
        const router = Router();

        router.use('/api/migration', MigrationRoutes.routes) ;

        return router;
    }
}