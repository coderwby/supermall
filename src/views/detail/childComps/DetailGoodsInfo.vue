<template>
  <div class="DetailGoodsInfo" v-if="Object.keys(detailInfo).length !== 0">
    <div class="first-line">
      <div><span></span></div>
      <div></div>
      <div></div>
    </div>
    <div class="goods-desc">{{ detailInfo.desc }}</div>
    <div class="last-line">
      <div></div>
      <div></div>
      <div><span></span></div>
    </div>
    <div></div>
    <div v-for="(item,index) in detailInfo.detailImage" :key="index">
      <p class="info-message" v-show="item.list">{{item.key}}</p>
      <div class="info-images" v-for="(itemImg,index) in item.list">
        <img :src="itemImg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      typeof: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      
    }
  }
};
</script>

<style scoped>
.first-line {
  margin-top: 30px;
  padding-left: 15px;
  display: flex;
}
.first-line div {
  flex: 1;
}
.first-line div:first-child {
  border-bottom: 1px solid black;
}
.first-line span {
  width: 4px;
  height: 4px;
  background: black;
  display: inline-block;
  margin-bottom: -9px;
}

.last-line {
  margin-top: 10px;
  display: flex;
  padding-right: 15px;
}
.last-line div {
  flex: 1;
}
.last-line div:last-child {
  border-bottom: 1px solid black;
  text-align: right;
}
.last-line div:last-child span {
  width: 4px;
  height: 4px;
  background: black;
  display: inline-block;
  margin-bottom: -5px;
}
.goods-desc {
  font-size: 14px;
  padding: 10px 20px;
  margin-top: 30px;
}

.info-message {
  padding: 20px 10px 10px 10px;
  font-size: 15px;
  font-family:"Microsoft YaHei";
}
.info-images>img{
  width: 100%;
  height: auto;
}
</style>