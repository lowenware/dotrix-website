const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
/** @type {import('next').NextConfig} */
const GIT_REVISION = require("child_process")
.execSync("git rev-parse HEAD")
.toString().trim().substring(0,8);
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
      config.resolve.fallback = {fs: false};

      return config;
    },
    images: {
      loader: "akamai",
      path: ""
    },
    trailingSlash: true,
    env: {
      BUILD_ID: GIT_REVISION,
    },
  },
);


