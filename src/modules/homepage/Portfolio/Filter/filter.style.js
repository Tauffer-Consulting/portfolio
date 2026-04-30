import styled from 'styled-components'

export const FilterStyled = styled.div`

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  max-width: 80%;
  margin: 0 auto 2rem;

  button {
    background: none;
    border: none;
    color: #b8b8b8;
    font-size: 1.3em;
    
    padding: 0.3rem 1.1rem;
    margin: .5rem;
    position: relative;

    &:focus-within {
      color: ${({ theme }) => theme.darkTheme.colors.white}
    }

    &:focus-within:after {
      color: ${({ theme }) => theme.darkTheme.colors.buttonBlueHover};
      width: 100%;
    }
    
    &:after {
      content:" ";
      background-color: ${({ theme }) => theme.darkTheme.colors.white};
      border-radius: 4rem;
      bottom: -0.1rem;
      height: 0.15rem;
      left: 0;
      position: absolute;
      transition: 0.75s;
      width: 0;
    }

    &:hover,
    &.active {
      color: white;
      &:after {
        width: 100%;
      }

    }
  }

  @media only screen and (max-width: 568px) {
    max-width: unset;
    gap: 0;

    button {
      font-size: 1rem;
      padding: .1em .25em;
      margin: .25em .5em;
    }
  }
`
