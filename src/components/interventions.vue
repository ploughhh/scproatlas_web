<template>
    <el-container>
        <el-header>
            <Menus />
        </el-header>
        <el-main style="margin-left: auto; width: 1650px; margin-right: auto; font-size: 23px;">
            <div style="float: left;">
                <h1 class="title"
                    style="background-color: #248067; margin: 10px 0 10px 0; padding: 10px 0 48px 0; width: 100%; height:20px; float: left;">
                    Anti-aging interventions
                </h1>
                <div style="margin: 1px 1px 1px 1px; float: left;">
                    <p style="margin-left: 120px; text-align:justify; padding: 5px 2px 5px 2px; width: 1370px;">
                        &nbsp;&nbsp;&nbsp;Anti-aging interventions are strategies, treatments, and lifestyle modifications aimed at slowing down or reversing the processes associated with aging.
                        These interventions aim to promote longevity, maintain youthful appearance,
                        enhance physical and cognitive function, and reduce the risk of age-related diseases. Here, we summarized the examples of anti-aging interventions targeted on aging-hallmarks in multiple species.
                    </p>
                </div>
                <div style="display: flex; justify-content: center; align-items: center; margin-left: 100px; padding: 10px; width: 1400px; height:530px; float: left;">
                    <img src="../../public/images/Info/interventionInfo.png" fit="fill">
                </div>
                <h1 class="title"
                    style="background-color: #248067; margin: 20px 0 20px 0; padding: 10px 0 48px 0; width: 100%; height:20px; float: left;">
                    Anti-aging interventions Information
                </h1>
                <el-form :model="form" label-width="120px" :inline="true">
                    <el-form-item label="Species" style="font-size: 16.5px;">
                    <el-select v-model="form.Species" placeholder="please select" @change="spechange"
                        style="width: 130px;font-size: 16px;">
                        <el-option :label="item" v-for="item in speciesList" :key=item :value="item" />
                    </el-select>
                    </el-form-item>
                    <el-form-item label="Anti aging interventions">
                        <el-input v-model="form.Anti_aging_interventions" style="width: 140px" />
                    </el-form-item>
                    <el-form-item label="Type">
                    <el-select v-model="form.Hallmarks" placeholder="please select" @change="typchange"
                        style="width: 130px;font-size: 16px;">
                        <el-option :label="item" v-for="item in typeList" :key=item :value="item" />
                    </el-select>
                    </el-form-item>
                    <el-form-item label="Targets">
                        <el-input v-model="form.Targets" style="width: 140px" />
                    </el-form-item>
                    <el-form-item>
                    <el-button type="primary" @click="onSubmit">Search</el-button>
                    <el-button @click="Clean">Clean</el-button>
                    </el-form-item>
                </el-form>
                <div style="margin:10px 0px 10px 20px; padding: 10px 0px 10px 70px; width: 1570px;">
                    <el-table :data="interventionsData" stripe :row-style="{ height: '65px' }" width="1400">
                        <el-table-column sortable prop="Species" label="Species" width="125" />
                        <el-table-column sortable prop="Data_type" label="Data type" width="140" />
                        <el-table-column sortable prop="Hallmarks" label="Hallmarks" width="175" />
                        <el-table-column sortable prop="Anti_aging_interventions" label="Anti aging interventions" />
                        <el-table-column sortable prop="Targets" label="Targets" width="130" />
                        <el-table-column sortable prop="Effect" label="Effect" width="150"/>
                        <el-table-column sortable prop="Publication" label="Publication" width="360"/>
                        <el-table-column sortable prop="Year" label="Year" width="90" />
                        <el-table-column sortable label="Pubmed" width="150">
                            <template v-slot='scope'>
                                <el-button type="text" style="left:center; margin: auto;">
                                <a :href="`${scope.row.Link}`">{{ scope.row.Pubmed }}</a>
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-pagination small @current-change="interventionsChange" :current-page="form.currentPage"
                    :page-size="form.limit" background :total="form.total"
                    layout="prev, pager, next" class="mt-4" style="margin-left: 40%; margin-top: 2%" />
                </div>
            </div>
        </el-main>
    </el-container>
</template>

<script setup>
import { ref, reactive } from 'vue'
// import { useRoute } from 'vue-router'
import { getinterventions } from '@/api/interventions'
import Menus from '../layout/menu-item'
// import router from '@/router'
// const route = useRoute()
const interventionsData = ref([])
const interventionsPages = ref([])
const speciesList = ref(['mouse' ,'long-lived species' ,'human, mouse' ,'human' ,'mouse, monkey' ,'rat' ,'rhesus monkeys' ,'Drosophila melanogaster' ,'nonhuman primates'])
const typeList = ref(['Genomic instability' ,'Telomere attrition' ,'Epigenetic alteration' ,'Loss of proteostasis' ,'Disabled macroautophagy' ,'Mitochondrial dysfunction'])
const form = reactive({
  Species: '',
  Data_type: '',
  Hallmarks: '',
  Anti_aging_interventions: '',
  Targets: '',
  Effect: '',
  Publication: '',
  Year: '',
  Pubmed: '',
  Link: '',
  currentPage: 1,
  limit: 20,
  total: 0,
  // currentPage: pages.value.currentPage
})
const Clean = () => {
  form.Species = ''
  form.Data_type = ''
  form.Hallmarks = ''
  form.Anti_aging_interventions = ''
  form.Targets = ''
  form.Effect = ''
  form.Publication = ''
  form.Year = ''
  form.Pubmed = ''
  form.Link = ''
  initinterventions(form)
}
const initinterventions = async (query) => {
  const res = await getinterventions(query)
  interventionsData.value = res.data.rows
  form.total = res.data.count
}
initinterventions()
// interventionsPages.value = {
//   currentPage: 1,
//   limit: 20,
//   total: 395
// }
const interventionsChange = async (val) => {
  interventionsPages.value.currentPage = val
  form.currentPage = val
  initinterventions(form)
}
const onSubmit = () => {
  form.currentPage = 1
  initinterventions(form)
}
// const initGetinitproteinInfo = async () => {
//   initproteinInfo(route.query)
// }
// initGetinitproteinInfo()

// const search = (num) => {
//   router.push({ path: 'proteinDetail', query: { Num: num } })
// }
</script>

<style scoped src="../styles/dataset.css">
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

.little_title {
    text-align: center;
    margin-bottom: 100px;
    margin-top: 30px;
}</style>
