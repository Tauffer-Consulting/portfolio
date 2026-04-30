import styled from 'styled-components'

export const PortfolioStyled = styled.section`
  padding: calc(59px + 2rem) 0; // header + extra height
  background: ${({ theme }) => theme.darkTheme.colors.blue800};

  .title {
    color: ${({ theme }) => theme.darkTheme.colors.blue100};
    font-size: 3.2em;
    text-align: center;
  
    a {
      color: ${({ theme }) => theme.darkTheme.colors.darkGray};
    }
  }

  .subtitle {
    color: ${({ theme }) => theme.darkTheme.colors.blue100};
    font-size: 1.5em;
    margin: 2em auto 2.5em;
    text-align: center;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    gap: 1rem;
  }

  .card { width: calc(25% - 1rem); }

  @media only screen and (max-width: 1200px) {
    .card { width: calc(50% - 1rem); }
  }

  @media only screen and (max-width: 768px) {
      .title { font-size: 2.5rem; }
    }

    @media only screen and (max-width: 560px) {
      padding: calc(59px + 1.5rem) 0 1.5rem;
      .title { font-size: 1.75rem }
      .subtitle { 
        font-size: 1.25rem;
        margin: .75em 0 1em;
        br { display: none;}
      }

      .card { width: 100%; }
    }

`
