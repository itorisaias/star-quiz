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
    path: '**',
    redirect: '/'
  }
]

export function createRouter () {
  const router = new Router({ routes })
  return router
}
