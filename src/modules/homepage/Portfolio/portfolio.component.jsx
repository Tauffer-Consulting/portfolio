import React, { useState, useCallback } from 'react'
import { PortfolioStyled } from './portfolio.style'
import { Filter } from './Filter/filter.component'
import { Card } from './Card/card.component'
import Container from 'src/components/Container'

export const Portfolio = ({ posts }) => {
  const [selectedOption, setSelectedOption] = useState('All')

  const [items, setItems] = useState(posts)

  const handleFilter = useCallback(
    option => {
      let selectedPosts = posts

      if (!!option && option !== 'All') {
        selectedPosts = posts.filter(({ tags }) => tags.includes(option))
      }

      setItems(selectedPosts)
      setSelectedOption(option)
    },
    [posts, selectedOption, setItems]
  )

  return (
    <PortfolioStyled id="portfolio">
      <Container>
        <h2 className="title">Our Portfolio</h2>
        <h3 className="subtitle">
          We collaborate with a wide range of partners, from scientific research
          to financial market. <br />
          Check out some of our projects:
        </h3>

        <Filter
          current={selectedOption}
          handleChange={value => handleFilter(value)}
        />
        <div className="cards">
          {items.map((post, index) => (
            <Card
              key={index}
              image={post.coverImage}
              title={post.title}
              text={post.excerpt}
              link={post.slug}
              className='card'
            />
          ))}
        </div>
      </Container>
    </PortfolioStyled>
  )
}
