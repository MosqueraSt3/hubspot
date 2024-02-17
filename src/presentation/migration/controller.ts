import { Request, Response } from 'express';

import { CharacterRepository, GetOddsCharacters, GetTotalOfCharacters } from '../../domain/characters';
import { LocationRepository } from '../../domain/characters/repositories/location.repository';
import { GetLocations } from '../../domain/characters/use-cases/get-locations';
import { MigrationRepository } from '../../domain/characters/repositories/migration.repository';
import { CreateContact } from '../../domain/characters/use-cases/create-contact';
import { CreateCompany } from '../../domain/characters/use-cases/create-company';

export class MigrationController {

    constructor(
        private readonly characterRepository: CharacterRepository,
        private readonly locationRepository: LocationRepository,
        private readonly migrationRepository: MigrationRepository,
    ) { }

    public migrateData = async (req: Request, res: Response) => {
        try {
            // Odds with 1 id
            const totalOfCharacters = await new GetTotalOfCharacters(this.characterRepository).execute();
            const idsOddArray = this.getIdsOdds(totalOfCharacters);
            idsOddArray.unshift(1);
            const oddsCharacters = await new GetOddsCharacters(this.characterRepository).execute(idsOddArray);

            // Locations
            const locationsIds = oddsCharacters.map((character) => character.location_id);
            const filteredLocationsIds = locationsIds.filter(num => !isNaN(num));
            const locations = await new GetLocations(this.locationRepository).execute(filteredLocationsIds);

            // Migrate
            const companyPromises = locations.map(location => new CreateCompany(this.migrationRepository).execute(location));
            const contactPromises = oddsCharacters.map(character => new CreateContact(this.migrationRepository).execute(character));

            await Promise.all([...companyPromises, ...contactPromises]);

            res.status(200).json({ oddsCharacters, locations });
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