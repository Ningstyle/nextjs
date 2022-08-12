import { useEffect } from 'react';

export default function useResize(callback, deps) {
  useEffect(() => {
    if (typeof callback !== 'function') {
      return null;
    }
    window.addEventListener('resize', callback);

    return () => {
      window.removeEventListener('resize', callback);
    };
  }, deps);
}
