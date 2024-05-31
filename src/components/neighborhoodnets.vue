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
            :default-openeds="defaultOpeneds"
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
                            @click="
                              handleNodeClick(region, index, dIndex, tIndex, rIndex)
                            "
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
        <el-main ref="mainContainer">
          <div class="file-grid">
            <div v-for="file in otherFiles" :key="file" class="file-item">
              <img :src="file" alt="file" class="file-image" />
            </div>
          </div>
          <div v-if="specialFile" class="special-file">
            <img :src="specialFile" alt="special file" class="file-image" />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
import * as XLSX from "xlsx";
import Menus from "../layout/menu-item";

export default {
  components: {
    Menus,
  },
  data() {
    return {
      treeData: [],
      specialFile: null,
      otherFiles: [],
      defaultOpeneds: [], // 新增此属性用于默认展开菜单
    };
  },
  created() {
    this.loadExcelData();
  },
  methods: {
    async loadExcelData() {
      try {
        const response = await axios.get("/neighborhood_network/datasets.xlsx", {
          responseType: "arraybuffer",
        });
        const data = new Uint8Array(response.data);
        const workbook = XLSX.read(data, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        this.treeData = this.buildTree(jsonData);
        this.defaultOpeneds = this.generateDefaultOpeneds(); // 调用方法生成默认展开的菜单项
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
    generateDefaultOpeneds() {
      const openeds = [];
      this.treeData.forEach((tech, techIndex) => {
        openeds.push(String(techIndex));
        tech.children.forEach((dataset, datasetIndex) => {
          openeds.push(`${techIndex}-${datasetIndex}`);
          dataset.children.forEach((tissue, tissueIndex) => {
            openeds.push(`${techIndex}-${datasetIndex}-${tissueIndex}`);
            tissue.children.forEach((region, regionIndex) => {
              openeds.push(`${techIndex}-${datasetIndex}-${tissueIndex}-${regionIndex}`);
            });
          });
        });
      });
      return openeds;
    },
    async handleNodeClick(region, index, dIndex, tIndex, rIndex) {
      const path = this.getNodePath(region, index, dIndex, tIndex, rIndex);
      if (path.length === 4) {
        const [technology, dataset, tissue, regionLabel] = path;
        const folderPath = `neighborhood_network/${technology}/${dataset}/${tissue}/${regionLabel}`;
        console.log(`Requesting files from path: ${folderPath}`); // 打印路径以进行调试
        await this.loadFiles(folderPath);
      }
    },
    getNodePath(node, index, dIndex, tIndex, rIndex) {
      const path = [];
      let currentNode = this.treeData[index];
      path.push(currentNode.label);

      currentNode = currentNode.children[dIndex];
      path.push(currentNode.label);

      currentNode = currentNode.children[tIndex];
      path.push(currentNode.label);

      currentNode = currentNode.children[rIndex];
      path.push(currentNode.label);

      return path;
    },
    async loadFiles(folderPath) {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/files?path=${encodeURIComponent(folderPath)}`
        );
        const files = response.data;
        this.specialFile = null;
        this.otherFiles = [];

        files.forEach((file) => {
          const filePath = `${folderPath}/${file}`;
          console.log(`Loading file: ${filePath}`); // 打印文件路径以进行调试

          if (file === "neighborhood_network.png") {
            this.specialFile = `http://localhost:3000/${filePath}`;
          } else {
            this.otherFiles.push(`http://localhost:3000/${filePath}`);
          }
        });
      } catch (error) {
        console.error("Error loading files:", error);
      }
    },
    handleOpen(key, keyPath) {
      console.log("open:", key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log("close:", key, keyPath);
    },
  },
};
</script>

<style scoped>
.el-aside {
  background-color: #f9f9f9;
}
.aside-custom {
  overflow-y: auto;
  height: calc(100vh - 60px);
}
.file-grid {
  display: flex;
  flex-wrap: wrap;
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
  border: 2px solid #f00;
  text-align: center;
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
}
.special-file .file-image {
  max-width: 100%;
  height: auto;
}
</style>
