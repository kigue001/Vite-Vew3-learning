import { createWebHistory, createRouter } from 'vue-router';
import routeViews from '@routers/router-view';
import routeApis from '@routers/router-api';

let routes = [
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import ('@views/NotFound.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import ('@views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component:  () => import ('@views/Login.vue'),
  },
  {
    path: '/user/:userName',
    name: 'User',
    component:  () => import ('@views/User.vue'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes 
});

export default router;
