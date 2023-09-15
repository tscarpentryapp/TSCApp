const RULES = {
    OFF: "off",
    WARN: "warn",
    ERROR: "error",
  };
  
  module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: ["plugin:react/recommended", "standard", "prettier"],
    overrides: [],
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["react"],
    rules: {
      "react/react-in-jsx-scope": RULES.OFF,
      "react/prop-types": RULES.OFF,
      "react/no-unknown-property": RULES.OFF,
    },
  };