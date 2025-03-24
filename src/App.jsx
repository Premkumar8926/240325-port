import React, { Suspense, useState, lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyle } from './styles/globalStyles';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const [selectedPage, setSelectedPage] = useState('about');

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  const renderPage = () => {
    const pages = {
      about: <About setSelectedPage={setSelectedPage} />,
      projects: <Projects />,
      skills: <Skills />,
      contact: <Contact />
    };
    return pages[selectedPage];
  };

  return (
    <ErrorBoundary>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Suspense fallback={<Loading />}>
          <div className="app-container">
            <Navbar
              toggleTheme={toggleTheme}
              isDarkMode={isDarkMode}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <main>
              {renderPage()}
            </main>
          </div>
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
