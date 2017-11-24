<template>
<div id="chart" class="charts-wrap">
  <echartCategory class="chartHisPos"></echartCategory>
  <echartCategoryStack class="chartHisStackPos"></echartCategoryStack>
</div>
</template>
<script>
import echartCategory from '@/components/common/echartCategory'
import echartCategoryStack from '@/components/common/echartCategoryStack'
export default {
  name: "charts",
  components: {
    echartCategory,
    echartCategoryStack
  }
};
</script>

<style scoped>
.charts-wrap{
  padding: 50px;
}
.chartHisPos{
  margin-top: 30px;
}
.chartHisStackPos{
  margin: 30px 0 0 0;
}
</style>
