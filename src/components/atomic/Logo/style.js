import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.darkTheme.colors.lightGray};
  display: flex;
  /* height: ${( animateHeader ) => animateHeader ? '3rem' : '4.3rem' }; */
  justify-content: flex-start;
  margin-left: 0.5em;
  position: relative;
  /* width: ${( animateHeader ) => animateHeader ? '3rem' : '4.3rem' }; */
  transition: 0.6s;

  /* & > span {
    height: ${({ animateHeader }) => animateHeader ? '3rem' : '4.3rem' };
    width: ${({ animateHeader }) => animateHeader ? '3rem' : '4.3rem' };
  } */
`;

export const BrandTitle = styled.span`
  flex-wrap: nowrap;
  font-family: 'Merriweather', serif;
  font-size: ${({ animateHeader }) => animateHeader ? '1rem' : '1.4rem' };
  font-weight: 500;
  margin-left: 1rem;
  transition: 0.6s;
`;
