import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../constants';

const SkillsContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const CategorySection = styled.div`
  margin: 2rem 0;
`;

const StyledSkillItem = styled(motion.div)`
  padding: 1rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colorPrimary};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  
  .skill-level {
    height: 4px;
    background: ${({ theme }) => theme.muted};
    border-radius: 2px;
    margin-top: 8px;
    
    .level-indicator {
      height: 100%;
      background: ${({ theme }) => theme.glowColor};
      border-radius: 2px;
      transition: width 0.3s ease;
    }
  }
`;

const SkillItem = React.memo(({ skill }) => (
  <StyledSkillItem
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <h4>{skill.name}</h4>
    <div className="skill-level">
      <div
        className="level-indicator"
        style={{
          width: skill.level === 'Advanced' ? '100%' :
                 skill.level === 'Intermediate' ? '75%' : '50%'
        }}
      />
    </div>
  </StyledSkillItem>
));

const Skills = () => {
  const categories = [...new Set(SKILLS_DATA.map(skill => skill.category))];

  return (
    <SkillsContainer>
      <h2>Skills</h2>
      {categories.map(category => (
        <CategorySection key={category}>
          <h3>{category}</h3>
          <div style={{ 
            display: 'grid', 
            gap: '1rem', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' 
          }}>
            {SKILLS_DATA
              .filter(skill => skill.category === category)
              .map(skill => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
          </div>
        </CategorySection>
      ))}
    </SkillsContainer>
  );
};

export default Skills;
