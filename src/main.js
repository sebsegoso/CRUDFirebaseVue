import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBP6K4jEdfcGN6pIVnBX47taCqpxYN35iI",
  authDomain: "demosso-1a57c.firebaseapp.com",
  databaseURL: "https://demosso-1a57c.firebaseio.com",
  projectId: "demosso-1a57c",
  storageBucket: "demosso-1a57c.appspot.com",
  messagingSenderId: "1006511121632",
  appId: "1:1006511121632:web:6e8c82b9bbba2765dd9c85",
  measurementId: "G-EE1WPQF32X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
