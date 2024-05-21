<template>
    <el-container>
        <el-header>
            <Menus />
        </el-header>
        <el-main style="margin-left: auto; width: 1650px; margin-right: auto; font-size: 23px;">
            <div style="float: left;">
                <h1 class="title"
                    style="background-color: #248067; margin: 10px 0 10px 0; padding: 10px 0 48px 0; width: 100%; height:20px; float: left;">
                    integration of aging hallmarks
                </h1>
                <div style="margin: 1px 1px 1px 1px; float: left;">
                    <p style="margin-left: 120px; text-align:justify; padding: 5px 2px 5px 2px; width: 1370px;">
                        All of hallmarks of aging are strongly related among each other. For example, the gut microbiota is identified to regulate specific gene expression and metabolites in the aging process. Similar functional relationships can be listed for most if not all hallmarks of aging, illustrating their formidable interconnectivity.
                        <br> Thus, we extracted the aging-related microbiota-gene interactions from gutMgene database and previous studies. We also identified the aging-related metabolite-protein interaction from HMDB database.
                    </p>
                </div>
                <div style="display: flex; justify-content: center; align-items: center; margin-left: 100px; padding: 10px; width: 1400px; height:600px; float: left;">
                    <img src="../../public/images/Info/integrationInfo.png" fit="fill">
                </div>
                <div style="float: left">
                    <!-- <el-tabs v-model="activeName" style="margin-top: 2%;" type="card">
                        <el-tab-pane name="first">
                            <template #label> -->
                                <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 57px 0;  width: 100%; height:20px; float: left;">
                                    Aging-related gene-microbiota interactions
                                </h1>
                                <el-form :model="form" label-width="160px" :inline="true">
                                    <el-form-item label="Full name">
                                        <el-input class="myInput" v-model="form.Full_name" />
                                    </el-form-item>
                                    <el-form-item label="Scientific name">
                                        <el-input class="myInput" v-model="form.Scientific_name" />
                                    </el-form-item>
                                    <el-form-item label="NCBIID">
                                        <el-input class="myInput" v-model="form.NCBIID" />
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button style="margin-right: 20px;" type="primary" @click="Submit">Search</el-button>
                                        <el-button @click="Clean">Clean</el-button>
                                    </el-form-item>
                                    </el-form>
                            <div style="margin:10px 0px 10px 20px; padding: 10px 0px 10px 0px; width: 1570px; overflow-x: auto;">
                                <el-table :data="integration1Data" stripe :row-style="{ height: '65px' }" width="1970">
                                    <el-table-column sortable prop="Full_name" label="Full name" width="400" />
                                    <el-table-column sortable prop="Scientific_name" label="Scientific name" width="300"/>
                                    <el-table-column sortable prop="Animal" label="Animal" width="150"/>
                                    <el-table-column sortable prop="Tissue" label="Tissue" width="150"/>
                                    <el-table-column sortable prop="NCBIID" label="NCBIID" width="150"/>
                                    <el-table-column sortable prop="Associated_genes" label="Associated genes" width="400"/>
                                    <el-table-column sortable prop="Dataset_ID" label="Dataset ID" width="150"/>
                                    <el-table-column sortable prop="Result_Page" label="Result Page" width="150">
                                        <template v-slot='scope'>
                                        <el-button type="text" style="left:center; margin: auto; font-size: 22px;">
                                            <a :href="`${scope.row.Result_Page}`">Link</a>
                                        </el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <el-pagination small @current-change="integration1Change" :current-page="form.currentPage"
                                :page-size="form.limit" background :total="form.total"
                                layout="prev, pager, next" class="mt-4" style="margin-left: 40%; margin-top: 2%" />
                            </div>
                        <!-- </el-tab-pane> -->
                        <!-- <el-tab-pane name="second">
                            <template #label> -->
                                <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 57px 0;  width: 100%; height:20px; float: left;">
                                    Aging-related protein-metabolite interactions
                                </h1>
                                <el-form :model="proform" label-width="160px" :inline="true">
                                    <el-form-item label="Protein name">
                                        <el-input class="myInput" v-model="proform.Taxonomy" />
                                    </el-form-item>
                                    <el-form-item label="Associated metabolite">
                                        <el-input class="myInput" v-model="proform.Associated_metabolite" />
                                    </el-form-item>
                                    <el-form-item label="General function">
                                        <el-input class="myInput" v-model="proform.General_function" />
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button style="margin-right: 20px;" type="primary" @click="Submit2">Search</el-button>
                                        <el-button @click="Clean2">Clean</el-button>
                                    </el-form-item>
                                    </el-form>
                            <div style="margin:10px 0px 10px 20px; padding: 10px 0px 10px 0px; width: 1570px;">
                                <el-table :data="integration2Data" stripe :row-style="{ height: '65px' }" width="1500">
                                    <el-table-column sortable prop="Taxonomy" label="Protein name"  />
                                    <el-table-column sortable prop="protein_type" label="protein type" />
                                    <el-table-column sortable prop="Associated_metabolite" label="Associated metabolite" />
                                    <el-table-column sortable prop="General_function" label="General function" />
                                    <el-table-column sortable prop="Uniprot" label="Uniprot" />
                                    <el-table-column sortable prop="Dataset_ID" label="Dataset_ID" />
                                    <el-table-column sortable prop="link" label="link">
                                        <template v-slot='scope'>
                                            <el-button type="text" style="left:center; margin: auto; font-size: 22px;">
                                                <a :href="`${scope.row.link}`">Link</a>
                                            </el-button>
                                        </template>
                                    </el-table-column>  
                                </el-table>
                                <el-pagination small @current-change="integration2Change" :current-page="proform.currentPage"
                                :page-size="proform.limit" background :total="proform.total"
                                layout="prev, pager, next" class="mt-4" style="margin-left: 40%; margin-top: 2%" />
                            </div>
                        <!-- </el-tab-pane> -->
                    <!-- </el-tabs> -->
                </div>
            </div>
        </el-main>
    </el-container>
</template>

<script setup>
import { ref, reactive } from 'vue'
// import { useRoute } from 'vue-router'
import { getintegrationData1, getintegrationData2 } from '@/api/integration'
import Menus from '../layout/menu-item'
const integration1Data = ref([])
const integration1Pages = ref([])
const integration2Data = ref([])
const integration2Pages = ref([])
const form = reactive({
    Full_name: "",
    Scientific_name: "",
    Animal: "",
    Tissue: "",
    NCBIID: "",
    Division: "",
    genus: "",
    Associated_genes: "",
    Dataset_ID: "",
    Result_Page: "",
    currentPage: 1,
    limit: 20,
    total: 0,
})
const initintegration1 = async (query) => {
  const res = await getintegrationData1(query)
  integration1Data.value = res.data.rows
  form.total = res.data.count
}
initintegration1(form)
integration1Pages.value = {
  currentPage: 1,
  limit: 20,
  total: 107
}
const integration1Change = async (val) => {
  integration1Pages.value.currentPage = val
  form.currentPage = val
  initintegration1(form)
}
const Submit = () => {
    form.currentPage = 1
    initintegration1(form)
}
const Clean = () => {
    form.Full_name = "",
    form.Scientific_name = "",
    form.Animal = "",
    form.Tissue = "",
    form.NCBIID = "",
    form.Division = "",
    form.genus = "",
    form.Associated_genes = "",
    form.Dataset_ID = "",
    form.Result_Page = "",
    form.currentPage = 1
    initintegration1(form)
}
// const searchKeyword = ref('')
// const searchKeyword2 = ref('')

// const filteredintegration1Data = computed(() => {
//   if (!searchKeyword.value) {
//     return integration1Data
//   }
//   const keyword = searchKeyword.value.toLowerCase()
//   return integration1Data.value.filter(item => {
//     return (
//       item.Full_name.toLowerCase().includes(keyword) ||
//       item.Scientific_name.toLowerCase().includes(keyword) ||
//       item.Animal.toLowerCase().includes(keyword) ||
//       item.Tissue.toString().includes(keyword) ||
//       item.NCBIID.toString().includes(keyword) ||
//       item.Associated_genes.toString().includes(keyword) ||
//       item.Dataset_ID.toString().includes(keyword) ||
//       item.Result_Page.toString().includes(keyword)
//     )
//   })
// })
// const filteredintegration2Data = computed(() => {
//   if (!searchKeyword2.value) {
//     return integration2Data
//   }
//   const keyword = searchKeyword2.value.toLowerCase()
//   return integration2Data.value.filter(item => {
//     return (
//       item.Taxonomy.toLowerCase().includes(keyword) ||
//       item.protein_type.toLowerCase().includes(keyword) ||
//       item.Associated_metabolite.toLowerCase().includes(keyword) ||
//       item.General_function.toString().includes(keyword)
//     )
//   })
// })

const proform = reactive({
    Taxonomy: "",
    protein_type: "",
    Associated_metabolite: "",
    General_function: "",
    currentPage: 1,
    limit: 20,
    total: 0,
})
const initintegration2 = async (query) => {
  const res = await getintegrationData2(query)
  integration2Data.value = res.data.rows
  proform.total = res.data.count
}
initintegration2(proform)
integration2Pages.value = {
  currentPage: 1,
  limit: 20,
  total: 4489
}
const integration2Change = async (val) => {
  integration2Pages.value.currentPage = val
  proform.currentPage = val
  initintegration2(proform)
}
const Submit2 = () => {
    proform.currentPage = 1
    initintegration2(proform)
}
const Clean2 = () => {
    proform.Taxonomy = "",
    proform.protein_type = "",
    proform.Associated_metabolite = "",
    proform.General_function = "",
    proform.currentPage = 1
    initintegration2(proform)
}
</script>

<style scoped>
@import url("../styles/dataset.css");
#main {
    margin-left: 5%;
    margin-right: 35%;
}

.el-table__body {
    -webkit-border-vertical-spacing: 10px;
}

.intForm {
    margin-left: 15%;
}

.myInput {
    width: 140px
}
.little_title {
    text-align: center;
    margin-bottom: 100px;
    margin-top: 30px;
}</style>
