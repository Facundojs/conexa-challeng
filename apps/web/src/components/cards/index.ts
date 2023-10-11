import { ResourceType } from '../../types/resources';
import { StarshipCard } from './starship-card';
import { VehicleCard } from './vehicle-card';
import { SpeciesCard } from './specie-card';
import { PlanetCard } from './planet-card';
import { PeopleCard } from './people';
import { FilmCard } from './film-card';

export const MappedResourceCards = {
  [ResourceType.Starships]: StarshipCard,
  [ResourceType.Vehicles]: VehicleCard,
  [ResourceType.Species]: SpeciesCard,
  [ResourceType.Planets]: PlanetCard,
  [ResourceType.People]: PeopleCard,
  [ResourceType.Films]: FilmCard,
}