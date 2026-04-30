import {  Container,
          CategoryLabel,
          CategoryButtonContainer,
          CloseButton} from './style';

function CategoryButton({removeFilter, tag}) {
  return (
    <Container>
      <CategoryLabel>Results filtered by  </CategoryLabel>
      <CategoryButtonContainer
        onClick={() => removeFilter('')}
      >
        {tag}
      <CloseButton>
        X
      </CloseButton>
      </CategoryButtonContainer>
    </Container>
  )
}

export default CategoryButton