import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

// Animation pour le fondu en entrée
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Animation pour le déplacement en entrée
const slideIn = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const SectionContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('/phare.png') no-repeat center center/cover;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Assombrit l'image de fond pour améliorer la lisibilité du texte */
    z-index: 1;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2; /* Assurez-vous que le contenu est au-dessus de l'ombre de fond */
`;

const Slogan = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: ${slideIn} 1s ease-out, ${fadeIn} 2s ease-in;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const IntroText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  animation: ${slideIn} 1.5s ease-out, ${fadeIn} 2.5s ease-in;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
`;

const Button = styled(ScrollLink)`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: white;
  background: #1e90ff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  animation: ${slideIn} 2s ease-out, ${fadeIn} 3s ease-in;
  transition: background 0.3s, transform 0.3s;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  &:hover {
    background: #0056b3;
    transform: scale(1.05);
  }
`;

const HomeSection = () => {
  return (
    <SectionContainer>
      <Content>
        <Slogan>Développeur Backend Passionné - Transformant les idées en réalité numérique</Slogan>
        <IntroText>
          Bienvenue sur mon portfolio ! Je suis John Winneby MERISSAINT, développeur backend chez Compuconsult.
          Passionné par la technologie et le développement de solutions innovantes.
        </IntroText>
        <Button to="about" smooth={true} duration={500}>
          En savoir plus
        </Button>
      </Content>
    </SectionContainer>
  );
};

export default HomeSection;
