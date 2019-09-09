<template>
    <div>
        <label>Номер договора</label>
        <input class="form-control" placeholder="" type="text" v-model="number">
        <br>
        <label>Дата договора</label>
        <input class="form-control" type="text" v-model="date">
        <br>
        <label>Тип договора</label>
        <select class="form-control mb-10" v-model="type_id">
            <option v-for="type in $store.state.types" v-bind:value="type.id">{{type.full_name}}</option>
        </select>
        <br>
        <label>Сумма договора</label>
        <input class="form-control" placeholder="" type="number" v-model="amount">
        <br>

        <button v-on:click="submitFormContractClicked" class="btn btn-danger">Сохранить</button>
        <button v-on:click="$emit('contract-form-canceled')" class="btn btn-primary">Отменить</button>

    </div>
</template>

<script>
    export default {
        name: "ContractsForm",
        props: ['id'],
        methods: {
            submitFormContractClicked: function () {
                this.$emit('contract-form-submited',{id: this.id, number: this.number, date: this.date, type_id: this.type_id, amount: this.amount})
            }
        }
    }
</script>

<style scoped>
    .btn {
        margin: 5px;
    }
</style>