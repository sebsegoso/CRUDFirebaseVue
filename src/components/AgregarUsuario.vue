<template>
  <v-container>
    <v-app-bar app color="#EEEEEE" light prominent class="py-5 mb-5">
      <p>Agregar usuario:</p>
      <v-text-field
        v-model="newUser.name"        
        label="Nombre"
      ></v-text-field>

      <v-text-field
        v-model="newUser.lastname"        
        label="Apellido"
      ></v-text-field>

      <v-text-field
        v-model="newUser.email"        
        label="E-mail"
      ></v-text-field>
      <v-btn
        @click="agregarUsuario"
        class="mx-2"
        fab
        dark
        elevation="2"
        color="cyan"
        :disabled="inputNoVacio"
      >
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
import firebase from "firebase";
export default {
  name: "AgregarUsuario",
  data() {
    return {
      newUser: {
        name: "",
        lastname: "",
        email: "",
      },
    };
  },
  methods: {
    agregarUsuario() {
      this.$store.dispatch("agregarUsuario", this.newUser);
      this.newUser.name = "";
      this.newUser.lastname = "";
      this.newUser.email = "";
    },
  },
  computed: {
    
    inputNoVacio() {
      if (
        this.newUser.name.trim() == "" ||
        this.newUser.lastname.trim() == "" ||
        this.newUser.email.trim() == ""
      )
        return true;
      else return false;
    },
  },
};
</script>


