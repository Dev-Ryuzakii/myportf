import styled from 'styled-components';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <ContentWrapper>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <AboutText>
              I'm an AI Engineer and Software Engineer passionate about crafting intelligent and seamless digital experiences. 
              I merge creativity, logic, and innovation to build smart web and mobile applications that make technology feel effortless and human.
            </AboutText>
            <AboutText>
              When I’m not developing or training AI models, I’m exploring new tools, building mobile solutions, contributing to open-source projects, 
              or sharing insights with the developer community through mentorship and collaboration.
            </AboutText>
          </motion.div>
        </ContentWrapper>
      </Container>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  background-color: var(--primary);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--secondary);
  margin-bottom: 3rem;
  text-align: center;

  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background-color: var(--accent);
    margin: 20px auto 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 1.5rem;
  max-width: 800px;
`;

export default About;
