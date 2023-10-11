import { CardContainer, AdditionalDataContainer } from '../containers';
import { ResourceType } from '../../types/resources';
import { IVehicle } from '../../types/models';
import React from 'react';

export const VehicleCard = ({ resource }: { resource: IVehicle }) => {
  return (
    <CardContainer resource={ResourceType.Vehicles}>
      <h3>{resource.name}</h3>
      <AdditionalDataContainer>
        <p><strong>Model:</strong> {resource.model}</p>
        <p><strong>Manufacturer:</strong> {resource.manufacturer}</p>
        <p><strong>Vehicle Class:</strong> {resource.vehicle_class}</p>
        <p><strong>Maximum Atmosphering Speed:</strong> {resource.max_atmosphering_speed}</p>
        <p><strong>Cost in Credits:</strong> {resource.cost_in_credits}</p>
        <p><strong>Cargo Capacity:</strong> {resource.cargo_capacity}</p>
        <p><strong>Consumables:</strong> {resource.consumables}</p>
        <p><strong>Passengers:</strong> {resource.passengers}</p>
        <p><strong>Length:</strong> {resource.length}</p>
        <p><strong>Crew:</strong> {resource.crew}</p>
      </AdditionalDataContainer>
    </CardContainer>
  );
};
