import  request  from '../request'

// 根据商品ID获取详情接口
export const getDetailInfo = iid => request({ url: '/detail', params: { iid } })


export class Goods {
    constructor (itemInfo, columns, shopInfo) {
        this.title = itemInfo.title
        this.price = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.desc = itemInfo.desc
        this.discountDesc = itemInfo.discountDesc
        this.realPrice = itemInfo.lowNowPrice
        this.columns = columns
        this.services = shopInfo.services
    }
}
