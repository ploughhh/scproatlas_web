<!-- eslint-disable -->
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
          <!-- <el-table-column :prop="item" :label="item" v-for="item in clos" :key="item" width="167" /> -->
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
          <el-table-column prop="module" label="Module" />
          <!-- <el-table-column width="250" label='Picture'>
            <template v-slot='scope'>
              <el-image :src="require('../../public/images/module_picture/' + scope.row.Symbol + '.png')" style="width: 200px; height: 200px;"></el-image>
              <el-image :src="handleUrl(scope.row)" style="width: 200px; height: 200px;"></el-image>
            </template>
          </el-table-column> -->
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
      </div>
    </el-main>
  </el-container>
</template>
<script setup>
import { genemerges } from "../api/genemerges";
import Menus from "../layout/menu-item";
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

console.log("route.query", route.query);
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
// const handleUrl = (row)=> {
//   return `./images/module_picture/${row.Symbol}.png`
// }
const geneSearchResult = async (query) => {
  const res = await genemerges(query);
  table.value = res.data.rows;
  form.total = res.data.count;
};
const handelChange = (val) => {
  form.currentPage = val;
  geneSearchResult(form);
};
geneSearchResult(form);
const handleRowClick = (row) => {
  router.push({
    path: "/taxonomyDetail",
    query: {
      row: JSON.stringify({
        ...row,
        Taxonomy: row.Symbol,
      }),
    },
  });
};
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
