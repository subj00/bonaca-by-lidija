import type { APIRoute } from 'astro';
import { allowIndexing } from '@/config/site';

/*
 * Production: everything may be crawled and the sitemap is listed.
 * Deploy previews and branch deploys: crawling stays allowed, so search engines
 * can read the `noindex` on every page (a `Disallow` would hide it), but no
 * sitemap is advertised.
 */
export const GET: APIRoute = ({ site }) => {
  const lines = ['User-agent: *', 'Allow: /'];
  if (allowIndexing) {
    lines.push('', `Sitemap: ${new URL('sitemap-index.xml', site).href}`);
  }

  return new Response([...lines, ''].join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
