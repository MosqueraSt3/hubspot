import { Request, Response } from 'express';
import axios from 'axios';

import { CharacterRepository, GetOddsCharacters, GetTotalOfCharacters } from '../../domain/characters';

export class CharacterController {

    constructor(
        private readonly characterRepository: CharacterRepository,
    ) { }

    public getCharacters = async (req: Request, res: Response) => {
        try {
            const totalOfCharacters = await new GetTotalOfCharacters(this.characterRepository).execute();
            const idsOddArray = this.getIdsOdds(totalOfCharacters);
            idsOddArray.unshift(1);
            const oddsCharacters = await new GetOddsCharacters(this.characterRepository).execute(idsOddArray);
            res.status(200).json(oddsCharacters);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error getting characters' })
        }
    }

    private getIdsOdds(amount: number) {
        const idsPrimos = [];
        for (let i = 2; i <= amount; i++) {
            if (this.isOddNumber(i)) {
                idsPrimos.push(i);
            }
        }
        return idsPrimos;
    }

    private isOddNumber(num: number) {
        if (num < 1) return false;
        if (num === 1) return true;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
    
        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
    
        return true;
    }

}