import styled from 'styled-components'

export const SolutionsStyled = styled.section`
  padding: calc(59px + 3rem) 0; // header + extra height
  margin-bottom: 0rem;
  position: relative;
  z-index: 2;
  background: ${({ theme }) => theme.darkTheme.colors.lightGray};

  .title {
    color: ${({ theme }) => theme.darkTheme.colors.blue800};
    font-family: 'Merriweather', serif;
    font-size: 1.5em;
    font-weight: 600;
    margin-bottom: 5%;
    text-align: center;
    line-height: 1.5em;
  }

  .cards {
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;
  }

  @media only screen and (max-width: 1200px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (max-width: 768px) {
    .cards {
      grid-template-columns: 1fr;
    }
  }

  @media only screen and (max-width: 568px) {

    padding: calc(59px + 1.5rem) 0 1.5rem;
    margin-bottom: 0;

    padding-top: calc(59px + 1.5rem);

    .title {
      font-size: 1.25em;
      br {
        display: none;
      }
    }
  }
`
