<template>
  <div class="bottom-bar">
    <div class="left">
      <div class="service">
        <img src="../../../assets/img/detail/service.svg" alt="">
        <div class="item-text">客服</div>
      </div>
      <div class="shop">
        <img src="../../../assets/img/detail/shop.svg" alt="">
        <div class="item-text">店铺</div>
      </div>
      <div class="collect">
        <img src="../../../assets/img/detail/collect.svg" alt="">
        <div class="item-text">收藏</div>
      </div>
    </div>
    <div class="right">
      <div class="add" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .bottom-bar>div {
    flex: 1;
    display: flex;
    text-align: center;
  }
  .left {
    font-size: 14px;
  }
  .bottom-bar>div>div {
    flex: 1;
    
  }
  .bottom-bar img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
  }
  .item-text {
    margin-bottom: 3px;
  }

  .right {
    display: flex;
    text-align: center;
    line-height: 49px;
  }
  .right>div {
    flex: 1;
  }
  .add {
    background: yellow;
  }
  .buy {
    background: #ff5777;
    color: #fff;
  }
</style>