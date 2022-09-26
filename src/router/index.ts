import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/analyse',
      name: 'analyse',
      beforeEnter(to, from, next) {
        if (to.query.username) {
          next();
        } else {
          next('/');
        }
      },
      component: () => import('../views/AnalyseView.vue'),
    },
  ],
});

export default router;
