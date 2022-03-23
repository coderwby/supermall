<template>
  <div class="bottom-car">
    <div class="check-button" @click="allChecked">
      <div>
        <img src="../../../assets/img/common/checked.svg" alt="" v-if="isALlchecked" />
        <img src="../../../assets/img/common/unchecked.svg" alt="" v-else />
      </div>
      <div class="text">
        全选
      </div>
    </div>
    <div class="totalPrice">
      合计: {{totalPrice}}
    </div>
    <div class="pay" @click="toPay">
      去结算({{checkedLength}})
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      isALlchecked: false
    }
  },
  updated() {
    if(this.checkedLength === this.cartList.length) {
      this.isALlchecked = true
    }else {
      this.isALlchecked = false
    }
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return '￥' + this.cartList.filter(item => {
        return item.checked
      }).reduce((total,n) => {
        return total + n.price * n.count
      },0).toFixed(2) + '元'
    },
    checkedLength() {
      return this.cartList.filter(item => {
        return item.checked
      }).length
    }
  },
  methods: {
    allChecked() {
      this.isALlchecked = !this.isALlchecked
      if(this.isALlchecked === true) {
        for(let item of this.cartList) {
          item.checked = true
        }
      }else {
        for(let item of this.cartList) {
          item.checked = false
        }
      }
    },
    toPay() {
      if(this.checkedLength === 0) {
        this.$toast.show('请选择需要购买的商品！')
      }
    }
  }
};
</script>

<style scoped>
.bottom-car {
  background: #eee;
  height: 40px;
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  display: flex;
  font-size: 14px;
}
.check-button {
  padding-left: 5px;
  display: flex;
  width: 80px;
  height: 40px;
  align-items: center;
  /* justify-content: center; */
}
.check-button div {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.check-button div:last-child {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.check-button img {
  width: 100%;
  height: 100%;
}
.totalPrice {
  height: 40px;
  line-height: 40px;
  flex: 1;
  text-align: center;
}
.pay {
  width: 100px;
  height: 40px;
  line-height: 40px;
  background: #ff5777;
  text-align: center;
  color: #fff;
}
</style>