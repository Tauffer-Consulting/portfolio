import Head from 'next/head'
import React from 'react'

/**
 * Metatags helper
 * @todo improve
 */
export const Metatags = ({
  title = '',
  description = '',
  ogImage = '',
  ogAuthor,
}) => {
  const parsedTitle = title
    ? `${title} | Tauffer Consulting`
    : 'Tauffer Consulting'

  const parsedDescription = description
    ? description
    : 'Data Science, Artificial Intelligence and Cloud Solutions by Tauffer Consulting'

  return (
    <Head>
      <title>{parsedTitle}</title>
      <meta name="description" content={parsedDescription} />
      <meta property="og:title" content={parsedTitle} />
      <meta
        property="og:image"
        content={ogImage || '/public/logo_circle.png'}
      />
      <meta property="og:author" content={ogAuthor || 'Tauffer Consulting'} />
      <meta property="og:site_name" content="Tauffer Consulting" />
    </Head>
  )
}
