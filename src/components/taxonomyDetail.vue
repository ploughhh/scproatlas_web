<template>
  <el-container>
    <el-header>
      <Menus />
    </el-header>
    <el-main
      style="
        margin-left: auto;
        width: 1650px;
        margin-right: auto;
        font-size: 23px;
      "
    >
      <div class="taxonomyDetail">
        <template
          v-if="
            rowObj.Type === 'Microbiome' ||
            rowObj.Type === 'Single Cell Transcriptome' ||
            rowObj.Type === 'Bulk Transcriptome' ||
            rowObj.Type === 'Proteome' ||
            rowObj.Type === 'Epigenome'
          "
        >
          <h1
            class="title"
            style="
              font-size: 22px;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
            "
          >
            Detail Information
            <!-- Detail information of {{ route.query.Taxonomy }} -->
          </h1>
        </template>
        <el-row class="detailtable" v-if="rowObj.Type === 'Microbiome'">
          <el-col :span="9" class="center">Taxonomy</el-col>
          <el-col :span="15"
            ><span>{{ rowObj.Taxonomy }}</span></el-col
          >
          <el-col :span="9" class="center">NCBIID</el-col>
          <el-col :span="15">{{ rowObj.NCBIID }}</el-col>
          <el-col :span="9" class="center">Rank</el-col>
          <el-col :span="15">{{ rowObj.Rank }}</el-col>
          <el-col :span="9" class="center">Genbank Division</el-col>
          <el-col :span="15">{{ rowObj.Genbank_Division }}</el-col>
          <el-col :span="9" class="center">Scientific name</el-col>
          <el-col :span="15">{{ rowObj.Scientific_name }}</el-col>
          <el-col :span="9" class="center">genus</el-col>
          <el-col :span="15">{{ rowObj.genus }}</el-col>
          <el-col :span="9" class="center">species</el-col>
          <el-col :span="15">{{ rowObj.species }}</el-col>
          <el-col :span="9" class="center">Gene</el-col>
          <el-col :span="15">{{ rowObj.Gene }}</el-col>
        </el-row>
        <el-row
          class="detailtable"
          v-if="rowObj.Type === 'Single Cell Transcriptome'"
        >
          <el-col :span="9" class="center">Symbol</el-col>
          <el-col :span="15"
            ><span>{{ rowObj.Taxonomy }}</span></el-col
          >
          <el-col :span="9" class="center">Entrez_ID</el-col>
          <el-col :span="15">{{ rowObj.Entrez_ID }}</el-col>
          <el-col :span="9" class="center">Name_source</el-col>
          <el-col :span="15">{{ rowObj.Name_source }}</el-col>
          <el-col :span="9" class="center">Description</el-col>
          <el-col :span="15">{{ rowObj.Description }}</el-col>
          <el-col :span="9" class="center">Paper</el-col>
          <el-col :span="15">{{ rowObj.Paper }}</el-col>
          <el-col :span="9" class="center">PMID</el-col>
          <el-col :span="15">{{ rowObj.PMID }}</el-col>
        </el-row>
        <el-row class="detailtable" v-if="rowObj.Type === 'Proteome'">
          <el-col :span="9" class="center">Symbol</el-col>
          <el-col :span="15"
            ><span>{{ rowObj.Taxonomy }}</span></el-col
          >
          <el-col :span="9" class="center">Entrez_ID</el-col>
          <el-col :span="15"><span v-html="titleObj.Entrez_ID"></span></el-col>
          <!-- <el-col :span="9" class="center">Name_source</el-col>
          <el-col :span="15">{{ titleObj.Name_source }}</el-col> -->
          <el-col :span="9" class="center">Name_source</el-col>
          <el-col :span="15"><span v-html="titleObj.Name_source"></span></el-col>
          <el-col :span="9" class="center">Description</el-col>
          <el-col :span="15"><span v-html="titleObj.Description"></span></el-col>
          <el-col :span="9" class="center">Paper</el-col>
          <el-col :span="15"><span v-html="titleObj.Paper"></span></el-col>
          <el-col :span="9" class="center">PMID</el-col>
          <el-col :span="15"><span v-html="titleObj.PMID"></span></el-col>
        </el-row>
        <el-row class="detailtable" v-if="rowObj.Type === 'Epigenome'">
          <el-col :span="9" class="center">Symbol</el-col>
          <el-col :span="15"
            ><span>{{ rowObj.Taxonomy }}</span></el-col
          >
          <el-col :span="9" class="center">Entrez_ID</el-col>
          <el-col :span="15">{{ rowObj.Entrez_ID }}</el-col>
          <el-col :span="9" class="center">Name_source</el-col>
          <el-col :span="15">{{ rowObj.Source }}</el-col>
          <el-col :span="9" class="center">Description</el-col>
          <el-col :span="15">{{ rowObj.Gene_description }}</el-col>
          <el-col :span="9" class="center">Paper</el-col>
          <el-col :span="15">{{ rowObj.Paper }}</el-col>
          <el-col :span="9" class="center">PMID</el-col>
          <el-col :span="15">{{ rowObj.Pubmed }}</el-col>
        </el-row>
        <el-row class="detailtable" v-if="rowObj.Type === 'Bulk Transcriptome'">
          <el-col :span="9" class="center">Symbol</el-col>
          <el-col :span="15"
            ><span>{{ rowObj.Taxonomy }}</span></el-col
          >
          <el-col :span="9" class="center">Entrez_ID</el-col>
          <el-col :span="15">{{ rowObj.Entrez_ID }}</el-col>
          <el-col :span="9" class="center">Name_source</el-col>
          <el-col :span="15">{{ rowObj.Source }}</el-col>
          <el-col :span="9" class="center">Description</el-col>
          <el-col :span="15">{{ rowObj.Gene_description }}</el-col>
          <el-col :span="9" class="center">Paper</el-col>
          <el-col :span="15">{{ rowObj.paper }}</el-col>
          <el-col :span="9" class="center">PMID</el-col>
          <el-col :span="15">{{ rowObj.PMID }}</el-col>
        </el-row>
        <com-table
          v-for="(item, i) in list"
          :options="item"
          :key="i"
        ></com-table>
      </div>
    </el-main>
  </el-container>
</template>
<script setup>
import ComTable from "./com-table.vue";
import {
  getMicrotaxResult,
  getMicrolefseResult,
  getMetasearch,
  getImmunomesearch,
  getsinglecells,
  getLinks,
  getepigeneticDetail,
  getmtdnasearch,
  proteindiffBySymbol,
} from "../api/searchResult";
import { getgenomicde, getgenomiceqtl, getgenomicvep } from "../api/genomic";
import { getproteindiff, getproteincor } from "../api/proteinDetail";
import { getintegrationData2 } from "../api/integration";
import Menus from "../layout/menu-item";
import { ref, reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const list = ref([]);

const titleObj = reactive({
  Entrez_ID: '',
  Name_source: '',
  Description: '',
  Paper: '',
  PMID: ''
});
const rowObj = JSON.parse(route.query.row);
const initData = async () => {
  const res = await proteindiffBySymbol({
    Taxonomy: rowObj.Taxonomy,
  })

  const keys = Object.keys(titleObj);
  keys.map(v => {
   const arr = res?.data?.map(item => item[v]) || []
   titleObj[v] = arr.join(',   ')
  })
};
initData();

list.value = [
  {
    key: "Micro",
    apiFunc: getMicrotaxResult,
    title: "The microbiota with age correlation",
    titleTip:
      "Spearman correlation was performed between sample age and microbiome abundance. Only microbiota with significant age correlation (p<0.05) will be shown here.",
    columns: [
      {
        prop: "Type",
        label: "Type",
        width: "180",
        // jsx 语法
        // render: (row, index) => {
        //   return <el-button onClick={test(row)}>{row.Type}</el-button>
        // }
      },
      {
        prop: "Taxonomy",
        label: "Taxonomy",
        width: "420",
      },
      {
        prop: "Animal",
        label: "Animal",
      },
      {
        prop: "Tissue",
        label: "Tissue",
      },
      {
        prop: "r_value",
        label: "r_value",
      },
      {
        prop: "p_value",
        label: "p_value",
      },
    ],
    params: {
      Taxonomy: rowObj.Taxonomy,
    },
  },
  {
    key: "Micro2",
    apiFunc: getMicrolefseResult,
    title: "The microbiota shows differential abundance between age group",
    titleTip:
      " LEfSe (Linear discriminant analysis Effect Size) was used to calculated the differential abundance microbiota. Enriched group means the microbiota shows enrichment in this group than the other. The LDA score is a measure of the effect size to identify the differential microbiota. A higher LDA score indicates that the feature is more abundant in one group compared to the other. We only left the microbiota with LDA score>1 and p<0.05.",
    columns: [
      {
        prop: "Type",
        label: "Type",
        width: "180",
      },
      {
        prop: "Taxonomy",
        label: "Taxonomy",
        width: "420",
      },
      {
        prop: "Animal",
        label: "Animal",
      },
      {
        prop: "Tissue",
        label: "Tissue",
      },
      {
        prop: "Enriched_group",
        label: "Enriched_group",
        width: "220",
      },
      {
        prop: "LDA_score",
        label: "LDA_score",
      },
      {
        prop: "p_value",
        label: "p_value",
      },
    ],
    params: {
      Taxonomy: rowObj.Taxonomy,
    },
  },
  {
    key: "Metabolome2",
    apiFunc: getMetasearch,
    title: "Aging-related metabolites",
    titleTip:
      "The plada_vip score is an estimation of the importance of each variable in the projection used in the partial least square discriminant analysis (PLS-DA) model. Variables with a VIP score of ≥1 were considered important in the PLS-DA model between the age groups. The annotation information of metabolites is obtained from Pubchem. The overlapped metabolites with MetaboAgeDB are also shown in the table. MetaboAgeDB is a repository of known ageing-related metabolome database.",
    columns: [
      {
        prop: "Type",
        label: "Type",
        width: "180",
      },
      {
        prop: "Taxonomy",
        label: "Name",
        width: "220",
      },
      {
        prop: "Animal",
        label: "Animal",
      },
      {
        prop: "Tissue",
        label: "Tissue",
      },
      {
        prop: "plsda_vip",
        label: "plsda_vip",
      },
      {
        prop: "Age_group",
        label: "Age_group",
      },
      {
        prop: "Number",
        label: "Number",
      },
      {
        prop: "Project_ID",
        label: "Project_ID",
        width: "170",
      },
      {
        prop: "Pubmed",
        label: "Pubmed",
      },
    ],
    params: {
      Taxonomy: rowObj.Taxonomy,
    },
  },
  {
    key: "Immunome",
    apiFunc: getImmunomesearch,
    title:
      "The frequency of CDR3 and corresponded VDJ genes in different age group",
    titleTip:
      "The frequency is calculated by Normalized frequency is computed as geometric mean of clonotype frequencies that comprise a given joint clonotype in intersected samples. If clonotype is missing, its frequency is set to 1e-9.",
    columns: [
      {
        prop: "Type",
        label: "Type",
        width: "180",
      },
      {
        prop: "Group",
        label: "Group",
        width: "120",
      },
      {
        prop: "Animal",
        label: "Animal",
      },
      {
        prop: "Tissue",
        label: "Tissue",
      },
      {
        prop: "frequency",
        label: "frequency",
        width: "170",
      },
      {
        prop: "CDR3nt",
        label: "CDR3nt",
        width: "220",
      },
      {
        prop: "Taxonomy",
        label: "CDR3aa",
      },
      {
        prop: "V",
        label: "V",
      },
      {
        prop: "D",
        label: "D",
      },
      {
        prop: "J",
        label: "J",
      },
    ],
    params: {
      Taxonomy: rowObj.Taxonomy,
    },
  },
  {
    key: "Single Cell Transcriptome",
    apiFunc: getsinglecells,
    title:
      "Aging-related differential expressed genes (single-cell RNA sequencing)",
    titleTip:
      "We performed differential expression analysis to identify aging-related genes across different age groups by using ‘FindMarkers’ function in Seurat package for each cell type. Aging-related DEGs between age groups with p<0.05 and |logFC| > (mean(abs(logFC))+2*sd(abs(logFC)) were shown in the database.",
    columns: [
      {
        prop: "Type",
        label: "Type",
        width: "180",
      },
      {
        prop: "Taxonomy",
        label: "Symbol",
        width: "150",
      },
      {
        prop: "Species",
        label: "Species",
      },
      {
        prop: "Tissue",
        label: "Tissue",
      },
      {
        prop: "Cell_type",
        label: "Cell type",
      },
      {
        prop: "Category",
        label: "Category",
        width: "180",
      },
      {
        prop: "Pvalue",
        label: "Pvalue",
      },
      {
        prop: "Padj",
        label: "Padj",
      },
      {
        prop: "Log2FC",
        label: "Log2FC",
      },
      {
        prop: "Up_or_down",
        label: "Up_or_down",
      },
      {
        prop: "Cell_type_specific",
        label: "Cell_type_specific",
      },
      {
        prop: "Tissue_specific",
        label: "Tissue_specific",
      },
      {
        prop: "Species_specific",
        label: "Species_specific",
      },
    ],
    params: {
      Taxonomy: rowObj.Taxonomy,
    },
  },
  {
    key: "Single Cell Transcriptome2",
    apiFunc: getLinks,
    title: "Aging-related intercellular communications",
    titleTip:
      "Cell-cell communication analysis is performed utilizing CellPhoneDB v2.0 software for aging-related DEGs in each age group. The significant L-R interactions were selected with the significant value p<0.05.",
    columns: [
      // {
      //   prop: "Dataset_ID",
      //   label: "Dataset_ID",
      // },
      {
        prop: "Species",
        label: "Species",
      },
      {
        prop: "Tissue",
        label: "Tissue",
      },
      {
        prop: "Category",
        label: "Category",
        width: "180",
      },
      {
        prop: "Interacting_pair",
        label: "Interacting_pair",
      },
      {
        prop: "Source",
        label: "Source",
      },
      {
        prop: "Target",
        label: "Target",
      },
      {
        prop: "Source_type",
        label: "Source_type",
      },
      {
        prop: "Target_type",
        label: "Target_type",
      },
    ],
    params: {
      Taxonomy: rowObj.Taxonomy,
    },
  },
  {
    key: "Epigenetic",
    apiFunc: getepigeneticDetail,
    title: "Aging-related differential methylation region",
    titleTip:
      " Differential methylation region between different age groups were identified using using DSS and ChAMP. The significance level is set as p<0.05. ",
    columns: [
      {
        prop: "Taxonomy",
        label: "Taxonomy",
      },
      {
        prop: "Animal",
        label: "Animal",
      },
      {
        prop: "Tissue",
        label: "Tissue",
      },
      {
        prop: "Seqnames",
        label: "Seqnames",
      },
      {
        prop: "Start",
        label: "Start",
      },
      {
        prop: "End",
        label: "End",
      },
      {
        prop: "Age_groups",
        label: "Age_groups",
      },
      {
        prop: "Diff_Methy",
        label: "Diff_Methy",
      },
      // {
      //   prop: "Entrez_ID",
      //   label: "Entrez_ID",
      // },
      // {
      //   prop: "Source",
      //   label: "Source",
      // },
      // {
      //   prop: "Gene_description",
      //   label: "Gene_description",
      // },
      // {
      //   label: "Picture",
      //   render: (row, index) => {
      //     return (
      //       <el-image
      //         type="primary"
      //         src={require("/images/meta_picture/" +
      //           row.Number +
      //           "/" +
      //           row.Taxonomy +
      //           ".png")}
      //         style="width: 200px; height: 200px;"
      //       ></el-image>
      //     );
      //   },
      // },
    ],
    params: {
      Taxonomy: rowObj.Taxonomy,
    },
  },
  {
    key: "Proteome1",
    apiFunc: getproteindiff,
    title: "The proteins show differential expression between age group",
    titleTip:
      " The differential expression analysis of protein between age group is performed using Limma package. The significant level is set as p<0.05. ",
    columns: [
      {
        prop: "Taxonomy",
        label: "Name",
      },
      {
        prop: "Animal",
        label: "Animal",
      },
      {
        prop: "Tissue",
        label: "Tissue",
      },
      {
        prop: "Category",
        label: "Category",
        width: "180",
      },
      {
        prop: "P_Value",
        label: "P_Value",
      },
      {
        prop: "adj_P_Val",
        label: "adj_P_Val",
      },
      {
        prop: "logFC",
        label: "logFC",
      },
      {
        prop: "Up_or_down",
        label: "Up_or_down",
      },
    ],
    params: {
      Taxonomy: rowObj.Taxonomy,
    },
  },
  {
    key: "Proteome2",
    apiFunc: getproteincor,
    title: "The proteins with age correlation",
    titleTip:
      " Spearman correlation was performed between sample age and protein expression profile. Only proteins with significant age correlation (p<0.05) will be shown here. ",
    columns: [
      {
        prop: "Taxonomy",
        label: "Taxonomy",
      },
      {
        prop: "Animal",
        label: "Animal",
      },
      {
        prop: "Tissue",
        label: "Tissue",
      },
      {
        prop: "r_value",
        label: "r_value",
      },
      {
        prop: "p_value",
        label: "p_value",
      },
    ],
    params: {
      Taxonomy: rowObj.Taxonomy,
    },
  },
  {
    key: "Mitochondrial Genome",
    apiFunc: getmtdnasearch,
    title: "Aging-related mitochondrial mutations",
    titleTip:
      "Aging-related mitochondrial mutations were identified using GATK4.0. The preprocessing steps were performed using bowtie2. The annotation of the mutation was performed using VEP.",
    columns: [
      {
        prop: "Taxonomy",
        label: "Symbol",
      },
      {
        prop: "Animal",
        label: "Animal",
      },
      {
        prop: "Tissue",
        label: "Tissue",
      },
      {
        prop: "Location",
        label: "Location",
      },
      {
        prop: "Allele",
        label: "Allele",
      },
      {
        prop: "Allele_frequency",
        label: "Mutation frequency",
      },
      {
        prop: "Entrez_ID",
        label: "Entrez ID",
      },
      {
        prop: "Age_group",
        label: "Age_group",
      },
      {
        prop: "Biotype",
        label: "Biotype",
      },
    ],
    params: {
      Taxonomy: rowObj.Taxonomy,
    },
  },
  {
    key: "Bulk Transcriptome",
    apiFunc: getgenomicvep,
    title: "Aging-related somatic mutations",
    titleTip:
      "Aging-related somatic mutations are identified using Genome Analysis ToolKit (GATK4.0) software. The preprocessing steps are performed using STAR.The thresholds are set according to the recommendation of GATK: QD < 2.0; MQ < 40.0; FS > 60.0; SOR > 3.0; MQRankSum < –12.5; ReadPosRankSum < –8.0.",
    columns: [
      {
        prop: "Taxonomy",
        label: "Gene Symbol",
      },
      {
        prop: "Location",
        label: "Location",
      },
      {
        prop: "species",
        label: "species",
      },
      {
        prop: "raw_site",
        label: "raw_site",
      },
      {
        prop: "Allele",
        label: "Allele",
      },
      {
        prop: "Feature_type",
        label: "Feature_type",
      },
      {
        prop: "Consequence",
        label: "Consequence",
      },
      {
        prop: "QUAL",
        label: "QUAL",
      },
      {
        prop: "Entrez_ID",
        label: "Entrez_ID",
      },
      {
        prop: "genome_browser_url",
        label: "genome_browser_url",
        render(row) {
          return (
            <el-button type="text" style="left:center; margin: auto;">
              <a href={row.genome_browser_url}>Link</a>
            </el-button>
          );
        },
      },
    ],
    params: {
      Taxonomy: rowObj.Taxonomy,
    },
  },
  {
    key: "Bulk Transcriptome",
    apiFunc: getgenomicde,
    title: "Differential gene expression by age group",
    titleTip:
      "Differential gene expression analysis between age groups is performed using LIMMA. The significance level is set as p<0.05.",
    columns: [
      {
        prop: "Taxonomy",
        label: "Symbol",
      },
      {
        prop: "species",
        label: "Animal",
      },
      {
        prop: "tissue",
        label: "Tissue",
      },
      {
        prop: "group",
        label: "group",
      },
      {
        prop: "P_Value",
        label: "P_Value",
      },
      {
        prop: "logFC",
        label: "logFC",
      },
      {
        prop: "FDR",
        label: "FDR",
      },
      {
        prop: "g",
        label: "Up/Down",
      },
      {
        prop: "species_specific_gene",
        label: "species_specific_gene",
      },
    ],
    params: {
      Taxonomy: rowObj.Taxonomy,
    },
  },
  {
    key: "Bulk Transcriptome",
    apiFunc: getgenomiceqtl,
    title:
      "Expression quantitative trait Loci (eQTL) of aging-related mutations",
    titleTip:
      "eQTL analysis was performed by using “MatrixEQTL” to identify mutations that potentially associated with gene expression alteration in the aging process. The threshold for eQTL analysis is set as p < 0.05.",
    columns: [
      {
        prop: "Taxonomy",
        label: "Mutation Gene",
      },
      {
        prop: "aging_related_DEG",
        label: "aging_related_DEG",
      },
      {
        prop: "species",
        label: "species",
      },
      {
        prop: "statistic",
        label: "statistic",
      },
      {
        prop: "pvalue",
        label: "pvalue",
      },
      {
        prop: "FDR",
        label: "FDR",
      },
      {
        prop: "beta",
        label: "beta",
      },
    ],
    params: {
      Taxonomy: rowObj.Taxonomy,
    },
  },
];
</script>
<style scoped>
.taxonomyDetail {
  height: 100%;
  width: 100%;
  overflow: auto;
}
.center {
  text-align: center;
}
.el-table {
  font-size: 22px;
}
.el-link {
  font-size: 22px;
}

.title {
  background-color: #248067;
  text-align: center;
  color: white;
}
.detailtable {
  padding: 7px;
  line-height: 45px;
}
.el-row {
  border-top: 1px solid #ebeef5;
  border-left: 1px solid #ebeef5;
}
.el-col {
  border-right: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
}
</style>
