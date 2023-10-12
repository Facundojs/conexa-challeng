"use client"
import { ScrollToBottomProvider } from '../context/ScrollToBottomContext';
import { useDebouncedCallback } from '../hooks/use-debounced-callback';
import { useResourceSearch } from '../hooks/use-debounced-search';
import { Resource, ResourceType } from '../types/resources';
import { memo, useMemo, useRef, useState } from 'react';
import { useFetchPage } from '../hooks/use-fetch-page';
import { ResultsEmty } from './results-empty';
import { MappedResourceCards } from './cards';
import { useParams } from 'next/navigation';
import styled from '@emotion/styled';
import { Loading } from './loading';
import { Error } from './error';

export function ResourceList({ initialData }: { initialData: Resource[] }) {
  const { resource } = useParams<{ resource: ResourceType }>()

  const { data: foundData, error, loading: loadingResource, handleSearch } = useResourceSearch(resource);
  const [pageData, setPageData] = useState(() => initialData);
  const bottonMarkerRef = useRef<HTMLDivElement>(null);
  const { fetchNextPage } = useFetchPage(resource)
  const [loadingNext, setLoadingNext] = useState(false);

  const handleScroll = useDebouncedCallback(
    async () => {
      if (bottonMarkerRef.current) {
        const rect = bottonMarkerRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          setLoadingNext(true);
          const { results } = await fetchNextPage()
          setPageData((prev) => [...prev, ...results])
          setLoadingNext(false);
        }
      }
    },
    300
  );

  const ListMemo = useMemo(() => {
    const Component = memo(MappedResourceCards[resource]);

    if (loadingResource)
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
  }, [foundData, pageData, loadingResource, resource, error]);

  const LoadingNextMemo = useMemo(() => {
    if (loadingNext)
      return <Loading />;

    return null;
  },
    [loadingNext]
  );

  return (
    <ScrollToBottomProvider handleScroll={handleScroll}>
      <StyledList>
        <SearchContainer>
          <SearchInput
            type="text"
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search..."
          />
        </SearchContainer>
        {ListMemo}
        {LoadingNextMemo}
        <div ref={bottonMarkerRef} />
      </StyledList>
    </ScrollToBottomProvider>
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
