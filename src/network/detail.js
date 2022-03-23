import { request } from "./request";

export function getdetails(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend(iid) {
  return request({
    url: '/recommend'
  })
}
//商品信息整合
export class detailGoods {
  constructor (itemInfo,columns,services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}
//店铺信息数据整合
export class shopInfo {
  constructor (shopInfo) {
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}
//穿着效果图片的数据整合
export class detailInfo {
  constructor (detailInfo) {
    this.desc = detailInfo.desc
    this.detailImage = detailInfo.detailImage
  }
}