import { CardContainer, AdditionalDataContainer } from '../containers';
import { ResourceType } from '../../types/resources';
import { IPlanet } from '../../types/models';
import React from 'react';

export const PlanetCard = ({ resource }: { resource: IPlanet }) => {
  return (
    <CardContainer resource={ResourceType.Planets}>
      <h3>{resource.name}</h3>
      <AdditionalDataContainer>
        <p><strong>Diameter:</strong> {resource.diameter}</p>
        <p><strong>Rotation Period:</strong> {resource.rotation_period}</p>
        <p><strong>Orbital Period:</strong> {resource.orbital_period}</p>
        <p><strong>Surface Water:</strong> {resource.surface_water}</p>
        <p><strong>Population:</strong> {resource.population}</p>
        <p><strong>Terrain:</strong> {resource.terrain}</p>
        <p><strong>Climate:</strong> {resource.climate}</p>
        <p><strong>Gravity:</strong> {resource.gravity}</p>
      </AdditionalDataContainer>
    </CardContainer>
  );
};
