import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #0F0F1A;
    --background-light: #F8F9FC;
    --text-primary: #FFFFFF;
    --text-secondary: #B0B7C3;
    --accent-primary: #5D5FEF;
    --accent-secondary: #FF6B6B;
    --accent-mint: #00E6A0;
    --card-bg: #161822;
    --card-border: #2A2E3A;
    --icon-color: var(--accent-mint);
    --placeholder: #292D3E;
    --gradient-accent: linear-gradient(135deg, #5D5FEF, #FF6B6B);
    --gradient-glow: radial-gradient(circle, rgba(93,95,239,0.15), rgba(0,0,0,0));
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--background);
    color: var(--text-primary);
    transition: background-color 0.4s ease, color 0.4s ease;
    min-height: 100vh;
  }

  a {
    color: var(--accent-primary);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: var(--accent-secondary);
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
    background: var(--gradient-accent);
    color: var(--text-primary);
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    transition: transform 0.2s ease, box-shadow 0.3s ease;
  }

  button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(93, 95, 239, 0.3);
  }

  section {
    padding: 80px 0;
    position: relative;
  }

  section::before {
    content: '';
    position: absolute;
    top: -40px;
    left: -40px;
    width: 120px;
    height: 120px;
    background: var(--gradient-glow);
    border-radius: 50%;
    filter: blur(60px);
    z-index: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 1.05rem;
  }

  input, textarea {
    background: var(--card-bg);
    color: var(--text-primary);
    border: 1px solid var(--card-border);
    border-radius: 8px;
    padding: 0.75rem 1rem;
    transition: border-color 0.3s ease;
  }

  input::placeholder, textarea::placeholder {
    color: var(--placeholder);
  }

  input:focus, textarea:focus {
    border-color: var(--accent-primary);
    outline: none;
  }

  @media (max-width: 768px) {
    section {
      padding: 60px 0;
    }

    h1 {
      font-size: 2rem;
    }
  }
`;
