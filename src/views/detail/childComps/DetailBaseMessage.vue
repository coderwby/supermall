<template>
  <div v-if="Object.keys(goods).length !== 0">
    <div class="base-title">
      {{goods.title}}
    </div>
    <div class="base-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="base-other">
      <span class="other-left">{{goods.columns[0]}}</span>
      <span class="other-center">{{goods.columns[1]}}</span>
      <span class="other-right">{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="base-service">
      <span class="base-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      typeof: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
  .base-title {
    font-size: 14px;
    padding: 5px;
    padding-top: 10px;
  }

  .base-price {
    padding: 5px;
    position: relative;
    padding-bottom: 10px;
  }
  .n-price {
    font-size: 20px;
    color: var(--color-high-text);
  }
  .o-price {
    font-size: 10px;
    margin-left: 7px;
    text-decoration:line-through;
    color: #bbbaba;
  }
  .discount {
    background: var(--color-high-text);
    color: white;
    border-radius: 7px;
    padding: 2px;
    padding-top: 4px;
    font-size: 12px;
    margin-left: 3px;
    position: absolute;
  }

  .base-other {
    display: flex;
    font-size: 13px;
    
  }
  .base-other span {
    flex: 1;
    color: #929292;
    border-bottom: 2px solid #e9e9e9;
    padding-bottom: 10px;
  }
  .other-right {
    text-align: right;
    margin-right: 7px;
  }
  .other-center {
    text-align: center;
  }
  .other-left {
    margin-left: 7px;
  }

  .base-service {
    font-size: 12px;
    display: flex;
    margin-top: 5px;
    padding-left: 1;
    padding-right: 1;
    height: 40px;
    line-height: 40px;
    padding-bottom: 45px;
    border-bottom: 3px solid #d8d8d8;
  }
  .base-service-item {
    flex: 1;
    text-align: center;
  }
  .base-service-item img {
    width: 12px;
    height: 12px;
  }
  .base-service-item:first-child {
    text-align: left;
    margin-left: 5px;
  }
  .base-service-item:last-child {
    text-align: right;
    margin-right: 5px;
  }
</style>