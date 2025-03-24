import React from 'react';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
  .loader {
    width: 50px;
    height: 50px;
    border: 5px solid ${({ theme }) => theme.colorSecondary};
    border-radius: 50%;
    border-top-color: ${({ theme }) => theme.glowColor};
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => (
  <LoadingWrapper>
    <div className="loader" />
  </LoadingWrapper>
);

export default Loading;
