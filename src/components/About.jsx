import React, { memo } from 'react';
import styled from 'styled-components';
import profileImage from '../assets/pkim.jpg';

const AboutContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
`;

const Card = styled.div`
  width: 350px;
  height: 350px;
  background: white;
  border-radius: 32px;
  padding: 3px;
  position: relative;
  box-shadow: rgba(0, 113, 241, 0.3) 0px 70px 30px -50px;
  transition: all 0.5s ease-in-out;

  &:hover {
    border-top-left-radius: 55px;
  }
`;

const ProfilePic = styled.div`
  position: absolute;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  top: 3px;
  left: 3px;
  border-radius: 29px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease-in-out;
  }

  ${Card}:hover & {
    width: 100px;
    height: 100px;
    top: 10px;
    left: 10px;
    border-radius: 50%;
    border: 7px solid ${({ theme }) => theme.colorSecondary};
   
    img {
      transform: scale(1.2);
    }
  }
`;

const MailButton = styled.button`
  position: absolute;
  right: 2rem;
  top: 1.4rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 3;

  svg {
    stroke: ${({ theme }) => theme.colorSecondary};
    stroke-width: 3px;
    transition: stroke 0.3s ease;

    &:hover {
      stroke: ${({ theme }) => theme.glowColor};
    }
  }
`;


const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  svg {
    height: 20px;
    fill: ${({ theme }) => theme.colorPrimary};
    transition: all 0.3s ease;

    &:hover {
      fill: ${({ theme }) => theme.glowColor};
      transform: scale(1.2);
    }
  }
`;

const Content = styled.div`
  display: none;
  padding: 1.5rem;
  color: #1a1a1a;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    animation: glow 1.5s ease-in-out infinite alternate;
  }

  .role-description {
    font-size: 0.9rem;
    line-height: 1.6;
    margin-top: 1rem;
    color: #333;
    font-weight: 500;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  }
`;

const Bottom = styled.div`
  position: absolute;
  inset: auto 3px 3px 3px;
  background: ${({ theme }) => `rgba(${theme.colorPrimary}, 0.8)`};
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  height: 20%;
  border-radius: 29px;
  z-index: 2;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  display: flex;
  align-items: center;
  justify-content: center;

  .initial-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #1a1a1a;
    text-align: center;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    animation: titleGlow 2s ease-in-out infinite alternate;
  }

  ${Card}:hover & {
    height: 80%;
    top: 20%;
    border-radius: 80px 29px 29px 29px;
    background: ${({ theme }) => `rgba(${theme.colorPrimary}, 0.9)`};
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    
    .initial-title {
      display: none;
    }
    
    ${Content} {
      display: block;
    }
  }
`;

const About = ({ setSelectedPage }) => (
  <AboutContainer>
    <Card>
    <MailButton>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </MailButton>
      <ProfilePic>
        <img src={profileImage} alt="Prem Kumar" />
      </ProfilePic>
      <Bottom>
        <div className="initial-title">Prem Kumar | Full Stack Developer</div>
        <Content>
          <h2>Prem Kumar</h2>
          <p className="role-description">
            Full-Stack Developer | MERN Stack & .NET Specialist | RESTful API & Cloud Integration Expert | Building Scalable, High-Performance Web Applications
          </p>
          <SocialLinks>
            {/* Social Icons */}
          </SocialLinks>
          <button onClick={() => setSelectedPage('contact')}>Contact Me</button>
        </Content>
      </Bottom>
    </Card>
  </AboutContainer>
);

export default memo(About);
