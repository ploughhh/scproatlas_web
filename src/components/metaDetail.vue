<!-- eslint-disable no-prototype-builtins -->
<!-- eslint-disable no-debugger -->
<!-- eslint-disable no-debugger -->
<template>
  <el-container>
    <el-header>
      <Menus />
    </el-header>
      <template v-if="route.query.Number === 'AMO-ME-012'">
          <el-main style="margin-left: auto; width: 1500px; margin-right: auto;">
            <div>
            <div>
              <h1 class="title" style="background-color: #248067;margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">
                Detail information of {{ route.query.Species + " " + route.query.Tissue }} metabolism dataset
              </h1>
            </div>
            <div style="margin-left: 250px; width: 100%; margin-right: auto; float: left;">
              <el-table :data="Data12()" border :show-header="false" fit >
                <el-table-column sortable prop="col11" width="380"></el-table-column>
                <el-table-column sortable prop="col12" width="720"></el-table-column>
              </el-table>
            </div>
          </div>
          <h1 class="title">Aging-related metabolites in {{ route.query.Species + " " + route.query.Tissue }} dataset
            <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHovering1 = true" @mouseleave="isHovering1 = false">
            <div v-if="isHovering1" style="position: relative; margin-left: 1224px; top: -75px; left: -1182px; height: 90px; width: 91%; background-color: #303133;">
              <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                The plada_vip score is an estimation of the importance of each variable in the projection used in the partial least square discriminant analysis (PLS-DA) model. Variables with a VIP score of
                ≥1 were considered important in the PLS-DA model between the age groups. The annotation information of metabolites is obtained from Pubchem. The overlapped metabolites with MetaboAgeDB are also shown in the table. MetaboAgeDB is a repository of known ageing-related metabolome database.</p>
            </div>
            </h1>
            <div style="height: 1025px; width: 1450px; overflow-y: auto;">
                <el-scrollbar style="display: none"> </el-scrollbar>
                <el-form label-width="160px" :inline="true">
                  <el-form-item label="Name">
                    <el-input class="myInput" v-model="searchKey" />
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="Submit12">Search</el-button>
                    <el-button @click="Clean12">Clean</el-button>
                  </el-form-item>
                </el-form>
                <el-table :data="Num12filtertable()" border fit :max-height="980" :row-style="{height: '55px'}" style="width: 2760px; font-size: 16.5px;">
                  <el-table-column sortable prop="cmpdname" label="Name" width="280"></el-table-column>
                  <el-table-column sortable prop="cid" label="Id" width="90"></el-table-column>
                  <el-table-column sortable prop="mf" label="Molecular Formula"></el-table-column>
                  <el-table-column sortable prop="mw" label="Molecular Weight" width="200"></el-table-column>
                  <el-table-column width="250" label='2D structure'>
                      <template v-slot='scope'>
                        <el-image :src="require('../../public/images/meta_picture/AMO-ME-012/metabolite_anno/PubChem_compound_id_list_images/CID_' + scope.row.cid + '.png')" style="width: 200px; height: 200px;"></el-image>
                      </template>
                  </el-table-column>
                  <el-table-column sortable prop="plsda_vip" label="plsda_vip" width="140"></el-table-column>
                  <el-table-column sortable prop="is_AgeRelatedMetabolite" label="is_MetaboAgeDBb" width="140"></el-table-column>
                  <el-table-column sortable prop="detail" label="Detail" width="140">
                    <template v-slot='scope'>
                      <el-button type="text" style="left:center; margin: auto;">
                        <a :href="`https://pubchem.ncbi.nlm.nih.gov/compound/${scope.row.cid}`">{{ scope.row.detail }}</a>
                      </el-button>
                    </template>
                  </el-table-column>
                </el-table>
            </div>
            <h1 class="title">Metabolite set enrichment Analysis for aging-related metabolites
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHovering3 = true" @mouseleave="isHovering3 = false">
              <div v-if="isHovering3" style="position: relative; margin-left: 1224px; top: -52px; left: -1182px; height: 65px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  Metabolite Set Enrichment Analysis (MSEA) is used to to identify and interpret patterns of metabolite
                  concentration changes in aging. MetaboAnalyst 5.0 is used for the enrichment analysis. The threshold is set as significance level p&lt;0.05.
                </p>
              </div>
              </h1>
              <span style="margin-left: 668px;">No Data</span>
            <h1 class="title">Metabolite set enrichment Analysis for aging-related metabolites
            <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHovering3 = true" @mouseleave="isHovering3 = false">
            <div v-if="isHovering3" style="position: relative; margin-left: 1224px; top: -52px; left: -1182px; height: 65px; width: 91%; background-color: #303133;">
              <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                Metabolite Set Enrichment Analysis (MSEA) is used to to identify and interpret patterns of metabolite
                concentration changes in aging. MetaboAnalyst 5.0 is used for the enrichment analysis. The threshold is set as significance level p&lt;0.05.
              </p>
            </div>
            </h1>
            <div class="diversity" style="margin-bottom: 10px; width: 100%; float: left;">
                <img class="diversity-left" style="width: 1260px; height: 1000px;"
                :src="require('../../public/images/meta_picture/AMO-ME-012/enrichment/ora_dot_0_dpi72.png')" alt="#">
            </div>
          </el-main>
      </template>
      <template v-else-if="route.query.Number === 'AMO-ME-013'">
          <el-main style="margin-left: auto; width: 1500px; margin-right: auto;">
            <div>
            <div>
              <h1 class="title" style="background-color: #248067;margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">
              Detail information of {{ route.query.Species + " " + route.query.Tissue }} metabolism dataset
              </h1>
            </div>
            <div style="margin-left: 250px; width: 100%px; margin-right: auto; float: left;">
              <el-table :data="Data13()" border :show-header="false" fit>
                <el-table-column sortable prop="col11" width="380"></el-table-column>
                <el-table-column sortable prop="col12" width="720"></el-table-column>
              </el-table>
            </div>
          </div>
          <h1 class="title">Aging-related metabolites in {{ route.query.Species + " " + route.query.Tissue }} dataset
            <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHovering1 = true" @mouseleave="isHovering1 = false">
            <div v-if="isHovering1" style="position: relative; margin-left: 1224px; top: -75px; left: -1182px; height: 90px; width: 91%; background-color: #303133;">
              <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                The plada_vip score is an estimation of the importance of each variable in the projection used in the partial least square discriminant analysis (PLS-DA) model. Variables with a VIP score of
                ≥1 were considered important in the PLS-DA model between the age groups. The annotation information of metabolites is obtained from Pubchem. The overlapped metabolites with MetaboAgeDB are also shown in the table. MetaboAgeDB is a repository of known ageing-related metabolome database.</p>
            </div>
            </h1>
              <div style="height: 1025px; width: 1450px; overflow-y: auto;">
                  <el-scrollbar style="display: none"> </el-scrollbar>
                  <el-table :data="Num13table()" border fit :max-height="980" :row-style="{height: '55px'}" style="width: 2760px; font-size: 16.5px;">
                    <el-table-column sortable prop="cmpdname" label="Name" width="280"></el-table-column>
                  <el-table-column sortable prop="cid" label="Id" width="90"></el-table-column>
                  <el-table-column sortable prop="mf" label="Molecular Formula"></el-table-column>
                  <el-table-column sortable prop="mw" label="Molecular Weight" width="200"></el-table-column>
                  <el-table-column width="250" label='2D structure'>
                      <template v-slot='scope'>
                        <el-image :src="require('../../public/images/meta_picture/AMO-ME-013/metabolite_anno/PubChem_compound_id_list_images/CID_' + scope.row.cid + '.png')" style="width: 200px; height: 200px;"></el-image>
                      </template>
                  </el-table-column>
                  <el-table-column sortable prop="plsda_vip" label="plsda_vip" width="140"></el-table-column>
                  <el-table-column sortable prop="is_AgeRelatedMetabolite" label="is_MetaboAgeDBb" width="140"></el-table-column>
                  <el-table-column sortable prop="detail" label="Detail" width="140">
                    <template v-slot='scope'>
                      <el-button type="text" style="left:center; margin: auto;">
                        <a :href="`https://pubchem.ncbi.nlm.nih.gov/compound/${scope.row.cid}`">{{ scope.row.detail }}</a>
                      </el-button>
                    </template>
                  </el-table-column>
                  </el-table>
              </div>
              <h1 class="title">Metabolite set enrichment Analysis for aging-related metabolites
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHovering3 = true" @mouseleave="isHovering3 = false">
              <div v-if="isHovering3" style="position: relative; margin-left: 1224px; top: -52px; left: -1182px; height: 65px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  Metabolite Set Enrichment Analysis (MSEA) is used to to identify and interpret patterns of metabolite
                  concentration changes in aging. MetaboAnalyst 5.0 is used for the enrichment analysis. The threshold is set as significance level p&lt;0.05.
                </p>
              </div>
              </h1>
              <span style="margin-left: 668px;">No Data</span>
              <h1 class="title">Metabolite set enrichment Analysis for aging-related metabolites
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHovering3 = true" @mouseleave="isHovering3 = false">
              <div v-if="isHovering3" style="position: relative; margin-left: 1224px; top: -52px; left: -1182px; height: 65px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  Metabolite Set Enrichment Analysis (MSEA) is used to to identify and interpret patterns of metabolite
                  concentration changes in aging. MetaboAnalyst 5.0 is used for the enrichment analysis. The threshold is set as significance level p&lt;0.05.
                </p>
              </div>
              </h1>
              <div class="diversity" style="margin-bottom: 10px; width: 100%; float: left;">
                  <img class="diversity-left" style="width: 1260px; height: 1000px;"
                  :src="require('../../public/images/meta_picture/AMO-ME-013/enrichment/ora_dot_0_dpi72.png')" alt="#">
              </div>
          </el-main>
      </template>
      <template v-else>
        <el-main
          style="
            margin-left: auto;
            width: 1490px;
            margin-right: auto;
            font-size: 16.5px;
            margin-top: 10px;
            margin-bottom: 10px;
          "
        >
          <div>
            <h1
              class="title"
              style="
                background-color: #248067;
                margin: 20px 0 10px 0;
                padding: 10px 0 40px 0;
                width: 100%;
                height: 20px;
                float: left;
              "
            >
              Detail information of {{ route.query.Species + " " + route.query.Tissue }}
            </h1>
          </div>
          <div>
            <div
              style="
                margin-left: 165px;
                width: 100%px;
                margin-right: auto;
                float: left;
              "
            >
              <el-table
                :data="detailData"
                border
                :show-header="false"
                fit
                :row-style="{ height: '65px' }"
              >
                <el-table-column
                  sortable
                  prop="col11"
                  width="380"
                ></el-table-column>
                <el-table-column
                  sortable
                  prop="col12"
                  width="720"
                ></el-table-column>
              </el-table>
            </div>
          </div>
          <h1 class="title">
            Aging-related metabolites in
            {{ route.query.Species + " " + route.query.Tissue }} dataset
            <img
              src="../../public/images/icon/question.png"
              style="height: 30px; width: 30px; margin-right: 20px; float: right"
              alt="image"
              @mouseenter="isHovering1 = true"
              @mouseleave="isHovering1 = false"
            />
            <div
              v-if="isHovering1"
              style="
                position: relative;
                margin-left: 1224px;
                top: -75px;
                left: -1182px;
                height: 90px;
                width: 91%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                The plada_vip score is an estimation of the importance of each
                variable in the projection used in the partial least square
                discriminant analysis (PLS-DA) model. Variables with a VIP score of
                ≥1 were considered important in the PLS-DA model between the age
                groups. The annotation information of metabolites is obtained from
                Pubchem. The overlapped metabolites with MetaboAgeDB are also shown
                in the table. MetaboAgeDB is a repository of known ageing-related
                metabolome database.
              </p>
            </div>
          </h1>
          
            <el-form :model="form" label-width="160px" :inline="true">
              <el-form-item label="Name">
                <el-input class="myInput" v-model="form.Taxonomy" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="Submit">Search</el-button>
                <el-button @click="Clean">Clean</el-button>
              </el-form-item>
            </el-form>
            <!-- <el-scrollbar style="display: none"> </el-scrollbar> -->
            <el-table
              :data="metatableData"
              border
              fit
              style="overflow-x: auto; width: 3180px; font-size: 16.5px"
            >
              <el-table-column
                sortable
                prop="Taxonomy"
                label="Name"
                width="280"
              ></el-table-column>
              <el-table-column
                sortable
                prop="cid"
                label="Id"
                width="90"
              ></el-table-column>
              <el-table-column
                sortable
                prop="Molecular_Formula"
                label="Molecular Formula"
                width="200"
              ></el-table-column>
              <el-table-column
                sortable
                prop="Molecular_weight"
                label="Molecular Weight"
              ></el-table-column>
              <el-table-column width="250" label="2D structure">
                <template v-slot="scope">
                  <el-image
                    :src="
                      require('../../public/images/meta_picture/' + route.query.Number + '/metabolite_anno/PubChem_compound_id_list_images/CID_' +
                        scope.row.cid +
                        '.png')
                    "
                    style="width: 200px; height: 200px"
                  ></el-image>
                </template>
              </el-table-column>
              <el-table-column
                sortable
                prop="plsda_vip"
                label="plsda_vip"
                width="140"
              ></el-table-column>
              <el-table-column
                sortable
                prop="is_AgeRelatedMetabolite"
                label="is_MetaboAgeDBb"
                width="140"
              ></el-table-column>
              <el-table-column sortable prop="detail" label="Detail" width="140">
                <template v-slot='scope'>
                  <el-button type="text" style="left:center; margin: auto; font-size: 22px;">
                    <a :href="`https://pubchem.ncbi.nlm.nih.gov/compound/${scope.row.cid}`">{{ scope.row.detail }}</a>
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              small
              @current-change="handelChange"
              :current-page="form.currentPage"
              :page-size="form.limit"
              background
              :total="form.total"
              layout="prev, pager, next"
              class="mt-4"
              style="margin-left: 5%"
            />
          <h1 class="title">
            Interaction network of aging-related metabolite in
            {{ route.query.Species + " " + route.query.Tissue }} dataset
            <img
              src="../../public/images/icon/question.png"
              style="height: 30px; width: 30px; margin-right: 20px; float: right"
              alt="image"
              @mouseenter="isHovering2 = true"
              @mouseleave="isHovering2 = false"
            />
            <div
              v-if="isHovering2"
              style="
                position: relative;
                margin-left: 1224px;
                top: -52px;
                left: -1182px;
                height: 65px;
                width: 91%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                The interaction network is identified using Spearmen correlation
                analysis. The significance level is set as p&lt;0.05 and r&gt;0.4.
                We only keep top 50 correlated metabolites for visualization. The
                detailed information can be obtained in Download files.
              </p>
            </div>
          </h1>
        <span style="color: #9b9a9a;">It may due to an excessive amount of data, the chart cannot be loaded. Please refresh and try again.</span>
          <div
            id="graph"
            style="
              margin-top: 50px;
              margin-bottom: 30px;
              width: 100%;
              height: 800px;
              float: left;
            "
          ></div>
          <h1 class="title">
            Metabolite set enrichment Analysis for aging-related metabolites
            <img
              src="../../public/images/icon/question.png"
              style="height: 30px; width: 30px; margin-right: 20px; float: right"
              alt="image"
              @mouseenter="isHovering3 = true"
              @mouseleave="isHovering3 = false"
            />
            <div
              v-if="isHovering3"
              style="
                position: relative;
                margin-left: 1224px;
                top: -52px;
                left: -1182px;
                height: 65px;
                width: 91%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                Metabolite Set Enrichment Analysis (MSEA) is used to to identify and
                interpret patterns of metabolite concentration changes in aging.
                MetaboAnalyst 5.0 is used for the enrichment analysis. The threshold
                is set as significance level p&lt;0.05.
              </p>
            </div>
          </h1>
          <div
            class="diversity"
            style="margin-bottom: 10px; width: 100%; float: left"
          >
            <img
              class="diversity-left"
              style="width: 1260px;"
              :src="
                require('../../public/images/meta_picture/' + route.query.Number + '/enrichment/ora_dot_0_dpi72.png')
              "
              alt="#"
            />
          </div>
        </el-main>
      </template>
  </el-container>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue"
import Menus from "../layout/menu-item"
import { useRoute } from "vue-router"
import {
  Num1graph, Num2graph, Num3graph, Num4graph,
  Num5graph, Num6graph, Num7graph, Num8graph,
  Num9graph, Num10graph, Num11graph, Num14graph,
  Num15graph, getmeta,
  Num12table, Num13table
} from "@/api/metadetail"
// import { getCat, getTissue } from '@/api/enum'
const echarts = require("echarts/lib/echarts")
require("echarts/lib/component/title")
require("echarts/lib/component/tooltip")
require("echarts/lib/component/legend")
require("echarts/lib/chart/graph")
const isHovering1 = ref(false)
const isHovering2 = ref(false)
const isHovering3 = ref(false)
const route = useRoute()
// get information
// const sctableData = ref([])
const metatableData = ref([])
const searchKey = 'Fumaric acid'
const searchTerm = searchKey.toLowerCase();

const Submit12 = () => {
  const Num12filtertable = () => {
    Num12table().filter(item =>
      item.cmpdname.toLowerCase().includes(searchTerm)
    )
  }
}
const Clean12 = () => {
    searchKey = ''
    Num12filtertable()
}
const form = reactive({
  Taxonomy: "",
  cid: "",
  Molecular_Formula: "",
  Molecular_weight: "",
  plsda_vip: "",
  is_AgeRelatedMetabolite: "",
  currentPage: 1,
  limit: 20,
  total: 0,
  Number: route.query.Number
})
const meta = async (query) => {
  // eslint-disable-next-line no-debugger
  const res = await getmeta(query)
  metatableData.value = res.data.rows
  form.total = res.data.count
}

const handelChange = (val) => {
  form.currentPage = val
  meta(form)
}

meta(form)
const Submit = () => {
  form.currentPage = 1
  meta(form)
}
const pages = ref()
const Clean = () => {
  form.Taxonomy = ""
  form.cid = ""
  form.Molecular_Formula = ""
  form.Molecular_weight = ""
  form.plsda_vip = ""
  form.is_AgeRelatedMetabolite = ""
  form.currentPage = 1
  meta(form)
}
pages.value = {
  limit: 20,
  currentPage: 1,
  total: 20
}
let detailData = []
switch (route.query.Number) {
  case "AMO-ME-001":
    detailData = [{
      col11: 'Dataset ID',
      col12: 'AMO-ME-001'
    },
    {
      col11: 'Accession',
      col12: 'PR001047'
    },
    {
      col11: 'Database',
      col12: 'UCSD Metabolomics Workbench'
    },
    {
      col11: 'Publication',
      col12: 'A metabolome atlas of the aging mouse brain'
    },
    {
      col11: 'Year',
      col12: '2021'
    },
    {
      col11: 'Pubmed',
      col12: '34654818'
    },
    {
      col11: 'Species',
      col12: 'Mouse'
    },
    {
      col11: 'Tissue',
      col12: 'Brain (cerebral cortex)'
    },
    {
      col11: 'Data type',
      col12: 'Mass Spectra'
    },
    {
      col11: 'Sample size',
      col12: '64'
    },
    {
      col11: 'Age group',
      col12: '3 weeks; 16 weeks; 59 weeks; 92 weeks'
    },
    {
      col11: 'Maximum lifespan (year)',
      col12: '4'
    }]
    onMounted(() => {
      const option = Num1graph()
      const myChart = echarts.init(document.getElementById("graph"))
      myChart.setOption(option)
    })
    break
  case "AMO-ME-002":
    detailData = [{
      col11: 'Dataset ID',
      col12: 'AMO-ME-002'
    },
    {
      col11: 'Accession',
      col12: 'PR001047'
    },
    {
      col11: 'Database',
      col12: 'UCSD Metabolomics Workbench'
    },
    {
      col11: 'Publication',
      col12: 'A metabolome atlas of the aging mouse brain'
    },
    {
      col11: 'Year',
      col12: '2021'
    },
    {
      col11: 'Pubmed',
      col12: '34654818'
    },
    {
      col11: 'Species',
      col12: 'Mouse'
    },
    {
      col11: 'Tissue',
      col12: 'Brain (olfactory bulb)'
    },
    {
      col11: 'Data type',
      col12: 'Mass Spectra'
    },
    {
      col11: 'Sample size',
      col12: '63'
    },
    {
      col11: 'Age group',
      col12: '3 weeks; 16 weeks; 59 weeks; 92 weeks'
    },
    {
      col11: 'Maximum lifespan (year)',
      col12: '4'
    }]
    onMounted(() => {
      const option = Num2graph()
      const myChart = echarts.init(document.getElementById("graph"))
      myChart.setOption(option)
    })
    break
  case "AMO-ME-003":
    detailData = [{
      col11: 'Dataset ID',
      col12: 'AMO-ME-003'
    },
    {
      col11: 'Accession',
      col12: 'PR001047'
    },
    {
      col11: 'Database',
      col12: 'UCSD Metabolomics Workbench'
    },
    {
      col11: 'Publication',
      col12: 'A metabolome atlas of the aging mouse brain'
    },
    {
      col11: 'Year',
      col12: '2021'
    },
    {
      col11: 'Pubmed',
      col12: '34654818'
    },
    {
      col11: 'Species',
      col12: 'Mouse'
    },
    {
      col11: 'Tissue',
      col12: 'Brain (hippocampus)'
    },
    {
      col11: 'Data type',
      col12: 'Mass Spectra'
    },
    {
      col11: 'Sample size',
      col12: '64'
    },
    {
      col11: 'Age group',
      col12: '3 weeks; 16 weeks; 59 weeks; 92 weeks'
    },
    {
      col11: 'Maximum lifespan (year)',
      col12: '4'
    }]
    onMounted(() => {
      const option = Num3graph()
      const myChart = echarts.init(document.getElementById("graph"))
      myChart.setOption(option)
    })
    break
  case "AMO-ME-004":
    detailData = [{
      col11: 'Dataset ID',
      col12: 'AMO-ME-004'
    },
    {
      col11: 'Accession',
      col12: 'PR001047'
    },
    {
      col11: 'Database',
      col12: 'UCSD Metabolomics Workbench'
    },
    {
      col11: 'Publication',
      col12: 'A metabolome atlas of the aging mouse brain'
    },
    {
      col11: 'Year',
      col12: '2021'
    },
    {
      col11: 'Pubmed',
      col12: '34654818'
    },
    {
      col11: 'Species',
      col12: 'Mouse'
    },
    {
      col11: 'Tissue',
      col12: 'Brain (hypothalamus)'
    },
    {
      col11: 'Data type',
      col12: 'Mass Spectra'
    },
    {
      col11: 'Sample size',
      col12: '64'
    },
    {
      col11: 'Age group',
      col12: '3 weeks; 16 weeks; 59 weeks; 92 weeks'
    },
    {
      col11: 'Maximum lifespan (year)',
      col12: '4'
    }]
    onMounted(() => {
      const option = Num4graph()
      const myChart = echarts.init(document.getElementById("graph"))
      myChart.setOption(option)
    })
    break
  case "AMO-ME-005":
    detailData = [{
      col11: 'Dataset ID',
      col12: 'AMO-ME-005'
    },
    {
      col11: 'Accession',
      col12: 'PR001047'
    },
    {
      col11: 'Database',
      col12: 'UCSD Metabolomics Workbench'
    },
    {
      col11: 'Publication',
      col12: 'A metabolome atlas of the aging mouse brain'
    },
    {
      col11: 'Year',
      col12: '2021'
    },
    {
      col11: 'Pubmed',
      col12: '34654818'
    },
    {
      col11: 'Species',
      col12: 'Mouse'
    },
    {
      col11: 'Tissue',
      col12: 'Brain (basal ganglia)'
    },
    {
      col11: 'Data type',
      col12: 'Mass Spectra'
    },
    {
      col11: 'Sample size',
      col12: '63'
    },
    {
      col11: 'Age group',
      col12: '3 weeks; 16 weeks; 59 weeks; 92 weeks'
    },
    {
      col11: 'Maximum lifespan (year)',
      col12: '4'
    }]
    onMounted(() => {
      const option = Num5graph()
      const myChart = echarts.init(document.getElementById("graph"))
      myChart.setOption(option)
    })
    break
  case "AMO-ME-006":
    detailData = [{
      col11: 'Dataset ID',
      col12: 'AMO-ME-006'
    },
    {
      col11: 'Accession',
      col12: 'PR001047'
    },
    {
      col11: 'Database',
      col12: 'UCSD Metabolomics Workbench'
    },
    {
      col11: 'Publication',
      col12: 'A metabolome atlas of the aging mouse brain'
    },
    {
      col11: 'Year',
      col12: '2021'
    },
    {
      col11: 'Pubmed',
      col12: '34654818'
    },
    {
      col11: 'Species',
      col12: 'Mouse'
    },
    {
      col11: 'Tissue',
      col12: 'Brain (thalamus)'
    },
    {
      col11: 'Data type',
      col12: 'Mass Spectra'
    },
    {
      col11: 'Sample size',
      col12: '64'
    },
    {
      col11: 'Age group',
      col12: '3 weeks; 16 weeks; 59 weeks; 92 weeks'
    },
    {
      col11: 'Maximum lifespan (year)',
      col12: '4'
    }]
    onMounted(() => {
      const option = Num6graph()
      const myChart = echarts.init(document.getElementById("graph"))
      myChart.setOption(option)
    })
    break
  case "AMO-ME-007":
    detailData = [{
      col11: 'Dataset ID',
      col12: 'AMO-ME-007'
    },
    {
      col11: 'Accession',
      col12: 'PR001047'
    },
    {
      col11: 'Database',
      col12: 'UCSD Metabolomics Workbench'
    },
    {
      col11: 'Publication',
      col12: 'A metabolome atlas of the aging mouse brain'
    },
    {
      col11: 'Year',
      col12: '2021'
    },
    {
      col11: 'Pubmed',
      col12: '34654818'
    },
    {
      col11: 'Species',
      col12: 'Mouse'
    },
    {
      col11: 'Tissue',
      col12: 'Brain (midbrain)'
    },
    {
      col11: 'Data type',
      col12: 'Mass Spectra'
    },
    {
      col11: 'Sample size',
      col12: '64'
    },
    {
      col11: 'Age group',
      col12: '3 weeks; 16 weeks; 59 weeks; 92 weeks'
    },
    {
      col11: 'Maximum lifespan (year)',
      col12: '4'
    }]
    onMounted(() => {
      const option = Num7graph()
      const myChart = echarts.init(document.getElementById("graph"))
      myChart.setOption(option)
    })
    break
  case "AMO-ME-008":
    detailData = [{
      col11: 'Dataset ID',
      col12: 'AMO-ME-008'
    },
    {
      col11: 'Accession',
      col12: 'PR001047'
    },
    {
      col11: 'Database',
      col12: 'UCSD Metabolomics Workbench'
    },
    {
      col11: 'Publication',
      col12: 'A metabolome atlas of the aging mouse brain'
    },
    {
      col11: 'Year',
      col12: '2021'
    },
    {
      col11: 'Pubmed',
      col12: '34654818'
    },
    {
      col11: 'Species',
      col12: 'Mouse'
    },
    {
      col11: 'Tissue',
      col12: 'Brain (pons)'
    },
    {
      col11: 'Data type',
      col12: 'Mass Spectra'
    },
    {
      col11: 'Sample size',
      col12: '64'
    },
    {
      col11: 'Age group',
      col12: '3 weeks; 16 weeks; 59 weeks; 92 weeks'
    },
    {
      col11: 'Maximum lifespan (year)',
      col12: '4'
    }]
    onMounted(() => {
      const option = Num8graph()
      const myChart = echarts.init(document.getElementById("graph"))
      myChart.setOption(option)
    })
    break
  case "AMO-ME-009":
    detailData = [{
      col11: 'Dataset ID',
      col12: 'AMO-ME-009'
    },
    {
      col11: 'Accession',
      col12: 'PR001047'
    },
    {
      col11: 'Database',
      col12: 'UCSD Metabolomics Workbench'
    },
    {
      col11: 'Publication',
      col12: 'A metabolome atlas of the aging mouse brain'
    },
    {
      col11: 'Year',
      col12: '2021'
    },
    {
      col11: 'Pubmed',
      col12: '34654818'
    },
    {
      col11: 'Species',
      col12: 'Mouse'
    },
    {
      col11: 'Tissue',
      col12: 'Brain (medulla)'
    },
    {
      col11: 'Data type',
      col12: 'Mass Spectra'
    },
    {
      col11: 'Sample size',
      col12: '63'
    },
    {
      col11: 'Age group',
      col12: '3 weeks; 16 weeks; 59 weeks; 92 weeks'
    },
    {
      col11: 'Maximum lifespan (year)',
      col12: '4'
    }]
    onMounted(() => {
      const option = Num9graph()
      const myChart = echarts.init(document.getElementById("graph"))
      myChart.setOption(option)
    })
    break
  case "AMO-ME-010":
    detailData = [{
      col11: 'Dataset ID',
      col12: 'AMO-ME-010'
    },
    {
      col11: 'Accession',
      col12: 'PR001047'
    },
    {
      col11: 'Database',
      col12: 'UCSD Metabolomics Workbench'
    },
    {
      col11: 'Publication',
      col12: 'A metabolome atlas of the aging mouse brain'
    },
    {
      col11: 'Year',
      col12: '2021'
    },
    {
      col11: 'Pubmed',
      col12: '34654818'
    },
    {
      col11: 'Species',
      col12: 'Mouse'
    },
    {
      col11: 'Tissue',
      col12: 'Brain (cerebellum)'
    },
    {
      col11: 'Data type',
      col12: 'Mass Spectra'
    },
    {
      col11: 'Sample size',
      col12: '64'
    },
    {
      col11: 'Age group',
      col12: '3 weeks; 16 weeks; 59 weeks; 92 weeks'
    },
    {
      col11: 'Maximum lifespan (year)',
      col12: '4'
    }]
    onMounted(() => {
      const option = Num10graph()
      const myChart = echarts.init(document.getElementById("graph"))
      myChart.setOption(option)
    })
    break
  case "AMO-ME-011":
    detailData = [{
      col11: 'Dataset ID',
      col12: 'AMO-ME-011'
    },
    {
      col11: 'Accession',
      col12: 'Supplementary file'
    },
    {
      col11: 'Database',
      col12: 'N.A.'
    },
    {
      col11: 'Publication',
      col12: 'Age-dependent remodeling of gut microbiome and host serum metabolome in mice'
    },
    {
      col11: 'Year',
      col12: '2021'
    },
    {
      col11: 'Pubmed',
      col12: '33612480'
    },
    {
      col11: 'Species',
      col12: 'Mouse'
    },
    {
      col11: 'Tissue',
      col12: 'Serum'
    },
    {
      col11: 'Data type',
      col12: 'Mass Spectra'
    },
    {
      col11: 'Sample size',
      col12: '17'
    },
    {
      col11: 'Age group',
      col12: '3, 6, 18, and 28 months old'
    },
    {
      col11: 'Maximum lifespan (year)',
      col12: '4'
    }]
    onMounted(() => {
      const option = Num11graph()
      const myChart = echarts.init(document.getElementById("graph"))
      myChart.setOption(option)
    })
    break
  case "AMO-ME-012":
    detailData = [{
      col11: 'Dataset ID',
      col12: 'AMO-ME-012'
    },
    {
      col11: 'Accession',
      col12: 'Supplementary file'
    },
    {
      col11: 'Database',
      col12: 'N.A.'
    },
    {
      col11: 'Publication',
      col12: 'Analysis of the human adult urinary metabolome variations with age, body mass index, and gender by implementing a comprehensive workflow for univariate and OPLS statistical analyses'
    },
    {
      col11: 'Year',
      col12: '2015'
    },
    {
      col11: 'Pubmed',
      col12: '26088811'
    },
    {
      col11: 'Species',
      col12: 'Human'
    },
    {
      col11: 'Tissue',
      col12: 'Urinary'
    },
    {
      col11: 'Data type',
      col12: 'Mass Spectra'
    },
    {
      col11: 'Sample size',
      col12: '183'
    },
    {
      col11: 'Age group',
      col12: 'Young:20-30 years old; Middle:30-50years old; Aged: >50 years old'
    },
    {
      col11: 'Maximum lifespan (year)',
      col12: '122.5'
    }]
    onMounted(() => {
      const option = Num12graph()
      const myChart = echarts.init(document.getElementById("graph"))
      myChart.setOption(option)
    })
    break
  case "AMO-ME-013":
    detailData = [{
      col11: 'Dataset ID',
      col12: 'AMO-ME-013'
    },
    {
      col11: 'Accession',
      col12: 'Supplementary file'
    },
    {
      col11: 'Database',
      col12: 'N.A.'
    },
    {
      col11: 'Publication',
      col12: 'Healthy aging and muscle function are positively associated with NAD+ abundance in humans'
    },
    {
      col11: 'Year',
      col12: '2022'
    },
    {
      col11: 'Pubmed',
      col12: '37118369'
    },
    {
      col11: 'Species',
      col12: 'Human'
    },
    {
      col11: 'Tissue',
      col12: 'Muscle'
    },
    {
      col11: 'Data type',
      col12: 'Mass Spectra'
    },
    {
      col11: 'Sample size',
      col12: '46'
    },
    {
      col11: 'Age group',
      col12: 'Young: 20-30 years old; Aged: 65-80 years old'
    },
    {
      col11: 'Maximum lifespan (year)',
      col12: '122.5'
    }]
    onMounted(() => {
      const option = Num13graph()
      const myChart = echarts.init(document.getElementById("graph"))
      myChart.setOption(option)
    })
    break
  case "AMO-ME-014":
    detailData = [{
      col11: 'Dataset ID',
      col12: 'AMO-ME-014'
    },
    {
      col11: 'Accession',
      col12: 'MTBLS2108'
    },
    {
      col11: 'Database',
      col12: 'EBI'
    },
    {
      col11: 'Publication',
      col12: 'Human age-declined saliva metabolic markers determined by LC–MS'
    },
    {
      col11: 'Year',
      col12: '2021'
    },
    {
      col11: 'Pubmed',
      col12: '37118369'
    },
    {
      col11: 'Species',
      col12: 'Human'
    },
    {
      col11: 'Tissue',
      col12: 'Saliva'
    },
    {
      col11: 'Data type',
      col12: 'Mass Spectra'
    },
    {
      col11: 'Sample size',
      col12: '27'
    },
    {
      col11: 'Age group',
      col12: 'Young: 30±3 years old Aged: 76±4 years old'
    },
    {
      col11: 'Maximum lifespan (year)',
      col12: '122.5'
    }]
    onMounted(() => {
      const option = Num14graph()
      const myChart = echarts.init(document.getElementById("graph"))
      myChart.setOption(option)
    })
    break
  case "AMO-ME-015":
    detailData = [{
      col11: 'Dataset ID',
      col12: 'AMO-ME-015'
    },
    {
      col11: 'Accession',
      col12: 'Supplementary file'
    },
    {
      col11: 'Database',
      col12: 'N.A.'
    },
    {
      col11: 'Publication',
      col12: 'Global metabolic profiling to model biological processes of aging in twins'
    },
    {
      col11: 'Year',
      col12: '2020'
    },
    {
      col11: 'Pubmed',
      col12: '31746094'
    },
    {
      col11: 'Species',
      col12: 'Human'
    },
    {
      col11: 'Tissue',
      col12: 'Plasma'
    },
    {
      col11: 'Data type',
      col12: 'Mass Spectra'
    },
    {
      col11: 'Sample size',
      col12: '268'
    },
    {
      col11: 'Age group',
      col12: 'Young: 7±4.1 years old; Aged: 42.5±17.3 years old'
    },
    {
      col11: 'Maximum lifespan (year)',
      col12: '122.5'
    }]
    onMounted(() => {
      const option = Num15graph()
      const myChart = echarts.init(document.getElementById("graph"))
      myChart.setOption(option)
    })
    break
  default:
    console.log("值不在可匹配的范围内")
    break
}
</script>

<style scoped>
.title {
  background-color: #248067;
  text-align: center;
  color: white;
  width: 100%;
  margin: 20px 0px 10px;
  padding: 10px 0px 40px;
  height: 20px;
  float: left;
}
.myInput {
  width: 140px;
}
.el-table {
  font-size: 22px;
  font-family: "'Montserrat', sans-serif";
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-all;
  line-height: 30px;
  padding: 5px 0px;
  text-align: center;
}
</style>
