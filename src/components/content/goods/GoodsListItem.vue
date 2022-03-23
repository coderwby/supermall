<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImg" alt=""/>
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">
        <img src="../../../assets/img/home/collect.svg">
        {{ goodsItem.cfav }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      typeof: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    itemClick() {
      this.$router.push({
        path: "/detail",
        query: {
          iid: this.goodsItem.iid
        }
      })
    }
  },
  computed: {
    showImg() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  }
};
</script>

<style scoped>
  .goods-item {
    width: 48%;
    padding-bottom: 40px;
    position: relative;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: #ff5777;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .collect img {
    margin-left: 10px;
    width: 12px;
    height: 12px;
    padding-top: 2px;
  }
</style>