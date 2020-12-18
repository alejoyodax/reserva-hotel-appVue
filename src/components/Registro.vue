<template>
  <div class="main-component">
    <h2>Registrarse</h2>

    <form>
      <label for="cedula">Nombre:</label>
      <input type="text" id="cedula" />

      <label for="contraseña">Contraseña:</label>
      <input type="text" id="contraseña" />

      <label for="email">Email:</label>
      <input type="text" id="email" />

      <label for="celular">Celular:</label>
      <input type="text" id="celular" />

      <label for="nombres">Nombres:</label>
      <input type="text" id="nombres" />

      <label for="apellidos">apellidos:</label>
      <input type="text" id="apellidos" />

      <input type="submit" value="Registrar" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Registro",
  data: function () {
    return {};
  },

  created: function () {},
};
</script>

<style scoped>
  body{
    margin: 0 0 0 0;
  }
.header{
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #283747 ;
  color:#E5E7E9 ;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header h1{
  width: 20%;
  text-align: center;
}


.main-component{
  height: 75vh;
  margin: 0%;
  padding: 0%;
  background: #FDFEFE ;
}

.main-component h2{
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}

form{
  width: 25%;
  border: 1px solid #ccc;
  margin: 30px;
  padding-top: 5px;
  padding-right: 30px;
  padding-bottom: 5px;
  padding-left: 180px; 
  margin-left: auto;
  margin-right: auto;
  
}


label{
  front-size:8  0px;
  display:block;
  width:20%
  
}

input, textarea {

  margin-bottom:20px;
  width:50%;
  padding:4px;
  -webkit-box-sizing:border-box;
  -moz-box-sizing:border-box;
  -box-sizing:border-box;
  
}





.footer{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #283747;
  color: #E5E7E9;
} 
.footer h2{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
} 

</style>