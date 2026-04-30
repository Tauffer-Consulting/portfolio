import styled from 'styled-components'

export const TaufferStyled = styled.div`
  display: flex;
  align-items: center;
  pointer-events: ${({ isLink }) => isLink ? 'all' : 'none'};
  cursor: ${({ isLink }) => isLink ? 'pointer' : 'unset'};

  .logo {
    width: ${({ logoSize }) => logoSize};
    height: ${({ logoSize }) => logoSize};
    border-radius: 50%;
    border: ${({ logoBorder }) => logoBorder ? logoBorder : ''};
    position: relative;
    margin-right: 1rem;
    flex: 0 0 auto;
  }

  .company {
    font-family: 'Merriweather', serif;
    font-size: 1.3em;
    font-weight: 500;
    color: ${({ theme, inheritColor }) => inheritColor ? 'inherit' : theme.darkTheme.colors.lightGray};
    transition: color .25s;
  }
  
  &:hover {
    .company {
      color: ${({ theme }) => theme.darkTheme.colors.blue100};
    }
  }
`
