<template>
    <el-container>
        <el-header>
        <Menus />
        </el-header>
        <el-main style="margin-left: auto; width: 1600px; margin-right: auto; font-size: 23px;">
            <h1 class="title" style="background-color: #248067;margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">
                Detail information of {{ route.query.keyword }} dataset
            </h1>  
            <div style="margin: auto; width: 1400px;">
              <el-table :data="speciesmergesData" stripe :row-style="{height: '65px'}" width="1400">
                <el-table-column prop='Num' label="Num" width="200"/>
                <el-table-column prop="Species" label="Species" width="300" />
                <el-table-column prop="Tissue" label="Tissue" width="150"/>
                <el-table-column prop="Project_ID" label="Project_ID" width="160" />
                <el-table-column prop="Sequencing_technique" label="Sequencing_technique" width="480" />
                <!-- <el-table-column label="Detail">
                  <template v-slot='scope'>
                    <el-button @click='search(scope.row.Species, scope.row.Tissue)' type="text"  style="margin: auto;" >{{scope.row.Detail}}</el-button>
                  </template>
                </el-table-column> -->
              </el-table>
              <el-pagination
              small
              @current-change="speciesmergesChange"
              :current-page="form.currentPage"
              :page-size="form.limit"
              background
              :total="form.total"
              layout="prev, pager, next"
              class="mt-4"
              style = "margin-left: 40%; margin-top: 2%"
              />
            </div>
        </el-main>
    </el-container>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'
import { getspeciesmerges } from '@/api/speciesmerges'
// import { onMounted } from 'vue'
import router from '@/router'
import { useRoute } from "vue-router"
import Menus from '../layout/menu-item'
const route = useRoute()

const speciesmergesData = ref([])

const form = reactive({
  currentPage: 1,
  limit: 20,
  total: 0,
  //  Project_ID: route.query.Project_ID,
  //  Tissue: route.query.Tissue,
  Species: route.query.keyword
  // currentPage: pages.value.currentPage
})
console.log('route.query.keyword', route.query.keyword)
const initspeciesmergesData = async (query) => {
  const res = await getspeciesmerges(query)
  speciesmergesData.value = res.data.rows
  form.total = res.data.count
  console.log('res.data.count', res.data.count)
}

onMounted(() => {
  initspeciesmergesData(form)
})

const speciesmergesChange = (val) => {
  form.currentPage = val
  initspeciesmergesData(form)
}
const search = (spe, tis) => {
  router.push({ path: 'microDetail', query: { Species: spe, Tissue: tis } })
}
</script>

<style scoped src="../styles/dataset.css">
#main{
  margin-left: 5%;
  margin-right: 35%;
}
</style>
