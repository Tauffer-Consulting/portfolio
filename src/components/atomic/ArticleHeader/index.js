import Link from 'next/link';
import { Container, H2Header } from './style';

export default function ArticleHeader() {
  return (
    <H2Header>
      <Link href="/" className="hover:underline">Blog</Link>
      .
    </H2Header>
  );
}
