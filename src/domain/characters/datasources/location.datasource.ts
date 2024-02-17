import { LocationEntity } from '../entities/location.entity';

export abstract class LocationDataSource {
    abstract getLocations(ids: number[]): Promise<LocationEntity[]>;
}