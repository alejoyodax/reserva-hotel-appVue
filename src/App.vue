<template>
  <div id="app">
    <div class="header">
      <h1>Sistemas Reservaciones Online</h1>
    </div>
    <div class="main-component">
      <router-view></router-view>
    </div>
    <div class="footer">
      <h2>MinTic - Ciclo III - 2020</h2>
    </div>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Panel_cliente_inicio from "./components/Panel_cliente_inicio";
import axios from "axios";
export default {
  name: "App",
  components: {
    Home,
    Panel_cliente_inicio,
  },

  data: function () {
    return {
      mesg: "Algo",
    };
  },

  methods: {
    init: function () {
      this.$router.push(name="login");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

#app {
  font-family: roboto;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0 0 0 0;
  background-color: rgb(56, 112, 97);
}

.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;

  background-color: rgb(35, 38, 44);
  color: #e5e7e9;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header h1 {
  width: 100%;
  text-align: center;
  font: bold;
  font-family: "Roboto", sans-serif;
  color: white;
}

.footer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: rgb(35, 38, 44);
  color: #e5e7e9;
}
.footer h2 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
