import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1em;
  justify-content: space-between;
  max-width: 80vw;
  margin-bottom: 2em;
`;

export const FilterButton = styled.button`
  background: none;
  border: none;
  color: #b7b7b7;
  font-size: 1.3em;
  padding: 0.8rem 1.6rem;
  position: relative;

  &:focus-within {
    color: ${({theme}) => theme.darkTheme.colors.darkerBlue}
  }

  &:focus-within:after {
    color: ${({theme}) => theme.darkTheme.colors.buttonBlueHover};
    width: 100%;
  }
  
  &:hover {
    color: white;
  }
  
  &:after {
    content:" ";
    background-color: #76756f;
    border-radius: 4rem;
    bottom: -0.3rem;
    height: 0.3rem;
    left: 0;
    position: absolute;
    transition: 0.4s;
    width: 0;
  }

  &:hover:after {
    width: 100%;
  }
`;