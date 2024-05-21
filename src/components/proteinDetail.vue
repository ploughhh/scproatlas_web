<!-- eslint-disable no-debugger -->
<!-- eslint-disable no-debugger -->
<template>
  <el-container>
    <el-header>
      <Menus />
    </el-header>
    <el-main style="
        margin-left: auto;
        width: 1400px;
        margin-right: auto;
        font-size: 16.5px;
        margin-top: 10px;
        margin-bottom: 10px;
      ">
      <div>
        <h1 class="title"
          style="background-color: #248067;margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">
          Detail information of {{ route.query.Species + " " + route.query.Tissue }}
        </h1>
      </div>
      <div>
        <div style="margin-left: 75px; width: 100%px; height: 800px; margin-right: auto; float: left;">
          <el-table :data="firtableData" border :show-header="false" fit :row-style="{ height: '65px' }">
            <el-table-column sortable prop="col11" width="380"></el-table-column>
            <el-table-column sortable prop="col12" width="720"></el-table-column>
          </el-table>
        </div>
      </div>
      <h3 class="title"
          style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">
          The proteins show differential expression between age group in {{ route.query.Species + route.query.Tissue }} proteome
          <img src="../../public/images/icon/question.png"
            style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image"
            @mouseenter="isHoveringtable1 = true" @mouseleave="isHoveringtable1 = false">
          <div v-if="isHoveringtable1"
            style="position: relative; margin-left: 1224px; top: -60px; left: -1190px; height: 69px; width: 91%; background-color: #303133;">
            <p
              style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
              The differential expression analysis of protein between age group is performed using Limma package. The significant level is set as p&lt;0.05.
            </p>
          </div>
        </h3>
      <div>
        <el-form :model="diffform" label-width="160px" :inline="true">
          <el-form-item label="protein name">
            <el-input class="myInput" v-model="diffform.Taxonomy" style="width: 140px" />
          </el-form-item>
          <el-form-item>
            <el-button style="margin-right: 20px;" type="primary" @click="diffSubmit">Search</el-button>
            <el-button @click="Clean">Clean</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="proteindifftableData" style="width: 1290px; font-size: 18px">
          <!-- <el-table-column :prop="item" :label="item" v-for="item in clos" :key="item" width="167" /> -->
          <el-table-column sortable prop="Uniprot_entry" label="Uniprot_entry" width="241"></el-table-column>
          <el-table-column sortable prop="Taxonomy" label="Name"></el-table-column>
          <el-table-column sortable prop="Category" label="Category" width="241"></el-table-column>
          <el-table-column sortable prop="P_Value" label="P.Value" ></el-table-column>
          <el-table-column sortable prop="adj_P_Val" label="adj.P.Val" ></el-table-column>
          <el-table-column sortable prop="logFC" label="logFC" width="241"></el-table-column>
          <el-table-column sortable prop="Up_or_down" label="Up_or_down" width="243"></el-table-column>
          <!-- <el-table-column width="340" label='Genes' prop='Gene_symbol'>
            <template v-slot='scope'>
                <el-button @click='search(gene, scope.row.Tissue)' type="text" v-for="gene in scope.row.Gene_symbol" :key="gene">{{gene}}</el-button>
            </template>
          </el-table-column> -->
        </el-table>
        <el-pagination small @current-change="proteindiffhandelChange" :current-page="diffform.currentPage" :page-size="diffform.limit"
          background :total="diffform.total" layout="prev, pager, next" class="mt-4" style="margin-left: 5%" />
      </div>
      <div>
        <h1 class="title"
          style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">
          The proteins with age correlation in {{ route.query.Species + route.query.Tissue }} proteome
          <img src="../../public/images/icon/question.png"
            style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image"
            @mouseenter="isHoveringtable2 = true" @mouseleave="isHoveringtable2 = false">
          <div v-if="isHoveringtable2"
            style="position: relative; margin-left: 1224px; top: -60px; left: -1190px; height: 69px; width: 91%; background-color: #303133;">
            <p
              style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
              Spearman correlation was performed between sample age and protein expression profile. Only proteins with significant age correlation (p&lt;0.05) will be shown here.
            </p>
          </div>
        </h1>
        <el-form :model="corform" label-width="160px" :inline="true">
          <el-form-item label="protein name">
            <el-input class="myInput" v-model="corform.Taxonomy" style="width: 140px" />
          </el-form-item>
          <el-form-item label="Uniprot entry">
            <el-input class="myInput" v-model="corform.Uniprot_entry" style="width: 140px" />
          </el-form-item>
          <el-form-item>
            <el-button style="margin-right: 20px;" type="primary" @click="corSubmit">Search</el-button>
            <el-button @click="corClean">Clean</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="proteincortableData" style="width: 1290px; font-size: 18px">
          <!-- <el-table-column :prop="item" :label="item" v-for="item in clos" :key="item" width="167" /> -->
            <el-table-column sortable prop="Uniprot_entry" label="Uniprot_entry" width="241"></el-table-column>
            <el-table-column sortable prop="Taxonomy" label="Name" width="241"></el-table-column>
            <el-table-column sortable prop="Animal" label="Animal" width="241"></el-table-column>
            <el-table-column sortable prop="Tissue" label="Tissue" width="241"></el-table-column>
            <el-table-column sortable prop="r_value" label="r_value"></el-table-column>
            <el-table-column sortable prop="p_value" label="p_value"></el-table-column>

          <!-- <el-table-column width="340" label='Genes' prop='Gene_symbol'>
            <template v-slot='scope'>
                <el-button @click='search(gene, scope.row.Tissue)' type="text" v-for="gene in scope.row.Gene_symbol" :key="gene">{{gene}}</el-button>
            </template>
          </el-table-column> -->
        </el-table>
        <el-pagination small @current-change="corhandelChange" :current-page="corform.currentPage" :page-size="corform.limit"
          background :total="corform.total" layout="prev, pager, next" class="mt-4" style="margin-left: 5%" />
      </div>
      <h1 class="title"
          style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">
          Aging-related protein interaction network
          <img src="../../public/images/icon/question.png"
            style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image"
            @mouseenter="isHoveringgraph = true" @mouseleave="isHoveringgraph = false">
          <div v-if="isHoveringgraph"
            style="position: relative; margin-left: 1224px; top: -60px; left: -1190px; height: 69px; width: 91%; background-color: #303133;">
            <p
              style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
              The interaction network of aging-related protein is identified using STRING database. Only top 80 interactions will be left in the graph because of the visualization.
            </p>
          </div>
        </h1>
        <span style="color: #9b9a9a;">It may due to an excessive amount of data, the chart cannot be loaded. Please refresh and try again.</span>
      <div id="graph" style="margin-top: 50px; margin-bottom: 30px; width: 100%; height:800px; float: left;">
        </div>
      <h1 class="title"
          style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">
          Enrichment pathways of aging-related proteins
          <img src="../../public/images/icon/question.png"
            style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image"
            @mouseenter="isHoveringpic = true" @mouseleave="isHoveringpic = false">
          <div v-if="isHoveringpic"
            style="position: relative; margin-left: 1224px; top: -60px; left: -1190px; height: 69px; width: 91%; background-color: #303133;">
            <p
              style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
              The enriched GO pathways of aging-related protein are performed using clusterProfiler. Only pathways with significant level p&lt;0.05 will be left in the figure.
            </p>
          </div>
        </h1>
        <div class="diversity" style="margin-bottom: 10px; width: 100%; height:666px; float: left;">
          <img class="diversity-left" style="margin: 20px 0 0 292px; width: 864px; height: 648px;"
            :src="require('../../public/images/protein_picture/1/enrich-GO.png')" alt="#">
        </div>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue"
import Menus from "../layout/menu-item"
import { useRoute } from "vue-router"
import { getproteincor, getproteindiff,
  Num1echartsData,
  Num2echartsData,
  Num3echartsData, 
 Num4echartsData,
 Num5echartsData,
 Num6echartsData, 
 Num7echartsData,
 Num8echartsData,
 Num9echartsData,
 Num10echartsData,
 Num11echartsData,
   Num12echartsData,
 Num13echartsData,
   Num14echartsData,
   Num15echartsData, 
   Num16echartsData,
Num17echartsData,
} from "@/api/proteinDetail"

const echarts = require("echarts/lib/echarts")
require("echarts/lib/component/title")
require("echarts/lib/component/tooltip")
require("echarts/lib/component/legend")
require("echarts/lib/chart/graph")
const isHoveringtable1 = ref(false)
const isHoveringtable2 = ref(false)
const isHoveringgraph = ref(false)
const isHoveringpic = ref(false)
const route = useRoute()
// get information
// const sctableData = ref([])
const proteindifftableData = ref([])
const proteincortableData = ref([])
const clos = ref([])
// const scpages = reactive({
//   currentPage: 1,
//   limit: 20,
//   total: 0
// })
let cellList = ref([])
let firtableData = []
let sectableData = []

// 第一个表
const diffform = reactive({
  Uniprot_entry: "",
  Taxonomy: "",
  Animal: "",
  Tissue: "",
  r_value: "",
  p_value: "",
  Category: "",
  P_Value_sed: "",
  adj_P_Val: "",
  logFC: "",
  Up_or_down: "",
  Dataset_ID: "",
  ProjectID: "",
  Pubmed: "",
  currentPage: 1,
  limit: 20,
  total: 0,
  Dataset_ID: route.query.Num,
  // currentPage: pages.value.currentPage
})
const protein = async (query) => {
  // eslint-disable-next-line no-debugger
  const res = await getproteindiff(query)
  proteindifftableData.value = res.data.rows
  diffform.total = res.data.count
}

const proteindiffhandelChange = (val) => {
  diffform.currentPage = val
  protein(diffform)
}
const diffSubmit = () => {
  diffform.currentPage = 1
  protein(diffform)
}

protein(diffform)

const Clean = () => {
  diffform.Taxonomy = ""
  diffform.Tissue = ""
  diffform.Cell_type = ""
  diffform.Category = ""
  diffform.Pvalue = ""
  diffform.Padj = ""
  diffform.Log2FC = ""
  diffform.Up_or_down = ""
  diffform.Cell_type_specific = ""
  diffform.Tissue_specific = ""
  diffform.Species_specific = ""
  diffform.currentPage = 1
  protein(diffform)
}

const pages = ref()

pages.value = {
  limit: 20,
  currentPage: 1,
  total: 20
}
// 第二个表
const corform = reactive({
  Uniprot_entry: "",
  Taxonomy: "",
  Animal: "",
  Tissue: "",
  r_value: "",
  p_value: "",
  currentPage: 1,
  limit: 20,
  total: 0,
  Dataset_ID: route.query.Num,
  currentPage: pages.value.currentPage
})

const protein2 = async (query) => {
  // eslint-disable-next-line no-debugger
  const res = await getproteincor(query)
  proteincortableData.value = res.data.rows
  corform.total = res.data.count
}

const corhandelChange = (val) => {
  corform.currentPage = val
  protein2(corform)
}
const corSubmit = () => {
  corform.currentPage = 1
  protein2(corform)
}

protein2(corform)

const corClean = () => {
  corform.Taxonomy = ""
  corform.Tissue = ""
  corform.Animal = ""
  corform.p_value = ""
  corform.r_value = ""
  corform.Uniprot_entry = ""
  protein2(corform)
}

const pages2 = ref()

pages2.value = {
  limit: 20,
  currentPage: 1,
  total: 20
}


switch (route.query.Num) {
  case "AMO-PT-001":
    firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-PT-001'
  },
  {
    col11: "Accession",
    col12: 'PXD012307'
  },
  {
    col11: "Database",
    col12: 'PRIDE partner repository'
  },
  {
    col11: "Publication",
    col12: 'An atlas of the aging lung mapped by single cell transcriptomics and deep tissue proteomics'
  },
  {
    col11: "Year",
    col12: '2019'
  },
  {
    col11: "Pubmed",
    col12: '30814501'
  },
  {
    col11: "Species",
    col12: 'Mouse'
  },
  {
    col11: "Tissue",
    col12: 'Lung proteome'
  },
  {
    col11: "Data type",
    col12: 'LC-MS'
  },
  {
    col11: "Sample size",
    col12: '8'
  },
  {
    col11: "Age group",
    col12: 'Young: 3 months; Aged: 24 months'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '4'
  }]
  onMounted(() => {
    // // 配置关系图选项
    // const option = Num10graph()
    // // 初始化 ECharts 实例
    // const myChart = echarts.init(document.getElementById('graph'))
    // // 使用上面配置项显示图表
    // myChart.setOption(option)
    // 初始化echarts实例
    const myChart = echarts.init(document.getElementById("graph"))

    // 将数据通过 #node1 名称分组
    const groupData = Num1echartsData().reduce(
      (accumulator, currentItem) => {
        if (!accumulator[currentItem["#node1"]]) {
          accumulator[currentItem["#node1"]] = []
        }
        accumulator[currentItem["#node1"]].push(currentItem)
        return accumulator
      },
      {}
    )

    // 处理节点 和 边数据
    const handleData = (data) => {
      const arr = []
      for (const key in data) {
        // 组数据
        arr.push({
          id: key,
          name: key,
          symbolSize: 35,
          target: key,

          lineStyle: {
            width: 7,
            curveness: 0.3,
            opacity: 0.5
          }
        })
        // 子数据
        data[key] &&
          // eslint-disable-next-line array-callback-return
          data[key].map((v, i) => {
            arr.push({
              source: key,
              id: key + i,
              target: key + i,
              name: v.node2,
              symbolSize: 20,
              value: v.combined_score || 0,
              lineStyle: {
                width: ~~(((v.combined_score || 0) * 10) / 2) || 1,
                curveness: 0.3,
                opacity: 0.5
              }
            })
          })
      }
      return arr
    }

    const data = handleData(groupData)

    // 定义节点数据
    const nodes = [...data]

    // 定义边数据
    const links = [...data]
    console.log('nodes: ', nodes)

    console.log('links: ', links)
    // 渲染图表
    myChart.setOption({
      series: [
        {
          zoom: 1.2,
          draggable: true,
          roam: true,
          type: "graph",
          layout: "force",
          force: {
            repulsion: 50,
            edgeLength: 150
          },
          label: {
            show: true,
            fontSize: 18,
            position: 'right',
            color: 'black'
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: function (links) {
              return links.value
            }
          },
          data: nodes.slice(0, 1),
          links: links.slice(0, 1)
        }
      ]
    })

    let dataIndex = 1

    // 动态添加数据
    const setTime = setInterval(() => {
      if (dataIndex >= data.length) {
        clearInterval(setTime)
        return
      }
      dataIndex++
      myChart.setOption({
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 50,
              edgeLength: 150
            },
            label: {
              show: true,
              fontSize: 18,
              position: 'right',
              color: 'black'
            },
            data: nodes.slice(0, dataIndex),
            links: links.slice(0, dataIndex)
          }
        ]
      })
    }, 50)
  })
  break;
  case "AMO-PT-002":
    firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-PT-002'
  },
  {
    col11: "Accession",
    col12: 'PXD005229'
  },
  {
    col11: "Database",
    col12: 'ProteomeX-change'
  },
  {
    col11: "Publication",
    col12: 'The use of urinary proteomics in the assessment of suitability of mouse models for ageing'
  },
  {
    col11: "Year",
    col12: '2017'
  },
  {
    col11: "Pubmed",
    col12: '28199320'
  },
  {
    col11: "Species",
    col12: 'Mouse'
  },
  {
    col11: "Tissue",
    col12: 'Urinary proteome'
  },
  {
    col11: "Data type",
    col12: 'LC-MS'
  },
  {
    col11: "Sample size",
    col12: '89'
  },
  {
    col11: "Age group",
    col12: 'Young: 4-12w；Aged: 48、61、84、96w'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '4'
  }]
  onMounted(() => {
    const myChart = echarts.init(document.getElementById("graph"))
    const groupData = Num2echartsData().reduce(
      (accumulator, currentItem) => {
        if (!accumulator[currentItem["#node1"]]) {
          accumulator[currentItem["#node1"]] = []
        }
        accumulator[currentItem["#node1"]].push(currentItem)
        return accumulator
      },
      {}
    )
    const handleData = (data) => {
      const arr = []
      for (const key in data) {
        arr.push({
          id: key,
          name: key,
          symbolSize: 35,
          target: key,

          lineStyle: {
            width: 7,
            curveness: 0.3,
            opacity: 0.5
          }
        })
        data[key] &&
          // eslint-disable-next-line array-callback-return
          data[key].map((v, i) => {
            arr.push({
              source: key,
              id: key + i,
              target: key + i,
              name: v.node2,
              symbolSize: 20,
              value: v.combined_score || 0,
              lineStyle: {
                width: ~~(((v.combined_score || 0) * 10) / 2) || 1,
                curveness: 0.3,
                opacity: 0.5
              }
            })
          })
      }
      return arr
    }
    const data = handleData(groupData)
    const nodes = [...data]
    const links = [...data]
    myChart.setOption({
      series: [
        {
          zoom: 1.2,
          draggable: true,
          roam: true,
          type: "graph",
          layout: "force",
          force: {
            repulsion: 50,
            edgeLength: 150
          },
          label: {
            show: true,
            fontSize: 18,
            position: 'right',
            color: 'black'
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: function (links) {
              return links.value
            }
          },
          data: nodes.slice(0, 1),
          links: links.slice(0, 1)
        }
      ]
    })
    let dataIndex = 1
    const setTime = setInterval(() => {
      if (dataIndex >= data.length) {
        clearInterval(setTime)
        return
      }
      dataIndex++
      myChart.setOption({
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 50,
              edgeLength: 150
            },
            label: {
              show: true,
              fontSize: 18,
              position: 'right',
              color: 'black'
            },
            data: nodes.slice(0, dataIndex),
            links: links.slice(0, dataIndex)
          }
        ]
      })
    }, 50)
  })
  break;
  case "AMO-PT-003":
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-PT-003'
  },
  {
    col11: "Accession",
    col12: 'PXD001364'
  },
  {
    col11: "Database",
    col12: 'PRIDE partner repository'
  },
  {
    col11: "Publication",
    col12: 'Widespread Proteome Remodeling and Aggregation in Aging C. elegans'
  },
  {
    col11: "Year",
    col12: '2015'
  },
  {
    col11: "Pubmed",
    col12: '25957690'
  },
  {
    col11: "Species",
    col12: 'C. elegans'
  },
  {
    col11: "Tissue",
    col12: 'Whole body proteome'
  },
  {
    col11: "Data type",
    col12: 'LC-MS'
  },
  {
    col11: "Sample size",
    col12: '15'
  },
  {
    col11: "Age group",
    col12: 'Young: 1d, 6d；old: 12, 17, 22d'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '0.16'
  }]
  onMounted(() => {
    const myChart = echarts.init(document.getElementById("graph"))
    const groupData = Num3echartsData().reduce(
      (accumulator, currentItem) => {
        if (!accumulator[currentItem["#node1"]]) {
          accumulator[currentItem["#node1"]] = []
        }
        accumulator[currentItem["#node1"]].push(currentItem)
        return accumulator
      },
      {}
    )
    const handleData = (data) => {
      const arr = []
      for (const key in data) {
        arr.push({
          id: key,
          name: key,
          symbolSize: 35,
          target: key,

          lineStyle: {
            width: 7,
            curveness: 0.3,
            opacity: 0.5
          }
        })
        data[key] &&
          // eslint-disable-next-line array-callback-return
          data[key].map((v, i) => {
            arr.push({
              source: key,
              id: key + i,
              target: key + i,
              name: v.node2,
              symbolSize: 20,
              value: v.combined_score || 0,
              lineStyle: {
                width: ~~(((v.combined_score || 0) * 10) / 2) || 1,
                curveness: 0.3,
                opacity: 0.5
              }
            })
          })
      }
      return arr
    }
    const data = handleData(groupData)
    const nodes = [...data]
    const links = [...data]
    myChart.setOption({
      series: [
        {
          zoom: 1.2,
          draggable: true,
          roam: true,
          type: "graph",
          layout: "force",
          force: {
            repulsion: 50,
            edgeLength: 150
          },
          label: {
            show: true,
            fontSize: 18,
            position: 'right',
            color: 'black'
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: function (links) {
              return links.value
            }
          },
          data: nodes.slice(0, 1),
          links: links.slice(0, 1)
        }
      ]
    })
    let dataIndex = 1
    const setTime = setInterval(() => {
      if (dataIndex >= data.length) {
        clearInterval(setTime)
        return
      }
      dataIndex++
      myChart.setOption({
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 50,
              edgeLength: 150
            },
            label: {
              show: true,
              fontSize: 18,
              position: 'right',
              color: 'black'
            },
            data: nodes.slice(0, dataIndex),
            links: links.slice(0, dataIndex)
          }
        ]
      })
    }, 50)
  })
  break;
  case "AMO-PT-004":
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-PT-004'
  },
  {
    col11: "Accession",
    col12: 'PXD024844'
  },
  {
    col11: "Database",
    col12: 'PRIDE partner repository'
  },
  {
    col11: "Publication",
    col12: 'Age-Related Alterations in the Testicular Proteome of a Non-Human Primate'
  },
  {
    col11: "Year",
    col12: '2021'
  },
  {
    col11: "Pubmed",
    col12: '34074003'
  },
  {
    col11: "Species",
    col12: 'Callithrix jacchus'
  },
  {
    col11: "Tissue",
    col12: 'Testicular proteome'
  },
  {
    col11: "Data type",
    col12: 'LC-MS'
  },
  {
    col11: "Sample size",
    col12: '10'
  },
  {
    col11: "Age group",
    col12: 'Middle age：2.8 ± 0.6 (SD) years old; Old age：11.2 ± 0.7 (SD) years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '16'
  }
]
onMounted(() => {
    const myChart = echarts.init(document.getElementById("graph"))
    const groupData = Num4echartsData().reduce(
      (accumulator, currentItem) => {
        if (!accumulator[currentItem["#node1"]]) {
          accumulator[currentItem["#node1"]] = []
        }
        accumulator[currentItem["#node1"]].push(currentItem)
        return accumulator
      },
      {}
    )
    const handleData = (data) => {
      const arr = []
      for (const key in data) {
        arr.push({
          id: key,
          name: key,
          symbolSize: 35,
          target: key,

          lineStyle: {
            width: 7,
            curveness: 0.3,
            opacity: 0.5
          }
        })
        data[key] &&
          // eslint-disable-next-line array-callback-return
          data[key].map((v, i) => {
            arr.push({
              source: key,
              id: key + i,
              target: key + i,
              name: v.node2,
              symbolSize: 20,
              value: v.combined_score || 0,
              lineStyle: {
                width: ~~(((v.combined_score || 0) * 10) / 2) || 1,
                curveness: 0.3,
                opacity: 0.5
              }
            })
          })
      }
      return arr
    }
    const data = handleData(groupData)
    const nodes = [...data]
    const links = [...data]
    myChart.setOption({
      series: [
        {
          zoom: 1.2,
          draggable: true,
          roam: true,
          type: "graph",
          layout: "force",
          force: {
            repulsion: 50,
            edgeLength: 150
          },
          label: {
            show: true,
            fontSize: 18,
            position: 'right',
            color: 'black'
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: function (links) {
              return links.value
            }
          },
          data: nodes.slice(0, 1),
          links: links.slice(0, 1)
        }
      ]
    })
    let dataIndex = 1
    const setTime = setInterval(() => {
      if (dataIndex >= data.length) {
        clearInterval(setTime)
        return
      }
      dataIndex++
      myChart.setOption({
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 50,
              edgeLength: 150
            },
            label: {
              show: true,
              fontSize: 18,
              position: 'right',
              color: 'black'
            },
            data: nodes.slice(0, dataIndex),
            links: links.slice(0, dataIndex)
          }
        ]
      })
    }, 50)
  })
  break;
  case "AMO-PT-005":
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-PT-005'
  },
  {
    col11: "Accession",
    col12: 'MSV000089683'
  },
  {
    col11: "Database",
    col12: 'MassIVE '
  },
  {
    col11: "Publication",
    col12: 'Proteomic analysis reveals that aging rabbit vocal folds are more vulnerable to changes caused by systemic dehydration'
  },
  {
    col11: "Year",
    col12: '2022'
  },
  {
    col11: "Pubmed",
    col12: '36411412'
  },
  {
    col11: "Species",
    col12: 'Rabit'
  },
  {
    col11: "Tissue",
    col12: 'Vocal folds proteome'
  },
  {
    col11: "Data type",
    col12: 'LC-MS'
  },
  {
    col11: "Sample size",
    col12: '22'
  },
  {
    col11: "Age group",
    col12: 'Young：6.5 months old; Aged：0 3.2–3.7 years old '
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '13'
  }]
  onMounted(() => {
    const myChart = echarts.init(document.getElementById("graph"))
    const groupData = Num5echartsData().reduce(
      (accumulator, currentItem) => {
        if (!accumulator[currentItem["#node1"]]) {
          accumulator[currentItem["#node1"]] = []
        }
        accumulator[currentItem["#node1"]].push(currentItem)
        return accumulator
      },
      {}
    )
    const handleData = (data) => {
      const arr = []
      for (const key in data) {
        arr.push({
          id: key,
          name: key,
          symbolSize: 35,
          target: key,

          lineStyle: {
            width: 7,
            curveness: 0.3,
            opacity: 0.5
          }
        })
        data[key] &&
          // eslint-disable-next-line array-callback-return
          data[key].map((v, i) => {
            arr.push({
              source: key,
              id: key + i,
              target: key + i,
              name: v.node2,
              symbolSize: 20,
              value: v.combined_score || 0,
              lineStyle: {
                width: ~~(((v.combined_score || 0) * 10) / 2) || 1,
                curveness: 0.3,
                opacity: 0.5
              }
            })
          })
      }
      return arr
    }
    const data = handleData(groupData)
    const nodes = [...data]
    const links = [...data]
    myChart.setOption({
      series: [
        {
          zoom: 1.2,
          draggable: true,
          roam: true,
          type: "graph",
          layout: "force",
          force: {
            repulsion: 50,
            edgeLength: 150
          },
          label: {
            show: true,
            fontSize: 18,
            position: 'right',
            color: 'black'
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: function (links) {
              return links.value
            }
          },
          data: nodes.slice(0, 1),
          links: links.slice(0, 1)
        }
      ]
    })
    let dataIndex = 1
    const setTime = setInterval(() => {
      if (dataIndex >= data.length) {
        clearInterval(setTime)
        return
      }
      dataIndex++
      myChart.setOption({
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 50,
              edgeLength: 150
            },
            label: {
              show: true,
              fontSize: 18,
              position: 'right',
              color: 'black'
            },
            data: nodes.slice(0, dataIndex),
            links: links.slice(0, dataIndex)
          }
        ]
      })
    }, 50)
  })
  break;
  case "AMO-PT-006":
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-PT-006'
  },
  {
    col11: "Accession",
    col12: 'N.A.'
  },
  {
    col11: "Database",
    col12: 'N.A.'
  },
  {
    col11: "Publication",
    col12: 'Proteome changes in the aging Drosophila melanogaster head'
  },
  {
    col11: "Year",
    col12: '2018'
  },
  {
    col11: "Pubmed",
    col12: '30906200'
  },
  {
    col11: "Species",
    col12: 'Drosophila melanogaster '
  },
  {
    col11: "Tissue",
    col12: 'Brain proteome'
  },
  {
    col11: "Data type",
    col12: 'LC-MS'
  },
  {
    col11: "Sample size",
    col12: '27'
  },
  {
    col11: "Age group",
    col12: 'Young--0, 5, 10, 15 days; Aged: 20, 25, 30days'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '0.3'
  }]
  onMounted(() => {
    const myChart = echarts.init(document.getElementById("graph"))
    const groupData = Num6echartsData().reduce(
      (accumulator, currentItem) => {
        if (!accumulator[currentItem["#node1"]]) {
          accumulator[currentItem["#node1"]] = []
        }
        accumulator[currentItem["#node1"]].push(currentItem)
        return accumulator
      },
      {}
    )
    const handleData = (data) => {
      const arr = []
      for (const key in data) {
        arr.push({
          id: key,
          name: key,
          symbolSize: 35,
          target: key,

          lineStyle: {
            width: 7,
            curveness: 0.3,
            opacity: 0.5
          }
        })
        data[key] &&
          // eslint-disable-next-line array-callback-return
          data[key].map((v, i) => {
            arr.push({
              source: key,
              id: key + i,
              target: key + i,
              name: v.node2,
              symbolSize: 20,
              value: v.combined_score || 0,
              lineStyle: {
                width: ~~(((v.combined_score || 0) * 10) / 2) || 1,
                curveness: 0.3,
                opacity: 0.5
              }
            })
          })
      }
      return arr
    }
    const data = handleData(groupData)
    const nodes = [...data]
    const links = [...data]
    myChart.setOption({
      series: [
        {
          zoom: 1.2,
          draggable: true,
          roam: true,
          type: "graph",
          layout: "force",
          force: {
            repulsion: 50,
            edgeLength: 150
          },
          label: {
            show: true,
            fontSize: 18,
            position: 'right',
            color: 'black'
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: function (links) {
              return links.value
            }
          },
          data: nodes.slice(0, 1),
          links: links.slice(0, 1)
        }
      ]
    })
    let dataIndex = 1
    const setTime = setInterval(() => {
      if (dataIndex >= data.length) {
        clearInterval(setTime)
        return
      }
      dataIndex++
      myChart.setOption({
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 50,
              edgeLength: 150
            },
            label: {
              show: true,
              fontSize: 18,
              position: 'right',
              color: 'black'
            },
            data: nodes.slice(0, dataIndex),
            links: links.slice(0, dataIndex)
          }
        ]
      })
    }, 50)
  })
  break;
  case "AMO-PT-007":
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-PT-007'
  },
  {
    col11: "Accession",
    col12: 'PXD011398'
  },
  {
    col11: "Database",
    col12: 'ProteomeX-change'
  },
  {
    col11: "Publication",
    col12: 'Proteomics profiling and pathway analysis of hippocampal aging in rhesus monkeys'
  },
  {
    col11: "Year",
    col12: '2020'
  },
  {
    col11: "Pubmed",
    col12: '31941443'
  },
  {
    col11: "Species",
    col12: 'Rhesus monkeys'
  },
  {
    col11: "Tissue",
    col12: 'Brain proteome'
  },
  {
    col11: "Data type",
    col12: '2-plex tandem mass tag (TMT) labeling'
  },
  {
    col11: "Sample size",
    col12: '6'
  },
  {
    col11: "Age group",
    col12: 'Young: 6.01±0.60  years old; Aged: 19.97±0.66 years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '40'
  }]
  onMounted(() => {
    const myChart = echarts.init(document.getElementById("graph"))
    const groupData = Num7echartsData().reduce(
      (accumulator, currentItem) => {
        if (!accumulator[currentItem["#node1"]]) {
          accumulator[currentItem["#node1"]] = []
        }
        accumulator[currentItem["#node1"]].push(currentItem)
        return accumulator
      },
      {}
    )
    const handleData = (data) => {
      const arr = []
      for (const key in data) {
        arr.push({
          id: key,
          name: key,
          symbolSize: 35,
          target: key,

          lineStyle: {
            width: 7,
            curveness: 0.3,
            opacity: 0.5
          }
        })
        data[key] &&
          // eslint-disable-next-line array-callback-return
          data[key].map((v, i) => {
            arr.push({
              source: key,
              id: key + i,
              target: key + i,
              name: v.node2,
              symbolSize: 20,
              value: v.combined_score || 0,
              lineStyle: {
                width: ~~(((v.combined_score || 0) * 10) / 2) || 1,
                curveness: 0.3,
                opacity: 0.5
              }
            })
          })
      }
      return arr
    }
    const data = handleData(groupData)
    const nodes = [...data]
    const links = [...data]
    myChart.setOption({
      series: [
        {
          zoom: 1.2,
          draggable: true,
          roam: true,
          type: "graph",
          layout: "force",
          force: {
            repulsion: 50,
            edgeLength: 150
          },
          label: {
            show: true,
            fontSize: 18,
            position: 'right',
            color: 'black'
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: function (links) {
              return links.value
            }
          },
          data: nodes.slice(0, 1),
          links: links.slice(0, 1)
        }
      ]
    })
    let dataIndex = 1
    const setTime = setInterval(() => {
      if (dataIndex >= data.length) {
        clearInterval(setTime)
        return
      }
      dataIndex++
      myChart.setOption({
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 50,
              edgeLength: 150
            },
            label: {
              show: true,
              fontSize: 18,
              position: 'right',
              color: 'black'
            },
            data: nodes.slice(0, dataIndex),
            links: links.slice(0, dataIndex)
          }
        ]
      })
    }, 50)
  })
  break;
  case "AMO-PT-008":
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-PT-008'
  },
  {
    col11: "Accession",
    col12: 'PXD034950'
  },
  {
    col11: "Database",
    col12: 'ProteomeX-change'
  },
  {
    col11: "Publication",
    col12: 'Proteomic characteristics of plasma and blood cells in natural aging rhesus monkeys'
  },
  {
    col11: "Year",
    col12: '2022'
  },
  {
    col11: "Pubmed",
    col12: '36037246'
  },
  {
    col11: "Species",
    col12: 'Rhesus monkeys'
  },
  {
    col11: "Tissue",
    col12: 'Plasma'
  },
  {
    col11: "Data type",
    col12: 'LC-MS'
  },
  {
    col11: "Sample size",
    col12: '8'
  },
  {
    col11: "Age group",
    col12: 'Young:6 years old; Aged: 20 years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '40'
  }]
  onMounted(() => {
    const myChart = echarts.init(document.getElementById("graph"))
    const groupData = Num8echartsData().reduce(
      (accumulator, currentItem) => {
        if (!accumulator[currentItem["#node1"]]) {
          accumulator[currentItem["#node1"]] = []
        }
        accumulator[currentItem["#node1"]].push(currentItem)
        return accumulator
      },
      {}
    )
    const handleData = (data) => {
      const arr = []
      for (const key in data) {
        arr.push({
          id: key,
          name: key,
          symbolSize: 35,
          target: key,

          lineStyle: {
            width: 7,
            curveness: 0.3,
            opacity: 0.5
          }
        })
        data[key] &&
          // eslint-disable-next-line array-callback-return
          data[key].map((v, i) => {
            arr.push({
              source: key,
              id: key + i,
              target: key + i,
              name: v.node2,
              symbolSize: 20,
              value: v.combined_score || 0,
              lineStyle: {
                width: ~~(((v.combined_score || 0) * 10) / 2) || 1,
                curveness: 0.3,
                opacity: 0.5
              }
            })
          })
      }
      return arr
    }
    const data = handleData(groupData)
    const nodes = [...data]
    const links = [...data]
    myChart.setOption({
      series: [
        {
          zoom: 1.2,
          draggable: true,
          roam: true,
          type: "graph",
          layout: "force",
          force: {
            repulsion: 50,
            edgeLength: 150
          },
          label: {
            show: true,
            fontSize: 18,
            position: 'right',
            color: 'black'
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: function (links) {
              return links.value
            }
          },
          data: nodes.slice(0, 1),
          links: links.slice(0, 1)
        }
      ]
    })
    let dataIndex = 1
    const setTime = setInterval(() => {
      if (dataIndex >= data.length) {
        clearInterval(setTime)
        return
      }
      dataIndex++
      myChart.setOption({
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 50,
              edgeLength: 150
            },
            label: {
              show: true,
              fontSize: 18,
              position: 'right',
              color: 'black'
            },
            data: nodes.slice(0, dataIndex),
            links: links.slice(0, dataIndex)
          }
        ]
      })
    }, 50)
  })
  break;
  case "AMO-PT-009":
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-PT-009'
  },
  {
    col11: "Accession",
    col12: 'PXD034950'
  },
  {
    col11: "Database",
    col12: 'ProteomeX-change'
  },
  {
    col11: "Publication",
    col12: 'Proteomic characteristics of plasma and blood cells in natural aging rhesus monkeys'
  },
  {
    col11: "Year",
    col12: '2022'
  },
  {
    col11: "Pubmed",
    col12: '36037246'
  },
  {
    col11: "Species",
    col12: 'Rhesus monkeys'
  },
  {
    col11: "Tissue",
    col12: 'Blood cells'
  },
  {
    col11: "Data type",
    col12: 'LC-MS'
  },
  {
    col11: "Sample size",
    col12: '8'
  },
  {
    col11: "Age group",
    col12: 'Young: 4 to 8 years old; Aged: 20-35 years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '40'
  }]
  onMounted(() => {
    const myChart = echarts.init(document.getElementById("graph"))
    const groupData = Num9echartsData().reduce(
      (accumulator, currentItem) => {
        if (!accumulator[currentItem["#node1"]]) {
          accumulator[currentItem["#node1"]] = []
        }
        accumulator[currentItem["#node1"]].push(currentItem)
        return accumulator
      },
      {}
    )
    const handleData = (data) => {
      const arr = []
      for (const key in data) {
        arr.push({
          id: key,
          name: key,
          symbolSize: 35,
          target: key,

          lineStyle: {
            width: 7,
            curveness: 0.3,
            opacity: 0.5
          }
        })
        data[key] &&
          // eslint-disable-next-line array-callback-return
          data[key].map((v, i) => {
            arr.push({
              source: key,
              id: key + i,
              target: key + i,
              name: v.node2,
              symbolSize: 20,
              value: v.combined_score || 0,
              lineStyle: {
                width: ~~(((v.combined_score || 0) * 10) / 2) || 1,
                curveness: 0.3,
                opacity: 0.5
              }
            })
          })
      }
      return arr
    }
    const data = handleData(groupData)
    const nodes = [...data]
    const links = [...data]
    myChart.setOption({
      series: [
        {
          zoom: 1.2,
          draggable: true,
          roam: true,
          type: "graph",
          layout: "force",
          force: {
            repulsion: 50,
            edgeLength: 150
          },
          label: {
            show: true,
            fontSize: 18,
            position: 'right',
            color: 'black'
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: function (links) {
              return links.value
            }
          },
          data: nodes.slice(0, 1),
          links: links.slice(0, 1)
        }
      ]
    })
    let dataIndex = 1
    const setTime = setInterval(() => {
      if (dataIndex >= data.length) {
        clearInterval(setTime)
        return
      }
      dataIndex++
      myChart.setOption({
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 50,
              edgeLength: 150
            },
            label: {
              show: true,
              fontSize: 18,
              position: 'right',
              color: 'black'
            },
            data: nodes.slice(0, dataIndex),
            links: links.slice(0, dataIndex)
          }
        ]
      })
    }, 50)
  })
  break;
  case "AMO-PT-010":
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-PT-010'
  },
  {
    col11: "Accession",
    col12: 'PXD009212'
  },
  {
    col11: "Database",
    col12: 'ProteomeX-change'
  },
  {
    col11: "Publication",
    col12: 'Proteome profiling in the hippocampus, medial prefrontal cortex, and striatum of aging rat'
  },
  {
    col11: "Year",
    col12: '2018'
  },
  {
    col11: "Pubmed",
    col12: '29981398'
  },
  {
    col11: "Species",
    col12: 'Rat'
  },
  {
    col11: "Tissue",
    col12: 'Brain (hippocampus) proteome'
  },
  {
    col11: "Data type",
    col12: 'LC-MS'
  },
  {
    col11: "Sample size",
    col12: '4'
  },
  {
    col11: "Age group",
    col12: '14months，18months，23 months and 27months'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '4'
  }]
  onMounted(() => {
    // // 配置关系图选项
    // const option = Num10graph()
    // // 初始化 ECharts 实例
    // const myChart = echarts.init(document.getElementById('graph'))
    // // 使用上面配置项显示图表
    // myChart.setOption(option)
    // 初始化echarts实例
    const myChart = echarts.init(document.getElementById("graph"))

    // 将数据通过 #node1 名称分组
    const groupData = Num10echartsData().reduce(
      (accumulator, currentItem) => {
        if (!accumulator[currentItem["#node1"]]) {
          accumulator[currentItem["#node1"]] = []
        }
        accumulator[currentItem["#node1"]].push(currentItem)
        return accumulator
      },
      {}
    )

    // 处理节点 和 边数据
    const handleData = (data) => {
      const arr = []
      for (const key in data) {
        // 组数据
        arr.push({
          id: key,
          name: key,
          symbolSize: 35,
          target: key,

          lineStyle: {
            width: 7,
            curveness: 0.3,
            opacity: 0.5
          }
        })
        // 子数据
        data[key] &&
          // eslint-disable-next-line array-callback-return
          data[key].map((v, i) => {
            arr.push({
              source: key,
              id: key + i,
              target: key + i,
              name: v.node2,
              symbolSize: 20,
              value: v.combined_score || 0,
              lineStyle: {
                width: ~~(((v.combined_score || 0) * 10) / 2) || 1,
                curveness: 0.3,
                opacity: 0.5
              }
            })
          })
      }
      return arr
    }

    const data = handleData(groupData)

    // 定义节点数据
    const nodes = [...data]

    // 定义边数据
    const links = [...data]
    console.log('nodes: ', nodes)

    console.log('links: ', links)
    // 渲染图表
    myChart.setOption({
      series: [
        {
          zoom: 1.2,
          draggable: true,
          roam: true,
          type: "graph",
          layout: "force",
          force: {
            repulsion: 50,
            edgeLength: 150
          },
          label: {
            show: true,
            fontSize: 18,
            position: 'right',
            color: 'black'
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: function (links) {
              return links.value
            }
          },
          data: nodes.slice(0, 1),
          links: links.slice(0, 1)
        }
      ]
    })

    let dataIndex = 1

    // 动态添加数据
    const setTime = setInterval(() => {
      if (dataIndex >= data.length) {
        clearInterval(setTime)
        return
      }
      dataIndex++
      myChart.setOption({
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 50,
              edgeLength: 150
            },
            label: {
              show: true,
              fontSize: 18,
              position: 'right',
              color: 'black'
            },
            data: nodes.slice(0, dataIndex),
            links: links.slice(0, dataIndex)
          }
        ]
      })
    }, 50)
  })
  break;
  case "AMO-PT-011":
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-PT-011'
  },
  {
    col11: "Accession",
    col12: 'PXD009212'
  },
  {
    col11: "Database",
    col12: 'ProteomeX-change'
  },
  {
    col11: "Publication",
    col12: 'Proteome profiling in the hippocampus, medial prefrontal cortex, and striatum of aging rat'
  },
  {
    col11: "Year",
    col12: '2018'
  },
  {
    col11: "Pubmed",
    col12: '29981398'
  },
  {
    col11: "Species",
    col12: 'Rat'
  },
  {
    col11: "Tissue",
    col12: 'Brain (medial prefrontal cortex) proteome'
  },
  {
    col11: "Data type",
    col12: 'LC-MS'
  },
  {
    col11: "Sample size",
    col12: '4'
  },
  {
    col11: "Age group",
    col12: '14months，18months，23 months and 27months'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '4'
  }]
  onMounted(() => {
    const myChart = echarts.init(document.getElementById("graph"))
    const groupData = Num11echartsData().reduce(
      (accumulator, currentItem) => {
        if (!accumulator[currentItem["#node1"]]) {
          accumulator[currentItem["#node1"]] = []
        }
        accumulator[currentItem["#node1"]].push(currentItem)
        return accumulator
      },
      {}
    )
    const handleData = (data) => {
      const arr = []
      for (const key in data) {
        arr.push({
          id: key,
          name: key,
          symbolSize: 35,
          target: key,

          lineStyle: {
            width: 7,
            curveness: 0.3,
            opacity: 0.5
          }
        })
        data[key] &&
          // eslint-disable-next-line array-callback-return
          data[key].map((v, i) => {
            arr.push({
              source: key,
              id: key + i,
              target: key + i,
              name: v.node2,
              symbolSize: 20,
              value: v.combined_score || 0,
              lineStyle: {
                width: ~~(((v.combined_score || 0) * 10) / 2) || 1,
                curveness: 0.3,
                opacity: 0.5
              }
            })
          })
      }
      return arr
    }
    const data = handleData(groupData)
    const nodes = [...data]
    const links = [...data]
    myChart.setOption({
      series: [
        {
          zoom: 1.2,
          draggable: true,
          roam: true,
          type: "graph",
          layout: "force",
          force: {
            repulsion: 50,
            edgeLength: 150
          },
          label: {
            show: true,
            fontSize: 18,
            position: 'right',
            color: 'black'
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: function (links) {
              return links.value
            }
          },
          data: nodes.slice(0, 1),
          links: links.slice(0, 1)
        }
      ]
    })
    let dataIndex = 1
    const setTime = setInterval(() => {
      if (dataIndex >= data.length) {
        clearInterval(setTime)
        return
      }
      dataIndex++
      myChart.setOption({
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 50,
              edgeLength: 150
            },
            label: {
              show: true,
              fontSize: 18,
              position: 'right',
              color: 'black'
            },
            data: nodes.slice(0, dataIndex),
            links: links.slice(0, dataIndex)
          }
        ]
      })
    }, 50)
  })
  break;
  case "AMO-PT-012":
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-PT-012'
  },
  {
    col11: "Accession",
    col12: 'PXD009212'
  },
  {
    col11: "Database",
    col12: 'ProteomeX-change'
  },
  {
    col11: "Publication",
    col12: 'Proteome profiling in the hippocampus, medial prefrontal cortex, and striatum of aging rat'
  },
  {
    col11: "Year",
    col12: '2018'
  },
  {
    col11: "Pubmed",
    col12: '29981398'
  },
  {
    col11: "Species",
    col12: 'Rat'
  },
  {
    col11: "Tissue",
    col12: 'Brain (striatum) proteome'
  },
  {
    col11: "Data type",
    col12: 'LC-MS'
  },
  {
    col11: "Sample size",
    col12: '4'
  },
  {
    col11: "Age group",
    col12: '14months，18months，23 months and 27months'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '4'
  }]
  onMounted(() => {
    const myChart = echarts.init(document.getElementById("graph"))
    const groupData = Num12echartsData().reduce(
      (accumulator, currentItem) => {
        if (!accumulator[currentItem["#node1"]]) {
          accumulator[currentItem["#node1"]] = []
        }
        accumulator[currentItem["#node1"]].push(currentItem)
        return accumulator
      },
      {}
    )
    const handleData = (data) => {
      const arr = []
      for (const key in data) {
        arr.push({
          id: key,
          name: key,
          symbolSize: 35,
          target: key,

          lineStyle: {
            width: 7,
            curveness: 0.3,
            opacity: 0.5
          }
        })
        data[key] &&
          // eslint-disable-next-line array-callback-return
          data[key].map((v, i) => {
            arr.push({
              source: key,
              id: key + i,
              target: key + i,
              name: v.node2,
              symbolSize: 20,
              value: v.combined_score || 0,
              lineStyle: {
                width: ~~(((v.combined_score || 0) * 10) / 2) || 1,
                curveness: 0.3,
                opacity: 0.5
              }
            })
          })
      }
      return arr
    }
    const data = handleData(groupData)
    const nodes = [...data]
    const links = [...data]
    myChart.setOption({
      series: [
        {
          zoom: 1.2,
          draggable: true,
          roam: true,
          type: "graph",
          layout: "force",
          force: {
            repulsion: 50,
            edgeLength: 150
          },
          label: {
            show: true,
            fontSize: 18,
            position: 'right',
            color: 'black'
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: function (links) {
              return links.value
            }
          },
          data: nodes.slice(0, 1),
          links: links.slice(0, 1)
        }
      ]
    })
    let dataIndex = 1
    const setTime = setInterval(() => {
      if (dataIndex >= data.length) {
        clearInterval(setTime)
        return
      }
      dataIndex++
      myChart.setOption({
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 50,
              edgeLength: 150
            },
            label: {
              show: true,
              fontSize: 18,
              position: 'right',
              color: 'black'
            },
            data: nodes.slice(0, dataIndex),
            links: links.slice(0, dataIndex)
          }
        ]
      })
    }, 50)
  })
  break;
  case "AMO-PT-013":
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-PT-013'
  },
  {
    col11: "Accession",
    col12: 'PXD012314'
  },
  {
    col11: "Database",
    col12: 'ProteomeX-change'
  },
  {
    col11: "Publication",
    col12: 'Reduced proteasome activity in the aging brain results in ribosome stoichiometry loss and aggregation'
  },
  {
    col11: "Year",
    col12: '2020'
  },
  {
    col11: "Pubmed",
    col12: '32558274'
  },
  {
    col11: "Species",
    col12: 'Nothobranchius furzeri'
  },
  {
    col11: "Tissue",
    col12: 'Brain proteome'
  },
  {
    col11: "Data type",
    col12: 'LC-MS'
  },
  {
    col11: "Sample size",
    col12: '14'
  },
  {
    col11: "Age group",
    col12: 'Young: 5 weeks post-hatching; Adult: 12 weeks post-hatching; Aged: 39 weeks post-hatching'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '1.1'
  }]
  onMounted(() => {
    const myChart = echarts.init(document.getElementById("graph"))
    const groupData = Num13echartsData().reduce(
      (accumulator, currentItem) => {
        if (!accumulator[currentItem["#node1"]]) {
          accumulator[currentItem["#node1"]] = []
        }
        accumulator[currentItem["#node1"]].push(currentItem)
        return accumulator
      },
      {}
    )
    const handleData = (data) => {
      const arr = []
      for (const key in data) {
        arr.push({
          id: key,
          name: key,
          symbolSize: 35,
          target: key,

          lineStyle: {
            width: 7,
            curveness: 0.3,
            opacity: 0.5
          }
        })
        data[key] &&
          // eslint-disable-next-line array-callback-return
          data[key].map((v, i) => {
            arr.push({
              source: key,
              id: key + i,
              target: key + i,
              name: v.node2,
              symbolSize: 20,
              value: v.combined_score || 0,
              lineStyle: {
                width: ~~(((v.combined_score || 0) * 10) / 2) || 1,
                curveness: 0.3,
                opacity: 0.5
              }
            })
          })
      }
      return arr
    }
    const data = handleData(groupData)
    const nodes = [...data]
    const links = [...data]
    myChart.setOption({
      series: [
        {
          zoom: 1.2,
          draggable: true,
          roam: true,
          type: "graph",
          layout: "force",
          force: {
            repulsion: 50,
            edgeLength: 150
          },
          label: {
            show: true,
            fontSize: 18,
            position: 'right',
            color: 'black'
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: function (links) {
              return links.value
            }
          },
          data: nodes.slice(0, 1),
          links: links.slice(0, 1)
        }
      ]
    })
    let dataIndex = 1
    const setTime = setInterval(() => {
      if (dataIndex >= data.length) {
        clearInterval(setTime)
        return
      }
      dataIndex++
      myChart.setOption({
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 50,
              edgeLength: 150
            },
            label: {
              show: true,
              fontSize: 18,
              position: 'right',
              color: 'black'
            },
            data: nodes.slice(0, dataIndex),
            links: links.slice(0, dataIndex)
          }
        ]
      })
    }, 50)
  })
  break;
  case "AMO-PT-014":
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-PT-014'
  },
  {
    col11: "Accession",
    col12: 'EGAS00001002555'
  },
  {
    col11: "Database",
    col12: 'EGA'
  },
  {
    col11: "Publication",
    col12: 'Undulating changes in human plasma proteome profiles across the lifespan'
  },
  {
    col11: "Year",
    col12: '2019'
  },
  {
    col11: "Pubmed",
    col12: '31806903'
  },
  {
    col11: "Species",
    col12: 'Human'
  },
  {
    col11: "Tissue",
    col12: 'Plasma proteome'
  },
  {
    col11: "Data type",
    col12: 'SOMAscan'
  },
  {
    col11: "Sample size",
    col12: '171'
  },
  {
    col11: "Age group",
    col12: 'Young: 21~60 years old; Aged: 61-107 years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '122.5'
  }]
  onMounted(() => {
    const myChart = echarts.init(document.getElementById("graph"))
    const groupData = Num14echartsData().reduce(
      (accumulator, currentItem) => {
        if (!accumulator[currentItem["#node1"]]) {
          accumulator[currentItem["#node1"]] = []
        }
        accumulator[currentItem["#node1"]].push(currentItem)
        return accumulator
      },
      {}
    )
    const handleData = (data) => {
      const arr = []
      for (const key in data) {
        arr.push({
          id: key,
          name: key,
          symbolSize: 35,
          target: key,

          lineStyle: {
            width: 7,
            curveness: 0.3,
            opacity: 0.5
          }
        })
        data[key] &&
          // eslint-disable-next-line array-callback-return
          data[key].map((v, i) => {
            arr.push({
              source: key,
              id: key + i,
              target: key + i,
              name: v.node2,
              symbolSize: 20,
              value: v.combined_score || 0,
              lineStyle: {
                width: ~~(((v.combined_score || 0) * 10) / 2) || 1,
                curveness: 0.3,
                opacity: 0.5
              }
            })
          })
      }
      return arr
    }
    const data = handleData(groupData)
    const nodes = [...data]
    const links = [...data]
    myChart.setOption({
      series: [
        {
          zoom: 1.2,
          draggable: true,
          roam: true,
          type: "graph",
          layout: "force",
          force: {
            repulsion: 50,
            edgeLength: 150
          },
          label: {
            show: true,
            fontSize: 18,
            position: 'right',
            color: 'black'
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: function (links) {
              return links.value
            }
          },
          data: nodes.slice(0, 1),
          links: links.slice(0, 1)
        }
      ]
    })
    let dataIndex = 1
    const setTime = setInterval(() => {
      if (dataIndex >= data.length) {
        clearInterval(setTime)
        return
      }
      dataIndex++
      myChart.setOption({
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 50,
              edgeLength: 150
            },
            label: {
              show: true,
              fontSize: 18,
              position: 'right',
              color: 'black'
            },
            data: nodes.slice(0, dataIndex),
            links: links.slice(0, dataIndex)
          }
        ]
      })
    }, 50)
  })
  break;
  case "AMO-PT-015":
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-PT-015'
  },
  {
    col11: "Accession",
    col12: 'MSV000085611'
  },
  {
    col11: "Database",
    col12: 'MassIVE '
  },
  {
    col11: "Publication",
    col12: 'High-throughput serum proteomics for the identification of protein biomarkers of mortality in older men'
  },
  {
    col11: "Year",
    col12: '2018'
  },
  {
    col11: "Pubmed",
    col12: '29399943'
  },
  {
    col11: "Species",
    col12: 'Human'
  },
  {
    col11: "Tissue",
    col12: 'Serum proteome'
  },
  {
    col11: "Data type",
    col12: 'SOMAscan'
  },
  {
    col11: "Sample size",
    col12: '1197'
  },
  {
    col11: "Age group",
    col12: 'Young: 73~79 years old; Aged: 80~84 years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '122.5'
  }]
  onMounted(() => {
    const myChart = echarts.init(document.getElementById("graph"))
    const groupData = Num15echartsData().reduce(
      (accumulator, currentItem) => {
        if (!accumulator[currentItem["#node1"]]) {
          accumulator[currentItem["#node1"]] = []
        }
        accumulator[currentItem["#node1"]].push(currentItem)
        return accumulator
      },
      {}
    )
    const handleData = (data) => {
      const arr = []
      for (const key in data) {
        arr.push({
          id: key,
          name: key,
          symbolSize: 35,
          target: key,

          lineStyle: {
            width: 7,
            curveness: 0.3,
            opacity: 0.5
          }
        })
        data[key] &&
          // eslint-disable-next-line array-callback-return
          data[key].map((v, i) => {
            arr.push({
              source: key,
              id: key + i,
              target: key + i,
              name: v.node2,
              symbolSize: 20,
              value: v.combined_score || 0,
              lineStyle: {
                width: ~~(((v.combined_score || 0) * 10) / 2) || 1,
                curveness: 0.3,
                opacity: 0.5
              }
            })
          })
      }
      return arr
    }
    const data = handleData(groupData)
    const nodes = [...data]
    const links = [...data]
    myChart.setOption({
      series: [
        {
          zoom: 1.2,
          draggable: true,
          roam: true,
          type: "graph",
          layout: "force",
          force: {
            repulsion: 50,
            edgeLength: 150
          },
          label: {
            show: true,
            fontSize: 18,
            position: 'right',
            color: 'black'
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: function (links) {
              return links.value
            }
          },
          data: nodes.slice(0, 1),
          links: links.slice(0, 1)
        }
      ]
    })
    let dataIndex = 1
    const setTime = setInterval(() => {
      if (dataIndex >= data.length) {
        clearInterval(setTime)
        return
      }
      dataIndex++
      myChart.setOption({
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 50,
              edgeLength: 150
            },
            label: {
              show: true,
              fontSize: 18,
              position: 'right',
              color: 'black'
            },
            data: nodes.slice(0, dataIndex),
            links: links.slice(0, dataIndex)
          }
        ]
      })
    }, 50)
  })
  break;
  case "AMO-PT-016":
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-PT-016'
  },
  {
    col11: "Accession",
    col12: 'syn24239844'
  },
  {
    col11: "Database",
    col12: 'Synapse'
  },
  {
    col11: "Publication",
    col12: 'Cellular and plasma proteomic determinants of COVID-19 and non-COVID-19 pulmonary diseases relative to healthy aging'
  },
  {
    col11: "Year",
    col12: '2021'
  },
  {
    col11: "Pubmed",
    col12: '37117829'
  },
  {
    col11: "Species",
    col12: 'Human'
  },
  {
    col11: "Tissue",
    col12: 'Plasma proteome'
  },
  {
    col11: "Data type",
    col12: 'SOMAscan'
  },
  {
    col11: "Sample size",
    col12: '153'
  },
  {
    col11: "Age group",
    col12: 'Young: 25~44 years old; Mid: 47~64 years old; Aged: 65~80 years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '122.5'
  }]
  onMounted(() => {
    const myChart = echarts.init(document.getElementById("graph"))
    const groupData = Num16echartsData().reduce(
      (accumulator, currentItem) => {
        if (!accumulator[currentItem["#node1"]]) {
          accumulator[currentItem["#node1"]] = []
        }
        accumulator[currentItem["#node1"]].push(currentItem)
        return accumulator
      },
      {}
    )
    const handleData = (data) => {
      const arr = []
      for (const key in data) {
        arr.push({
          id: key,
          name: key,
          symbolSize: 35,
          target: key,

          lineStyle: {
            width: 7,
            curveness: 0.3,
            opacity: 0.5
          }
        })
        data[key] &&
          // eslint-disable-next-line array-callback-return
          data[key].map((v, i) => {
            arr.push({
              source: key,
              id: key + i,
              target: key + i,
              name: v.node2,
              symbolSize: 20,
              value: v.combined_score || 0,
              lineStyle: {
                width: ~~(((v.combined_score || 0) * 10) / 2) || 1,
                curveness: 0.3,
                opacity: 0.5
              }
            })
          })
      }
      return arr
    }
    const data = handleData(groupData)
    const nodes = [...data]
    const links = [...data]
    myChart.setOption({
      series: [
        {
          zoom: 1.2,
          draggable: true,
          roam: true,
          type: "graph",
          layout: "force",
          force: {
            repulsion: 50,
            edgeLength: 150
          },
          label: {
            show: true,
            fontSize: 18,
            position: 'right',
            color: 'black'
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: function (links) {
              return links.value
            }
          },
          data: nodes.slice(0, 1),
          links: links.slice(0, 1)
        }
      ]
    })
    let dataIndex = 1
    const setTime = setInterval(() => {
      if (dataIndex >= data.length) {
        clearInterval(setTime)
        return
      }
      dataIndex++
      myChart.setOption({
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 50,
              edgeLength: 150
            },
            label: {
              show: true,
              fontSize: 18,
              position: 'right',
              color: 'black'
            },
            data: nodes.slice(0, dataIndex),
            links: links.slice(0, dataIndex)
          }
        ]
      })
    }, 50)
  })
  break;
  case "AMO-PT-017":
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-PT-017'
  },
  {
    col11: "Accession",
    col12: 'PXD011967'
  },
  {
    col11: "Database",
    col12: 'ProteomeX-change'
  },
  {
    col11: "Publication",
    col12: 'Discovery proteomics in aging human skeletal muscle finds change in spliceosome, immunity, proteostasis and mitochondria'
  },
  {
    col11: "Year",
    col12: '2019'
  },
  {
    col11: "Pubmed",
    col12: '31642809'
  },
  {
    col11: "Species",
    col12: 'Human'
  },
  {
    col11: "Tissue",
    col12: 'Skeletal muscle proteome'
  },
  {
    col11: "Data type",
    col12: 'LC-MS'
  },
  {
    col11: "Sample size",
    col12: '58'
  },
  {
    col11: "Age group",
    col12: 'Young: 20-49 years old; Mid: 50-64 years old; Aged: 65+ years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '122.5'
  }]
  onMounted(() => {
    const myChart = echarts.init(document.getElementById("graph"))
    const groupData = Num17echartsData().reduce(
      (accumulator, currentItem) => {
        if (!accumulator[currentItem["#node1"]]) {
          accumulator[currentItem["#node1"]] = []
        }
        accumulator[currentItem["#node1"]].push(currentItem)
        return accumulator
      },
      {}
    )
    const handleData = (data) => {
      const arr = []
      for (const key in data) {
        arr.push({
          id: key,
          name: key,
          symbolSize: 35,
          target: key,

          lineStyle: {
            width: 7,
            curveness: 0.3,
            opacity: 0.5
          }
        })
        data[key] &&
          // eslint-disable-next-line array-callback-return
          data[key].map((v, i) => {
            arr.push({
              source: key,
              id: key + i,
              target: key + i,
              name: v.node2,
              symbolSize: 20,
              value: v.combined_score || 0,
              lineStyle: {
                width: ~~(((v.combined_score || 0) * 10) / 2) || 1,
                curveness: 0.3,
                opacity: 0.5
              }
            })
          })
      }
      return arr
    }
    const data = handleData(groupData)
    const nodes = [...data]
    const links = [...data]
    myChart.setOption({
      series: [
        {
          zoom: 1.2,
          draggable: true,
          roam: true,
          type: "graph",
          layout: "force",
          force: {
            repulsion: 50,
            edgeLength: 150
          },
          label: {
            show: true,
            fontSize: 18,
            position: 'right',
            color: 'black'
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: function (links) {
              return links.value
            }
          },
          data: nodes.slice(0, 1),
          links: links.slice(0, 1)
        }
      ]
    })
    let dataIndex = 1
    const setTime = setInterval(() => {
      if (dataIndex >= data.length) {
        clearInterval(setTime)
        return
      }
      dataIndex++
      myChart.setOption({
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 50,
              edgeLength: 150
            },
            label: {
              show: true,
              fontSize: 18,
              position: 'right',
              color: 'black'
            },
            data: nodes.slice(0, dataIndex),
            links: links.slice(0, dataIndex)
          }
        ]
      })
    }, 50)
  })
  break;
}
</script>

<style scoped >
@import url("../styles/dataset.css");
</style>
