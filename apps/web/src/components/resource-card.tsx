import { MAX_WIDTH, ResourceTitles, resourceColors, resourceDescriptions } from '../common/config';
import { ResourceType } from '../types/resources';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

type Props = {
  resource: ResourceType;
  children?: ReactNode;
}

export const ResourceCard = ({ resource, children }: Props) => {
  const { push } = useRouter()

  const HandleRedirect = () => {
    push(`/${resource}`)
  }

  return (
    <CardContainer resource={resource} onClick={HandleRedirect}>
      <CardTitle>{ResourceTitles[resource]}</CardTitle>
      <Description color={resourceColors[resource] || '#333'}>
        {resourceDescriptions[resource]}
      </Description>
      {children && children}
    </CardContainer>
  );
};

const CardContainer = styled.div<{ resource: ResourceType }>`
  background-color: ${({ resource }) => resourceColors[resource] || '#333'};
  border: 2px solid ${({ resource }) => resourceColors[resource] || '#333'}; /* Bordes más sutiles */
  border-radius: 4px; /* Bordes más redondeados */
  padding: 1rem;
  width: ${MAX_WIDTH}px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardTitle = styled.h3`
  font-size: 1rem; /* Tamaño de fuente original */
  margin-bottom: 0.5rem;
  color: #fff;
`;

const Description = styled.p<{ color: string }>`
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: ${({ color }) => {
    const backgroundColor = color;
    const rgb = parseInt(backgroundColor.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >>  8) & 0xff;
    const b = (rgb >>  0) & 0xff;
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness >= 128 ? '#333' : '#fff';
  }};
`;
