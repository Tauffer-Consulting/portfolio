import Link from 'next/link';
import { Container } from './style';
import { withBase } from '../../../lib/withBase';

export default function CoverImage({ title, src, slug }) {
  const image = (
    <Container
      src={withBase(src)}
      alt={`Image example for ${title}`}
    />
  );
  return (
    <div>
      {slug ? (
        <Link href={`/portfolio/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
