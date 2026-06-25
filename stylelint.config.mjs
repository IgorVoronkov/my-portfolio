/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  customSyntax: 'postcss-styled-syntax',
  rules: {
    'selector-class-pattern': null,
  },
};

// {
//     "extends": [
//         "stylelint-config-standard",
//         "stylelint-config-recess-order"
//     ],
//     "customSyntax": "postcss-styled-syntax",
//     "rules": {
//         "selector-class-pattern": null
//     }
// }
