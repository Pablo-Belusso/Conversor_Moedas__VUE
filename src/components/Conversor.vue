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

            converter(){
                let de_para = this.moedaA + "_" + this.moedaB;

                let url = "https://api.apilayer.com/exchangerates_data/latest";
            
                fetch (url, {
                    headers: {
                        // Substitua 'YOUR_API_KEY' pela sua chave de API
                        'Api-Key': 'd468e25f57a2ef2a05d27ee3919375c9'
                    }
                }) 
            
                    .then((res) => res.json())

                    .then((json)=>{
                                console.log(json);
                                let cotacao = json[de_para].val;
                                this.moedaB_value = (cotacao * parseFloat(this.moedaA_value)).toFixed(2);
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