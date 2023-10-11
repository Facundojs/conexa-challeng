import { CardContainer, AdditionalDataContainer } from '../containers';
import { ResourceType } from '../../types/resources';
import { IPeople } from '../../types/models';
import React from 'react';

export const PeopleCard = ({ resource }: { resource: IPeople }) => {
  return (
    <CardContainer resource={ResourceType.People}>
      <h3>{resource.name}</h3>
      <AdditionalDataContainer>
        <p><strong>Gender:</strong> {resource.gender}</p>
        <p><strong>Birth Year:</strong> {resource.birth_year}</p>
        <p><strong>Skin Color:</strong> {resource.skin_color}</p>
        <p><strong>Hair Color:</strong> {resource.hair_color}</p>
        <p><strong>Eye Color:</strong> {resource.eye_color}</p>
        <p><strong>Height:</strong> {resource.height}</p>
        <p><strong>Mass:</strong> {resource.mass}</p>
        <p><strong>Homeworld:</strong> {resource.homeworld as string}</p>
      </AdditionalDataContainer>
    </CardContainer>
  );
};
