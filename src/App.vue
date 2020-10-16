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
};
</script>

<style>
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #000;
  border-color: #000 transparent #000 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
</style>
