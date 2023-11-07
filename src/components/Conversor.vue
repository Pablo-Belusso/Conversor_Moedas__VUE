<template>
    <div class="conversor">
      <h2>{{ moedaA }} Para {{ moedaB }}</h2>
      <input type="text" v-model="moedaA_value" v-bind:placeholder="moedaA">
      <input type="button" value="Converter" @click="converter">
      <h2>{{ moedaB_value }}</h2>
    </div>
  </template>

<script>
/* eslint-disable */
import axios from 'axios';

export default {
  name: 'Conversor',
  props: ["moedaA", "moedaB"],
  data() {
    return {
      moedaA_value: "",
      moedaB_value: 0
    };
  },
  methods: {
    converter() {
      let de_para = this.moedaA + "_" + this.moedaB;
      

      // Faça a solicitação à API do Open Exchange Rates por meio do servidor de proxy
      axios
        .get(`http://localhost:8081/https://open.er-api.com/v6/latest/${de_para}.json?app_id=e984274a5030437189708b5d26ecf3cc`)
        .then(response => {
          const data = response.data;
          const rate = data.rates[this.moedaB];
          this.moedaB_value = (rate * parseFloat(this.moedaA_value)).toFixed(2);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>


<style scoped>
    .conversor{
        padding: 20px;
        max-width: 300px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }

</style>