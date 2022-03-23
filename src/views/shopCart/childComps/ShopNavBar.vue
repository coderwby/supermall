<template>
  <nav-bar class="shop-nav-bar">
    <div slot="center">
      购物车({{cartLength}})
    </div>
  </nav-bar>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    NavBar
  },
  computed: {
    ...mapGetters(['cartLength'])
  }
}
</script>

<style scoped>
  .shop-nav-bar {
    background: #ff5777;
    color: #fff;
  }
</style>