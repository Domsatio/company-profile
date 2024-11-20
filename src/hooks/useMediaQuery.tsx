import { useState, useEffect } from 'react';

const useQueryMedia = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);

    // Set initial value
    setMatches(mediaQueryList.matches);

    // Add event listener
    mediaQueryList.addEventListener('change', listener);

    // Cleanup listener on unmount
    return () => mediaQueryList.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

export default useQueryMedia;
