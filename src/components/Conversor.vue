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

                let url = "https://free.currencyconverterapi.com/api/v5/convert?q="
                 + de_para
                 + "L&company=y";
            
            fetch (url).then(res=>{return res.json})
                       .then(json=>{
                            console.log(json);
                            let cotacao = json[de_para].val;
                            this.moedaB_value = (cotacao * parseFloat(this.moedaA_value)).toFixed(2);
                       })
            }
        }
    };
    
</script>


<style scoped>

</style>