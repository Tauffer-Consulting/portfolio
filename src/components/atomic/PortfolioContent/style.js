import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 0;
`;

export const PortfolioHeader = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-around;
`;

export const PortfolioText = styled.h2`
  color: #b7b7b7;
  font-size: 3.2em;
  margin-bottom: 2rem;
`;

export const PortfolioGrid = styled.div`
  display: grid;
  min-width: 70vw;
  justify-content: center;
  grid-template-columns: 40% 40%;
  grid-gap: 1.8rem;
`;
