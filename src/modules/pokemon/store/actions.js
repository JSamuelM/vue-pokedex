import { pokemonApi } from "@/api/pokemon"

export const loadPokemons = async ({commit}) => {
  // const { data } = await pokemonApi.get('/pokemon?limit=150')
  // commit('setPokemons', data.results)

  /**
   * Cambiando otra forma de realizar la peticion y obtener toda
   * informacion de cada pokemon, incluyendo el type
   * y demas informacion valiosa
   * 
   * Haciendo uso de un ciclo for
   */
  const pokemonsList = []
  for (let i = 1; i <= 150; i++) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    await pokemonApi.get(url)
      .then(({data}) => {
        const pokemon = {
          name: data.name,
          id: data.id,
          image: data.sprites['front_default'],
          type: data.types
        }
        pokemonsList.push(pokemon)
      })
  }

  commit('setPokemons', pokemonsList)
}

export const loadPokemon = async ({commit}, id) => {
  await pokemonApi.get(`/pokemon/${id}`)
    .then((resp) => {
      commit('setPokemon', resp.data)
    })
}

export const loadEvolutionChain = async ({commit}, id) => {
  await pokemonApi.get(`/evolution-chain/${id}`)
    .then(({data}) => {
      const evoChain = [];
      let evoData = data.chain;

      let evoDetails = evoData['evolution_details'][0]
      do {
        evoChain.push({
          "id": data.id,
          "species_name": evoData.species.name,
          "min_level": !evoDetails ? 1 : evoDetails.min_level,
          "item": !evoDetails ? null : evoDetails.item
        })

        evoData = evoData['evolves_to'][0]
      } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
      commit('setEvolutionChain', evoChain)
    })
    .catch((error) => {
      console.log(error);
    })
}

export const loadPokemonCry = ({commit}, id) => {
  const cry = `../../../assets/audio/cries/${id}.ogg`
  commit('setPokemonCry', cry)
}