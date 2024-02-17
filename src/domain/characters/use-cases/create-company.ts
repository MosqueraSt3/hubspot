import { LocationEntity } from '../entities/location.entity';
import { MigrationRepository } from '../repositories/migration.repository';

export interface ICreateCompanyUseCase {
    execute(location: LocationEntity): Promise<void>;
}

export class CreateCompany implements ICreateCompanyUseCase {
    constructor(
        private readonly repository: MigrationRepository,
    ) {}

    execute(location: LocationEntity): Promise<void> {
        return this.repository.createCompany(location);
    }
}