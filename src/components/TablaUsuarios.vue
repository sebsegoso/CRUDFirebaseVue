<template>
  <div>
    <div class="lds-dual-ring" v-if="loading"></div>
    <v-simple-table fixed-header height="300px" v-else>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nombre</th>
            <th class="text-left">Apellido</th>
            <th class="text-left">Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in usuarios" :key="usuario.id">
            <td>{{ usuario.data.name }}</td>
            <td>{{ usuario.data.lastname }}</td>
            <td>{{ usuario.data.email }}</td>
            <td>
              <v-btn class="mx-2" fab dark small color="cyan" @click="editar()">
                <v-icon dark> mdi-pencil </v-icon>
              </v-btn>
              <v-btn class="mx-2" fab dark small color="red" @click="borrar(usuario.id)">
                <v-icon dark> mdi-delete </v-icon>
              </v-btn>
            </td>
            
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>


<script>
import firebase from "firebase";
import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "TablaUsuarios",
  data() {
    return {};
  },
  mounted() {
    this.cargarTabla();
  },
  computed: {
    ...mapState(["usuarios" , 'loading']),
  },
  methods: {
    cargarTabla() {
      this.$store.dispatch("obtenerUsuarios");
    },
    borrar(id) {
      axios
        .delete(
          `https://us-central1-demosso-1a57c.cloudfunctions.net/usuarios/usuario/${id}`,
          { headers: { "Content-type": "application/json" } }
        )
        .then((res) => {
          this.cargarTabla();
        });
    },
    editar() {
      this.$store.state.edit = true;
      // this.$store.state.usuario = row;
    },
    agregar() {
      this.$store.state.edit = false;
      this.$store.state.usuario = {}
    }
  },
};
</script>

<style>

</style>