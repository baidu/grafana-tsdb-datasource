/**
 * @file webpack base conf
 */
const baseWebpackConfig = require('./webpack.base.conf');

const conf = baseWebpackConfig;
conf.watch = true;
conf.devtool = 'source-map';

module.exports = conf;
