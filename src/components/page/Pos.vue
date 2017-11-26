<template>
  <div class="pos">
    <el-row>
      <el-col :span='10' class="pos-order">
        <el-table :data="tableData" border show-summary style="width: 100%">
          <el-table-column prop="goodsName" label="商品" align="center"></el-table-column>
          <el-table-column prop="price" sortable label="单价" align="center"></el-table-column>
          <el-table-column prop="count" sortable label="数量" align="center"></el-table-column>
          <el-table-column prop="totalPrice" sortable label="金额" align="center"></el-table-column>
          <el-table-column label="操作" width="220" fixed="right">
            <template slot-scope="scope">
              <el-button type="danger" size="mini" @click="delSingleGoods(scope.row)">C</el-button>
              <el-button type="primary" size="mini" @click="reduceSingleGoods(scope.row)">-1</el-button>
              <el-button type="success" size="mini" @click="addOrderList(scope.row)">+1</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="div-btn" v-show="isFoodHas">
          <el-button type="danger" @click="delAllGoods()">清空</el-button>
          <el-button type="success" @click="checkout()">结账</el-button>
        </div>
      </el-col>
      <el-col :span='14' class="pos-order-product">
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <ul class="clearfix">
              <li v-for="(food,index) in oftenGoods" :key="index" @click="addOrderList(food)">
                <span>{{food.goodsName}}</span>
                <span class="o-price">￥{{food.price}}元</span>
              </li>
            </ul>
          </div>
        </div>
        <el-tabs type="card" class="food-gate">
          <el-tab-pane label="汉堡">
            <ul class='cook-list'>
              <li v-for="(food,index) in type0Goods" :key="index" @click="addOrderList(food)">
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
              <li v-for="(food,index) in type1Goods" :key="index" @click="addOrderList(food)">
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
              <li v-for="(food,index) in type2Goods" :key="index" @click="addOrderList(food)">
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
              <li v-for="(food,index) in type3Goods" :key="index" @click="addOrderList(food)">
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
import axios from "axios";
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
      totalCount: 0,
      totalMoney: 0
    };
  },
  computed: {
    isFoodHas(){
      if(this.tableData.length==0) return false
      return true
    }
  },
  methods: {
    addOrderList(goods) {
      this.totalCount = 0;
      this.totalMoney = 0;
      let isExited = 0;
      //判断商品是否存在于订单列表
      for (let i = 0; i < this.tableData.length; i++) {
        const g = this.tableData[i];
        if (g.goodsId == goods.goodsId) {
          isExited = true;
        }
      }
      if (isExited) {
        //存在就++
        let arr = this.tableData.filter(o => o.goodsId == goods.goodsId);
        arr[0].count++;
        arr[0].totalPrice =
          arr[0].count * arr[0].price.substr(0, arr[0].price.length - 1);
      } else {
        //不存在就新建一个
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price + "元",
          count: 1,
          totalPrice: goods.price
        };
        this.tableData.push(newGoods);
      }

      //进行数量和价格的汇总计算
      this.tableData.forEach(element => {
        this.totalCount += element.count;
        this.totalMoney = this.totalMoney + element.price * element.count;
      });
    },
    reduceSingleGoods(goods) {
      this.totalCount = 0;
      this.totalMoney = 0;
      let arr = this.tableData.filter(o => o.goodsId == goods.goodsId);
      if (arr[0].count == 1) {
        this.delSingleGoods(goods);
        return;
      }
      arr[0].count--;
      arr[0].totalPrice =
        arr[0].count * arr[0].price.substr(0, arr[0].price.length - 1);

      //进行数量和价格的汇总计算
      this.tableData.forEach(element => {
        this.totalCount += element.count;
        this.totalMoney = this.totalMoney + element.price * element.count;
      });
    },
    delSingleGoods(goods) {
      this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId);
    },
    getAllMoney() {
      this.totalCount = 0;
      this.totalMoney = 0;
      if (this.tableData) {
        this.tableData.forEach(element => {
          this.totalCount += element.count;
          this.totalMoney = this.totalMoney + element.price * element.count;
        });
      }
    },
    //删除所有商品
    delAllGoods() {
      this.tableData = [];
      this.totalCount = 0;
      this.totalMoney = 0;
    },
    checkout() {
      if (this.totalCount != 0) {
        console.log(this.tableData)
        this.delAllGoods();
        this.$message({
          message: "结账成功，感谢你又为店里出了一份力!",
          type: "success"
        });
      } else {
        this.$message.error("不能空结。老板了解你急切的心情！");
      }
    }
  },
  created() {
    axios
      .get(
        "https://www.easy-mock.com/mock/591c6b989aba4141cf25b708/step/vue-order"
      )
      .then(response => {
        this.oftenGoods = response.data;
      })
      .catch(error => {
        alert("sth wrong");
      });
    axios
      .get(
        "https://www.easy-mock.com/mock/591c6b989aba4141cf25b708/step/typeGoods"
      )
      .then(response => {
        this.type0Goods = response.data[0];
        this.type1Goods = response.data[1];
        this.type2Goods = response.data[2];
        this.type3Goods = response.data[3];
        this.type0Goods.forEach(item => (item.totalPrice = 0));
        this.type1Goods.forEach(item => (item.totalPrice = 0));
        this.type2Goods.forEach(item => (item.totalPrice = 0));
        this.type3Goods.forEach(item => (item.totalPrice = 0));
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      });
  }
};
</script>

<style scoped>
.clearfix:after {
  content: "";
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
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
}

.often-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 5px;
  background-color: #fff;
  user-select: none;
}
.often-goods-list ul li:hover{
  cursor: pointer;
  border: 1px solid #58b7ff;
}
.o-price {
  color: #58b7ff;
}

.cook-list {
  margin: 0;
  overflow: auto;
  /* height: 500px; */
}

.cook-list li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auto;
  overflow: hidden;
  background-color: #fff;
  display: inline-block;
  margin: 2px;
  user-select: none;
  padding: 0 30px;
}
.cook-list li:hover{
  cursor: pointer;
  border: 1px solid #58b7ff;
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
