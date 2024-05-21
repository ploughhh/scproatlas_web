<!-- eslint-disable no-debugger -->
<!-- eslint-disable no-debugger -->
<template>
  <el-container>
    <el-header>
      <Menus />
    </el-header>
    <el-main style="
        margin-left: auto;
        width: 1280px;
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
      <!-- <div v-if="route.query.Species + route.query.Tissue + route.query.Project_ID === 'MouseLiverGSE155006'">
        <div style="margin-left: 75px; width: 100%px; height: 800px; margin-right: auto; float: left;">
          <el-table :data="Data1()" border :show-header="false" fit :row-style="{ height: '65px' }">
            <el-table-column sortable prop="col11" width="380"></el-table-column>
            <el-table-column sortable prop="col12" width="720"></el-table-column>
          </el-table>
        </div>
      </div> -->
      <div>
        <div style="margin-left: 75px; width: 100%px; height: 800px; margin-right: auto; float: left;">
          <el-table :data="firtableData" border :show-header="false" fit :row-style="{ height: '65px' }">
            <el-table-column sortable prop="col11" width="380"></el-table-column>
            <el-table-column sortable prop="col12" width="720"></el-table-column>
          </el-table>
        </div>
      </div>
      <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">Cell map based on {{ route.query.Species + " " + route.query.Tissue }} cell clusters
        <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHovering1 = true" @mouseleave="isHovering1 = false">
        <div v-if="isHovering1" style="position: relative; margin-left: 1224px; top: -52px; left: -1190px; height: 65px; width: 91%; background-color: #303133;">
          <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
            Cell clustering for scRNA data was performed using Seurat package in R based on normalized gene expression profile. Cell type annotation was performed according to the markers provided by original papers.
          </p>
        </div>
      </h1>
      <div class="demo-image">
        <div style="float: left;">
          <img style="float: left; width: 600px; height: 400px; display: inline-block;" :src="require('../../public/images/umap/' +
            route.query.Species +
            '/' +
            route.query.Project_ID +
            '/' +
            route.query.Tissue +
            '/CellCluster-TSNEplot.png')
            " fit="fill" />
          <img style="float: left; width: 600px; height: 400px; display: inline-block;" :src="require('../../public/images/umap/' +
            route.query.Species +
            '/' +
            route.query.Project_ID +
            '/' +
            route.query.Tissue +
            '/CellCluster-Umapplot.png')
            " fit="fill" />
        </div>
        <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">Cell map based on different {{ route.query.Species + " " + route.query.Tissue }} age groups
          <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHovering2 = true" @mouseleave="isHovering2 = false">
          <div v-if="isHovering2" style="position: relative; margin-left: 1224px; top: -52px; left: -1190px; height: 65px; width: 91%; background-color: #303133;">
            <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
              Cell clustering for scRNA data was performed using Seurat package in R based on normalized gene expression profile. Cell type annotation was performed according to the markers provided by original papers.
            </p>
          </div>
        </h1>
        <div style="float: left;">
          <img style="float: left; width: 600px; height: 400px; display: inline-block;" :src="require('../../public/images/umap/' +
            route.query.Species +
            '/' +
            route.query.Project_ID +
            '/' +
            route.query.Tissue +
            '/CellCluster-TSNEPlot_SamGroup.png')
            " fit="fill" />
          <img style="float: left; width: 600px; height: 400px; display: inline-block;" :src="require('../../public/images/umap/' +
            route.query.Species +
            '/' +
            route.query.Project_ID +
            '/' +
            route.query.Tissue +
            '/CellCluster-UMAPPlot_SamGroup.png')
            " fit="fill" />
          </div>
      </div>
      <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">Aging-related differential expressed genes in {{route.query.Species + " " + route.query.Tissue}}
        <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHovering3 = true" @mouseleave="isHovering3 = false">
        <div v-if="isHovering3" style="position: relative; margin-left: 1224px; top: -78px; left: -1190px; height: 94px; width: 91%; background-color: #303133;">
          <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
            We performed differential expression analysis to identify aging-related genes across different age groups by using ‘FindMarkers’ function in Seurat package for each cell type. Aging-related DEGs between age groups with p&lt;0.05 and |logFC| &gt; (mean(abs(logFC))+2*sd(abs(logFC)) were shown in the database.
          </p>
        </div>
      </h1>
      <div>
        <el-form :model="scform" label-width="160px" :inline="true">
          <el-form-item label="Gene Symbol">
            <el-input class="myInput" v-model="scform.Taxonomy" style="width: 140px" />
          </el-form-item>
          <el-form-item label="Category">
            <el-select v-model="scform.Category" placeholder="please select" style="width: 140px">
              <el-option :label="item" v-for="item in categoryList" :key="item" :value="item" />
            </el-select>
          </el-form-item>
          <el-form-item label="Cell type">
            <el-select v-model="scform.Cell_type" placeholder="please select" style="width: 140px">
              <el-option :label="item" v-for="item in cellList" :key="item" :value="item" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button style="margin-right: 20px;" type="primary" @click="singlecellsonSubmit">Search</el-button>
            <el-button @click="Clean">Clean</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="singlecellstableData" style="width: 1290px; font-size: 18px">
          <!-- <el-table-column :prop="item" :label="item" v-for="item in clos" :key="item" width="167" /> -->
          <el-table-column prop="Taxonomy" label="Symbol" width="120" />
          <el-table-column prop="Cell_type" label="Cell_type" />
          <el-table-column prop="Category" label="Category" width="180" />
          <el-table-column prop="Pvalue" label="Pvalue" width="100" />
          <el-table-column prop="Padj" label="Padj" width="100" />
          <el-table-column prop="Log2FC" label="Log2FC" width="120" />
          <el-table-column prop="Up_or_down" label="Up_or_down" width="150" />
          <el-table-column prop="Cell_type_specific" label="Cell_type_specific" />
          <el-table-column prop="Tissue_specific" label="Tissue_specific" />
          <el-table-column prop="Species_specific" label="Species_specific" />
          <!-- <el-table-column width="340" label='Genes' prop='Gene_symbol'>
            <template v-slot='scope'>
                <el-button @click='search(gene, scope.row.Tissue)' type="text" v-for="gene in scope.row.Gene_symbol" :key="gene">{{gene}}</el-button>
            </template>
          </el-table-column> -->
        </el-table>
        <el-pagination small @current-change="singlecellsschandelChange" :current-page="scform.currentPage" :page-size="scform.limit"
          background :total="scform.total" layout="prev, pager, next" class="mt-4" style="margin-left: 5%" />
      </div>
      <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">Aging-related intercellular communications in {{route.query.Species + " " + route.query.Tissue}}
        <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHovering4 = true" @mouseleave="isHovering4 = false">
        <div v-if="isHovering4" style="position: relative; margin-left: 1224px; top: -52px; left: -1190px; height: 65px; width: 91%; background-color: #303133;">
          <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
            Cell-cell communication analysis is performed utilizing CellPhoneDB v2.0 software for aging-related DEGs in each age group.
            The significant L-R interactions were selected with the significant value p&lt;0.05.
          </p>
        </div>
      </h1>
      <div style="float: left; margin-top: 20px">
        <el-form :model="ccform" label-width="150px" class="intForm">
          <el-form-item label="Tissue name">
            <el-select v-model="ccform.Tissue" disabled placeholder="please select tissue">
              <el-option :label="item" v-for="item in TissueList" :key="item" :value="item" />
            </el-select>
          </el-form-item>
        </el-form>
        <span style="color: #9b9a9a;">It may due to an excessive amount of data, the chart cannot be loaded. Please refresh and try again.</span>
        <h4 class="little_title">Click edges or nodes to view details</h4>
        <!-- <div v-if="route.query.Number === 'AMO-SC-003' || 'AMO-SC-008' || 'AMO-SC-021' || 'AMO-SC-028' || 'AMO-SC-032'" id="Young" style="width: 350px; height: 400px; float: left">No Data</div> -->
        <div id="Young" style="width: 350px; height: 400px; float: left"></div>
        <!-- <div id="Mid" v-if="route.query.Number === 'AMO-SC-003' || 'AMO-SC-008' || 'AMO-SC-021' || 'AMO-SC-028' || 'AMO-SC-032'" style="width: 350px; height: 400px; float: left; margin-left: 20px">No Data</div> -->
        <div id="Mid" style="width: 350px; height: 400px; float: left; margin-left: 20px"></div>
        <!-- <div id="Aged" v-if="route.query.Number === 'AMO-SC-003' || 'AMO-SC-008' || 'AMO-SC-021' || 'AMO-SC-028' || 'AMO-SC-032'" style="width: 350px; height: 400px; float: left; margin-left: 20px">No Data</div> -->
        <div id="Aged" style="width: 350px; height: 400px; float: left; margin-left: 20px"></div>
      </div>
      <div>
        <el-table :data="cctabelData" stripe max-height="600">
          <el-table-column :prop="item" :label="item" v-for="item in clos" :key="item" />
        </el-table>
        <el-pagination small @current-change="cchandelChange" :current-page="pages.currentPage" :page-size="pages.limit"
          background :total="pages.total" layout="prev, pager, next" class="mt-4" />
      </div>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue"
import Menus from "../layout/menu-item"
import { useRoute } from "vue-router"
import { getsinglecells } from "@/api/singlecellDetail"
// import { getCat, getTissue } from '@/api/enum'
import { getLinks, getcLinks, getLCol } from "@/api/links"
import { getTissue, getGroup } from "@/api/enum"
const echarts = require("echarts/lib/echarts")
require("echarts/lib/component/title")
require("echarts/lib/component/tooltip")
require("echarts/lib/component/legend")
require("echarts/lib/chart/graph")
const isHovering1 = ref(false)
const isHovering2 = ref(false)
const isHovering3 = ref(false)
const isHovering4 = ref(false)
const route = useRoute()
// get information
// const sctableData = ref([])
const singlecellstableData = ref([])
const clos = ref([])
// const scpages = reactive({
//   currentPage: 1,
//   limit: 20,
//   total: 0
// })

let cellList = ref([])
let firtableData = []
switch (route.query.Species + route.query.Tissue + route.query.Project_ID) {
  case 'MouseLiverGSE155006':
    cellList = ref(["B cell", "CD8+ T cell", "Endothelial cell", "Macrophage", "Mast cell", "Neutrophil", "NK cell", "NK cell", "pDC"])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-001'
    },
    {
      col11: "Accession",
      col12: 'GSE155006'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging'
    },
    {
      col11: "Year",
      col12: '2021'
    },
    {
      col11: "Pubmed",
      col12: '33271118'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Liver'
    },
    {
      col11: "Data type",
      col12: '10X Chromium single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '6'
    },
    {
      col11: "Age group",
      col12: 'Young:3 months old; Aged: 17 months old'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }]
    break
  case 'MouseLungGSE155006':
    cellList = ref(['B cell', 'CD4+ T cell', 'CD8+ T cell', 'Macrophage', 'Mast cell', 'Neutrophil', 'NK cell'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-002'
    },
    {
      col11: "Accession",
      col12: 'GSE155006'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging'
    },
    {
      col11: "Year",
      col12: '2021'
    },
    {
      col11: "Pubmed",
      col12: '33271118'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Lung'
    },
    {
      col11: "Data type",
      col12: '10X Chromium single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '6'
    },
    {
      col11: "Age group",
      col12: 'Young:3 months old; Aged: 17 months old'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }
    ]
    break
  case 'MousePeritoneumGSE155006':
    cellList = ref(['B cell', 'CD4+ T cell', 'CD8+ T cell', 'Macrophage', 'NK cell'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-003'
    },
    {
      col11: "Accession",
      col12: 'GSE155006'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging'
    },
    {
      col11: "Year",
      col12: '2021'
    },
    {
      col11: "Pubmed",
      col12: '33271118'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Peritoneum'
    },
    {
      col11: "Data type",
      col12: '10X Chromium single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '6'
    },
    {
      col11: "Age group",
      col12: 'Young:3 months old; Aged: 17 months old'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }
    ]
    break
  case 'MouseSpleenGSE155006':
    cellList = ref(['B cell', 'CD4+ T cell', 'CD8+ T cell', 'Monocyte', 'Neutrophil', 'NK cell'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-004'
    },
    {
      col11: "Accession",
      col12: 'GSE155006'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging'
    },
    {
      col11: "Year",
      col12: '2021'
    },
    {
      col11: "Pubmed",
      col12: '33271118'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Spleen'
    },
    {
      col11: "Data type",
      col12: '10X Chromium single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '6'
    },
    {
      col11: "Age group",
      col12: 'Young:3 months old; Aged: 17 months old'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }
    ]
    break
  case 'MouseHypothalamusGSE188646':
    cellList = ref(['Astrocyte', 'Ependymocyte', 'Microglia or Macrophage', 'Neuron', 'Oligodendrocyte', 'OPC', 'Pericyte or Endothelial Cell', 'Tanycyte', 'Vascular and Leptomeningeal Cell'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-005'
    },
    {
      col11: "Accession",
      col12: 'GSE188646'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'Single-cell analysis of the aging female mouse hypothalamus'
    },
    {
      col11: "Year",
      col12: '2022'
    },
    {
      col11: "Pubmed",
      col12: '36285248'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Hypothalamus'
    },
    {
      col11: "Data type",
      col12: 'Microfluidic droplet single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '6'
    },
    {
      col11: "Age group",
      col12: 'Young: 3 monthold;  Aged: 19–24 month'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }
    ]
    break
  case 'MouseMammary epitheliaGSE150580':
    cellList = ref(['Dendritic cell', 'Fibroblast', 'Luminal AV', 'Luminal HS-AV', 'Luminal HS', 'Macrophage Mb', 'Myoepithelial', 'NK cell', 'Pericyte', 'Vascular endothelial'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-006'
    },
    {
      col11: "Accession",
      col12: 'GSE150580'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'Aging-Associated Alterations in Mammary Epithelia and Stroma Revealed by Single-Cell RNA Sequencing'
    },
    {
      col11: "Year",
      col12: '2020'
    },
    {
      col11: "Pubmed",
      col12: '33378681'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Mammary epithelia'
    },
    {
      col11: "Data type",
      col12: 'Microfluidic droplet single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '7'
    },
    {
      col11: "Age group",
      col12: 'Young: 3–4 months old; Aged: 13–14 months old'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }
    ]
    break
  case 'MouseBladderGSE132042':
    cellList = ref(['Stromal cell', 'Urothelial cell'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-007'
    },
    {
      col11: "Accession",
      col12: 'GSE132042'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'A single-cell transcriptomic atlas characterizes ageing tissues in the mouse'
    },
    {
      col11: "Year",
      col12: '2020'
    },
    {
      col11: "Pubmed",
      col12: '32669714'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Bladder'
    },
    {
      col11: "Data type",
      col12: 'Microfluidic droplet single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '30'
    },
    {
      col11: "Age group",
      col12: 'Young: 3-4 months old; Aged:18-24 months'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }
    ]
    break
  case 'MouseBone marrowGSE132042':
    cellList = ref(['B cell', 'Erythrocyte', 'Granulocyte', 'Hematopoietic stem cell', 'Macrophage', 'Monocyte', 'NK cell', 'T cell'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-008'
    },
    {
      col11: "Accession",
      col12: 'GSE132042'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'A single-cell transcriptomic atlas characterizes ageing tissues in the mouse'
    },
    {
      col11: "Year",
      col12: '2020'
    },
    {
      col11: "Pubmed",
      col12: '32669714'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Bone marrow'
    },
    {
      col11: "Data type",
      col12: 'Microfluidic droplet single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '30'
    },
    {
      col11: "Age group",
      col12: 'Young: 3-4 months old; Aged:18-24 months'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }
    ]
    break
  case 'MouseBrainGSE132042':
    cellList = ref(['Astrocyte', 'Endothelial cell', 'Ependymal cell', 'Macrophage', 'Microglial cell', 'Neuroepithelial cell', 'Neuron', 'Neuronal stem cell', 'Oligo pre cell', 'Oligodendrocyte', 'Pericyte', 'T cell'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-009'
    },
    {
      col11: "Accession",
      col12: 'GSE132042'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'A single-cell transcriptomic atlas characterizes ageing tissues in the mouse'
    },
    {
      col11: "Year",
      col12: '2020'
    },
    {
      col11: "Pubmed",
      col12: '32669714'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Brain'
    },
    {
      col11: "Data type",
      col12: 'Microfluidic droplet single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '30'
    },
    {
      col11: "Age group",
      col12: 'Young: 3-4 months old; Aged:18-24 months'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }
    ]
    break
  case 'MouseBrown adipose tissueGSE132042':
    cellList = ref(['B cell', 'Endothelial cell', 'Macrophage', 'Myeloid cell', 'NK cell', 'Stromal cell', 'T cell'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-010'
    },
    {
      col11: "Accession",
      col12: 'GSE132042'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'A single-cell transcriptomic atlas characterizes ageing tissues in the mouse'
    },
    {
      col11: "Year",
      col12: '2020'
    },
    {
      col11: "Pubmed",
      col12: '32669714'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Brown adipose tissue'
    },
    {
      col11: "Data type",
      col12: 'Microfluidic droplet single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '30'
    },
    {
      col11: "Age group",
      col12: 'Young: 3-4 months old; Aged:18-24 months'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }
    ]
    break
  case 'MouseGonadal adipose tissueGSE132042':
    cellList = ref(['B cell', 'Endothelial cell', 'Macrophage', 'Myeloid cell', 'NK cell', 'Plasma b cell', 'Stromal cell', 'T cell'])
    firtableData = [
      {
        col11: "Dataset ID",
        col12: 'AMO-SC-011'
      },
      {
        col11: "Accession",
        col12: 'GSE132042'
      },
      {
        col11: "Database",
        col12: 'GEO'
      },
      {
        col11: "Publication",
        col12: 'A single-cell transcriptomic atlas characterizes ageing tissues in the mouse'
      },
      {
        col11: "Year",
        col12: '2020'
      },
      {
        col11: "Pubmed",
        col12: '32669714'
      },
      {
        col11: "Species",
        col12: 'Mouse'
      },
      {
        col11: "Tissue",
        col12: 'Gonadal adipose tissue'
      },
      {
        col11: "Data type",
        col12: 'Microfluidic droplet single cell sequencing'
      },
      {
        col11: "Sample size",
        col12: '30'
      },
      {
        col11: "Age group",
        col12: 'Young: 3-4 months old; Aged:18-24 months'
      },
      {
        col11: "Maximum lifespan (year)",
        col12: '4'
      }
    ]
    break
  case 'MouseMesenteric adipose tissueGSE132042':
    cellList = ref(['B cell', 'Endothelial cell', 'Macrophage', 'Myeloid cell', 'NK cell', 'Stromal cell', 'T cell'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-012'
    },
    {
      col11: "Accession",
      col12: 'GSE132042'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'A single-cell transcriptomic atlas characterizes ageing tissues in the mouse'
    },
    {
      col11: "Year",
      col12: '2020'
    },
    {
      col11: "Pubmed",
      col12: '32669714'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Mesenteric adipose tissue'
    },
    {
      col11: "Data type",
      col12: 'Microfluidic droplet single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '30'
    },
    {
      col11: "Age group",
      col12: 'Young: 3-4 months old; Aged:18-24 months'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }
    ]
    break
  case 'MouseSubcutaneous adipose tissueGSE132042':
    cellList = ref(['B cell', 'Endothelial cell', 'Macrophage', 'Monocyte', 'Myeloid cell', 'Stromal cell', 'T cell'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-013'
    },
    {
      col11: "Accession",
      col12: 'GSE132042'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'A single-cell transcriptomic atlas characterizes ageing tissues in the mouse'
    },
    {
      col11: "Year",
      col12: '2020'
    },
    {
      col11: "Pubmed",
      col12: '32669714'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Subcutaneous adipose tissue'
    },
    {
      col11: "Data type",
      col12: 'Microfluidic droplet single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '30'
    },
    {
      col11: "Age group",
      col12: 'Young: 3-4 months old; Aged:18-24 months'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }
    ]
    break
  case 'MouseHeartGSE132042':
    cellList = ref(['B cell', 'Endothelial cell', 'Fibroblast', 'Fibrocyte', 'Macrophage', 'Monocyte', 'Muscle cell', 'Professional antigen presenting cell', 'Smooth muscle cell', 'T cell', 'Valve cell'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-014'
    },
    {
      col11: "Accession",
      col12: 'GSE132042'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'A single-cell transcriptomic atlas characterizes ageing tissues in the mouse'
    },
    {
      col11: "Year",
      col12: '2020'
    },
    {
      col11: "Pubmed",
      col12: '32669714'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Heart'
    },
    {
      col11: "Data type",
      col12: 'Microfluidic droplet single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '30'
    },
    {
      col11: "Age group",
      col12: 'Young: 3-4 months old; Aged:18-24 months'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }
    ]
    break
  case 'MouseKidneyGSE132042':
    cellList = ref(['B cell', 'Endothelial cell', 'Epithelial cell', 'Mesangial cell', 'Monocyte', 'T cell'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-015'
    },
    {
      col11: "Accession",
      col12: 'GSE132042'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'A single-cell transcriptomic atlas characterizes ageing tissues in the mouse'
    },
    {
      col11: "Year",
      col12: '2020'
    },
    {
      col11: "Pubmed",
      col12: '32669714'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Kidney'
    },
    {
      col11: "Data type",
      col12: 'Microfluidic droplet single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '30'
    },
    {
      col11: "Age group",
      col12: 'Young: 3-4 months old; Aged:18-24 months'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }
    ]
    break
  case 'MouseLarge intestineGSE132042':
    cellList = ref(['brush cell', 'crypt stem cell', 'enterocyte', 'enteroendocrine cell', 'epithelial cell', 'secretory cell'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-016'
    },
    {
      col11: "Accession",
      col12: 'GSE132042'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'A single-cell transcriptomic atlas characterizes ageing tissues in the mouse'
    },
    {
      col11: "Year",
      col12: '2020'
    },
    {
      col11: "Pubmed",
      col12: '32669714'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Large intestine'
    },
    {
      col11: "Data type",
      col12: 'Microfluidic droplet single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '30'
    },
    {
      col11: "Age group",
      col12: 'Young: 3-4 months old; Aged:18-24 months'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }
    ]
    break
  case 'MouseLimb muscleGSE132042':
    cellList = ref(['B cell', 'Endothelial cell', 'Macrophage', 'Satellite cell', 'Stromal cell', 'T cell'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-017'
    },
    {
      col11: "Accession",
      col12: 'GSE132042'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'A single-cell transcriptomic atlas characterizes ageing tissues in the mouse'
    },
    {
      col11: "Year",
      col12: '2020'
    },
    {
      col11: "Pubmed",
      col12: '32669714'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Limb muscle'
    },
    {
      col11: "Data type",
      col12: 'Microfluidic droplet single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '30'
    },
    {
      col11: "Age group",
      col12: 'Young: 3-4 months old; Aged:18-24 months'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }
    ]
    break
  case 'MouseDiaphragmGSE132042':
    cellList = ref(['B cell', 'Endothelial cell', 'Macrophage', 'Satellite cell', 'Stromal cell', 'T cell'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-018'
    },
    {
      col11: "Accession",
      col12: 'GSE132042'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'A single-cell transcriptomic atlas characterizes ageing tissues in the mouse'
    },
    {
      col11: "Year",
      col12: '2020'
    },
    {
      col11: "Pubmed",
      col12: '32669714'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Diaphragm'
    },
    {
      col11: "Data type",
      col12: 'Microfluidic droplet single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '30'
    },
    {
      col11: "Age group",
      col12: 'Young: 3-4 months old; Aged:18-24 months'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }
    ]
    break
  case 'MouseLiverGSE132042':
    cellList = ref(['B cell', 'Endothelial cell', 'Granulocyte', 'Hepatocyte', 'Kupffer cell', 'Myeloid leukocyte', 'NK cell', 'T cell'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-019'
    },
    {
      col11: "Accession",
      col12: 'GSE132042'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'A single-cell transcriptomic atlas characterizes ageing tissues in the mouse'
    },
    {
      col11: "Year",
      col12: '2020'
    },
    {
      col11: "Pubmed",
      col12: '32669714'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Liver'
    },
    {
      col11: "Data type",
      col12: 'Microfluidic droplet single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '30'
    },
    {
      col11: "Age group",
      col12: 'Young: 3-4 months old; Aged:18-24 months'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }
    ]
    break
  case 'MouseLungGSE132042':
    cellList = ref(['Adventitial cell', 'B cell', 'Dendritic cell', 'Endothelial cell', 'Epithelial cell', 'Fibroblast', 'Granulocyte', 'Monocyte', 'NK cell', 'Pericyte cell', 'Smooth muscle cell', 'T cell'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-020'
    },
    {
      col11: "Accession",
      col12: 'GSE132042'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'A single-cell transcriptomic atlas characterizes ageing tissues in the mouse'
    },
    {
      col11: "Year",
      col12: '2020'
    },
    {
      col11: "Pubmed",
      col12: '32669714'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Lung'
    },
    {
      col11: "Data type",
      col12: 'Microfluidic droplet single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '30'
    },
    {
      col11: "Age group",
      col12: 'Young: 3-4 months old; Aged:18-24 months'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }
    ]
    break
  case 'MousePancreasGSE132042':
    cellList = ref(['Acinar cell', 'Alpha cell', 'Beta cell', 'Delta cell', 'Ductal cell', 'Endothelial cell', 'Gamma cell', 'Macrophage', 'Stellate cell'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-021'
    },
    {
      col11: "Accession",
      col12: 'GSE132042'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'A single-cell transcriptomic atlas characterizes ageing tissues in the mouse'
    },
    {
      col11: "Year",
      col12: '2020'
    },
    {
      col11: "Pubmed",
      col12: '32669714'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Pancreas'
    },
    {
      col11: "Data type",
      col12: 'Microfluidic droplet single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '30'
    },
    {
      col11: "Age group",
      col12: 'Young: 3-4 months old; Aged:18-24 months'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }
    ]
    break
  case 'MouseSkinGSE132042':
    cellList = ref(['Basal cell', 'Epidermal cell', 'Keratinocyte', 'Macrophage'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-022'
    },
    {
      col11: "Accession",
      col12: 'GSE132042'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'A single-cell transcriptomic atlas characterizes ageing tissues in the mouse'
    },
    {
      col11: "Year",
      col12: '2020'
    },
    {
      col11: "Pubmed",
      col12: '32669714'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Skin'
    },
    {
      col11: "Data type",
      col12: 'Microfluidic droplet single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '30'
    },
    {
      col11: "Age group",
      col12: 'Young: 3-4 months old; Aged:18-24 months'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }
    ]
    break
  case 'MouseSpleenGSE132042':
    cellList = ref(['B cell', 'Erythrocyte', 'Granulocyte', 'NK cell', 'T cell'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-023'
    },
    {
      col11: "Accession",
      col12: 'GSE132042'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'A single-cell transcriptomic atlas characterizes ageing tissues in the mouse'
    },
    {
      col11: "Year",
      col12: '2020'
    },
    {
      col11: "Pubmed",
      col12: '32669714'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Spleen'
    },
    {
      col11: "Data type",
      col12: 'Microfluidic droplet single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '30'
    },
    {
      col11: "Age group",
      col12: 'Young: 3-4 months old; Aged:18-24 months'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }
    ]
    break
  case 'MouseThymusGSE132042':
    cellList = ref(['Thymocyte'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-024'
    },
    {
      col11: "Accession",
      col12: 'GSE132042'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'A single-cell transcriptomic atlas characterizes ageing tissues in the mouse'
    },
    {
      col11: "Year",
      col12: '2020'
    },
    {
      col11: "Pubmed",
      col12: '32669714'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Thymus'
    },
    {
      col11: "Data type",
      col12: 'Microfluidic droplet single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '30'
    },
    {
      col11: "Age group",
      col12: 'Young: 3-4 months old; Aged:18-24 months'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }
    ]
    break
  case 'MouseTongueGSE132042':
    cellList = ref(['Basal cell', 'Keratinocyte'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-025'
    },
    {
      col11: "Accession",
      col12: 'GSE132042'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'A single-cell transcriptomic atlas characterizes ageing tissues in the mouse'
    },
    {
      col11: "Year",
      col12: '2020'
    },
    {
      col11: "Pubmed",
      col12: '32669714'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Tongue'
    },
    {
      col11: "Data type",
      col12: 'Microfluidic droplet single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '30'
    },
    {
      col11: "Age group",
      col12: 'Young: 3-4 months old; Aged:18-24 months'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }
    ]
    break
  case 'MouseTracheaGSE132042':
    cellList = ref(['Basal cell', 'Endothelial cell', 'Epithelial cell', 'Fibroblast', 'Granulocyte', 'Macrophage', 'Smooth muscle cell', 'Stromal cell', 'T cell'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-026'
    },
    {
      col11: "Accession",
      col12: 'GSE132042'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'A single-cell transcriptomic atlas characterizes ageing tissues in the mouse'
    },
    {
      col11: "Year",
      col12: '2020'
    },
    {
      col11: "Pubmed",
      col12: '32669714'
    },
    {
      col11: "Species",
      col12: 'Mouse'
    },
    {
      col11: "Tissue",
      col12: 'Trachea'
    },
    {
      col11: "Data type",
      col12: 'Microfluidic droplet single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '30'
    },
    {
      col11: "Age group",
      col12: 'Young: 3-4 months old; Aged:18-24 months'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '4'
    }
    ]
    break
  case 'D. melanogasterBrainGSE107451':
    cellList = ref(["α' or β' KC", "α or β KC", "Mi1", "OCTY", "OPN", "PEP", "Pm1 or Pm2", "Pm3", "Poxn", "SER", "T1", "Unknown", "γ KC"])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-027'
    },
    {
      col11: "Accession",
      col12: 'GSE107451'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'A Single-Cell Transcriptome Atlas of the Aging Drosophila Brain'
    },
    {
      col11: "Year",
      col12: '2018'
    },
    {
      col11: "Pubmed",
      col12: '32669714'
    },
    {
      col11: "Species",
      col12: 'D. melanogaster'
    },
    {
      col11: "Tissue",
      col12: 'Brain'
    },
    {
      col11: "Data type",
      col12: '10X Chromium single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '40'
    },
    {
      col11: "Age group",
      col12: 'Young: 1,3,6 days old; Aged: 9, 15, 30 days old'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '0.3'
    }
    ]
    break
  case 'Macaca fascicularisOvarianGSE130664':
    cellList = ref(["Granulosa", "Macrophage", "NK T cell", "Oocyte", "Smooth muscle cell"])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-028'
    },
    {
      col11: "Accession",
      col12: 'GSE130664'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'Single-Cell Transcriptomic Atlas of Primate Ovarian Aging'
    },
    {
      col11: "Year",
      col12: '2020'
    },
    {
      col11: "Pubmed",
      col12: '32004457'
    },
    {
      col11: "Species",
      col12: 'Macaca fascicularis'
    },
    {
      col11: "Tissue",
      col12: 'Ovarian'
    },
    {
      col11: "Data type",
      col12: '10X Chromium single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '8'
    },
    {
      col11: "Age group",
      col12: 'Young: 4–5 years old; Aged: 18–20 years old'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '39'
    }
    ]
    break
  case 'Macaca fascicularisHeartCRA002689':
    cellList = ref(['Arterial endothelial cell', 'Cardiomyocyte', 'Epicardial cell', 'Fibroblast', 'Hypertrophic cardiomyocyte'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-029'
    },
    {
      col11: "Accession",
      col12: 'CRA002689'
    },
    {
      col11: "Database",
      col12: 'GSA'
    },
    {
      col11: "Publication",
      col12: 'Single-cell transcriptomic atlas of primate cardiopulmonary aging'
    },
    {
      col11: "Year",
      col12: '2020'
    },
    {
      col11: "Pubmed",
      col12: '32913304'
    },
    {
      col11: "Species",
      col12: 'Macaca fascicularis'
    },
    {
      col11: "Tissue",
      col12: 'Heart'
    },
    {
      col11: "Data type",
      col12: '10X Chromium single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '16'
    },
    {
      col11: "Age group",
      col12: 'Young: 4–6 years old; Aged: 18–21 years old'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '39'
    }
    ]
    break
  case 'Macaca fascicularisLungCRA002577':
    cellList = ref(['Alveolar type I cell', 'Alveolar type II cell', 'Arterial endothelial cell', 'Ciliated cell', 'Fibroblast', 'Pericyte'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-030'
    },
    {
      col11: "Accession",
      col12: 'CRA002577'
    },
    {
      col11: "Database",
      col12: 'GSA'
    },
    {
      col11: "Publication",
      col12: 'Single-cell transcriptomic atlas of primate cardiopulmonary aging'
    },
    {
      col11: "Year",
      col12: '2020'
    },
    {
      col11: "Pubmed",
      col12: '32913304'
    },
    {
      col11: "Species",
      col12: 'Macaca fascicularis'
    },
    {
      col11: "Tissue",
      col12: 'Lung'
    },
    {
      col11: "Data type",
      col12: '10X Chromium single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '16'
    },
    {
      col11: "Age group",
      col12: 'Young: 4–6 years old; Aged: 18–21 years old'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '39'
    }
    ]
    break
  case 'HumanCerebrospinal fluidGSE200164':
    cellList = ref(['B cell', 'CD4+ T cell', 'CD4+CD8+ T cell', 'CD8+ T cell', 'Classical Monocyte', 'Dendritic cell', 'Intermediate Monocyte', 'NK cell', 'Plasma cell', 'T Regulatory cell'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-031'
    },
    {
      col11: "Accession",
      col12: 'GSE200164'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'Cerebrospinal fluid immune dysregulation during healthy brain aging and cognitive impairment'
    },
    {
      col11: "Year",
      col12: '2022'
    },
    {
      col11: "Pubmed",
      col12: '36516855'
    },
    {
      col11: "Species",
      col12: 'Human'
    },
    {
      col11: "Tissue",
      col12: 'Cerebrospinal fluid'
    },
    {
      col11: "Data type",
      col12: '10X Chromium single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '45'
    },
    {
      col11: "Age group",
      col12: 'Young: 54-60 years old; Aged: 60-82 years old'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '122.5'
    }
    ]
    break
  case 'HumanTestisGSE182786':
    cellList = ref(['Endothelial cell', 'Germ cell', 'Macrophage', 'Sertoli cell', 'Smooth muscle cell', 'TPC'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-032'
    },
    {
      col11: "Accession",
      col12: 'GSE182786'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'Single-cell analysis of human testis aging and correlation with elevated body mass index'
    },
    {
      col11: "Year",
      col12: '2022'
    },
    {
      col11: "Pubmed",
      col12: '35504286'
    },
    {
      col11: "Species",
      col12: 'Human'
    },
    {
      col11: "Tissue",
      col12: 'Testis'
    },
    {
      col11: "Data type",
      col12: '10X Chromium single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '12'
    },
    {
      col11: "Age group",
      col12: 'Young: 17-22 years old; Aged: 62-76 years old'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '122.5'
    }
    ]
    break
  case 'HumanSkinHRA000395':
    cellList = ref(['Basal', 'Endothelial', 'Fibroblast', 'Granular', 'Immune', 'Melanocyte', 'Mitotic', 'Pericyte', 'Spinous', 'Vellus hair follicle', 'Orbicularis oculi muscle'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-033'
    },
    {
      col11: "Accession",
      col12: 'HRA000395'
    },
    {
      col11: "Database",
      col12: 'GSA'
    },
    {
      col11: "Publication",
      col12: 'A Single-Cell Transcriptomic Atlas of Human Skin Aging'
    },
    {
      col11: "Year",
      col12: '2022'
    },
    {
      col11: "Pubmed",
      col12: '33238152'
    },
    {
      col11: "Species",
      col12: 'Human'
    },
    {
      col11: "Tissue",
      col12: 'Skin'
    },
    {
      col11: "Data type",
      col12: '10X Chromium single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '9'
    },
    {
      col11: "Age group",
      col12: 'Young:18-28 years old; Middle: 35-48 years old; Aged: 70-76 years old'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '122.5'
    }
    ]
    break
  case 'HumanBloodGSE157007':
    cellList = ref(['B Cells', 'Dendritic', 'Monocytes', 'NK', 'T Cells', 'Unknown'])
    firtableData = [{
      col11: "Dataset ID",
      col12: 'AMO-SC-034'
    },
    {
      col11: "Accession",
      col12: 'GSE157007'
    },
    {
      col11: "Database",
      col12: 'GEO'
    },
    {
      col11: "Publication",
      col12: 'Multidimensional single-cell analysis of human peripheral blood reveals characteristic features of the immune system landscape in aging and frailty'
    },
    {
      col11: "Year",
      col12: '2022'
    },
    {
      col11: "Pubmed",
      col12: '37117750'
    },
    {
      col11: "Species",
      col12: 'Human'
    },
    {
      col11: "Tissue",
      col12: 'Blood'
    },
    {
      col11: "Data type",
      col12: '10X Chromium single cell sequencing'
    },
    {
      col11: "Sample size",
      col12: '12'
    },
    {
      col11: "Age group",
      col12: 'Young: 23-42 years old; Aged: 72-100 years old'
    },
    {
      col11: "Maximum lifespan (year)",
      col12: '122.5'
    }
    ]
    break
  default:
    console.log("值不在可匹配的范围内")
    break
}

// const router = useRouter()
const categoryList = ref(["Aged vs Young", "mid vs Young", "Aged vs mid", "Aged vs Young"])
clos.value = [
  "Taxonomy",
  "Cell_type",
  "Category",
  "Pvalue",
  "Padj",
  "Log2FC",
  "Up_or_down",
  "Cell_type_specific",
  "Tissue_specific",
  "Species_specific"
]

const scform = reactive({
  Taxonomy: "",
  Cell_type: "",
  Category: "",
  Pvalue: "",
  Padj: "",
  Log2FC: "",
  Up_or_down: "",
  Cell_type_specific: "",
  Tissue_specific: "",
  Species_specific: "",
  currentPage: 1,
  limit: 20,
  total: 0,
  Project_ID: route.query.Project_ID,
  Tissue: route.query.Tissue,
  Species: route.query.Species
  // currentPage: pages.value.currentPage
})

const singlecells = async (query) => {
  // eslint-disable-next-line no-debugger
  const res = await getsinglecells(query)
  singlecellstableData.value = res.data.rows
  scform.total = res.data.count
}

const singlecellsschandelChange = (val) => {
  scform.currentPage = val
  singlecells(scform)
}
const singlecellsonSubmit = () => {
  scform.currentPage = 1
  singlecells(scform)
}

singlecells(scform)

const Clean = () => {
  scform.Taxonomy = ""
  scform.Tissue = ""
  scform.Cell_type = ""
  scform.Category = ""
  scform.Pvalue = ""
  scform.Padj = ""
  scform.Log2FC = ""
  scform.Up_or_down = ""
  scform.Cell_type_specific = ""
  scform.Tissue_specific = ""
  scform.Species_specific = ""
  scform.currentPage = 1
  singlecells(scform)
}

// let links = []
let cLinks = []
let Young = {}
let Aged = {}
let Mid = {}
// back end related params
const catList = ref([])
const TissueList = ref([])
const pages = ref()
const cctabelData = ref([])
const color = [
  "#5470c6",
  "#91cc75",
  "#fac858",
  "#ee6666",
  "#73c0de",
  "#3ba272",
  "#fc8452",
  "#9a60b4",
  "#ea7ccc",
  "#660033",
  "#CC6633",
  "#5470c6",
  "#91cc75",
  "#fac858",
  "#ee6666",
  "#73c0de",
  "#3ba272",
  "#fc8452",
  "#9a60b4",
  "#ea7ccc",
  "#660033",
  "#ff9999",
  "#4db6ac",
  "#f9a825",
  "#8e24aa",
  "#64b5f6"
]
const ccform = reactive({
  Tissue: route.query.Tissue
})

pages.value = {
  limit: 20,
  currentPage: 1,
  total: 20
}

const cellform = reactive({
  Source_type: "",
  Target_type: "",
  Tissue: "",
  Category: "",
  currentPage: pages.value.currentPage
})

// get option and data for graph
const getData = (links, type) => {
  const nodesName = []
  for (let i = 0; i < links.data.length; i++) {
    nodesName.push({
      name: links.data[i].Target_type.replace("\r", ""),
      category: links.data[i].category,
      symbolSize: 20,
      label: {
        show: true,
        fontSize: 17
      }
    })
    nodesName.push({
      name: links.data[i].Source_type,
      category: links.data[i].category,
      symbolSize: 20,
      label: {
        show: true,
        fontSize: 17
      }
    })
  }
  // 这段代码的作用是将 nodesName 数组中的每个元素的 name 属性提取出来，去除重复的值，并将结果存储在 temp 数组中
  const temp = Array.from(new Set(nodesName.map((item) => item.name)))
  console.log('links.data', links.data)
  for (let i = 0; i < links.data.length; i++) {
    links.data[i].value = links.data[i].count
    links.data[i].target = links.data[i].Target_type.replace("\r", "")
    // links.data[i].target = links.data[i].Target_type
    links.data[i].source = links.data[i].Source_type
    links.data[i].lineStyle = {
      color: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: color[temp.indexOf(links.data[i].Source_type)]
          },
          {
            offset: 1,
            color:
              color[temp.indexOf(links.data[i].Target_type.replace("\r", ""))]
          }
        ],
        global: false // 缺省为 false
      },
      width: links.data[i].count / 6
    }
  }
  const nodes = []
  let node = {}
  for (let i = 0; i < temp.length; i++) {
    node = nodesName.find((item) => item.name === temp[i])
    node.itemStyle = {
      color: color[temp.indexOf(node.name)]
    }
    nodes.push(node)
  }
  console.log("nodes", nodes)
  console.log("links.data", links.data)

  const option = {
    title: {
      text: type,
      top: "bottom",
      left: "middle",
      textStyle: {
        fontSize: 25
      }
    },
    tooltip: {},
    animationDuration: 1500,
    animationEasingUpdate: "quinticInOut",
    series: [
      {
        zoom: 0.8,
        draggable: true,
        type: "graph",
        legendHoverLink: false,
        layout: "force",
        circular: {
          rotateLabel: true
        },
        data: nodes,
        links: links.data,
        roam: true,
        label: {
          position: "right",
          formatter: "{b}"
        },
        force: {
          edgeLength: 250,
          friction: 0.2
        },
        lineStyle: {
          curveness: 0.3
        },
        emphasis: {
          focus: "adjacency",
          lineStyle: {
            width: 10
          }
        }
      }
    ]
  }
  return option
}

const click = async (params) => {
  console.log('currentPage')
  const temp = params.data
  pages.value.currentPage = 1
  cellform.currentPage = pages.value.currentPage
  cellform.limit = pages.value.limit
  cellform.Source_type = temp.source
  cellform.Tissue = ccform.Tissue
  cellform.Category = temp.Category
  cellform.Target_type = temp.target
  if (!cellform.Source_type) {
    cellform.Source_type = temp.name
    cellform.Target_type = temp.name
  }
  const res = await getLinks(cellform)
  cctabelData.value = res.data.rows
  pages.value.total = res.data.count
  console.log("cctabelData", cctabelData)
}

// const onSubmit = async () => {
//     cellform.Tissue = ccform.Tissue
//     ccform.Category = "Young"
//     links = await getcLinks(ccform)
//     let option = getData(links, "Young")
//     Young.setOption(option)
//     // Aged
//     ccform.Category = "Aged"
//     links = await getcLinks(ccform)
//     option = getData(links, "Aged")
//     Aged.setOption(option)
//     // Mid
//     ccform.Category = "Mid"
//     links = await getcLinks(ccform)
//     option = getData(links, "Mid")
//     Mid.setOption(option)
//   }
// onSubmit()

onMounted(() => {
  const initGraph = async () => {
    clos.value = await getLCol()
    // construct Young
    cLinks = await getcLinks({ Category: "Young",Dataset_ID: route.query.Num})
    let option = {}
    if (cLinks.data.length !== 0) {
      option = getData(cLinks, "Young")
      Young = echarts.init(document.getElementById("Young"))
      Young.hideLoading()
      Young.setOption(option)
      Young.on("click", click)
    }
    // construct Aged
    cLinks = await getcLinks({ Category: "Aged", Dataset_ID: route.query.Num })
    if (cLinks.data.length !== 0) {
      option = getData(cLinks, "Aged")
      Aged = echarts.init(document.getElementById("Aged"))
      Aged.hideLoading()
      Aged.setOption(option)
      Aged.on("click", click)
    }
    // construct Mid group
    cLinks = await getcLinks({ Category: "Mid", Dataset_ID: route.query.Num})
    if (cLinks.data.length !== 0) {
      option = getData(cLinks, "Mid")
      Mid = echarts.init(document.getElementById("Mid"))
      Mid.hideLoading()
      Mid.setOption(option)
      Mid.on("click", click)
    }
    catList.value = await getGroup()
    TissueList.value = await getTissue()
  }
  initGraph()
})

const cchandelChange = async (val) => {
  pages.value.currentPage = val
  cellform.currentPage = val
  const res = await getLinks(cellform)
  cctabelData.value = res.data.rows
}
</script>

<style scoped >
@import url("../styles/dataset.css");
</style>
