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
    llamadoApi(state) {
      fetch('https://us-central1-demosso-1a57c.cloudfunctions.net/usuarios/usuarios')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(`Error en el llamado : ${error}`))
    }
  },
  modules: {
  }
})
