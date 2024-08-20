import bundleAnalyzer from '@next/bundle-analyzer';
import withPlugins from 'next-compose-plugins';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withPlugins([withBundleAnalyzer], nextConfig);
