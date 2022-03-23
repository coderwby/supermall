<template>
  <div class="goods">
    <goods-list-item :goodsItem="item" v-for="(item,index) in goods" :key="index"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      typeof: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>