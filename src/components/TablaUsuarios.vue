<template>
  <div>
    <v-simple-table fixed-header height="300px">
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
              <v-btn
                class="mx-2"
                fab
                dark
                small
                color="red"
                @click="borrar(usuario.id)"
              >
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
export default {
  name: "TablaUsuarios",
  data() {
    return {};
  },
  computed: {
    ...mapState(["usuarios"]),
  },
  methods: {
    borrar(id){
      this.$store.dispatch('eliminarUsuario' , id)
    }
  },
};
</script>

<style>
</style>