<template>
  <el-container>
    <el-header>
      <Menus />
    </el-header>
    <el-main style="display: flex; justify-content: center; align-items: center; flex-direction: column; font-size: 23px;">
      <div style="width: 1600px; margin-left: 250px;">
        <el-table :data="tableData" stripe :row-style="{ height: '65px' }" width="100%">
          <el-table-column prop="Technology" label="Technology" width="200" />
          <el-table-column prop="Dataset" label="Dataset" width="200" />
          <el-table-column prop="Tissue" label="Tissue" width="200" />
          <el-table-column prop="Region" label="Region" width="400" />
          <el-table-column label="Link" width="200">
            <template #default="scope">
              <router-link :to="{ name: 'wholePipeline', query: { Technology: scope.row.Technology, Dataset: scope.row.Dataset, Tissue: scope.row.Tissue, Region: scope.row.Region } }" style="color: #40A578;">
                details
              </router-link>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pagination.currentPage"
          :page-size="pagination.pageSize"
          layout="prev, pager, next"
          :total="pagination.totalItems"
          style="margin-top: 20px; text-align: center;">
        </el-pagination>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import axios from 'axios';
import * as XLSX from 'xlsx';
import Menus from "../layout/menu-item"

export default {
  components: {
    Menus
  },
  data() {
    return {
      tableData: [],
      pagination: {
        currentPage: 1,
        pageSize: 20,
        totalItems: 0
      }
    };
  },
  created() {
    this.loadTableData();
  },
  methods: {
    loadTableData() {
      axios.get('/datasets/datasets.xlsx', { responseType: 'arraybuffer' })
      .then(response => {
        const data = new Uint8Array(response.data);
        try {
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          this.pagination.totalItems = jsonData.length;
          this.tableData = jsonData.slice((this.pagination.currentPage - 1) * this.pagination.pageSize, this.pagination.currentPage * this.pagination.pageSize);
        } catch (error) {
          console.error('Error processing the workbook:', error);
        }
      })
      .catch(error => {
        console.error('Error loading the table file:', error);
      });
    },
    handleCurrentChange(newPage) {
      this.pagination.currentPage = newPage;
      this.loadTableData();  // Reload data for new page
    },
    handleSizeChange(newSize) {
      this.pagination.pageSize = newSize;
      this.loadTableData();  // Reload data with new page size
    }
  }
};
</script>
