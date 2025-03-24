import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../assets/5153829.jpg';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    min-height: 100vh;
    color: ${({ theme }) => theme.colorSecondary};
    
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${({ theme }) => `rgba(0, 0, 0, 0.5)`};
      z-index: -1;
    }
  }

  * {
    box-sizing: border-box;
  }
`;
