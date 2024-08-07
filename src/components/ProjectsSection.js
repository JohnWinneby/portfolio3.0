import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 4rem 2rem;
  background: #f4f4f4;
  color: #333;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProjectCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin: 1rem;
  width: calc(33% - 2rem);
  overflow: hidden;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin: 1rem;
`;

const ProjectsSection = () => {
  return (
    <SectionContainer id="projects">
      <Title>Projets</Title>
      <ProjectList>
        <ProjectCard>
          <ProjectImage src="https://via.placeholder.com/400x250" alt="Projet 1" />
          <ProjectTitle>Projet 1</ProjectTitle>
          <ProjectDescription>Une brève description de ce projet.</ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="https://via.placeholder.com/400x250" alt="Projet 2" />
          <ProjectTitle>Projet 2</ProjectTitle>
          <ProjectDescription>Une brève description de ce projet.</ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="https://via.placeholder.com/400x250" alt="Projet 3" />
          <ProjectTitle>Projet 3</ProjectTitle>
          <ProjectDescription>Une brève description de ce projet.</ProjectDescription>
        </ProjectCard>
      </ProjectList>
    </SectionContainer>
  );
};

export default ProjectsSection;
