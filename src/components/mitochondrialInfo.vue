<template>
    <el-container>
        <el-header>
            <Menus />
        </el-header>
        <el-main style="margin-left: auto; width: 1650px; margin-right: auto; font-size: 23px;">
            <div style="float: left;">
                <h1 class="title"
                    style="background-color: #248067; margin: 10px 0 10px 0; padding: 10px 0 48px 0; width: 100%; height:20px; float: left;">
                    Mitochondrial dysfunction in aging
                </h1>
                <div style="margin: 1px 1px 1px 1px; float: left;">
                    <p style="margin-left: 120px; text-align:justify; padding: 5px 2px 5px 2px; width: 1370px;">
                        As cells and organisms age, the mitochondria, which are the cellular powerhouses responsible for energy production, can experience various dysfunctions and accumulate mutations.
                        Mitochondrial DNA, which is separate from nuclear DNA, is more susceptible to mutations due to its proximity to ROS production and the limited repair mechanisms compared to nuclear DNA. These mutations can affect mitochondrial function and contribute to age-related pathologies.
                        <br> Here, we identified and annotated the aging-related mitochondria DNA mutations using bowtie2 and GATK. Then, we identified the mutation rate for each mitochondria gene in the aging process.
                    </p>
                </div>
                <div style="display: flex; justify-content: center; align-items: center; margin-left: 100px; padding: 10px; width: 1400px; float: left;">
                    <img src="../../public/images/Info/mitochondrialInfo.png" fit="fill">
                </div>
                <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">Mitochondrial genome datasets
                    <!-- <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringbar = true" @mouseleave="isHoveringbar = false">
                    <div v-if="isHoveringbar" style="position: relative; margin-left: 1224px; top: -68px; left: -1177px; height: 68px; width: 91%; background-color: #303133;">
                        <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                            The homologous genes across different species were first identified by using “homologene” package. Then, we conducted comparative transcriptomics on 26 species with diverse lifespans. Genes with expression positive correlation with the maximum lifespan are identified as Pos-MLS, while genes with negative correlation are identified as Neg-MLS. The threshold is P&lt;0.05.
                        </p>
                    </div> -->
                </h1>
                <div style="margin:10px 0px 10px 20px; padding: 10px 0px 10px 70px; width: 1570px;">
                    <el-table :data="mitochondrialData" border stripe width="1400">
                        <el-table-column sortable prop="Number" label="Dataset ID" />
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
import { ref, reactive } from 'vue'
// import { useRoute } from 'vue-router'
import { getmitochondrial } from '@/api/mitochondrial'
import Menus from '../layout/menu-item'
import { useRoute } from 'vue-router'
import router from '@/router'
const route = useRoute()

const mitochondrialData = ref([])

const initmitochondrial = async (query) => {
  const res = await getmitochondrial(query)
  mitochondrialData.value = res.data.rows

}
initmitochondrial()
const search = (num, spe, tis, id) => {
  router.push({ path: 'mitochondrialDetail', query: { Number: num, Species: spe, Tissue: tis, Project_ID: id } })
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
