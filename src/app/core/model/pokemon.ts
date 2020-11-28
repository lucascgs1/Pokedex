  export interface Generation {
    name: string;
    url: string;
  }

  export interface Language {
    name: string;
    url: string;
  }

  export interface Name {
    name: string;
    language: Language;
  }

  export interface Language2 {
    name: string;
    url: string;
  }

  export interface EffectEntry {
    effect: string;
    short_effect: string;
    language: Language2;
  }

  export interface VersionGroup {
    name: string;
    url: string;
  }

  export interface Language3 {
    name: string;
    url: string;
  }

  export interface EffectEntry2 {
    effect: string;
    language: Language3;
  }

  export interface EffectChange {
    version_group: VersionGroup;
    effect_entries: EffectEntry2[];
  }

  export interface Language4 {
    name: string;
    url: string;
  }

  export interface VersionGroup2 {
    name: string;
    url: string;
  }

  export interface FlavorTextEntry {
    flavor_text: string;
    language: Language4;
    version_group: VersionGroup2;
  }

  export interface Pokemon2 {
    name: string;
    url: string;
  }

  export interface Pokemon {
    is_hidden: boolean;
    slot: number;
    pokemon: Pokemon2;
  }

  export interface PokemonList {
    id: number;
    name: string;
    is_main_series: boolean;
    generation: Generation;
    names: Name[];
    effect_entries: EffectEntry[];
    effect_changes: EffectChange[];
    flavor_text_entries: FlavorTextEntry[];
    pokemon: Pokemon[];
  }

