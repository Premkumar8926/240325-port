import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';

const NAV_ITEMS = ['about', 'projects', 'skills', 'contact'];

const Navbar = ({ toggleTheme, isDarkMode, selectedPage, setSelectedPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledWrapper isScrolled={isScrolled}>
      <div className="container">
        <nav className="wrap">
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ 
               position: "absolute",
               left: 20, // Adjust this value for spacing from the left edge
               top: "50%", // Centers it vertically
               transform: "translateY(-50%)",
               bgcolor: deepPurple[500],
               cursor: "pointer",
               transition: "transform 0.3s ease",
               "&:hover": {
                 transform: "scale(1.1)",
              }
            }}>
              PK
            </Avatar>
          </Stack>
          <div className="nav-items">
            {NAV_ITEMS.map((page, index) => (
              <div key={page} className="nav-item-wrapper">
                <input
                  hidden
                  className={`rd-${index + 1}`}
                  name="radio"
                  id={`rd-${index + 1}`}
                  type="radio"
                  checked={selectedPage === page}
                  onChange={() => setSelectedPage(page)}
                />
                <label 
                  className={`label ${selectedPage === page ? 'active' : ''}`} 
                  htmlFor={`rd-${index + 1}`}
                >
                  <span>{page.charAt(0).toUpperCase() + page.slice(1)}</span>
                </label>
              </div>
            ))}
            <div className="slidebar" />
          </div>
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            <span className={isDarkMode ? 'dark' : 'light'}>
              {isDarkMode ? '🌙' : '☀️'}
            </span>
          </button>
        </nav>
      </div>
    </StyledWrapper>
  );
};

Navbar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  selectedPage: PropTypes.string.isRequired,
  setSelectedPage: PropTypes.func.isRequired
};

const StyledWrapper = styled.div`
  .container {
    display: flex;
    width: 100%;
  }

  .wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 30px;
    background: ${({ theme }) => theme.colorPrimary};
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    z-index: 1000;
  }

  .nav-items {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .label {
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colorSecondary};
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 8px;
    
    &.active {
      background: ${({ theme }) => theme.muted};
      color: ${({ theme }) => theme.colorPure};
    }

    &:hover:not(.active) {
      background: ${({ theme }) => theme.colorSecondary}10;
    }
  }

  .theme-toggle {
    margin-left: 20px;
    padding: 10px;
    border-radius: 50%;
    border: none;
    background: transparent;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: rotate(15deg);
    }

    span {
      font-size: 1.2rem;
    }
  }
`;

export default Navbar;
