import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Conteneur principal de la section
const SectionContainer = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('/pexels-photo-238118_copy1.jpeg') no-repeat center center;
  background-size: cover;
`;

// Fond fixe de la section avec l'image
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Assombrit l'image de fond pour améliorer la lisibilité du texte */
  z-index: -1;
`;

// Contenu défilant
const Content = styled.div`
  height: 100%;
  width: 80%;
  overflow-y: auto;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

// Conteneur pour les boîtes
const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

// Boîte pour chaque section
const Box = styled.div`
  background: rgba(255, 255, 255, 0.8); /* Ajustez l'opacité pour rendre le fond plus transparent */
  backdrop-filter: blur(5px); /* Ajoute un effet de flou pour une meilleure lisibilité */
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px; /* Largeur maximale pour chaque boîte */
`;

// Photo avec effet de survol
const Photo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

// Titre de la section
const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

// Grand titre de la page
const MainTitle = styled.h1`
  font-size: 3.5rem;
  color: white;
  margin-bottom: 2rem;
`;

// Contenu du texte
const TextContent = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const AboutSection = () => {
  const navigate = useNavigate();

  // Gère le défilement pour passer à la section suivante
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition >= sectionHeight) {
        navigate('/skills'); // Remplace '/skills' par l'ID ou la route de la section suivante
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navigate]);

  return (
    <SectionContainer id="about">
      <Background />
      <Content>
        <MainTitle>About Me</MainTitle>
        <BoxContainer>
          <Box>
            <Photo src="https://via.placeholder.com/150" alt="John Winneby MERISSAINT" />
            <Title>Who I Am</Title>
            <TextContent>
              Je suis John Winneby MERISSAINT, un développeur backend avec une passion pour la création de solutions numériques robustes.
              Avec une formation en ingénierie électronique et une expérience dans le développement de solutions technologiques,
              je me concentre sur l'optimisation et la création d'architectures backend efficaces.
            </TextContent>
          </Box>
          <Box>
            <Title>What I Want</Title>
            <TextContent>
              Mon objectif est de contribuer activement à l'optimisation de la production industrielle au sein d'une entreprise innovante.
              Je cherche à développer des solutions backend à l'aide de technologies modernes telles que Laravel et Firebase.
            </TextContent>
          </Box>
          <Box>
            <Title>My Expertise</Title>
            <TextContent>
              Mon expertise inclut le développement de solutions backend, la gestion de bases de données, et l'optimisation des performances.
              Je suis impliqué dans des projets de développement de sites web et de solutions technologiques avancées.
            </TextContent>
          </Box>
          <Box>
            <Title>My Experience</Title>
            <TextContent>
              Je suis actuellement développeur backend chez Compuconsult, où je travaille sur divers projets visant à améliorer la performance et
              la fiabilité des systèmes. Auparavant, j'ai acquis une expérience précieuse en tant que stagiaire chez Compu Consult Haiti,
              où j'ai travaillé sur le développement web et la vente de solutions technologiques.
            </TextContent>
          </Box>
          <Box>
            <Title>My Interests</Title>
            <TextContent>
              En dehors du développement, je m'intéresse à l'apprentissage continu et à la mise à jour des compétences dans un domaine en
              constante évolution. Je suis passionné par la résolution de problèmes complexes et la création de solutions innovantes pour
              répondre aux besoins des utilisateurs.
            </TextContent>
          </Box>
        </BoxContainer>
      </Content>
    </SectionContainer>
  );
};

export default AboutSection;
