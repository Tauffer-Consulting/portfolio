import {createElement, Fragment, useMemo} from 'react';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';

export default function useProcessor(renderedHtml) {
  const content = useMemo(() => {
    const processor = unified()
      .use(rehypeParse, {fragment: true})
      .use(rehypeReact, { createElement, Fragment });

    const file = processor.processSync(renderedHtml);
    return file.result;
  }, [renderedHtml]);

  return content;
}
