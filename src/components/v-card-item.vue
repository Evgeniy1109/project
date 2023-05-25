<template>
  <div class="v_card_item">
    <img class="v-card-item__image" :src="require('../assets/images/' + card_item_data.image)" alt="">
  <div>
    <p>{{card_item_data.name}}</p>
    <p>{{ card_item_data.price }} &#8381;</p>
    <p>{{ card_item_data.article }}</p>
    <p>{{ card_item_data.about }}</p>
  </div>
  <div class="v_card_item__count">
    <p>Количество</p>
    <div class="v_card_item_counter">
    <button class="v_card_item_counter_btn">+</button>
    <p class="v_card_item_counter_num">{{ card_item_data.quantity }}</p>
    <button class="v_card_item_counter_btn">-</button>
    </div>
  </div>
  <button class="v_card_item_btn" @click="deleteFromCard">Удалить</button>
  </div>
</template>

<script>
export default {
    name: 'v-card-item',
    props: {
        card_item_data: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {

        }
    },
    methods: {
        deleteFromCard(){
        this.$emit('deleteFromCard')
        }
    }
}
</script>

<style>
.v_card_item{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  flex-basis: 25%;
  box-shadow: 0 0 8px grey;
  padding: 20px;
  margin: 20px;
  border-radius: 15px;
  background-color: rgba(225, 228, 228, 0.739);
}
.v_card_item_btn{
  padding: 7px 25px;
  border-radius: 15px;
  border: 2px solid gray;
  cursor: pointer;
}
.v_card_item_btn:hover{
   box-shadow: 5px 5px 5px 2px rgb(208, 152, 152);
}
.v_card_item_counter{
  display: flex;
  justify-content: center;
  align-items: center;
}
.v_card_item_counter_btn{
  width: 25px;
  height: 25px;
  cursor: pointer;
}
.v_card_item_counter_num{
  margin: 0 10px 0 10px;
}
</style>