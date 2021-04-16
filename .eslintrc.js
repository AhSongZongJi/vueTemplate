// eslint 规则配置

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    quotes: 0,
    'comma-dangle': ['error', 'never']
  }
};
