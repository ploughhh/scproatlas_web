<template>
  <el-container>
    <el-header>
      <Menus />
    </el-header>
    <el-main style='margin-left: auto; width: 1300px; margin-right: auto;font-size: 16.5px;'>
      <h1 class="title">Aging-related Tools</h1>
      <el-table :data="tabelData" stripe>
        <el-table-column width="191" label='Name' prop="Name" />
        <el-table-column width="650" label='Description' prop="Description" />
        <el-table-column width="328" label='Source' prop="Source" />
        <el-table-column width="90" label='Publish time' prop="Publish time" />
      </el-table>
    </el-main>
  </el-container>
</template>

<script setup>
import Menus from '../layout/menu-item'
const tabelData = [
  {
    Name: 'Aging clock methods'
  },
  {
    Name: 'Horvath clock',
    Description: 'This tool developed a multi-tissue predictor of age that allows one to estimate the DNA methylation age of most tissues and cell types. It could also  characterize the CpG sites that together form an aging clock in terms of chromatin states and tissue variance.',
    Source: 'Horvath, Steve. "DNA methylation age of human tissues and cell types." Genome biology 14.10 (2013): 1-20.',
    'Publish time': '2013'
  },
  {
    Name: 'PhenoAge',
    Description: 'This tool developed a multi-tissue predictor of age that allows one to estimate the DNA methylation age of most tissues and cell types. It could also  characterize the CpG sites that together form an aging clock in terms of chromatin states and tissue variance.',
    Source: 'Horvath, Steve. "DNA methylation age of human tissues and cell types." Genome biology 14.10 (2013): 1-20.',
    'Publish time': '2018'
  },
  {
    Name: 'GrimAge',
    Description: 'GrimAge was developed based on plasma protein biomarkers such as adrenomedullin, C-reactive protein, plasminogen activation inhibitor 1 (PAI-1), and growth differentiation factor 15 (GDF15) and smoking pack-years. It stands out when it comes to associations with age-related conditions, clinical biomarkers, and computed tomography data.',
    Source: 'Lu, Ake T., et al. "DNA methylation GrimAge strongly predicts lifespan and healthspan." Aging (Albany NY) 11.2 (2019): 303',
    'Publish time': '2019'
  },
  {
    Name: 'DunedinPoAm',
    Description: 'DunedinPoAm was developed based on Elastic-net regression algorithm by using blood-DNA-methylation measure to access variation in pace of biological aging among individuals born the same year. It provide an alternate way of measuring whether age-slowing treatments work, and may also help identify individuals with accelerated aging. ',
    Source: 'Belsky D W, Caspi A, Arseneault L, et al. Quantification of the pace of biological aging in humans through a blood test, the DunedinPoAm DNA methylation algorithm[J]. Elife, 2020, 9: e54870.',
    'Publish time': '2020'
  },
  {
    Name: 'Lehallier clock',
    Description: 'It provided an ultra-predictive aging clock comprised of 491 protein entries by using machine learning algorithm.',
    Source: 'Lehallier B, Shokhirev M N, Wyss‐Coray T, et al. Data mining of human plasma proteins generates a multitude of highly predictive aging clocks that reflect different aspects of aging[J]. Aging cell, 2020, 19(11): e13256.',
    'Publish time': '2020'
  },
  {
    Name: 'DeepMAge',
    Description: 'DeepMAge is a neural network regressor trained on 4,930 blood DNA methylation profiles from 17 studies. DeepMAge shows biological relevance by assigning a higher predicted age to people with various health-related conditions, such as ovarian cancer, irritable bowel diseases, and multiple sclerosis.',
    Source: 'Galkin, Fedor, et al. "DeepMAge: a methylation aging clock developed with deep learning." Aging and disease 12.5 (2021): 1252.',
    'Publish time': '2021'
  },
  {
    Name: 'iAge',
    Description: 'iAge is a deep-learning method developed based on patterns of systemic age-related inflammation from the blood immunome. It can be utilized for the early detection of age-related clinical phenotypes.',
    Source: 'Sayed, Nazish, et al. "An inflammatory aging clock (iAge) based on deep learning tracks multimorbidity, immunosenescence, frailty and cardiovascular aging." Nature aging 1.7 (2021): 598-615.',
    'Publish time': '2021'
  },
  {
    Name: 'BiT age',
    Description: 'BiT age is an approach that uses temporal scaling and binarization of transcriptomes to define a gene set that predicts biological age with an accuracy that is close to the theoretical limit.',
    Source: 'Meyer, David H., and Björn Schumacher. "BiT age: A transcriptome‐based aging clock near the theoretical limit of accuracy." Aging cell 20.3 (2021): e13320.',
    'Publish time': '2021'
  },
  {
    Name: 'BioAge',
    Description: 'BioAge reflecting the vitality of essential biological systems, represents a promising operationalization of developmental time. BioAge models have successfully predicted age-related cognitive deficits. ',
    Source: 'DeCarlo C A, Tuokko H A, Williams D, et al. BioAge: Toward a multi-determined, mechanistic account of cognitive aging[J]. Ageing research reviews, 2014, 18: 95-105.',
    'Publish time': '2014'
  },
  {
    Name: 'scAge',
    Description: 'scAge a novel computational method that overcomes this challenge and allows the determination of DNA-methylation age at single-cell resolution. This method reveals cell-to-cell heterogeneity in the biological age of organ cells.',
    Source: 'Rudolph, K. Lenhard. "DNA-methylation aging at single-cell level." Nature Aging 1.12 (2021): 1086-1087.',
    'Publish time': '2021'
  },
  {
    Name: 'Hwangbo clock',
    Description: 'This tool presents a predictive models for age using metabolomic profiles of cerebrospinal fluid (CSF) from healthy human subjects and finds that metabolite and lipid data are generally able to predict chronological age within 10 years.',
    Source: 'Hwangbo, Nathan, et al. "A Metabolomic Aging Clock Using Human Cerebrospinal Fluid." The Journals of Gerontology: Series A 77.4 (2022): 744-754.',
    'Publish time': '2022'
  },
  {
    Name: 'Buckley clock',
    Description: 'This method proposed a suite of single cell-based regression models (aging clocks) to predict both chronological age (passage of time) and biological age. It represents the first development of high-resolution aging clocks from single cell transcriptomic data and demonstrates their application to quantify transcriptomic rejuvenation.',
    Source: 'Buckley, Matthew T., et al. "Cell type-specific aging clocks to quantify aging and rejuvenation in regenerative regions of the brain." bioRxiv (2022).',
    'Publish time': '2022'
  },
  {
    Name: 'Drug prediction method'
  },
  {
    Name: 'Anti-aging drug prediction',
    Description: 'This study utilized a machine learning system called deep-neural network (DNN). Here we report that combinational drug pairs using differential expressed genes (DEG) had a more enhanced anti-aging effect compared with single independent treatments',
    Source: 'Kim S K, Goughnour P C, Lee E J, et al. Identification of drug combinations on the basis of machine learning to maximize anti-aging effects[J]. PloS one, 2021, 16(1): e0246106.',
    'Publish time': '2021'
  },
  {
    Name: 'Brain age methods'
  },
  {
    Name: 'Jonsson PAD',
    Description: 'This method presents a new deep learning (3D CNN) approach to predict brain age from a T1-weighted MRI. It could also identify associations between sequence variants and phenotypic characterizations.',
    Source: 'Jónsson B A, Bjornsdottir G, Thorgeirsson T E, et al. Brain age prediction using deep learning uncovers associated sequence variants[J]. Nature communications, 2019, 10(1): 1-10.',
    'Publish time': '2019'
  },
  {
    Name: 'Ning PAB',
    Description: 'This method used a convolutional neural network model to accurately predict brain age, and it could identify novel genetic factors significantly associated with brain aging..',
    Source: 'Ning, Kaida, et al. "Improving brain age estimates with deep learning leads to identification of novel genetic factors associated with brain aging." Neurobiology of Aging 105 (2021): 199-204.',
    'Publish time': '2021'
  },
  {
    Name: 'ARCT',
    Description: 'ARCT is a toolkit based on Perl aimed at bioinformatics, genomics, and gerontology, partly based on the BioPerl package. Essentially, ARCT is a repository of modules written for the construction and data-mining of the databases and projects in the Human Ageing Genomic',
    Source: 'Human Ageing Genomic Resources (HAGR)'
  }
]
</script>

<style>
  .el-table {
    font-size: 18px;
    font-family: "Arial";
    text-align: justify;
  }
  .title {
    background-color: #666699;
    text-align: center;
    color: white;
    width: 1700;
  }
</style>
