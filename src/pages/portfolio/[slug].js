import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostBySlug, getAllPortfolio } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';

import { ArticlePage } from '../../modules/portfolio/Article/article.component'

export default function Article({ post }) {
  const router = useRouter();

  return (!router.isFallback && !post?.slug)
    ? <ErrorPage statusCode={404} />
    : <ArticlePage post={post} />
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'tags',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'excerpt'
  ]);
  const content = await markdownToHtml(post.content || '');
  const contentTitleArray = content.split(/(?<=<h1>)(.*?)(?=<\/h1>)/gm);
  const contentTitle = contentTitleArray[1]
  const contentBody = contentTitleArray[2].slice(5);

  return {
    props: {
      post: {
        ...post,
        contentTitle,
        contentBody,
      },
    },
  };
}

export async function getStaticPaths() {
  const portfolio = getAllPortfolio(['slug']);

  return {
    paths: portfolio.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
