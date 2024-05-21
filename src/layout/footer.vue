<template>
  <el-row>
    <el-col :span="7" :offset="7" >
      <h3>Related Projects:</h3>
      <el-link type="primary" href="https://genomics.senescence.info/genes/human.html" target="_blank">GenAge</el-link>
      <p style="font-size: 16px;">GenAge: a genomic and proteomic network map of human ageing.</p>
      <el-link type="primary" href="https://ngdc.cncb.ac.cn/aging/index" target="_blank">AgingAtlas</el-link>
      <p style="font-size: 16px;">Aging Atlas: a multi-omics database for aging biology.</p>
      <el-link type="primary" href="https://ageing-map.org/" target="_blank">The Digital Ageing Atlas</el-link>
      <p style="font-size: 16px;">The Digital Ageing Atlas: integrating the diversity of age-related changes into a unified resource</p>
      <el-link type="primary" href="https://genomics.senescence.info/species/index.html" target="_blank">AnAge</el-link>
      <p style="font-size: 16px;">A database of vertebrate longevity records and their relation to other life history traits.</p>
      <el-link type="primary" href="http://cmgm.stanford.edu/~kimlab/aging_mouse" target="_blank">AGEMAP</el-link>
      <p style="font-size: 16px;">AGEMAP: A Gene Expression Database for Aging in Mice.</p>
      <p><el-link type="primary" href="https://open-genes.com/" target="_blank">Open Genes</el-link></p>
    </el-col>
    <el-col :span="5" :offset="1">
      <el-image style="width: 50%;" src='images/footer/uthealth.jpg' fit="fill" />
      <el-image style="width: 60%;" src='images/footer/wch.jpg' fit="fill" />
      <el-image style="width: 50%;" src='images/footer/xd.jpg' fit="fill" />
      <p>Copyright 2023-Present</p>
    </el-col>
  </el-row>
</template>

<script>
</script>

<style>
  .el-link {
    font-size: 16px;
  }
  p {
    margin-bottom: 5px;
  }
</style>
