export default {
  addCart(context,payload) {
    return new Promise((resolve,reject) => {
      let oldCartList = null;
      for(let item of context.state.cartList) {
        if(item.iid === payload.iid) {
          oldCartList = item
        }
      }
      if(oldCartList) {
        context.commit('addCount',oldCartList)
        resolve('当前商品数量+1')
      }else {
        context.commit('addProduct',payload)
        resolve('加入购物车成功！')
      }
    })
  }
}