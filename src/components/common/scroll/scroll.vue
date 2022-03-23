<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    probeType: {
      typeof: Number,
      default: 0
    },
    pullUpLoad: {
      typeof: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      observeDOM: true,
      click: true,
      observeImage: true
    })
    //监听滚动
    this.scroll.on('scroll',(option) => {
      this.$emit('scroll',option)
    })
    //上拉加载更多
    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTo(x,y,time=300) {
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    finishPullup() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style scoped>
  .wrapper {
    overflow: hidden;
  }
</style>