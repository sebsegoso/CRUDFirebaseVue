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
    loading: false,
    rules: {
      required: (value) => !!value || "Campo requerido",
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Correo electrónico inválido";
      },
    }
  },
  mutations: {
    
  },
  actions: {
    
  },
  modules: {
  }
})
