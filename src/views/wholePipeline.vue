<template>
  <el-container>
    <el-header>
      <Menus />
    </el-header>
    <el-main
      style="display: flex; flex-direction: column; align-items: center; font-size: 23px"
    >
      <div style="width: 1600px; margin-left: 250px">
        <el-card style="max-width: 480px; margin-bottom: 90px">
          <template #header>
            <div class="card-header">
              <span style="font-weight: bold">Whole Pipeline Details</span>
            </div>
          </template>
          <p class="text item">Technology: {{ technology }}</p>
          <p class="text item">Dataset: {{ dataset }}</p>
          <p class="text item">Tissue: {{ tissue }}</p>
          <p class="text item">Region: {{ region }}</p>
        </el-card>
        <div class="section-header">
          <h2 class="section-title section-title-color">Statistics</h2>
        </div>
        <div style="display: flex; justify-content: space-between; margin-top: 180px">
          <div id="cellTypeChart" style="width: 800px; height: 400px"></div>
          <div id="neighborChart" style="width: 800px; height: 400px"></div>
        </div>
        <div class="section-header">
          <h2 class="section-title section-title-color">Cell Type Visualization</h2>
        </div>
        <div style="display: flex; justify-content: center; margin-top: 90px">
          <img
            :src="cellTypeImageSrc"
            alt="Cell Type Visualization"
            style="width: 1000px; height: auto"
          />
        </div>
        <div class="section-header">
          <h2 class="section-title section-title-color">Neighborhood Analysis</h2>
        </div>
        <div style="display: flex; justify-content: center; margin-top: 90px">
          <img
            :src="neighborImageSrc"
            alt="Neighborhood Visualization"
            style="width: 1000px; height: auto"
          />
        </div>
        <!-- Heatmap Section -->
        <div class="section-header">
          <h2 class="section-title section-title-color">Heatmap</h2>
        </div>
        <div class="heatmap-container">
          <div ref="heatmap" class="heatmap-chart"></div>
        </div>
        <!-- Other Images Section -->
        <div class="section-header" style="margin-top: 90px">
          <h2 class="section-title section-title-color">Neighborhood Networks</h2>
        </div>
        <div class="file-grid" style="margin-top: 90px">
          <div v-for="file in otherFiles" :key="file" class="file-item">
            <img :src="file" alt="file" class="file-image" />
          </div>
          <div v-if="specialFile" class="special-file">
            <img :src="specialFile" alt="special file" class="file-image" />
          </div>
        </div>
        <!-- Spatial Proximity Section -->
        <div class="section-header" style="margin-top: 90px">
          <h2 class="section-title section-title-color">Spatial Proximity</h2>
        </div>
        <div style="display: flex; justify-content: center; margin-top: 90px">
          <div v-for="imagePath in selectedImagePaths" :key="imagePath" class="file-item">
            <img :src="imagePath" alt="proximity image" class="file-image" />
          </div>
        </div>
        <!-- Marker Protein Visualization Section -->
        <div class="section-header" style="margin-top: 90px">
          <h2 class="section-title section-title-color">Marker Protein Visualization</h2>
        </div>
        <el-card class="box-card">
          <div class="image-container">
            <img
              :src="markerImagePath"
              alt="Marker Protein Visualization"
              class="file-image"
            />
          </div>
        </el-card>
        <!-- Multi-modal Integration Section -->
        <div class="section-header" style="margin-top: 90px">
          <h2 class="section-title section-title-color">Multi-modal Integration</h2>
        </div>
        <div style="display: flex; justify-content: center; margin-top: 90px">
          <div
            v-for="imagePath in multiModalImagePaths"
            :key="imagePath"
            class="file-item"
          >
            <img
              :src="imagePath"
              alt="multi-modal integration image"
              class="file-image"
            />
          </div>
        </div>
        <!-- Spatial Variable Gene Section -->
        <div class="section-header" style="margin-top: 90px">
          <h2 class="section-title section-title-color">Spatial Variable Gene</h2>
        </div>
        <div style="margin-left: 100px; width: 1000px">
          <el-table :data="currentTableData" style="width: 100%">
            <el-table-column
              v-for="header in tableHeaders"
              :key="header"
              :prop="header"
              :label="header"
              width="200"
            />
          </el-table>
          <el-pagination
            style="margin-top: 20px"
            background
            layout="prev, pager, next"
            :total="tableData.length"
            :page-size="10"
            @current-change="handlePageChange"
          />
        </div>
        <!-- Cell-cell Interaction Section -->
        <div class="section-header" style="margin-top: 90px">
          <h2 class="section-title section-title-color">Cell-cell Interaction</h2>
        </div>
        <div
          class="chart-container"
          ref="chart"
          style="width: 1000px; height: 600px"
        ></div>
        <div style="margin-top: 20px; width: 1500px">
          <el-table
            :data="currentInteractionData"
            style="width: 100%; height: 500px; overflow-y: auto"
          >
            <el-table-column prop="ligand" label="ligand" width="200" />
            <el-table-column prop="receptor" label="receptor" width="200" />
            <el-table-column prop="value" label="interaction score" width="200" />
            <el-table-column prop="source" label="source" width="200" />
            <el-table-column prop="target" label="target" width="200" />
            <el-table-column prop="tissue" label="tissue" width="200" />
            <el-table-column prop="region" label="region" width="200" />
          </el-table>
          <el-pagination
            style="margin-top: 20px"
            background
            layout="prev, pager, next"
            :total="interactionData.length"
            :page-size="10"
            @current-change="handleInteractionPageChange"
          />
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import axios from "axios";
import * as echarts from "echarts";
import Menus from "../layout/menu-item";

export default {
  components: {
    Menus,
  },
  data() {
    return {
      cellTypeImageSrc: "",
      neighborImageSrc: "",
      heatmapData: [],
      heatmapColumns: [],
      heatmapRows: [],
      specialFile: null,
      otherFiles: [],
      selectedImagePaths: [],
      markerImagePath: "",
      multiModalImagePaths: [],
      tableData: [],
      tableHeaders: [],
      currentPage: 1,
      pageSize: 10,
      interactionData: [],
      interactionHeaders: [],
      interactionPage: 1,
      interactionPageSize: 10,
    };
  },
  computed: {
    technology() {
      return this.$route.query.Technology;
    },
    dataset() {
      return this.$route.query.Dataset;
    },
    tissue() {
      return this.$route.query.Tissue;
    },
    region() {
      return this.$route.query.Region;
    },
    currentTableData() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = this.currentPage * this.pageSize;
      return this.tableData.slice(start, end);
    },
    currentInteractionData() {
      const start = (this.interactionPage - 1) * this.interactionPageSize;
      const end = this.interactionPage * this.interactionPageSize;
      return this.interactionData.slice(start, end);
    },
  },
  watch: {
    "$route.query": {
      handler(newQuery) {
        console.log("New query parameters:", newQuery);
        if (
          newQuery.Technology &&
          newQuery.Dataset &&
          newQuery.Tissue &&
          newQuery.Region
        ) {
          this.updateCharts(newQuery);
          this.updateImages(newQuery);
          this.loadOtherFiles(newQuery);
          this.loadSpatialProximityImages(newQuery);
          this.loadMarkerImage(newQuery);
          this.loadMultiModalImages(newQuery);
          this.loadTableData(newQuery);
          this.loadGraphData(newQuery); // Load Cell-cell Interaction data
        } else {
          console.error("Missing query parameters:", newQuery);
        }
      },
      immediate: true,
    },
  },
  methods: {
    async updateCharts(query) {
      const basePath = `statistics/${query.Technology}/${query.Dataset}/${query.Tissue}`;

      const cellTypeData = await this.loadTsvFile(`${basePath}/cell_type.tsv`);
      const cellTypeFiltered = cellTypeData.filter((row) => row.Region === query.Region);

      const neighborData = await this.loadTsvFile(`${basePath}/neighbor.tsv`);
      const neighborFiltered = neighborData.filter((row) => row.Region === query.Region);

      this.drawChart("cellTypeChart", "Cell Type", cellTypeFiltered);
      this.drawChart("neighborChart", "Neighbor", neighborFiltered);
    },
    async loadTsvFile(filePath) {
      const response = await axios.get(filePath);
      const lines = response.data.split("\n");
      const headers = lines[0].split("\t");
      return lines.slice(1).map((line) => {
        const data = line.split("\t");
        return headers.reduce((obj, header, index) => {
          obj[header] = data[index];
          return obj;
        }, {});
      });
    },
    drawChart(chartId, title, data) {
      const chart = echarts.init(document.getElementById(chartId));
      const seriesData = Object.keys(data[0])
        .filter((key) => key !== "Region")
        .map((key) => {
          return { value: data[0][key], name: key };
        });

      const option = {
        title: {
          text: title,
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          left: "center",
          top: "bottom",
          data: seriesData.map((item) => item.name),
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: title,
            type: "pie",
            radius: [20, 140],
            center: ["50%", "50%"],
            roseType: "radius",
            itemStyle: {
              borderRadius: 5,
            },
            label: {
              show: false,
            },
            emphasis: {
              label: {
                show: true,
              },
            },
            data: seriesData,
          },
        ],
      };
      chart.setOption(option);
    },
    async updateImages(query) {
      const imagePath = `datasets/${query.Technology}/${query.Dataset}/${query.Tissue}/${query.Region}`;
      this.cellTypeImageSrc = `${imagePath}/celltype.png`;
      this.neighborImageSrc = `${imagePath}/neighborhood.png`;
      await this.loadHeatmapData(
        query.Technology,
        query.Dataset,
        query.Tissue,
        query.Region
      );
    },
    async loadHeatmapData(technology, dataset, tissue, region) {
      try {
        const response = await axios.get(
          `/datasets/${technology}/${dataset}/${tissue}/fc.tsv`,
          { responseType: "text" }
        );
        const rows = response.data.split("\n").map((row) => row.split("\t"));
        const headers = rows[0];
        const data = rows.slice(1);

        const heatmapData = [];
        const heatmapColumns = headers.slice(1);
        const heatmapRows = data.map((row) => row[0]);

        data.forEach((row, rowIndex) => {
          row.slice(1).forEach((value, colIndex) => {
            heatmapData.push([colIndex, rowIndex, parseFloat(value)]);
          });
        });

        const standardizedData = this.standardizeHeatmapData(heatmapData);

        this.heatmapData = standardizedData;
        this.heatmapColumns = heatmapColumns;
        this.heatmapRows = heatmapRows;

        this.$nextTick(() => {
          this.renderHeatmap();
        });
      } catch (error) {
        console.error("Error loading heatmap data:", error);
      }
    },
    standardizeHeatmapData(data) {
      const values = data.map((item) => item[2]);
      const min = Math.min(...values);
      const max = Math.max(...values);
      return data.map((item) => {
        const normalizedValue = ((item[2] - min) / (max - min)) * 2 - 1;
        return [item[0], item[1], parseFloat(normalizedValue.toFixed(2))];
      });
    },
    renderHeatmap() {
      if (this.$refs.heatmap) {
        const heatmap = echarts.init(this.$refs.heatmap);
        const option = {
          tooltip: {
            position: "top",
          },
          grid: {
            height: "70%",
            width: "70%",
            top: "10%",
            left: "15%",
          },
          xAxis: {
            type: "category",
            data: this.heatmapColumns,
            splitArea: {
              show: true,
            },
            axisLabel: {
              interval: 0,
              rotate: 30,
            },
          },
          yAxis: {
            type: "category",
            data: this.heatmapRows,
            splitArea: {
              show: true,
            },
          },
          visualMap: {
            min: -1,
            max: 1,
            calculable: true,
            orient: "horizontal",
            left: "center",
            top: "10%",
            color: ["#006E54", "#FCBB7B"],
          },
          series: [
            {
              name: "Heatmap",
              type: "heatmap",
              data: this.heatmapData,
              label: {
                show: true,
                formatter: ({ value }) => value[2],
              },
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
        };
        heatmap.setOption(option);
      } else {
        console.error("Heatmap DOM element not found.");
      }
    },
    async loadOtherFiles(query) {
      const folderPath = `neighborhood_network/${query.Technology}/${query.Dataset}/${query.Tissue}/${query.Region}`;
      try {
        const response = await axios.get(
          `http://localhost:3000/api/files?path=${encodeURIComponent(folderPath)}`
        );
        const files = response.data;
        this.specialFile = null;
        this.otherFiles = [];

        files.forEach((file) => {
          const filePath = `${folderPath}/${file}`;
          if (file === "neighborhood_network.png") {
            this.specialFile = filePath;
          } else {
            this.otherFiles.push(filePath);
          }
        });
      } catch (error) {
        console.error("Error loading files:", error);
      }
    },
    async loadSpatialProximityImages(query) {
      const imagePathBase = `/proximity/${query.Technology}/${query.Dataset}/${query.Tissue}/${query.Region}/`;
      console.log("Image paths:", [
        `${imagePathBase}proximity_celltype.png`,
        `${imagePathBase}proximity_neighborhood.png`,
      ]); // 调试信息
      this.selectedImagePaths = [
        `${imagePathBase}proximity_celltype.png`,
        `${imagePathBase}proximity_neighborhood.png`,
      ];
    },
    async loadMarkerImage(query) {
      const imagePathBase = `/marker_viz/${query.Technology}/${query.Dataset}/${query.Tissue}/${query.Region}/`;
      console.log("Image paths:", [`${imagePathBase}marker_viz.png`]); // 调试信息
      this.markerImagePath = `${imagePathBase}marker_viz.png`;
    },
    async loadMultiModalImages(query) {
      const imagePathBase = `/multi_inte/${query.Technology}/${query.Dataset}/${query.Tissue}/${query.Region}/`;
      console.log("Image paths:", [
        `${imagePathBase}protein_celltype_umap.png`,
        `${imagePathBase}protein_neighbor_umap.png`,
      ]); // 调试信息
      this.multiModalImagePaths = [
        `${imagePathBase}protein_celltype_umap.png`,
        `${imagePathBase}protein_neighbor_umap.png`,
      ];
    },
    async loadTableData(query) {
      const filePath = `/svg/${query.Technology}/${query.Dataset}/${query.Tissue}/${query.Region}/svg.tsv`;
      try {
        const response = await axios.get(filePath);
        const lines = response.data.split("\n");
        const headers = lines[0].split("\t");
        const data = lines.slice(1).map((line) => {
          const row = line.split("\t");
          return headers.reduce((obj, header, index) => {
            obj[header] = row[index];
            return obj;
          }, {});
        });
        this.tableHeaders = headers;
        this.tableData = data;
      } catch (error) {
        console.error("Error loading table data:", error);
      }
    },
    async loadGraphData(query) {
      const graphFilePath = `/cci/${query.Technology}/${query.Dataset}/${query.Tissue}/${query.Region}/graph.txt`;
      const resultsFilePath = `/cci/${query.Technology}/${query.Dataset}/${query.Tissue}/${query.Region}/results.txt`;
      try {
        const [graphResponse, resultsResponse] = await Promise.all([
          axios.get(graphFilePath),
          axios.get(resultsFilePath),
        ]);

        const graphData = this.parseGraphData(graphResponse.data);
        this.drawGraph(graphData);

        const lines = resultsResponse.data.split("\n");
        const headers = lines[0].split("\t");
        const data = lines.slice(1).map((line) => {
          const row = line.split("\t");
          return headers.reduce((obj, header, index) => {
            obj[header] = row[index];
            return obj;
          }, {});
        });
        this.interactionHeaders = headers;
        this.interactionData = data;
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
          text: "Interaction Graph",
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

      const chart = echarts.init(this.$refs.chart);
      chart.setOption(option);
      chart.on("click", (params) => {
        if (params.dataType === "edge") {
          const { source, target } = params.data;
          this.loadEdgeTableData(source, target);
        }
      });
    },
    async loadEdgeTableData(source, target) {
      this.interactionData = this.interactionData.filter(
        (row) => row.source === source && row.target === target
      );
      this.interactionPage = 1; // 重置分页到第一页
    },
    handlePageChange(page) {
      this.currentPage = page;
    },
    handleInteractionPageChange(page) {
      this.interactionPage = page;
    },
    getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
  },
};
</script>

<style>
.section-header {
  text-align: center;
  margin-top: 20px;
  background-color: #006e54;
}

.section-title {
  display: inline-block;
  padding: 0 10px;
  font-size: 23px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fcbb7b;
}

.section-title-color {
  color: #fbe051;
}

.heatmap-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 750px;
  margin-top: 40px;
}

.heatmap-chart {
  width: 90%;
  height: 100%;
}

.file-grid {
  display: flex;
  flex-wrap: wrap;
  margin-top: 90px;
}

.file-item {
  width: 50%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
}

.file-image {
  max-width: 100%;
  height: auto;
}

.special-file {
  margin-top: 20px;
  padding: 10px;
  border: 2px solid #fff;
  text-align: center;
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
}

.special-file .file-image {
  max-width: 100%;
  height: auto;
}

.box-card {
  width: 100%;
  overflow: auto;
  padding: 20px;
  max-height: 500px; /* 设置最大高度，加入滚动条 */
}

.image-container {
  height: 500px; /* 设置固定高度 */
  overflow: auto; /* 启用滚动条 */
}

.section-content {
  margin: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
}
.chart-container {
  width: 100%;
  height: 600px;
  margin-top: 20px;
}
</style>
