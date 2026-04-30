import React from 'react'
import { getAllPortfolio } from 'src/lib/api';
import { Homepage } from '../modules/homepage/homepage.component';

export default function Home({ publishedPortfolio }) {
  return (
    <Homepage publishedPortfolio={publishedPortfolio} />
  )
}

export async function getStaticProps() {
  const allPortfolio = getAllPortfolio([
    'title',
    'date',
    'slug',
    'tags',
    'author',
    'coverImage',
    'excerpt',
    'version',
  ]);

  const publishedPortfolio = allPortfolio.filter((portfolioItem) => portfolioItem.version !== 'draft')

  return {
    props: { publishedPortfolio },
  };
}
