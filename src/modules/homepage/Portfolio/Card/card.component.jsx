import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CardStyled } from './card.style'
import { withBase } from '../../../../lib/withBase'

export const Card = ({ image, title, text, link, className = '' }) => (
  <CardStyled
    as={motion.article}
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    exit={{ opacity: 0 }}
    className={className}
  >
    <Link href={`/portfolio/${link}`} className="wrapper">
        <div className="image">
          <img
            src={withBase(image)}
            alt={`${title} | Tauffer Consulting`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div className="content">
          <h4 className="title">{title}</h4>
          <div className="hover-content">
            <div className="text">
              {text.length > 100 ? text.slice(0, 100) + '...' : text}
            </div>
            <hr className="separator" />
            <span className="read-more">Read more</span>
          </div>
        </div>
    </Link>
  </CardStyled>
)
