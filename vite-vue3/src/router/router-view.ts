const routeViews = [
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@views/NotFound.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@views/Login.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@views/Home.vue'),
  },
  {
    path: '/home2',
    name: 'Home2',
    component: () => import('@views/Home2.vue'),
  },
  {
    path: '/user/:userName',
    name: 'User',
    component: () => import('@views/User.vue'),
    props: true,
  },
];

export default routeViews;
