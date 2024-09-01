/** @type {import('@commitlint/types').UserConfig} */
const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    "body-empty": [
      1,
      "never"
    ],
    "scope-enum": [
      2,
      "always",
      [
        "backend",
        "frontend",
        "database",
        "server",
        "utils",
        "devxp",
        "deps"
      ]
    ]
  },
};

module.exports = config;
