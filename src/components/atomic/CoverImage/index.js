import Link from 'next/link';
import { Container } from './style';

export default function CoverImage({ title, src, slug }) {
  const image = (
    <Container
      src={src}
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
