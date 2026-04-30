import styled from 'styled-components'

export const PageLayoutStyled = styled.div`
  ${({ withGradientBackground }) => withGradientBackground ? 'background: linear-gradient(45deg, #2d2d2d, #253341);' : ''}
  
  padding-top: 59px; // header height
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  main {
    flex-grow: 1;
  }
`
