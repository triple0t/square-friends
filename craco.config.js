// craco.config.js
const cracoAlias = require("craco-alias");

module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
    plugins: [
      {
        plugin: cracoAlias,
        options: {
          source: "tsconfig",
          baseUrl: "src",
          tsConfigPath: "./tsconfig.extend.json"
        }
      }
    ]
}