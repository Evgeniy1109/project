<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__image" :src="require('../assets/images/'+ product_data.image)" alt="">
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">{{ product_data.price }}</p>
    <p class="v-catalog-item__about">{{ product_data.about }}</p>
    <p class="v-catalog-item__category">{{ product_data.category }}</p>
    <button class="v-catalog-item__add_to_card_btn" @:click="addToCard">Add to cart</button>
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
    addToCard() {
      this.$emit("addToCard", this.product_data);
    },
  },
}

</script>

<style>
.v-catalog-item{
    flex-basis: 40%;
    box-shadow: 0 0 8px grey;
    padding: 20px;
    margin: 20px;
    border-radius: 25px;
    background-color: rgba(225, 228, 228, 0.739);
}


.v-catalog-item__image{
  max-width: 200px;
}
.v-catalog-item__name, .v-catalog-item__price{
  font-size: 16px;
  font-weight: 700;
}
.v-catalog-item__add_to_card_btn{
  padding: 7px 25px;
  border-radius: 15px;
  border: 2px solid gray;
  cursor: pointer;
}
.v-catalog-item__add_to_card_btn:hover{
  box-shadow: 5px 5px 5px 2px rgb(208, 152, 152);
}

</style>