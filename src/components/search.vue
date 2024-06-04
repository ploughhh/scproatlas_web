<!-- eslint-disable -->
<template>
  <el-container>
    <el-header>
      <Menus />
      <el-input
        v-model="searchQuery"
        placeholder="Search by Gene..."
        style="width: 300px; margin-left: 20px"
      ></el-input>
      <el-button type="primary" @click="handleSearch" style="margin-left: 10px"
        >Search</el-button
      >
    </el-header>
    <el-main
      style="margin-left: auto; width: 1650px; margin-right: auto; font-size: 23px"
    >
      <h1
        class="title"
        style="
          background-color: #046582;
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
      <h5
        style="float: left; margin-left: 170px; margin-bottom: 20px; font-size: 18px"
      ></h5>
      <div class="searchResult">
        <el-table :data="table" style="width: 1290px; font-size: 18px">
          <el-table-column prop="Symbol" label="Symbol">
            <template #default="{ row }">
              <el-link type="primary" @click="handleRowClick(row)">{{
                row.Symbol
              }}</el-link>
            </template>
          </el-table-column>
          <el-table-column prop="Species" label="Species" />
          <el-table-column prop="Tissue" label="Tissue" />
          <el-table-column prop="Entrez_ID" label="Entrez_ID" />
          <el-table-column prop="Description" label="Description" />
          <el-table-column prop="Module" label="Module" />
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
    </el-main>
  </el-container>
</template>

<script setup>
import Menus from "../layout/menu-item";
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Papa from "papaparse";

const router = useRouter();
const route = useRoute();
const searchQuery = ref("");
const table = ref([]);
const form = reactive({
  Species: "",
  Entrez_ID: "",
  Description: "",
  Tissue: "",
  currentPage: 1,
  limit: 20,
  total: 0,
  Symbol: route.query.Symbol,
});

const handleSearch = async () => {
  try {
    const response = await fetch("/search/svg.tsv");
    const data = await response.text();

    Papa.parse(data, {
      header: true,
      complete: (parsedData) => {
        const filteredData = parsedData.data.filter((row) =>
          row.Gene.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
        form.total = filteredData.length;
        table.value = paginateData(filteredData, form.currentPage, form.limit);
      },
    });
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
};

const paginateData = (data, page, limit) => {
  const start = (page - 1) * limit;
  const end = page * limit;
  return data.slice(start, end);
};

const handleChange = (val) => {
  form.currentPage = val;
  handleSearch();
};

const handleRowClick = (row) => {
  router.push({
    path: "/taxonomyDetail",
    query: {
      row: JSON.stringify({
        ...row,
        Taxonomy: row.Gene,
      }),
    },
  });
};

// Initialize the search if there's a query parameter
if (form.Symbol) {
  searchQuery.value = form.Symbol;
  handleSearch();
}
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
