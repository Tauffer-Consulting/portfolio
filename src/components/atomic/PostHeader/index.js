import Avatar from '../Avatar';
import DateFormatter from '../DateFormatter';
import CoverImage from '../CoverImage';
import PostTitle from '../PostTitle';
import PostAuthor from '../PostAuthor';
import TagButton from '../TagButton';
import { Container, AvatarContainer, DateContainer } from './style';

export default function PostHeader({ title, coverImage, date, author, tags }) {
  return (
    <Container>
      <PostTitle>{title}</PostTitle>
      <PostAuthor>{author.name}</PostAuthor>
      {/* { author.picture !== undefined && 
        <AvatarContainer>
          <Avatar name={author.name} picture={author.picture} />
        </AvatarContainer>
      }
      { coverImage !== undefined &&
        <div>
          <CoverImage title={title} src={coverImage} height={620} width={1240} />
        </div>
      } */}
      { date ? 
        <div>
          <DateContainer>
            <DateFormatter dateString={date} />
          </DateContainer>
        </div> : ''
      }
      {tags.map((tag) =>
        <TagButton
          // key={index}
          tag={tag}
          onClickFn={() => ''}
        />
      )}
    </Container>
  );
}
