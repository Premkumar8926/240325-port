import React, { memo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { PROJECTS_DATA } from '../constants';

const ProjectsContainer = styled.section`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const ProjectCard = styled(motion.article)`
background: ${({ theme }) => `rgba(${theme.colorPrimary}, 0.8)`};
border-radius: 8px;
padding: 1.5rem;
backdrop-filter: blur(8px);
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
transition: all 0.3s ease;

&:hover {
  background: ${({ theme }) => `rgba(${theme.colorPrimary}, 0.9)`};
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

  .tech-stack {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;
  }

  .tech-tag {
    background: ${({ theme }) => theme.muted};
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.875rem;
  }

  .project-link {
    display: inline-block;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colorSecondary};
    text-decoration: none;
    font-weight: bold;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const TechTag = memo(({ tech }) => (
  <span className="tech-tag">{tech}</span>
));

TechTag.propTypes = {
  tech: PropTypes.string.isRequired,
};

const Projects = () => (
  <ProjectsContainer>
    <h2>My Projects</h2>
    <ProjectsGrid>
      {PROJECTS_DATA.map((project, index) => (
        <ProjectCard
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tech-stack">
            {project.technologies.map(tech => (
              <TechTag key={tech} tech={tech} />
            ))}
          </div>
          <a 
            href={project.link}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} project`}
          >
            View Project
          </a>
        </ProjectCard>
      ))}
    </ProjectsGrid>
  </ProjectsContainer>
);

export default memo(Projects);
