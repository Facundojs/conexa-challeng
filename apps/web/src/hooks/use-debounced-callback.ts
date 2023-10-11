import { useEffect, useRef } from 'react';

export function useDebouncedCallback(callback: Function, delay: number) {
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return () => {
      // Cleanup the timer when the component unmounts
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function debouncedCallback() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      return callback();
    }, delay);
  }

  return debouncedCallback;
}
