import Avatar from '../Avatar';
import DateFormatter from '../DateFormatter';
import CoverImage from '../CoverImage';
import Link from 'next/link';
import { Container, ResumeContainer } from './style';


export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <Container>
      <div>
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={620}
          width={1240}
        />
      </div>
      <div>
        <div>
          <h3>
            <Link href={`/portfolio/${slug}`}>
              {title}
            </Link>
          </h3>
          <div>
            <DateFormatter dateString={date} />
          </div>
        </div>
        <ResumeContainer>
          <p>{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </ResumeContainer>
      </div>
    </Container>
  );
}
