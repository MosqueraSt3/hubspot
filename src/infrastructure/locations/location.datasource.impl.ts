import axios from 'axios';

import { LocationDataSource } from '../../domain/characters/datasources/location.datasource';
import { LocationEntity } from '../../domain/characters/entities/location.entity';

export class LocationDataSourceImpl implements LocationDataSource {

    async getLocations(ids: number[]): Promise<LocationEntity[]> {
        const locations = await axios.get(`https://rickandmortyapi.com/api/location/${ids}`);
        
        return locations.data.map(LocationEntity.parseLocation);
    }
}