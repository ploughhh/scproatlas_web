<template>
  <el-affix :offset="0">
    <el-menu
        class="el-menu-demo"
        mode="horizontal"
        router
        style = "font-size: 30px; background-color: #046582; box-shadow:0 2px white, 0 0 6px #FFC947"
      >
        <el-menu-item style="width: 32%;"></el-menu-item>
        <el-menu-item index="/" style="color: white;">Home</el-menu-item>
        <el-menu-item index="newSearch" style="color: white;">Search</el-menu-item>
        <el-menu-item index="DataArchive" style="color: white;">DataArchive</el-menu-item>
        <el-menu-item index="Datasets" style="color: white;">Datasets</el-menu-item>
        <el-menu-item index="Download" style="color: white;">Download</el-menu-item>
        <el-menu-item index="Statistic" style="color: white;">Statistics</el-menu-item>
        <el-menu-item index="Help" style="color: white;">Help</el-menu-item>
        <el-menu-item index="about" style="color: white;">Contact us</el-menu-item>
      </el-menu>
      <div class="h-6" />
  </el-affix>
</template>

<script setup>
import { ref } from 'vue'
import { getItem } from '@/api/menu.js'
const itemName = ref([])

const initMenu = async () => {
  itemName.value = await getItem()
}
initMenu()
</script>

<style>
.el-menu-item {
  font-size: 22px;
}
.el-sub-menu__title {
  font-size: 22px;
  background-color: #ffffff;
}
.el-menu {
  --el-menu-hover-bg-color: #FFC947;
}
</style>
