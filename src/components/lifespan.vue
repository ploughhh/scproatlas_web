<template>
    <el-container>
        <el-header>
            <Menus />
        </el-header>
        <el-main style="margin-left: auto; width: 1650px; margin-right: auto; font-size: 23px;">
            <div style="float: left;">
                <h1 class="title"
                    style="background-color: #248067; margin: 10px 0 10px 0; padding: 10px 0 48px 0; width: 100%; height:20px; float: left;">
                    Lifespan regulator in longevity
                </h1>
                <div style="margin: 1px 1px 1px 1px; float: left;">
                    <p style="margin-left: 120px; text-align:justify; padding: 5px 2px 5px 2px; width: 1370px;">
                        &nbsp;&nbsp;&nbsp;
                        Many aging theories have been proposed, and important longevity pathways have been discovered with the help of model organisms, including yeasts, nematodes, fruit flies, and mice. Natural selection
                            has produced mammals with dramatically diverse aging rates that provide the opportunity to identify the underlying mechanisms of large changes in lifespan through comparative biology.
                        Here, we collected the gene expression profile to analysis the genes that correlated with the maximum lifespan across 26 mammalian species according to the method provided
                        by<span style="text-align:justify; padding: 5px 2px 5px 2px; width: 1370px; font-style: italic;"> Lu, J. Yuyang, et al. Cell Metabolism; 2022.</span></p>
                </div>
                <div style="display: flex; justify-content: center; align-items: center; margin-left: 100px; padding: 10px; width: 1400px; height:600px; float: left;">
                    <img src="../../public/images/Info/lifespanInfo.png" fit="fill">
                </div>
                <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">Lifespan regulators identified by comparative transcriptomic
                    <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringbar = true" @mouseleave="isHoveringbar = false">
                    <div v-if="isHoveringbar" style="position: relative; margin-left: 1224px; top: -51px; left: -1177px; height: 68px; width: 91%; background-color: #303133;">
                        <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                            The homologous genes across different species were first identified by using “homologene” package. Then, we conducted comparative transcriptomics on 26 species with diverse lifespans. Genes with expression positive correlation with the maximum lifespan are identified as Pos-MLS, while genes with negative correlation are identified as Neg-MLS. The threshold is P&lt;0.05.
                        </p>
                    </div>
                </h1>
                <el-form :model="form" label-width="165px" :inline="true">
                    <el-form-item label="Gene Symbol">
                        <el-input class="myInput" v-model="form.Gene" />
                    </el-form-item>
                    <el-form-item label="Category">
                        <el-input class="myInput" v-model="form.Category" />
                    </el-form-item>
                    <el-form-item>
                        <el-button style="margin-right: 20px;" type="primary" @click="onSubmit">Search</el-button>
                        <el-button @click="Clean">Clean</el-button>
                    </el-form-item>
                </el-form>
                <div style="margin:10px 0px 10px 20px; padding: 10px 0px 10px 70px; width: 1570px;">
                    <el-table :data="lifespanData" stripe width="1400">
                        <el-table-column sortable prop="Gene" label="Gene" width="300" />
                        <el-table-column sortable prop="R_value" label="R_value" />
                        <el-table-column sortable prop="p_value" label="p_value" />
                        <el-table-column sortable prop="Category" label="Category" />
                        <el-table-column width="250" label='Image'>
                            <template v-slot='scope'>
                                <el-image :src="require('../../public/images/lifespan_picture/' + scope.row.Gene + '.png')" style="width: 150px; height: 150px;"></el-image>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-pagination small @current-change="lifespanChange" :current-page="form.currentPage"
                    :page-size="form.limit" background :total="form.total"
                    layout="prev, pager, next" class="mt-4" style="margin-left: 40%; margin-top: 2%" />
                </div>
            </div>
        </el-main>
    </el-container>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { getlifespan } from '@/api/lifespan'
import Menus from '../layout/menu-item'
const isHoveringbar = ref(false)
const lifespanData = ref([])
const lifespanPages = ref([])
const form = reactive({
  Gene: '',
  R_value: '',
  p_value: '',
  Category: '',
  Image: ''
  // currentPage: pages.value.currentPage
})
const Clean = () => {
  form.Gene = ''
  form.R_value = ''
  form.p_value = ''
  form.Category = ''
  form.Image = ''
  initlifespan(form)
}
const initlifespan = async (query) => {
  const res = await getlifespan(query)
  lifespanData.value = res.data.rows
  lifespanData.value.total = res.data.count
}
initlifespan()
lifespanPages.value = {
  currentPage: 1,
  limit: 20,
  total: 395
}
const lifespanChange = async (val) => {
  lifespanPages.value.currentPage = val
  form.currentPage = val
  initlifespan(form)
}
const onSubmit = () => {
  form.currentPage = 1
  initlifespan(form)
}
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

.myInput {
    width: 165px
}
.little_title {
    text-align: center;
    margin-bottom: 100px;
    margin-top: 30px;
}</style>
