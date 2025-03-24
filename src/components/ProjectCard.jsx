const ProjectCard = ({ project }) => (
    <Card>
      <picture>
        <source 
          srcSet={project.imageWebp} 
          type="image/webp"
        />
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          width="300"
          height="200"
        />
      </picture>
    </Card>
  );
  