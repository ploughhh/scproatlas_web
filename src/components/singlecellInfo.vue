<template>
  <el-container>
    <el-header>
      <Menus />
    </el-header>
    <el-main style="margin-left: auto; width: 1630px; height:4141px; margin-right: auto; font-size: 23px;">
      <div style="float: left;">
        <h1 class="title" style="background-color: #248067; margin: 10px 0 10px 0; padding: 10px 0 48px 0; width: 1590px; height:20px; float: left;">
          Intercellular communication alteration in aging
        </h1>
        <div style="margin: 1px 1px 1px 1px; float: left;">
          <p style="margin-left: 120px; text-align:justify; padding: 5px 2px 5px 2px; width: 1370px;">
            &nbsp;&nbsp;&nbsp;In aging, there are significant alterations in intercellular communication, which refers to the exchange of signals and information between cells. These changes can occur at various levels. One aspect of altered intercellular communication in aging is a decline in cellular signaling pathways. Cells may become less responsive to external signals, leading to impaired communication and compromised cellular functions. This can affect processes such as immune response, tissue repair, and overall homeostasis. Another aspect is the dysregulation of secreted signaling molecules, such as cytokines, growth factors, and hormones. The production and release of these molecules can become imbalanced, resulting in chronic inflammation, impaired tissue regeneration, and disrupted cellular signaling cascades. Additionally, aging is associated with changes in the composition and functionality of cellular communication networks. This includes alterations in gap junctions, which are channels that allow direct communication between neighboring cells, as well as changes in extracellular vesicles and exosomes, which are involved in long-distance communication between cells. Overall, the altered intercellular communication in aging contributes to the decline in tissue function, impaired immune response, and increased susceptibility to age-related diseases. Understanding these changes is crucial for developing interventions and therapies to target age-related communication deficits and promote healthy aging.
          </p>
          <p style="margin-left: 120px; text-align:justify; padding: 5px 2px 5px 2px; width: 1370px;">
            &nbsp;&nbsp;&nbsp;Here, we investigate the aging-related cell-cell interaction network based on single cell datasets. We first annotated the cell types using Seurat according to the marker genes that reported in the previous studies. Differentially expressed genes (DEGs) can play a crucial role in modulating cell-cell interactions in various biological processes and contexts. Thus, we identified the aging-related DEGs, and constructed the aging-related cell interaction networks.
          </p>
        </div>
        <div style="display: flex; justify-content: center; align-items: center; margin-left: 100px; padding: 10px; width: 1400px; height:1000px; float: left;">
          <img src="../../public/images/Info/singlecellInfo.png" fit="fill">
        </div>
        <!-- <div id="graph2" style="width: 600px;height:570px; float: left;"></div> -->
        <h1 class="title" style="background-color: #248067; margin: 20px 0 20px 0; padding: 10px 0 48px 0; width: 1590px; height:20px; float: left;">
          Single cell transcriptome datasets
        </h1>
        <div style="margin:10px 0px 10px 20px; padding: 10px 0px 10px 70px; width: 1570px; height:1000px;">
          <el-table :data="microData" stripe :row-style="{height: '65px'}" width="1400">
              <el-table-column sortable prop='Num' label="Dataset ID" />
              <el-table-column sortable prop="Species" label="Species" />
              <el-table-column sortable prop="Tissue" label="Tissue" width="300" />
              <el-table-column sortable prop="Project_ID" label="Project ID" width="200" />
              <el-table-column sortable prop="Sequencing_technique" label="Sequencing technique" width="430" />
              <el-table-column label="Result Page">
                <template v-slot='scope'>
                  <el-button @click='search(scope.row.Num, scope.row.Species, scope.row.Tissue, scope.row.Project_ID)' type="text"  style="margin: auto;" >{{scope.row.Detail_Information}}</el-button>
                </template>
              </el-table-column>
          </el-table>
        </div>
      </div>
      </el-main>
  </el-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getsinglecellInfo } from '@/api/singlecellInfo'
import Menus from '../layout/menu-item'
import router from '@/router'
const route = useRoute()
const microData = ref([])

const initsinglecellInfo = async (query) => {
  const res = await getsinglecellInfo(query)
  microData.value = res.data.rows
  microData.value.total = res.data.count
}
initsinglecellInfo()

const initGetinitsinglecellInfo = async () => {
  initsinglecellInfo(route.query)
}
initGetinitsinglecellInfo()

const search = (num, spe, tis, id) => {
  router.push({ path: 'singlecellDetail', query: { Num: num, Species: spe, Tissue: tis, Project_ID: id } })
}
</script>

<style scoped src="../styles/dataset.css">
#main{
  margin-left: 5%;
  margin-right: 35%;
}
.title{
  background-color: #248067;
  margin: 10px 0 10px 0;
  padding: 10px 0 48px 0;
  width: 1590px;
  height:20px;
  float: left;
}
.el-table__body {
  -webkit-border-vertical-spacing: 10px;
}
.intForm {
  margin-left: 15%;
}
.little_title {
  text-align: center;
  margin-bottom: 100px;
  margin-top: 30px;
}
</style>
