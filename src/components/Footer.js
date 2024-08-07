import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem;
  background: #333;
  color: #fff;
  text-align: center;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="#home">Présentation</FooterLink>
        <FooterLink href="#about">À propos de moi</FooterLink>
        <FooterLink href="#skills">Compétences</FooterLink>
        <FooterLink href="#projects">Projets</FooterLink>
        <FooterLink href="#experience">Expérience</FooterLink>
        <FooterLink href="#contact">Contact</FooterLink>
      </FooterLinks>
      <p>&copy; {new Date().getFullYear()} John Winneby MERISSAINT. Tous droits réservés.</p>
    </FooterContainer>
  );
};

export default Footer;
