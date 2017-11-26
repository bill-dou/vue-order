import {
  INCREMENT
} from './types'
import getters from './getters'

const state={
    sales:[{
        goodsId: 101,
        goodsName: '香辣鸡腿堡0',
        price: 50,
        count: 2
    },{
        goodsId: 102,
        goodsName: '香辣鸡腿堡1',
        price: 40,
        count: 5
    },{
        goodsId: 103,
        goodsName: '香辣鸡腿堡2',
        price: 30,
        count: 3
    }]
}

const mutations={
    [INCREMENT](state){
        state.count++;
    }
}

export default{
    getters,
    state,
    mutations
}