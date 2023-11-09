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
    async converter() {
      

      const options = {
        method: 'GET',
        url: `https://exchange-rate-api1.p.rapidapi.com/convert`,

        params: {
          base: 'USD',
          target: 'JPY'
        },

        headers: {
          'X-RapidAPI-Key': 'c256d597d8msh32427e3259e9711p18002fjsnc980a9ea78a4', // Substitua pela sua chave de API da RapidAPI
          'X-RapidAPI-Host': 'exchange-rate-api1.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        this.moedaB_value = (response.data.valor * parseFloat(this.moedaA_value)).toFixed(2);
      } catch (error) {
        console.error(error);
      }
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