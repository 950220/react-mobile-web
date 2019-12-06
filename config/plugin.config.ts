// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ContextReplacementPlugin = require('webpack').ContextReplacementPlugin;
export default config => {
  if (process.env.NODE_ENV === 'development') {
    config.devServer
      .proxy({
        '/api': {
          target: 'http://39.108.232.210:9165',
          changeOrigin: true,
          pathRewrite: {
            '^/api' : ''
          }
        }
      })
  }
    // 打包优化 uglifyjs-webpack-plugin 配置
  if (process.env.NODE_ENV === 'production') {
    // config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin);
    config.plugin('webpack-context-replacement').use(ContextReplacementPlugin,[ /moment[\/\\]locale$/,/en-us|zh/]);
  }
  // if (process.env.NODE_ENV === 'production') {
  //   config.merge({
  //     plugin: {
  //       install: {
  //         plugin: require('uglifyjs-webpack-plugin'),
  //         args: [{
  //           sourceMap: false,
  //           uglifyOptions: {
  //             compress: {
  //               // 删除所有的 `console` 语句
  //               drop_console: true,
  //             },
  //             output: {
  //               // 最紧凑的输出
  //               beautify: false,
  //               // 删除所有的注释
  //               comments: false,
  //             },
  //           },
  //         }],
  //       },
  //     },
  //   });
  // }
};
