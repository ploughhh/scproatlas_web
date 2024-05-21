<template>
  <el-container>
    <el-header>
      <Menus />
    </el-header>
    <el-main style="margin-left: auto; width: 1650px; height:2828px; margin-right: auto; font-size: 23px;">
      <div style="float: left;">
        <h1 class="title" style="background-color: #248067; margin: 10px 0 10px 0; padding: 10px 0 48px 0; width: 100%; height:20px; float: left;">
          Loss of proteostasis in aging
        </h1>
        <div style="margin: 1px 1px 1px 1px; float: left;">
          <p style="margin-left: 120px; text-align:justify; padding: 5px 2px 5px 2px; width: 1370px;">
            &nbsp;&nbsp;&nbsp;Protein alteration and loss of proteostasis in aging can result in the accumulation of damaged proteins, leading to impaired cellular function, increased stress, and age-related diseases. The loss of proteostasis encompasses various aspects, such as alteration of the protein abundance, protein misfolding, aggregation, and disruption of the protein interactions. For example, aging can disrupt the intricate network of cellular pathways involved in maintaining protein homeostasis. This includes alterations in the expression and activity of molecular chaperones, proteases, and other components of the protein folding and degradation machinery. Protein alterations and loss of proteostasis can have cascading effects on tissues and organs. The accumulation of damaged proteins can lead to tissue-specific pathologies and contribute to the overall decline in physiological functions associated with aging.
          </p>
          <p style="margin-left: 120px; text-align:justify; padding: 5px 2px 5px 2px; width: 1370px;">
            &nbsp;&nbsp;&nbsp;In this database, we identified the aging-related protein using differential protein abundance analysis and correlation analysis. Moreover, we identified the intricate interaction network of the aging-related protein. The differential expressed protein was performed using Limma package. The significance level was set as p&lt;0.05. Then protein interaction network was performed using STRING.
          </p>
        </div>
        <div style="margin:0 10px 10px 195px; padding: 10px; width: 1400px; height:1000px; float: left;">
          <img src="../../public/images/Info/proteinInfo.png" fit="fill">
        </div>
        <!-- <div id="graph2" style="width: 600px;height:570px; float: left;"></div> -->
        <h1 class="title" style="background-color: #248067; margin: 20px 0 20px 0; padding: 10px 0 48px 0; width: 100%; height:20px; float: left;">
          Proteome datasets
        </h1>
        <div style="margin:10px 0px 10px 20px; padding: 10px 0px 10px 70px; width: 1570px; height:1000px;">
          <el-table :data="microData" stripe :row-style="{height: '65px'}" width="1400">
              <el-table-column sortable prop='Num' label="Dataset ID" width="220" />
              <el-table-column sortable prop="Species" label="Species" width="220" />
              <el-table-column sortable prop="Tissue" label="Tissue" width="270" />
              <el-table-column sortable prop="Project_ID" label="Project ID" width="200" />
              <el-table-column sortable prop="Sequencing_technique" label="Sequencing technique" width="430" />
              <el-table-column label="Result Page">
                <template v-slot='scope'>
                  <el-button @click='search(scope.row.Num, scope.row.Species, scope.row.Tissue )' type="text"  style="margin: auto;" >{{scope.row.Detail_Information}}</el-button>
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
import { getproteinInfo } from '@/api/proteinInfo'
import Menus from '../layout/menu-item'
import router from '@/router'
const route = useRoute()
const microData = ref([])

const initproteinInfo = async (query) => {
  const res = await getproteinInfo(query)
  microData.value = res.data.rows
  microData.value.total = res.data.count
}
initproteinInfo()

const initGetinitproteinInfo = async () => {
  initproteinInfo(route.query)
}
initGetinitproteinInfo()

const search = (num, spe, tis) => {
  router.push({ path: 'proteinDetail', query: { Num: num, Species: spe, Tissue: tis } })
}
</script>

<style scoped src="../styles/dataset.css">
#main{
  margin-left: 5%;
  margin-right: 35%;
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
