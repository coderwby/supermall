import Toast from './Toast'
import Vue from 'vue';
const obj = {};
export default obj

obj.install = function() {
  //1.创建组件构造器
  const toastC = Vue.extend(Toast)

  //2.new的方式，根据组件构造器，可以创建出来一个组件对象
  const toast = new toastC()

  //3.将组件对象挂仔到某一个元素上
  toast.$mount(document.createElement('div'))

  //4.toast.$el对应的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
  //Vue.prototype.$toast = toast
  console.log(toast)
}