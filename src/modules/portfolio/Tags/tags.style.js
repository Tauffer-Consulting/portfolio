import styled from 'styled-components'

export const TagsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: .5rem;

  .tag {
    border-radius: 0.4rem;
    border: 0.1rem solid ${({ theme }) => theme.darkTheme.colors.blue800};
    color: ${({ theme }) => theme.darkTheme.colors.blue500};
    padding: 0.5rem;

    pointer-events: ${({ clickable }) => clickable ? 'all' : 'none'};

    &:hover {
      background-color: ${({ theme }) => theme.darkTheme.colors.inputBorder};
      border: 0.1rem solid ${({ theme }) => theme.darkTheme.colors.mediumBlue};
      color: #c4c9cf;
      cursor: pointer;
      transition: 0.3s;
    }

    &.small {
      border: none;
      font-size: .9rem;
      padding: .25em .5em;
      background: ${({ theme }) => theme.darkTheme.colors.blue100};
      color: ${({ theme }) => theme.darkTheme.colors.blue800};
    }
  }
`
