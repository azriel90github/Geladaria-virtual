// pages/routes.js
import { useRouter } from 'next/router';

export default {
  '/': () => import('../pages/index'),
  '/sobre': () => import('../pages/sobre'),
  '/blog': () => import('../pages/blog'),
  '/blog/:slug': ({ params }) => {
    const { slug } = params;
    return import('../pages/blog/[slug].js').then((module) => module.default({ slug }));
  },
};
