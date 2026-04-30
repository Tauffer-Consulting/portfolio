import React from 'react';
import {
  DynamicCardStyled,
  CardList
} from './styles';
import { withBase } from '../../../lib/withBase';

export default function DynamicCard({
  headerTitle,
  cardIcon,
  cardBodyTextContent,
  cardEmphasisPhraseText,
  cardListItems,
}) {
  return (
    <DynamicCardStyled>
      <header>
        <div className='icon'>
          <img
            src={withBase(cardIcon)}
            alt={headerTitle}
            width={45}
            height={45}
          />
        </div>
        <h3>
          {headerTitle}
        </h3>
      </header>
      <p className='bodyText'>
        {cardBodyTextContent}
      </p>
      <h4 className='emphasis'>
        {cardEmphasisPhraseText}
      </h4>
      <CardList>
        {cardListItems.map((item, i) => <li key={i}>{item}</li>)}
      </CardList>
    </DynamicCardStyled>
  )
}
