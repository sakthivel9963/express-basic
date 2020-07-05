module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
  },
};
