<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__image" :src="require('../assets/images/'+ product_data.image)" alt="">
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">{{ product_data.price }}</p>
    <p class="v-catalog-item__price">{{ product_data.about }}</p>
    <p class="v-catalog-item__price">{{ product_data.category }}</p>
    <button class="v-catalog-item__add_to_card_btn" @:click="sendDataToPerant">Add to cart</button>
  </div>
</template>



<script>
export default {
  name: 'v-catalog-item',
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {}
  },
  methods: {
    sendDataToPerant() {
      this.$emit('sendDataToPerant', this.product_data.article);
    },
  },
}

</script>

<style>
.v-catalog-item{
    flex-basis: 25%;
    box-shadow: 0 0 8px grey;
    padding: 20px;
    
    margin: 20px;
}


.v-catalog-item__image{
  max-width: 100px;
}

</style>