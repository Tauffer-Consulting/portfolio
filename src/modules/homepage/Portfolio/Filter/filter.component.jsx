import React from 'react'
import { FilterStyled } from './filter.style'

import options from './options'

export const Filter = ({ current, handleChange }) => {
  return (
    <FilterStyled>
      {options.map((option, index) => (
        <button
          key={index}
          className={current === option ? 'active' : ''}
          onClick={() => handleChange(option)}
        >
          {option}
        </button>
      ))}
    </FilterStyled>
  )
}
