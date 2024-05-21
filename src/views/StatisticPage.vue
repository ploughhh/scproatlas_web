<template>
  <el-container>
    <el-header>
      <Menus />
    </el-header>
    <el-main style="margin-left: auto; margin-right: auto; width: 1600px">
      <el-row>
        <el-col :span="24" style="margin-top: 15px">
          <h1 class="title">Statistics of metadata in AgeAnnoMO</h1>
        </el-col>
      </el-row>
      <el-row style="margin-bottom: 1%">
        <el-col :span="24">
          <!-- <span style="margin-left: 380px; margin-top: 20px; font-size: 23px;"><strong>Metadata</strong></span> -->
          <el-table :data="anData" :show-header="false">
            <el-table-column label="Item" prop="item" />
            <el-table-column label="Value" prop="value" />
          </el-table>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24" style="margin-top: 15px">
          <h1 class="title">Statistics of sample and cell count</h1>
        </el-col>
      </el-row>
      <el-row>
        <div id="first" style="height: 400px; width: 500px"></div>
        <div id="second" style="height: 400px; width: 500px"></div>
        <div id="third" style="height: 400px; width: 500px"></div>
      </el-row>
      <el-row>
        <el-col :span="24" style="margin-top: 15px">
          <h1 class="title">Statistics of annotations in AgeAnnoMO</h1>
        </el-col>
      </el-row>

        <div id="fuck" style="height: 400px;"></div>

      <!-- <el-image
        class="imageCon"
        src="images/help/8888888.png"
        fit="fill"
      ></el-image> -->
    </el-main>
  </el-container>
</template>

<script setup>
import Menus from "../layout/menu-item";
import { onMounted } from "vue";
const echarts = require("echarts/lib/echarts");
require("echarts/lib/component/title");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legend");
require("echarts/lib/chart/graph");

const anData = [
  { item: "Dataset", value: 136 },
  { item: "Modalities", value: 8 },
  { item: "Species", value: 50 },
  { item: "Tissues", value: 61 },
  { item: "Samples", value: 8586 },
  { item: "Cells", value: 1044141 },
];
onMounted(() => {
  var chartDom = document.getElementById("first");
  var myChart = echarts.init(chartDom);
  var option = {
    title: {
      text: "No. Species",
      // subtext: "Fake Data",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "0",
      textStyle: {
        fontSize: 22,
      },
      type: "scroll",
      orient: "horizontal",
      data: [
        "Bulk-Transcriptome",
        "Epigenome",
        "Proteome",
        "Immunome",
        "Metabolome",
        "Mitochondrial genome",
        "Single cell transcriptome",
        "Microbiota",
      ],
      pagin: true, // 启用分页
      pageIconSize: [15, 15],
      pageButtonItemGap: 5,
      pageTextStyle: {
        color: "#333",
      },
      pageFormatter: "{current}/{total}",
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: "Modality",
        type: "pie",
        radius: "50%",
        data: [
          { value: 37, name: "Bulk-Transcriptome" },
          { value: 5, name: "Epigenome" },
          { value: 9, name: "Proteome" },
          { value: 2, name: "Immunome" },
          { value: 2, name: "Metabolome" },
          { value: 2, name: "Mitochondrial genome" },
          { value: 4, name: "Single cell transcriptome" },
          { value: 8, name: "Microbiota" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  option && myChart.setOption(option);
});

onMounted(() => {
  var chartDom = document.getElementById("second");
  var myChart = echarts.init(chartDom);
  var option = {
    title: {
      text: "No. Tissues",
      // subtext: "Fake Data",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "0",
      textStyle: {
        fontSize: 22,
      },
      type: "scroll",
      orient: "horizontal",
      data: [
        "Bulk-Transcriptome",
        "Epigenome",
        "Proteome",
        "Immunome",
        "Metabolome",
        "Mitochondrial genome",
        "Single cell transcriptome",
        "Microbiota",
      ],
      pagin: true, // 启用分页
      pageIconSize: [15, 15],
      pageButtonItemGap: 5,
      pageTextStyle: {
        color: "#333",
      },
      pageFormatter: "{current}/{total}",
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: "Modality",
        type: "pie",
        radius: "50%",
        data: [
          { value: 9, name: "Bulk-Transcriptome" },
          { value: 7, name: "Epigenome" },
          { value: 13, name: "Proteome" },
          { value: 6, name: "Immunome" },
          { value: 15, name: "Metabolome" },
          { value: 5, name: "Mitochondrial genome" },
          { value: 27, name: "Single cell transcriptome" },
          { value: 5, name: "Microbiota" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  option && myChart.setOption(option);
});

onMounted(() => {
  var chartDom = document.getElementById("third");
  var myChart = echarts.init(chartDom);
  var option = {
    title: {
      text: "Sample size",
      // subtext: "Fake Data",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "0",
      textStyle: {
        fontSize: 22,
      },
      type: "scroll",
      orient: "horizontal",
      data: [
        "Bulk-Transcriptome",
        "Epigenome",
        "Proteome",
        "Immunome",
        "Metabolome",
        "Mitochondrial genome",
        "Single cell transcriptome",
        "Microbiota",
      ],
      pagin: true, // 启用分页
      pageIconSize: [15, 15],
      pageButtonItemGap: 5,
      pageTextStyle: {
        color: "#333",
      },
      pageFormatter: "{current}/{total}",
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: "Modality",
        type: "pie",
        radius: "50%",
        data: [
          { value: 765, name: "Bulk-Transcriptome" },
          { value: 1438, name: "Epigenome" },
          { value: 1801, name: "Proteome" },
          { value: 245, name: "Immunome" },
          { value: 1178, name: "Metabolome" },
          { value: 247, name: "Mitochondrial genome" },
          { value: 795, name: "Single cell transcriptome" },
          { value: 2127, name: "Microbiota" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  option && myChart.setOption(option);
});

onMounted(() => {
  var chartDom = document.getElementById('fuck');
  var myChart = echarts.init(chartDom);
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      textStyle: {
        fontSize: 16
      },
    },
    title: {
      left: 'auto'
    },
    xAxis: [
      {
        type: 'category',
        axisLabel: {
          fontSize: 12
        },
        data: ['Aging-related somatic mutations', 'Aging-related DEGs (Bulk)', 'Aging-related hypermethylation gene', 'Aging-related hypomethylation gene', 'Enriched pathways of DMRs', 'Age-specific TCRs', 'Age-specific BCRs', 'Aging-related proteins', 'Aging-related mtDNA mutations', 'Aging-related DEGs (single cell)', 'Aging-related cell-cell interactions', 'Aging-related microbiotas', 'Aging-related metabolites', 'Aging-related gene-microbiota interactions', 'Lifespan regulator']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [{
      type: 'bar',
      data: [133936, 27627, 4160, 3525, 340, 229413, 1391, 16244, 904, 19955, 11222, 422, 841, 221, 1888 ],
    }]
  }

  option && myChart.setOption(option);
})
</script>
<style>
.el-table {
  font-size: 20px;
  font-family: "Arial";
  text-align: justify;
}
.title {
  background-color: #248067;
  text-align: center;
  color: white;
  width: 1700;
}
</style>
