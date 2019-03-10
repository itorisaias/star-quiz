import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/playing',
    name: 'Quiz',
    component: () => import('@/views/Quiz.vue')
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: () => import('@/views/Ranking.vue')
  },
  {
    path: '**',
    redirect: '/'
  }
]

export function createRouter () {
  const router = new Router({ routes })
  return router
}
