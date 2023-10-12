import { ResourceType } from '../types/resources'

export const resourceColors: { [K in ResourceType]: string }  = {
  starships: '#FFD700',
  vehicles: '#FFA500',
  species: '#00FF00',
  planets: '#0000FF',
  people: '#FF00FF',
  films: '#FF4500',
}

export const resourceDescriptions: { [K in ResourceType]: string } = {
  planets: "Travel through the iconic planets of the Star Wars galaxy. From the desert world of Tatooine to the icy Hoth, get to know the worlds that serve as the backdrop for the adventures of heroes and villains.",
  films: "Relive the magic of cinema with Star Wars movies. From the thrilling 'A New Hope' to the epic 'The Rise of Skywalker,' enjoy the films that have captivated generations.",
  people: "Meet the legendary characters who bring the Star Wars saga to life. From the courageous Luke Skywalker to the sinister Darth Vader, explore the stories and motivations of these iconic individuals.",
  species: "Discover the diversity of alien species that inhabit the galaxy. From the mysterious Jedi to the cunning Hutts, explore the cultures and characteristics of these unique creatures.",
  starships: "Explore the powerful starships that traverse the galaxy in search of adventures and conflicts. Discover their speed, weaponry, and capabilities in this section.",
  vehicles: "Immerse yourself in the world of Star Wars vehicles. From swift speeder bikes to massive AT-ATs, get to know the different vehicles used in the saga.",
};

export const ResourceTitles: { [K in ResourceType]: string } = {
  vehicles: "Vehicles",
  people: "Characters",
  species: "Species",
  planets: "Planets",
  starships: "Starships",
  films: "Movies"
};

export const MAX_WIDTH = 960;

export const API_URL = process.env.NEXT_PUBLIC_API_URL;