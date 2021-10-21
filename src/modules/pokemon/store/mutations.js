export const setPokemons = async (state, pokemons) => {
  state.pokemons = [...state.pokemons, ...pokemons]
  state.isLoading = false
}