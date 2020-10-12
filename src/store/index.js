import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios: []
  },
  mutations: {
  },
  actions: {
    read(state) {
      firebase
        .firestore()
        .collection("usuarios")
        .onSnapshot(snapshot => {
          state.usuarios = []
          snapshot.forEach(doc => {
            console.log(doc.id + doc.data());
            state.usuarios.push({
              id: doc.id,
              data: doc.data()
            })
          })
        });
    }
  },
  modules: {
  }
})
