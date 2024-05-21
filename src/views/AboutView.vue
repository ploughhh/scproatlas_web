<template>
  <el-container>
    <el-header>
      <Menus />
    </el-header>
    <el-main style="width: 1600px; margin-left: auto; margin-right: auto;font-size: 20px;">
      <el-row class = 'cont'>
        <el-col :span="2">
          <el-image class='imageCon' src="images/icon/Team.png" fit="fill"></el-image>
          <h2 class="sa">TEAM</h2>
        </el-col>
        <el-col :offset="2" :span="15">
          <h3>Principal Investigators:</h3>
          <p style="margin-top: 10px;">Xiaobo Zhou, Ph.D. School of Biomedical Informatics, University of Texas Health Science Center at Houston, Houston, USA</p>
          <p style="margin-top: 10px;">Wei Zhang, M.D. West China Biomedical Big Data Centre, West China Hospital, Sichuan University, Chengdu, Sichuan, PR China</p>
          <h3 style="margin-top: 25px;">Co-Investigators</h3>
          <p style="margin-top: 10px;">Liyu Huang, Ph.D. School of Life Science and Technology, Xidian University, Xi’an, Shaanxi, PR China</p>
          <p style="margin-top: 15px;">Pora Kim, M.S., Ph.D. School of Biomedical Informatics, University of Texas Health Science Center at Houston, Houston, USA</p>
          <h3 style="margin-top: 25px;">Post-doctoral and students</h3>
          <p style="margin-top: 10px;">Kexin Huang, Ph.D.</p>
          <p style="margin-top: 15px;">Xi Liu, postgraduate student</p>
          <p style="margin-top: 15px;">Zhaocan Zhang, postgraduate student</p>
          <p style="margin-top: 15px;">Qingxuan Li, undergraduate student</p>
          <p style="margin-top: 15px;">Yuhao Jia, undergraduate student</p>
        </el-col>
      </el-row>
      <el-row class = 'cont'>
        <el-col :span="2">
          <el-image class='imageCon' src="images/icon/Contact.png" fit="fill"></el-image>
          <h2 class="sa">CONTACT INFO</h2>
        </el-col>
        <el-col :offset="2" :span="15">
          <h3 style="margin-top: 10px;">Xiaobo Zhou, Ph.D.</h3>
          <p style="margin-top: 5px;">Email: Xiaobo.Zhou@uth.tmc.edu</p>
      <h3 style="margin-top: 10px;">Pora Kim, Ph.D.</h3>
      <p style="margin-top: 5px;">Email: Pora.Kim@uth.tmc.edu</p>
          <p style="margin-top: 10px;">Address: Center for Computational Systems Medicine, School of Biomedical Informatics, The University of Texas Health Science Center at Houston, 7000 Fannin Street, Houston, TX 77030</p>
          <h3 style="margin-top: 10px;">Kexin Huang, Ph.D.</h3>
          <p style="margin-top: 5px;">Email: vikkihuangkexin@163.com</p>
          <p>Address: 37 Guoxue Ln, Wuhou District, Chengdu, Sichuan, China</p>
        </el-col>
      </el-row>
      <el-row class = 'cont'>
        <el-col :span="2">
          <el-image class='imageCon' src="images/icon/cite.png" fit="fill"></el-image>
          <h2 class="sa">Citation</h2>
        </el-col>
        <el-col :offset="2" :span="15">
          <h3 style="margin-top: 20px;">To cite the AgeAnnoMO website, please quote the following:</h3>
          <p style="margin-top: 10px;">K Huang, et.al., AgeAnnoMO: a knowledgebase of multi-omics annotation for animal aging</p>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script setup>
import Menus from '../layout/menu-item'
</script>

<style scoped>
  .cont {
    margin-top: 1%;
    padding-bottom: 1%;
    border-bottom: #808080 1px solid;
  }
  .sa {
  }
  .imageCon {
    width: 120px;
    height: 120px;
  }
</style>
