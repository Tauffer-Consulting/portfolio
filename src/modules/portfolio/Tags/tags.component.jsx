import React from 'react'

import { TagsStyled } from './tags.style'

/**
 * Tags component
 * @todo implement click action
 */
export const Tags = ({ tags, clickable, small = false }) => {
  return (
    <TagsStyled>
      {tags.map((tag, index) => (
        <span className={`tag ${small ? 'small' : ''}`} key={index}>
          {tag}
        </span>
      ))}
    </TagsStyled>
  )
}
