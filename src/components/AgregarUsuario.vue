<template>
  <v-container>
    <v-app-bar app color="#EEEEEE" light prominent class="py-5">
      <p>Agregar usuario:</p>
      <v-text-field
        v-model="newUser.name"
        :rules="[rules.required]"
        label="Nombre"
      ></v-text-field>

      <v-text-field
        v-model="newUser.lastname"
        :rules="[rules.required]"
        label="Apellido"
      ></v-text-field>

      <v-text-field
        v-model="newUser.email"
        :rules="[rules.required, rules.email]"
        label="E-mail"
      ></v-text-field>
      <v-btn @click="agregarUsuario" class="mx-2" fab dark color="cyan" :disabled="inputNoVacio">
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
      newUser: {
        name: "",
        lastname: "",
        email: ""
      },
    };
  },
  methods: {
    agregarUsuario() {
      this.$store.dispatch('agregarUsuario' , this.newUser)
    },
  },
  computed: {
    ...mapState(["usuario", "edit", "rules"]),
    inputNoVacio(){
      if (this.newUser.name.trim()  == ''|| this.newUser.lastname.trim()  == ''|| this.newUser.email.trim() == '') return true;
      else return false;
    }
  },
};
</script>


