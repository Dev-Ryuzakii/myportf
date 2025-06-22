import styled from 'styled-components';
import { motion } from 'framer-motion';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Get In Touch</SectionTitle>
        <ContactWrapper>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea id="message" rows="5" required />
              </FormGroup>
              <SubmitButton
                as={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
              >
                Send Message
              </SubmitButton>
            </ContactForm>
          </motion.div>
        </ContactWrapper>
      </Container>
    </ContactSection>
  );
};

const ContactSection = styled.section`
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

const ContactWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: var(--secondary);
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--secondary);
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--secondary);
  font-size: 1rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--accent);
  color: var(--primary);
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--accent);
    opacity: 0.9;
  }
`;

export default Contact;
