import React, { useState } from 'react';
import Link from 'next/link';
import {
  HeaderStyled
} from './header.style';

import Container from 'src/components/Container';
import { Tauffer } from '../Taufffer/tauffer.component';

export function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const openMenu = () => setMenuOpen(true)


  return (
    <HeaderStyled>
      <Container className='header-container'>
        <Link href="/" passHref>
          <span>
            <Tauffer hideNameOnMobile isLink logoBorder='2px solid #969ca3' />
          </span>
        </Link>

        <nav className={`nav ${menuOpen ? 'menu-open' : ''}`}>

          {/* close mobile menu (button) */}
          <button className='hidden-desktop mobile-close' onClick={closeMenu}>x</button>

          <Link href='/' scroll={false} className='nav__link hidden-desktop' onClick={closeMenu}>
              Home
          </Link>

          <Link href='/#solutions' scroll={false} className='nav__link' onClick={closeMenu}>
              Solutions
          </Link>
          <Link href='/#portfolio' scroll={false} className='nav__link' onClick={closeMenu}>
              Portfolio
          </Link>
          <a className='contact-button hidden-mobile' href='mailto:luiz@taufferconsulting.com'>
              Contact us
          </a>

          <Tauffer className='tauffer-mobile' />
        </nav>

        {/* mobile contact button */}
        <a className='contact-button hidden-desktop' href='mailto:luiz@taufferconsulting.com'>
          Contact us
        </a>

        {/* open mobile menu */}
        <button className='mobile-toggle hidden-desktop' title='Open menu' onClick={openMenu}><span /></button>

        {/* close mobile menu (background) */}
        <button className={`menu-background-close ${menuOpen ? 'menu-open' : ''}`} title="Close menu" onClick={closeMenu} />

      </Container>
    </HeaderStyled>
  );
}
