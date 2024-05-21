import createMDX from '@next/mdx';
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
  async redirects() {
    return [
      {
        source: '/slides',
        destination: '/slides/1',
        permanent: false
      }
    ]
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default withMDX(nextConfig);
