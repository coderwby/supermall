<template>
  <div id="detail">
    <detail-nav-bar @itemClick="navBarItemClick" ref="dNavBar"></detail-nav-bar>
    <scroll class="detail-scroll" @pullingUp="pullingUp" :pullUpLoad="true" ref="scroll" @scroll="detailScroll">
      <detail-swiper class="detail-swiper" :topImages="topImages" ref="dSwiper"></detail-swiper>
      <detail-base-message :goods="goods"></detail-base-message>
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
      <detail-goods-params :itemParams="itemParams" ref="dParams"></detail-goods-params>
      <detail-comment-info :rate="rate" ref="dComment"></detail-comment-info>
      <goods-list :goods="recommend" class="recommend" ref="dGoodsList"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top class="backtop" @click.native="backTop" v-show="isShowbt"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseMessage from "./childComps/DetailBaseMessage.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailGoodsParams from "./childComps/DetailGoodsParams.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import scroll from "../../components/common/scroll/scroll.vue";
import BackTop from "../../components/content/backTop/BackTop.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";
import {mapActions} from 'vuex';

import { getdetails, detailGoods, shopInfo, detailInfo,getRecommend } from "../../network/detail.js";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      itemParams: {},
      rate: {},
      recommend: [],
      isShowbt: false,
      offsetValue: {
        detailSwiper: null,
        detailParams: null,
        detailCommend: null,
        detailGoodsList: null
      }
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseMessage,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailGoodsParams,
    DetailCommentInfo,
    GoodsList,
    scroll,
    BackTop,
    DetailBottomBar
  },
  created() {
    this.iid = this.$route.query.iid;
    this.getdetails();
    this.getRecommend();
  },
  updated() {
    this.offsetValue.detailSwiper = this.$refs.dSwiper.$el.offsetTop
    this.offsetValue.detailParams = this.$refs.dParams.$el.offsetTop
    this.offsetValue.detailCommend = this.$refs.dComment.$el.offsetTop
    this.offsetValue.detailGoodsList = this.$refs.dGoodsList.$el.offsetTop
  },
  methods: {
    ...mapActions(['addCart']),
    getdetails() {
      getdetails(this.iid).then((res) => {
        const data = res.result;
        //1.取出顶部轮播图的数据
        this.topImages = data.itemInfo.topImages;
        //2.创建商品对象类
        this.goods = new detailGoods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        //3.取出店铺信息
        this.shopInfo = new shopInfo(data.shopInfo);
        //4.取出详情信息(图片)
        this.detailInfo = new detailInfo(data.detailInfo)
        //5.取出商品参数的信息
        this.itemParams = data.itemParams
        //6.取出评论的信息
        this.rate = data.rate
      });
    },
    getRecommend() {
      getRecommend().then(res => {
        this.recommend = res.data.list
      })
    },
    pullingUp() {
      this.$refs.scroll.finishPullup();
    },
    backTop() {
      this.$refs.scroll.scrollTo(0,0,500)
    },
    detailScroll(option) {
      this.isShowbt = option.y < -1000
      if((-option.y) >= this.offsetValue.detailSwiper) {
        this.$refs.dNavBar.currentIndex = 0
      }
      if((-option.y) >= this.offsetValue.detailParams) {
        this.$refs.dNavBar.currentIndex = 1
      }
      if((-option.y) >= this.offsetValue.detailCommend) {
        this.$refs.dNavBar.currentIndex = 2
      }
      if((-option.y) >= this.offsetValue.detailGoodsList) {
        this.$refs.dNavBar.currentIndex = 3
      }
    },
    navBarItemClick(index) {
      switch(index) {
        case 0: 
          this.$refs.scroll.scrollTo(0,-this.offsetValue.detailSwiper,500)
          break;
        case 1: 
          this.$refs.scroll.scrollTo(0,-this.offsetValue.detailParams,500)
          break;
        case 2: 
          this.$refs.scroll.scrollTo(0,-this.offsetValue.detailCommend,500)
          break;
        case 3: 
          this.$refs.scroll.scrollTo(0,-this.offsetValue.detailGoodsList,500)
          break;
      }
    },
    addToCart() {
      //1.获取购物车需要展示的信息
      let cartInfo= {}
      cartInfo.img = this.topImages[0]
      cartInfo.title = this.goods.title
      cartInfo.desc = this.goods.desc
      cartInfo.price = this.goods.realPrice
      cartInfo.iid = this.iid
      this.addCart(cartInfo).then(res => {
        this.$toast.show(res)
      })
      // this.$store.dispatch("addCart",cartInfo).then(res => {
      //   console.log(res)
      // })
    }
  }
};
</script>

<style scoped>
.detail-scroll {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
.recommend {
  padding-top: 10px;
}
.backtop {
  position: fixed;
  right: 10px;
  bottom: 58px;
}
</style>