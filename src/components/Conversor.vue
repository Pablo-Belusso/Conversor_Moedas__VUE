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
      let apiKey = 'c256d597d8msh32427e3259e9711p18002fjsnc980a9ea78a4I'; // Substitua pela sua chave de API da RapidAPI

      // Faça a solicitação à API de câmbio por meio do servidor de proxy da RapidAPI
      axios
        .get(`https://currency-exchange.p.rapidapi.com/exchange?q=1.0&from=${this.moedaA}&to=${this.moedaB}`, {
          headers: {
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
            'X-RapidAPI-Key': apiKey
          }
        })
        .then(response => {
          this.moedaB_value = (response.data * parseFloat(this.moedaA_value)).toFixed(2);
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