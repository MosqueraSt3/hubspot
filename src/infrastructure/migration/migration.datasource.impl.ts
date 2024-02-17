import axios from 'axios';

import { envs } from '../../config/plugins/envs.plugin';
import { CharacterEntity } from '../../domain/characters';
import { LocationEntity } from '../../domain/characters/entities/location.entity';
import { MigrationDataSource } from '../../domain/characters/datasources/migration.datasource';

export class MigrationDataSourceImpl implements MigrationDataSource {
    async createCompany(location: LocationEntity): Promise<void> {
        await axios.post('https://api.hubapi.com/crm/v3/objects/companies',
        location,
        {
            headers: {
                'Authorization': `Bearer ${envs.TOKEN_HUBSPOT}`,
                'Content-Type': 'application/json'
            }
        });
    }

    async createContact(character: CharacterEntity): Promise<void> {
        await axios.post('https://api.hubapi.com/crm/v3/objects/contacts',
        character,
        {
            headers: {
                'Authorization': `Bearer ${envs.TOKEN_HUBSPOT}`,
                'Content-Type': 'application/json'
            }
        });
    }
}