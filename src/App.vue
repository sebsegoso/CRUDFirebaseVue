<template>
  <v-app>
    <v-main>
      <EditarUsuario v-if="edit" />
      <AgregarUsuario v-else />
      <TablaUsuarios  />
    </v-main>
  </v-app>
</template>

<script>
import AgregarUsuario from "./components/AgregarUsuario";
import EditarUsuario from "./components/EditarUsuario";
import TablaUsuarios from "./components/TablaUsuarios";
import {mapState} from 'vuex'

export default {
  name: "App",
  data() {
    return {
     
    }
  },

  components: {
    AgregarUsuario,
    EditarUsuario,
    TablaUsuarios,
  },
  methods: {
    cargarUsuarios() {
      this.$store.dispatch("obtenerUsuarios");
    },
  },
  created() {
    this.cargarUsuarios();
  },
  computed: {
    ...mapState(['edit'])
  },

};
</script>

