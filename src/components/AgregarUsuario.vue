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
      <v-btn @click="editarUsuario" class="mx-2" fab dark color="cyan" v-if="edit">
        <v-icon dark> mdi-plus </v-icon>
      </v-btn><v-btn @click="agregarUsuario" class="mx-2" fab dark color="cyan" v-else>
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
import firebase from "firebase";
import { mapState, mapMutations } from "vuex";
import axios from "axios";
export default {
  name: "AgregarUsuario",
  data() {
    return {
      nombre: "",
      apellido: "",
      email: "",
      rules: {
        required: (value) => !!value || "Campo requerido",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Correo electrónico inválido";
        },
      },
      loading: false,
    };
  },
  methods: {
    agregarUsuario() {
      let user = {
        name: this.nombre,
        lastname: this.apellido,
        email: this.email,
      };
      this.loading = true;
      axios
        .post(
          `https://us-central1-demosso-1a57c.cloudfunctions.net/usuarios/usuario/`,
          user,
          { headers: { "Content-type": "application/json" } }
        )
        .then((res) => {
          this.$store.dispatch("obtenerUsuarios");
          this.loading = false;
        })
        .catch((rej) => {
          console.log(rej.message);
        });
    },
    editarUsuario() {
      let user = {
        name: this.nombre,
        lastname: this.apellido,
        email: this.email,
      };
      this.loading = true;
      axios
        .put(
          `https://us-central1-demosso-1a57c.cloudfunctions.net/usuarios/usuario/${this.usuario.id}`,
          user,
          { headers: { "Content-type": "application/json" } }
        )
        .then((res) => {
          this.$store.dispatch("obtenerUsuarios");
          this.loading = false;
        })
        .catch((rej) => {
          console.log(rej.message);
        });
    },
  },
  computed: {
    ...mapState(["usuario", "edit"]),
  },
};
</script>


