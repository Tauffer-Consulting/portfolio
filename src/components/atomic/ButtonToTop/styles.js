import styled from 'styled-components';

export const ButtonToTopContainer = styled.div`
  background-color: ${({theme}) => theme.darkTheme.colors.black };
  border-radius: 20rem;
  color: white;
  bottom: 2rem;
  cursor: pointer;
  height: 3.2rem;
  justify-content: center;
  position: fixed;
  right: 2rem;
  opacity: ${({ animateHeader}) => animateHeader ? '0.7' : '0'};
  width: 3.2rem;
  z-index: 1;
  transition: 0.5s opacity;

  & > svg {
    margin: 0.6rem;
  }

  /* &:hover {
    opacity: 1;
  } */

  &:hover {
    animation: move 1.5s ease-in-out 0.2s;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 0.6; }
  }

  @keyframes move {
    0% { transform: translateY(0); }
    50% { transform: translateY(-1rem); }
    100% { transform: translateY(0); }
  }

`;

export const Button = styled.div`
   align-items: center;
   display: flex;
   justify-content: center;
`