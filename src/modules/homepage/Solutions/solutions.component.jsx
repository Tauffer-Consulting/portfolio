import React from 'react'
import Container from 'src/components/Container'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide';

import solutions from './solutions'
import { SolutionsStyled } from './solutions.style'
import Card from '../../../components/atomic/DynamicCard'

export const Solutions = () => {
  return (
    <SolutionsStyled id="solutions">
      <Container>
        <h2 className="title">
          We provide consulting and development services <br /> to help your
          business wield cutting edge IT.
        </h2>
        <div className="cards">
          {solutions.map((solution, index) => (
            <Fade key={index} duration={2400} delay={index * 350}>
              <Card
                headerTitle={solution.title}
                cardIcon={solution.icon}
                cardBodyTextContent={solution.bodyText}
                cardEmphasisPhraseText={solution.emphasis}
                cardListItems={solution.items}
              />
            </Fade>
          ))}
        </div>
      </Container>
    </SolutionsStyled>
  )
}
