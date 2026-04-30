import React from 'react'

import { TaufferStyled } from './tauffer.style'

export const Tauffer = ({
  hideNameOnMobile = false,
  className = '',
  isLink = false,
  inheritColor = false,
  logoBorder = '',
  logoSize = '40px',
}) => (
  <TaufferStyled
    className={className}
    isLink={isLink}
    inheritColor={inheritColor}
    logoSize={logoSize}
    logoBorder={logoBorder}
  >
    <div className="logo">
      <img
        src="/logo_circle.png"
        alt="Tauffer Consulting"
        style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </div>
    <span className={`company ${hideNameOnMobile ? 'hidden-mobile' : ''}`}>
      Tauffer Consulting
    </span>
  </TaufferStyled>
)
