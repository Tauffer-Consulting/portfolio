import React from 'react'
import Breadcrumb from 'src/components/atomic/Breadcrumb'
import Container from 'src/components/Container'
import { PageLayout } from 'src/components/PageLayout/page-layout.component'
import useProcessor from 'src/hooks/useProcessor'
import { Tags } from '../Tags/tags.component'

import { ArticleStyled } from './article.style'

export const ArticlePage = ({ post }) => {
  const metatags = {
    title: post.title,
    description: post.excerpt,
    ogImage: post.ogImage.url,
    ogAuthor: post.author.name,
  }

  const content = useProcessor(post.contentBody)

  return (
    <PageLayout showButtonToTop metatags={metatags}>
      <ArticleStyled>
        <Container>
          <article className="body">
            {/* <Breadcrumb /> */}
            <Tags tags={post.tags} small />
            <h1 className="title">{post.contentTitle}</h1>
            <div className="metadata">
              <p>
                Written by <span>{post.author.name}</span>
              </p>
            </div>
            <div className="content">{content}</div>
          </article>
        </Container>
      </ArticleStyled>
    </PageLayout>
  )
}
