import {
  IStarship,
  IVehicle,
  IPeople,
  IPlanet,
  ISpecie,
  IFilm,
} from './models';

export enum ResourceType {
  Starships = 'starships',
  Vehicles = 'vehicles',
  Species = 'species',
  Planets = 'planets',
  People = 'people',
  Films = 'films',
}

export type Resource = IStarship | IVehicle | IPeople | IPlanet | ISpecie | IFilm
