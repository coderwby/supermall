<template>
  <div id="detail-shop-info">
    <div class="shop-logo-info">
      <div class="logo-img">
        <img :src="shopInfo && shopInfo.shopLogo" alt="" />
      </div>
      <div class="shop-name">
        <span>{{ shopInfo.name }}</span>
      </div>
    </div>
    <div class="shop-info-msg">
      <div class="total-sales">
        <div class="sales">
          <p>{{ shopInfo.sells | sellsFilter }}</p>
          <span>总销量</span>
        </div>
        <div class="shop-baby">
          <p>{{ shopInfo.goodsCount }}</p>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="evaluate">
        <tr class="evaluate-p" v-for="item in shopInfo.score">
          <td>
            <span>{{ item.name }}</span>
          </td>
          <td>
            <span class="better-score" :class="{blevel : item.isBetter}">{{item.score}}</span>
          </td>
          <td>
            <span class="better" :class="{level : item.isBetter}">{{item.isBetter ? "高" : "低"}}</span>
          </td>
        </tr>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="shop-btn" @click="shopBtnClick">
        进店逛逛
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      typeof: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    sellsFilter(value) {
      let result = value
      if(value > 10000) {
        result = (value/10000).toFixed(1) + "万"
      }
      return result
    }
  },
  methods: {
    shopBtnClick() {
      console.log('进店逛逛')
    }
  }
};
</script>

<style scoped>
.logo-img {
  display: inline-block;
  vertical-align: middle;
  padding: 30px 10px;
}
.logo-img img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #cacaca;
  padding: 3px;
}
.shop-name {
  display: inline-block;
}

.shop-info-msg {
  display: flex;
}
.total-sales {
  flex: 1;
  display: flex;
  text-align: center;
}
.total-sales div {
  flex: 1;
}
.total-sales p {
  margin-bottom: 15px;
  font-weight: bold;
  margin-top: 10px;
}
.total-sales span {
  font-size: 14px;
}
.shop-baby {
  border-right: 1px solid #cacaca;
}

.evaluate {
  flex: 1;
}

.better {
  background: green;
  color: white;
}
.level {
  background: red;
  color: white;
}
.better-score {
  color: green;
}
.blevel {
  color: red;
}
.evaluate-p {
  display: flex;
  width: 100%;
  font-size: 14px;
  padding-left: 10px;
}
.evaluate-p td{
  flex: 1;
  text-align: center;
  padding-top: 5px;
}

.shop-bottom {
  border-bottom: #cacaca 3px solid;
  padding-bottom: 20px;
  margin-top: 30px;
}
.shop-btn {
  width: 150px;
  margin: 0 auto;
  background: #f0efef;
  text-align: center;
  padding: 8px;
  border-radius: 7px;
}
</style>