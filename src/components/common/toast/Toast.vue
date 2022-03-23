<template>
  <div class="toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message,duration=2000) {
      this.message = message
      this.isShow = true

      setTimeout(() => {
        this.isShow = false
      }, duration);
    }
  }
};
</script>

<style>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform:translate(-50%,-50%);
}
.toast div {
  padding: 8px 10px;
  background: black;
  opacity: 0.75;
  color: #fff;
  border-radius: 5px;
  width: auto;
}
</style>