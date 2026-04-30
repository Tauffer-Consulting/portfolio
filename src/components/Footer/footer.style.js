import styled from 'styled-components'

export const FooterStyled = styled.footer`

  padding: 2.5em 0 5rem;
  background-color: ${({ theme }) => theme.darkTheme.colors.footerBg};
  color: ${({ theme }) => theme.darkTheme.colors.lightGray};

  .footer-container {
    display: flex;
    justify-content: space-between;


    .right {
      text-align: right;

      .findUs {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: 1rem;


        h3 {
          font-size: 1.5em;
          letter-spacing: 0.05em;
        }

        a { 
          color: inherit;
          transition: all .25s;

          margin-left: .75em;
          padding: .25em;
          &:hover {
            color: #fff;
          }
        }
      }
    }

  }


  @media only screen and (max-width: 720px) {

    .footer-container {
      flex-direction: column;
      .left, .right {
        text-align: center;
      }

      .left {
        display: flex; flex-direction: column; align-items: center; justify-content: center;

        p {
          br {
            display: none
          }
        }
      }
  
      .right {
        margin-top: 2rem;
        margin-bottom: 2rem;

        .findUs {
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .links {
            margin-top: 1em;
          }

          a {
            margin: 0 .75em;
          }
        }
      }

    }

  }

  
`
