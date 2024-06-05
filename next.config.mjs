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
  reactStrictMode: false,
  logging: {
    "fetches": {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
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
  experimental: {
    ppr: true,
  },
};

export default withVercelToolbar()(withMDX(nextConfig));
