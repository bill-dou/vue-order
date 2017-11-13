<template>
  <div class="pos">
    <el-row>
      <el-col :span='10' class="pos-order">
        <el-tabs type="card">
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border show-summary style="width: 100%">
              <el-table-column prop="goodsName" label="商品" width="220" align="center"></el-table-column>
              <el-table-column prop="count" label="数量" width="60" align="center"></el-table-column>
              <el-table-column prop="price" label="金额" width="70" align="center"></el-table-column>
              <el-table-column label="操作" width="180" fixed="right">
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
        <el-tabs type="card">
          <el-tab-pane label="汉堡">
            <ul class='cookList'>
              <li v-for="food in type0Goods">
                <p class="foodImg">
                  <img :src="food.goodsImg" width="100%">
                </p>
                <p class="foodName">{{food.goodsName}}</p>
                <p class="foodPrice">￥{{food.price}}元</p>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="小食">小食</el-tab-pane>
          <el-tab-pane label="饮料">饮料</el-tab-pane>
          <el-tab-pane label="套餐">套餐</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  function setGoodsHeight(){
    
  }
  export default {
    name: "Pos",
    data() {
      return {
        tableData: [{
            goodsName: "可口可乐",
            price: 8,
            count: 1
          },
          {
            goodsName: "香辣鸡腿堡",
            price: 15,
            count: 1
          },
          {
            goodsName: "爱心薯条",
            price: 8,
            count: 1
          },
          {
            goodsName: "甜筒",
            price: 8,
            count: 1
          }
        ],
        oftenGoods: [{
            goodsId: 1,
            goodsName: '香辣鸡腿堡',
            price: 18
          }, {
            goodsId: 2,
            goodsName: '田园鸡腿堡',
            price: 15
          }, {
            goodsId: 3,
            goodsName: '和风汉堡',
            price: 15
          }, {
            goodsId: 4,
            goodsName: '快乐全家桶',
            price: 80
          }, {
            goodsId: 5,
            goodsName: '脆皮炸鸡腿',
            price: 10
          }, {
            goodsId: 6,
            goodsName: '魔法鸡块',
            price: 20
          }, {
            goodsId: 7,
            goodsName: '可乐大杯',
            price: 10
          }, {
            goodsId: 8,
            goodsName: '雪顶咖啡',
            price: 18
          }, {
            goodsId: 9,
            goodsName: '大块鸡米花',
            price: 15
          }, {
            goodsId: 20,
            goodsName: '香脆鸡柳',
            price: 17
          }

        ],
        type0Goods: [{
            goodsId: 1,
            goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
            goodsName: '香辣鸡腿堡',
            price: 18
          }, {
            goodsId: 2,
            goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
            goodsName: '田园鸡腿堡',
            price: 15
          }, {
            goodsId: 3,
            goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
            goodsName: '和风汉堡',
            price: 15
          }, {
            goodsId: 4,
            goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
            goodsName: '快乐全家桶',
            price: 80
          }, {
            goodsId: 5,
            goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
            goodsName: '脆皮炸鸡腿',
            price: 10
          }, {
            goodsId: 6,
            goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
            goodsName: '魔法鸡块',
            price: 20
          }, {
            goodsId: 7,
            goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
            goodsName: '可乐大杯',
            price: 10
          }, {
            goodsId: 8,
            goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
            goodsName: '雪顶咖啡',
            price: 18
          }, {
            goodsId: 9,
            goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
            goodsName: '大块鸡米花',
            price: 15
          }, {
            goodsId: 20,
            goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
            goodsName: '香脆鸡柳',
            price: 17
          }

        ]
      };
    },
    mounted: function () {
      resize()
      window.onresize = function () {
        resize()
      }
    },
  };

</script>

<style scoped>
  .clearfix:after {
    /*最简方式*/
    content: '';
    display: block;
    clear: both;
  }

  .clearfix {
    /*兼容 IE*/
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

  .cookList {
    margin: 0;
    overflow: auto;
    height: 500px;
  }

  .cookList li {
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

  .cookList li p {
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
