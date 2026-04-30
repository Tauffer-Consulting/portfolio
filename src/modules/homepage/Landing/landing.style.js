import styled, { keyframes } from 'styled-components'

const LandingImageAnim = keyframes`
  from {
    background-position: top left
  }
  to {
    background-position: bottom right;
  }
`
/**
 * Helper function to calibrate text roulette animation
 * TRANSITION_TIME represents a percentage of the total animation time (keep it between 0 and 100/WORD_COUNT)
 * @returns text roulette transforms
 */
const handleTransition = () => {
  const TRANSITION_TIME = 10
  const WORD_COUNT = 7
  const WAIT_TIME = (100.0 - (WORD_COUNT - 1) * TRANSITION_TIME) / (WORD_COUNT - 1)
  const HEIGHT = 1.5

  let transitions = ''
  let lastEnd = 0
  for (let i = 0; i < WORD_COUNT - 1; i++) {
    let start = i > 0 ? lastEnd + TRANSITION_TIME : 0
    let end = start + (i > 0 ? WAIT_TIME : WAIT_TIME / 2)
    lastEnd = end
    transitions += `${start}%, ${end}% { transform: translateY(-${HEIGHT * i}em); }\n`
  }

  transitions += `100% { transform: translateY(-${HEIGHT * (WORD_COUNT - 1)}em)}`

  return transitions
}



const TextRoulette = keyframes`

 ${handleTransition()}

`

export const LandingStyled = styled.section`

  min-height: calc(100vh - 59px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  .image {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-color: rgba(41, 48, 55, 0.95); 
    background-blend-mode: multiply;

    animation: ${LandingImageAnim} 30s alternate infinite linear
  }

  .content {
    position: relative;

    font-size: 6rem;
    
    h1 {
      color: ${({ theme }) => theme.darkTheme.colors.darkWhite};
      font-size: 1em;
      line-height: 1.2em;
    }
  
    h2 {
      color: ${({ theme }) => theme.darkTheme.colors.darkWhite};
      font-size: .5em;
      height: 1em;
      line-height: 1em;
      overflow: hidden;
      width: 50%;
      margin-left: auto;
      display: flex;
      
      .static {
        height: inherit;
        margin-right: .25em;
        font-weight: 400;
      }

      .dynamic {
        display: inline-block;
        height: inherit;
        font-weight: bold;
        animation: ${TextRoulette} 20s infinite 0s;
        text-align: left;

        & > div {
          display: block;
          line-height: inherit;
          height: inherit;
          & + div {
            margin-top: .5em;
          }
        }
      }

    }
  }

  .cursor { color: inherit }


  @media only screen and (orientation: portrait) {
    min-height: unset;
  }



  @media only screen and (max-width: 1200px) {
    .content {
      font-size: 4.5rem;
      /* h1 { font-size: 4.5rem }
      h2 { font-size: 1.75rem } */
    }
  }

  @media only screen and (max-width: 992px) {
    padding: 3rem 2rem;
    .content {
      font-size: 3rem;
      /* h1 { font-size: 3rem } */
      /* h2 { font-size: 1.5rem } */
    }
  }

  @media only screen and (max-width: 768px) {
    .content {
      font-size: 2.375rem;
      /* h1 { font-size: 2.375rem }
      h2 { font-size: 1.325rem } */
    }
  }

  @media only screen and (max-width: 568px) {
    .content {
      font-size: 1.75rem;
      /* h1 { font-size: 1.75rem } */
      h2 { /* font-size: 1.15rem; */ width: 100%; }
    }
  }
`
