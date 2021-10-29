export const setPokemons = (state, pokemons) => {
  state.pokemons = [...state.pokemons, ...pokemons]
  state.isLoading = false
}

export const resetPokemons = (state, pokemons) => {
  state.pokemons = [];
  state.isLoading = false;
}

export const setPokemon = (state, pokemon) => {
  state.pokemon = {...pokemon}
}

export const setEvolutionChain = (state, payload) => {
  state.evolutionChain = payload
}

export const setPokemonToFavorites = (state, pokemon) => {
  state.favorites.push(pokemon)
}