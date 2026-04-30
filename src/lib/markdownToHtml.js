import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(remarkGfm)
    .use(html)
    .process(markdown);
  let htmlString = result.toString();
  if (basePath) {
    htmlString = htmlString.replace(
      /(src|href)="(\/[^/][^"]*)"/g,
      `$1="${basePath}$2"`
    );
  }
  return htmlString;
}
