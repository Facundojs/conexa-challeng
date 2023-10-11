import { CardContainer, AdditionalDataContainer } from '../containers';
import { ResourceType } from '../../types/resources';
import { IFilm } from '../../types/models';
import React from 'react';

export const FilmCard = ({ resource }: { resource: IFilm }) => {
  return (
    <CardContainer resource={ResourceType.Films}>
      <h3>{resource.title}</h3>
      <AdditionalDataContainer>
        <p><strong>Episode:</strong> {resource.episode_id}</p>
        <p><strong>Director:</strong> {resource.director}</p>
        <p><strong>Producer:</strong>{resource.producer}</p>
      </AdditionalDataContainer>
    </CardContainer>
  );
};
