module.exports = {
  root: true,
  extends: [
    'stylelint-config-html',
    'stylelint-config-recommended-vue',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss'
  ],
  plugins: ['stylelint-order', 'stylelint-config-rational-order/plugin'],
  rules: {
    'order/properties-order': [],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': false
      }
    ]
  }
}
