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
                        <template
                          v-for="(region, rIndex) in tissue.children"
                          :key="rIndex"
                        >
                          <el-menu-item
                            :index="`${index}-${dIndex}-${tIndex}-${rIndex}`"
                            @click="handleNodeClick(region)"
                          >
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
          <!-- New Title -->
          <div class="section-header" style="margin-top: 90px">
            <h2 class="section-title section-title-color">Cell-cell Interaction</h2>
          </div>
          <div ref="chart" class="chart"></div>
          <el-table
            :data="currentTableData"
            v-if="tableData.length"
            style="margin-top: 20px"
          >
            <el-table-column
              v-for="column in filteredColumns"
              :key="column"
              :prop="column"
              :label="getColumnLabel(column)"
              min-width="100"
            />
          </el-table>
          <el-pagination
            v-if="tableData.length"
            background
            layout="prev, pager, next"
            :total="tableData.length"
            :page-size="10"
            @current-change="handlePageChange"
            style="margin-top: 10px"
          />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
import * as XLSX from "xlsx";
import Menus from "../layout/menu-item"; // 导入Menus组件
import * as echarts from "echarts";

export default {
  components: {
    Menus, // 注册Menus组件
  },
  data() {
    return {
      treeData: [],
      chart: null,
      tableData: [],
      tableColumns: [],
      currentPage: 1,
    };
  },
  computed: {
    currentTableData() {
      const start = (this.currentPage - 1) * 10;
      const end = start + 10;
      return this.tableData.slice(start, end);
    },
    filteredColumns() {
      return this.tableColumns.filter((column) => !["count", "column"].includes(column));
    },
  },
  created() {
    this.loadExcelData();
  },
  methods: {
    async loadExcelData() {
      try {
        const response = await axios.get("/proximity/datasets.xlsx", {
          responseType: "arraybuffer",
        });
        const data = new Uint8Array(response.data);
        const workbook = XLSX.read(data, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        this.treeData = this.buildTree(jsonData);
      } catch (error) {
        console.error("Error loading Excel data:", error);
      }
    },
    buildTree(data) {
      const tree = [];
      const map = new Map();

      data.forEach((row) => {
        const { Technology, Dataset, Tissue, Region } = row;
        if (!map.has(Technology)) {
          map.set(Technology, { label: Technology, children: new Map(), parent: null });
          tree.push(map.get(Technology));
        }
        if (!map.get(Technology).children.has(Dataset)) {
          const datasetNode = {
            label: Dataset,
            children: new Map(),
            parent: map.get(Technology),
          };
          map.get(Technology).children.set(Dataset, datasetNode);
        }
        if (!map.get(Technology).children.get(Dataset).children.has(Tissue)) {
          const tissueNode = {
            label: Tissue,
            children: [],
            parent: map.get(Technology).children.get(Dataset),
          };
          map.get(Technology).children.get(Dataset).children.set(Tissue, tissueNode);
        }
        const regionNode = {
          label: Region,
          parent: map.get(Technology).children.get(Dataset).children.get(Tissue),
        };
        map
          .get(Technology)
          .children.get(Dataset)
          .children.get(Tissue)
          .children.push(regionNode);
      });

      const convertToArray = (node) => {
        if (node.children instanceof Map) {
          node.children = Array.from(node.children.values()).map(convertToArray);
        }
        return node;
      };

      return tree.map(convertToArray);
    },
    async handleNodeClick(region) {
      const path = this.getNodePath(region);
      console.log("Node path:", path); // 调试信息
      if (path.length === 4) {
        const [technology, dataset, tissue, regionLabel] = path;
        const txtFilePath = `/cci/${technology}/${dataset}/${tissue}/${regionLabel}/graph.txt`;
        this.loadGraphData(txtFilePath);
        const resultsFilePath = `/cci/${technology}/${dataset}/${tissue}/${regionLabel}/results.txt`;
        this.loadTableData(resultsFilePath);
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
    async loadGraphData(filePath) {
      try {
        const response = await axios.get(filePath);
        const graphData = this.parseGraphData(response.data);
        this.drawGraph(graphData);
      } catch (error) {
        console.error("Error loading graph data:", error);
      }
    },
    parseGraphData(data) {
      const rows = data.trim().split("\n").slice(1); // 去掉标题行
      const nodes = new Set();
      const links = [];

      rows.forEach((row) => {
        const [source, target, count] = row.split("\t");
        nodes.add(source);
        nodes.add(target);
        links.push({
          source,
          target,
          value: count,
          lineStyle: { curveness: -0.25, color: "#ccc" }, // 边的颜色设置为灰色细线
        });
      });

      return {
        nodes: Array.from(nodes).map((name) => ({
          name,
          symbolSize: 50,
          itemStyle: { color: this.getRandomColor() }, // 保持圆形节点并设置颜色
        })),
        links,
      };
    },
    drawGraph({ nodes, links }) {
      const option = {
        title: {
          text: "Circular Graph",
        },
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            if (params.dataType === "edge") {
              return `${params.data.source} -> ${params.data.target}<br>Count: ${params.data.value}`;
            }
            return params.data.name;
          },
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            type: "graph",
            layout: "circular",
            symbolSize: 50,
            roam: true,
            label: {
              show: true,
              color: "#000",
            },
            edgeSymbol: ["circle", "arrow"],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              show: false,
            },
            data: nodes,
            links: links,
            lineStyle: {
              opacity: 0.9,
              width: 2,
              curveness: -0.25,
            },
          },
        ],
      };

      if (!this.chart) {
        this.chart = echarts.init(this.$refs.chart);
      } else {
        this.chart.clear();
      }

      this.chart.setOption(option);
      this.chart.on("click", (params) => {
        if (params.dataType === "edge") {
          const { source, target } = params.data;
          this.loadEdgeTableData(source, target);
        }
      });
    },
    async loadTableData(filePath) {
      try {
        const response = await axios.get(filePath);
        const data = response.data
          .trim()
          .split("\n")
          .map((row) => row.split("\t"));
        const columns = data[0];
        const rows = data.slice(1).map((row) => {
          const rowData = {};
          row.forEach((cell, index) => {
            rowData[columns[index]] = cell;
          });
          return rowData;
        });
        this.tableColumns = columns;
        this.tableData = rows;
        this.currentPage = 1; // 重置分页到第一页
      } catch (error) {
        console.error("Error loading table data:", error);
      }
    },
    async loadEdgeTableData(source, target) {
      // Assuming edge details should be filtered from loaded data
      this.tableData = this.tableData.filter(
        (row) => row.source === source && row.target === target
      );
      this.currentPage = 1; // 重置分页到第一页
    },
    handlePageChange(page) {
      this.currentPage = page;
    },
    getColumnLabel(column) {
      if (column === "value") return "interaction score";
      return column;
    },
    getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
body,
html,
#app {
  height: 100%;
  margin: 0;
}

.aside-custom {
  background-color: #f5f5f5;
  border-right: 1px solid white;
  padding: 10px;
}

.el-menu-vertical-demo {
  background-color: #bec3c9;
  color: #fff;
}

.el-sub-menu__title,
.el-menu-item {
  font-size: 18px;
}

.el-menu-item:hover {
  background-color: #ffc947;
}

.chart {
  width: 100%;
  height: 600px;
}

.el-table {
  margin-top: 20px;
  max-height: 600px;
  overflow-y: auto;
}

.section-header {
  text-align: center;
  margin-top: 20px;
}

.section-title {
  font-size: 24px;
  font-weight: bold;
}

.section-title-color {
  color: #006e54;
}
</style>
