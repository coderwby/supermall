<template>
  <div id="shopCart">
    <shop-nav-bar></shop-nav-bar>
    <scroll class="shop-cart-scroll" :pullUpLoad="true" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <shop-cart-bottom-bar></shop-cart-bottom-bar>
  </div>
</template>

<script>
import ShopNavBar from './childComps/ShopNavBar.vue'
import CartList from './childComps/CartList.vue'
import shopCartBottomBar from './childComps/ShopCartBottomBar.vue'
import scroll from '../../components/common/scroll/scroll.vue'

export default {
  components: {
    ShopNavBar,
    CartList,
    shopCartBottomBar,
    scroll
  },
  activated() {
    this.$refs.scroll.scroll.refresh()
  }
}
</script>

<style scoped>
  .shop-cart-scroll {
    position: fixed;
    top: 44px;
    bottom: 89px;
    left: 0;
    right: 0;
  }
</style>