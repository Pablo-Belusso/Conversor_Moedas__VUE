<template>
    <div class="conversor">
      <h2>{{ moedaA }} Para {{ moedaB }}</h2>
      <input type="text" v-model="moedaA_value" v-bind:placeholder="moedaA">
      <input type="button" value="Converter" v-on:click="converter">
      <h2>{{ moedaB_value }}</h2>
    </div>
  </template>

<script>
/* eslint-disable */
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

                let url = "http://localhost:3000/api/exchangerates_data/latest";

                fetch(url, {
                    headers: {
                    'Api-Key': 'd468e25f57a2ef2a05d27ee3919375c9' // Substitua com sua chave de API da ExchangeRate-API
                    }
                })

                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    let cotacao = data.rates[de_para];
                    if (cotacao !== undefined) {
                    this.moedaB_value = (cotacao * parseFloat(this.moedaA_value)).toFixed(2);
                    } else {
                    console.error("Taxa de câmbio não encontrada para a conversão especificada.");
                    }
                })
                .catch((error) => {
                    console.error("Erro ao buscar taxas de câmbio: ", error);
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