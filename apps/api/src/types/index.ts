export interface IFilm {
  characters: string[] | IPeople[];
  starships: string[] | IStarship[];
  vehicles: string[] | IVehicle[];
  planets: string[] | IPlanet[];
  species: string[] | ISpecie[];
  opening_crawl: string;
  release_date: Date;
  episode_id: string;
  director: string;
  producer: string;
  created: Date;
  title: string;
  edited: Date;
  url: string;
}

export interface IPeople {
  starships: string[] | IStarship[];
  vehicles: string[] | IVehicle[];
  species: string[] | ISpecie[];
  homeworld: string | IPlanet;
  films: string[] | IFilm[];
  skin_color: string;
  hair_color: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  height: string;
  created: Date;
  mass: string;
  name: string;
  edited: Date;
  url: string;
}

export interface IPlanet {
  residents: string[] | IPeople[];
  films: string[] | IFilm[];
  rotation_period: string;
  orbital_period: string;
  surface_water: string;
  population: string;
  diameter: string;
  terrain: string;
  climate: string;
  gravity: string;
  created: Date;
  edited: Date;
  name: string;
  url: string;
}

export interface ISpecie {
  people: string[] | IPeople[];
  homeworld: string | IPlanet;
  films: string[] | IFilm[];
  average_lifespan: string;
  classification: string;
  average_height: string;
  designation: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  language: string;
  created: Date;
  edited: Date;
  name: string;
  url: string;
}

export interface IStarship {
  max_atmosphering_speed: string;
  pilots: string[] | IPeople[];
  hyperdrive_rating: string;
  films: string[] | IFilm[];
  cost_in_credits: string;
  cargo_capacity: string;
  starship_class: string;
  manufacturer: string;
  consumables: string;
  passengers: string;
  length: string;
  created: Date;
  model: string;
  name: string;
  MGLT: string;
  crew: string;
  edited: Date;
  url: string;
}

export interface IVehicle {
  max_atmosphering_speed: string;
  pilots: string[] | IPeople[];
  films: string[] | IFilm[];
  cost_in_credits: string;
  cargo_capacity: string;
  vehicle_class: string;
  manufacturer: string;
  consumables: string;
  passengers: string;
  length: string;
  created: Date;
  model: string;
  crew: string;
  edited: Date;
  name: string;
  url: string;
}

export enum ResourceType {
  Starships = 'starships',
  Vehicles = 'vehicles',
  Species = 'species',
  Planets = 'planets',
  People = 'people',
  Films = 'films',
}

export type Resource =
  | IStarship
  | IVehicle
  | IPeople
  | IPlanet
  | ISpecie
  | IFilm;
