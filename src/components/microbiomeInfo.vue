<template>
  <el-container>
    <el-header>
      <Menus />
    </el-header>
    <el-main style="margin-left: auto; width: 1650px; margin-right: auto; font-size: 23px;">
      <div style="float: left;">
        <h1 class="title" style="background-color: #248067; margin: 10px 0 10px 0; padding: 10px 0 38px 0; width: 100%; height:20px; float: left;">
          Microbiota alterations in aging
        </h1>
        <div style="margin: 1px 1px 1px 1px; float: left;">
          <p style="margin-left: 120px; text-align:justify; padding: 5px 2px 5px 2px; width: 1370px;">
            &nbsp;&nbsp;&nbsp;Microbiota alterations in aging refer to changes in the composition, diversity, and function of the microorganisms that inhabit the human body as a person ages. Studies have shown that aging is associated with a decline in the diversity of microbiota, which can lead to dysbiosis (an imbalance of microbiota) and a reduction in beneficial microbes. This dysbiosis has been associated with various age-related diseases such as chronic inflammation, cardiovascular disease, neurodegenerative diseases, and even cognitive decline (Hallmarks of aging: An expanding universe. Cell, 2023).
          </p>
          <p style="margin-left: 120px; text-align:justify; padding: 5px 2px 5px 2px; width: 1370px;">
            &nbsp;&nbsp;&nbsp;Here, we identified and annotated the aging-related microbiome using 16S ribosomal RNA (rRNA) sequencing data across multiple species. Data were processed using the QIIME2 pipeline. Paired-end reads were trimmed and merged, and chimeric sequences were removed. Then, OTUs were clustered at 100% sequence similarity using DADA2 and classified using the QIIME2 pre-trained naïve Bayes classifier trained on the Greengenes database. The annotations include microbiome community composition, alpha and beta diversity in different age group, differential abundance in different age group and the correlation analysis between microbiome abundance and age.
          </p>
        </div>
        <div style="margin:0 10px 10px 195px; padding: 10px; width: 1400px; float: left;">
          <img src="../../public/images/Info/microbiomeInfo.png" fit="fill">
        </div>
        <!-- <div id="graph2" style="width: 600px;height:570px; float: left;"></div> -->
        <h1 class="title" style="background-color: #248067; margin: 20px 0 20px 0; padding: 10px 0 38px 0; width: 100%; height:20px; float: left;">
          Microbiota datasets
        </h1>
        <div style="margin:10px 0px 10px 20px; padding: 10px 0px 10px 70px; width: 1570px;">
          <el-table :data="microData" border stripe width="1400">
              <el-table-column sortable prop='Num' label="Dataset ID" width="220" />
              <el-table-column sortable prop="Species" label="Species" width="230" />
              <el-table-column sortable prop="Tissue" label="Tissue" width="270" />
              <el-table-column sortable prop="Project_ID" label="Project ID" />
              <el-table-column sortable prop="Sequencing_technique" label="Sequencing technique" width="430" />
              <el-table-column label="Result Page">
                <template v-slot='scope'>
                  <el-button @click='search(scope.row.Species, scope.row.Tissue)' type="text"  style="margin: auto;" >{{scope.row.Detail_Information}}</el-button>
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
import { getmicrobiomeInfo } from '@/api/microbiomeInfo'
import Menus from '../layout/menu-item'
import router from '@/router'
const route = useRoute()
let microData = ref([])

const initmicrobiomeInfo = async (query) => {
  const res = await getmicrobiomeInfo(query)
  microData.value = res.data.rows
  microData.value.total = res.data.count
}
initmicrobiomeInfo()

const initGetinitmicrobiomeInfo = async () => {
  initmicrobiomeInfo(route.query)
}
initGetinitmicrobiomeInfo()

const search = (spe, tis) => {
  router.push({ path: 'microDetail', query: { Species: spe, Tissue: tis } })
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
