import styled from 'styled-components';

export const DefaultButton = styled.button`
  background-color: ${({ theme }) => theme.darkTheme.colors.buttonBlue};
  border-radius: 0.8em;
  border: none;
  color: ${({ theme }) => theme.darkTheme.colors.buttonBlueText};
  font-size: 1.3em;
  font-weight: 300;
  padding: 0.8em 1.6em;
  min-width: 2em;

  &:hover {
    background-color: #607D8B;
    /* background-color: ${({ theme }) => theme.darkTheme.colors.blue500 }; */
    color: ${({ theme }) => theme.darkTheme.colors.buttonBlueHoverTxt};
  }
`;
