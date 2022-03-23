<template>
  <div id="app">
    <main-tab-bar v-show="this.$route.meta.show"/>
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <!-- <router-view/> -->
  </div>
</template>

<script>
  import MainTabBar from './components/content/mainTabbar/MainTabBar.vue'
  export default {
    name: 'app',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import './assets/css/base.css';
</style>