import styled, { css } from 'styled-components'

const hoverState = css`
  .wrapper {
    .image {
      filter: grayscale(0);
      transform: scale(1.15);
      opacity: .33;
    }
    .content {
      .hover-content {
        opacity: 1;
      }
    }
  }
`

export const CardStyled = styled.article`

  min-height: 330px;
  box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.77);
  border-radius: 8px;

  .wrapper {
    position: relative;
    display: block;
    height: 100%;

    border-radius: 8px;
    overflow: hidden;

    .image {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      transition: all .5s;
      filter: grayscale(1);
    }

    .content {
      display: flex;
      flex-direction: column;
      position: relative; 
      z-index: 2;
      background: linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.5) 100%);
      padding: 1rem;
      text-align: center;
      height: 100%;
      
      .title {
        color: white;
        font-size: 1.4em;
        line-height: 1.25em;
        min-height: 2.5em; // 2 lines
        font-weight: 700;
        margin-bottom: auto;
        text-align: center;
        margin-bottom: 1em;
      }

      .hover-content {
        opacity: 0;
        transition: all .25s;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        .text {
          color: #fff;
          font-size: 1.1rem;
          margin-top: auto;
        }
  
        .separator {
          width: 100%;
          height: 2px; 
          background: #F2E3D5;
          border: none;
          margin: .5rem 0;
        }
  
  
        .read-more {
          font-size: 1.1rem;
          color: #fff;
          font-weight: bold;
  
        }

      }
    }
  }

  &:hover {
    ${hoverState}
  }


  @media only screen and (max-width: 768px) {
    ${hoverState}
  }
`
