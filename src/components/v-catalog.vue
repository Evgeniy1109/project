<template>
  <h1>Учебные программы</h1>

  <router-link :to="{name: 'card'}">
    <div class="v-catalog_link">Корзина: {{ CARD.length }}</div>
    </router-link>



  <div class="v-catalog">
    <vCatalogItem v-for="product in PRODUCTS" :key="product.article" :product_data="product" @addToCard = "addToCard" />
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'v-catalog',
  components: {
      vCatalogItem
    },
    data() {
        return {

        }
  },
  computed: {
    ...mapGetters(['PRODUCTS', 'CARD']),
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CARD' ]),
        addToCard(data) {
          this.ADD_TO_CARD(data);
    },
  },
      mounted() {
        this.GET_PRODUCTS_FROM_API().then((response) => {
          if (response.data) {
            console.log('Данные пришли');
          }
        });
  },
}
</script>

<style>
.v-catalog{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}
.v-catalog_link{
  font-size: 26px;
  font-weight: 700;
  color: #000;
  position: absolute;
  top: 25px;
  right: 30px;
}

</style>