export class CharacterEntity {
    constructor(
        public character_id: number,
        public firstname: string,
        public lastname: string,
        public status_character: string,
        public character_species: string,
        public character_gender: string,
    ) {}

    public static parseCharacter(object: {[key: string]: any}): CharacterEntity {
        const { id, name, status, species, gender } = object;
        const character_id = id;
        const [firstname, ...lastnameArray] = name.split(' ');
        const lastname = lastnameArray.join(' ');
        const status_character = status;
        const character_species = species;
        const character_gender = gender;

        return new CharacterEntity(character_id, firstname, lastname, status_character, character_species, character_gender);
    }
}