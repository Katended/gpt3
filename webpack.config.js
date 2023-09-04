// webpack.config.js
const path = require('path');

module.exports = {
  // ... other Webpack configurations ...
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Convert images smaller than 8kb to base64 strings
              name: 'build/assets/[name].[ext]', // Output images to the 'images' directory
            },
          },
        ],
      },
    ],
  },
};
