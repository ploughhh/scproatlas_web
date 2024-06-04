<template>
  <div class="common-layout">
    <el-container>
      <el-header
        style="
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
          background-color: #e6e6fa;
        "
      >
        <Menus />
      </el-header>
      <el-main style="width: 1500px; margin-right: auto; margin-left: auto">
        <el-row
          style="border-bottom: #808080 2px solid; padding-top: 1%; padding-bottom: 1%"
        >
          <el-col :span="11" :offset="1">
            <el-image
              style="
                width: 666px;
                margin-top: -10px;
                margin-right: 20px;
                margin-left: -5px;
              "
              src="images/index.png"
              fit="contain"
            />
          </el-col>
          <el-col :span="11" :offest="1">
            <p
              style="
                font-size: 30px;
                color: #a25772;
                text-align: justify;
                text-indent: 1em;
                margin-left: 140px;
              "
            >
              <strong>Welcome to AgeAnnoMO!</strong>
            </p>
            <p
              style="
                font-size: 22px;
                text-align: justify;
                text-indent: 1em;
                margin-bottom: 28px;
                margin-left: 20px;
              "
            >
              Aging is a complex process characterized by the progressive decline in
              various biological systems at molecular, cellular, tissue, and organ levels.
              To understand the underlying mechanisms, twelve hallmarks have been
              identified as common factors contributing to aging. These hallmarks are
              demonstrated to be remarkable conservation across multiple species.
              Understanding the regulation of aging factors and their relationships across
              species can facilitate the translation of anti -aging drug development from
              model organisms to humans.
            </p>
            <p
              style="
                font-size: 22px;
                text-align: justify;
                text-indent: 1em;
                margin-bottom: 28px;
                margin-left: 20px;
              "
            >
              Here, we built AgeAnnoMO, a knowledgebase of multi-omics annotation for
              animal aging. AgeAnnoMO encompasses an extensive collection of 136 datasets
              from eight modalities, encompassing 8,586 samples from 50 representative
              species, making it a comprehensive resource for aging and longevity
              research. AgeAnnoMO characterizes multiple aging regulators across species
              via multi-omics data, comprehensively annotating aging-related genes,
              aging-related proteins, metabolites, mitochondrial genes, microbiotas, and
              age-specific TCR and BCR sequences tied to aging hallmarks for these species
              and tissues. We anticipate that AgeAnnoMO will provide a valuable resource
              for comprehending and integrating the conserved driving hallmarks in aging
              biology, and identifying the targetable biomarkers for aging research.
            </p>
          </el-col>
        </el-row>
        <el-row
          style="margin-top: 1%; padding-bottom: 3%; border-bottom: #808080 2px solid"
        >
          <el-col>
            <h3 class="big_title" style="margin-top: 1%; margin-bottom: 10px">
              Quick Search
            </h3>
          </el-col>

          <el-col>
            <span style="margin-left: 426px">Gene Symbol</span>
            <el-input
              class="myInput"
              v-model="myInput"
              style="margin-left: 34px; width: 200px"
            />
            <el-button style="margin-left: 34px" type="primary" @click="Submit"
              >Search</el-button
            >
            <el-button @click="Clean">Clean</el-button>
          </el-col>
        </el-row>
        <h1 style="margin-top: 2%; font-size: 35px" class="big_title">
          Browse by hallmarks of aging
        </h1>
        <el-row
          style="margin-top: 1%; padding-bottom: 3%; border-bottom: #808080 2px solid"
        >
          <el-col :span="23" :offset="1">
            <el-space wrap>
              <el-card
                v-for="i in itemName"
                :key="i"
                class="box-card"
                style="width: 315px; height: 400px; margin-left: 5px"
              >
                <div style="height: 412px; margin-left: 6px">
                  <router-link :to="{ path: i.path }">
                    <el-image
                      :src="i.icon"
                      fit="fill"
                      style="height: 53%; width: 80%; margin-bottom: 20%"
                    />
                    <h1>{{ i.value }}</h1>
                    {{ i.des }}
                  </router-link>
                </div>
              </el-card>
            </el-space>
          </el-col>
        </el-row>
        <h3 class="big_title" style="margin-top: 2%; font-size: 35px">
          Browse by Species
        </h3>
        <!-- <el-container style="height: 680px; overflow: auto; padding-bottom: 1%; border-bottom: #808080 2px solid;"> -->
        <el-row style="height: 680px; overflow: auto; margin-top: 1%">
          <el-col :span="23" :offset="1">
            <el-space wrap>
              <el-card
                v-for="i of speName"
                :key="i"
                class="box-card"
                style="width: 260px; height: 310px; margin-left: 5px"
              >
                <div style="height: 300px; margin-left: 6px">
                  <router-link
                    :to="{
                      path: '/speciessearchResult',
                      query: { keyword: i },
                    }"
                  >
                    <el-image
                      :src="require('../.././public/images/animals/' + i + '.png')"
                      fit="fill"
                      style="height: 53%; width: 80%; margin-bottom: 20%"
                    />
                    <h1>{{ i }}</h1>
                  </router-link>
                </div>
              </el-card>
            </el-space>
          </el-col>
        </el-row>
        <div
          style="
            display: flex;
            justify-content: center;
            border-top: #808080 2px solid;
            align-items: center;
            border-bottom: #808080 2px solid;
          "
        >
          <img
            style="width: 1360px; height: 160px; margin-bottom: 20px"
            src="../../public/images/bottom.png"
            alt=""
          />
        </div>
        <!-- </el-container> -->
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>
<script setup>
// import { Loading } from 'element-ui'
import Menus from "./menu-item";
import Footer from "./footer.vue";
import { ref } from "vue";
import { getItem } from "../api/menu.js";
import { getTissue, atTissue } from "@/api/enum";
import router from "@/router";
import geneSearchResult from "@/components/geneSearchResult.vue";
// import Loading from 'vue3-loading-overlay'
// import { useRouter } from 'vue-router'
const tissueList = ref([]);
const itemName = ref([]);
const speName = ref([
  "Human",
  "Mouse",
  "Rat",
  "Rhesus macaque",
  "Drosophila melanogaster",
  "Caenorhabditis. elegans",
  "Chlorocebus aethiop",
  "Danio rerio",
  "Nothobranchius furzeri",
  "Sus scrofa",
  "Canis lupus",
  "Bos taurus",
  "Bat",
  "Callithrix jacchus",
  "Rabbit",
  "Naked mole rats",
  "Macaca fascicularis",
  "Micro-pig",
  "Blattella germanica",
  "Queen bee",
]);
const myInput = ref("TLR2");
const Submit = () => {
  router.push({ path: "search", query: { Symbol: myInput.value } });
};

const Clean = () => {
  myInput.value = "";
};

const initMenu = async () => {
  itemName.value = await getItem();
  let tiss = await getTissue();
  for (const i of await atTissue()) {
    tiss.push(i);
  }
  tiss = Array.from(new Set(tiss));
  tissueList.value = tiss;
};
initMenu();
</script>

<style>
body {
  font-family: "Arial";
  font-size: 19px;
}
.el-col .el-col-11 .el-col-offset-1 {
  height: 700px;
}
/* .el-image__inner {
  height: 700px;
} */
.el-select-adv {
  width: 20%;
  height: 40px;
}
.el-input-adv {
  width: 1150px;
  height: 40px;
}
.el-button {
  height: 38px;
  /* width: 100%; */
}
.el-form-item__label {
  color: #000000;
  font-size: 20px;
}
.el-input__inner {
  font-size: 20px;
  height: 37px;
  padding: 3px 3px;
}
.little_title {
  text-align: center;
  color: black;
}
.big_title {
  text-align: center;
  color: black;
  margin-bottom: 5px;
}
.box-card:hover {
  border-color: #626e60;
  border-width: 2.5px;
}
.box-card :hover {
  border-color: #626e60;
  color: #626e60;
}
.myicon {
  float: left;
}
.el-carousel__container {
  height: 660px;
}

h1 {
  font-size: 25px;
}
.el-row {
  margin-bottom: 20px;
}
.el-row :last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
