export class LocationEntity {
    constructor(
        public location_id: number,
        public name: string,
        public location_type: string,
        public dimension: string,
        public creation_date: string,
    ) {}

    public static parseLocation(object: {[key: string]: any}): LocationEntity {
        const { id, name, type, dimension, created } = object;
        const location_id = id;
        const location_type = type;
        const creation_date = created;

        return new LocationEntity(location_id, name, location_type, dimension, creation_date);
    }
}