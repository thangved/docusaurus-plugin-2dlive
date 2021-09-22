const path = require('path');

module.exports = (context, options) => {
	return {
		name: 'docusaurus-plugin-2live',
		getClientModules() {
			return [path.resolve(__dirname, './configs.js')];
		},
	};
};
