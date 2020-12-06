export class Pokedex {
  constructor() {
    this.descriptions = [];
    this.id = 0;
    this.is_main_series = false;
    this.name = '';
    this.names = [];
    this.pokemon_entries = [];
    this.version_groups = [];
  }

  descriptions: Description[];
  id: number;
  is_main_series: boolean;
  name: string;
  names: Name[];
  pokemon_entries: PokemonEntry[];
  region?: any;
  version_groups: any[];
}

export class Description {
  constructor() {
    this.description = '';
    this.language = new Language();
  }

  description: string;
  language: Language;
}

export class Language {
  constructor() {
    this.name = '';
    this.url = '';
  }

  name: string;
  url: string;
}

export class Name {
  constructor() {
    this.language = new Language2();
    this.name = '';
  }
  language: Language2;
  name: string;
}

export class Language2 {
  constructor() {
    this.name = '';
    this.url = '';
  }

  name: string;
  url: string;
}

export class PokemonEntry {
  constructor() {
    this.entry_number = 0;
    this.pokemon_species = new PokemonSpecies();
  }

  entry_number: number;
  pokemon_species: PokemonSpecies;
}

export class PokemonSpecies {
  constructor() {
    this.name = '';
    this.url = '';
    this.imgUrl = '';
  }

  name: string;
  url: string;
  imgUrl: string;
}



