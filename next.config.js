const path = require("path");
/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config, options) => {
    config.resolve.fallback = { fs: false };
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            titleProp: true,
            svgoConfig: {
              plugins: [
                /*{ removeViewBox: false }*/
              ],
            },
          },
        },
      ],
      include: path.resolve(__dirname, "./assets"),
    });
    return config;
  },
};
