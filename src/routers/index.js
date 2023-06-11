import {createRouter, createWebHashHistory} from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      name: 'home',
      path: '/home',
      component: () => import('@/views/Home.vue')
    }
  ]
});

export default router;
