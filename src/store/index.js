import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    loading: false
  },
  mutations: {
    OBTENER_USUARIOS(state, data) {
      state.usuarios = data
      state.loading = false;
    },
    CARGAR_TABLA(state) {
      state.loading = true;
    }
  },
  actions: {
    obtenerUsuarios(context) {
      context.commit('CARGAR_TABLA');
      axios
        .get('https://us-central1-demosso-1a57c.cloudfunctions.net/usuarios/usuarios',
          { headers: { 'Content-type': 'text/plain' } }
        )
        .then(res => {
          let data = res.data;
          context.commit('OBTENER_USUARIOS', data)
        })
    }
  },
  modules: {
  }
})
