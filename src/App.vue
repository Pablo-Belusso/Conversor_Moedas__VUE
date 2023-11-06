<template>
  <!-- eslint-disable vue/multi-word-component-names -->
  <div id="app">

      <div class="linha">
        <Conversor moeda-a="USD" moeda-b="BRL"/>
        <Conversor moeda-a="BRL" moeda-b="USD"/>
      </div>

      <div class="linha">
        <Conversor moeda-a="CAD" moeda-b="BRL"/>
        <Conversor moeda-a="BRL" moeda-b="CAD"/>
      </div>

      <div class="linha">
        <Conversor moeda-a="EUR" moeda-b="BRL"/>
        <Conversor moeda-a="BRL" moeda-b="EUR"/>
      </div>

  </div>
  <!-- eslint-enable vue/multi-word-component-names -->
</template>

<script>

  import Conversor from "./components/Conversor.vue";

  export default {
    name: 'App',
    components: {
      Conversor
    }
  }
</script>

<style>
#app {
  max-width: 900px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.linha{
  display: flex;
  justify-content: space-between;
}
</style>
