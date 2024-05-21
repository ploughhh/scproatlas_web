<template>
  <el-container>
    <el-header>
      <Menus />
    </el-header>

    <el-main style="margin-left: auto; width: 1200px; margin-right: auto;">
      <h3 class="h3style">All results files can be downloaded in Github or Zenodo: 
        <br>
        <a href="https://github.com/vikkihuangkexin/AgeAnnoMO" class="gitstyle">github link</a>
        <br>
        <a href="https://zenodo.org/record/8394076" class="zenstyle">zenodo link</a>
      </h3>
     <el-image src="images/downpage.png" fit="fill"></el-image>
     <!-- <el-image class='imageCon' src="images/path.png" fit="fill"></el-image> -->
    </el-main>
  </el-container>
</template>

<script setup>
import Menus from '../layout/menu-item'

</script>
<style>
  .title {
    background-color: #666699;
    text-align: center;
    color: white;
    width: 1700
  }
  .el-button--large span {
    font-size: 20px;
  }
  .h3style {
    text-align: center;
    margin-top: 15px;
    line-height: 45px;
    color: #666699;
    font-size: 30px;
  }
  .gitstyle {
    color: #007FAA;
    border-bottom:#007FAA 3px solid;
  }
  .zenstyle {
    color: #007FAA;
    text-decoration: underline;
  }
</style>

<!-- 数据存放目录 I:\WEB\dataset\back_end\file -->
