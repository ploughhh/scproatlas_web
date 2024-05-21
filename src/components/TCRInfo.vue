<template>
  <el-container>
    <el-header>
      <Menus />
    </el-header>
    <el-main style="margin-left: auto; width: 1650px; height:3100px; margin-right: auto; font-size: 23px;">
      <div style="float: left;">
        <h1 class="title" style="background-color: #248067; margin: 20px 0 20px 0; padding: 10px 0 48px 0; width: 100%; height:20px; float: left;">
          Immune repertoire clonality in aging
        </h1>
        <div style="margin: 1px 1px 1px 1px; float: left;">
          <p style="margin-left: 120px; text-align:justify; padding: 5px 2px 5px 2px; width: 1370px;">
            &nbsp;&nbsp;&nbsp;Aging is a progressive process with a substantial contribution from the deteriorating immune system. One of the hallmarks of immunosenescence is the decline in the diversity and function of T and B cells, which are key components of the adaptive immune system. The T cell receptor (TCR) and B cell receptor (BCR) are responsible for recognizing specific antigens and initiating an immune response. The repertoire of TCRs and BCRs is generated through a process of V(D)J recombination, which creates a diverse set of receptors capable of recognizing a wide range of antigens. The change of TCR and BCR repertoire in aging process may lead to a reduced ability to recognize and respond to new pathogens.
          </p>
          <p style="margin-left: 120px; text-align:justify; padding: 5px 2px 5px 2px; width: 1370px;">
            &nbsp;&nbsp;&nbsp;Here, we performed a comprehensive analysis to identify the alteration of TCR/BCR repertoire clonality, diversity, and TRB V/J gene usage in the aging process using mixcr and vdjtool based on the bulk and single cell TCR/BCR data. Moreover, we also calculated the generation probability of the CDR3 sequence and investigated the disease-associated CDR3 sequences in the TCR repertoire.
          </p>
        </div>
        <div style="margin:18px 10px -85px 199px; padding: 10px; width: 1400px; height:1000px; float: left;">
          <img src="../../public/images/Info/TCRInfo.png" fit="fill">
        </div>
        <!-- <div id="graph2" style="width: 600px;height:570px; float: left;"></div> -->
        <h1 class="title" style="background-color: #248067; margin: 20px 0 20px 0; padding: 10px 0 48px 0; width: 100%; height:20px; float: left;">
          Immunome datasets
        </h1>
        <div style="margin:10px 0px 10px -20px; padding: 10px 0px 10px 70px; width: 1580px; height:1000px;">
          <el-table :data="getTCRInfo()" :row-style="{height: '65px'}" width="1400">
              <el-table-column sortable prop='Number' label="Dataset ID" width="170" />
              <el-table-column sortable prop="Species" label="Species" width="140" />
              <el-table-column sortable prop="Tissue" label="Tissue" width="130" />
              <el-table-column sortable prop="Cell_type" label="Cell type" width="150" />
              <el-table-column sortable prop="Antigen_receptor_type" label="Antigen receptor type" width="310" />
              <el-table-column sortable prop="Sequencing_technique" label="Sequencing technique" width="310" />
              <el-table-column sortable prop="Project_ID" label="Project ID" width="180" />
              <el-table-column sortable prop="Detail" label="Result Page">
                <template v-slot='scope'>
                  <el-button @click='search(scope.row.Number, scope.row.Species, scope.row.Tissue)' type="text" style="left:center; margin: auto;" >{{scope.row.Detail}}</el-button>
                </template>
              </el-table-column>
          </el-table>
        </div>
      </div>
      </el-main>
  </el-container>
</template>

<script setup>

import { getTCRInfo } from '@/api/TCRInfo'
import Menus from '../layout/menu-item'
import router from '@/router'

const search = (num, spe, tis) => {
  router.push({ path: 'TCRDetail', query: { Number: num, Species: spe, Tissue: tis } })
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
