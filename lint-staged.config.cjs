module.exports = {
  '*.{js,jsx,ts,tsx}': ['pnpm eslint --cache --fix', 'pnpm prettier  --write'],
  '*.vue': ['pnpm eslint --cache --fix', 'pnpm stylelint --fix', 'pnpm prettier --write'],
  '*.{scss,less,style,html}': ['pnpm stylelint --fix', 'pnpm prettier --write']
}
