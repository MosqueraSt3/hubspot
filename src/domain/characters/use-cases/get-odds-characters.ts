import { CharacterEntity } from '../entities/character.entity';
import { CharacterRepository } from '../repositories/character.repository';

export interface IGetOddsCharactersUseCase {
    execute(id: number[]): Promise<CharacterEntity[]>;
}

export class GetOddsCharacters implements IGetOddsCharactersUseCase {
    constructor(
        private readonly repository: CharacterRepository,
    ) {}

    execute(ids: number[]): Promise<CharacterEntity[]> {
        return this.repository.getOddsCharacters(ids);
    }
}