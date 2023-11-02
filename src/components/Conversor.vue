<template>
    <!-- eslint-disable --> 
    <div class="conversor">
        <h2> {{ moedaA }} Para {{ moedaB }}</h2>
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
                
                // Verifique se this.moedaA_value é um número válido
                const moedaA_value = parseFloat(this.moedaA_value);
                
                if (isNaN(moedaA_value)) {
                    // Mostra uma mensagem de erro ou lida com o valor inválido
                    console.error("O valor inserido não é válido.");
                } else {
                    let url = "http://api.exchangeratesapi.io/v1/latest?access_key=d468e25f57a2ef2a05d27ee3919375c9";

                    fetch(url)
                    .then((res) => res.json())
                    .then((json) => {
                        console.log(json);
                        let cotacao = json.rates[de_para];
                        this.moedaB_value = (cotacao * moedaA_value).toFixed(2);
                    })
                    .catch((error) => {
                        console.error("Erro ao buscar taxas de câmbio: ", error);
                    });
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