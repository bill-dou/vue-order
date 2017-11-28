import {
  INCREMENT
} from './types'
import getters from './getters'

const state = {
  sales: []
}

const mutations = {
  //添加一单
  [INCREMENT](state, data) {
    const sales = state.sales
    data.forEach(ele => {
      let isExited = sales.some(o => o.goodsId == ele.goodsId)
      if (isExited) {
        let arr = sales.filter(o => o.goodsId == ele.goodsId);
        arr[0].count += ele.count;
      } else {
        let newGoods = {
          goodsId: ele.goodsId,
          goodsName: ele.goodsName,
          goodsCate: ele.goodsCate,
          price: ele.price,
          count: ele.count
        };
        sales.push(newGoods);
      }
    })

  }
}

export default {
  getters,
  state,
  mutations
}
