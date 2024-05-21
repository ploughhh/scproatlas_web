<!-- eslint-disable no-debugger -->
<!-- eslint-disable no-debugger -->
<template>
  <el-container v-loading="isLoading">
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
          Detail information of {{ route.query.Species + route.query.Tissue }}
        </h1>
      </div>
      <div>
        <div style="margin-left: 75px; width: 100%px; height: 850px; margin-right: auto; float: left;">
          <el-table :data="firtableData" border :show-header="false" fit :row-style="{ height: '65px' }">
            <el-table-column sortable prop="col11" width="380"></el-table-column>
            <el-table-column sortable prop="col12" width="720"></el-table-column>
          </el-table>
        </div>
      </div>
      <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">Aging-related mitochondrial mutations in {{route.query.Species + route.query.Tissue}}
        <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHovering3 = true" @mouseleave="isHovering3 = false">
        <div v-if="isHovering3" style="position: relative; margin-left: 1224px; top: -78px; left: -1190px; height: 94px; width: 91%; background-color: #303133;">
          <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
            Aging-related mitochondrial mutations were identified using GATK4.0. The preprocessing steps were performed using bowtie2. The annotation of the mutation was performed using VEP.
          </p>
        </div>
      </h1>
      <div>
        <el-form :model="form" label-width="160px" :inline="true">
          <el-form-item label="Gene Symbol">
            <el-input class="myInput" v-model="form.Symbol" />
          </el-form-item>
          <el-form-item label="Entrez ID">
            <el-input class="myInput" v-model="form.Entrez_ID" />
          </el-form-item>
          <el-form-item>
            <el-button style="margin-right: 20px;" type="primary" @click="mitochondrialonSubmit">Search</el-button>
            <el-button @click="Clean">Clean</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="mitochondrialtableData" style="width: 1290px; font-size: 18px">
          <!-- <el-table-column :prop="item" :label="item" v-for="item in clos" :key="item" width="167" /> -->
          <el-table-column prop="Location" label="Location"/>
          <el-table-column prop="Entrez_ID" label="Entrez ID"/>
          <el-table-column prop="Allele" label="Allele"/>
          <el-table-column prop="Symbol" label="Gene Symbol"/>
          <el-table-column prop="Age_group" label="Age group" />
          <el-table-column prop="Biotype" label="Biotype" width="150" />
          <!-- <el-table-column width="250" label="2D structure">
              <template v-slot="scope">
                <el-image :src="require('../../public/images/mito_picture/' + scope.row.Symbol + '.png')" style="width: 500px; height: 200px"></el-image>
              </template>
          </el-table-column> -->
          <el-table-column prop="genome_browser_url" label="UCSC Link">
              <template v-slot='scope'>
                <el-button type="text" style="left:center; margin: auto;">
                  <a :href="`${scope.row.genome_browser_url}`">Link</a>
                </el-button>
              </template>
            </el-table-column>
        </el-table>
        <el-pagination small @current-change="mitochondrialhandelChange" :current-page="form.currentPage" :page-size="form.limit"
          background :total="form.total" layout="prev, pager, next" class="mt-4" style="margin-left: 5%" />
      </div>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue"
import Menus from "../layout/menu-item"
import { useRoute } from "vue-router"
import { getmitochondrialdetail } from "@/api/mitochondrialdetail"
// import { getCat, getTissue } from '@/api/enum'
//   import { getTissue, getGroup } from "@/api/enum"
const echarts = require("echarts/lib/echarts")
require("echarts/lib/component/title")
require("echarts/lib/component/tooltip")
require("echarts/lib/component/legend")
require("echarts/lib/chart/graph")
const isHovering3 = ref(false)
const isLoading = ref(false);
const route = useRoute()
// get information
// const sctableData = ref([])
const mitochondrialtableData = ref([])

const form = reactive({
  Sample: '',
  Location: '',
  Allele: '',
  Symbol: '',
  Gene: '',
  Entrez_ID: '',
  Age_group: '',
  Biotype: '',
  currentPage: 1,
  limit: 20,
  total: 0,
  Number: route.query.Number,
})

const mitochondrial = async (query) => {
  isLoading.value = true;
  try {
    isLoading.value = false;
    const res = await getmitochondrialdetail(query)
    mitochondrialtableData.value = res.data.rows
    form.total = res.data.count
  } catch (error) {
    isLoading.value = false;
  }
}

const mitochondrialhandelChange = (val) => {
  form.currentPage = val
  mitochondrial(form)
}
const mitochondrialonSubmit = () => {
  form.currentPage = 1
  mitochondrial(form)
}

mitochondrial(form)

const Clean = () => {
  form.Sample = '',
  form.Location = '',
  form.Allele = '',
  form.Symbol = '',
  form.Gene = '',
  form.Entrez_ID = '',
  form.Age_group = '',
  form.Biotype = '',
  form.currentPage = 1,
  mitochondrial(form)
}

let firtableData = []
switch (route.query.Number) {
  case 'AMO-MT-001':
      firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-MT-001'
  },
  {
    col11: "Accession",
    col12: 'PRJNA777828'
  },
  {
    col11: "Database",
    col12: 'NCBI'
  },
  {
    col11: "Publication",
    col12: 'Advanced age increases frequencies of de novo mitochondrial mutations in macaque oocytes and somatic tissues'
  },
  {
    col11: "Year",
    col12: '2022'
  },
  {
    col11: "Pubmed",
    col12: '35394879'
  },
  {
    col11: "Species",
    col12: 'Rhesus macaque'
  },
  {
    col11: "Tissue",
    col12: 'Liver'
  },
  {
    col11: "Data type",
    col12: 'Duplex sequencing'
  },
  {
    col11: "Sample size",
    col12: '36'
  },
  {
    col11: "Age group",
    col12: 'Aged:15~23 years old; Young: 1~15 years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '40'
  }]
  break
  case 'AMO-MT-002':
      firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-MT-002'
  },
  {
    col11: "Accession",
    col12: 'PRJNA777828'
  },
  {
    col11: "Database",
    col12: 'NCBI'
  },
  {
    col11: "Publication",
    col12: 'Advanced age increases frequencies of de novo mitochondrial mutations in macaque oocytes and somatic tissues'
  },
  {
    col11: "Year",
    col12: '2022'
  },
  {
    col11: "Pubmed",
    col12: '35394879'
  },
  {
    col11: "Species",
    col12: 'Rhesus macaque'
  },
  {
    col11: "Tissue",
    col12: 'Skeletal muscle'
  },
  {
    col11: "Data type",
    col12: 'Duplex sequencing'
  },
  {
    col11: "Sample size",
    col12: '38'
  },
  {
    col11: "Age group",
    col12: 'Aged:15~23 years old; Young: 1~15 years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '40'
  }]
  break
  case 'AMO-MT-003':
      firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-MT-003'
  },
  {
    col11: "Accession",
    col12: 'PRJNA777828'
  },
  {
    col11: "Database",
    col12: 'NCBI'
  },
  {
    col11: "Publication",
    col12: 'Advanced age increases frequencies of de novo mitochondrial mutations in macaque oocytes and somatic tissues'
  },
  {
    col11: "Year",
    col12: '2022'
  },
  {
    col11: "Pubmed",
    col12: '35394879'
  },
  {
    col11: "Species",
    col12: 'Rhesus macaque'
  },
  {
    col11: "Tissue",
    col12: 'Heart'
  },
  {
    col11: "Data type",
    col12: 'Duplex sequencing'
  },
  {
    col11: "Sample size",
    col12: '8'
  },
  {
    col11: "Age group",
    col12: 'Aged:15~23 years old; Young: 1~15 years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '40'
  }]
  break
  case 'AMO-MT-004':
      firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-MT-004'
  },
  {
    col11: "Accession",
    col12: 'PRJNA777828'
  },
  {
    col11: "Database",
    col12: 'NCBI'
  },
  {
    col11: "Publication",
    col12: 'Advanced age increases frequencies of de novo mitochondrial mutations in macaque oocytes and somatic tissues'
  },
  {
    col11: "Year",
    col12: '2022'
  },
  {
    col11: "Pubmed",
    col12: '35394879'
  },
  {
    col11: "Species",
    col12: 'Rhesus macaque'
  },
  {
    col11: "Tissue",
    col12: 'Single oocytes'
  },
  {
    col11: "Data type",
    col12: 'Duplex sequencing'
  },
  {
    col11: "Sample size",
    col12: '20'
  },
  {
    col11: "Age group",
    col12: 'Aged:15~23 years old; Young: 1~15 years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '40'
  }]
  break
  case 'AMO-MT-005':
      firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-MT-005'
  },
  {
    col11: "Accession",
    col12: 'PRJNA563921'
  },
  {
    col11: "Database",
    col12: 'NCBI'
  },
  {
    col11: "Publication",
    col12: 'Age-related accumulation of de novo mitochondrial mutations in mammalian oocytes and somatic tissues'
  },
  {
    col11: "Year",
    col12: '2020'
  },
  {
    col11: "Pubmed",
    col12: '32667908'
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
    col12: 'Duplex sequencing'
  },
  {
    col11: "Sample size",
    col12: '47'
  },
  {
    col11: "Age group",
    col12: 'Aged: 10 months; Young: 20 days'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '4'
  }]
  break
  case 'AMO-MT-006':
      firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-MT-006'
  },
  {
    col11: "Accession",
    col12: 'PRJNA563921'
  },
  {
    col11: "Database",
    col12: 'NCBI'
  },
  {
    col11: "Publication",
    col12: 'Age-related accumulation of de novo mitochondrial mutations in mammalian oocytes and somatic tissues'
  },
  {
    col11: "Year",
    col12: '2020'
  },
  {
    col11: "Pubmed",
    col12: '32667908'
  },
  {
    col11: "Species",
    col12: 'Mouse'
  },
  {
    col11: "Tissue",
    col12: 'Skeletal muscle'
  },
  {
    col11: "Data type",
    col12: 'Duplex sequencing'
  },
  {
    col11: "Sample size",
    col12: '42'
  },
  {
    col11: "Age group",
    col12: 'Aged: 10 months; Young: 20 days'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '4'
  }]
  break
  case 'AMO-MT-007':
      firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-MT-007'
  },
  {
    col11: "Accession",
    col12: 'PRJNA563921'
  },
  {
    col11: "Database",
    col12: 'NCBI'
  },
  {
    col11: "Publication",
    col12: 'Age-related accumulation of de novo mitochondrial mutations in mammalian oocytes and somatic tissues'
  },
  {
    col11: "Year",
    col12: '2020'
  },
  {
    col11: "Pubmed",
    col12: '32667908'
  },
  {
    col11: "Species",
    col12: 'Mouse'
  },
  {
    col11: "Tissue",
    col12: 'oocytes'
  },
  {
    col11: "Data type",
    col12: 'Duplex sequencing'
  },
  {
    col11: "Sample size",
    col12: '56'
  },
  {
    col11: "Age group",
    col12: 'Aged: 10 months; Young: 20 days'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '4'
  }]
  break
  default:
    console.log("值不在可匹配的范围内")
  break
}
</script>
<style scoped >
@import url("../styles/dataset.css");
.myInput {
  width: 140px
}
</style>
