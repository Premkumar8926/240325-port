import { FixedSizeList } from 'react-window';

const ProjectList = ({ projects }) => (
  <FixedSizeList
    height={400}
    width="100%"
    itemCount={projects.length}
    itemSize={100}
  >
    {({ index, style }) => (
      <ProjectCard 
        project={projects[index]} 
        style={style}
      />
    )}
  </FixedSizeList>
);
