module.exports = {
  root: true,
  extends: ['@dow/eslint-config-vue'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json']
  }
}
