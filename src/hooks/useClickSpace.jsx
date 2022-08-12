import { useEffect } from 'react';

export default function useClickSpace(callback, deps) {
  useEffect(() => {
    if (typeof callback !== 'function') {
      return null;
    }
    window.addEventListener('click', callback);

    return () => {
      window.removeEventListener('click', callback);
    };
  }, deps);
}
