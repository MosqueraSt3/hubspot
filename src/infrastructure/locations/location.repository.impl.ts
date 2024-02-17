import { LocationDataSource } from '../../domain/characters/datasources/location.datasource';
import { LocationEntity } from '../../domain/characters/entities/location.entity';
import { LocationRepository } from '../../domain/characters/repositories/location.repository';

export class LocationRepositoryImpl implements LocationRepository {
    constructor(
        private readonly dataSource: LocationDataSource,
    ) { }

    getLocations(ids: number[]): Promise<LocationEntity[]> {
        return this.dataSource.getLocations(ids);
    }
}