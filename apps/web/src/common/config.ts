import { ResourceType } from '../types/resources'

export const resourceColors: { [K in ResourceType]: string }  = {
  starships: '#FFD700',
  vehicles: '#FFA500',
  species: '#00FF00',
  planets: '#0000FF',
  people: '#FF00FF',
  films: '#FF4500',
}

export const resourceDescriptions : { [K in ResourceType]: string }= {
  planets: "Viaja a través de los planetas icónicos de la galaxia Star Wars. Desde el desértico Tatooine hasta el helado Hoth, conoce los mundos que sirven como escenario para las aventuras de los héroes y villanos.",
  films: "Revive la magia del cine con las películas de Star Wars. Desde la emocionante 'Una Nueva Esperanza' hasta la épica 'El Ascenso de Skywalker', disfruta de las películas que han cautivado a generaciones.",
  people: "Conoce a los personajes legendarios que dan vida a la saga Star Wars. Desde el valiente Luke Skywalker hasta el malvado Darth Vader, explora las historias y motivaciones de estos icónicos individuos.",
  species: "Descubre la diversidad de especies alienígenas que habitan la galaxia. Desde los misteriosos Jedi hasta los astutos Hutts, explora las culturas y características de estas criaturas únicas.",
  starships: "Explora las poderosas naves espaciales que surcan la galaxia en busca de aventuras y conflictos. Descubre su velocidad, armamento y capacidades en esta sección.",
  vehicles: "Sumérgete en el mundo de los vehículos de Star Wars. Desde veloces speeder bikes hasta enormes AT-ATs, conoce los diferentes vehículos utilizados en la saga.",
};

export const ResourceTitles : { [K in ResourceType]: string } = {
  vehicles: "Vehículos",
  people: "Personajes",
  species: "Especies",
  planets: "Planetas",
  starships: "Naves",
  films: "Películas"
};

export const MAX_WIDTH = 960;