import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <FooterContainer>
    <SocialLinks>
      <FooterIconLink href="https://github.com/Dev-Ryuzakii" target="_blank" rel="noopener noreferrer" title="GitHub">
        <FaGithub size={22} />
      </FooterIconLink>
      <FooterIconLink href="https://www.linkedin.com/in/abdulrasaq-falade-2a955024a/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <FaLinkedin size={22} />
      </FooterIconLink>
      <FooterIconLink href="mailto:abdulrasaq.faladerasaq22@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
        <FaEnvelope size={22} />
      </FooterIconLink>
      <FooterIconLink href="https://x.com/life_of_ayomi" target="_blank" rel="noopener noreferrer" title="Twitter">
        <FaTwitter size={22} />
      </FooterIconLink>
    </SocialLinks>
    <Copyright>
      &copy; {new Date().getFullYear()} Abdulrasaq Falade. All rights reserved.
    </Copyright>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  width: 100%;
  background: var(--card-bg);
  color: var(--text-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0 1rem 0;
  margin-top: 3rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const FooterIconLink = styled.a`
  color: var(--accent-mint);
  transition: color 0.2s, transform 0.2s;
  &:hover {
    color: var(--accent-primary);
    transform: scale(1.15);
  }
`;

const Copyright = styled.div`
  font-size: 0.95rem;
  color: var(--text-secondary);
`;

export default Footer;
