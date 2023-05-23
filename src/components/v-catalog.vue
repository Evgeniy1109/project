<template>
  <h1>Hello in catalog</h1>
  <div class="v-catalog">
    <vCatalogItem v-for="product in PRODUCTS" :key="product.article" :product_data="product" @addToCard = "addToCard" />
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue'
import {mapActions, mapGetters} from 'vuex'
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
    ...mapGetters(['PRODUCTS']),
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

</style>