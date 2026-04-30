import React from 'react'
import { Tauffer } from '../Taufffer/tauffer.component'
import { FooterStyled } from './footer.style'
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'
import Container from '../Container'

export const Footer = () => (
  <FooterStyled>
    <Container className="footer-container">
      <div className="left">
        <Tauffer inheritColor logoSize='48px' logoBorder='2px solid #969ca3' />
        <p style={{ marginTop: '.5em' }}>
          Consulting and development for Data Science, {' '}
          <br />
          Artificial Intelligence and Cloud Solutions.
        </p>
      </div>
      <div className="right">
        <div className="findUs">
          <h3>Find us:</h3>
          <div className="links">
            <a
              href="https://www.linkedin.com/company/tauffer-consulting/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                size="1.5em"
                title="Our Linkedin"
                style={{ cursor: 'pointer' }}
              />
            </a>
            <a
              href="https://github.com/Tauffer-Consulting"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size="1.5em"
                title="Our Github"
                style={{ cursor: 'pointer' }}
              />
            </a>
            <a href="mailto:luiz@taufferconsulting.com">
              <FaEnvelope
                size="1.5em"
                title="Email us"
                style={{ cursor: 'pointer' }}
              />
            </a>
          </div>
        </div>
        <p className="text">Tauffer Consulting© 2026. All rights reserved.</p>
      </div>
    </Container>
  </FooterStyled>
)
