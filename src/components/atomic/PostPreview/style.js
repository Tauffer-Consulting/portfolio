import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 1.7rem;
  max-width: 35vw;
`;

export const ArticleTitleContainer = styled.div`
  height: 4rem;
  margin: 1rem 0 1.6rem 0;
`;

export const ArticleTitle = styled.h3`
  font-size: 1.7em;

  & a {
    color: #B7B7B7;
  }

  & a:hover {
    color: #e1e1e1;
  }

  /* & a:visited {
    color: #b8b8b8;
  } */
`;

// estilo antigo
// export const DateDisplay = styled.div`
//   background-color: ${({theme}) =>  theme.darkTheme.colors.blue50};
//   border-radius: 0.5rem;
//   display: flex;
//   margin-bottom: 1.5rem;
//   padding: 0.5rem;
//   width: fit-content;

//   & > time {
//     font-size: 1.2m;
//     margin: auto 0.5rem;
//   }
// `;

export const DateDisplay = styled.div`
  border-bottom: 2px solid ${({theme}) => theme.darkTheme.colors.blue800 };
  display: flex;
  font-family: ${({theme}) => theme.fontStyle.sansSerif };
  margin-bottom: 1.5rem;
  padding: 0.5rem;

  & > time {
    color: ${({theme}) => theme.darkTheme.colors.blue300};
    font-size: 1.2m;
    margin: auto 0.5rem;
  }
`;

export const ArticleResume = styled.p`
  color: ${({theme}) => theme.darkTheme.colors.hoverLinkColor };
  font-size: 1.3em;
  margin-bottom: 1rem;
  min-height: 6rem;
`;

export const TagButtonContainer = styled.div`
  display: inline-flex;
`;

export const TagsButton = styled.span`
  background-color: ${({theme}) => theme.darkTheme.borderOrange};
  border-radius: 0.4rem;
  border: 0.1rem solid ${({theme}) => theme.darkTheme.blue300};
  color: ${({theme}) => theme.darkTheme.blue600};
  font-family: ${({theme}) => theme.fontStyle.sansSerif};
  padding: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 1.8rem;

  &:hover {
    cursor: pointer;
  }
`;
