<template>
  <div>
    <el-header>
      <Menus />
    </el-header>
    <el-main>
      <el-image
        style="width: 30%; height: auto"
        src="/examples/integration.png"
        alt="Multi-mo integration"
      />
      <el-image
        style="width: 70%; height: auto"
        src="/examples/multi-mo-integration.png"
        alt="Multi-mo integration cell type"
      />
    </el-main>
  </div>
</template>

<script>
import { ElHeader, ElMain, ElImage } from 'element-plus';
import 'element-plus/dist/index.css';
import Menus from '../layout/menu-item';

export default {
  name: 'MultiMo',
  components: {
    ElHeader,
    ElMain,
    ElImage,
    Menus,
  },
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  text-align: center;
  font-size: 24px;
}
</style>
