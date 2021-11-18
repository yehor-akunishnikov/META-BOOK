import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MainContainer from '../views/containers/MainContainer.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainContainer,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/pages/Home.vue'),
      },
      {
        path: 'player',
        component: () => import('@/views/pages/Player.vue'),
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
