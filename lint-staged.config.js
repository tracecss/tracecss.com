export default {
  '*.css': ['stylelint --fix --max-warnings 0', 'prettier --write'],
  '*.{js,mjs,cjs,json,md,html,yml,yaml}': 'prettier --write',
};
