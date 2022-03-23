<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <tab-control class="tabControl" :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl1" v-show="istabfixed"/>
    <scorll class="wrap" ref="scroll" :probeType="3" @scroll="scrollOn" :pullUpLoad="true" @pullingUp="pullingUp">
      <home-swiper :banners="banners" />
      <recommend-view :recommend="recommend" />
      <feature-view />
      <tab-control
        class="tabControl"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goods="goods[currentType].list" />
    </scorll>
    <back-top class="backtop" @click.native="backTopClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import NavBar from "../../components/common/navbar/NavBar.vue";
import TabControl from "../../components/content/tabControl/TabControl.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import scorll from "../../components/common/scroll/scroll.vue";
import BackTop from "../../components/content/backTop/BackTop.vue";

import { getHomeMultidata, getGoods } from "../../network/home";

export default {
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    scorll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      istabfixed: false,
      saveY: 0
    };
  },
  created() {
    this.getHomeMultidata();
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
  },
  updated() {
    //this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    //console.log(this.$refs.tabControl.$el);
    this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.saveY,0)
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y
  },
  methods: {
    //网络请求的一些方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getGoods(type) {
      let page = this.goods[type].page;
      getGoods(type, page + 1).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
    //tabcontrol点击方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    //点击返回顶部
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    //监听滚动
    scrollOn(option) {
      //是否显示按钮
      this.isShowBackTop = option.y < -1000;
      //是否tabcontroll吸顶
      this.istabfixed = -option.y > this.tabOffsetTop;
    },
    //上拉加载更多
    pullingUp() {
      this.getGoods(this.currentType);
      this.$refs.scroll.finishPullup();
      //this.$refs.scroll.refresh()
    },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  padding-bottom: 49px;
}
.home-nav {
  background: #ff5777;
  color: white;

  /* position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9; */
}
.tabControl {
  position: sticky;
  top: 44px;
  background: white;
  z-index: 9;
}
.wrap {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
.backtop {
  position: fixed;
  right: 10px;
  bottom: 58px;
}
</style>