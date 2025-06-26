module.exports = {
  source: ["tokens/**/*.json"],
  platforms: {
    js: {
      transformGroup: "js",
      buildPath: "mcp-btc/components/generated-tokens/",
      files: [
        {
          destination: "tokens.js",
          format: "javascript/es6",
        },
      ],
    },
    // You can add ios, android, css, etc. here if needed
  },
};
