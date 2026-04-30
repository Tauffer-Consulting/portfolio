import { useState } from 'react';
import PostPreview from '../PostPreview';
import CategoryButton from '../CategoryButton';
import Breadcrumb from '../../atomic/Breadcrumb';
import Container from '../../Container'
import {
  Container as PortfolioContainer,
  PortfolioText,
  PortfolioGrid,
  PortfolioHeader
} from './style';

/**
 * @todo add link to page somewhere
 * @todo refactor tags
 * @todo add more search features (such as by tag)
 */
export default function PortfolioContent({ portfolio, title, initialFilter }) {
  const [filter, setFilter] = useState(initialFilter);
  const [list, setList] = useState(portfolio);

  const filterPerCategory = (selCategory) => {
    setFilter(selCategory);
    const updatedList = portfolio
      .filter((each) => each.tags.includes(selCategory));
    setList(updatedList);
  }

  return (
    <Container>
      <PortfolioContainer>
        <Breadcrumb clear />
        <PortfolioHeader>
          <PortfolioText>{title}</PortfolioText>
          {/* <SearchInput /> */}
        </PortfolioHeader>
        {filter && <CategoryButton tag={filter} removeFilter={(filter) => filterPerCategory(filter)} />}
        <PortfolioGrid>
          {list.map((post, index) => (
            <PostPreview
              key={index}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              tags={post.tags}
              excerpt={post.excerpt}
              changeFilter={(filter) => filterPerCategory(filter)}
            />
          ))}
        </PortfolioGrid>
        {/* <SectionSeparator /> */}
      </PortfolioContainer>
    </Container>
  );
}
