import React, { useState, useEffect } from 'react'
import { LandingStyled } from './landing.style'

export const Landing = () => {
  const words = [
    'R&D',
    'Healthcare',
    'Finance',
    'Science',
    'Commerce',
    'Your Business',
    'R&D',
  ]

  const [showWords, setShowWords] = useState(false)

  function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    }
  }
  useEffect(() => {
    const handleResize = debounce(() => {
      setShowWords(false)
      setTimeout(() => setShowWords(true), 250)
    }, 500)

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <LandingStyled>
      <div
        className="image"
        style={{ backgroundImage: `url('/banner-003.jpg')` }}
      />

      <div className="content">
        <h1>
          Data Science,
          <br />
          Artificial Intelligence,
          <br />
          Cloud Solutions
        </h1>
        <h2 className="text-roulette">
          <span className="static">for</span>
          {showWords && (
            <span className="dynamic">
              {words.map((word, index) => (
                <div key={index} style={{ textAlign: 'left' }}>
                  {word}
                </div>
              ))}
            </span>
          )}
        </h2>
      </div>
    </LandingStyled>
  )
}
