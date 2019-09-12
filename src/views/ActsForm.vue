<template>
    <div>
        <label>Дата акта</label>
        <input class="form-control" placeholder="" type="text" v-model="date">
        <br>
        <label>Выберите счет</label>
        <select class="form-control mb-10" v-model="invoice_id">
            <option v-for="invoice in $store.state.invoices" v-bind:value="invoice.id">{{`Счёт ${invoice.number} от ${invoice.date}`}}</option>
        </select>
        <br>
        <label>Сумма акта</label>
        <input class="form-control" placeholder="" type="text" v-model="sum">
        <br>
        <label>Статус оплаты</label>
        <select class="form-control mb-10" v-model="state_id">
            <option v-for="state in $store.state.states" v-bind:value="state.id">{{state.full_name}}</option>
        </select>
        <br>

        <button v-on:click="submitFormActClicked" class="btn btn-danger">Сохранить</button>
        <button v-on:click="$emit('act-form-canceled')" class="btn btn-primary">Отменить</button>

    </div>
</template>

<script>
    export default {
        name: "ActsForm",
        props: ['id'],
        data: function (){
            return {
                date: null,
                sum: null,
                number: null,
                state_id: null,
                invoice_id: null
            }
        },
        created: function () {
            this.fillForm()
        },
        watch: {
            id: function () {
                this.fillForm()
            }
        },
        methods: {
            submitFormActClicked: function () {
                this.$emit('act-form-submited',{id: this.id, date: this.date, sum: this.sum, number: this.number, state_id: this.state_id, invoice_id: this.invoice_id})
            },
            fillForm: function () {
                var act = this.$store.getters.act(this.id);
                if (act) {
                    this.date = act.date;
                    this.sum = act.sum;
                    this.state_id = act.state_id;
                    this.invoice_id = act.invoice_id;
                }
            },
        }
    }
</script>

<style scoped>
    .btn {
        margin: 5px;
    }
</style>