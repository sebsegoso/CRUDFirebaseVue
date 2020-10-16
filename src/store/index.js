import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: {
      name: '',
      lastname: '',
      email: '',
      id: ''
    },
    usuarios: [],
    edit: true,
    rules: {
      required: (value) => !!value || "Campo requerido",
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Correo electrónico inválido";
      },
    }
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
    }
  },
  modules: {
  }
})
