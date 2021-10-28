import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import authRouter from '@/modules/auth/router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () => import(/* webpackChunkName: "pokemon" */ '../modules/pokemon/views/PokemonView.vue')
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon-id',
    component: () => import(/* webpackChunkName: "pokemon-id" */ '../modules/pokemon/views/PokemonDetailView.vue')
  },
  {
    path: '/auth',
    ...authRouter
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
