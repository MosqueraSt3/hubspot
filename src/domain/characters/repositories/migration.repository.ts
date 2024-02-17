import { CharacterEntity } from '../entities/character.entity';
import { LocationEntity } from '../entities/location.entity';

export abstract class MigrationRepository {
    abstract createCompany(location: LocationEntity): Promise<void>;
    abstract createContact(character: CharacterEntity): Promise<void>;
}