<!-- eslint-disable -->
<template>
  <el-container>
    <el-header>
      <Menus />
    </el-header>
    <el-main
      style="
        margin-left: auto;
        width: 1650px;
        height: 2500px;
        margin-right: auto;
        font-size: 23px;
      "
    >
      <h1
        class="title"
        style="
          background-color: #248067;
          color: white;
          text-align: center;
          margin: 20px 0 10px 97px;
          padding: 10px 0 40px 0;
          width: 1400px;
          height: 20px;
          float: left;
        "
      >
        Search Result
      </h1>
      <h5 style="float: left; margin-left: 170px; margin-bottom: 20px; font-size: 18px">
        <!-- Please click the "{{tableObj[route.query.Type].columns[1].label}}" to check all functional annotations related -->
        Please click the "Taxonomy/Metabolite/CDR3 amino acid sequence/Protein/Gene
        Symbol" to check all functional annotations related to the query.
        <br />Please click the "Result" to browse the result page of the dataset.
      </h5>
      <div class="searchResult">
        <com-table :options="nowObj" v-if="nowObj.apiFunc"></com-table>
      </div>
    </el-main>
  </el-container>
</template>
<script setup>
import {
  getMicrobiomesearch,
  getMetasearch,
  getImmunomesearch,
  getSinglecellsearch,
  getepigeneticDetail,
  getproteinDetail,
  getgenomicsearch,
  getmtdnasearch,
} from "../api/searchResult";
import Menus from "../layout/menu-item";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import ComTable from "./com-table.vue";
const router = useRouter();
const route = useRoute();
const handleRowClick = (url) => {
  url && window.open(url);
};
const handleDetail = (row) => {
  router.push({
    path: "/taxonomyDetail",
    query: { row: JSON.stringify(row) },
  });
};
console.log("route.query", route.query);
// console.log('tableObj.route.query.Type.columns[1].label', tableObj.route.query.Type.columns[1].label)

const tableObj = {
  Microbiome: {
    apiFunc: getMicrobiomesearch,
    params: route.query,
    columns: [
      {
        prop: "Type",
        label: "Type",
        width: "150",
      },
      {
        prop: "Taxonomy",
        label: "Taxonomy",
        width: "500",
        render: (row, index) => {
          return (
            <el-link
              type="primary"
              onClick={() => {
                handleDetail(row);
              }}
            >
              {row.Taxonomy}
            </el-link>
          );
        },
      },
      {
        prop: "NCBIID",
        label: "NCBIID",
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
        prop: "Pubmed",
        label: "Pubmed",
        width: "150",
      },
      {
        prop: "Dataset_ID",
        label: "Dataset ID",
        width: "160",
      },
      {
        prop: "Result",
        label: "Result",
        render: (row, index) => {
          return (
            <el-link
              type="primary"
              onClick={() => {
                handleRowClick(row.Result);
              }}
            >
              Link
            </el-link>
          );
        },
      },
    ],
  },
  Metabolome: {
    apiFunc: getMetasearch,
    params: route.query,
    columns: [
      {
        prop: "Type",
        label: "Type",
      },
      {
        prop: "Taxonomy",
        label: "Metabolite",
        width: "280",
        render: (row, index) => {
          return (
            <el-link
              type="primary"
              onClick={() => {
                handleDetail(row);
              }}
            >
              {row.Taxonomy}
            </el-link>
          );
        },
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
        prop: "Pubmed",
        label: "Pubmed",
      },
      {
        prop: "Project_ID",
        label: "Project ID",
        width: "160",
      },
      {
        prop: "Result",
        label: "Result",
        width: "170",
        render: (row, index) => {
          return (
            <el-link
              type="primary"
              onClick={() => {
                handleRowClick(row.Result);
              }}
            >
              Link
            </el-link>
          );
        },
      },
    ],
  },
  Immunome: {
    apiFunc: getImmunomesearch,
    params: route.query,
    columns: [
      {
        prop: "Type",
        label: "Type",
      },
      {
        prop: "Taxonomy",
        label: "CDR3aa",
        width: "280",
        render: (row, index) => {
          return (
            <el-link
              type="primary"
              onClick={() => {
                handleDetail(row);
              }}
            >
              {row.Taxonomy}
            </el-link>
          );
        },
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
        prop: "Pubmed",
        label: "Pubmed",
      },
      {
        prop: "Dataset_ID",
        label: "Dataset ID",
        width: "160",
      },
      {
        prop: "Result",
        label: "Result",
        width: "170",
        render: (row, index) => {
          return (
            <el-link
              type="primary"
              onClick={() => {
                handleRowClick(row.Result);
              }}
            >
              Link
            </el-link>
          );
        },
      },
    ],
  },
  "Single Cell Transcriptome": {
    apiFunc: getSinglecellsearch,
    params: route.query,
    columns: [
      {
        prop: "Type",
        label: "Type",
      },
      {
        prop: "Taxonomy",
        label: "Symbol",
        width: "180",
        render: (row, index) => {
          return (
            <el-link
              type="primary"
              onClick={() => {
                handleDetail(row);
              }}
            >
              {row.Taxonomy}
            </el-link>
          );
        },
      },
      {
        prop: "Animal",
        label: "Animal",
      },
      {
        prop: "Entrez_ID",
        label: "Entrez_ID",
      },
      {
        prop: "Cell_type",
        label: "Cell type",
      },
      {
        prop: "Pubmed",
        label: "Pubmed",
      },
      {
        prop: "Project_ID",
        label: "Project_ID",
      },
      {
        prop: "Dataset_ID",
        label: "Dataset ID",
        width: "160",
      },
      {
        prop: "Result",
        label: "Result",
        width: "170",
        render: (row, index) => {
          return (
            <el-link
              type="primary"
              onClick={() => {
                handleRowClick(row.Result);
              }}
            >
              Link
            </el-link>
          );
        },
      },
    ],
  },
  Epigenome: {
    apiFunc: getepigeneticDetail,
    params: route.query,
    columns: [
      {
        prop: "Type",
        label: "Type",
      },
      {
        prop: "Taxonomy",
        label: "Symbol",
        width: "280",
        render: (row, index) => {
          return (
            <el-link
              type="primary"
              onClick={() => {
                handleDetail(row);
              }}
            >
              {row.Taxonomy}
            </el-link>
          );
        },
      },
      {
        prop: "Entrez_ID",
        label: "Entrez_ID",
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
        prop: "Pubmed",
        label: "Pubmed",
      },
      {
        prop: "Length",
        label: "Methylation Type",
      },
      {
        prop: "Project_ID",
        label: "Project ID",
        width: "160",
      },
      {
        prop: "Result",
        label: "Result",
        width: "170",
        render: (row, index) => {
          return (
            <el-link
              type="primary"
              onClick={() => {
                handleRowClick(row.Result);
              }}
            >
              Link
            </el-link>
          );
        },
      },
    ],
  },
  Proteome: {
    apiFunc: getproteinDetail,
    params: route.query,
    columns: [
      {
        prop: "Type",
        label: "Type",
      },
      {
        prop: "Taxonomy",
        label: "Name",
        width: "220",
        render: (row, index) => {
          return (
            <el-link
              type="primary"
              onClick={() => {
                handleDetail(row);
              }}
            >
              {row.Taxonomy}
            </el-link>
          );
        },
      },
      {
        prop: "Uniprot_entry",
        label: "Uniprot_entry",
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
        prop: "Pubmed",
        label: "Pubmed",
      },
      {
        prop: "ProjectID",
        label: "Project ID",
        width: "160",
      },
      {
        prop: "Result",
        label: "Result",
        width: "170",
        render: (row, index) => {
          return (
            <el-link
              type="primary"
              onClick={() => {
                handleRowClick(row.Result);
              }}
            >
              Link
            </el-link>
          );
        },
      },
    ],
  },
  "Bulk Transcriptome": {
    apiFunc: getgenomicsearch,
    params: route.query,
    columns: [
      {
        prop: "Type",
        label: "Type",
      },
      {
        prop: "Taxonomy",
        label: "Name",
        width: "220",
        render: (row, index) => {
          return (
            <el-link
              type="primary"
              onClick={() => {
                handleDetail(row);
              }}
            >
              {row.Taxonomy}
            </el-link>
          );
        },
      },
      {
        prop: "species",
        label: "species",
      },
      {
        prop: "Entrez_ID",
        label: "EntrezID",
      },
      {
        prop: "Tissue",
        label: "Tissue",
      },
      {
        prop: "Pubmed",
        label: "Pubmed",
      },
      {
        prop: "Source",
        label: "Source",
        width: "160",
      },
      {
        prop: "Result",
        label: "Result",
        width: "170",
        render: (row, index) => {
          return (
            <el-link
              type="primary"
              onClick={() => {
                handleRowClick(row.Result);
              }}
            >
              Link
            </el-link>
          );
        },
      },
    ],
  },

  "Mitochondrial Genome": {
    apiFunc: getmtdnasearch,
    params: route.query,
    columns: [
      {
        prop: "Type",
        label: "Type",
      },
      {
        prop: "Taxonomy",
        label: "Name",
        width: "220",
        render: (row, index) => {
          return (
            <el-link
              type="primary"
              onClick={() => {
                handleDetail(row);
              }}
            >
              {row.Taxonomy}
            </el-link>
          );
        },
      },
      {
        prop: "Animal",
        label: "Animal",
      },
      {
        prop: "Entrez_ID",
        label: "EntrezID",
      },
      {
        prop: "Tissue",
        label: "Tissue",
      },
      {
        prop: "Project_ID",
        label: "Project_ID",
      },
      {
        prop: "Source",
        label: "Source",
        width: "160",
      },
      {
        prop: "Result",
        label: "Result",
        width: "170",
        render: (row, index) => {
          return (
            <el-link
              type="primary"
              onClick={() => {
                handleRowClick(row.Result);
              }}
            >
              Link
            </el-link>
          );
        },
      },
    ],
  },
};

const nowObj = ref({});
nowObj.value = tableObj[route.query.Type];
</script>
<style scoped>
.searchResult {
  width: 1400px;
  margin: auto;
  overflow: auto;
}
.el-table {
  font-size: 22px;
}
.el-link {
  font-size: 22px;
}
</style>
