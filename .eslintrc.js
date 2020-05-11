module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": [
        "plugin:@typescript-eslint/recommended",
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
    },
    // "rules": {
    //   "semi": ["error", "always"],
    //   "quotes": ["error", "double"],
    //   "@typescript-eslint/explicit-function-return-type": "off",
    //   "@typescript-eslint/no-explicit-any": 1,
    //   "@typescript-eslint/no-inferrable-types": [
    //     "warn", {
    //       "ignoreParameters": true
    //     }
    //   ],
    //   "@typescript-eslint/no-unused-vars": "warn"
    // }
  };