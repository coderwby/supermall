<template>
  <div class="cart-list">
    <div class="item-info" v-for="(item,index) in cartList" :key="index">
      <div class="check-button">
        <div @click="checkClick(index)">
          <img src="../../../assets/img/common/checked.svg" alt="" v-if="item.checked">
          <img src="../../../assets/img/common/unchecked.svg" alt="" v-else>
        </div>
      </div>
      <div class="shop-img">
        <img :src="item.img" alt="">
      </div>
      <div class="shop-message">
        <div class="title">{{item.title}}</div>
        <div class="desc">{{item.desc}}</div>
        <div class="price-count">
          <div class="price">￥{{item.price}}</div>
          <div class="count">x {{item.count}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["cartList"]),
  },
  methods: {
    checkClick(index) {
      this.$store.commit('checked',index)
    }
  }
};
</script>

<style scoped>
.checked {
  border: none;
}
.item-info {
  display: flex;
  padding: 10px 10px 10px 0px;
  border-bottom: 1px solid #ccc;
}

.check-button {
  padding-right: 3px;
  padding-left: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.check-button div{
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.check-button img {
  width: 100%;
  height: 100%;
}

.shop-img img {
  width: 80px;
  height: auto;
  border-radius: 5px;
}

.title,
.desc {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.title {
  margin-top: 2px;
}
.desc {
  margin-top: 25px;
  font-size: 14px;
}

.price-count {
  display: flex;
  position: absolute;
  bottom: 2px;
  left: 5px;
  right: 10px;
}
.price-count div {
  flex: 1;
}
.price {
  text-align: left;
  color: #ff5777;
}
.count {
  text-align: right;
}

.shop-message {
  position: relative;
  padding-left: 5px;
}
</style>