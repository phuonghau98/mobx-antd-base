const injectBabelPlugin = require('react-app-rewired').injectBabelPlugin
const rewireMobX = require('react-app-rewire-mobx')

module.exports = function override (config, env) {
  config = injectBabelPlugin('babel-plugin-styled-components', config)
  config = rewireMobX(config, env)
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    config
  )
  // PHUONG: settings for ant-design
  // PHUONG: configurations for mobx without eject create-react-app tool
  return config
}
