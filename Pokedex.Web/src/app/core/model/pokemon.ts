export class Pokemon {
  constructor() {
    this.abilities = [];
    this.base_experience = 0;
    this.forms = [];
    this.game_indices = [];
    this.height = 0;
    this.held_items = [];
    this.id = 0;
    this.is_default = false;
    this.location_area_encounters = '';
    this.moves = []
    this.name = '';
    this.order = 0;
    this.species = new Species();
    this.sprites = new Sprites();
    //this.stats = [];
    //this.types = [];
    this.weight = 0;
    this.imgUrl = '';
  }
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  game_indices: GameIndice[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  species: Species;
  sprites: Sprites;
  //stats: Stat[];
  //types: Type[];
  weight: number;
  imgUrl: string;
}

export class Ability {
  constructor() {
    this.ability = new Ability2();
    this.is_hidden = false;
    this.slot = 0;
  }

  ability: Ability2;
  is_hidden: boolean;
  slot: number;
}

export class Ability2 {
  constructor() {
    this.name = '';
    this.url = '';
  }

  name: string;
  url: string;
}

export class Form {
  constructor() {
    this.name = '';
    this.url = '';
  }

  name: string;
  url: string;
}

export class GameIndice {
  constructor() {
    this.game_index = 0;
    this.version = new Version();
  }

  game_index: number;
  version: Version;
}

export class Version {
  constructor() {
    this.name = '';
    this.url = '';
  }

  name: string;
  url: string;
}


export class Move {
  constructor() {
    this.move = new Move2();
    this.version_group_details = [];
  }

  move: Move2;
  version_group_details: VersionGroupDetail[];
}

export class Move2 {
  constructor() {
    this.name = '';
    this.url = '';
  }

  name: string;
  url: string;
}

export class VersionGroupDetail {
  constructor() {
    this.level_learned_at = 0;
    this.move_learn_method = new MoveLearnMethod();
    this.version_group = new VersionGroup();
  }

  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
}

export class MoveLearnMethod {
  constructor() {
    this.name = '';
    this.url = '';
  }

  name: string;
  url: string;
}

export class VersionGroup {
  constructor() {
    this.name = '';
    this.url = '';
  }

  name: string;
  url: string;
}


export class Species {
  constructor() {
    this.name = '';
    this.url = '';
  }

  name: string;
  url: string;
}

export class Sprites {
  constructor() {
    this.back_default = '';
    this.back_shiny = '';
    this.front_default = '';
    this.front_shiny = '';
  }

  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  other: any;
  versions: any;
}
