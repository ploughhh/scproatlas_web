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
          <div v-if="selectedImagePaths.length">
            <div v-for="(path, index) in selectedImagePaths" :key="index" class="image-container">
              <div v-if="index === 0" class="image-title">
                <h3 class="title">Cell Type Visualization</h3>
                <hr class="cell-line" />
              </div>
              <div v-if="index === 1" class="image-title">
                <h3 class="title">Neighborhood Visualization</h3>
                <hr class="neighborhood-line" />
              </div>
              <img :src="path" class="image-style" @error="imageLoadError" />
            </div>
          </div>
          <div v-if="chartData.length || lineChartData.length" class="chart-container">
            <div ref="chart" class="chart rose-chart"></div>
            <div ref="lineChart" class="chart line-chart"></div>
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
      selectedImagePaths: [],
      chartData: [],
      lineChartData: [],
      xAxisData: [],
      seriesData: []
    };
  },
  created() {
    this.loadExcelData();
  },
  methods: {
    async loadExcelData() {
      try {
        const response = await axios.get('/datasets/datasets.xlsx', { responseType: 'arraybuffer' });
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
      console.log('Node path:', path); // 调试信息
      if (path.length === 4) {
        const [technology, dataset, tissue, regionLabel] = path;
        const imagePathBase = `/datasets/${technology}/${dataset}/${tissue}/${regionLabel}/`;
        console.log('Image paths:', [
          `${imagePathBase}celltype.png`,
          `${imagePathBase}neighborhood.png`,
        ]); // 调试信息
        this.selectedImagePaths = [
          `${imagePathBase}celltype.png`,
          `${imagePathBase}neighborhood.png`,
        ];

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
        const response = await axios.get(`/datasets/${technology}/${dataset}/${tissue}/statistics.tsv`, { responseType: 'text' });
        const rows = response.data.split('\n').map(row => row.split('\t'));
        const headers = rows[0];
        const regionIndex = headers.indexOf('Region');
        const dataRow = rows.find(row => row[regionIndex] === region);

        // 数据用于玫瑰饼图
        if (dataRow) {
          const chartData = headers.slice(1).map((header, index) => ({
            value: parseFloat(dataRow[index + 1]),
            name: header
          }));

          this.chartData = chartData;
          this.$nextTick(() => {
            this.renderChart();
          });
        } else {
          console.error(`Region ${region} not found in statistics.tsv`);
        }

        // 数据用于堆叠折线图
        this.xAxisData = rows.slice(1).map(row => row[regionIndex]);
        this.seriesData = headers.slice(1).map((header, index) => ({
          name: header,
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: rows.slice(1).map(row => parseFloat(row[index + 1]))
        }));

        this.lineChartData = true;
        this.$nextTick(() => {
          this.renderLineChart();
        });

      } catch (error) {
        console.error('Error loading statistics data:', error);
      }
    },
    renderChart() {
      if (this.$refs.chart) {
        const chart = echarts.init(this.$refs.chart);
        const option = {
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
              name: 'Neighborhood statistics in this region',
              type: 'pie',
              radius: [40, 150], // 调整饼图的半径
              center: ['40%', '50%'], // 调整饼图的位置
              roseType: 'area',
              itemStyle: {
                borderRadius: 8
              },
              data: this.chartData
            }
          ]
        };
        chart.setOption(option);
      } else {
        console.error('Chart DOM element not found.');
      }
    },
    renderLineChart() {
      if (this.$refs.lineChart) {
        const lineChart = echarts.init(this.$refs.lineChart);
        const option = {
          title: {
            text: 'Whole neighborhood statistics in this dataset',
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
            data: this.seriesData.map(item => item.name),
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
            bottom: '-1%',
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
          series: this.seriesData
        };
        lineChart.setOption(option);
      } else {
        console.error('Line Chart DOM element not found.');
      }
    },
    imageLoadError(event) {
      console.error(`Failed to load image: ${event.target.src}`);
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

.image-container {
  margin-bottom: 20px;
}

.image-title {
  margin-bottom: 10px;
  text-align: left; /* 标题靠左对齐 */
}

.title {
  font-size: 24px; /* 增大字体 */
}

.cell-line,
.neighborhood-line {
  border: 1px solid rgb(159, 159, 216); /* 改为灰色细线 */
}

.image-style {
  width: 100%;
  max-width: 1350px;
}

.chart-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 400px; /* 调整饼图和折线图容器的高度 */
  margin-top: 40px; /* 增加饼图与上方图片的间隔 */
}

.chart {
  width: 45%; /* 调整每个图表占据容器的比例 */
  height: 100%;
}

.rose-chart {
  margin-right: 10px; /* 增加玫瑰饼图和堆叠折线图之间的间距 */
}
</style>
