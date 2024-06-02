import createMDX from '@next/mdx';
import { withVercelToolbar } from '@vercel/toolbar/plugins/next';
import remarkGfm from 'remark-gfm';

const withMDX = createMDX(
  {
    options: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
  }
)

/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    "fetches": {
      fullUrl: true,
    },
  },
  images: {
    domains: ['cdn2.thecatapi.com'],
  },
  async redirects() {
    return [
      {
        source: '/slides',
        destination: '/slides/1',
        permanent: false
      },
      {
        source: '/',
        destination: '/slides/1',
        permanent: false
      }
    ]
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default withVercelToolbar()(withMDX(nextConfig));
