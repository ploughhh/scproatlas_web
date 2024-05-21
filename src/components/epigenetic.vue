<template>
    <el-container>
        <el-header>
            <Menus />
        </el-header>
        <el-main style="margin-left: auto; width: 1650px; height:2645px; margin-right: auto; font-size: 23px;">
            <div style="float: left;">
                <h1 class="title"
                    style="background-color: #248067; margin: 10px 0 10px 0; padding: 10px 0 48px 0; width: 100%; height:20px; float: left;">
                    Epigenetic alterations in aging
                </h1>
                <div style="margin: 1px 1px 1px 1px; float: left;">
                    <p style="margin-left: 120px; text-align:justify; padding: 5px 2px 5px 2px; width: 1370px;">
                        Epigenetic alterations play a significant role in the aging process, such as DNA methylation. During aging, global DNA methylation patterns tend to change, with some regions of the genome becoming more methylated while others become less methylated. These changes in DNA methylation can impact gene expression and contribute to age-related changes in cellular function.
                        <br><br> Here, we identified the aging-related differential methylation regions (DMR) using DSS and ChAMP to identify aging-related hypermethylation and hypomethylation. Then, we performed the enrichment analysis of DMR genes by using clusterProfiler to identify biology pathways that affected by aging-related DMRs.
                    </p>
                </div>
                <div style="display: flex; justify-content: center; align-items: center; margin-left: 100px; padding: 10px; width: 1400px; height:1000px; float: left;">
          <img src="../../public/images/Info/epigeneticInfo.png" fit="fill">
        </div>
        <!-- <div id="graph2" style="width: 600px;height:570px; float: left;"></div> -->
        <h1 class="title" style="background-color: #248067; margin: 20px 0 20px 0; padding: 10px 0 48px 0; width: 1590px; height:20px; float: left;">
          Epigenome datasets
        </h1>
        <div style="margin:10px 0px 10px 20px; padding: 10px 0px 10px 70px; width: 1570px; height:1000px;">
          <el-table :data="dmrData" stripe :row-style="{height: '65px'}" width="1400">
              <el-table-column sortable prop='Num' label="Dataset ID" width="220" />
              <el-table-column sortable prop="Species" label="Species" width="240" />
              <el-table-column sortable prop="Tissue" label="Tissue"/>
              <el-table-column sortable prop="Project_ID" label="Project ID" width="200" />
              <el-table-column sortable prop="Sequencing_technique" label="Sequencing technique" width="430" />
              <el-table-column label="Result Page">
                <template v-slot='scope'>
                  <el-button @click='search( scope.row.Num, scope.row.Species, scope.row.Tissue, scope.row.Project_ID)' type="text"  style="margin: auto;" >{{scope.row.Detail}}</el-button>
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
import { getdmrInfo } from '@/api/dmrInfo'
import Menus from '../layout/menu-item'
import router from '@/router'
const route = useRoute()
const dmrData = ref([])

const initdmrInfo = async (query) => {
  const res = await getdmrInfo(query)
  dmrData.value = res.data.rows
  dmrData.value.total = res.data.count
}
initdmrInfo()

const initGetinitdmrInfo = async () => {
  initdmrInfo(route.query)
}
initGetinitdmrInfo()

const search = (num, spe, tis, id) => {
  router.push({ path: 'epigeneticDetail', query: { Num: num, Species: spe, Tissue: tis, Project_ID: id } })
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
