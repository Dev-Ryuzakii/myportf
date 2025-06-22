import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <Nav>
      <NavContainer>
        <Logo href="/">AF</Logo>
        <MenuButton onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
          {isOpen ? (
            <FaTimes size={28} color="#fff" />
          ) : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </MenuButton>
        <NavItems isOpen={isOpen}>
          {menuItems.map((item) => (
            <NavItem
              key={item.name}
              as={motion.a}
              whileHover={{ y: -2 }}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavItem>
          ))}
          <NavIconLink
            href="https://github.com/Dev-Ryuzakii"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            as={motion.a}
            whileHover={{ y: -2, scale: 1.1 }}
          >
            <FaGithub size={22} />
          </NavIconLink>
          <ResumeButton
            as={motion.a}
            whileHover={{ y: -2 }}
            href="https://drive.google.com/file/d/1OxMUcas8jX0U8gkSImTJuM4o5H9ircpr/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </ResumeButton>
        </NavItems>
      </NavContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(24, 26, 32, 0.7);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  color: var(--accent);
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const MenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 2rem;
    height: 0.25rem;
    background: #fff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #181a20;
    padding: 2rem;
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.7);
    z-index: 1001;
  }
`;

const NavItem = styled.a`
  color: var(--secondary);
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent);
  }
`;

const NavIconLink = styled.a`
  color: var(--accent-mint);
  margin: 0 0.5rem;
  display: flex;
  align-items: center;
  transition: color 0.2s;

  &:hover {
    color: var(--accent-primary);
  }
`;

const ResumeButton = styled.a`
  background-color: transparent;
  border: 2px solid var(--accent);
  color: var(--accent);
  padding: 0.75rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--accent);
    color: var(--primary);
  }
`;

export default Navbar;
