import { css } from "styled-components";

const screenSize = {
  large: 1170,
  desktop: 992,
  tablet: 768,
  mobile: 376
}

export const media = Object
  .keys(screenSize)
  .reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${screenSize[label] / 16}rem) {
        ${css(...args)}
      }
    `
    return acc;
  }, {});

  // para importar no styles, em vez de @media screen {max-width} escreve-se ${media.opcao de responsividade}