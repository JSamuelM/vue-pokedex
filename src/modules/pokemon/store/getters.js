export const getPokemonsByName = (state) => (term = '') => {
  if (term.length === 0) {
    return state.pokemons
  }

  return state.pokemons.filter(pokemon => 
    pokemon.name.toLowerCase().includes(term.toLocaleLowerCase()))
}