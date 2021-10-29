import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import auth from '@/plugins/firebase'

export const signUpAction = async ({ commit }, payload) => {
  // const auth = getAuth;
  try {
    await createUserWithEmailAndPassword(auth, payload.email, payload.password)
      .then((resp) => {
        // Signed in
        commit("setUser", resp.user);
        commit("setIsAuth", true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log({ message: errorMessage });
        commit("setError", error.message);
      });
  } catch (error) {
    console.log(error);
  }
};

export const signInAction = async ({ commit }, payload) => {
  signInWithEmailAndPassword(auth, payload.email, payload.password)
    .then((resp) => {
      commit("setUser", resp.user);
      commit("setIsAuth", true);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log({ code: errorCode, message: errorMessage });
      commit("setError", error.message);
    });
};

export const signOutAction = async ({ commit }) => {
  signOut(auth)
    .then(() => {
      commit("setUser", null);
      commit("setIsAuth", false);
    })
    .catch((error) => {
      commit('setError', error.message)
      console.log(error);
    });
};
