import { createWebHistory, createRouter } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import routeViews from './router-view';

// const router = createRouter({
//   history: createWebHistory(),
//   routes: setupLayouts(generatedRoutes),
// });

const router = createRouter({
  history: createWebHistory(),
  routes: routeViews,
});

export default router;
