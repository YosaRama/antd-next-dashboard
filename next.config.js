const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
  },
  ...withLess(
    withSass({
      lessLoaderOptions: {
        javascriptEnabled: true,
      },
    })
  ),
});
