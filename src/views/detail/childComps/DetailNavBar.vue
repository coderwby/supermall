<template>
  <div>
    <nav-bar>
      <div slot="left">
        <div class="back" @click="backClick">
          <img src="../../../assets/img/back/back.svg" alt="">
        </div>
      </div>
      <div slot="center" class="detailNavBar">
        <div
          class="detailNavBarItem"
          v-for="(item, index) in titles"
          @click="itemClick(index)"
          :class="{ activeItem: currentIndex === index }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";
export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('itemClick',index) 
    },
    backClick() {
      this.$router.back()
    }
  },
};
</script>

<style>
.detailNavBar {
  display: flex;
}
.detailNavBarItem {
  flex: 1;
  font-size: 13px;
}
.activeItem {
  color: #ff5777;
}

.back img {
  width: 22px;
  height: 22px;
  margin-top: 10px;
}
</style>