module.exports = {
  extends: ['@terrestris/eslint-config-typescript', 'prettier'],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/member-ordering': 'off',
    'prettier/prettier': 'warn'
  }
};
