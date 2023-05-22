<template>
  <div class="v_card_item">

  </div>
</template>

<script>
export default {
    name: 'v-card-item',
    data() {
        return {
            title: 'hello!'
        }
    },
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
}
</style>