<template>
  <div id="app">
    <el-container>
      <el-header>
        <Menus />
      </el-header>
      <el-container>
        <el-aside width="300px" class="aside-custom">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <template v-for="(technology, index) in treeData" :key="index">
              <el-sub-menu :index="String(index)">
                <template #title>
                  <span>{{ technology.label }}</span>
                </template>
                <template v-for="(dataset, dIndex) in technology.children" :key="dIndex">
                  <el-sub-menu :index="`${index}-${dIndex}`">
                    <template #title>
                      <span>{{ dataset.label }}</span>
                    </template>
                    <template v-for="(tissue, tIndex) in dataset.children" :key="tIndex">
                      <el-sub-menu :index="`${index}-${dIndex}-${tIndex}`">
                        <template #title>
                          <span>{{ tissue.label }}</span>
                        </template>
                        <template v-for="(region, rIndex) in tissue.children" :key="rIndex">
                          <el-menu-item :index="`${index}-${dIndex}-${tIndex}-${rIndex}`" @click="handleNodeClick(region)">
                            <span>{{ region.label }}</span>
                          </el-menu-item>
                        </template>
                      </el-sub-menu>
                    </template>
                  </el-sub-menu>
                </template>
              </el-sub-menu>
            </template>
          </el-menu>
        </el-aside>
        <el-main>
          <div v-if="chartData1.length" class="chart-wrapper">
            <div ref="chart1" class="chart rose-chart"></div>
          </div>
          <div v-if="chartData2.length" class="chart-wrapper">
            <div ref="chart2" class="chart rose-chart"></div>
          </div>
          <div v-if="seriesData1.length" class="chart-wrapper">
            <div ref="lineChart1" class="chart line-chart"></div>
          </div>
          <div v-if="seriesData2.length" class="chart-wrapper">
            <div ref="lineChart2" class="chart line-chart"></div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios';
import * as XLSX from 'xlsx';
import * as echarts from 'echarts';
import Menus from '../layout/menu-item'; // 导入Menus组件

export default {
  components: {
    Menus, // 注册Menus组件
  },
  data() {
    return {
      treeData: [],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
      chartData1: [],
      chartData2: [],
      seriesData1: [],
      seriesData2: [],
      xAxisData: []
    };
  },
  created() {
    this.loadExcelData();
  },
  methods: {
    async loadExcelData() {
      try {
        const response = await axios.get('/statistics/datasets.xlsx', { responseType: 'arraybuffer' });
        const data = new Uint8Array(response.data);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        this.treeData = this.buildTree(jsonData);
      } catch (error) {
        console.error('Error loading Excel data:', error);
      }
    },
    buildTree(data) {
      const tree = [];
      const map = new Map();

      data.forEach(row => {
        const { Technology, Dataset, Tissue, Region } = row;
        if (!map.has(Technology)) {
          map.set(Technology, { label: Technology, children: new Map(), parent: null });
          tree.push(map.get(Technology));
        }
        if (!map.get(Technology).children.has(Dataset)) {
          const datasetNode = { label: Dataset, children: new Map(), parent: map.get(Technology) };
          map.get(Technology).children.set(Dataset, datasetNode);
        }
        if (!map.get(Technology).children.get(Dataset).children.has(Tissue)) {
          const tissueNode = { label: Tissue, children: [], parent: map.get(Technology).children.get(Dataset) };
          map.get(Technology).children.get(Dataset).children.set(Tissue, tissueNode);
        }
        const regionNode = { label: Region, parent: map.get(Technology).children.get(Dataset).children.get(Tissue) };
        map.get(Technology).children.get(Dataset).children.get(Tissue).children.push(regionNode);
      });

      const convertToArray = node => {
        if (node.children instanceof Map) {
          node.children = Array.from(node.children.values()).map(convertToArray);
        }
        return node;
      };

      return tree.map(convertToArray);
    },
    async handleNodeClick(region) {
      const path = this.getNodePath(region);
      if (path.length === 4) {
        const [technology, dataset, tissue, regionLabel] = path;

        // 加载并处理统计数据
        await this.loadStatisticsData(technology, dataset, tissue, regionLabel);
      }
    },
    getNodePath(node) {
      const path = [];
      while (node) {
        path.unshift(node.label);
        node = node.parent;
      }
      return path;
    },
    async loadStatisticsData(technology, dataset, tissue, region) {
      try {
        const [cellResponse, neighborResponse] = await Promise.all([
          axios.get(`/statistics/${technology}/${dataset}/${tissue}/cell_type.tsv`, { responseType: 'text' }),
          axios.get(`/statistics/${technology}/${dataset}/${tissue}/neighbor.tsv`, { responseType: 'text' })
        ]);

        const parseTSV = tsv => {
          const rows = tsv.split('\n').map(row => row.split('\t'));
          const headers = rows[0];
          const dataRows = rows.slice(1);
          return { headers, dataRows };
        };

        const cellData = parseTSV(cellResponse.data);
        const neighborData = parseTSV(neighborResponse.data);

        const findRow = (dataRows, headers, region) => {
          const regionIndex = headers.indexOf('Region');
          if (regionIndex === -1) {
            console.error('Region column not found in TSV data');
            return null;
          }
          return dataRows.find(row => row[regionIndex] === region);
        };

        const cellRow = findRow(cellData.dataRows, cellData.headers, region);
        const neighborRow = findRow(neighborData.dataRows, neighborData.headers, region);

        // 数据用于饼图
        if (cellRow) {
          this.chartData1 = cellData.headers.slice(1).map((header, index) => ({
            value: parseFloat(cellRow[index + 1]),
            name: header
          }));
        } else {
          console.error(`Region ${region} not found in cell_type.tsv`);
        }

        if (neighborRow) {
          this.chartData2 = neighborData.headers.slice(1).map((header, index) => ({
            value: parseFloat(neighborRow[index + 1]),
            name: header
          }));
        } else {
          console.error(`Region ${region} not found in neighbor.tsv`);
        }

        // 数据用于堆叠折线图
        this.xAxisData = cellData.dataRows.map(row => row[cellData.headers.indexOf('Region')]);
        this.seriesData1 = cellData.headers.slice(1).map((header, index) => ({
          name: header,
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: cellData.dataRows.map(row => parseFloat(row[index + 1]))
        }));
        this.seriesData2 = neighborData.headers.slice(1).map((header, index) => ({
          name: header,
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: neighborData.dataRows.map(row => parseFloat(row[index + 1]))
        }));

        this.renderCharts();
      } catch (error) {
        console.error('Error loading statistics data:', error);
      }
    },
    renderCharts() {
      this.$nextTick(() => {
        if (this.$refs.chart1) {
          this.renderChart(this.$refs.chart1, this.chartData1, 'Cell Type Distribution');
        }
        if (this.$refs.chart2) {
          this.renderChart(this.$refs.chart2, this.chartData2, 'Neighborhood Distribution');
        }
        if (this.$refs.lineChart1) {
          this.renderLineChart(this.$refs.lineChart1, this.seriesData1, 'Cell Type Trends');
        }
        if (this.$refs.lineChart2) {
          this.renderLineChart(this.$refs.lineChart2, this.seriesData2, 'Neighborhood Trends');
        }
      });
    },
    renderChart(chartRef, data, title) {
      if (chartRef) {
        const chart = echarts.init(chartRef);
        const option = {
          title: {
            text: title,
            top: '1%',
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            top: 'middle',
            orient: 'vertical',
            left: '70%', // 调整标签位置
            itemGap: 10, // 减小标签之间的间距
          },
          toolbox: {
            show: true,
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          series: [
            {
              name: title,
              type: 'pie',
              radius: [40, 150], // 调整饼图的半径
              center: ['40%', '50%'], // 调整饼图的位置
              roseType: 'area',
              itemStyle: {
                borderRadius: 8
              },
              data: data
            }
          ]
        };
        chart.setOption(option);
      } else {
        console.error('Chart DOM element not found.');
      }
    },
    renderLineChart(chartRef, seriesData, title) {
      if (chartRef) {
        const lineChart = echarts.init(chartRef);
        const option = {
          title: {
            text: title,
            top: '1%',
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data: seriesData.map(item => item.name),
            top: '5%', // 调整图例的位置，使其稍微往上
            itemGap: 5, // 减小标签之间的间距
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: this.xAxisData,
              axisLabel: {
                interval: 0,
                rotate: 45
              }
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: seriesData
        };
        lineChart.setOption(option);
      } else {
        console.error('Line Chart DOM element not found.');
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
};
</script>

<style>
body, html, #app {
  height: 100%;
  margin: 0;
}

.aside-custom {
  background-color: #f5f5f5; /* 设置背景颜色 */
  border-right: 1px solid white; /* 添加右边分割线 */
  padding: 10px; /* 添加内边距 */
}

.el-menu-vertical-demo {
  background-color: #bec3c9; /* 自定义背景颜色 */
  color: #fff; /* 自定义字体颜色 */
}

.el-sub-menu__title,
.el-menu-item {
  font-size: 18px; /* 放大字体 */
}

.el-menu-item:hover {
  background-color: #FFC947; /* 设置悬停背景颜色 */
}

.chart-container {
  display: flex;
  flex-direction: column; /* 使每个图表占据单独一行 */
  align-items: center; /* 居中对齐 */
  width: 100%;
  margin-top: 40px; /* 增加饼图与上方图片的间隔 */
}

.chart-wrapper {
  width: 100%; /* 使图表容器占据父容器的宽度 */
  display: flex;
  justify-content: center; /* 居中对齐图表 */
  margin-bottom: 40px; /* 增加每个图表之间的间距 */
}

.chart {
  width: 80%; /* 调整每个图表占据容器的比例 */
  height: 400px; /* 设置图表的固定高度 */
}
</style>
