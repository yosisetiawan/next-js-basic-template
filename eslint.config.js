module.exports = [
  {
    plugins: ["simple-import-sort"],
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "plugin:@next/next/recommended",
      "plugin:tailwindcss/recommended",
      "prettier",
    ],
    " rules": {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
    parserOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
    },
  },
];
