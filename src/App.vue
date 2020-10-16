<template>
  <v-app>
    <v-main>
      <TablaUsuarios />
      <AgregarUsuario />
    </v-main>
  </v-app>
</template>

<script>
import AgregarUsuario from "./components/AgregarUsuario";
import TablaUsuarios from "./components/TablaUsuarios";

export default {
  name: "App",

  components: {
    AgregarUsuario,
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
};
</script>

