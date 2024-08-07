import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  color: #333;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: auto;
  padding: 0 1rem;
`;

const TimelineItem = styled.div`
  background: #f4f4f4;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    height: 100%;
    width: 4px;
    background: #1e90ff;
    transform: translateX(-50%);
  }
`;

const TimelineTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const TimelineDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const ExperienceSection = () => {
  return (
    <SectionContainer id="experience">
      <Title>Expérience</Title>
      <Timeline>
        <TimelineItem>
          <TimelineTitle>Développeur Backend chez Compuconsult</TimelineTitle>
          <TimelineDescription>
            Développement et optimisation d'architectures backend pour diverses applications.
          </TimelineDescription>
        </TimelineItem>
        <TimelineItem>
          <TimelineTitle>Stagiaire chez Compu Consult Haiti</TimelineTitle>
          <TimelineDescription>
            Participation au développement de solutions web et vente de technologies.
          </TimelineDescription>
        </TimelineItem>
      </Timeline>
    </SectionContainer>
  );
};

export default ExperienceSection;
