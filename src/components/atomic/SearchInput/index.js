import { Container, InputBox, InputPlaceholder } from './style';
import { FaSearch } from 'react-icons/fa'

export function SearchInput() {
  return (
    <Container>
      <FaSearch />
      <InputBox
        type='text'
        name='searchBox'
        id='searchBox'
        placeholder='What are you looking for?'
      />|
    </Container>
  )
}