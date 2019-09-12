<template>
    <aside id="aside" class="ui-aside">
        <ul class="nav" ui-nav>
            <li>
                <router-link to="/contracts"><i class="fa fa-file-text-o"></i><span>Договоры</span></router-link>
            </li>
            <li>
                <router-link to="/invoices" href="font-awesome.html"><i class="fa fa-font-awesome"></i><span>Счета</span></router-link>
            </li>
            <li>
                <router-link to="/acts" href=""><i class="fa fa-bookmark-o"></i><span>Акты</span></router-link>
            </li>
            <li>
                <router-link to="/" href=""><i class="fa fa-bar-chart-o"></i><span>Статистика</span></router-link>
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style scoped>

</style>