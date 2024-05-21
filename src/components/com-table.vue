<!-- eslint-disable -->
<template>
  <div class="com-table" v-loading="loading">
    <div class="com-table-title" v-if="options.title">
      <h1
        style="
          font-size: 26px;
          margin-top: 5px;
          width: 100%;
          height: 23px;
          float: left;
        
        ">
        {{ options.title }}
        <img
          src="../../public/images/icon/question.png"
          style="height: 30px; width: 30px; margin-right: 20px; float: right"
          alt="image"
          @mouseenter="isHoveringtax = true"
          @mouseleave="isHoveringtax = false"
        />
        <div
          v-if="isHoveringtax && options.titleTip"
          style="
            position:absolute;
            margin-left: 1224px;
            bottom: 0px;
                        left: -1183px;
            width: 91%;
            background-color: #303133;
          "
        >
          <p
            style="
              text-align: justify;
              padding: 10px;
              font-size: 16px;
              line-height: 1.5;
              min-width: 10px;
              word-wrap: break-word;
              color: white;
            "
          >
            {{ options.titleTip }}
          </p>
        </div>
      </h1>
    </div>
    <el-table :data="tableData" border>
      <el-table-column
        sortable
        v-for="item in props.options.columns"
        :key="item.prop"
        :prop="item.prop"
        :width="item.width"
        :label="item.label"
      >
        <template #default="scope">
          <template v-if="!item.render">
            <span>{{ scope.row[item.prop] }}</span>
          </template>
          <template v-else
            >
            <table-column-render
              :column="item"
              :row="scope.row"
              :render="item.render"
              :index="scope.$index"
            />
          </template>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      small
      @current-change="initData"
      class="pagination"
      v-model:current-page="pageParams.currentPage"
      :page-size="pageParams.limit"
      background
      :total="total"
      layout="prev, pager, next"
    />
  </div>
</template>
<script setup>
import { ref, reactive } from "vue"
import TableColumnRender from "./table-column-render"
const isHoveringtax = ref(false)
const tableData = ref([])
const total = ref(0)
const pageParams = reactive({
  limit: 20,
  currentPage: 1
})
const loading = ref(false)
// eslint-disable-next-line no-undef
const props = defineProps({
  options: Object
})
const initData = () => {
  loading.value = true
  props.options.apiFunc &&
    props.options
      .apiFunc({
        ...pageParams,
        ...props.options.params
      })
      .then((res) => {
        tableData.value = res.data.rows
        total.value = res.data.count
      })
      .finally(() => {
        loading.value = false
      })
}

initData()
</script>
<style scoped>
.com-table-title {
  background-color: #248067;
  text-align: center;
  color: white;
  width: 100%;
  position: relative;
  height: 43px;
  position:reactive;
}
.com-table {
  padding: 20px 20px 40px 20px;
  width: 100%;
  box-sizing: border-box;
}
.pagination {
  margin-top: 10px;
}

.el-table {
  font-size: 22px;
}
.el-link {
  font-size: 22px;
}
</style>
