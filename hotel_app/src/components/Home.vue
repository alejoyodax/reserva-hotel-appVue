<template>
  <div id="caja-formulario">
    <h1>Iniciar sesión</h1>
    
    <form id="formulario">
      <label class="lform" for="fnombre">Usuario: </label>
      <input  class="iform" type="text" id="fnombre" name="fnombre"></br>
      
      <label class="lform" for="fapellido">Contraseña: </label>
      <input class="iform" type="password" id="fcontraseña" name="fcontraseña"></br>

    </form>

    <input type="button" id="boton-aceptar" value="Aceptar">

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Componente ingreso de usuarios'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#caja-formulario{
  margin: 80px 280px 80px;
  background-color:white;
  height: 300px;

  border: solid;
  border-color: darkslategray;
  border-radius: 5px;
}

h1{
  padding-top: 0px;
}

label{
  display: inline-block;
  width: 100px;
  text-align: left;
  margin-right: 10px;
}

#formulario {
  font-size: 20px;
}

#formulario input{
  height: 23px;
  margin: 0px 0px 20px 0px;
}

#boton-aceptar{
  width: 100px;
  height: 33px;
  background-color: white;
  font: bold;
  margin: 0px;
}

#boton-aceptar:hover{
  background-color:gray;
  color: white;
  font: bold;
}

#boton-aceptar:active{
  background-color: rgb(48, 48, 48);
  font: bold;
}

</style>
