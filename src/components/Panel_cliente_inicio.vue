<template>
  <div>
    <h1>Actualizar datos cliente:</h1>

    <label for="usuario">Usuario a actualizar:</label>
    <input v-model="user" type="text" id="usuario" />

    <label for="telefono">Teléfono:</label>
    <input v-model="telefono" type="text" id="telefono" />

    <label for="email">email:</label>
    <input v-model="email" type="text" id="email" />

    <input
      v-on:click="actualizar_datos"
      type="button"
      id="boton-aceptar"
      value="Aceptar"
    /><br />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Panel_cliente_inicio",
  data: function () {
    return {
      user: "",
      telefono: "",
      email: "",
    };
  },

  methods: {
    actualizar_datos: function () {
      var datosJSon = {
        username: this.user,
        telefono: this.telefono,
        email: this.email,
      };

      console.log(datosJSon); //para ver en consola los datos ingresados
      axios
        // .post("http://127.0.0.1:8000/cliente/auth" , datosJSon) localmente
        .put(
          "https://reserva-hotel-fastapi.herokuapp.com/cliente/update",
          datosJSon
        )
        .then((respuesta) => {
          if (respuesta.data.Acualizado) {
            console.log("AUTENTICADO CORRECTAMENTE");
            alert("AUTENTICADO CORRECTAMENTE");
          }
        })
    },
  },
};
</script>


