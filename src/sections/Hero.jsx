import styled from 'styled-components';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import Typewriter from 'typewriter-effect';
import heroBg from '../assets/hero-blob.json';
import { FaReact, FaMobileAlt } from 'react-icons/fa';
import { SiFlutter, SiDart } from 'react-icons/si';

const Hero = () => {
  return (
    <HeroSection>
      <LottieBg as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ duration: 1 }}>
        <Lottie animationData={heroBg} loop style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: 0 }} />
      </LottieBg>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ position: 'relative', zIndex: 2 }}
        >
          <Greeting>Hi, I'm</Greeting>
          <Name>Abdulrasaq Falade</Name>
          <TypewriterWrap>
            <Typewriter
              options={{
                strings: [
                  'Full Stack & Mobile Developer.',
                  'React, Flutter & Dart Enthusiast.',
                  'I build futuristic digital solutions.'
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 20,
                pauseFor: 2000
              }}
            />
          </TypewriterWrap>
          <IconRow>
            <FaReact size={32} color="#00e676" title="React" />
            <SiFlutter size={32} color="#00e676" title="Flutter" />
            <SiDart size={32} color="#00e676" title="Dart" />
            <FaMobileAlt size={32} color="#00e676" title="Mobile" />
          </IconRow>
          <Description>
            I craft exceptional web and mobile experiences with code, creativity, and a vision for the future.
          </Description>
          <CTAButton 
            as={motion.button}
            whileHover={{ scale: 1.08, boxShadow: '0 4px 24px var(--accent)' }}
            whileTap={{ scale: 0.96 }}
          >
            Explore My World
          </CTAButton>
        </motion.div>
      </Container>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: var(--background);
`;

const LottieBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  pointer-events: none;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;
`;

const Greeting = styled.h3`
  color: var(--accent);
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const TypewriterWrap = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 2rem;
  min-height: 2.5em;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const IconRow = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: var(--text-secondary);
`;

const CTAButton = styled.button`
  background: transparent;
  border: 2px solid var(--accent-mint);
  color: var(--accent-mint);
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  border-radius: 6px;
  font-weight: 600;
  box-shadow: 0 2px 16px rgba(0,230,160,0.08);
  transition: all 0.3s cubic-bezier(.4,2,.3,1), background 0.2s, color 0.2s;
  margin-top: 1.5rem;
  letter-spacing: 0.03em;

  &:hover {
    background: var(--accent-mint);
    color: var(--background);
    box-shadow: 0 4px 24px var(--accent-mint);
    border-color: var(--accent-mint);
  }
`;

export default Hero;
