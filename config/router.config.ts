export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/login' },
      { path: '/login', component: './login/index', title: 'login' },
      { path: '/home', component: './home/index', title: 'home' },
      { path: '/test/main', component: './test/main/index', title: 'main' },
      { path: '/test/question', component: './test/question/index', title: 'question' },
    ]
  }
];
