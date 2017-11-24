<template>
  <div id="myChartStack" class="my-chart"></div>
</template>
<script>
const echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/bar");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");
export default {
  name: "echartStack",
  data() {
    return {};
  },
  mounted() {
    let drawAgain = this.drawAgain();
    window.onresize = function temp() {
      drawAgain.resize();
    };
  },
  methods: {
    drawAgain() {
      let myChartStack = echarts.init(document.getElementById("myChartStack"));
      myChartStack.setOption({
        title: {
          text: "销量统计(周统计)"
        },
        legend: {
          right:5,
          data: ["汉堡", "小食", "饮料", "套餐"]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        xAxis: {
          type: "category",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
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
            name: "汉堡",
            type: "bar",
            stack: "one",
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
            data: [15, 20, 16, 10, 20, 6, 10]
          },
          {
            name: "小食",
            type: "bar",
            stack: "one",
            label: {
              normal: {
                show: true,
                position: "insideTop"
              }
            },
            itemStyle: {
              normal: {
                color: "#78c49b"
              }
            },
            data: [24, 20, 6, 10, 9, 15, 10]
          },
          {
            name: "饮料",
            type: "bar",
            stack: "one",
            label: {
              normal: {
                show: true,
                position: "insideTop"
              }
            },
            itemStyle: {
              normal: {
                color: "#f66722"
              }
            },
            data: [12, 13, 14, 11, 8, 11, 9]
          },
          {
            name: "套餐",
            type: "bar",
            stack: "one",
            label: {
              normal: {
                show: true,
                position: "insideTop"
              }
            },
            itemStyle: {
              normal: {
                color: "#59c1bf"
              }
            },
            data: [16, 12, 15, 11, 8, 9, 13]
          }
        ]
      });
      return myChartStack;
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


