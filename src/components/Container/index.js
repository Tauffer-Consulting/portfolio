import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${({ theme }) => theme.containerWidth};
  margin: 0 auto;
  position: relative;
  padding: 0 1rem;
`

export default Container
