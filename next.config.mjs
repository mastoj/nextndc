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
  }
};

export default nextConfig;
