<template>
  <v-container>
    <!-- <v-row justify="center"> -->
    <v-card>
      <v-card-title class="headline"> Editar usuario </v-card-title>

      <v-card-text>
        <v-text-field
          v-model="user.name"
          label="Nombre"
          autofocus
        ></v-text-field>

        <v-text-field v-model="user.lastname" label="Apellido"></v-text-field>

        <v-text-field v-model="user.email" label="E-mail"></v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="green darken-1" text @click="cerrarModal">
          Cancelar
        </v-btn>

        <v-btn
          class="mx-2"
          fab
          dark
          elevation="2"
          color="cyan"
          :disabled="inputNoVacio"
          @click="actualizarUsuario"
        >
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <!-- </v-row> -->
  </v-container>
</template>

<script>
import firebase from "firebase";
import { mapState, mapActions } from "vuex";
export default {
  name: "EditarUsuario",
  props: ["usuario"],
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.user = this.usuario;
  },
  methods: {
    ...mapActions(["editarUsuario"]),
    cerrarModal() {
      this.$emit("cerrar");
    },
    actualizarUsuario() {
      let actualizacion = {
        id: this.user.id,
        data: {
          name: this.user.name,
          lastname: this.user.lastname,
          email: this.user.email,
        },
      };
      this.editarUsuario(actualizacion);
      this.$emit("cerrar");
    },
  },
  computed: {
    ...mapState(["usuarioAEditar"]),
    inputNoVacio() {
      if (
        this.user.name.trim() == "" ||
        this.user.lastname.trim() == "" ||
        this.user.email.trim() == ""
      )
        return true;
      else return false;
    },
    userAEditar() {
      this.user.name = this.usuarioAEditar.name;
      this.user.lastname = this.usuarioAEditar.lastname;
      this.user.email = this.usuarioAEditar.email;
    },
  },
};
</script>


