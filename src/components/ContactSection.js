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

const Form = styled.form`
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 1rem;
  background: #1e90ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    background: #0056b3;
  }
`;

const SocialLinks = styled.div`
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  margin: 0 0.5rem;
  font-size: 1.5rem;
  color: #1e90ff;
  transition: color 0.3s ease;
  &:hover {
    color: #0056b3;
  }
`;

const ContactSection = () => {
  return (
    <SectionContainer id="contact">
      <Title>Contact</Title>
      <Form>
        <Input type="text" name="name" placeholder="Nom" required />
        <Input type="email" name="email" placeholder="Email" required />
        <Input type="text" name="subject" placeholder="Sujet" required />
        <Textarea name="message" rows="6" placeholder="Message" required />
        <Button type="submit">Envoyer</Button>
      </Form>
      <SocialLinks>
        <SocialIcon href="https://facebook.com" target="_blank">F</SocialIcon>
        <SocialIcon href="https://twitter.com" target="_blank">T</SocialIcon>
        <SocialIcon href="https://linkedin.com" target="_blank">L</SocialIcon>
      </SocialLinks>
    </SectionContainer>
  );
};

export default ContactSection;
