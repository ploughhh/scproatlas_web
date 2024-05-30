<template>
    <el-container>
      <el-header>
        <Menus />
      </el-header>
      <el-main style="display: flex; justify-content: center; align-items: center; flex-direction: column; font-size: 23px;">
        <div style="width: 1600px; margin-left: 250px;">
          <h1>Whole Pipeline Details</h1>
          <p>Technology: {{ technology }}</p>
          <p>Dataset: {{ dataset }}</p>
          <p>Tissue: {{ tissue }}</p>
          <p>Region: {{ region }}</p>
        </div>
      </el-main>
    </el-container>
  </template>
  
  <script>
  import Menus from "../layout/menu-item";
  
  export default {
    components: {
      Menus
    },
    computed: {
      technology() {
        return this.$route.query.Technology;
      },
      dataset() {
        return this.$route.query.Dataset;
      },
      tissue() {
        return this.$route.query.Tissue;
      },
      region() {
        return this.$route.query.Region;
      }
    }
  };
  </script>
  