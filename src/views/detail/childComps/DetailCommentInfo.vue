<template>
  <div class="comment-info" v-if="rate && rate.list">
    <div class="user-comment">
      <div class="">用户评价</div>
      <div><span>更多</span></div>
    </div>
    <div class="user-info">
      <div class="user-logo">
        <img :src="rate.list[0].user.avatar" alt="">
      </div>
      <div class="user-name">
        <span>{{rate.list[0].user.uname}}</span>
      </div>
    </div>
    <div class="comment-context">
      <p class="text">{{rate.list[0].content}}</p>
      <p class="shop-info">
        <span>{{rate.list[0].created | date}}</span>
        <span>{{rate.list[0].style}}</span>
      </p>
    </div>
    <div class="user-img">
      <img :src="item" alt="" v-for="(item,index) in rate.list[0].images">
    </div>
  </div>
</template>

<script>
import { dateFormat } from "../../../common/utill"
export default {
  props: {
    rate: {
      typeof: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    date(value) {
      return dateFormat(value*1000,"Y-M-D H:I:S")
    }
  }
}
</script>

<style scoped>
  .comment-info {
    padding-bottom: 20px;
    border-bottom: 8px solid rgb(240, 240, 240);
  }
  .user-comment {
    display: flex;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
  }
  .user-comment div{
    flex: 1;
    border-bottom: 1px solid #ccc;
  }
  .user-comment>div:last-child {
    text-align: right;
  }
  .user-comment>div:last-child span {
    padding: 10px 0 10px 10px;
  }

  .user-info {
    padding: 10px 15px;
  }
  .user-logo {
    display: inline-block;
    vertical-align: middle;
  }
  .user-logo>img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    padding: 3px;
  }
  .user-name {
    display: inline-block;
    padding-left: 10px;
    font-size: 18px;
  }

  .comment-context {
    padding: 0 15px;
  }
  .text {
    line-height: 20px;
    font-size: 14px;
  }
  .shop-info {
    color: rgb(151, 150, 150);
    font-size: 14px;
    padding: 15px 0;
  }
  .shop-info span:last-child {
    padding-left: 10px;
  }

  .user-img {
    padding: 0 10px;
  }
  .user-img img {
    width: 80px;
    height: 80px;
    margin-left: 5px;
  }
</style>