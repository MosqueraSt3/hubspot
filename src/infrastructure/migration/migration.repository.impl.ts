import { CharacterEntity } from '../../domain/characters';
import { LocationEntity } from '../../domain/characters/entities/location.entity';
import { MigrationDataSource } from '../../domain/characters/datasources/migration.datasource';
import { MigrationRepository } from '../../domain/characters/repositories/migration.repository';


export class MigrationRepositoryImpl implements MigrationRepository {
    constructor(
        private readonly dataSource: MigrationDataSource,
    ) { }

    createCompany(location: LocationEntity): Promise<void> {
        return this.dataSource.createCompany(location);
    }
    
    createContact(character: CharacterEntity): Promise<void> {
        return this.dataSource.createContact(character);
    }
}