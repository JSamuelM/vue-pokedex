import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/'
import authRouter from '@/modules/auth/router'
import pokemonRouter from '@/modules/pokemon/router'

const routes = [
  {
    path: "/",
    redirect: '/pokemon'
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/pokemon",
    ...pokemonRouter
  },
  // {
  //   path: '/pokemon',
  //   component: () => import(/* webpackChunkName: "pokemon-layout" */ '../modules/pokemon/views/PokemonView.vue'),
  //   children: [

  //   ]
  // },
  // {
  //   path: '/pokemon',
  //   name: 'pokemon',
  //   component: () => import(/* webpackChunkName: "pokemon" */ '../modules/pokemon/views/PokemonView.vue')
  // },
  // {
  //   path: '/pokemon/favorites',
  //   name: 'pokemon-favorites',
  //   component: () => import(/* webpackChunkName: "pokemon-favorites" */ '../modules/pokemon/views/PokemonFavoritesView.vue')
  // },
  // {
  //   path: '/pokemon/:id',
  //   name: 'pokemon-id',
  //   component: () => import(/* webpackChunkName: "pokemon-id" */ '../modules/pokemon/views/PokemonDetailView.vue')
  // },
  {
    path: "/auth",
    ...authRouter,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
