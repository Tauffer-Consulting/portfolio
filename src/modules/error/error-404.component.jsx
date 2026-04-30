import Link from 'next/link'
import { PageLayout } from '../../components/PageLayout/page-layout.component'
import { Error404Styled } from './error-404.style'

export const Error404 = () => {
  return (
    <Error404Styled>
      <PageLayout mainClass="main">
        <div className="img">
          <img src="/Error_404.svg" alt="404 Error" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        <div className="content">
          <h3>What are you looking for?</h3>
          <Link href="/">Go to home</Link>
          <Link href="/portfolio">See our projects</Link>
        </div>
      </PageLayout>
    </Error404Styled>
  )
}

export default Error404
