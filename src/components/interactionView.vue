<template>
  <el-container>
    <el-header>
      <Menus />
    </el-header>
    <el-main style='margin-left: auto; width: 1200px; margin-right: auto;'>
      <div style="float: left;">
        <el-form :model="form" label-width="150px" class='intForm'>
          <el-form-item label="Tissue name">
            <el-select v-model="form.Tissue" placeholder="please select tissue" @change="onSubmit">
              <el-option :label="item" v-for="item in TissueList" :key=item :value="item" />
            </el-select>
          </el-form-item>
        </el-form>
        <h4 class = 'little_title'>Click edges or nodes to view details</h4>
        <div id="youth" style="width: 350px;height:400px; float: left;"></div>
        <div id="mid" style="width: 350px;height:400px; float: left; margin-left: 20px;"></div>
        <div id="old" style="width: 350px;height:400px; float: left; margin-left: 20px;"></div>
      </div>
      <div>
        <el-table :data="tabelData" stripe max-height="600">
          <el-table-column :prop="item" :label="item" v-for="item in clos" :key="item" />
        </el-table>
        <el-pagination
          small
          @current-change="handelChange"
          :current-page="pages.currentPage"
          :page-size="pages.limit"
          background
          :total="pages.total"
          layout="prev, pager, next"
          class="mt-4"
        />
      </div>
      </el-main>
  </el-container>
</template>

<script setup>
import Menus from '../layout/menu-item'
import { getLinks, getcLinks, getLCol } from '@/api/links'
import { reactive, ref } from 'vue'
import { getTissue, getGroup } from '@/api/enum'
const echarts = require('echarts/lib/echarts')
require('echarts/lib/component/title')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')
require('echarts/lib/chart/graph')

let links = []
let cLinks = []
let youth = {}
let old = {}
let mid = {}
// back end related params
const catList = ref([]); const TissueList = ref([]); const pages = ref()
const tabelData = ref([]); const clos = ref([])
const color = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc', '#660033', '#CC6633']
const form = reactive({
  Tissue: 'Intestine'
})

pages.value = {
  limit: 20,
  currentPage: 1,
  total: 20
}

const cellform = reactive({
  Source_type: '',
  Target_type: '',
  Tissue: '',
  Category: '',
  currentPage: pages.value.currentPage
})

// get option and data for graph
const getData = (links, type) => {
  const nodesName = []
  for (let i = 0; i < links.data.length; i++) {
    nodesName.push({
      name: links.data[i].Target_type.replace('\r', ''),
      category: links.data[i].category,
      symbolSize: 20,
      label: {
        show: true,
        fontSize: 17
      }
    })
    nodesName.push({
      name: links.data[i].Source_type,
      category: links.data[i].category,
      symbolSize: 20,
      label: {
        show: true,
        fontSize: 17
      }
    })
  }
  const temp = Array.from(new Set(nodesName.map(item => item.name)))
  for (let i = 0; i < links.data.length; i++) {
    links.data[i].value = links.data[i].count
    links.data[i].target = links.data[i].Target_type.replace('\r', '')
    links.data[i].source = links.data[i].Source_type
    links.data[i].lineStyle = {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
          offset: 0, color: color[temp.indexOf(links.data[i].Source_type)]
        }, {
          offset: 1, color: color[temp.indexOf(links.data[i].Target_type.replace('\r', ''))]
        }],
        global: false // 缺省为 false
      },
      width: links.data[i].count / 6
    }
  }
  const nodes = []
  let node = {}
  for (let i = 0; i < temp.length; i++) {
    node = nodesName.find(item => item.name === temp[i])
    node.itemStyle = {
      color: color[temp.indexOf(node.name)]
    }
    nodes.push(node)
  }
  const option = {
    title: {
      text: type,
      top: 'bottom',
      left: 'middle',
      textStyle: {
        fontSize: 25
      }
    },
    tooltip: {},
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        zoom: 0.8,
        draggable: true,
        type: 'graph',
        legendHoverLink: false,
        layout: 'force',
        circular: {
          rotateLabel: true
        },
        data: nodes,
        links: links.data,
        roam: true,
        label: {
          position: 'right',
          formatter: '{b}'
        },
        force: {
          edgeLength: 250,
          friction: 0.2
        },
        lineStyle: {
          curveness: 0.3
        },
        emphasis: {
          focus: 'adjacency',
          lineStyle: {
            width: 10
          }
        }
      }
    ]
  }
  return option
}

const click = async (params) => {
  const temp = params.data
  pages.value.currentPage = 1
  cellform.currentPage = pages.value.currentPage
  cellform.Source_type = temp.source
  cellform.Tissue = form.Tissue
  cellform.Category = temp.Category
  cellform.Target_type = temp.target
  if (!cellform.Source_type) {
    cellform.Source_type = temp.name
    cellform.Target_type = temp.name
  }
  const res = await getLinks(cellform)
  tabelData.value = res.data.rows
  pages.value.total = res.data.count
}

const initGraph = async () => {
  clos.value = await getLCol()
  // construct youth
  cLinks = await getcLinks({ Category: 'youth', Tissue: form.Tissue })
  let option = {}
  if (cLinks.data.length !== 0) {
    option = getData(cLinks, 'youth')
    youth = echarts.init(document.getElementById('youth'))
    youth.hideLoading()
    youth.setOption(option)
    youth.on('click', click)
  }
  // construct old
  cLinks = await getcLinks({ Category: 'old', Tissue: form.Tissue })
  if (cLinks.data.length !== 0) {
    option = getData(cLinks, 'old')
    old = echarts.init(document.getElementById('old'))
    old.hideLoading()
    old.setOption(option)
    old.on('click', click)
  }
  // construct mid group
  cLinks = await getcLinks({ Category: 'mid', Tissue: form.Tissue })
  if (cLinks.data.length !== 0) {
    option = getData(cLinks, 'mid')
    mid = echarts.init(document.getElementById('mid'))
    mid.hideLoading()
    mid.setOption(option)
    mid.on('click', click)
  }
  catList.value = await getGroup()
  TissueList.value = await getTissue()
}
initGraph()

const onSubmit = async () => {
  cellform.Tissue = form.Tissue
  form.Category = 'youth'
  links = await getcLinks(form)
  let option = getData(links, 'youth')
  youth.setOption(option)
  // old
  form.Category = 'old'
  links = await getcLinks(form)
  option = getData(links, 'old')
  old.setOption(option)
  // mid
  form.Category = 'mid'
  links = await getcLinks(form)
  option = getData(links, 'mid')
  mid.setOption(option)
}

const handelChange = async (val) => {
  pages.value.currentPage = val
  cellform.currentPage = val
  const res = await getLinks(cellform)
  tabelData.value = res.data.rows
}

</script>
<style scoped src="../styles/dataset.css">
#main{
  margin-left: 5%;
  margin-right: 35%;
}
.intForm {
  margin-left: 15%;
}
</style>
