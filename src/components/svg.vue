<template>
  <div id="app">
    <el-container>
      <el-header>
        <Menus />
      </el-header>
      <el-container>
        <el-aside width="300px" class="aside-custom">
          <el-menu
            :default-active="defaultActive"
            :default-openeds="defaultOpeneds"
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
          <div v-if="tableData.length">
            <el-table :data="paginatedData" style="width: 100%" class="custom-table">
              <el-table-column
                v-for="column in tableColumns"
                :key="column"
                :prop="column"
                :label="column"
              />
            </el-table>
            <el-pagination
              background
              layout="prev, pager, next"
              :total="tableData.length"
              :page-size="pageSize"
              @current-change="handlePageChange"
            />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
import * as XLSX from "xlsx";
import Menus from "../layout/menu-item"; // 导入Menus组件

export default {
  components: {
    Menus, // 注册Menus组件
  },
  data() {
    return {
      treeData: [],
      defaultActive: "0-0-0-0",
      defaultOpeneds: ["0", "0-0", "0-0-0"],
      defaultProps: {
        children: "children",
        label: "label",
      },
      tableData: [], // 存储表格数据
      tableColumns: [], // 存储表格列
      currentPage: 1, // 当前页
      pageSize: 15, // 每页条数
    };
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
        this.setDefaultOpenAndActive(jsonData);
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
    setDefaultOpenAndActive(data) {
      if (data.length > 0) {
        const firstRow = data[0];
        const { Technology, Dataset, Tissue, Region } = firstRow;

        const technologyIndex = this.treeData.findIndex(
          (tech) => tech.label === Technology
        );
        const datasetIndex = this.treeData[technologyIndex].children.findIndex(
          (dataset) => dataset.label === Dataset
        );
        const tissueIndex = this.treeData[technologyIndex].children[
          datasetIndex
        ].children.findIndex((tissue) => tissue.label === Tissue);
        const regionIndex = this.treeData[technologyIndex].children[
          datasetIndex
        ].children[tissueIndex].children.findIndex((region) => region.label === Region);

        this.defaultOpeneds = [
          String(technologyIndex),
          `${technologyIndex}-${datasetIndex}`,
          `${technologyIndex}-${datasetIndex}-${tissueIndex}`,
        ];
        this.defaultActive = `${technologyIndex}-${datasetIndex}-${tissueIndex}-${regionIndex}`;

        this.$nextTick(() => {
          const regionNode = this.treeData[technologyIndex].children[datasetIndex]
            .children[tissueIndex].children[regionIndex];
          this.handleNodeClick(regionNode);
        });
      }
    },
    async handleNodeClick(region) {
      const path = this.getNodePath(region);
      console.log("Node path:", path); // 调试信息
      if (path.length === 4) {
        const [technology, dataset, tissue, regionLabel] = path;
        const filePath = `/svg/${technology}/${dataset}/${tissue}/${regionLabel}/svg.tsv`;
        console.log("File path:", filePath); // 调试信息
        try {
          const response = await axios.get(filePath);
          const tsvData = response.data;
          this.parseTsvData(tsvData);
        } catch (error) {
          console.error("Error loading TSV data:", error);
        }
      }
    },
    parseTsvData(tsvData) {
      const rows = tsvData.split("\n");
      const columns = rows[0].split("\t");
      const data = rows.slice(1).map((row) => {
        const values = row.split("\t");
        const rowData = {};
        columns.forEach((col, index) => {
          rowData[col] = values[index];
        });
        return rowData;
      });
      this.tableColumns = columns;
      this.tableData = data;
      this.currentPage = 1;
    },
    getNodePath(node) {
      const path = [];
      while (node) {
        path.unshift(node.label);
        node = node.parent;
      }
      return path;
    },
    handlePageChange(page) {
      this.currentPage = page;
    },
  },
  computed: {
    paginatedData() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.tableData.slice(start, end);
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
  background-color: #ffc947; /* 设置悬停背景颜色 */
}

.custom-table .el-table {
  border: 1px solid #e0e0e0; /* 表格边框 */
}

.custom-table .el-table__header-wrapper th,
.custom-table .el-table__body-wrapper td {
  border: 1px solid #e0e0e0; /* 单元格边框 */
}
</style>
