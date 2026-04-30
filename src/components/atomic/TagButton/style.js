import styled from 'styled-components';

export const TagsButton = styled.span`
  border-radius: 0.4rem;
  border: 0.1rem solid ${({theme}) => theme.darkTheme.colors.blue800 };
  color: ${({theme}) => theme.darkTheme.colors.blue500 };
  font-family: ${({theme}) => theme.fontStyle.sansSerif};
  padding: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 1.8rem;

  &:hover {
    background-color: ${({theme}) => theme.darkTheme.colors.inputBorder };
    border: 0.1rem solid ${({theme}) => theme.darkTheme.colors.mediumBlue };
    color: #c4c9cf;
    cursor: pointer;
    transition: 0.3s;
  }
`;
