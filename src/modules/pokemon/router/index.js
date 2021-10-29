export default {
  name: 'pokemon',
  component: () => import(/* webpackChunkName: "pokemon-layout" */ '@/modules/pokemon/layouts/PokemonLayout.vue'),
    children: [
      {
      path: 'pokemon-list',
      name: 'pokemon-list',
      component: () => import(/* webpackChunkName: "pokemon-list" */ '@/modules/pokemon/views/PokemonView.vue')
    },
    {
      path: 'pokemon/favorites',
      name: 'pokemon-favorites',
      component: () => import(/* webpackChunkName: "pokemon-favorites" */ '@/modules/pokemon/views/PokemonFavoritesView.vue')
    },
    {
      path: 'pokemon/:id',
      name: 'pokemon-id',
      component: () => import(/* webpackChunkName: "pokemon-id" */ '@/modules/pokemon/views/PokemonDetailView.vue')
    },
  ]
}