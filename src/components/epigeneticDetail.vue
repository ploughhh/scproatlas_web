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
        <div style="margin-left: 75px; width: 100%px; height: 800px; margin-right: auto; float: left;">
          <el-table :data="firtableData" border :show-header="false" fit :row-style="{ height: '65px' }">
            <el-table-column sortable prop="col11" width="380"></el-table-column>
            <el-table-column sortable prop="col12" width="720"></el-table-column>
          </el-table>
        </div>
      </div>
      <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">Aging-related differential methylation region in {{ route.query.Species + " " + route.query.Tissue }}
        <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHovering3 = true" @mouseleave="isHovering3 = false">
        <div v-if="isHovering3" style="position: relative; margin-left: 1224px; top: -43px; left: -1190px; height: 50px; width: 91%; background-color: #303133;">
          <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
            Differential methylation region between different age groups were identified using using DSS and ChAMP. The significance level is set as p&lt;0.05.
          </p>
        </div>
      </h1>
      <div>
        <el-form :model="form" label-width="165px" :inline="true">
          <el-form-item label="Gene Symbol">
            <el-input class="myInput" v-model="form.Taxonomy" style="width: 165px" />
          </el-form-item>
          <el-form-item label="Methylation Type">
            <el-input class="myInput" v-model="form.Length" style="width: 165px" />
          </el-form-item>
          <el-form-item label="Chromosome">
            <el-select v-model="form.Seqnames" placeholder="please select" style="width: 165px">
              <el-option :label="item" v-for="item in SeqnamesList" :key="item" :value="item" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button style="margin-right: 20px;" type="primary" @click="onSubmit">Search</el-button>
            <el-button @click="Clean">Clean</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="epigenetictableData" style="width: 1400px; font-size: 18px">
          <!-- <el-table-column :prop="item" :label="item" v-for="item in clos" :key="item" width="167" /> -->
          <el-table-column prop="Taxonomy" label="Symbol" width="120" />
          <el-table-column prop="Entrez_ID" label="Entrez ID" />
          <el-table-column prop="Animal" label="Animal" />
          <el-table-column prop="Tissue" label="Tissue" />
          <el-table-column prop="Seqnames" label="Chromosome" width="180" />
          <el-table-column prop="Start" label="Start" width="100" />
          <el-table-column prop="End" label="End" width="100" />
          <el-table-column prop="Age_groups" label="Age_groups" />
          <el-table-column prop="Diff_Methy" label="Diff_Methy" />
          <el-table-column prop="Length" label="Methylation Type" />
          <el-table-column width="250" label='Picture'>
            <template v-slot='scope'>
              <el-image :src="require('../../public/images/epig_picture/' + route.query.Num + '/' + scope.row.Taxonomy + '.png')" style="width: 200px; height: 200px;"></el-image>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination small @current-change="handelChange" :current-page="form.currentPage" :page-size="form.limit"
          background :total="form.total" layout="prev, pager, next" class="mt-4" style="margin-left: 5%" />
      </div>
      <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">Enrichment analysis of aging-related DMR
        <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHovering3 = true" @mouseleave="isHovering3 = false">
        <div v-if="isHovering3" style="position: relative; margin-left: 1224px; top: -52px; left: -1182px; height: 65px; width: 91%; background-color: #303133;">
          <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
            Enrichment analysis of differential methylation regions were performed using clusterProfiler. The significance level is set as p&lt;0.05.
          </p>
        </div>
        </h1>
        <div class="diversity" style="margin-bottom: 10px; width: 100%; height:666px; float: left;">
          <el-image 
          :src="require('../../public/images/epig_picture/' + route.query.Num + '/go.png')" 
          style="margin: 20px 0 0 248px; width: 864px; height: 648px;">
          </el-image>
        </div>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue"
import Menus from "../layout/menu-item"
import { useRoute } from "vue-router"
import { getepigeneticDetail } from "@/api/epigeneticDetail"

const isHovering3 = ref(false)
const isLoading = ref(false);
const route = useRoute()

const epigenetictableData = ref([])

let SeqnamesList = ref([])
let firtableData = []

const form = reactive({
  Taxonomy: "",
  Seqnames: "",
  Start: "",
  End: "",
  Age_groups: "",
  Diff_Methy: "",
  currentPage: 1,
  limit: 20,
  total: 0,
  Project_ID: route.query.Project_ID,
  Tissue: route.query.Tissue,
  Animal: route.query.Species
  // currentPage: pages.value.currentPage
})

const epigeneticDetail = async (query) => {
  isLoading.value = true;
  try {
    const res = await getepigeneticDetail(query)
    epigenetictableData.value = res.data.rows
    form.total = res.data.count
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
  }
}

const handelChange = (val) => {
  form.currentPage = val
  epigeneticDetail(form)
}
const onSubmit = () => {
  form.currentPage = 1
  epigeneticDetail(form)
}

epigeneticDetail(form)

const Clean = () => {
  form.Taxonomy = ""
  form.Tissue = ""
  form.Animal = ""
  form.Seqnames = ""
  form.Start = ""
  form.End = ""
  form.Age_groups = ""
  form.Diff_Methy = ""
  epigeneticDetail(form)
}
switch (route.query.Num) {
  case 'AMO-EP-001':
    SeqnamesList = ref(['chr12', 'chr13', 'chr7', 'chr5', 'chr4', 'chr8', 'chr9', 'chr11', 'chr19', 'chr2', 'chr17', 'chr14', 'chr16', 'chr18', 'chr6', 'chr3', 'chr10', 'chr15', 'chr1', 'chrY'])
    firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-EP-001'
  },
  {
    col11: "Accession",
    col12: 'GSE120137'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'A multi-tissue full lifespan epigenetic clock for mice'
  },
  {
    col11: "Year",
    col12: '2018'
  },
  {
    col11: "Pubmed",
    col12: '30348905'
  },
  {
    col11: "Species",
    col12: 'Mouse'
  },
  {
    col11: "Tissue",
    col12: 'Adipose'
  },
  {
    col11: "Data type",
    col12: 'Bisulfite sequencing'
  },
  {
    col11: "Sample size",
    col12: '56'
  },
  {
    col11: "Age group",
    col12: 'Aged: 20 months old; Young: 2、10 months old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '4'
  }]
    break
  case 'AMO-EP-002':
    SeqnamesList = ref(['chr12', 'chr13', 'chr7', 'chr5', 'chr4', 'chr8', 'chr9', 'chr11', 'chr19', 'chr2', 'chr17', 'chr14', 'chr16', 'chr18', 'chr6', 'chr3', 'chr10', 'chr15', 'chr1', 'chrY'])
    firtableData = [
  {
    col11: "Dataset ID",
    col12: 'AMO-EP-002'
  },
  {
    col11: "Accession",
    col12: 'GSE120137'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'A multi-tissue full lifespan epigenetic clock for mice'
  },
  {
    col11: "Year",
    col12: '2018'
  },
  {
    col11: "Pubmed",
    col12: '30348905'
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
    col12: 'Bisulfite sequencing'
  },
  {
    col11: "Sample size",
    col12: '72'
  },
  {
    col11: "Age group",
    col12: 'Aged: 21.2、20、18.2、11.1、10 months old; Young: 1.6、2、2.6 months old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '4'
  }]
    break
  case 'AMO-EP-003':
    SeqnamesList = ref(['chr12', 'chr13', 'chr7', 'chr5', 'chr4', 'chr8', 'chr9', 'chr11', 'chr19', 'chr2', 'chr17', 'chr14', 'chr16', 'chr18', 'chr6', 'chr3', 'chr10', 'chr15', 'chr1', 'chrY'])
    firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-EP-003'
  },
  {
    col11: "Accession",
    col12: 'GSE120137'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'A multi-tissue full lifespan epigenetic clock for mice'
  },
  {
    col11: "Year",
    col12: '2018'
  },
  {
    col11: "Pubmed",
    col12: '30348905'
  },
  {
    col11: "Species",
    col12: 'Mouse'
  },
  {
    col11: "Tissue",
    col12: 'Kidney'
  },
  {
    col11: "Data type",
    col12: 'Bisulfite sequencing'
  },
  {
    col11: "Sample size",
    col12: '56'
  },
  {
    col11: "Age group",
    col12: 'Aged: 20 months old; Young: 2、10 months old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '4'
  }]
  break
  case 'AMO-EP-004':
    SeqnamesList = ref(['chr12', 'chr13', 'chr7', 'chr5', 'chr4', 'chr8', 'chr9', 'chr11', 'chr19', 'chr2', 'chr17', 'chr14', 'chr16', 'chr18', 'chr6', 'chr3', 'chr10', 'chr15', 'chr1', 'chrY'])
    firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-EP-004'
  },
  {
    col11: "Accession",
    col12: 'GSE120137'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'A multi-tissue full lifespan epigenetic clock for mice'
  },
  {
    col11: "Year",
    col12: '2018'
  },
  {
    col11: "Pubmed",
    col12: '30348905'
  },
  {
    col11: "Species",
    col12: 'Mouse'
  },
  {
    col11: "Tissue",
    col12: 'Liver'
  },
  {
    col11: "Data type",
    col12: 'Bisulfite sequencing'
  },
  {
    col11: "Sample size",
    col12: '60'
  },
  {
    col11: "Age group",
    col12: 'Aged: 20 months old; Young: 2、10 months old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '4'
  }]
    break
    case 'AMO-EP-005':
    SeqnamesList = ref(['chr12', 'chr13', 'chr7', 'chr5', 'chr4', 'chr8', 'chr9', 'chr11', 'chr19', 'chr2', 'chr17', 'chr14', 'chr16', 'chr18', 'chr6', 'chr3', 'chr10', 'chr15', 'chr1', 'chrY'])
    firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-EP-005'
  },
  {
    col11: "Accession",
    col12: 'GSE120137'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'A multi-tissue full lifespan epigenetic clock for mice'
  },
  {
    col11: "Year",
    col12: '2018'
  },
  {
    col11: "Pubmed",
    col12: '30348905'
  },
  {
    col11: "Species",
    col12: 'Mouse'
  },
  {
    col11: "Tissue",
    col12: 'Lung'
  },
  {
    col11: "Data type",
    col12: 'Bisulfite sequencing'
  },
  {
    col11: "Sample size",
    col12: '57'
  },
  {
    col11: "Age group",
    col12: 'Aged: 20 months old; Young: 2、10 months old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '4'
  }]
    break
    case 'AMO-EP-006':
    SeqnamesList = ref(['chr12', 'chr13', 'chr7', 'chr5', 'chr4', 'chr8', 'chr9', 'chr11', 'chr19', 'chr2', 'chr17', 'chr14', 'chr16', 'chr18', 'chr6', 'chr3', 'chr10', 'chr15', 'chr1', 'chrY'])
    firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-EP-006'
  },
  {
    col11: "Accession",
    col12: 'GSE120137'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'A multi-tissue full lifespan epigenetic clock for mice'
  },
  {
    col11: "Year",
    col12: '2018'
  },
  {
    col11: "Pubmed",
    col12: '30348905'
  },
  {
    col11: "Species",
    col12: 'Mouse'
  },
  {
    col11: "Tissue",
    col12: 'Muscle'
  },
  {
    col11: "Data type",
    col12: 'Bisulfite sequencing'
  },
  {
    col11: "Sample size",
    col12: '60'
  },
  {
    col11: "Age group",
    col12: 'Aged: 20 months old; Young: 2、10 months old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '4'
  },
]
    break
    case 'AMO-EP-007':
    SeqnamesList = ref(['chr12', 'chr13', 'chr7', 'chr5', 'chr4', 'chr8', 'chr9', 'chr11', 'chr19', 'chr2', 'chr17', 'chr14', 'chr16', 'chr18', 'chr6', 'chr3', 'chr10', 'chr15', 'chr1', 'chrY'])
    firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-EP-007'
  },
  {
    col11: "Accession",
    col12: 'GSE86059'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'Ageing-associated DNA methylation dynamics are a molecular readout of lifespan variation among mammalian species'
  },
  {
    col11: "Year",
    col12: '2018'
  },
  {
    col11: "Pubmed",
    col12: '29452591'
  },
  {
    col11: "Species",
    col12: 'Rhesus Macaque'
  },
  {
    col11: "Tissue",
    col12: 'Blood'
  },
  {
    col11: "Data type",
    col12: 'Bisulfite sequencing'
  },
  {
    col11: "Sample size",
    col12: '6'
  },
  {
    col11: "Age group",
    col12: 'Aged: 676、780、1040 weeks old; Young: 52、104 weeks old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '40'
  }]
    break
    case 'AMO-EP-008':
    SeqnamesList = ref(['chr12', 'chr13', 'chr7', 'chr5', 'chr4', 'chr8', 'chr9', 'chr11', 'chr19', 'chr2', 'chr17', 'chr14', 'chr16', 'chr18', 'chr6', 'chr3', 'chr10', 'chr15', 'chr1', 'chrY'])
    firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-EP-008'
  },
  {
    col11: "Accession",
    col12: 'GSE164127'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'DNA methylation predicts age and provides insight into exceptional longevity of bats'
  },
  {
    col11: "Year",
    col12: '2021'
  },
  {
    col11: "Pubmed",
    col12: '33712580'
  },
  {
    col11: "Species",
    col12: 'Bat'
  },
  {
    col11: "Tissue",
    col12: 'Skin'
  },
  {
    col11: "Data type",
    col12: 'Bisulfite sequencing'
  },
  {
    col11: "Sample size",
    col12: '250'
  },
  {
    col11: "Age group",
    col12: 'Aged: >8 years old; Young: ≤8 years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '37.1'
  }]
    break
    case 'AMO-EP-009':
    SeqnamesList = ref(['chr12', 'chr13', 'chr7', 'chr5', 'chr4', 'chr8', 'chr9', 'chr11', 'chr19', 'chr2', 'chr17', 'chr14', 'chr16', 'chr18', 'chr6', 'chr3', 'chr10', 'chr15', 'chr1', 'chrY'])
    firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-EP-009'
  },
  {
    col11: "Accession",
    col12: 'GSE164127'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'DNA methylation predicts age and provides insight into exceptional longevity of bats'
  },
  {
    col11: "Year",
    col12: '2021'
  },
  {
    col11: "Pubmed",
    col12: '33712580'
  },
  {
    col11: "Species",
    col12: 'Bat'
  },
  {
    col11: "Tissue",
    col12: 'Liver'
  },
  {
    col11: "Data type",
    col12: 'Bisulfite sequencing'
  },
  {
    col11: "Sample size",
    col12: '17'
  },
  {
    col11: "Age group",
    col12: 'Aged: >8 years old; Young: ≤8 years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '37.1'
  }]
    break
  case 'AMO-EP-010':
    SeqnamesList = ref(['chr12', 'chr8', 'chr17', 'chr7', 'chr2', 'chr10', 'chrX', 'chr9', 'chr5', 'chr6', 'chr16', 'chr4', 'chr14', 'chr11', 'chr13', 'chr3', 'chr15', 'chr19', 'chr1', 'chr18'])
    firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-EP-010'
  },
  {
    col11: "Accession",
    col12: 'GSE164127'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'DNA methylation predicts age and provides insight into exceptional longevity of bats'
  },
  {
    col11: "Year",
    col12: '2021'
  },
  {
    col11: "Pubmed",
    col12: '33712580'
  },
  {
    col11: "Species",
    col12: 'Bat'
  },
  {
    col11: "Tissue",
    col12: 'Muscle'
  },
  {
    col11: "Data type",
    col12: 'Bisulfite sequencing'
  },
  {
    col11: "Sample size",
    col12: '38'
  },
  {
    col11: "Age group",
    col12: 'Aged: >8 years old; Young: ≤8 years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '37.1'
  }]
    break
  case 'AMO-EP-011':
    SeqnamesList = ref(['chr17', 'chr5', 'chr12', 'chr8', 'chr2', 'chr7', 'chr1', 'chr19', 'chr13', 'chr18', 'chr6', 'chr11', 'chr4', 'chr15', 'chr16', 'chr10', 'chrX', 'chr3', 'chr9', 'chr14'])
    firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-EP-011'
  },
  {
    col11: "Accession",
    col12: 'GSE87571'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'Continuous Aging of the Human DNA Methylome Throughout the Human Lifespan'
  },
  {
    col11: "Year",
    col12: '2016'
  },
  {
    col11: "Pubmed",
    col12: '23826282'
  },
  {
    col11: "Species",
    col12: 'Human'
  },
  {
    col11: "Tissue",
    col12: 'Blood'
  },
  {
    col11: "Data type",
    col12: 'Bisulfite sequencing'
  },
  {
    col11: "Sample size",
    col12: '240'
  },
  {
    col11: "Age group",
    col12: 'Aged: 54-94 years old; Young: 14-50 years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '122.5'
  }]
    break
    case 'AMO-EP-012':
    SeqnamesList = ref(['chr12', 'chr13', 'chr7', 'chr5', 'chr4', 'chr8', 'chr9', 'chr11', 'chr19', 'chr2', 'chr17', 'chr14', 'chr16', 'chr18', 'chr6', 'chr3', 'chr10', 'chr15', 'chr1', 'chrY'])
    firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-EP-012'
  },
  {
    col11: "Accession",
    col12: 'GSE40279'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'Genome-wide methylation profiles reveal quantitative views of human aging rates'
  },
  {
    col11: "Year",
    col12: '2013'
  },
  {
    col11: "Pubmed",
    col12: '23177740'
  },
  {
    col11: "Species",
    col12: 'Human'
  },
  {
    col11: "Tissue",
    col12: 'Blood'
  },
  {
    col11: "Data type",
    col12: 'Bisulfite sequencing'
  },
  {
    col11: "Sample size",
    col12: '230'
  },
  {
    col11: "Age group",
    col12: 'Aged: 51- 101 years old; Young: 19-50 years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '122.5'
  }]
    break
    case 'AMO-EP-013':
    SeqnamesList = ref(['chr3', 'chr17', 'chr7', 'chr11', 'chr19', 'chr12', 'chr5', 'chr6', 'chr4', 'chr8', 'chr18', 'chr1', 'chr14', 'chr16', 'chr15', 'chr10', 'chr9', 'chrX', 'chr2', 'chr13', 'chrY'])
    firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-EP-013'
  },
  {
    col11: "Accession",
    col12: 'GSE174777'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'DNA methylation clocks tick in naked mole rats but queens age more slowly than nonbreeders'
  },
  {
    col11: "Year",
    col12: '2022'
  },
  {
    col11: "Pubmed",
    col12: '35368774'
  },
  {
    col11: "Species",
    col12: 'Naked mole rat'
  },
  {
    col11: "Tissue",
    col12: 'Blood'
  },
  {
    col11: "Data type",
    col12: 'Bisulfite sequencing'
  },
  {
    col11: "Sample size",
    col12: '92'
  },
  {
    col11: "Age group",
    col12: 'Aged: > 4 years old; Young: ≤ 4 years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '31'
  }]
    break
    case 'AMO-EP-014':
    SeqnamesList = ref(['chr3', 'chr16', 'chr2', 'chr15', 'chr4', 'chr12', 'chr1', 'chr18', 'chr7', 'chr8', 'chr10', 'chr14', 'chr6', 'chr11', 'chr5', 'chr13', 'chr9', 'chrX', 'chr19', 'chr17', 'chr4_GL456216_random'])
    firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-EP-014'
  },
  {
    col11: "Accession",
    col12: 'GSE174777'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'DNA methylation clocks tick in naked mole rats but queens age more slowly than nonbreeders'
  },
  {
    col11: "Year",
    col12: '2022'
  },
  {
    col11: "Pubmed",
    col12: '35368774'
  },
  {
    col11: "Species",
    col12: 'Naked mole rat'
  },
  {
    col11: "Tissue",
    col12: 'Kidney'
  },
  {
    col11: "Data type",
    col12: 'Bisulfite sequencing'
  },
  {
    col11: "Sample size",
    col12: '34'
  },
  {
    col11: "Age group",
    col12: 'Aged: > 4 years old; Young: ≤ 4 years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '31'
  }]
    break
    case 'AMO-EP-015':
    SeqnamesList = ref(['chr2', 'chr5', 'chr13', 'chr16', 'chr10', 'chr8', 'chr12', 'chr4', 'chrX', 'chr7', 'chr19', 'chr9', 'chr14', 'chr6', 'chr11', 'chr17', 'chr1', 'chr18', 'chr3', 'chr1_GL456211_random', 'chr15'])
    firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-EP-015'
  },
  {
    col11: "Accession",
    col12: 'GSE174777'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'DNA methylation clocks tick in naked mole rats but queens age more slowly than nonbreeders'
  },
  {
    col11: "Year",
    col12: '2022'
  },
  {
    col11: "Pubmed",
    col12: '35368774'
  },
  {
    col11: "Species",
    col12: 'Naked mole rat'
  },
  {
    col11: "Tissue",
    col12: 'Lung'
  },
  {
    col11: "Data type",
    col12: 'Bisulfite sequencing'
  },
  {
    col11: "Sample size",
    col12: '19'
  },
  {
    col11: "Age group",
    col12: 'Aged: > 4 years old; Young: ≤ 4 years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '31'
  }]
    break
    case 'AMO-EP-016':
    SeqnamesList = ref(['chr3', 'chr14', 'chr19', 'chr4', 'chr6', 'chr1', 'chr15', 'chrX', 'chr17', 'chr18', 'chr12', 'chr13', 'chr10', 'chr9', 'chr8', 'chr11', 'chr7', 'chr2', 'chr5', 'chr16'])
    firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-EP-016'
  },
  {
    col11: "Accession",
    col12: 'GSE174777'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'DNA methylation clocks tick in naked mole rats but queens age more slowly than nonbreeders'
  },
  {
    col11: "Year",
    col12: '2022'
  },
  {
    col11: "Pubmed",
    col12: '35368774'
  },
  {
    col11: "Species",
    col12: 'Naked mole rat'
  },
  {
    col11: "Tissue",
    col12: 'Skin'
  },
  {
    col11: "Data type",
    col12: 'Bisulfite sequencing'
  },
  {
    col11: "Sample size",
    col12: '90'
  },
  {
    col11: "Age group",
    col12: 'Aged: > 4 years old; Young: ≤ 4 years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '31'
  }]
    break
    case 'AMO-EP-017':
    SeqnamesList = ref(['chrX', 'chr4', 'chr12', 'chr8', 'chr13', 'chr7', 'chr15', 'chr17', 'chr5', 'chr3', 'chr19', 'chr1', 'chr14', 'chr9', 'chr2', 'chr18', 'chr10', 'chr6', 'chr16', 'chr11'])
    firtableData = [{
    col11: "Dataset ID",
    col12: 'AMO-EP-017'
  },
  {
    col11: "Accession",
    col12: 'GSE174777'
  },
  {
    col11: "Database",
    col12: 'GEO'
  },
  {
    col11: "Publication",
    col12: 'DNA methylation clocks tick in naked mole rats but queens age more slowly than nonbreeders'
  },
  {
    col11: "Year",
    col12: '2022'
  },
  {
    col11: "Pubmed",
    col12: '35368774'
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
    col12: 'Bisulfite sequencing'
  },
  {
    col11: "Sample size",
    col12: '61'
  },
  {
    col11: "Age group",
    col12: 'Aged: > 4 years old; Young: ≤ 4 years old'
  },
  {
    col11: "Maximum lifespan (year)",
    col12: '31'
  }]
    break
    default:
    console.log("值不在可匹配的范围内")
    break
}

</script>

<style scoped >
@import url("../styles/dataset.css");
</style>
