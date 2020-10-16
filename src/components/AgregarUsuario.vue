<template>
  <v-container>
    <v-app-bar app color="#EEEEEE" light prominent class="py-5">
      <p>Agregar usuario:</p>
      <v-text-field
        v-model="nombre"
        :rules="[rules.required]"
        label="Nombre"
      ></v-text-field>

      <v-text-field
        v-model="apellido"
        :rules="[rules.required]"
        label="Apellido"
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="[rules.required, rules.email]"
        label="E-mail"
      ></v-text-field>
      <v-btn
        @click="editarUsuario"
        class="mx-2"
        fab
        dark
        color="cyan"
        v-if="edit"
      >
        <v-icon dark> mdi-plus </v-icon> </v-btn
      ><v-btn @click="agregarUsuario" class="mx-2" fab dark color="cyan" v-else>
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
import firebase from "firebase";
import { mapState, mapMutations } from "vuex";
export default {
  name: "AgregarUsuario",
  data() {
    return {
      nombre: "",
      apellido: "",
      email: "",
      loading: false,
    };
  },
  methods: {
    agregarUsuario() {
      console.log('a');
    }
  },
  computed: {
    ...mapState(["usuario", "edit", "rules"]),
  },
};
</script>


