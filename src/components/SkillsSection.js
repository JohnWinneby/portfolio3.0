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

const SkillList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const SkillItem = styled.div`
  background: #f4f4f4;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
`;

const SkillProgress = styled.div`
  background: #ddd;
  border-radius: 4px;
  margin-top: 0.5rem;
  height: 10px;
  width: 100%;
  position: relative;
  &::after {
    content: '';
    background: #1e90ff;
    height: 100%;
    width: ${(props) => props.progress}%;
    position: absolute;
    top: 0;
    left: 0;
    transition: width 1s ease;
  }
`;

const SkillsSection = () => {
  return (
    <SectionContainer id="skills">
      <Title>Compétences</Title>
      <SkillList>
        <SkillItem>
          <SkillTitle>Node.js</SkillTitle>
          <SkillProgress progress={80} />
        </SkillItem>
        <SkillItem>
          <SkillTitle>Express</SkillTitle>
          <SkillProgress progress={75} />
        </SkillItem>
        <SkillItem>
          <SkillTitle>MySQL</SkillTitle>
          <SkillProgress progress={70} />
        </SkillItem>
        <SkillItem>
          <SkillTitle>MongoDB</SkillTitle>
          <SkillProgress progress={65} />
        </SkillItem>
        <SkillItem>
          <SkillTitle>Firebase</SkillTitle>
          <SkillProgress progress={60} />
        </SkillItem>
        <SkillItem>
          <SkillTitle>React</SkillTitle>
          <SkillProgress progress={50} />
        </SkillItem>
        <SkillItem>
          <SkillTitle>Git</SkillTitle>
          <SkillProgress progress={85} />
        </SkillItem>
      </SkillList>
    </SectionContainer>
  );
};

export default SkillsSection;
