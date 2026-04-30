import Avatar from '../Avatar';
import DateFormatter from '../DateFormatter';
import CoverImage from '../CoverImage';
import TagButton from '../TagButton';
import Link from 'next/link';
import { FaCalendarAlt } from "react-icons/fa";
import {  Container,
          ArticleTitle,
          ArticleTitleContainer,
          DateDisplay,
          ArticleResume, 
          TagButtonContainer } from './style';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  tags,
  author,
  slug,
  changeFilter
  }) {

  return (
    <Container>
      <div>
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={486}
        />
      </div>
      <DateDisplay>
        <FaCalendarAlt size={22} color='#455A64' />
        <DateFormatter dateString={date} />
      </DateDisplay>
      <ArticleTitleContainer>
        <ArticleTitle>
          <Link href={`/portfolio/${slug}`}>
            {title}
          </Link>
        </ArticleTitle>
      </ArticleTitleContainer>
      <ArticleResume>{excerpt}</ArticleResume>
      <TagButtonContainer>
        {tags.map((tag, index) => 
          <TagButton
            tag={tag}
            key={index}
            onClickFn={() => { changeFilter(tag) }}
          />
        )}
      </TagButtonContainer>
      
      {/* <Avatar name={author.name} picture={author.picture} /> */}
    </Container>
  );
}
