import styled from 'styled-components';

export const Container = styled.div`
  min-width: 25rem;
  min-height: 3.5em;
  position: relative;
  max-height: 100%;
`;

export const InputBox = styled.input`
  border-radius: 1rem;
  border: 2px solid ${({ theme}) => theme.darkTheme.colors.lightGray };
  font-size: 1.2em;
  color: ${({ theme}) => theme.darkTheme.colors.darkerBlue };
  height: 100%;
  left: 0;
  padding: 1em 2em;
  position: absolute;
  outline: none;
  top: 0;
  transition: 0.5s;
  width: 100%;

  &:focus {
    border: 4px solid ${({theme})=> theme.darkTheme.colors.purpleLink };
  }
`;

export const InputPlaceholder = styled.label`
  background-color: ${({isFocused}) => isFocused ? '' : '#FCFCFC'}; 
  cursor: text;
  color: ${({isFocused }) => isFocused ? 
    '#969ca3' : 
    '#59405C'};
  
  font-size: ${({isFocused}) => isFocused ? '1.4em' : '1em'};
  left: 1em;
  margin-bottom: 0.5em;
  padding: 0 0.5rem;
  position: absolute;
  top: ${props => props.isFocused ? '0.6em' : '-0.5em'};
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
`;