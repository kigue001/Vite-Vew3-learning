import {createWebHistory, createRouter} from 'vue-router';
import routeViews from '@routers/router-view';
import routeApis from '@routers/router-api';

let routes = [].concat(routeViews, routeApis);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
