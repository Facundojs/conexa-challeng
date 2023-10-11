import { CardContainer, AdditionalDataContainer } from '../containers';
import { ResourceType } from '../../types/resources';
import { ISpecie } from '../../types/models';
import React from 'react';

export const SpeciesCard = ({ resource }: { resource: ISpecie }) => {
  return (
    <CardContainer resource={ResourceType.Species}>
      <h3>{resource.name}</h3>
      <AdditionalDataContainer>
        <p><strong>Classification:</strong> {resource.classification}</p>
        <p><strong>Designation:</strong> {resource.designation}</p>
        <p><strong>Homeworld:</strong> {resource.homeworld as string}</p>
        <p><strong>Average Lifespan:</strong> {resource.average_lifespan}</p>
        <p><strong>Average Height:</strong> {resource.average_height}</p>
        <p><strong>Skin Colors:</strong> {resource.skin_colors}</p>
        <p><strong>Hair Colors:</strong> {resource.hair_colors}</p>
        <p><strong>Eye Colors:</strong> {resource.eye_colors}</p>
        <p><strong>Language:</strong> {resource.language}</p>
      </AdditionalDataContainer>
    </CardContainer>
  );
};
