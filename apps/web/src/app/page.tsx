"use client";
import { ResourceCard } from '../components/resource-card';
import { ResourceType } from '../types/resources';
import styled from '@emotion/styled';
import React from "react";

export default function Web() {

  return (
    <Container>
      <ResourceCard resource={ResourceType.Starships} />
      <ResourceCard resource={ResourceType.Vehicles} />
      <ResourceCard resource={ResourceType.Species} />
      <ResourceCard resource={ResourceType.Planets} />
      <ResourceCard resource={ResourceType.People} />
      <ResourceCard resource={ResourceType.Films} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
`