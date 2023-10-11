"use client"
import { useResourceSearch } from '../hooks/use-debounced-search';
import { Resource, ResourceType } from '../types/resources';
import { memo, useMemo, useRef, useState } from 'react';
import { ResultsEmty } from './results-empty';
import { MappedResourceCards } from './cards';
import styled from '@emotion/styled';
import { Loading } from './loading';
import { Error } from './error';

export function ResourceList({ resource, initialData }: { resource: ResourceType, initialData: Resource[] }) {
  const { data: foundData, error, loading, handleSearch } = useResourceSearch(resource);
  const [pageData] = useState(() => initialData);

  const ListMemo = useMemo(() => {
    const Component = memo(MappedResourceCards[resource]);

    if (loading)
      return <Loading />;

    if (error)
      return <Error />

    if (foundData !== null) {
      if (foundData?.length === 0) {
        return <ResultsEmty />
      }

      return foundData?.map((resource: Resource, i) => (
        //@ts-ignore
        <Component key={i} resource={resource} />
      ));
    }

    return pageData.map((resource: Resource, i) => (
      //@ts-ignore
      <Component key={i} resource={resource} />
    ));
  }, [foundData, pageData, loading, resource, error]);

  return (
    <StyledList>
      <SearchContainer>
        <SearchInput
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search..."
        />
      </SearchContainer>
      {ListMemo}
    </StyledList>
  );
}

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1rem;
`;

const SearchContainer = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  transition: border 0.3s;
  &:focus {
    border: 1px solid #0078D4;
  }
`;
