import styled from 'styled-components'

export const Error404Styled = styled.div`

  .main {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;

  .img {
    position: relative;

    width: 300px;
    max-width: 100%;

    &::before {
      content: '';
      width: 100%;
      padding-bottom: 51.369%;
      display: block;
    }

    flex: 0 0 auto;
  }

  .content {
    flex: 0 0 auto;

    margin-left: 5%;


    h3 {
      color: ${({ theme }) => theme.darkTheme.colors.blue800};
      font-family: 'Merriweather', serif;
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 5%;
    }

    a {
      font-weight: bold;
      font-size: 1.15rem;
      padding: .5em 1em;
      color: ${({ theme }) => theme.darkTheme.colors.blue700};
      border: 2px solid ${({ theme }) => theme.darkTheme.colors.blue700};
      border-radius: 4px;
      transition: all .25s;

      display: inline-block;

      & + a {
        margin-left: 1em;
      }


      &:hover {
        background: ${({ theme }) => theme.darkTheme.colors.blue700};
        border-color: ${({ theme }) => theme.darkTheme.colors.blue700};
        color: #fff;
        cursor: pointer;
      }


    }
    
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    .content {
      margin: 2rem 0 0;
      width: 100%;
      text-align: center;
    }
  }

  @media only screen and (max-width: 400px) {
    .content {
      a {
        display: block;
        width: 100%;
        margin: 0;

        & + a {
          margin: 1rem 0 0;
        }
      }
    }
  }
}

`
