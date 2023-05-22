<template>
    <div class="v-main-wrapper">
        <vCatalog/>
        <vCard/>
    </div>
</template>

<script>
import vCatalog from './v-catalog.vue'
import vCard from './v-card.vue'
export default {
    name: 'v-main-wrapper',
    components: {
        vCatalog,
        vCard
    },
    props: {},
    data() {
        return {
            title: 'Hello word'
        }
    },
    computed: {},
    methods: {},
    watch: {},
    // mounted: (){

    // },
};
</script>

<style>
.v-main-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
}
</style>