<template>
  <el-container>
    <el-header>
      <Menus />
    </el-header>
    <el-main
      style="
        margin-left: auto;
        width: 1600px;
        margin-right: auto;
        font-size: 23px;
      "
    >
      <div style="margin: auto; width: 1400px;">
        <el-table
          :data="datasetData"
          stripe
          :row-style="{ height: '65px' }"
          width="1400"
        >
          <el-table-column prop="Dataset_ID" label="Dataset ID" width="180" />
          <el-table-column prop="Category" label="Category" width="160" />
          <el-table-column prop="Species" label="Species" width="140" />
          <el-table-column prop="Tissue_type" label="Tissue" width="100"/>
          <el-table-column prop="Publication" label="Publication" width="260"/>
          <el-table-column prop="Year" label="Year" />
          <el-table-column prop="Journal" label="Journal"  width="170"  />
          <el-table-column prop="PMID" label="PMID" width="160" />
          <el-table-column prop="ProjectID" label="Project ID" />
          <!-- <el-table-column label="Detail Information" width="230">
            <template v-slot="scope">
              <el-button
                @click="search(scope.row.Species, scope.row.Tissue)"
                type="text"
                style="margin: auto"
                >{{ scope.row.Detail }}</el-button
              >
            </template>
          </el-table-column> -->
        </el-table>
        <el-pagination
          small
          @current-change="datasetChange"
          :current-page="datasetPages.currentPage"
          :page-size="datasetPages.limit"
          background
          :total="datasetPages.total"
          layout="prev, pager, next"
          class="mt-4"
          style="margin-left: 40%; margin-top: 2%"
        />
      </div>
    </el-main>
  </el-container>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue"
import { getdatasetData } from "../api/dataset"
// import { onMounted } from 'vue'

import Menus from "../layout/menu-item"
const datasetData = ref([])
const datasetPages = ref({})
const form = reactive({})

const initdatasetData = async (query) => {
  const res = await getdatasetData(query)
  datasetData.value = res.data.rows
  datasetData.value.total = res.data.count
}

onMounted(() => {
  initdatasetData()
})

datasetPages.value = {
  currentPage: 1,
  limit: 20,
  total: 138
}
const datasetChange = async (val) => {
  datasetPages.value.currentPage = val
  form.currentPage = val
  initdatasetData(form)
}
</script>

<style scoped src="../styles/dataset.css">
#main {
  margin-left: 5%;
  margin-right: 35%;
}
</style>
