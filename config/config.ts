/*
 * @Author: your name
 * @Date: 2020-04-28 11:51:34
 * @LastEditTime: 2020-04-28 17:46:55
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \labs-fronted\config\config.ts
 */
import routeConfig from './route.config';
import theme from './theme';

export default {
  routes: routeConfig,
  targets: {
    ie: 11,
  },
  history: 'hash',
  outputPath: './build',
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: {
          webpackChunkName: true,
          loadingComponent: './components/Loading',
        },
        title: '比赛项目管理系统',
        locale: {
          enable: true, // default false
          default: 'zh-CN', // default zh-CN
          baseNavigator: true,
        },
        library: 'react',
        dll: true,
        pwa: false,
        hardSource: false,
        fastClick: true,
      },
    ],
  ],
  sass: {},
  // 配置antd的基础样式
  theme,
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
};
