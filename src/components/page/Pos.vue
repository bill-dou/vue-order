<template>
  <div class="pos">
    <el-row>
      <el-col :span='10' class="pos-order">
        <el-tabs type="card">
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border show-summary style="width: 100%">
              <el-table-column prop="goodsName" label="商品" align="center"></el-table-column>
              <el-table-column prop="count" sortable label="数量" align="center"></el-table-column>
              <el-table-column prop="price" sortable label="金额" align="center"></el-table-column>
              <el-table-column label="操作" width="160" fixed="right">
                <template slot-scope="scope">
                  <el-button type="primary" size="mini">删除</el-button>
                  <el-button type="success" size="mini">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="div-btn">
              <el-button type="primary">外卖</el-button>
              <el-button type="danger">挂单</el-button>
              <el-button type="success">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">挂单</el-tab-pane>
          <el-tab-pane label="外卖">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span='14' class="pos-order-product">
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <ul class="clearfix">
              <li v-for="(food,index) in oftenGoods" :key="index">
                <span>{{food.goodsName}}</span>
                <span class="o-price">￥{{food.price}}元</span>
              </li>
            </ul>
          </div>
        </div>
        <el-tabs type="card" class="food-gate">
          <el-tab-pane label="汉堡">
            <ul class='cook-list'>
              <li v-for="food in type0Goods">
                <p class="foodImg">
                  <img :src="food.goodsImg" width="100%">
                </p>
                <p class="foodName">{{food.goodsName}}</p>
                <p class="foodPrice">￥{{food.price}}元</p>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="小食">
            <ul class='cook-list'>
              <li v-for="food in type1Goods">
                <p class="foodImg">
                  <img :src="food.goodsImg" width="100%">
                </p>
                <p class="foodName">{{food.goodsName}}</p>
                <p class="foodPrice">￥{{food.price}}元</p>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="饮料">
            <ul class='cook-list'>
              <li v-for="food in type2Goods">
                <p class="foodImg">
                  <img :src="food.goodsImg" width="100%">
                </p>
                <p class="foodName">{{food.goodsName}}</p>
                <p class="foodPrice">￥{{food.price}}元</p>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="套餐">
            <ul class='cook-list'>
              <li v-for="food in type3Goods">
                <p class="foodImg">
                  <img :src="food.goodsImg" width="100%">
                </p>
                <p class="foodName">{{food.goodsName}}</p>
                <p class="foodPrice">￥{{food.price}}元</p>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios'
  function setGoodsHeight() {
    var foodGate = document.getElementsByClassName("often-goods-list")
    console.log(foodGate,foodGate[0].clientHeight)
  }
  export default {
    name: "Pos",
    data() {
      return {
        tableData: [],
        oftenGoods: [],
        type0Goods: [],
        type1Goods: [],
        type2Goods: [],
        type3Goods: [],
        totalCount:0,
        totalMoney:0
      };
    },
    mounted: function(){
      setGoodsHeight()
    },
    methods:{
      addOrderList(goods) {
        this.totalCount=0;
        this.totalMoney=0;
        let isExited=0;
        //判断商品是否存在于订单列表
        for (let i = 0; i < this.tableData.length; i++) {
          const g = this.tableData[i];
          if(g.goodsId==goods.goodsId){
            isExited=true;
          }
        }
        if(isExited){
          //存在就++
          let arr=this.tableData.filter(o=>o.goodsId==goods.goodsId);
          arr[0].count++;
        }else{
          //不存在就新建一个
          let newGoods={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1}
          this.tableData.push(newGoods);
        }
      }
    },
    created() {
      axios.get('https://www.easy-mock.com/mock/591c6b989aba4141cf25b708/step/vue-order')
        .then(response => {
          this.oftenGoods = response.data;
        })
        .catch(
          error => {
            alert('sth wrong')
          }
        )
      axios.get('https://www.easy-mock.com/mock/591c6b989aba4141cf25b708/step/typeGoods')
        .then(response => {
          this.type0Goods = response.data[0];
          this.type1Goods = response.data[1];
          this.type2Goods = response.data[2];
          this.type3Goods = response.data[3];
        })
        .catch(error => {
          console.log(error);
          alert('网络错误，不能访问');
        })
    }
  };

</script>

<style scoped>
  .clearfix:after {
    content: '';
    display: block;
    clear: both;
  }

  .clearfix {
    zoom: 1;
  }

  .pos,
  .el-row {
    height: 100%;
  }

  .pos-order {
    background-color: #f9fafc;
    border-right: 1px solid #c0ccda;
    height: 100%;
  }

  .div-btn {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

  .title {
    height: 20px;
    border-bottom: 1px solid #D3DCE6;
    background-color: #F9FAFC;
    padding: 10px;
  }

  .often-goods-list ul li {
    list-style: none;
    float: left;
    border: 1px solid #E5E9F2;
    padding: 10px;
    margin: 5px;
    background-color: #fff;
  }

  .o-price {
    color: #58B7FF;
  }

  .cook-list {
    margin: 0;
    overflow: auto;
    /* height: 500px; */
  }

  .cook-list li {
    list-style: none;
    width: 23%;
    border: 1px solid #E5E9F2;
    height: auto;
    overflow: hidden;
    background-color: #fff;
    display: inline-block;
    margin: 2px;
    padding: 0 30px;
  }

  .cook-list li p {
    margin: 0;
    text-align: center;
  }

  .foodName {
    font-size: 18px;
    color: brown;
  }

  .foodPrice {
    font-size: 16px;
  }

</style>
