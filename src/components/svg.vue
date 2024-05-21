<template>
  <div>
    <el-header>
      <Menus />
    </el-header>
    <el-main>
      <el-image
        style="width: 100%; height: auto"
        src="/examples/top15_svg.png"
        alt="SVG"
      />
    </el-main>
  </div>
</template>

<script>
import { ElHeader, ElMain, ElImage } from 'element-plus';
import 'element-plus/dist/index.css';
import Menus from '../layout/menu-item';

export default {
  name: 'SVG',
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
