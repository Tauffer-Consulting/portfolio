import React from 'react'
import { Footer } from '../Footer/footer.component'
import { ButtonToTop } from '../../components/atomic/ButtonToTop'
import { Header } from '../Header/header.component'
import { Metatags } from '../Metatags/metatags.component'

import { PageLayoutStyled } from './page-layout.stye'

export const PageLayout = ({
  mainClass = '',
  children,
  showButtonToTop = false,
  metatags = {},
  withGradientBackground = false
}) => {
  return (
    <>
      <Metatags {...metatags} />
      <PageLayoutStyled withGradientBackground={withGradientBackground}>
        <Header />
        <main className={mainClass}>{children}</main>
        <Footer />
        {showButtonToTop && <ButtonToTop />}
      </PageLayoutStyled>
    </>
  )
}
