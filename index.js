const path = require('path')

module.exports = (context, options) => {
    return {
        name: 'docusaurus-plugin-2live',
        async loadContent() {
        },
        async contentLoaded({ contents, actions }) {
        },
        validateOptions({ options, validate }) {
            return options
        },
        validateThemeConfig({ themeConfig, validate }) {
            return themeConfig
        },
        getClientModules() {
            return [
                path.resolve(__dirname, './configs.js'),
            ]
        }
    }
}