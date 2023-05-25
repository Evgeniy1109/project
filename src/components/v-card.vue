<template>
    <div class="v-card">

        <router-link :to="{ name: 'catalog' }">

        <div class="v-catalog_link">Корзина: {{ CARD.length }}</div>
        <button class="v-catalog_link_btn">Вернуться в каталог</button>
        </router-link>
        <h2 class="v-catalog_link_subtitle">Корзина</h2>
        <h2 class="v-catalog_link_subtitle">Сумма отложенных программ: {{ SUM }}</h2>
        <vCardItem
        v-for="(item, index) in CARD" :key="item.article" :card_item_data="item"
        @deleteFromCard="deleteFromCard(index)"
        />
    </div>
</template>

<script>
import vCardItem from './v-card-item.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'v-card',
    components: {
        vCardItem
    },
    props: {
        card_data: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    data() {
        return {};
    },
    computed: {
        ...mapGetters(['CARD', 'SUM']),
    },
    methods: {
        ...mapActions(['DELETE_FROM_CARD']),
        deleteFromCard(index) {
            this.DELETE_FROM_CARD(index);
        }
    }
}
</script>

<style scoped>
.v-card{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: grey;
    font-size: 20px;
    margin-bottom: 20px;
}
.v-catalog_link_btn{
    font-size: 26px;
    font-weight: 700;
    color: #000;
    padding: 8px 15px;
    border-radius: 15px;
    background-color: rgba(225, 228, 228, 0.739);
    cursor: pointer;
}
.v-catalog_link_subtitle{
     font-size: 26px;
    font-weight: 700;
    color: #000;
}
</style>