import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarioAEditar: {},
    usuarios: [],
    edit: false,

  },
  mutations: {
    OBTENER_USUARIOS(state, users) {
      state.usuarios = users
    }
  },
  actions: {
    obtenerUsuarios({ commit }) {
      firebase
        .firestore()
        .collection('usuarios')
        .onSnapshot(snapshot => {
          let users = []
          snapshot.forEach(user => {
            users.push({
              id: user.id,
              data: user.data()
            })
          })
          commit('OBTENER_USUARIOS', users)
        })
    },
    agregarUsuario({ commit }, usuario) {
      firebase
        .firestore()
        .collection('usuarios')
        .add(usuario)
    },
    eliminarUsuario({ commit }, id) {
      firebase
        .firestore()
        .collection('usuarios')
        .doc(id)
        .delete()
    },
    editarUsuario({ commit }, usuario) {
      firebase
        .firestore()
        .collection('usuarios')
        .doc(usuario.id)
        .update(usuario.data)
    }
  },
  getters: {
    edit(state) {
      return state.edit
    }
  }
})
