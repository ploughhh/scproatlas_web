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
            Detail information of {{ route.query.Species + " " + route.query.Tissue }}
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
        <!-- VEP表 -->
        <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">Aging-related somatic mutations
          <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHovering3 = true" @mouseleave="isHovering3 = false">
          <div v-if="isHovering3" style="position: relative; margin-left: 1224px; top: -78px; left: -1190px; height: 90px; width: 91%; background-color: #303133;">
            <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
              Aging-related somatic mutations are identified using Genome Analysis ToolKit (GATK4.0) software. The preprocessing steps are performed using STAR.
              The thresholds are set according to the recommendation of GATK: QD &lt; 2.0; MQ &lt; 40.0; FS &gt; 60.0; SOR &gt; 3.0; MQRankSum &lt; –12.5; ReadPosRankSum &lt; –8.0.
            </p>
          </div>
        </h1>
        <div>
          <el-form :model="vepform" label-width="160px" :inline="true">
            <el-form-item label="Gene Symbol">
              <el-input class="myInput" v-model="vepform.Taxonomy" style="width: 140px" />
            </el-form-item>
            <el-form-item label="Feature type">
              <el-input class="myInput" v-model="vepform.Feature_type" style="width: 140px" />
            </el-form-item>
            <el-form-item label="Entrez_ID">
              <el-input class="myInput" v-model="vepform.Entrez_ID" style="width: 140px" />
            </el-form-item>
            <el-form-item>
              <el-button style="margin-right: 20px;" type="primary" @click="genomicveponSubmit">Search</el-button>
              <el-button @click="vepClean">Clean</el-button>
            </el-form-item>
          </el-form>
          <el-table :data="genomicveptableData" style="width: 1290px; font-size: 18px">
            <!-- <el-table-column :prop="item" :label="item" v-for="item in clos" :key="item" width="167" /> -->
            <el-table-column prop="Location" label="Location" />
            <el-table-column prop="raw_site" label="raw_site" width="100" />
            <el-table-column prop="Allele" label="Allele" width="100" />
            <el-table-column prop="Taxonomy" label="Gene Symbol" />
            <el-table-column prop="Feature_type" label="Feature_type" />
            <el-table-column prop="Consequence" label="Consequence"/>
            <el-table-column prop="QUAL" label="QUAL"/>
            <el-table-column prop="Entrez_ID" label="Entrez ID"/>
            <el-table-column prop="genome_browser_url" label="UCSC Link">
              <template v-slot='scope'>
                <el-button type="text" style="left:center; margin: auto;">
                  <a :href="`${scope.row.genome_browser_url}`">Link</a>
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination small @current-change="genomicvephandelChange" :current-page="vepform.currentPage" :page-size="vepform.limit"
            background :total="vepform.total" layout="prev, pager, next" class="mt-4" style="margin-left: 5%" />
        </div>
        <!-- DE表 -->
        <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">Differential gene expression by age group
          <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHovering3 = true" @mouseleave="isHovering3 = false">
          <div v-if="isHovering3" style="position: relative; margin-left: 1224px; top: -36px; left: -1190px; height: 45px; width: 91%; background-color: #303133;">
            <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
              Differential gene expression analysis between age groups is performed using LIMMA. The significance level is set as p&lt;0.05.
            </p>
          </div>
        </h1>
        <div>
          <el-form :model="deform" label-width="160px" :inline="true">
            <el-form-item label="Gene Symbol">
              <el-input class="myInput" v-model="deform.Taxonomy" style="width: 140px" />
            </el-form-item>
            <el-form-item>
              <el-button style="margin-right: 20px;" type="primary" @click="genomicdeonSubmit">Search</el-button>
              <el-button @click="deClean">Clean</el-button>
            </el-form-item>
          </el-form>
          <el-table :data="genomicdetableData" style="width: 1290px; font-size: 18px">
            <!-- <el-table-column :prop="item" :label="item" v-for="item in clos" :key="item" width="167" /> -->
            <el-table-column prop="Taxonomy" label="Gene Symbol"/>
            <el-table-column prop="species" label="species" />
            <el-table-column prop="tissue" label="tissue" width="180" />
            <el-table-column prop="group" label="group" width="100" />
            <el-table-column prop="P_Value" label="P_Value" width="100" />
            <el-table-column prop="logFC" label="logFC" width="120" />
            <el-table-column prop="FDR" label="FDR" width="150" />
            <el-table-column prop="g" label="Up/Dowm" />
            <el-table-column prop="species_specific_gene" label="species_specific" />
          </el-table>
          <el-pagination small @current-change="genomicdehandelChange" :current-page="deform.currentPage" :page-size="deform.limit"
            background :total="deform.total" layout="prev, pager, next" class="mt-4" style="margin-left: 5%" />
        </div>
        <!-- EQTL表 -->
        <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">Expression quantitative trait Loci (eQTL) of aging-related mutations
          <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHovering3 = true" @mouseleave="isHovering3 = false">
          <div v-if="isHovering3" style="position: relative; margin-left: 1224px; top: -56px; left: -1190px; height: 72px; width: 91%; background-color: #303133;">
            <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
              eQTL analysis was performed by using “MatrixEQTL” to identify mutations that potentially associated with gene expression alteration in the aging process. The threshold for eQTL analysis is set as p&lt;0.05.
            </p>
          </div>
        </h1>
        <div>
          <el-form :model="eqtlform" label-width="160px" :inline="true">
            <el-form-item label="mutation gene">
              <el-input class="myInput" v-model="eqtlform.Taxonomy" style="width: 140px" />
            </el-form-item>
            <el-form-item label="aging related DEG">
              <el-input class="myInput" v-model="eqtlform.aging_related_DEG" style="width: 140px" />
            </el-form-item>
            <el-form-item>
              <el-button style="margin-right: 20px;" type="primary" @click="genomiceqtlonSubmit">Search</el-button>
              <el-button @click="eqtlClean">Clean</el-button>
            </el-form-item>
          </el-form>
          <el-table :data="genomiceqtltableData" style="width: 1290px; font-size: 18px">
            <!-- <el-table-column :prop="item" :label="item" v-for="item in clos" :key="item" width="167" /> -->
            <el-table-column prop="Taxonomy" label="mutation_gene" />
            <el-table-column prop="aging_related_DEG" label="aging_related_DEG" width="180" />
            <el-table-column prop="species" label="species" />
            <el-table-column prop="statistic" label="statistic" width="100" />
            <el-table-column prop="pvalue" label="pvalue" width="100" />
            <el-table-column prop="FDR" label="FDR" width="120" />
            <el-table-column prop="beta" label="beta" width="150" />
          </el-table>
          <el-pagination small @current-change="genomiceqtlhandelChange" :current-page="eqtlform.currentPage" :page-size="eqtlform.limit"
            background :total="eqtlform.total" layout="prev, pager, next" class="mt-4" style="margin-left: 5%" />
        </div>
      </el-main>
    </el-container>
  </template>
  
  <script setup>
  import { ref, reactive, onMounted } from "vue"
  import Menus from "../layout/menu-item"
  import { useRoute } from "vue-router"
  import { getgenomicde, getgenomiceqtl, getgenomicvep } from "@/api/genomic"
  // import { getCat, getTissue } from '@/api/enum'
//   import { getTissue, getGroup } from "@/api/enum"
  const echarts = require("echarts/lib/echarts")
  require("echarts/lib/component/title")
  require("echarts/lib/component/tooltip")
  require("echarts/lib/component/legend")
  require("echarts/lib/chart/graph")
  const isHovering1 = ref(false)
  const isHovering2 = ref(false)
  const isHovering3 = ref(false)
  const isHovering4 = ref(false)
  const route = useRoute()
  const isLoading = ref(false);
  // get information
  // const sctableData = ref([])
  const genomicdetableData = ref([])
  const genomiceqtltableData = ref([])
  const genomicveptableData = ref([])
  // const scpages = reactive({
  //   currentPage: 1,
  //   limit: 20,
  //   total: 0
  // })

  const deform = reactive({
    species: '',
    tissue: '',
    group: '',
    FDR: '',
    P_Value: '',
    logFC: '',
    g: '',
    Taxonomy: '',
    species_specific_gene: '',
    currentPage: 1,
    limit: 20,
    total: 0,
    Number: route.query.Number,
    Tissue: route.query.Tissue,
    Species: route.query.Species
  })
  const eqtlform = reactive({
    Taxonomy: '',
    aging_related_DEG: '',
    statistic: '',
    pvalue: '',
    FDR: '',
    beta: '',
    species: '',
    currentPage: 1,
    limit: 20,
    total: 0,
    Number: route.query.Number,
    Tissue: route.query.Tissue,
    Species: route.query.Species
  })
  const vepform = reactive({
    Location: '',
    raw_site: '',
    Allele: '',
    Gene: '',
    Taxonomy: '',
    Feature_type: '',
    Consequence: '',
    species: '',
    currentPage: 1,
    limit: 20,
    total: 0,
    Number: route.query.Number,
    Tissue: route.query.Tissue,
    Species: route.query.Species
  })
  // const Data1 = [{
  //   col11: ['Dataset ID', 'Accession', 'Database', 'Publication', 'Year', 'Pubmed', 'Species', 'Tissue', 'Data type', 'Sample size', 'Age group', 'Maximum lifespan (year)'],
  //   col12: ['AMO-SC-001', 'GSE155006', 'GEO', 'Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging', '2021', '33271118', 'Mouse', 'Liver', '10X Chromium single cell sequencing', '6', 'Young:3 months Aged; Aged: 17 months Aged', '4']
  // }]
  
  const genomicde = async (query) => {
    // eslint-disable-next-line no-debugger
    isLoading.value = true;
  try {
    const res = await getgenomicde(query)
    genomicdetableData.value = res.data.rows
    deform.total = res.data.count
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
  }
    
  }
  
  const genomicdehandelChange = (val) => {
    deform.currentPage = val
    genomicde(deform)
  }
  const genomicdeonSubmit = () => {
    deform.currentPage = 1
    genomicde(deform)
  }
  
  genomicde(deform)
  
  const genomiceqtl = async (query) => {
    isLoading.value = true;
    try {
      const res = await getgenomiceqtl(query)
      genomiceqtltableData.value = res.data.rows
      eqtlform.total = res.data.count
      isLoading.value = false;
    } catch (error) {
      isLoading.value = false;
    } 
  }
  
  const genomiceqtlhandelChange = (val) => {
    eqtlform.currentPage = val
    genomiceqtl(eqtlform)
  }
  const genomiceqtlonSubmit = () => {
    eqtlform.currentPage = 1
    genomiceqtl(eqtlform)
  }
  
  genomiceqtl(eqtlform)

  const genomicvep = async (query) => {
    isLoading.value = true;
    try {
      const res = await getgenomicvep(query)
      genomicveptableData.value = res.data.rows
      vepform.total = res.data.count
      isLoading.value = false;
    } catch (error) {
      isLoading.value = false;
    }
  }
  
  const genomicvephandelChange = (val) => {
    vepform.currentPage = val
    genomicvep(vepform)
  }
  const genomicveponSubmit = () => {
    vepform.currentPage = 1
    genomicvep(vepform)
  }
  
  genomicvep(vepform)

  const deClean = () => {
    deform.species = '',
    deform.tissue = '',
    deform.group = '',
    deform.FDR = '',
    deform.P_Value = '',
    deform.logFC = '',
    deform.g = '',
    deform.symbol = '',
    deform.species_specific_gene = '',
    genomicde(deform)
  }
  const eqtlClean = () => {
    eqtlform.mutation_gene = '',
    eqtlform.aging_related_DEG = '',
    eqtlform.statistic = '',
    eqtlform.pvalue = '',
    eqtlform.FDR = '',
    eqtlform.beta = '',
    eqtlform.species = '',
    genomiceqtl(eqtlform)
  }
  const vepClean = () => {
    vepform.Location = '',
    vepform.raw_site = '',
    vepform.Allele = '',
    vepform.Taxonomy = '',
    vepform.Feature_type = '',
    vepform.Consequence = '',
    vepform.QUAL = '',
    vepform.Entrez_ID = '',
    vepform.genome_browser_url = '',
    genomicvep(vepform)
  }
  let cellList = ref([])
  let firtableData = []
  switch (route.query.Number) {
    case 'AMO-BT-001':
    firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-BT-001'
  },
  {
    col11: "Accession",
    col12: 'GSE101964'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'Unique patterns of trimethylation of histone H3 lysine 4 are prone to changes during aging in Caenorhabditis elegans somatic cells'
  },
  {
    col11: "Year",
    col12: '2018'
  },
  {
    col11: "Pubmed",
    col12: '29912876'
  },
  {
    col11: "Species",
    col12: 'Caenorhabditis. elegans'
  },
  {
    col11: "Tissue",
    col12: 'Whole body'
  },
  {
    col11: "Data type",
    col12: 'Bulk RNA sequencing'
  },
  {
    col11: "Sample size",
    col12: '4'
  },
  {
    col11: "Age group",
    col12: 'Aged: 12 days; Young: 12 days'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '0.16'
  }]
break
case 'AMO-BT-002':
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-BT-002'
  },
  {
    col11: "Accession",
    col12: 'GSE107049'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'Brain transcriptome changes in the aging Drosophila melanogaster accompany olfactory memory performance deficits'
  },
  {
    col11: "Year",
    col12: '2018'
  },
  {
    col11: "Pubmed",
    col12: '30576353'
  },
  {
    col11: "Species",
    col12: 'Drosophila melanogaster'
  },
  {
    col11: "Tissue",
    col12: 'Brain'
  },
  {
    col11: "Data type",
    col12: 'Bulk RNA sequencing'
  },
  {
    col11: "Sample size",
    col12: '22'
  },
  {
    col11: "Age group",
    col12: 'Aged: 20, 30, and 40 days;; Young: 5 days'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '0.3'
  }]
break
case 'AMO-BT-003':
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-BT-003'
  },
  {
    col11: "Accession",
    col12: 'GSE108282'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: "Aging African green monkeys manifest transcriptional, pathological, and cognitive hallmarks of human Alzheimer's disease"
  },
  {
    col11: "Year",
    col12: '2018'
  },
  {
    col11: "Pubmed",
    col12: '29353102'
  },
  {
    col11: "Species",
    col12: 'Chlorocebus aethiop'
  },
  {
    col11: "Tissue",
    col12: 'Brain'
  },
  {
    col11: "Data type",
    col12: 'Bulk RNA sequencing'
  },
  {
    col11: "Sample size",
    col12: '28'
  },
  {
    col11: "Age group",
    col12: 'Aged: 18-34 years; Young: 2-16 years'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '32'
  }]
break
case 'AMO-BT-004':
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-BT-004'
  },
  {
    col11: "Accession",
    col12: 'GSE66362'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'Longitudinal RNA-Seq Analysis of Vertebrate Aging Identifies Mitochondrial Complex I as a Small-Molecule-Sensitive Modifier of Lifespan'
  },
  {
    col11: "Year",
    col12: '2016'
  },
  {
    col11: "Pubmed",
    col12: '27135165'
  },
  {
    col11: "Species",
    col12: 'Danio rerio'
  },
  {
    col11: "Tissue",
    col12: 'Brain'
  },
  {
    col11: "Data type",
    col12: 'Bulk RNA sequencing'
  },
  {
    col11: "Sample size",
    col12: '13'
  },
  {
    col11: "Age group",
    col12: 'Short-lived: age of death 28–36 weeks, Long-lived: age of death 45–50 weeks, and Longest-lived: age of death 57–71 weeks'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '5.5'
  }]
break
case 'AMO-BT-005':
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-BT-005'
  },
  {
    col11: "Accession",
    col12: 'GSE66362'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'Longitudinal RNA-Seq Analysis of Vertebrate Aging Identifies Mitochondrial Complex I as a Small-Molecule-Sensitive Modifier of Lifespan'
  },
  {
    col11: "Year",
    col12: '2016'
  },
  {
    col11: "Pubmed",
    col12: '27135165'
  },
  {
    col11: "Species",
    col12: 'Danio rerio'
  },
  {
    col11: "Tissue",
    col12: 'Liver'
  },
  {
    col11: "Data type",
    col12: 'Bulk RNA sequencing'
  },
  {
    col11: "Sample size",
    col12: '13'
  },
  {
    col11: "Age group",
    col12: 'Short-lived: age of death 28–36 weeks, Long-lived: age of death 45–50 weeks, and Longest-lived: age of death 57–71 weeks'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '5.5'
  }
  ]
break
case 'AMO-BT-006':
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-BT-006'
  },
  {
    col11: "Accession",
    col12: 'GSE66362'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'Longitudinal RNA-Seq Analysis of Vertebrate Aging Identifies Mitochondrial Complex I as a Small-Molecule-Sensitive Modifier of Lifespan'
  },
  {
    col11: "Year",
    col12: '2016'
  },
  {
    col11: "Pubmed",
    col12: '27135165'
  },
  {
    col11: "Species",
    col12: 'Danio rerio'
  },
  {
    col11: "Tissue",
    col12: 'Skin'
  },
  {
    col11: "Data type",
    col12: 'Bulk RNA sequencing'
  },
  {
    col11: "Sample size",
    col12: '13'
  },
  {
    col11: "Age group",
    col12: 'Short-lived: age of death 28–36 weeks, Long-lived: age of death 45–50 weeks, and Longest-lived: age of death 57–71 weeks'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '5.5'
  },
  ]
break
case 'AMO-BT-007':
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-BT-007'
  },
  {
    col11: "Accession",
    col12: 'GSE66715'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'Integrated Transcriptome and Proteome Analyses Reveal Organ-Specific Proteome Deterioration in Old Rats'
  },
  {
    col11: "Year",
    col12: '2015'
  },
  {
    col11: "Pubmed",
    col12: '27135913'
  },
  {
    col11: "Species",
    col12: 'Rat'
  },
  {
    col11: "Tissue",
    col12: 'Brain'
  },
  {
    col11: "Data type",
    col12: 'Bulk RNA sequencing'
  },
  {
    col11: "Sample size",
    col12: '6'
  },
  {
    col11: "Age group",
    col12: 'Aged:24 months old; Young: 6 months old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '3.8'
  },
  ]
break
case 'AMO-BT-008':
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-BT-008'
  },
  {
    col11: "Accession",
    col12: 'GSE52462'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'RNA-seq of the aging brain in the short-lived fish N. furzeri – conserved pathways and novel genes associated with neurogenesis'
  },
  {
    col11: "Year",
    col12: '2015'
  },
  {
    col11: "Pubmed",
    col12: '25059688'
  },
  {
    col11: "Species",
    col12: 'Nothobranchius furzeri'
  },
  {
    col11: "Tissue",
    col12: 'Brain'
  },
  {
    col11: "Data type",
    col12: 'Bulk RNA sequencing'
  },
  {
    col11: "Sample size",
    col12: '25'
  },
  {
    col11: "Age group",
    col12: 'Aged:27, 39 months old; Young: 5, 12, 20 months old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '3.25'
  },
  ]
break
case 'AMO-BT-009':
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-BT-009'
  },
  {
    col11: "Accession",
    col12: 'GSE123590'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'Comprehensive transcriptional profiling of aging porcine liver'
  },
  {
    col11: "Year",
    col12: '2019'
  },
  {
    col11: "Pubmed",
    col12: '31149403'
  },
  {
    col11: "Species",
    col12: 'Sus scrofa'
  },
  {
    col11: "Tissue",
    col12: 'Liver'
  },
  {
    col11: "Data type",
    col12: 'Bulk RNA sequencing'
  },
  {
    col11: "Sample size",
    col12: '4'
  },
  {
    col11: "Age group",
    col12: 'Aged: 8 years old; Young: 180 days old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '27'
  }
  ]
break
case 'AMO-BT-010':
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-BT-010'
  },
  {
    col11: "Accession",
    col12: 'GSE106670'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'Repression of human and mouse brain inflammaging transcriptome by broad gene-body histone hyperacetylation'
  },
  {
    col11: "Year",
    col12: '2018'
  },
  {
    col11: "Pubmed",
    col12: '29967166'
  },
  {
    col11: "Species",
    col12: 'Human'
  },
  {
    col11: "Tissue",
    col12: 'Brain'
  },
  {
    col11: "Data type",
    col12: 'Bulk RNA sequencing'
  },
  {
    col11: "Sample size",
    col12: '8'
  },
  {
    col11: "Age group",
    col12: 'Aged: >60 years old; Young: <60 years old '
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '122.5'
  }
  ]
break
case 'AMO-BT-011':
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-BT-011'
  },
  {
    col11: "Accession",
    col12: 'GSE75192'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'Transcriptomic alterations during ageing reflect the shift from cancer to degenerative diseases in the elderly'
  },
  {
    col11: "Year",
    col12: '2018'
  },
  {
    col11: "Pubmed",
    col12: '29382830'
  },
  {
    col11: "Species",
    col12: 'Mouse'
  },
  {
    col11: "Tissue",
    col12: 'Blood'
  },
  {
    col11: "Data type",
    col12: 'Bulk RNA sequencing'
  },
  {
    col11: "Sample size",
    col12: '39'
  },
  {
    col11: "Age group",
    col12: '2, 9, 15, 24, and 30 months old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '4'
  }
  ]
break
case 'AMO-BT-012':
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-BT-012'
  },
  {
    col11: "Accession",
    col12: 'GSE149676'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'Age Effects Aggressive Behavior: RNA-Seq Analysis in Cattle with Implications for Studying Neoteny Under Domestication'
  },
  {
    col11: "Year",
    col12: '2022'
  },
  {
    col11: "Pubmed",
    col12: '29912876'
  },
  {
    col11: "Species",
    col12: 'Bos taurus'
  },
  {
    col11: "Tissue",
    col12: 'Brain (prefrontal cortex)'
  },
  {
    col11: "Data type",
    col12: 'Bulk RNA sequencing'
  },
  {
    col11: "Sample size",
    col12: '16'
  },
  {
    col11: "Age group",
    col12: 'Aged: 4 years old; Young: 3 years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '20'
  }
  ]
break
case 'AMO-BT-013':
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-BT-013'
  },
  {
    col11: "Accession",
    col12: 'GSE80440'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'Pervasive effects of aging on gene expression in wild wolves'
  },
  {
    col11: "Year",
    col12: '2016'
  },
  {
    col11: "Pubmed",
    col12: '27189566'
  },
  {
    col11: "Species",
    col12: 'Canis lupus'
  },
  {
    col11: "Tissue",
    col12: 'Blood'
  },
  {
    col11: "Data type",
    col12: 'Bulk RNA sequencing'
  },
  {
    col11: "Sample size",
    col12: '27'
  },
  {
    col11: "Age group",
    col12: 'Aged:6-9 years old; Young: 0.8-6 years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '20.6'
  }
  ]
break
case 'AMO-BT-014':
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-BT-014'
  },
  {
    col11: "Accession",
    col12: 'GSE98744'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'Long-lived rodents reveal signatures of positive selection in genes associated with lifespan'
  },
  {
    col11: "Year",
    col12: '2018'
  },
  {
    col11: "Pubmed",
    col12: '29570707'
  },
  {
    col11: "Species",
    col12: 'Naked mole rat'
  },
  {
    col11: "Tissue",
    col12: 'Liver'
  },
  {
    col11: "Data type",
    col12: 'Bulk RNA sequencing'
  },
  {
    col11: "Sample size",
    col12: '9'
  },
  {
    col11: "Age group",
    col12: 'Aged:20-30 years old; Young:2.7-4.1 years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '31'
  }
  ]
break
    default:
      console.log("值不在可匹配的范围内")
      break
  }
</script>
<style scoped >
  @import url("../styles/dataset.css");
</style>
  