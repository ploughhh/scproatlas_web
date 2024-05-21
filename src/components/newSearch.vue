<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Menus />
      </el-header>
      <el-main>
        <el-row type="flex" justify="center" :gutter="5">
          <el-col :span="24">
            <div style="border-bottom: #808080 2px solid">
              <h2 style="margin-bottom: 10px; padding: 10px 0 10px 35px">
                Advanced Search
              </h2>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="14">
            <div class="form-group">
              <label
                class="control-label"
                for="adv_seq_type"
                style="font-size: 28px"
                >Data Type</label
              >
              <el-select
                @change="changeType"
                v-model="Type"
                placeholder="Select"
                float="left"
              >
                <el-option
                  style="font-size: 23px"
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="14">
            <div class="form-group">
              <label
                class="control-label"
                for="adv_species"
                style="font-size: 28px"
                >Species
                <p style="font-weight: 300; font-size: 20px; margin-top: 9px;">{{ displaysedExample }}</p></label>
              <el-select
                @change="change2"
                v-model="Animal"
                placeholder="Select"
                float="left"
              >
                <el-option
                  style="font-size: 23px"
                  v-for="item in AnimalArr"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="14">
            <div class="form-group" id="adv_search_gene">
              <label
                class="control-label"
                for="adv_gene"
                style="font-size: 28px"
                >{{ displayType }}<p style="font-weight: 300; font-size: 20px; margin-top: 9px;">{{ displaytriExample }}</p>
              </label>
              <el-input v-if="isInput" v-model="Taxonomy" placeholder="Please Enter"></el-input>
              <el-select
                v-else
                filterable
                v-model="Taxonomy"
                placeholder="Select"
                float="left"
              >
                <el-option
                  style="font-size: 23px"
                  v-for="item in TaxonomyArr"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <!-- <el-input v-if="Type.value === 'Immunome'" v-model="Taxonomy"
                placeholder="Select"
                float="left">
              </el-input> -->
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="5">
          <el-col
            :offset="9"
            :span="4"
            :gutter="2"
            style="padding-left: 90.5px"
          >
            <div style="padding-bottom: 60px" class="el-button-close">
              <el-button type="Info" @click="Close" style="font-size: 28px"
                >Close</el-button
              >
            </div>
          </el-col>
          <el-col :span="4">
            <div style="padding-bottom: 60px" class="el-button-search">
              <!-- <el-button type="primary" @click="Submit" style="font-size: 20px;">Search</el-button> -->
              <el-button
                type="primary"
                @click="search(Species, Taxonomy)"
                style="margin: auto; font-size: 28px"
                >Search</el-button
              >
            </div>
          </el-col>
        </el-row>
        <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: #808080 2px solid;
          "
        >
          <img
            style="width: 1200px; height: 500px; margin-bottom: 50px"
            src="../../public/images/search.png"
            alt=""
          />
        </div>
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import Menus from "../layout/menu-item"
import Footer from "../layout/footer.vue"
import { ref, watch, computed } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const Type = ref("")
const Animal = ref("")
const Taxonomy = ref("")
const AnimalArr = ref([])
const TaxonomyArr = ref([])
const isInput = ref(false)
console.log("Taxonomy", Taxonomy.value)
const changeType = (val) => {
  console.log(val)
  Type.value = val
  Animal.value = ""
  Taxonomy.value = ""
  AnimalArr.value = []
  TaxonomyArr.value = []
  const obj = options.find((item) => item.value === val)
  isInput.value = obj.type === "input"
  AnimalArr.value = obj.children || []
}
// 计算属性
const displayType = computed(() => {
  if (Type.value === "Microbiome") {
    return "Microbiota"
  } else if (Type.value === "Metabolome") {
    return "Metabolite"
  } else if (Type.value === "Immunome") {
    return "CDR3 amino acid sequence"
  } else if (Type.value === "Single Cell Transcriptome") {
    return "Gene Symbol/Entrez_ID"
  } else if (Type.value === "Bulk Transcriptome") {
    return "Gene Symbol/Entrez_ID"
  } else if (Type.value === "Epigenome") {
    return "Gene Symbol/Entrez_ID"
  } else if (Type.value === "Proteome") {
    return "Protein Name/Uniprot_entry"
  } else if (Type.value === "Mitochondrial Genome") {
    return "Gene Symbol/Entrez_ID"
  } else {
    return ""
  }
})
const displaysedExample = computed(() => {
  if (Type.value === "Microbiome") {
    return "e.g. Mouse"
  } else if (Type.value === "Metabolome") {
    return "e.g. Mouse"
  } else if (Type.value === "Immunome") {
    return "e.g. Mouse"
  } else if (Type.value === "Single Cell Transcriptome") {
    return "e.g. Mouse"
  } else if (Type.value === "Bulk Transcriptome") {
    return "e.g. Mouse"
  } else if (Type.value === "Mitochondrial Genome") {
    return "e.g. Rhesus macaques"
  } else if (Type.value === "Epigenetic") {
    return "e.g. Mouse"
  } else if (Type.value === "Proteome") {
    return "e.g. Mouse"
  } else {
    return ""
  }
})
const displaytriExample = computed(() => {
  
  if (Type.value === "Bulk Transcriptome") {
    return "e.g. Fscn3"
  } else if (Type.value === "Microbiome") {
    return ""
  } else if (Type.value === "Metabolome") {
    return "e.g. Piperine O-linoleyl-L-carnitine Guanosine Tretinoin"
  } else if (Type.value === "Immunome") {
    return "e.g. CASSDAGETLYF"
  } else if (Type.value === "Single Cell Transcriptome") {
    return "e.g. LIMD2"
  } else if (Type.value === "Epigenome") {
    return "e.g. MSL3"
  } else if (Type.value === "Proteome") {
    return "e.g. ALDH2"
  } else if (Type.value === "Mitochondrial Genome") {
    return "e.g. MT-ND1"
  } else {
    return ""
  }
})

// 监听 Type 的变化
watch(Type, (newValue) => {
  if (newValue === "Microbiota") {
    // 处理 Microbiome 的逻辑
  } else if (newValue === "Metabolome") {
    // 处理 Metabolome 的逻辑
  }
})

const change2 = (val) => {
  console.log(val)
  Taxonomy.value = ""
  TaxonomyArr.value = []

  const obj = AnimalArr.value.find((item) => item.value === val)
  TaxonomyArr.value = obj.children || []
}
//#region 微生物数据
const Blattelladata = [
  "k__Bacteria;p__Proteobacteria;c__Deltaproteobacteria",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Rikenellaceae;g__Alistipes;s__indistinctus",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Ruminococcaceae",
  "k__Bacteria;p__Bacteroidetes;c__Flavobacteriia;o__Flavobacteriales;f__Blattabacteriaceae;g__Blattabacterium"
]
const Humandata = [
  "k__Bacteria;p__Proteobacteria;c__Betaproteobacteria;o__Burkholderiales;f__Burkholderiaceae;g__Lautropia",
  "k__Bacteria;p__SR1",
  "k__Bacteria;p__Proteobacteria;c__Gammaproteobacteria;o__Pseudomonadales;f__Pseudomonadaceae;g__Pseudomonas",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Eubacteriaceae;g__Pseudoramibacter;Eubacterium",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Veillonellaceae;g__Megasphaera",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Lachnospiraceae;g__Moryella",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Lactobacillales;f__Streptococcaceae;g__Streptococcus",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Prevotellaceae;g__Prevotella",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Lactobacillales;f__Carnobacteriaceae;g__Granulicatella",
  "k__Bacteria;p__TM7;c__TM7-3",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Actinomycetaceae;g__Actinomyces",
  "k__Bacteria;p__Fusobacteria;c__Fusobacteriia;o__Fusobacteriales;f__Leptotrichiaceae;g__Leptotrichia",
  "k__Bacteria;p__Proteobacteria;c__Gammaproteobacteria;o__Pasteurellales;f__Pasteurellaceae;g__Haemophilus;s__parainfluenzae",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Micrococcaceae;g__Rothia;s__dentocariosa",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Veillonellaceae;g__Veillonella;s__dispar",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Micrococcaceae;g__Rothia;s__mucilaginosa",
  "k__Bacteria;p__Firmicutes;c__Erysipelotrichi;o__Erysipelotrichales;f__Erysipelotrichaceae;g__Bulleidia;s__moorei",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__[Paraprevotellaceae];g__[Prevotella]",
  "k__Bacteria;p__Fusobacteria;c__Fusobacteriia;o__Fusobacteriales;f__Fusobacteriaceae;g__Fusobacterium",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Gemellales;f__Gemellaceae",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Lachnospiraceae;g__Oribacterium",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Veillonellaceae;g__Selenomonas",
  "k__Bacteria;p__Proteobacteria;c__Gammaproteobacteria;o__Pseudomonadales;f__Pseudomonadaceae;g__Pseudomonas;s__stutzeri",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__[Tissierellaceae];g__Parvimonas",
  "k__Bacteria;p__Proteobacteria;c__Epsilonproteobacteria;o__Campylobacterales;f__Campylobacteraceae;g__Campylobacter",
  "k__Bacteria;p__Firmicutes",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Propionibacteriaceae;g__Propionibacterium",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Corynebacteriaceae;g__Corynebacterium",
  "k__Bacteria;p__Bacteroidetes;c__Flavobacteriia;o__Flavobacteriales;f__Flavobacteriaceae;g__Flavobacterium",
  "k__Bacteria;p__Proteobacteria;c__Betaproteobacteria;o__Neisseriales;f__Neisseriaceae",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Lachnospiraceae;g__Coprococcus",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Corynebacteriaceae;g__Corynebacterium;s__kroppenstedtii",
  "k__Bacteria;p__Proteobacteria;c__Betaproteobacteria;o__Neisseriales;f__Neisseriaceae",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Micrococcaceae;g__Kocuria",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Lactobacillales;f__Streptococcaceae;g__Lactococcus",
  "k__Bacteria;p__Proteobacteria;c__Gammaproteobacteria;o__Pseudomonadales;f__Moraxellaceae;g__Acinetobacter;s__lwoffii",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Bacillales;f__Staphylococcaceae;g__Staphylococcus",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Corynebacteriaceae;g__Corynebacterium",
  "k__Bacteria;p__Proteobacteria;c__Gammaproteobacteria;o__Pasteurellales;f__Pasteurellaceae;g__Haemophilus;s__parainfluenzae",
  "k__Bacteria;p__Proteobacteria;c__Alphaproteobacteria;o__Rhodobacterales;f__Rhodobacteraceae;g__Paracoccus",
  "k__Bacteria;p__Proteobacteria;c__Alphaproteobacteria;o__Rhodobacterales;f__Rhodobacteraceae;g__Paracoccus;s__marcusii",
  "k__Bacteria;p__Proteobacteria;c__Gammaproteobacteria;o__Pseudomonadales;f__Moraxellaceae;g__Enhydrobacter",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__[Tissierellaceae];g__Anaerococcus"
]
const Macacamulattadata = [
  "k__Bacteria;p__Synergistetes;c__Synergistia;o__Synergistales;f__Dethiosulfovibrionaceae;g__Pyramidobacter;s__piscolens",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Veillonellaceae;g__Schwartzia",
  "k__Bacteria;p__Synergistetes;c__Synergistia;o__Synergistales;f__Synergistaceae",
  "k__Archaea;p__Euryarchaeota;c__Thermoplasmata;o__E2;f__[Methanomassiliicoccaceae]",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Veillonellaceae;g__Succiniclasticum",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Porphyromonadaceae;g__Porphyromonas",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Bacteroidaceae;g__Bacteroides",
  "k__Bacteria;p__Spirochaetes;c__MVP-15;o__PL-11B10",
  "k__Bacteria;p__Spirochaetes;c__GN05;o__SBYZ-6080",
  "k__Bacteria;p__Actinobacteria;c__Coriobacteriia;o__Coriobacteriales;f__Coriobacteriaceae;g__Atopobium",
  "k__Bacteria;p__Firmicutes;c__Erysipelotrichi;o__Erysipelotrichales;f__Erysipelotrichaceae;g__Sharpea",
  "k__Bacteria;p__Synergistetes;c__Synergistia;o__Synergistales;f__Dethiosulfovibrionaceae;g__TG5",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Syntrophomonadaceae;g__Syntrophomonas",
  "k__Bacteria;p__Spirochaetes;c__Spirochaetes;o__Spirochaetales;f__Spirochaetaceae;g__Treponema;s__amylovorum",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Ruminococcaceae",
  "k__Bacteria;p__Proteobacteria;c__Deltaproteobacteria;o__Desulfovibrionales;f__Desulfomicrobiaceae;g__Desulfomicrobium;s__orale",
  "k__Bacteria;p__OD1",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Lachnospiraceae;g__Shuttleworthia;s__satelles",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__[Paraprevotellaceae]",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__[Acidaminobacteraceae];g__Fusibacter",
  "k__Bacteria;p__Proteobacteria;c__Alphaproteobacteria",
  "k__Archaea;p__Euryarchaeota;c__Thermoplasmata;o__E2;f__[Methanomassiliicoccaceae];g__vadinCA11",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__[Tissierellaceae];g__ph2",
  "k__Bacteria;p__Elusimicrobia;c__Endomicrobia",
  "k__Bacteria;p__Spirochaetes;c__Spirochaetes",
  "k__Bacteria;p__Proteobacteria;c__Deltaproteobacteria;o__Desulfovibrionales;f__Desulfovibrionaceae;g__Desulfovibrio",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Veillonellaceae",
  "k__Bacteria;p__Proteobacteria;c__Deltaproteobacteria",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__[Mogibacteriaceae];g__Mogibacterium",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Actinomycetaceae;g__Actinomyces",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Corynebacteriaceae;g__Corynebacterium",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Porphyromonadaceae",
  "k__Bacteria;p__Proteobacteria;c__Gammaproteobacteria;o__Pasteurellales;f__Pasteurellaceae;g__Haemophilus",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Peptococcaceae;g__Peptococcus",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Veillonellaceae;g__Selenomonas;s__noxia",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Peptostreptococcaceae;g__Filifactor",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__BS11",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Prevotellaceae",
  "k__Bacteria;p__Proteobacteria;c__Epsilonproteobacteria;o__Campylobacterales",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Veillonellaceae;g__Veillonella",
  "k__Bacteria;p__Tenericutes;c__Mollicutes;o__Acholeplasmatales;f__Acholeplasmataceae;g__Acholeplasma",
  "k__Bacteria;p__Spirochaetes;c__Spirochaetes;o__Spirochaetales;f__Spirochaetaceae;g__Treponema;s__socranskii",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Prevotellaceae;g__Prevotella;s__melaninogenica",
  "k__Bacteria;p__Chlorobi;c__OPB56",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Porphyromonadaceae;g__Tannerella",
  "k__Bacteria;p__Proteobacteria;c__Betaproteobacteria;o__Burkholderiales;f__Comamonadaceae",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Porphyromonadaceae;g__Porphyromonas;s__endodontalis",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Prevotellaceae;g__Prevotella;s__nigrescens",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Lachnospiraceae;g__Moryella",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__[Paraprevotellaceae];g__[Prevotella]",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Actinomycetaceae",
  "k__Bacteria;p__Proteobacteria;c__Gammaproteobacteria;o__Cardiobacteriales;f__Cardiobacteriaceae;g__Cardiobacterium;s__valvarum",
  "k__Archaea;p__Euryarchaeota;c__Methanobacteria;o__Methanobacteriales;f__Methanobacteriaceae;g__Methanobrevibacter",
  "k__Bacteria;p__Firmicutes;c__Clostridia",
  "k__Bacteria;p__Proteobacteria;c__Deltaproteobacteria;o__Desulfobacterales;f__Desulfobulbaceae;g__Desulfobulbus",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__p-2534-18B5",
  "k__Bacteria;p__Tenericutes;c__Mollicutes;o__Mycoplasmatales;f__Mycoplasmataceae;g__Mycoplasma",
  "k__Bacteria;p__Actinobacteria;c__Coriobacteriia;o__Coriobacteriales;f__Coriobacteriaceae",
  "k__Bacteria;p__Actinobacteria;c__Coriobacteriia;o__Coriobacteriales;f__Coriobacteriaceae;g__Adlercreutzia",
  "k__Bacteria;p__Firmicutes;c__Erysipelotrichi;o__Erysipelotrichales;f__Erysipelotrichaceae;g__RFN20",
  "k__Bacteria;p__Fusobacteria;c__Fusobacteriia;o__Fusobacteriales;f__Fusobacteriaceae;g__Fusobacterium",
  "k__Bacteria;p__Proteobacteria;c__Betaproteobacteria;o__Neisseriales;f__Neisseriaceae;g__Eikenella",
  "k__Bacteria;p__Proteobacteria;c__Deltaproteobacteria;o__Desulfovibrionales;f__Desulfovibrionaceae;g__Desulfovibrio;s__D168",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Prevotellaceae;g__Prevotella;s__pallens",
  "k__Bacteria;p__Proteobacteria;c__Gammaproteobacteria;o__Pasteurellales;f__Pasteurellaceae;g__Aggregatibacter",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Clostridiaceae;g__Clostridium",
  "k__Bacteria;p__Synergistetes;c__Synergistia;o__Synergistales;f__Synergistaceae;g__Candidatus;s__Tammella",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Bacteroidaceae",
  "k__Bacteria;p__Proteobacteria;c__Deltaproteobacteria;o__GMD14H09",
  "k__Bacteria;p__Chloroflexi;c__Anaerolineae;o__Anaerolineales;f__Anaerolinaceae;g__SHD-231",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Lactobacillales;f__Streptococcaceae;g__Streptococcus;s__anginosus",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Ruminococcaceae;g__Oscillospira",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Lachnospiraceae;g__Butyrivibrio",
  "k__Bacteria;p__Proteobacteria;c__Gammaproteobacteria;o__Pasteurellales;f__Pasteurellaceae;g__Actinobacillus",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__[Tissierellaceae]",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Veillonellaceae;g__Megasphaera",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Lachnospiraceae;g__Oribacterium",
  "k__Bacteria;p__Bacteroidetes;c__Flavobacteriia;o__Flavobacteriales;f__Flavobacteriaceae;g__Capnocytophaga",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Veillonellaceae;g__Dialister",
  "k__Bacteria;p__Proteobacteria;c__Epsilonproteobacteria;o__Campylobacterales;f__Campylobacteraceae;g__Campylobacter",
  "k__Bacteria;p__Firmicutes;c__Erysipelotrichi;o__Erysipelotrichales;f__Erysipelotrichaceae;g__Bulleidia",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Bifidobacteriales;f__Bifidobacteriaceae;g__Scardovia",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Prevotellaceae;g__Prevotella;s__intermedia",
  "k__Bacteria;p__Proteobacteria;c__Deltaproteobacteria;o__Desulfovibrionales;f__Desulfomicrobiaceae",
  "k__Bacteria;p__Proteobacteria;c__Gammaproteobacteria;o__Cardiobacteriales;f__Cardiobacteriaceae;g__Cardiobacterium",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Porphyromonadaceae;g__Paludibacter",
  "k__Bacteria;p__Proteobacteria;c__Gammaproteobacteria;o__Oceanospirillales;f__Alcanivoracaceae;g__Alcanivorax",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Bacillales;f__Staphylococcaceae;g__Staphylococcus",
  "k__Bacteria;p__Fusobacteria;c__Fusobacteriia;o__Fusobacteriales;f__Leptotrichiaceae;g__Leptotrichia",
  "k__Bacteria;p__Proteobacteria;c__Alphaproteobacteria;o__Rickettsiales",
  "k__Bacteria;p__Tenericutes;c__Mollicutes;o__RF39",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Lachnospiraceae;g__Catonella",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Actinomycetaceae;g__Actinomyces;s__hyovaginalis",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__[Tissierellaceae];g__Parvimonas",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Prevotellaceae;g__Prevotella",
  "k__Bacteria;p__Bacteroidetes;c__Flavobacteriia;o__Flavobacteriales;f__[Weeksellaceae]",
  "k__Bacteria;p__Bacteroidetes;c__Flavobacteriia;o__Flavobacteriales;f__Flavobacteriaceae;g__Capnocytophaga;s__ochracea",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Veillonellaceae;g__Phascolarctobacterium",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__S24-7",
  "k__Bacteria;p__Spirochaetes;c__Spirochaetes;o__Spirochaetales;f__Spirochaetaceae;g__Treponema",
  "k__Bacteria;p__Actinobacteria;c__Coriobacteriia;o__Coriobacteriales;f__Coriobacteriaceae;g__Atopobium;s__rimae",
  "k__Bacteria;p__Proteobacteria",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Lachnospiraceae",
  "k__Bacteria;p__Proteobacteria;c__Deltaproteobacteria;o__Myxococcales",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Veillonellaceae;g__Selenomonas",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Peptostreptococcaceae;g__Peptostreptococcus",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Gemellales;f__Gemellaceae",
  "k__Bacteria;p__Proteobacteria;c__Betaproteobacteria;o__Rhodocyclales;f__Rhodocyclaceae;g__Propionivibrio",
  "k__Bacteria;p__Elusimicrobia;c__Elusimicrobia;o__Elusimicrobiales",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Lachnospiraceae;g__Lachnoanaerobaculum;s__orale",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Veillonellaceae;g__Veillonella;s__dispar",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Prevotellaceae;g__Prevotella;s__copri",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Lactobacillales;f__Streptococcaceae;g__Streptococcus",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Lactobacillales;f__Streptococcaceae;g__Streptococcus;s__luteciae",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__[Mogibacteriaceae]",
  "k__Bacteria;p__Proteobacteria;c__Deltaproteobacteria;o__Bdellovibrionales;f__Bacteriovoracaceae",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Veillonellaceae;g__Veillonella;s__parvula",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__[Mogibacteriaceae];g__Anaerovorax",
  "k__Bacteria;p__Proteobacteria;c__Epsilonproteobacteria;o__Campylobacterales;f__Helicobacteraceae;g__Wolinella;s__succinogenes"
]
const micropigdata = [
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Porphyromonadaceae",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Porphyromonadaceae;g__Porphyromonas",
  "k__Bacteria;p__Proteobacteria;c__Epsilonproteobacteria;o__Campylobacterales;f__Campylobacteraceae;g__Campylobacter",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Porphyromonadaceae;g__Parabacteroides",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Christensenellaceae",
  "k__Bacteria;p__Verrucomicrobia;c__Verrucomicrobiae;o__Verrucomicrobiales;f__Verrucomicrobiaceae;g__Akkermansia",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Mogibacteriaceae",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Lactobacillales;f__Lactobacillaceae;g__Lactobacillus",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Tissierellaceae;g__ph2",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Lactobacillales;f__Streptococcaceae;g__Streptococcus",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Actinomycetaceae;g__Arcanobacterium",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Tissierellaceae;g__Peptoniphilus",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Actinomycetaceae;g__Mobiluncus",
  "k__Bacteria;p__Proteobacteria;c__Gammaproteobacteria;o__Aeromonadales;f__Succinivibrionaceae;g__Succinivibrio",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Tissierellaceae;g__1-68",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Corynebacteriaceae;g__Corynebacterium",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Tissierellaceae;g__Anaerococcus",
  "k__Bacteria;p__Proteobacteria;c__Betaproteobacteria;o__Burkholderiales;f__Comamonadaceae;g__Comamonas",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Lachnospiraceae;g__Dorea",
  "k__Bacteria;p__Verrucomicrobia;c__Opitutae;o__Cerasicoccales;f__Cerasicoccaceae",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Actinomycetaceae;g__Actinomyces",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Veillonellaceae;g__Dialister",
  "k__Bacteria;p__Synergistetes;c__Synergistia;o__Synergistales;f__Synergistaceae;g__Synergistes",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Veillonellaceae;g__Succiniclasticum",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Tissierellaceae;g__WAL-1855D",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Turicibacterales;f__Turicibacteraceae;g__Turicibacter",
  "k__Bacteria;p__Actinobacteria;c__Coriobacteriia;o__Coriobacteriales;f__Coriobacteriaceae",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__BS11",
  "k__Bacteria;p__Synergistetes;c__Synergistia;o__Synergistales;f__Dethiosulfovibrionaceae;g__Pyramidobacter",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Tissierellaceae;g__Finegoldia",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Bacillales;f__Staphylococcaceae;g__Staphylococcus",
  "k__Bacteria;p__Proteobacteria;c__Betaproteobacteria;o__Neisseriales;f__Neisseriaceae",
  "k__Bacteria;p__Lentisphaerae;c__Lentisphaeria;o__Z20;f__R4-45B",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Brevibacteriaceae;g__Brevibacterium",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Acidaminobacteraceae;g__Guggenheimella",
  "k__Bacteria;p__Firmicutes;c__Erysipelotrichi;o__Erysipelotrichales;f__Erysipelotrichaceae;g__Eubacterium",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Actinomycetaceae",
  "k__Bacteria;p__Tenericutes;c__Mollicutes;o__Anaeroplasmatales;f__Anaeroplasmataceae",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Ruminococcaceae;g__Faecalibacterium",
  "k__Bacteria;p__Tenericutes;c__Mollicutes;o__Anaeroplasmatales;f__Anaeroplasmataceae;g__Anaeroplasma",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Dietziaceae",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Tissierellaceae",
  "k__Bacteria;p__Thermi;c__Deinococci;o__Deinococcales;f__Deinococcaceae;g__Deinococcus",
  "k__Bacteria;p__Actinobacteria;c__Coriobacteriia;o__Coriobacteriales;f__Coriobacteriaceae;g__Collinsella",
  "k__Bacteria;p__OD1",
  "k__Bacteria;p__Bacteroidetes;c__Sphingobacteriia;o__Sphingobacteriales;f__Sphingobacteriaceae;g__Sphingobacterium",
  "k__Bacteria;p__Tenericutes;c__Mollicutes;o__Acholeplasmatales",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Bacteroidaceae",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Lachnospiraceae;g__Butyrivibrio",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Bacillales;f__Planococcaceae;g__Rummeliibacillus",
  "k__Bacteria;p__Proteobacteria;c__Gammaproteobacteria;o__Pseudomonadales;f__Pseudomonadaceae;g__Pseudomonas",
  "k__Bacteria;p__Synergistetes;c__Synergistia;o__Synergistales;f__Dethiosulfovibrionaceae",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Propionibacteriaceae",
  "k__Bacteria;p__Chlamydiae;c__Chlamydiia;o__Chlamydiales;f__Chlamydiaceae;g__Chlamydia",
  "k__Bacteria;p__Proteobacteria;c__Deltaproteobacteria;o__Desulfobacterales;f__Desulfobulbaceae;g__Desulfobulbus",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Micrococcaceae",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Actinomycetaceae;g__Arcanobacterium",
  "k__Bacteria;p__Proteobacteria;c__Epsilonproteobacteria;o__Campylobacterales;f__Helicobacteraceae;g__Flexispira",
  "k__Bacteria;p__Proteobacteria;c__Epsilonproteobacteria;o__Campylobacterales;f__Helicobacteraceae;g__Flexispira;s__rappini",
  "k__Bacteria;p__Proteobacteria;c__Epsilonproteobacteria;o__Campylobacterales;f__Campylobacteraceae;g__Campylobacter",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Brevibacteriaceae;g__Brevibacterium;s__paucivorans",
  "k__Bacteria;p__Spirochaetes;c__Spirochaetes;o__Spirochaetales;f__Spirochaetaceae;g__Treponema",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Dietziaceae",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Actinomycetaceae;g__Actinomyces",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Brevibacteriaceae;g__Brevibacterium",
  "k__Bacteria;p__Verrucomicrobia;c__Verruco-5;o__WCHB1-41;f__RFP12",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Propionibacteriaceae;g__Propionibacterium;s__acnes",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Dermabacteraceae;g__Brachybacterium",
  "k__Bacteria;p__Chlamydiae;c__Chlamydiia;o__Chlamydiales;f__Chlamydiaceae;g__Chlamydia",
  "k__Bacteria;p__Actinobacteria;c__Coriobacteriia;o__Coriobacteriales;f__Coriobacteriaceae;g__Collinsella;s__aerofaciens",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Actinomycetaceae;g__Mobiluncus",
  "k__Bacteria;p__Planctomycetes;c__Planctomycetia;o__Pirellulales;f__Pirellulaceae",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Actinomycetaceae",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Propionibacteriaceae",
  "k__Bacteria;p__Actinobacteria;c__Coriobacteriia;o__Coriobacteriales;f__Coriobacteriaceae",
  "k__Bacteria;p__Lentisphaerae;c__[Lentisphaeria];o__Victivallales;f__Victivallaceae",
  "k__Bacteria;p__Proteobacteria;c__Deltaproteobacteria;o__Desulfovibrionales;f__Desulfovibrionaceae;g__Desulfovibrio",
  "k__Bacteria;p__Verrucomicrobia;c__Verrucomicrobiae;o__Verrucomicrobiales;f__Verrucomicrobiaceae;g__Akkermansia",
  "k__Bacteria;p__Verrucomicrobia;c__Verruco-5;o__WCHB1-41;f__WCHB1-25",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Actinomycetaceae;g__Actinomyces;s__hyovaginalis",
  "k__Bacteria;p__Fibrobacteres;c__Fibrobacteria;o__Fibrobacterales;f__Fibrobacteraceae;g__Fibrobacter",
  "k__Bacteria;p__Proteobacteria;c__Deltaproteobacteria;o__Desulfovibrionales;f__Desulfovibrionaceae;g__Desulfovibrio;s__D168",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Corynebacteriaceae;g__Corynebacterium",
  "k__Bacteria;p__Fibrobacteres;c__Fibrobacteria;o__Fibrobacterales;f__Fibrobacteraceae;g__Fibrobacter;s__succinogenes"
]
const Mousedata = [
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Lachnospiraceae",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Paraprevotellaceae;g__Paraprevotella",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Prevotellaceae;g__Prevotella",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Odoribacteraceae;g__Odoribacter",
  "k__Bacteria;p__Proteobacteria;c__Deltaproteobacteria;o__Desulfovibrionales;f__Desulfovibrionaceae",
  "k__Bacteria;p__Firmicutes;c__Erysipelotrichi;o__Erysipelotrichales;f__Erysipelotrichaceae;g__Clostridium",
  "k__Bacteria;p__Proteobacteria",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Clostridiaceae",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Rikenellaceae;g__AF12",
  "k__Bacteria;p__Proteobacteria;c__Epsilonproteobacteria;o__Campylobacterales;f__Helicobacteraceae;g__Helicobacter",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Peptostreptococcaceae",
  "k__Bacteria;p__Firmicutes;c__Erysipelotrichi;o__Erysipelotrichales;f__Erysipelotrichaceae;g__Allobaculum",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Bifidobacteriales;f__Bifidobacteriaceae;g__Bifidobacterium",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__[Odoribacteraceae];g__Odoribacter",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Porphyromonadaceae;g__Parabacteroides",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Rikenellaceae;g__AF12",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Rikenellaceae;g__Alistipes;s__indistinctus",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Lactobacillales;f__Lactobacillaceae;g__Lactobacillus",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Lactobacillales;f__Lactobacillaceae;g__Lactobacillus;s__reuteri",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Lactobacillales;f__Streptococcaceae;g__Lactococcus;s__garvieae",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Lachnospiraceae",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Ruminococcaceae",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Ruminococcaceae;g__Ruminococcus",
  "k__Bacteria;p__Firmicutes;c__Erysipelotrichi;o__Erysipelotrichales;f__Erysipelotrichaceae",
  "k__Bacteria;p__Proteobacteria;c__Deltaproteobacteria;o__Desulfovibrionales;f__Desulfovibrionaceae",
  "k__Bacteria;p__Proteobacteria;c__Deltaproteobacteria;o__Desulfovibrionales;f__Desulfovibrionaceae;g__Bilophila",
  "k__Bacteria;p__Proteobacteria;c__Epsilonproteobacteria;o__Campylobacterales;f__Helicobacteraceae;g__Helicobacter;s__hepaticus",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Turicibacterales;f__Turicibacteraceae;g__Turicibacter",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Prevotellaceae;g__Prevotella",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Clostridiaceae",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Lactobacillales;f__Enterococcaceae;g__Enterococcus",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Rikenellaceae",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Bacteroidaceae;g__Bacteroides",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__S24-7",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Lachnospiraceae;g__Coprococcus",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Ruminococcaceae;g__Clostridium;s__methylpentosum",
  "k__Bacteria;p__Proteobacteria;c__Gammaproteobacteria;o__Enterobacteriales;f__Enterobacteriaceae;g__Proteus",
  "k__Bacteria;p__Actinobacteria;c__Coriobacteriia;o__Coriobacteriales;f__Coriobacteriaceae",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__[Paraprevotellaceae];g__Paraprevotella",
  "k__Bacteria;p__Cyanobacteria;c__4C0d-2;o__YS2",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Ruminococcaceae;g__Ruminococcus;s__callidus",
  "k__Bacteria;p__Firmicutes;c__Erysipelotrichi;o__Erysipelotrichales;f__Erysipelotrichaceae;g__Coprobacillus",
  "k__Bacteria;p__Proteobacteria;c__Gammaproteobacteria;o__Pseudomonadales;f__Moraxellaceae;g__Acinetobacter;s__schindleri",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Christensenellaceae",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Lachnospiraceae;g__Roseburia",
  "k__Bacteria;p__OD1",
  "k__Bacteria;p__Tenericutes;c__Mollicutes;o__RF39",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Clostridiaceae;g__Clostridium",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Lachnospiraceae;g__Blautia",
  "k__Bacteria;p__Proteobacteria",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Corynebacteriaceae;g__Corynebacterium;s__mastitidis",
  "k__Bacteria;p__Proteobacteria;c__Alphaproteobacteria;o__Rickettsiales;f__mitochondria",
  "k__Bacteria;p__Proteobacteria;c__Gammaproteobacteria;o__Enterobacteriales;f__Enterobacteriaceae",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Peptococcaceae;g__rc4-4",
  "k__Bacteria;p__Proteobacteria;c__Betaproteobacteria;o__Methylophilales;f__Methylophilaceae;g__Methylotenera;s__mobilis",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__[Mogibacteriaceae]",
  "k__Bacteria;p__Actinobacteria;c__Coriobacteriia;o__Coriobacteriales;f__Coriobacteriaceae;g__Adlercreutzia",
  "k__Bacteria;p__Proteobacteria;c__Betaproteobacteria;o__Burkholderiales;f__Comamonadaceae",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Bacillales;f__Staphylococcaceae;g__Staphylococcus;s__sciuri",
  "k__Bacteria;p__Proteobacteria;c__Alphaproteobacteria;o__Rhizobiales",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Lactobacillales;f__Streptococcaceae;g__Streptococcus",
  "k__Bacteria;p__Firmicutes;c__Clostridia",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Lachnospiraceae;g__[Ruminococcus];s__gnavus",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Lachnospiraceae;g__Clostridium",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Lachnospiraceae;g__Dorea",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Peptococcaceae",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Ruminococcaceae;g__Oscillospira",
  "k__Bacteria;p__Proteobacteria;c__Alphaproteobacteria",
  "k__Bacteria;p__Proteobacteria;c__Alphaproteobacteria;o__Rhizobiales;f__Rhizobiaceae",
  "k__Bacteria;p__Bacteroidetes;c__Bacteroidia;o__Bacteroidales;f__Porphyromonadaceae;g__Parabacteroides;s__gordonii",
  "k__Bacteria;p__Firmicutes;c__Erysipelotrichi;o__Erysipelotrichales;f__Erysipelotrichaceae;g__Clostridium;s__cocleatum"
]
const Honeybeequeendata = [
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Lactobacillales",
  "k__Bacteria;p__Proteobacteria",
  "k__Bacteria;p__Proteobacteria;c__Alphaproteobacteria;o__Rhodospirillales;f__Acetobacteraceae;g__Commensalibacter",
  "k__Bacteria;p__Proteobacteria;c__Betaproteobacteria;o__Burkholderiales;f__Comamonadaceae;g__Delftia",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Bifidobacteriales;f__Bifidobacteriaceae;g__Bifidobacterium",
  "k__Bacteria;p__Proteobacteria;c__Betaproteobacteria;o__Burkholderiales;f__Oxalobacteraceae;g__Ralstonia",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Bifidobacteriales;f__Bifidobacteriaceae",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Bacillales;f__Bacillaceae;g__Bacillus",
  "k__Bacteria;p__Proteobacteria;c__Alphaproteobacteria;o__Caulobacterales;f__Caulobacteraceae;g__Caulobacter",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Lactobacillales;f__Lactobacillaceae",
  "k__Bacteria;p__Bacteroidetes;c__;Saprospirae;o__Saprospirales;f__Chitinophagaceae;g__Sediminibacterium",
  "k__Bacteria;p__Proteobacteria;c__Alphaproteobacteria",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Corynebacteriaceae;g__Corynebacterium",
  "k__Bacteria;p__Proteobacteria;c__Alphaproteobacteria;o__Rhizobiales;f__Brucellaceae;g__Ochrobactrum",
  "k__Bacteria;p__Proteobacteria;c__Betaproteobacteria;o__Burkholderiales;f__Oxalobacteraceae",
  "k__Bacteria;p__Cyanobacteria;c__4C0d-2;o__MLE1-12",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Propionibacteriaceae;g__Propionibacterium",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Lactobacillales;f__Lactobacillaceae",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Bifidobacteriales;f__Bifidobacteriaceae;g__Bifidobacterium",
  "k__Bacteria;p__Proteobacteria;c__Betaproteobacteria;o__Burkholderiales;f__Oxalobacteraceae;g__Ralstonia",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Lactobacillales",
  "k__Bacteria;p__Proteobacteria;c__Betaproteobacteria;o__Neisseriales;f__Neisseriaceae;g__Snodgrassella;s__alvi",
  "k__Bacteria;p__Proteobacteria;c__Alphaproteobacteria;o__Rhodospirillales;f__Acetobacteraceae;g__Gluconobacter",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Lactobacillales;f__Lactobacillaceae;g__Lactobacillus",
  "k__Bacteria;p__Proteobacteria",
  "k__Bacteria;p__Proteobacteria;c__Gammaproteobacteria;o__Pasteurellales",
  "k__Bacteria;p__Proteobacteria;c__Alphaproteobacteria",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Bifidobacteriales;f__Bifidobacteriaceae",
  "k__Bacteria;p__Proteobacteria;c__Alphaproteobacteria;o__Rhodospirillales;f__Acetobacteraceae",
  "k__Bacteria;p__Proteobacteria;c__Alphaproteobacteria;o__Rhizobiales;f__Brucellaceae;g__Ochrobactrum",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Lactobacillales;f__Streptococcaceae;g__Streptococcus",
  "k__Bacteria;p__Proteobacteria;c__Gammaproteobacteria;o__Pseudomonadales;f__Pseudomonadaceae;g__Pseudomonas",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Bacillales;f__Bacillaceae;g__Bacillus"
]
const Ratdata = [
  "k__Bacteria;p__Proteobacteria;c__Gammaproteobacteria;o__Pasteurellales;f__Pasteurellaceae;g__Aggregatibacter",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Clostridiaceae;g__Clostridium",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Turicibacterales;f__Turicibacteraceae;g__Turicibacter",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Bifidobacteriales;f__Bifidobacteriaceae;g__Bifidobacterium",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Ruminococcaceae;g__Oscillospira",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales",
  "k__Bacteria;p__Cyanobacteria;c__Chloroplast;o__Streptophyta",
  "k__Bacteria;p__Verrucomicrobia;c__Spartobacteria;o__Chthoniobacterales;f__Chthoniobacteraceae;g__DA101",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Nocardiaceae;g__Rhodococcus",
  "k__Bacteria;p__Proteobacteria;c__Betaproteobacteria;o__Burkholderiales;f__Comamonadaceae;g__Pelomonas",
  "k__Bacteria;p__Firmicutes;c__Bacilli;o__Gemellales;f__Gemellaceae;g__Gemella",
  "k__Bacteria;p__Proteobacteria;c__Betaproteobacteria;o__Burkholderiales;f__Burkholderiaceae",
  "k__Bacteria;p__Proteobacteria;c__Alphaproteobacteria;o__Rhizobiales;f__Bradyrhizobiaceae",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Ruminococcaceae;g__Subdoligranulum",
  "k__Bacteria;p__Firmicutes;c__Clostridia;o__Clostridiales;f__Ruminococcaceae;g__Ruminococcus",
  "k__Bacteria;p__Bacteroidetes;c__Flavobacteriia;o__Flavobacteriales;f__Flavobacteriaceae;g__Flavobacterium",
  "k__Bacteria;p__Bacteroidetes;c__Saprospirae;o__Saprospirales;f__Chitinophagaceae",
  "k__Bacteria;p__Actinobacteria;c__Actinobacteria;o__Actinomycetales;f__Actinomycetaceae;g__Actinomyces",
  "k__Bacteria;p__Proteobacteria;c__Deltaproteobacteria;o__Thermodesulfobacteriales",
  "k__Bacteria;p__Chloroflexi;c__TK10;o__B07-WMSP1",
  "k__Bacteria;p__Bacteroidetes;c__Saprospirae;o__Saprospirales;f__Saprospiraceae;g__Haliscomenobacter",
  "k__Bacteria;p__Proteobacteria;c__Alphaproteobacteria;o__Rhodospirillales;f__Rhodospirillaceae;g__Azospirillum"
]
const Rhesusmacaquesdata = ["k__Bacteria;p__OD1"]
const Blattellachildren = Blattelladata.map((item, index) => {
  return {
    value: item,
    label: item
  }
})
const Humanchildren = Humandata.map((item, index) => {
  return {
    value: item,
    label: item
  }
})
const Macacamulattachildren = Macacamulattadata.map((item, index) => {
  return {
    value: item,
    label: item
  }
})
const micropigchildren = micropigdata.map((item, index) => {
  return {
    value: item,
    label: item
  }
})
const Mousechildren = Mousedata.map((item, index) => {
  return {
    value: item,
    label: item
  }
})
const Honeybeequeenchildren = Honeybeequeendata.map((item, index) => {
  return {
    value: item,
    label: item
  }
})
const Ratchildren = Ratdata.map((item, index) => {
  return {
    value: item,
    label: item
  }
})
const Rhesusmacaqueschildren = Rhesusmacaquesdata.map((item, index) => {
  return {
    value: item,
    label: item
  }
})
//#endregion
const options = [
{
    value: "Bulk Transcriptome",
    label: "Bulk Transcriptome",
    type: "input",
    children: [
      {
        value: "Caenorhabditis. elegans",
        label: "Caenorhabditis. elegans"
      },
      {
        value: "Canis lupus",
        label: "Canis lupus"
      },
      {
        value: "Chlorocebus aethiop",
        label: "Chlorocebus aethiop"
      },
      {
        value: "Danio rerio",
        label: "Danio rerio"
      },
      {
        value: "Drosophila melanogaster",
        label: "Drosophila melanogaster"
      },
      {
        value: "Human",
        label: "Human"
      },
      {
        value: "Mouse",
        label: "Mouse"
      },
      {
        value: "Rat",
        label: "Rat"
      },
      {
        value: "Sus scrofa",
        label: "Sus scrofa"
      }
    ]
  }, 
  {
    value: "Single Cell Transcriptome",
    label: "Single Cell Transcriptome",
    type: "input",
    children: [
      {
        value: "D. melanogaster",
        label: "D. melanogaster"
      },
      {
        value: "Human",
        label: "Human"
      },
      {
        value: "Macaca fascicularis",
        label: "Macaca fascicularis"
      },
      {
        value: "Mouse",
        label: "Mouse"
      }
    ]
  },
  {
    value: "Epigenome",
    label: "Epigenome",
    type: "input",
    children: [
      {
        value: "Bat",
        label: "Bat"
      },
      {
        value: "Human",
        label: "Human"
      },
      {
        value: "Macaca mulatta",
        label: "Macaca mulatta"
      },
      {
        value: "Mouse",
        label: "Mouse"
      }
    ]
  },
  {
    value: "Proteome",
    label: "Proteome",
    type: "input",
    children: [
      {
        value: "C. elegans",
        label: "C. elegans"
      },
      {
        value: "Callithrix jacchus",
        label: "Callithrix jacchus"
      },
      {
        value: "Drosophila melanogaster",
        label: "Drosophila melanogaster"
      },
      {
        value: "Human",
        label: "Human"
      },
      {
        value: "Mouse",
        label: "Mouse"
      },
      {
        value: "Nothobranchius furzeri",
        label: "Nothobranchius furzeri"
      },
      {
        value: "Rabbit",
        label: "Rabbit"
      },
      {
        value: "Rat",
        label: "Rat"
      },
      {
        value: "Rhesus monkeys",
        label: "Rhesus monkeys"
      }
    ]
  },
  {
    value: "Mitochondrial Genome",
    label: "Mitochondrial Genome",
    type: "input",
    children: [
      {
        value: "Rhesus macaques",
        label: "Rhesus macaques"
      },
      {
        value: "Mouse",
        label: "Mouse"
      }
    ]
  },
  {
    value: "Immunome",
    label: "Immunome",
    type: "input",
    children: [
      {
        value: "Mouse",
        label: "Mouse"
      },
      {
        value: "Human",
        label: "Human"
      }
    ]
  },
  {
    value: "Microbiome",
    label: "Microbiome",
    children: [
      {
        value: "Human",
        label: "Human",
        children: Humanchildren
      },
      {
        value: "Blattella germanica",
        label: "Blattella germanica",
        children: Blattellachildren
      },
      {
        value: "Macaca mulatta",
        label: "Macaca mulatta",
        children: Macacamulattachildren
      },
      {
        value: "Micro-pig",
        label: "Micro-pig",
        children: micropigchildren
      },
      {
        value: "Mouse",
        label: "Mouse",
        children: Mousechildren
      },
      {
        value: "Honeybee queen",
        label: "Honeybee queen",
        children: Honeybeequeenchildren
      },
      {
        value: "Rat",
        label: "Rat",
        children: Ratchildren
      },
      {
        value: "Rhesus macaques",
        label: "Rhesus macaques",
        children: Rhesusmacaqueschildren
      }
    ]
  },
  {
    value: "Metabolome",
    label: "Metabolome",
    type: "input",
    children: [
      {
        value: "Human",
        label: "Human"
      },
      {
        value: "Mouse",
        label: "Mouse"
      }
    ]
  } 
]

const Close = () => {
  router.push({ path: "/" })
}
const search = () => {
  if (!Type.value || !Animal.value || !Taxonomy.value) {
    return
  }
  router.push({
    path: "/searchResult",
    query: { Type: Type.value, Animal: Animal.value, Taxonomy: Taxonomy.value }
  })
}

// initMenu()
</script>

<style>
body {
  font-family: "Arial";
  font-size: 19px;
}

.el-select {
  display: block;
}

.el-button {
  height: 48px;
  width: 120px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 15px;
  font-size: 28px;
  font-weight: bold;
  cursor: default;
}

.el-button-search {
  margin: -2.5px 0 0 30px;
}

.form-control {
  display: block;
  width: 1000px;
  height: 50px;
  padding: 6px 12px;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}

.el-form-item__label {
  color: #000000;
  font-size: 20px;
}

.el-input__inner {
  font-size: 25px;
  width: 1520px;
  height: 65px;
  padding: 3px 5px;
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
  border-color: #55499c;
  border-width: 2.5px;
}

.box-card :hover {
  border-color: #55499c;
  color: #55499c;
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

.el-button--primary {
  background-color: #55499c;
  border-color: #55499c;
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
.el-select-dropdown__item {
  height: 42px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
