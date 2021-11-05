import { createWebHistory, createRouter } from 'vue-router';
import routeViews from './router-view';

const router = createRouter({
  history: createWebHistory(),
  routes: routeViews,
});

export default router;
