const withLess = require('next-with-less');

const disableImageOptimization = process.env.DISABLED_IMAGES_OPTIMIZATION === 'true';
const {
  PROXY_CONTEXTS,
  PROXY_HOSTNAME,
  PROXY_PORT,
} = process.env;
const proxyContexts = PROXY_CONTEXTS
  ? PROXY_CONTEXTS.split(',').map(path => {
    const _path = path.trim();
    if (!_path) return null;
    if (_path[0] === '/') return _path;
    return `/${path}`;
  }).filter(Boolean)
  : [];

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  // 代理转发
  async rewrites() {
    return [
      ...(proxyContexts && proxyContexts.length > 0)
        ? proxyContexts.map(source => ({
          source: `${source}/:path*`,
          destination: `http://${PROXY_HOSTNAME}${PROXY_PORT ? `:${PROXY_PORT}` : ''}${source}/:path*`,
        })) : [],
    ];
  },
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
      math: 'always',   // 此处指定为兼容 less-loader 3.x 的默认选项
      localIdentName: '[path]___[local]___[hash:base64:5]',
    },
  },
  trailingSlash: disableImageOptimization,
  experimental: {
    images: {
      unoptimized: disableImageOptimization,
    },
  },
};

module.exports = withLess(nextConfig);
