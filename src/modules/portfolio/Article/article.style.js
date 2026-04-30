import styled from 'styled-components'

export const ArticleStyled = styled.section`
  padding: 2.5rem 0;
  .body {
    max-width: 692px;
    margin: 0 auto;

    .title {
      color: ${({ theme }) => theme.darkTheme.colors.blue800};
      font-size: 2rem;
      margin: 1rem 0;
    }

    .metadata {
      display: flex; 
      justify-content: space-between;
      flex-wrap: wrap;
      p { 
        font-style: italic; margin: .5rem .5rem .5rem 0;
        & > span { font-weight: bold; }
      }
    }

    .content {
      font-size: 1.25rem;
      line-height: 1.65em;
      margin-top: 2em;
      
      a { 
        font-weight: bold;
        color: ${({ theme }) => theme.darkTheme.colors.blue600};
        text-decoration: underline;
        &:hover {
          color: ${({ theme }) => theme.darkTheme.colors.blue400};
        }
      }

      p { 
        margin-top: 2em;
        &:nth-child(1) { margin-top: 0; }
       }


      h2, h3, h4, h5, h6 { 
        color: ${({ theme }) => theme.darkTheme.colors.blue800};
        & + p {
          margin-top: .86em;
        }
      }

      h2 { 
        font-size: 1.1em;
        line-height: 1.27em;
        margin-top: 3.14em;
      }

      h3 { 
        font-size: 1.05em;
        line-height: 1.2em;
        margin-top: 2em;
      }


      img {
        display: block; margin: 1rem auto; max-width: 100%;
      }

      hr {
        display: block;
        margin: 2rem auto;
        border: none;
        height: 1px;
        width: 75%;
        background: linear-gradient(to right, transparent, ${({ theme }) => theme.darkTheme.colors.blue800}, transparent);
        opacity: .1;
      }

      ul, ol {
        li {
          margin-left: 1.5em;
          line-height: 1.4em;
          margin-top: .68em;
          &:first-child {
            margin-top: 2.14em;
            
          }
        }
      }

      blockquote {
        margin-left: -1em;
        padding-left: 1em;
        border-left: 3px solid ${({ theme }) => theme.darkTheme.colors.blue800};
        font-style: italic;
        margin-top: 2em;
      }
    }
  }

  @media only screen and (max-width: calc(692px + 2rem)) {
    .body {
      .content {
        blockquote {
          margin-left: 0;
        }
      }
    }
  }

`
