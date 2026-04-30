import styled from 'styled-components';

export const DynamicCardStyled = styled.div`
  height: 100%;
  border: 0rem solid rgba(25,25,25,0.4);
  box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.47);
  border-radius: 10px;
  padding: 5% 7.5% 7.5%;
  background: ${({ theme }) => theme.darkTheme.colors.lighterGray};

  header {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 1.5em;

    h3 {
      color: ${({ theme }) => theme.darkTheme.colors.blue900};
      font-size: 1.5em;
      padding-left: .75em;
    }

    .icon {
      flex: 0 0 auto;
    }
  }

  .bodyText {
    color: ${({ theme }) => theme.darkTheme.colors.darkGray};
    font-size: 1.2em;
    line-height: 1.4em;
    margin-bottom: 1em;
    text-align: left;
  }

  .emphasis { 
    color: ${({ theme }) => theme.darkTheme.colors.blue800};
    font-size: 1.15em;
    margin-bottom: 1rem;
    text-align: left;
  }
`;


export const CardList = styled.ul`
  color: ${({ theme }) => theme.darkTheme.colors.darkGray};
  list-style: none;
  outline: none;
  padding-left: 1.6em; // compensate li marker

  li {
    cursor: default;
    font-size: 1.2em;
    padding-bottom: 0.3em;
  }

  li::marker {
    content: "✓";
    font-size: 1.2em;
    color: ${({ theme }) => theme.darkTheme.colors.blue500};
  }

  li:hover::marker {
    color: ${({ theme }) => theme.darkTheme.colors.inputBorderFocus};
    transition: .3s ease-in-out;
  }
`
