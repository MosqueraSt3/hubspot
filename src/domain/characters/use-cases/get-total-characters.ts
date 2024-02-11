import { CharacterRepository } from '../repositories/character.repository';

export interface IGetTotalCharactersUseCase {
    execute(): Promise<number>;
}

export class GetTotalOfCharacters implements IGetTotalCharactersUseCase {
    constructor(
        private readonly repository: CharacterRepository,
    ) {}

    execute(): Promise<number> {
        return this.repository.getTotalOfCharacters();
    }
}