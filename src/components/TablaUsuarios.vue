<template>
  <div>
    <v-dialog v-model="dialog" max-width="100%">
      <EditarUsuario @cerrar="cerrar" :usuario="usuarioAEditar"/>
    </v-dialog>
    <v-simple-table class="tabla" fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nombre</th>
            <th class="text-left">Apellido</th>
            <th class="text-left">Email</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in usuarios" :key="usuario.id">
            <td>{{ usuario.data.name }}</td>
            <td>{{ usuario.data.lastname }}</td>
            <td>{{ usuario.data.email }}</td>
            <td>
              <v-btn color="primary" small fab dark @click.stop="dialog = true" @click="editar(usuario.id)">
                <v-icon dark> mdi-pencil </v-icon>
              </v-btn>
            </td>
            <td>
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
import EditarUsuario from "./EditarUsuario";
import firebase from "firebase";
import { mapState } from "vuex";
export default {
  name: "TablaUsuarios",
  data() {
    return {
      dialog: false,
      usuarioAEditar: {
        name: '',
        lastname: '',
        email:'',
        id: ''
      }
    };
  },
  components: {
    EditarUsuario,
  },
  computed: {
    ...mapState(["usuarios"]),
  },
  methods: {
    borrar(id) {
      this.$store.dispatch("eliminarUsuario", id);
    },
    editar(idUser) {
      let user = this.usuarios.find(usr => usr.id == idUser)
      this.usuarioAEditar.name = user.data.name
      this.usuarioAEditar.lastname = user.data.lastname
      this.usuarioAEditar.email = user.data.email
      this.usuarioAEditar.id = user.id

      // this.$store.dispatch("obtenerInfoAEditar", id);
    },
    cerrar(){
      this.dialog = false
    }
  },
};
</script>

<style lang='scss'>
.tabla {
  padding-top: 120px;
}
</style>