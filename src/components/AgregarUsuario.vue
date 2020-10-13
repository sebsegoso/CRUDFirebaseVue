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
      <v-btn class="mx-2" fab dark color="indigo">
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
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
    };
  },
};
</script>


