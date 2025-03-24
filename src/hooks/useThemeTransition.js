import { useEffect } from 'react';

export const useThemeTransition = (isDarkMode) => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--transition-speed',
      '0.3s'
    );
    document.documentElement.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);
};
