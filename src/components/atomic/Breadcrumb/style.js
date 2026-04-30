import styled from 'styled-components';

export const BreadcrumbContainer = styled.div`
  & > nav {
    width: 100%;
    margin-bottom: 2rem;

    ol {
      display: inline-flex;
      flex-wrap: wrap;
      gap: 0.8rem;

      li {
        color: ${({ theme, clear }) => clear ? theme.darkTheme.colors.blue100 : '#333534'} ;
        list-style: none;
        text-transform: uppercase ;
        font-size: .75rem;
        line-height: 1.5em;
        vertical-align: middle;

        a { color: inherit; }

        &:hover {
          color: ${({theme, clear})=> clear ? theme.darkTheme.colors.blue300 : theme.darkTheme.colors.darkerBlue };
        }

        &::after {
          content: " / ";
          color: ${({theme}) => theme.darkTheme.colors.mediumBlue};
          font-size: 1.5em;
          font-weight: 900;
          margin: auto;
          vertical-align: middle;
        }

        &:last-child::after {
          content: unset;
        }
      }
    }

    @media only screen and (max-width: 992px) {
      display: none;
    }
  }
`;
