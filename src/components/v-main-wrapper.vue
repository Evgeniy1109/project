<template>
    <div class="v-main-wrapper">
        <router-view></router-view>


        <!-- <vCatalog/>
        <vCard
        v-if="CARD.length"
        :card_data="CARD"
        /> -->
    </div>
</template>

<script>
// import vCatalog from './v-catalog.vue'
// import vCard from './v-card.vue'
import { mapGetters } from 'vuex';
export default {
    name: 'v-main-wrapper',
    // components: {
    //     vCatalog,
    //     vCard
    // },
    props: {},
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(['CARD']),
    },
    methods: {},
    watch: {},
    // mounted: (){

    // },
};
</script>

<style>
.v-main-wrapper{
    max-width: 900px;
    margin: 0 auto;
}
</style>