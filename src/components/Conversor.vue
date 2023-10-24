<template>
 
    <div class="conversor">
        <h2> {{ moedaA }} Para {{ moedaB }}</h2>
        <input type="text" v-bind:placeholder="moedaA">
        <input type="button" value="Converter">
        <h2></h2>
    </div>

</template>

<script>
/* eslint-disable */
    export default {
        name: 'Conversor',
        props: ["moedaA", "moedaB"]
    }

</script>


<style scoped>

</style>