import React from 'react'

import { PageLayout } from '../../components/PageLayout/page-layout.component'
import { Landing } from './Landing/landing.component'
import { Portfolio } from './Portfolio/portfolio.component'
import { Solutions } from './Solutions/solutions.component'

export const Homepage = ({ publishedPortfolio }) => (
  <PageLayout showButtonToTop withGradientBackground>
    <Landing />
    <Solutions />
    <Portfolio posts={publishedPortfolio} />
  </PageLayout>
)
