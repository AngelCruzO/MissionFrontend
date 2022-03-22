<!--se introduce HTMl mas robusto-->
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Bienvenidos a Vue, explorers"/> <!--impotacion de un componente-->
</template>

<!--Javascript y Vue-->
<script>
import HelloWorld from './components/HelloWorld.vue' //componente de vue importado

//Que es lo que se visualiza en el navegador
export default {
  name: 'App', //nombre de la exportación
  components: { //componentes a exportar
    HelloWorld
  }
}
</script>

<!--Estilos css global-->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
