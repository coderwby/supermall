<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles">
      <span :class="{active: index === currentIndex}" @click="itemClick(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      typeof: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick",index)
    }
  }
}
</script>

<style>
  .tab-control {
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .tab-control div {
    flex: 1;
  }
  .tab-control span {
    font-size: 14px;
    padding: 5px;
  }
  .active {
    color: var(--color-high-text);
    border-bottom: 2px solid #ff5777;
  }
</style>