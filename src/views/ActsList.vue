<template>
<div>
    <div class="added__btn">
        <router-link :to="{name: 'new-act'}">
            <button type="button" class="btn btn-danger">Добавить</button>
        </router-link>
    </div>
    <table class="table  table-hover general-table">
        <thead>
        <tr>
            <th>Дата</th>
            <th>Счет</th>
            <th>Сумма акта</th>
            <th>Статус</th>
            <th>Редактирование</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="act in $store.state.acts"><!-- подключаем отображение массива актов-->
            <td>{{act.date}}</td>
            <td>{{`${invoicesName(act.invoice_id)} от ${invoicesDate(act.invoice_id)}`}}</td>
            <td>{{act.sum}}</td>
            <td><span class="label label-info label-mini">{{statesStatus(act.state_id)}}</span></td>
            <td>
                <router-link to="#">
                    <button class="btn btn-default">Изменить</button>
                </router-link>
                <router-link to="#">
                    <button class="btn btn-primary">Удалить</button>
                </router-link>
            </td>
        </tr>
        </tbody>
    </table>
</div>
</template>

<script>
    export default {
        name: "ActsList",
        methods: {
            invoicesName: function (invoice_id) {
                var name = this.$store.state.invoices.find(function (el) {
                    return el.id === invoice_id;
                });
                if (name) {
                    return name.number
                } else {
                    return "'Номер счёта не выбран!'"
                }
            },
            invoicesDate: function (invoice_id) {
                var index = this.$store.state.invoices.find(function (el) {
                    return el.id === invoice_id;
                });
                if (index) {
                    return index.date
                } else {
                    return "'Дата счёта не указана!'"
                }
            },
            statesStatus: function (state_id) {
                var data = this.$store.state.states.find(function (el) {
                    return el.id === state_id;
                });
                if (data) {
                    return data.full_name
                } else {
                    return "'Статус акта не указан!'"
                }
            }
        }
    }

</script>

<style scoped>
    .added__btn {
        text-align: right;
    }
    .btn {
        margin: 5px;
    }
</style>