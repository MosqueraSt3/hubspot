import { CharacterEntity } from '../entities/character.entity';

export abstract class CharacterRepository {
    abstract getTotalOfCharacters(): Promise<number>;
    abstract getOddsCharacters(ids: number[]): Promise<CharacterEntity[]>;
}