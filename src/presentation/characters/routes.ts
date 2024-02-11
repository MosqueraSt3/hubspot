import { Router } from 'express';
import { CharacterController } from './controller';

export class CharacterRoutes {
    constructor() {}

    static get routes(): Router {
        const router = Router();

        const todoController = new CharacterController();

        router.get('/', todoController.getCharacters);

        return router;
    }
}