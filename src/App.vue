<template>
  <v-app>
    <AgregarUsuario />
    <TablaUsuarios />
  </v-app>
</template>

<script>
import AgregarUsuario from "./components/AgregarUsuario";
import TablaUsuarios from "./components/TablaUsuarios";
import { mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {};
  },

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
  computed: {
    ...mapState(["edit"]),
  },
};
</script>

