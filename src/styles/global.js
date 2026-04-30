import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Sans', sans-serif
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Merriweather', serif
  }

  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-track {
    background: #6d747d; 
  }

  ::-webkit-scrollbar-thumb {
    background: #333534;
    border-radius: 2rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #969ca3;
  }

  [disabled] {
    // esta regra serve para estilizar tudo que está desabilitado na página
    opacity: 0.6;
    cursor: not-allowed;
  }  


  .hidden-desktop {
    display: none;
  }

  @media only screen and (max-width: 1024px) {
    .hidden-mobile {
      display: none;
    }
    .hidden-desktop {
      display: block;
    }
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fontStyle.sansSerif};
  color: #b7b7b7;
  font-size: ${({ theme }) => theme.fontSize.title};
  text-align: center;

  &:hover {
    transition: ${({ theme }) => theme.transitions.ease(20)};
  }
`;
