const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");

/** @type {import('next').NextConfig} */

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        imagesFolder: "assets",
        imagesName: "[name]-[hash].[ext]",
        handleImages: ["svg"],
        optimizeImages: true,

      },
    ],
  ],
  {
    webpack: (config, options) => {
      config.resolve.fallback = { fs: false };

      return config;
    },
    images: {
      loader: 'akamai',
      path: ''
    },
  }
);
