export default {
  addCount(state,payload) {
    payload.count += 1
  },
  addProduct(state,payload) {
    payload.count = 1
    payload.checked = true
    state.cartList.push(payload)
  },
  checked(state,payload) {
    state.cartList[payload].checked = !state.cartList[payload].checked
  }
}