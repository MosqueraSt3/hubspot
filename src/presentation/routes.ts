import { Router } from 'express';
import { CharacterRoutes } from './characters/routes';


export class AppRoutes {
    constructor() {}

    static get routes(): Router {
        const router = Router();

        router.use('/api/character', CharacterRoutes.routes) ;

        return router;
    }
}