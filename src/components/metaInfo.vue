<template>
    <el-container>
      <el-header>
        <Menus />
      </el-header>
      <div>
          <el-main style="margin-left: auto; width: 1710px; margin-right: auto; font-size: 23px;">
            <div style="float: left;">
              <h1 class="title" style="background-color: #248067; margin: 20px 0 20px 0; padding: 10px 0 38px 0; width: 100%; height:20px; float: left;">
                Desregulated metabolites in aging
              </h1>
              <div style="margin: 1px 1px 1px 1px; float: left;">
                <p style="margin-left: 120px; text-align:justify; padding: 5px 2px 5px 2px; width: 1370px;">
                  &nbsp;&nbsp;&nbsp;Aging and metabolism have a complex and interdependent relationship. Early theories suggested that the rate of metabolism and the by-products of metabolic processes played a significant role in driving the aging process. Several interventions that extend lifespan in model organisms have been identified to target nutritional and metabolic pathways. Dysregulated metabolism has been recognized as one of the hallmarks of aging, indicating that changes in metabolic pathways may contribute to the aging process. However, recent research has shown that the relationship between metabolism and aging is not straightforward and involves a complex interplay of factors such as genetic and environmental influences, cellular stress responses, and signaling pathways. Understanding the mechanisms underlying the relationship between aging and metabolism is essential for developing interventions that promote healthy aging and prevent age-related diseases.
                </p>
                <p style="margin-left: 120px; text-align:justify; padding: 5px 2px 5px 2px; width: 1370px;">
                  &nbsp;&nbsp;&nbsp;Here, we collected liquid chromatography-mass spectrometry (LC-MS) data that identifies and quantifies metabolites in aging studies in multiple species. We collected aging-related metabolites from the Metaboage database. We annotated the aging-related metabolites using differential metabolites analysis, metabolic enrichment analysis and metabolic interaction network. Differential analysis and enrichment analysis are performed using MetaboAnalyst. The metabolic network is constructed using Hmisc package.
                </p>
              </div>
              <div style="margin:0 10px 10px 260px; padding: 10px; width: 1400px; float: left;">
                <img style="height: 1000px; width: 1010px;" src="../../public/images/Info/metaInfo.png" fit="fill">
              </div>

              <h1 class="title" style="background-color: #248067; margin: 20px 0 20px 0; padding: 10px 0 38px 0; width: 100%; height:20px; float: left;">
                Metabolome datasets
              </h1>
              <div style="margin:10px 0px 10px 20px; padding: 10px 0px 10px 70px; width: 1550px;">
                <el-table :data="metaInfoData()" stripe :row-style="{height: '65px'}" width="1400">
                    <el-table-column sortable prop='Number' label="Dataset ID" width="200" />
                    <el-table-column sortable prop="Species" label="Species" width="220" />
                    <el-table-column sortable prop="Tissue" label="Tissue" width="290" />
                    <el-table-column sortable prop="Project_ID" label="Project ID" width="200" />
                    <el-table-column sortable prop="Sequencing_technique" label="Sequencing technique"/>
                    <el-table-column sortable prop="Detail_information" label="Result Page" width="220">
                      <template v-slot='scope'>
                        <el-button @click='search(scope.row.Number, scope.row.Species, scope.row.Tissue)' type="text" style="left:center; margin: auto;" >{{scope.row.Detail_information}}</el-button>
                      </template>
                    </el-table-column>
                </el-table>
              </div>
            </div>
          </el-main>
        </div>
    </el-container>
  </template>

<script setup>
import { ref } from 'vue'

import { metaInfoData } from '@/api/metaInfo'
import Menus from '../layout/menu-item'
import router from '@/router'

const search = (num, spe, tis) => {
  router.push({
    path: 'metaDetail',
    query: { Number: num, Species: spe, Tissue: tis }
  })
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
