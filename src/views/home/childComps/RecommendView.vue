<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recommendItem">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>  
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      typeof: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .recommend {
    display: flex;
    border-bottom: 10px #eee solid;
    padding: 10px 0 20px 0;
  }
  .recommendItem {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  .recommendItem img {
    width: 70px;
    height: 70px;
    margin-bottom: 8px;
  }
</style>