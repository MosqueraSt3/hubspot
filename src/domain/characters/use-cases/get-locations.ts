import { LocationEntity } from '../entities/location.entity';
import { LocationRepository } from '../repositories/location.repository';

export interface IGetLocationsUseCase {
    execute(id: number[]): Promise<LocationEntity[]>;
}

export class GetOddsCharacters implements IGetLocationsUseCase {
    constructor(
        private readonly repository: LocationRepository,
    ) {}

    execute(ids: number[]): Promise<LocationEntity[]> {
        return this.repository.getLocations(ids);
    }
}