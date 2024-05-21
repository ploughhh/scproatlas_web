<template>
    <el-container>
        <el-header>
            <Menus />
        </el-header>
        <el-main style="margin-left: auto; width: 1650px; margin-right: auto; font-size: 23px;">
            <div style="float: left;">
                <h1 class="title"
                    style="background-color: #248067; margin: 10px 0 10px 0; padding: 10px 0 48px 0; width: 100%; height:20px; float: left;">
                    Genomic instability in aging
                </h1>
                <div style="margin: 1px 1px 1px 1px; float: left;">
                    <p style="margin-left: 120px; text-align:justify; padding: 5px 2px 5px 2px; width: 1370px;">
                        Genomic instability refers to the accumulation of genetic alterations or mutations in the genome. It is a hallmark of aging and has been implicated in age-related diseases and the overall decline in cellular function. In the aging process, DNA is constantly exposed to endogenous and exogenous factors that can cause damage, such as reactive oxygen species, radiation, and chemical agents. As cells age, they become less efficient at repairing DNA damage, leading to the accumulation of mutations and altered gene expression.
                        <br> Here, we identified aging-related somatic mutations by using GATK v4.0 based on RNA-sequencing. We also identified the aging-related differential expression genes (DEG) using Limma package. After filtering of the low-quality mutations, we performed eQTL analysis to identify the mutations that potentially regulate the expression of aging-related genes.
                    </p>
                </div>
                <div style="display: flex; justify-content: center; align-items: center; margin-left: 100px; padding: 10px; width: 1400px; float: left;">
                    <img src="../../public/images/Info/genomicInfo.png" fit="fill">
                </div>
                <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 50px 0; width: 100%; height:20px; float: left;">Bulk Transcriptome datasets
                </h1>
                <div style="margin:10px 0px 10px 20px; padding: 10px 0px 10px 70px; width: 1570px;">
                    <el-table :data="genomicData" border stripe :row-style="{ height: '65px' }" width="1400">
                        <el-table-column sortable prop="Number" label="Dataset ID" width="300" />
                        <el-table-column sortable prop="Species" label="Species" />
                        <el-table-column sortable prop="Tissue" label="Tissue" />
                        <el-table-column sortable prop="Project_ID" label="Project_ID" />
                        <el-table-column sortable prop="Sequencing_technique" label="Sequencing_technique" />
                        <el-table-column label="Result Page">
                            <template v-slot='scope'>
                            <el-button @click='search(scope.row.Number, scope.row.Species, scope.row.Tissue, scope.row.Project_ID)' type="text"  style="margin: auto;" >{{scope.row.Detail}}</el-button>
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
// import { useRoute } from 'vue-router'
import { getgenomic } from '@/api/genomic'
import Menus from '../layout/menu-item'
import { useRoute } from 'vue-router'
import router from '@/router'

const genomicData = ref([])

const initgenomic = async (query) => {
  const res = await getgenomic(query)
  genomicData.value = res.data.rows

}
initgenomic()
const search = (num, spe, tis, id) => {
  router.push({ path: 'genomicDetail', query: { Number: num, Species: spe, Tissue: tis, Project_ID: id } })
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

.little_title {
    text-align: center;
    margin-bottom: 100px;
    margin-top: 30px;
}</style>
