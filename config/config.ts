// https://umijs.org/config/
import path from 'path';
import pageRoutes from './router.config';
import theme from '../src/theme';
import webpackPlugin from './plugin.config';

export default {
  // add for transfer to umi
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        locale: {
          // default false
          enable: true,
          // default en-US
          default: 'en-US',
          // default true, when it is true, will use `navigator.language` overwrite default
          baseNavigator: false,
          antd: true
        },
        dynamicImport: {
          loadingComponent: './components/PageLoading/index',
          webpackChunkName: true,
        },
        title: {
          defaultTitle: 'joke',
          format: 'joke'
        },
        dll: false,
        pwa: false,
        hd: true,
        routes: {
          // 路由配置忽略以下文件夹下文件
          exclude: [

          ],
        },
        hardSource: false,
      },
    ],
  ],
  //   exportStatic: {},
  // 路由配置
  routes: pageRoutes,
  // Theme for antd-mobile
  // https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.less
  theme: theme,
  //   ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  cssnano: {
    mergeRules: false,
  },
  targets: {
    android: 4,
    ios: 7,
    ie: 9,
    firefox: 45, 
    safari: 10, 
    edge: 13
  },
  outputPath: './dist',
  publicPath: '/m/',
  history: 'hash',
  hash: true,
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  // ignoreMomentLocale: true, // 忽略 moment 的 locale 文件，用于减少尺寸。
  devtool: process.env.NODE_ENV === 'production' ? 'hidden-source-map' : '',
  chainWebpack:webpackPlugin
};
