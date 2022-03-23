<template>
  <swiper class="item-swiper">
    <swiper-item v-for="item in topImages">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper";
export default {
  props: {
    topImages: {
      typeof: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style scoped>
.item-swiper {
  height: 300px;
  overflow: hidden;
}
</style>