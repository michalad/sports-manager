const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
    watch: true
});