<template>
  <el-affix :offset="0">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      router
      style="
        font-size: 60px;
        background-color: #006e54;
        box-shadow: 0 2px white, 0 0 6px #ffc947;
      "
    >
      <el-menu-item style="width: 28%"></el-menu-item>
      <el-menu-item index="/" style="color: #fcbb7b">Home</el-menu-item>
      <el-menu-item index="newSearch" style="color: #fcbb7b">Search</el-menu-item>
      <el-menu-item index="DataArchive" style="color: #fcbb7b">DataArchive</el-menu-item>
      <!-- <el-menu-item index="Datasets" style="color: #FCBB7B;">Datasets</el-menu-item> -->
      <el-menu-item index="Download" style="color: #fcbb7b">Download</el-menu-item>
      <el-menu-item index="Statistic" style="color: #fcbb7b">Statistics</el-menu-item>
      <el-menu-item index="Help" style="color: #fcbb7b">Help</el-menu-item>
      <el-menu-item index="about" style="color: #fcbb7b">Contact us</el-menu-item>
    </el-menu>
    <div class="h-6" />
  </el-affix>
</template>

<script setup>
import { ref } from "vue";
import { getItem } from "@/api/menu.js";
const itemName = ref([]);

const initMenu = async () => {
  itemName.value = await getItem();
};
initMenu();
</script>

<style>
.el-menu-item {
  font-size: 20px !important; /* 强制调大字体 */
}
.el-sub-menu__title {
  font-size: 20px !important; /* 强制调大字体 */
  background-color: whitesmoke;
}
.el-menu-demo {
  --el-menu-hover-bg-color: #ffc947 !important; /* 强制背景色 */
}
</style>
