/** Global site constants. Business details are added once confirmed. */
export const site = {
  name: 'Bonaca by Lidija',
  /** Text shown in the logo artwork; used as its alt text. */
  logoText: 'Bonaca by Lidija',
  titleSeparator: ' | ',
  /** Business name as confirmed by the studio (the logo reads "Bonaca by Lidija"). */
  businessName: 'Bonaca',
} as const;

/**
 * Whether this build may be indexed by search engines. Netlify sets `CONTEXT`
 * during its builds (`production`, `deploy-preview`, `branch-deploy`, `dev`):
 * only the production build is indexable, so deploy previews and branch deploys
 * get `noindex` and no sitemap reference. The local dev server is never
 * indexable. Builds outside Netlify (no `CONTEXT`) are treated as production.
 */
const netlifyContext = process.env.CONTEXT;
export const allowIndexing =
  !import.meta.env.DEV && (netlifyContext === undefined || netlifyContext === 'production');
