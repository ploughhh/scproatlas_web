<template>
  <div>
    <el-header>
      <Menus />
    </el-header>
    <div id="chart" style="width: 100%; height: 400px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import axios from 'axios';
import Papa from 'papaparse';
import Menus from '../layout/menu-item'; // 导入Menus组件

export default {
  components: {
    Menus, // 注册Menus组件
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    async initChart() {
      try {
        // 读取CSV文件
        const response = await axios.get('/examples/TMA1_cell_statistics.csv');
        const csvData = response.data;

        // 解析CSV文件
        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            if (result.errors.length) {
              console.error('CSV Parse Error:', result.errors);
              // 过滤掉有错误的行
              const validData = result.data.filter((row, index) =>
                !result.errors.some(error => error.row === index)
              );
              this.renderChart(validData);
            } else {
              this.renderChart(result.data);
            }
          },
        });
      } catch (error) {
        console.error('Error fetching or parsing CSV data:', error);
      }
    },
    renderChart(data) {
      // 检查数据是否正确
      if (!Array.isArray(data) || data.length === 0) {
        console.error('No valid data found in the CSV file.');
        return;
      }

      // 处理数据以适应ECharts的格式
      const cellTypes = [...new Set(data.map((item) => item.cell_type))];
      const codexSamples = [...new Set(data.map((item) => item.codex_sample))];

      const seriesData = cellTypes.map((cellType) => {
        return {
          name: cellType,
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: { focus: 'series' },
          data: codexSamples.map((sample) => {
            const found = data.find(
              (item) => item.codex_sample === sample && item.cell_type === cellType
            );
            return found ? parseInt(found.count, 10) : 0;
          }),
        };
      });

      const option = {
        title: { text: 'Stacked Area Chart' },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: { backgroundColor: '#6a7985' },
          },
        },
        legend: { data: cellTypes },
        toolbox: { feature: { saveAsImage: {} } },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: codexSamples,
          },
        ],
        yAxis: [{ type: 'value' }],
        series: seriesData,
      };

      this.chart = echarts.init(document.getElementById('chart'));
      this.chart.setOption(option);
    },
  },
};
</script>

<style>
#chart {
  width: 100%;
  height: 400px;
}
</style>
