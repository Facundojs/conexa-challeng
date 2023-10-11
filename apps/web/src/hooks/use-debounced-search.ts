
import { Resource, ResourceType } from '../types/resources';
import { API_URL } from '../common/config';
import { useState, useRef } from 'react';

const DEBOUNCE_DELAY = 300;

export const useResourceSearch = (resource: ResourceType) => {
  const [data, setData] = useState<Resource[]|null>(null);
  const [error, setError] = useState<string|null>(null);
  const debounceTimeoutRef = useRef<NodeJS.Timeout>();
  const [loading, setLoading] = useState(false);

  const fetchResource = async (query: string) => {
    if (!query) {
      setData(null);
      return
    }
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/${resource}?search=${query}`);

      if (!response.ok) {
        throw new Error();
      }
      const { results } = await response.json();
      setData(results);
      setError(null);
    } catch (error) {
      setError("Ha ocurrido un error al cargar los datos");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query: string) => {
      clearTimeout(debounceTimeoutRef?.current);
      debounceTimeoutRef.current = setTimeout(() => {
        fetchResource(query);
      }, DEBOUNCE_DELAY);
    }

  return { error, loading, handleSearch, data };
};

