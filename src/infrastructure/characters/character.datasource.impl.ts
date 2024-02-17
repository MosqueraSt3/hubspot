import axios from 'axios';

import { CharacterDataSource, CharacterEntity } from '../../domain/characters';

export class CharacterDataSourceImpl implements CharacterDataSource {
    async getTotalOfCharacters(): Promise<number> {
        const characters = await axios.get('https://rickandmortyapi.com/api/character');

        return characters.data.info.count;
    }

    async getOddsCharacters(ids: number[]): Promise<CharacterEntity[]> {
        const characters = await axios.get(`https://rickandmortyapi.com/api/character/${ids}`);
        return characters.data.map(CharacterEntity.parseCharacter);
    }
}