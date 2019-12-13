export default [
  {
    path: '/member',
    component: '../layouts/LoginLayout',
    routes: [
      { path: '/member/login', component: './member/login/index', title: 'login'},
      { path: '/member/register', component: './member/register/index', title: 'register'}
    ]
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: './home/index', title: 'home' },
      { path: '/test/main', component: './test/main/index', title: 'main' },
      { path: '/test/question', component: './test/question/index', title: 'question' },
      { path: '/test/result', component: './test/result/index', title: 'result' },
      { path: '/joke', component: './joke/index', title: 'joke' },
      { path: '/usercenter', component: './usercenter/center/index', title: 'question' },
      { path: '/usercenter/userInfo', component: './usercenter/userinfo/index', title: 'userinfo'}
    ]
  }
];
