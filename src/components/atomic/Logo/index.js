import { Container, BrandTitle } from './style'
import { withBase } from '../../../lib/withBase'

function TaufferLogo({ animateHeader, title }) {
  return (
    <>
      <img
        src={withBase("/logo_circle.png")}
        alt="Tauffer Consulting"
        style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'contain' }}
      />
    <BrandTitle>{title}</BrandTitle>
    </>
  )
}

export default TaufferLogo