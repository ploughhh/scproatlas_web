<template>
  <div>
    <el-header>
      <Menus />
    </el-header>
    <el-main>
      <el-image
        style="width: 50%; height: auto; margin-bottom: 20px"
        src="/examples/endo_plas.png"
        alt="endo_plas"
      />
      <el-image
        style="width: 50%; height: auto; margin-bottom: 20px"
        src="/examples/follicle.png"
        alt="follicle"
      />
      <el-image
        style="width: 50%; height: auto; margin-bottom: 20px"
        src="/examples/innate.png"
        alt="innate"
      />
      <el-image
        style="width: 50%; height: auto; margin-bottom: 20px"
        src="/examples/muscle.png"
        alt="muscle"
      />
      <el-image
        style="width: 50%; height: auto; margin-bottom: 20px"
        src="/examples/seg_epi_nerve.png"
        alt="epi_nerve"
      />
      <el-image
        style="width: 50%; height: auto; margin-bottom: 20px"
        src="/examples/seg_T.png"
        alt="T"
      />
      <el-image
        style="width: 100%; height: auto; margin-bottom: 20px"
        src="/examples/reg001neighborhood_network.png"
        alt="reg001neighborhood_network"
      />
    </el-main>
  </div>
</template>

<script>
import { ElHeader, ElMain, ElImage } from 'element-plus';
import 'element-plus/dist/index.css';
import Menus from '../layout/menu-item';

export default {
  name: 'NeighborhoodNet',
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
