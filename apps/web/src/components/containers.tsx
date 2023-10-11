import { ResourceCard } from './resource-card';
import styled from '@emotion/styled';

export const CardContainer = styled(ResourceCard)`
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
`;

export const AdditionalDataContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que los elementos se ajusten al ancho */
  justify-content: space-evenly;
  margin-top: 1rem;
`;
