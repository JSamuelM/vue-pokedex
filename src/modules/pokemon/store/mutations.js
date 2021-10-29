export const setPokemons = async (state, pokemons) => {
  state.pokemons = [...state.pokemons, ...pokemons]
  state.isLoading = false
}

export const setPokemon = (state, pokemon) => {
  state.pokemon = {...pokemon}
}

export const setEvolutionChain = (state, payload) => {
  state.evolutionChain = payload
}

export const setPokemonCry = (state, payload) => {
  state.pokemonCry = payload;
}