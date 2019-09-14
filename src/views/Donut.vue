<template>
    <vc-donut
            background="white" foreground="grey"
            :size="350" unit="px" :thickness="100"
            has-legend legend-placement="top"
            :sections="sections" :total="100"
            :start-angle="0"
            >
    </vc-donut>
</template>

<script>
    export default {
        name: "Donut",
        computed: {
            sections: function () {
                return [
                    { label: 'Неоплаченные договора', value: (this.$store.getters.unpaidContracts().length/this.$store.state.contracts.length) * 100, color: 'red' },
                    { label: 'Закрытые договора', value: (100-(this.$store.getters.unpaidContracts().length/this.$store.state.contracts.length) * 100), color: 'yellowgreen' }
                ]
            }
        },
    }
</script>

<style scoped>

</style>