import { ResourceType } from '../types/resources';
import { API_URL } from '../common/config';
import { useState } from 'react';

export const useFetchPage = (resource: ResourceType) => {
  const [nextPage, setNextPage] = useState<number | null>(2);

  const fetchNextPage = async () => {
    if (!nextPage)
      return { results: [], next: null };

    try {
      const response = await fetch(`${API_URL}/${resource}?page=${nextPage}`);

      if (!response.ok)
        throw new Error();

      const { results, next } = await response.json();

      setNextPage(Boolean(next) ? nextPage + 1 : null);

      return { results, next: Boolean(next) };
    } catch (error) {
      return { results: [], next: null };
    }
  }

  return { fetchNextPage };
}