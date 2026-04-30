import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: inline-flex;
  margin: 0 0 2rem 8rem;
`;

export const CategoryLabel = styled.p`
  color: ${({ theme }) => theme.darkTheme.colors.mediumGray};
  font-size: 1.1em;
  font-weight: 600;
  margin-right: 0.5rem;
`;

export const CategoryButtonContainer = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  background-color: ${({ theme }) => theme.darkTheme.colors.mediumDark};
  color: ${({ theme }) => theme.darkTheme.colors.blue100};
  padding: 0.7rem;

  &:hover {
    cursor: pointer;
  }
`;

export const CloseButton = styled.button`
  border-radius: 4rem;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.darkTheme.colors.toolsCardBg};
  font-weight: 700;
  margin-left: 0.5rem;
  position: relative;
`;