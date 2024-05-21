<template>
  <el-container>
    <el-header>
      <Menus />
    </el-header>
    <el-main style='margin-left: auto; width: 1700px; margin-right: auto; font-size: 18px;'>
      <el-form :model="form" label-width="150px" class='intForm'>
        <el-form-item label="Tissue">
          <el-select v-model="form.tissue" placeholder="please select tissue" @change="onSubmit">
            <el-option :label="item" v-for="item in tissueList" :key=item :value="item" />
          </el-select>
        </el-form-item>
      </el-form>
      <div style="float: left;">
        <div id="mid" style="width: 800px;height:570px; float: left;"></div>
        <div id="old" style="width: 800px;height:570px; float: left;"></div>
        <div id="youth" style="width: 800px;height:570px; float: left;"></div>
        <div id="supold" style="width: 800px;height:570px; float: left;"></div>
      </div>
      </el-main>
  </el-container>
</template>

<script setup>
import Menus from '../layout/menu-item'
import { getImData, getMid, getSup, getYouth } from '@/api/immune'
import { reactive, ref } from 'vue'

const echarts = require('echarts/lib/echarts')
require('echarts/lib/component/title')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')
require('echarts/lib/component/visualMap')
require('echarts/lib/chart/sunburst')

const form = reactive({
  tissue: 'Bladder' // 选择默认
})

const tissueList = ref([]); let myChart = {}; let Sankey = {}; let youth = {}; let sup = {}

const getSankey = async () => {
  const option = await getMid('Bladder')// 选择左侧默认器官
  Sankey.setOption(option)
}

const initGraph = async () => {
  tissueList.value = ['Bladder', 'Blood', 'Liver', 'Lung', 'Bone_Marrow', 'Prostate', 'Skin', 'Stomach', 'Skeletal Muscle', 'Oesphagus', 'Heart', 'Intestine']
  const option = await getImData('Bladder')
  myChart = echarts.init(document.getElementById('old'))
  myChart.setOption(option)
  Sankey = echarts.init(document.getElementById('mid'))
  getSankey()
  youth = echarts.init(document.getElementById('youth'))
  sup = echarts.init(document.getElementById('supold'))
}

const onSubmit = async () => {
  let option = await getImData(form.tissue)
  console.log(form.tissue)
  myChart.setOption(option)
  option = await getMid(form.tissue)
  Sankey.setOption(option)
  if (form.tissue === 'Blood') {
    option = await getYouth(form.tissue)
    youth.setOption(option)
    option = await getSup(form.tissue)
    sup.setOption(option)
  } else if (form.tissue === 'Skin' || form.tissue === 'Intestine') {
    sup.clear()
    option = await getYouth(form.tissue)
    youth.setOption(option)
  } else {
    youth.clear()
    sup.clear()
  }
}

initGraph()
</script>
<style scoped src="../styles/dataset.css">
  #main{
    margin-left: 5%;
    margin-right: 35%;
  }
  .intForm {
    margin-left: 15%;
  }
  .little_title {
    text-align: center;
    margin-bottom: 100px;
    margin-top: 30px;
  }
</style>
