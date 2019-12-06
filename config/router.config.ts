export default [
  {
    path: "/",
    component: "../layouts/BasicLayout",
    routes: [
      { path: '/', redirect: '/login' },
      { path: "/login", component: "./login/index", title: "login" },
      { path: "/home", component: './home/index', title: "home" }
    ]
  }
];
