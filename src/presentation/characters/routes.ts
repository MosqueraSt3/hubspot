import { Router } from 'express';

import { CharacterController } from './controller';
import { CharacterDataSourceImpl } from '../../infrastructure/characters/character.datasource.impl';
import { CharacterRepositoryImpl } from '../../infrastructure/characters/character.repository.impl';

export class CharacterRoutes {
    constructor() {}

    static get routes(): Router {
        const router = Router();

        const dataSource = new CharacterDataSourceImpl();
        const characterRepository = new CharacterRepositoryImpl(dataSource);
        const characterController = new CharacterController(characterRepository);

        router.get('/', characterController.getCharacters);

        return router;
    }
}