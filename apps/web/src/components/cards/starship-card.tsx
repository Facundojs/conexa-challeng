import { CardContainer, AdditionalDataContainer } from '../containers';
import { ResourceType } from '../../types/resources';
import { IStarship } from '../../types/models';
import React from 'react';

export const StarshipCard = ({ resource }: { resource: IStarship }) => {
  return (
    <CardContainer resource={ResourceType.Starships}>
      <h3>{resource.name}</h3>
      <AdditionalDataContainer>
        <p><strong>Model:</strong> {resource.model}</p>
        <p><strong>Manufacturer:</strong> {resource.manufacturer}</p>
        <p><strong>Maximum Speed:</strong>{resource.max_atmosphering_speed}</p>
      </AdditionalDataContainer>
    </CardContainer>
  );
};
