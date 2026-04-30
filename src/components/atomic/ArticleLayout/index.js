import Meta from '../Meta';
import { ArticlePageContainer, ArticleContainer } from './style';

export default function Layout({ preview, children }) {
  return (
    <ArticlePageContainer>
      <Meta />
      <ArticleContainer>
        <main>{children}</main>
      </ArticleContainer>
    </ArticlePageContainer>
  );
}
