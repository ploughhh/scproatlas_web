<template>
  <el-container>
    <el-header>
      <Menus />
    </el-header>
    <el-main
      style="margin-left: auto; width: 1650px; margin-right: auto; font-size: 23px"
    >
      <h1
        class="title"
        style="
          background-color: #006e54;
          color: #fcbb7b;
          text-align: center;
          margin: 20px 0 10px 97px;
          padding: 10px 0 40px 0;
          width: 1400px;
          height: 20px;
          float: left;
        "
      >
        Spatial Gene Search Result
      </h1>
      <h5
        style="float: left; margin-left: 170px; margin-bottom: 20px; font-size: 18px"
      ></h5>
      <div class="searchResult">
        <el-table :data="table" style="width: 1290px; font-size: 18px">
          <el-table-column prop="Gene" label="Gene">
            <template #default="{ row }">{{ row.Gene }}</template>
          </el-table-column>
          <el-table-column prop="Morans_I_score" label="Morans_I_score" />
          <el-table-column prop="pval_norm" label="pval_norm" />
          <el-table-column prop="pval_norm_fdr_bh" label="pval_norm_fdr_bh" />
          <el-table-column prop="tissue" label="tissue" />
          <el-table-column prop="region" label="region" />
          <el-table-column prop="Module" label="Module">
            <template #default>{{ "Spatial variable gene" }}</template>
          </el-table-column>
        </el-table>
        <el-pagination
          small
          @current-change="handleChange"
          :current-page="form.currentPage"
          :page-size="form.limit"
          background
          :total="form.total"
          layout="prev, pager, next"
          class="mt-4"
          style="margin-left: 5%"
        />
      </div>

      <h1
        class="title"
        style="
          background-color: #006e54;
          color: #fcbb7b;
          text-align: center;
          margin: 20px 0 10px 97px;
          padding: 10px 0 40px 0;
          width: 1400px;
          height: 20px;
          float: left;
        "
      >
        Cell-cell Interaction
      </h1>
      <div class="searchResult" style="margin-right: 11.5px">
        <el-table :data="cciTable" style="width: 1290px; font-size: 18px">
          <el-table-column prop="gene_a" label="gene_a">
            <template #default="{ row }">{{ row.gene_a }}</template>
          </el-table-column>
          <el-table-column prop="gene_b" label="gene_b">
            <template #default="{ row }">{{ row.gene_b }}</template>
          </el-table-column>
          <el-table-column prop="interacting_pair" label="interacting_pair" />
          <!-- <el-table-column prop="gene_a" label="gene_a" />
          <el-table-column prop="gene_b" label="gene_b" /> -->
          <el-table-column prop="tissue" label="tissue" />
          <el-table-column prop="region" label="region" />
        </el-table>
        <el-pagination
          small
          @current-change="handleCciChange"
          :current-page="cciForm.currentPage"
          :page-size="cciForm.limit"
          background
          :total="cciForm.total"
          layout="prev, pager, next"
          class="mt-4"
          style="margin-left: 5%"
        />
      </div>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import Menus from "../layout/menu-item";

const router = useRouter();
const route = useRoute();

const table = ref([]);
const form = reactive({
  currentPage: 1,
  limit: 10,
  total: 0,
  Symbol: route.query.Symbol,
});

const cciTable = ref([]);
const cciForm = reactive({
  currentPage: 1,
  limit: 10,
  total: 0,
  Symbol: route.query.Symbol,
});

// 读取和解析TSV文件
const readTSV = async (filePath) => {
  const response = await fetch(filePath);
  const text = await response.text();

  // 解析TSV文件
  const lines = text.trim().split("\n");
  const headers = lines[0].split("\t");
  const rows = lines.slice(1).map((line) => {
    const values = line.split("\t");
    return headers.reduce((obj, header, index) => {
      obj[header] = values[index];
      return obj;
    }, {});
  });

  return rows;
};

const geneSearchResult = async (query) => {
  const data = await readTSV("/search/svg.tsv");
  const filteredData = data.filter((row) => row.Gene === query.Symbol);

  table.value = filteredData.slice(
    (form.currentPage - 1) * form.limit,
    form.currentPage * form.limit
  );
  form.total = filteredData.length;
};

const cciSearchResult = async (query) => {
  const data = await readTSV("/search/cci.tsv");
  const filteredData = data.filter(
    (row) => row.gene_a === query.Symbol || row.gene_b === query.Symbol
  );

  cciTable.value = filteredData.slice(
    (cciForm.currentPage - 1) * cciForm.limit,
    cciForm.currentPage * cciForm.limit
  );
  cciForm.total = filteredData.length;
};

const handleChange = (val) => {
  form.currentPage = val;
  geneSearchResult(form);
};

const handleCciChange = (val) => {
  cciForm.currentPage = val;
  cciSearchResult(cciForm);
};

geneSearchResult(form);
cciSearchResult(cciForm);
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
</style>
