import { Router } from 'express';

import { MigrationController } from './controller';
import { CharacterDataSourceImpl } from '../../infrastructure/characters/character.datasource.impl';
import { CharacterRepositoryImpl } from '../../infrastructure/characters/character.repository.impl';
import { LocationDataSourceImpl } from '../../infrastructure/locations/location.datasource.impl';
import { LocationRepositoryImpl } from '../../infrastructure/locations/location.repository.impl';
import { MigrationDataSourceImpl } from '../../infrastructure/migration/migration.datasource.impl';
import { MigrationRepositoryImpl } from '../../infrastructure/migration/migration.repository.impl';

export class MigrationRoutes {
    constructor() {}

    static get routes(): Router {
        const router = Router();



        const characterDataSource = new CharacterDataSourceImpl();
        const locationDataSource = new LocationDataSourceImpl();
        const migrationDataSource = new MigrationDataSourceImpl();

        const characterRepository = new CharacterRepositoryImpl(characterDataSource);
        const locationRepository = new LocationRepositoryImpl(locationDataSource);
        const migrationRepository = new MigrationRepositoryImpl(migrationDataSource);

        const characterController = new MigrationController(characterRepository, locationRepository, migrationRepository);

        router.get('/', characterController.migrateData);

        return router;
    }
}