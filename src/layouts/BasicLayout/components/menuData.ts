/*
 * @文件描述: 临时菜单数据，后续由后端生成
 * @公司: thundersdata
 * @作者: 李洪文
 * @Date: 2019-05-31 10:39:43
 * @LastEditTime: 2020-04-28 19:31:09
 * @LastEditors: Do not Edit
 */

// 后续删掉
const userResourceList = [
  {
    resourceKey: 'base',
    apiUrl: '',
    icon: 'icon-base',
    description: '项目管理',
    children: [
      {
        resourceKey: 'department',
        apiUrl: '/base/department',
        description: '部门管理',
      },
      {
        resourceKey: 'lab',
        apiUrl: '/base/lab',
        description: '比赛项目管理',
      },
    ],
  },
  {
    resourceKey: 'spider',
    apiUrl: '',
    icon: 'icon-ruku',
    description: '数据采集',

    children: [
      {
        resourceKey: 'spiderLogList',
        apiUrl: '/spider/log',
        description: '采集历史',
      },
      {
        resourceKey: 'spiderTask',
        apiUrl: '/spider/task',
        description: '采集状态',
      },
    ],
    privilegeList: [],
  },
  /*
  {
    resourceKey: 'profile',
    apiUrl: '/profile',
    icon: '',
    description: '个人中心',
    privilegeList: [],
  },
*/
];

export const getUserResourceList = () => {
  return userResourceList;
};
