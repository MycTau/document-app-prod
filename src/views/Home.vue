<template>
    <div class="home">
        <Donut/>
        <br>
        <h3>Количество не закрытых договоров: {{$store.getters.unpaidContracts().length}} - ( {{(($store.getters.unpaidContracts().length/$store.state.contracts.length)*100).toFixed()}}% )</h3>
        <h3>Всего договоров в базе: {{$store.state.contracts.length}}</h3>
    </div>
</template>

<script>

import Donut from "./Donut";

export default {
  name: 'Home',
  components: {Donut}
}
</script>

<style scoped>
    .home {
        text-align: center;
    }
</style>