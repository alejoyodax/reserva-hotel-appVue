<template>
  <div id="caja-formulario">
    <h1>Iniciar sesión</h1>
    
    <form id="formulario">
      <label class="lform" for="fnombre">Usuario: </label>
      <input  v-model="user" class="iform" type="text" id="fnombre" name="fnombre"></br>
      
      <label class="lform" for="fapellido">Contraseña: </label>
      <input v-model="pass" class="iform" type="password" id="fcontraseña" name="fcontraseña"></br>

    </form>

    <input v-on:click="hacerLogin" type="button" id="boton-aceptar" value="Aceptar">

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data: function () {
    return {
      user: null,
      pass: null
    };
  },

  methods: {
    hacerLogin: function () {
      this.user
      var datosJSon = { 
        "username": this.user, 
        "contrasena": this.pass 
        };
      console.log(datosJSon);

      axios
          // .post("http://127.0.0.1:8000/cliente/auth" , datosJSon) localmente
        .post("https://reserva-hotel-fastapi.herokuapp.com/cliente/auth" , datosJSon)
        .then((respuesta) => {
          if (respuesta.data.Autenticado) {
            console.log("AUTENTICADO CORRECTAMENTE");
            alert("AUTENTICADO CORRECTAMENTE");
          }else{
            console.log("CONTRASEÑA INCORRECTA");
            alert("CONTRASEÑA INCORRECTA");
          }
          
        }).catch(error => {
        alert("El usuario no existe")
    });
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#caja-formulario {
  margin: 80px 280px 80px;
  background-color: white;
  height: 300px;

  border: solid;
  border-color: darkslategray;
  border-radius: 5px;
}

h1 {
  padding-top: 0px;
}

label {
  display: inline-block;
  width: 100px;
  text-align: left;
  margin-right: 10px;
}

#formulario {
  font-size: 20px;
}

#formulario input {
  height: 23px;
  margin: 0px 0px 20px 0px;
}

#boton-aceptar {
  width: 100px;
  height: 33px;
  background-color: white;
  font: bold;
  margin: 0px;
}

#boton-aceptar:hover {
  background-color: gray;
  color: white;
  font: bold;
}

#boton-aceptar:active {
  background-color: rgb(48, 48, 48);
  font: bold;
}
</style>
