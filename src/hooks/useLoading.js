import { useEffect, useState } from 'react';

export function useLoading(delay = 500) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), delay);
    return () => window.clearTimeout(timer);
  }, [delay]);

  return isLoading;
}
