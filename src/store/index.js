import { createStore } from 'vuex'

import auth from '@/modules/auth/store'
import pokemon from '@/modules/pokemon/store'

export default createStore({
  modules: {
    auth,
    pokemon
  }
})
