import { CharacterRepository, CharacterDataSource, CharacterEntity } from '../../domain/characters';

export class CharacterRepositoryImpl implements CharacterRepository {
    constructor(
        private readonly dataSource: CharacterDataSource,
    ) { }

    getTotalOfCharacters(): Promise<number> {
        return this.dataSource.getTotalOfCharacters();
    }

    getOddsCharacters(ids: number[]): Promise<CharacterEntity[]> {
        return this.dataSource.getOddsCharacters(ids);
    }
}