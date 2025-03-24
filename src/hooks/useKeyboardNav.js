import { useEffect } from 'react';

export const useKeyboardNav = (items, currentIndex, setCurrentIndex) => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      switch(e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          setCurrentIndex((prev) => (prev + 1) % items.length);
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [items.length, setCurrentIndex]);
};
