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
          <el-main
            style="
              margin-left: auto;
              width: 1650px;
              margin-right: auto;
              font-size: 23px;
              margin-top: -50px;
              text-align: center;
            "
          >
            <h1
              class="title"
              style="
                background-color: #006e54;
                color: #fcbb7b;
                text-align: center;
                margin: 20px 0 10px 97px;
                padding: 10px 0 40px 0;
                width: 1400px;
                height: 20px;
                float: left;
              "
            >
              Neighborhood Network for Spatial Communication
            </h1>
            <p
              style="
                color: #000;
                text-align: left;
                margin: 10px 0 10px 97px;
                width: 1400px;
                float: left;
              "
            >
              In neighborhood identification, we manually annotated the neighborhood
              components present in each tissue region. To explore the potential spatial
              communication between different neighborhood components within the tissue,
              we identified the spatial community network present in each region.

              <br /><br />
              Here, we performed neighborhood communication network for each sample. Using
              the previously identified neighborhood labels, we segmented each individual
              cellular neighborhood (CN) to examine which neighborhood components are
              spatially clustered together. By disassembling and aggregating all
              neighborhoods, we mapped out the corresponding neighborhood spatial
              communication network.

              <br /><br />
              <el-tooltip
                content="Schürch CM, Bhate SS, Barlow GL, Phillips DJ, Noti L, Zlobec I, Chu P, Black S, Demeter J, McIlwain DR, Kinoshita S, Samusik N, Goltsev Y, Nolan GP. Coordinated Cellular Neighborhoods Orchestrate Antitumoral Immunity at the Colorectal Cancer Invasive Front. Cell. 2020 Sep 3"
              >
                <el-button>
                  <a
                    href="https://www.cell.com/cell/fulltext/S0092-8674(20)30870-9"
                    target="_blank"
                    style="color: inherit; text-decoration: none"
                  >
                    citation
                  </a>
                </el-button>
              </el-tooltip>
            </p>
            <div style="text-align: center">
              <img src="images/neighbor_net.png" fit="fill" />
            </div>
          </el-main>
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
      defaultActive: "0-0-0-0",
      defaultOpeneds: ["0", "0-0", "0-0-0"],
      specialFile: null,
      otherFiles: [],
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
        this.$nextTick(() => {
          this.setDefaultOpenAndActive(jsonData);
        });
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
          this.handleNodeClick(
            regionNode,
            technologyIndex,
            datasetIndex,
            tissueIndex,
            regionIndex
          );
        });
      }
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
  border: 2px solid #ddd;
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
