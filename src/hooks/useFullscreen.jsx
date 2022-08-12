import { useEffect } from 'react';

export function useFullscreen(callback, deps) {
  useEffect(() => {
    if (typeof callback !== 'function') {
      return null;
    }
    document.addEventListener('fullscreenchange', callback);

    return () => {
      document.removeEventListener('fullscreenchange', callback);
    };
  }, deps);
}
