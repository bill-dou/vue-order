<template>
  <div id="myChart" class="my-chart"></div>
</template>
<script>
const echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/bar");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  name: "echart",
  data() {
    return {
      seriesData: [15, 20, 36, 11]
    };
  },
  mounted() {
    let drawAgain = this.drawAgain();
    window.onresize = function temp() {
      drawAgain.resize();
    };
  },
  methods: {
    drawAgain() {
      let myChart = echarts.init(document.getElementById("myChart"));
      myChart.setOption({
        title: {
          text: "销量统计(品类)"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        xAxis: {
          type: "category",
          data: ["汉堡", "小食", "饮料", "套餐"]
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: true,
            lineStyle: {
              color: "#fff"
            }
          }
        },
        series: [
          {
            name: "销量",
            type: "bar",
            label: {
              normal: {
                show: true,
                position: "insideTop"
              }
            },
            itemStyle: {
              normal: {
                color: "#4da9ff"
              }
            },
            data: this.seriesData
          }
        ]
      });
      return myChart;
    }
  }
};
</script>
<style  scoped>
.my-chart {
  width: 500px;
  height: 300px;
}
</style>


