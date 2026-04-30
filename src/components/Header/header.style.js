import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5000;

  background: rgba(41, 48, 55, .95);
  box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.77);

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: .5rem;
    padding-bottom: .5rem;
  }


  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    
    &__link {
      font-size: 1.1em;
      font-family: 'Merriweather', serif;
      color: ${({ theme }) => theme.darkTheme.colors.lightGray};
      transition: all .15s;
      position: relative;
      letter-spacing: .03em;

      margin-right: 2rem;

      &::before {
        content: '';
        width: 0;
        height: 2px;
        background: ${({ theme }) => theme.darkTheme.colors.white};
        transition: width .75s;
        position: absolute;
        left: 0;
        bottom: -.2em;
      }

      &:hover {
        color: ${({ theme }) => theme.darkTheme.colors.white};
        &::before {
          width: 100%;
        }

      }
      
    }


  }

  .contact-button {

    font-size: 1.15em;
    font-family: 'Merriweather', serif;
    letter-spacing: .03em;
    color: ${({ theme }) => theme.darkTheme.colors.lightGray};
    background: rgba(0, 0, 0, 0);
    border: 2px solid;
    boder-color: ${({ theme }) => theme.darkTheme.colors.lightGray};
    border-radius: 4px;
    padding: .5em .75em;
    transition: all .75s;

    &:hover {
      color: #fff;
      background: ${({ theme }) => theme.darkTheme.colors.blue800};
      box-shadow: 0 5px 15px rgba(0,0,0,0.125);
    }
    
  }

  .tauffer-mobile,
  .menu-background-close,
  .mobile-toggle { display: none }

  @media only screen and (max-width: 1024px) {

    // open mobile menu
    .mobile-toggle {
      width: 43px;
      height: 43px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      padding: 0;

      span {
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        padding: none;
        border: 2px solid ${({ theme }) => theme.darkTheme.colors.blue500};
        border-left: none;
        border-right: none;
        position: relative;
        background: transparent;
  
        &::before {
          content: '';
          display: block;
          width: 66%;
          height: 2px;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          background: ${({ theme }) => theme.darkTheme.colors.blue500};
  
        }
      }

    }

    // close mobile menu (button)
    .mobile-close {
        position: absolute;
        top: 1rem;
        right: 1rem; 
        font-size: 2rem;
        padding: 0 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.darkTheme.colors.blue500};
        font-weight: 300;
      }

    // close mobile menu (background)
    .menu-background-close {
      border: none;
      display: block;
      width: calc(100vw - 280px);
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background: rgba(0,0,0,0);
      transition: all .25s;
      transform: translateX(-100%);
      pointer-events: none;

      &.menu-open {
        background: rgba(0,0,0,0.5);
        transform: translateX(0);
        pointer-events: all;
      }
    }

    .contact-button {
      margin: 0 1rem 0 auto;
      font-size: 1rem;
    }


    .nav {
      position: fixed;
      height: 100vh;
      top: 0;
      right: 0;
      width: 280px;
      max-width: 280px;
      background: #fff;
      z-index: 5000;
      flex-direction: column;
      padding: 1rem;
      pointer-events: none;
      transform: translateX(100%);
      transition: all .25s;

      .nav__link {
        width: 100%;
        text-align: center;
        padding: 1em;
        margin: 0;
        
        & + .nav__link {
          border-top: 1px solid #ccc;
        }
      }

      .tauffer-mobile {
        width: 200px;
        position: absolute;
        display: flex;
        left: 1rem;
        bottom: 1rem;
        pointer-events: none;
      }



      &.menu-open {
        transform: translateX(0);
        pointer-events: all;

      }

    }
  }
  

`

