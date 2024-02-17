import { CharacterEntity } from '../entities/character.entity';
import { MigrationRepository } from '../repositories/migration.repository';

export interface ICreateContactUseCase {
    execute(character: CharacterEntity): Promise<void>;
}

export class CreateContact implements ICreateContactUseCase {
    constructor(
        private readonly repository: MigrationRepository,
    ) {}

    execute(character: CharacterEntity): Promise<void> {
        return this.repository.createContact(character);
    }
}