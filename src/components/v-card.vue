<template>
    <div class="v-card">
        <router-link :to="{ name: 'catalog' }">
        <div class="v-catalog_link">Корзина: {{ CARD.length }}</div>
        <button>В каталог</button>
        </router-link>
        <h2>Корзина</h2>
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
        ...mapGetters(['CARD']),
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
</style>