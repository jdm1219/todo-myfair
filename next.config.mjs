const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeAttrs',
                  params: { attrs: '(fill)' }, // fill 속성 제거
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
