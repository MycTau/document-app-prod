<template>
<div>
    <div class="added__btn">
        <router-link :to="{name:'new-invoice'}">
            <button type="button" class="btn btn-danger">Добавить</button>
        </router-link>
    </div>
    <table class="table  table-hover general-table">
        <thead>
        <tr>
            <th>Дата</th>
            <th>Сумма счета</th>
            <th>Договор</th>
            <th>Статус оплаты</th>
            <th>Редактирование</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="invoice in $store.state.invoices"><!-- подключаем отображение массива счетов-->
            <td>{{invoice.date}}</td>
            <td>{{invoice.sum}}</td>
            <td>{{`№ ${invoiceContractName(invoice.contract_id)} от ${invoiceContractDate(invoice.contract_id)} `}}</td>
            <td><span class="label label-info label-mini">{{invoiceStatusName(invoice.status_id)}}</span></td>
            <td>
                <router-link :to="{name: 'edit-invoice', params: {id:invoice.id}}">
                    <button class="btn btn-default">Изменить</button>
                </router-link>
                <router-link :to="{name: 'delete-invoice', params: {id:invoice.id}}">
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
        name: "InvoicesList",
        methods: {
            invoiceContractName: function (contract_id) {
                var name = this.$store.state.contracts.find(function (el) {
                    return el.id === contract_id;
                });
                if (name) {
                    return name.number
                } else {
                    return "'Договор не выбран!'"
                }
            },
            invoiceContractDate: function (contract_id) {
                var index = this.$store.state.contracts.find(function (el) {
                    return el.id === contract_id;
                });
                if (index) {
                    return index.date
                } else {
                    return "'Дата договора не указана!'"
                }
            },
            invoiceStatusName: function (status_id) {
                var data = this.$store.state.statuses.find(function (el) {
                    return el.id === status_id;
                });
                if (data) {
                    return data.full_name
                } else {
                    return 'Статус оплаты не выбран!'
                }
            },
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