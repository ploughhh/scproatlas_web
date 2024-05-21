<template>
  <el-container>
      <el-header>
      <Menus />
      </el-header>
      <!-- <el-main style="margin-left: auto; width: 1600px; height: 6000px; margin-right: auto;"> -->
        <template v-if="route.query.Species + route.query.Tissue === 'HumanSkin (forehead)'">
          <el-main style="margin-left: auto; width: 1600px; height: 4567px; margin-right: auto;">
            <div>
              <div>
                <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">
                  Detail information of {{route.query.Species + " " + route.query.Tissue}} dataset
                </h1>
              </div>
              <div style="margin-left: 250px; width: 100%px; height: 800px; margin-right: auto; float: left;">
                <el-table :data="Data1()" class="myTableStyle" border :show-header="false" fit :row-style="{height: '65px'}">
                    <el-table-column sortable prop="col11" width="380"></el-table-column>
                    <el-table-column sortable prop="col12" width="720"></el-table-column>
                  </el-table>
              </div>
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The relative abundance of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringbar = true" @mouseleave="isHoveringbar = false">
              <div v-if="isHoveringbar" style="position: relative; margin-left: 1224px; top: -52px; left: -1190px; height: 65px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">The relative abundance of the microbiome refers to the proportional representation of
                  different microbial taxa within a given sample, indicating the relative prevalence of each
                  taxon in relation to the total microbial community</p>
              </div>
            </h1>
            <div id="graphHumanSkinYounger" style="margin-bottom: 50px; width: 100%; height:800px; float: left;">
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The alpha diversity difference of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringalpha = true" @mouseleave="isHoveringalpha = false">
              <div v-if="isHoveringalpha" style="position: relative; margin-left: 1224px; top: -134px; left: -1190px; height: 145px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  1. The Shannon α diversity measuring the richness and evenness of species within a community to estimate the diversity index based on the Shannon entropy formula. In general, higher Shannon alpha diversity indicates a more diverse and evenly distributed community of species within a given sample.
                  <br />2．Simpson diversity is a measure used to assess the diversity or richness of microbial communities within a microbiome. It takes into account both the abundance and evenness of different microbial species present in the community. The index is calculated by summing the squared proportions of each microbial species in the community. The Simpson diversity index ranges from 0 to 1, with higher values indicating greater diversity.
                </p>
              </div>
            </h1>
            <div class="diversity" style="margin-bottom: 10px; width: 100%; height:550px; float: left;">
                <img class="diversity-left" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/alpha-diversity-shannon.png')" alt="#">
                <img class="diversity-right" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/alpha-diversity-simpson.png')" alt="#">
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The beta diversity difference of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringbeta = true" @mouseleave="isHoveringbeta = false">
              <div v-if="isHoveringbeta" style="position: relative; margin-left: 1224px; top: -154px; left: -1190px; height: 167px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  1.The Jaccard distance is a measure of dissimilarity between two samples or communities based on their shared and unique features. The resulting value ranges from 0
                    (complete similarity) to 1 (complete dissimilarity). Jaccard distance can be calculated using the formula: (Number of unique features in A and B) / (Number of unique features in A or B). A and B refer to two different samples.
                    <br />2.The Bray-curtis distance can be calculated using the formula: Bray-Curtis dissimilarity = (Σ|A[i] - B[i]|) / (Σ(A[i] + B[i]))
                    <br />Where: A[i] represents the abundance of the i-th feature in sample A; B[i] represents the abundance of the i-th feature in sample B; Σ represents the sum across all features.
                    <br />A higher Bray-Curtis distance indicates greater dissimilarity or dissimilarity between two samples in terms of their community composition.
                </p>
              </div>
            </h1>
            <div class="diversity" style="margin-bottom: 30px; width: 100%; height:520px; float: left;">
                <img class="diversity-left" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/beta-diversity-jaccard.png')" alt="#">
                <img class="diversity-right" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/beta-diversity-bray.png')" alt="#">
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The microbiota with age correlation in {{route.query.Species + " " + route.query.Tissue}}
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringtax = true" @mouseleave="isHoveringtax = false">
              <div v-if="isHoveringtax" style="position: relative; margin-left: 1224px; top: -35px; left: -1190px; height: 45px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  Spearman correlation was performed between sample age and microbiome abundance.
                  Only microbiota with significant age correlation (p&lt;0.05) will be shown here.
                </p>
              </div>
            </h1>
            <div style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 14px; line-height: 1.42857143; font-family: Poppins; box-sizing: border-box; float: right; text-align: right; color: #333;">
              <label style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 24px; line-height: 1.42857143; font-family: Poppins; text-align: right; color: #333; box-sizing: border-box; display: inline-block; max-width: 100%; margin-bottom: 15px; font-weight: bold;">
                Search:
                <input v-model="taxsearchKeyword" placeholder="Firmicutes" type="search" style="width: 340px; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0; font: inherit; color: inherit; font-family: Poppins; font-size: 18px; line-height: inherit; box-sizing: border-box; -webkit-appearance: none; margin-left: 0.5em;" aria-controls="myTable">
              </label>
            </div>
            <div class="sheet" style="overflow-y: auto; margin-bottom: 30px; width: 100%; height:650px; float: left;">
                <el-table class="myTableStyle" :data="filteredHumanSkintaxData" border :row-style="{height: '65px'}">
                    <el-table-column sortable prop="Taxonomy" label="Taxonomy" width="890"></el-table-column>
                    <el-table-column sortable prop="Animal" label="Animal" width="140"></el-table-column>
                    <el-table-column sortable prop="Tissue" label="Tissue" width="170"></el-table-column>
                    <el-table-column sortable prop="r_value" label="r_value" width="180"></el-table-column>
                    <el-table-column sortable prop="p_value" label="p_value" width="180"></el-table-column>
                </el-table>
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The microbiota shows differential abundance between age group in {{route.query.Species + " " + route.query.Tissue}}
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringlefse = true" @mouseleave="isHoveringlefse = false">
              <div v-if="isHoveringlefse" style="position: relative; margin-left: 1224px; top: -83px; left: -1190px; height: 95px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  LEfSe (Linear discriminant analysis Effect Size) was used to calculated the differential abundance microbiota. Enriched group means the microbiota shows enrichment in this group than the other. The LDA score is a measure of the effect size to identify the differential microbiota. A higher LDA score indicates that the feature is more abundant in one group compared to the other. We only left the microbiota with LDA score&gt;1 and p&lt;0.05.
                </p>
              </div>
            </h1>
            <div style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 14px; line-height: 1.42857143; font-family: Poppins; box-sizing: border-box; float: right; text-align: right; color: #333;">
              <label style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 24px; line-height: 1.42857143; font-family: Poppins; text-align: right; color: #333; box-sizing: border-box; display: inline-block; max-width: 100%; margin-bottom: 15px; font-weight: bold;">
                Search:
                <input v-model="lefsesearchKeyword" placeholder="Firmicutes" type="search" style="width: 340px; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0; font: inherit; color: inherit; font-family: Poppins; font-size: 18px; line-height: inherit; box-sizing: border-box; -webkit-appearance: none; margin-left: 0.5em;" aria-controls="myTable">
              </label>
            </div>
            <div class="sheet" style="margin-bottom: 20px; width: 100%; height: 480px; float: left;">
              <el-table :data="filteredHumanSkinlefseData" border fit :max-height="685" :row-style="{height: '55px'}">
                <el-table-column sortable prop="Taxonomy" label="Taxonomy" width="695"></el-table-column>
                <el-table-column sortable prop="Animal" label="Animal" width="155"></el-table-column>
                <el-table-column sortable prop="Tissue" label="Tissue" width="150"></el-table-column>
                <el-table-column sortable prop="Enriched_group" label="Enriched group" width="130"></el-table-column>
                <el-table-column sortable prop="LDA_score" label="LDA score" width="220"></el-table-column>
                <el-table-column sortable prop="Pvalue" label="Pvalue" width="210"></el-table-column>
              </el-table>
            </div>
          </el-main>
        </template>
        <template v-else-if="route.query.Species + route.query.Tissue === 'HumanAirway'">
          <el-main style="margin-left: auto; width: 1600px; height: 4480px; margin-right: auto;">
            <div>
              <div>
                <h1 class="title" style="background-color: #248067;margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">
                  Detail information of {{route.query.Species + " " + route.query.Tissue}} dataset
                </h1>
              </div>
              <div style="margin-left: 250px; width: 100%px; height: 800px; margin-right: auto; float: left;">
                <el-table :data="Data2()" border :show-header="false" fit :row-style="{height: '65px'}">
                  <el-table-column sortable prop="col11" width="380"></el-table-column>
                  <el-table-column sortable prop="col12" width="720"></el-table-column>
                </el-table>
              </div>
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The relative abundance of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringbar = true" @mouseleave="isHoveringbar = false">
              <div v-if="isHoveringbar" style="position: relative; margin-left: 1224px; top: -52px; left: -1190px; height: 65px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">The relative abundance of the microbiome refers to the proportional representation of
                  different microbial taxa within a given sample, indicating the relative prevalence of each
                  taxon in relation to the total microbial community</p>
              </div>
            </h1>
            <div class="graph">
              <div id="graphHumanAirwayYoung" style="margin-bottom: 50px; width: 100%; height:800px; float: left;">
              </div>
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The alpha diversity difference of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringalpha = true" @mouseleave="isHoveringalpha = false">
              <div v-if="isHoveringalpha" style="position: relative; margin-left: 1224px; top: -134px; left: -1190px; height: 145px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  1. The Shannon α diversity measuring the richness and evenness of species within a community to estimate the diversity index based on the Shannon entropy formula. In general, higher Shannon alpha diversity indicates a more diverse and evenly distributed community of species within a given sample.
                  <br />2．Simpson diversity is a measure used to assess the diversity or richness of microbial communities within a microbiome. It takes into account both the abundance and evenness of different microbial species present in the community. The index is calculated by summing the squared proportions of each microbial species in the community. The Simpson diversity index ranges from 0 to 1, with higher values indicating greater diversity.
                </p>
              </div>
            </h1>
            <div class="diversity" style="margin-bottom: 10px; width: 100%; height:550px; float: left;">
                <img class="diversity-left" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/alpha-diversity-shannon.png')" alt="#">
                <img class="diversity-right" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/alpha-diversity-simpson.png')" alt="#">
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The beta diversity difference of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringbeta = true" @mouseleave="isHoveringbeta = false">
              <div v-if="isHoveringbeta" style="position: relative; margin-left: 1224px; top: -154px; left: -1190px; height: 167px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  1.The Jaccard distance is a measure of dissimilarity between two samples or communities based on their shared and unique features. The resulting value ranges from 0
                    (complete similarity) to 1 (complete dissimilarity). Jaccard distance can be calculated using the formula: (Number of unique features in A and B) / (Number of unique features in A or B). A and B refer to two different samples.
                    <br />2.The Bray-curtis distance can be calculated using the formula: Bray-Curtis dissimilarity = (Σ|A[i] - B[i]|) / (Σ(A[i] + B[i]))
                    <br />Where: A[i] represents the abundance of the i-th feature in sample A; B[i] represents the abundance of the i-th feature in sample B; Σ represents the sum across all features.
                    <br />A higher Bray-Curtis distance indicates greater dissimilarity or dissimilarity between two samples in terms of their community composition.
                </p>
              </div>
            </h1>
            <div class="diversity" style="margin-bottom: 30px; width: 100%; height:520px; float: left;">
                <img class="diversity-left" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/beta-diversity-jaccard.png')" alt="#">
                <img class="diversity-right" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/beta-diversity-bray.png')" alt="#">
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The microbiota with age correlation in {{route.query.Species + " " + route.query.Tissue}}
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringtax = true" @mouseleave="isHoveringtax = false">
              <div v-if="isHoveringtax" style="position: relative; margin-left: 1224px; top: -35px; left: -1190px; height: 45px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  Spearman correlation was performed between sample age and microbiome abundance.
                  Only microbiota with significant age correlation (p&lt;0.05) will be shown here.
                </p>
              </div>
            </h1>
            <div style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 14px; line-height: 1.42857143; font-family: Poppins; box-sizing: border-box; float: right; text-align: right; color: #333;">
              <label style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 24px; line-height: 1.42857143; font-family: Poppins; text-align: right; color: #333; box-sizing: border-box; display: inline-block; max-width: 100%; margin-bottom: 15px; font-weight: bold;">
                Search:
                <input v-model="taxsearchKeyword" placeholder="Firmicutes" type="search" style="width: 340px; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0; font: inherit; color: inherit; font-family: Poppins; font-size: 18px; line-height: inherit; box-sizing: border-box; -webkit-appearance: none; margin-left: 0.5em;" aria-controls="myTable">
              </label>
            </div>
            <div class="sheet" style="overflow-y: auto; margin-top: 30px; margin-bottom: 50px; width: 100%; height:650px; float: left;">
                <el-table :data="filteredHumanAirwaytaxData" border fit :row-style="{height: '65px'}" style="height: 100%;">
                    <el-table-column sortable prop="Taxonomy" label="Taxonomy" width="910" style="padding: 5px 12px;"></el-table-column>
                    <el-table-column sortable prop="Animal" label="Animal" width="125"></el-table-column>
                    <el-table-column sortable prop="Tissue" label="Tissue" width="125"></el-table-column>
                    <el-table-column sortable prop="r_value" label="r_value" width="200"></el-table-column>
                    <el-table-column sortable prop="p_value" label="p_value" width="200"></el-table-column>
                </el-table>
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The microbiota shows differential abundance between age group in {{route.query.Species + " " + route.query.Tissue}}
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringlefse = true" @mouseleave="isHoveringlefse = false">
              <div v-if="isHoveringlefse" style="position: relative; margin-left: 1224px; top: -83px; left: -1190px; height: 95px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  LEfSe (Linear discriminant analysis Effect Size) was used to calculated the differential abundance microbiota. Enriched group means the microbiota shows enrichment in this group than the other. The LDA score is a measure of the effect size to identify the differential microbiota. A higher LDA score indicates that the feature is more abundant in one group compared to the other. We only left the microbiota with LDA score&gt;1 and p&lt;0.05.
                </p>
              </div>
            </h1>
            <div style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 14px; line-height: 1.42857143; font-family: Poppins; box-sizing: border-box; float: right; text-align: right; color: #333;">
              <label style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 24px; line-height: 1.42857143; font-family: Poppins; text-align: right; color: #333; box-sizing: border-box; display: inline-block; max-width: 100%; margin-bottom: 15px; font-weight: bold;">
                Search:
                <input v-model="lefsesearchKeyword" placeholder="Firmicutes" type="search" style="width: 340px; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0; font: inherit; color: inherit; font-family: Poppins; font-size: 18px; line-height: inherit; box-sizing: border-box; -webkit-appearance: none; margin-left: 0.5em;" aria-controls="myTable">
              </label>
            </div>
            <div class="sheet" style="margin-bottom: 20px; width: 100%; height: 340px; float: left;">
              <el-table :data="filteredHumanAirwaylefseData" border fit :max-height="685" :row-style="{height: '55px'}">
                    <el-table-column sortable prop="Taxonomy" label="Taxonomy" width="700"></el-table-column>
                    <el-table-column sortable prop="Animal" label="Animal" width="120"></el-table-column>
                    <el-table-column sortable prop="Tissue" label="Tissue" width="120"></el-table-column>
                    <el-table-column sortable prop="Enriched_group" label="Enriched group" width="130"></el-table-column>
                    <el-table-column sortable prop="LDA_score" label="LDA score" width="220"></el-table-column>
                    <el-table-column sortable prop="Pvalue" label="Pvalue" width="270"></el-table-column>
                </el-table>
            </div>
          </el-main>
        </template>
        <template v-else-if="route.query.Species + route.query.Tissue === 'HumanGut'">
          <el-main style="margin-left: auto; width: 1600px; height: 3483px; margin-right: auto;">
            <div>
              <div>
                <h1 class="title" style="background-color: #248067;margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">
                  Detail information of {{route.query.Species + " " + route.query.Tissue}} dataset
                </h1>
              </div>
              <div style="margin-left: 250px; width: 100%px; height: 800px; margin-right: auto; float: left;">
                <el-table :data="Data3()" border :show-header="false" fit :row-style="{height: '65px'}">
                  <el-table-column sortable prop="col11" width="380"></el-table-column>
                  <el-table-column sortable prop="col12" width="720"></el-table-column>
                </el-table>
              </div>
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The relative abundance of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringbar = true" @mouseleave="isHoveringbar = false">
              <div v-if="isHoveringbar" style="position: relative; margin-left: 1224px; top: -52px; left: -1190px; height: 65px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">The relative abundance of the microbiome refers to the proportional representation of
                  different microbial taxa within a given sample, indicating the relative prevalence of each
                  taxon in relation to the total microbial community</p>
              </div>
            </h1>
            <div class="graph">
                <div id="graphHumanGutyoung" style="margin-bottom: 50px; width: 100%; height:800px; float: left;">
                </div>
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The alpha diversity difference of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringalpha = true" @mouseleave="isHoveringalpha = false">
              <div v-if="isHoveringalpha" style="position: relative; margin-left: 1224px; top: -134px; left: -1190px; height: 145px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  1. The Shannon α diversity measuring the richness and evenness of species within a community to estimate the diversity index based on the Shannon entropy formula. In general, higher Shannon alpha diversity indicates a more diverse and evenly distributed community of species within a given sample.
                  <br />2．Simpson diversity is a measure used to assess the diversity or richness of microbial communities within a microbiome. It takes into account both the abundance and evenness of different microbial species present in the community. The index is calculated by summing the squared proportions of each microbial species in the community. The Simpson diversity index ranges from 0 to 1, with higher values indicating greater diversity.
                </p>
              </div>
            </h1>
            <div class="diversity" style="margin-bottom: 10px; width: 100%; height:550px; float: left;">
                <img class="diversity-left" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/alpha-diversity-shannon.png')" alt="#">
                <img class="diversity-right" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/alpha-diversity-simpson.png')" alt="#">
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The beta diversity difference of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringbeta = true" @mouseleave="isHoveringbeta = false">
              <div v-if="isHoveringbeta" style="position: relative; margin-left: 1224px; top: -154px; left: -1190px; height: 167px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  1.The Jaccard distance is a measure of dissimilarity between two samples or communities based on their shared and unique features. The resulting value ranges from 0
                    (complete similarity) to 1 (complete dissimilarity). Jaccard distance can be calculated using the formula: (Number of unique features in A and B) / (Number of unique features in A or B). A and B refer to two different samples.
                    <br />2.The Bray-curtis distance can be calculated using the formula: Bray-Curtis dissimilarity = (Σ|A[i] - B[i]|) / (Σ(A[i] + B[i]))
                    <br />Where: A[i] represents the abundance of the i-th feature in sample A; B[i] represents the abundance of the i-th feature in sample B; Σ represents the sum across all features.
                    <br />A higher Bray-Curtis distance indicates greater dissimilarity or dissimilarity between two samples in terms of their community composition.
                </p>
              </div>
            </h1>
            <div class="diversity" style="margin-bottom: 30px; width: 100%; height:520px; float: left;">
                <img class="diversity-left" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/beta-diversity-jaccard.png')" alt="#">
                <img class="diversity-right" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/beta-diversity-bray.png')" alt="#">
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The microbiota with age correlation in {{route.query.Species + " " + route.query.Tissue}}
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringtax = true" @mouseleave="isHoveringtax = false">
              <div v-if="isHoveringtax" style="position: relative; margin-left: 1224px; top: -35px; left: -1190px; height: 45px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  Spearman correlation was performed between sample age and microbiome abundance.
                  Only microbiota with significant age correlation (p&lt;0.05) will be shown here.
                </p>
              </div>
            </h1>
            <div style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 14px; line-height: 1.42857143; font-family: Poppins; box-sizing: border-box; float: right; text-align: right; color: #333;">
              <label style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 24px; line-height: 1.42857143; font-family: Poppins; text-align: right; color: #333; box-sizing: border-box; display: inline-block; max-width: 100%; margin-bottom: 15px; font-weight: bold;">
                Search:
                <input v-model="taxsearchKeyword" placeholder="Firmicutes" type="search" style="width: 340px; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0; font: inherit; color: inherit; font-family: Poppins; font-size: 18px; line-height: inherit; box-sizing: border-box; -webkit-appearance: none; margin-left: 0.5em;" aria-controls="myTable">
              </label>
            </div>
            <div class="sheet" style="margin-bottom: 30px; width: 100%; height:200px; float: left;">
              <el-table :data="filteredHumanGuttaxData" border fit :row-style="{height: '55px'}">
                  <el-table-column sortable prop="Taxonomy" label="Taxonomy" width="910"></el-table-column>
                  <el-table-column sortable prop="Animal" label="Animal" width="125"></el-table-column>
                  <el-table-column sortable prop="Tissue" label="Tissue" width="125"></el-table-column>
                  <el-table-column sortable prop="r_value" label="r_value" width="200"></el-table-column>
                  <el-table-column sortable prop="p_value" label="p_value" width="200"></el-table-column>
              </el-table>
            </div>
          </el-main>
        </template>
        <template v-else-if="route.query.Species + route.query.Tissue === 'HumanGut microbiome'">
          <el-main style="margin-left: auto; width: 1600px; height: 4990px; margin-right: auto;">
            <div>
              <div>
                <h1 class="title" style="background-color: #248067;margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">
                  Detail information of {{route.query.Species + " " + route.query.Tissue}} dataset
                </h1>
              </div>
              <div style="margin-left: 250px; width: 100%px; height: 800px; margin-right: auto; float: left;">
                <el-table :data="Data4()" border :show-header="false" fit :row-style="{height: '65px'}">
                  <el-table-column sortable prop="col11" width="380"></el-table-column>
                  <el-table-column sortable prop="col12" width="720"></el-table-column>
                </el-table>
              </div>
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The relative abundance of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringbar = true" @mouseleave="isHoveringbar = false">
              <div v-if="isHoveringbar" style="position: relative; margin-left: 1224px; top: -52px; left: -1190px; height: 65px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">The relative abundance of the microbiome refers to the proportional representation of
                  different microbial taxa within a given sample, indicating the relative prevalence of each
                  taxon in relation to the total microbial community</p>
              </div>
            </h1>
          <div class="graph">
            <div id="graphHumanGutmicrobiomeyoung" style="margin:30px 15px 50px 0; width: 100%; height:800px; float: left;">
            </div>
          </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The alpha diversity difference of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringalpha = true" @mouseleave="isHoveringalpha = false">
              <div v-if="isHoveringalpha" style="position: relative; margin-left: 1224px; top: -134px; left: -1190px; height: 145px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  1. The Shannon α diversity measuring the richness and evenness of species within a community to estimate the diversity index based on the Shannon entropy formula. In general, higher Shannon alpha diversity indicates a more diverse and evenly distributed community of species within a given sample.
                  <br />2．Simpson diversity is a measure used to assess the diversity or richness of microbial communities within a microbiome. It takes into account both the abundance and evenness of different microbial species present in the community. The index is calculated by summing the squared proportions of each microbial species in the community. The Simpson diversity index ranges from 0 to 1, with higher values indicating greater diversity.
                </p>
              </div>
            </h1>
          <div class="diversity" style="margin-bottom: 10px; width: 100%; height:550px; float: left;">
                <img class="diversity-left" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/alpha-diversity-shannon.png')" alt="#">
                <img class="diversity-right" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/alpha-diversity-simpson.png')" alt="#">
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The beta diversity difference of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringbeta = true" @mouseleave="isHoveringbeta = false">
              <div v-if="isHoveringbeta" style="position: relative; margin-left: 1224px; top: -154px; left: -1190px; height: 167px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  1.The Jaccard distance is a measure of dissimilarity between two samples or communities based on their shared and unique features. The resulting value ranges from 0
                    (complete similarity) to 1 (complete dissimilarity). Jaccard distance can be calculated using the formula: (Number of unique features in A and B) / (Number of unique features in A or B). A and B refer to two different samples.
                    <br />2.The Bray-curtis distance can be calculated using the formula: Bray-Curtis dissimilarity = (Σ|A[i] - B[i]|) / (Σ(A[i] + B[i]))
                    <br />Where: A[i] represents the abundance of the i-th feature in sample A; B[i] represents the abundance of the i-th feature in sample B; Σ represents the sum across all features.
                    <br />A higher Bray-Curtis distance indicates greater dissimilarity or dissimilarity between two samples in terms of their community composition.
                </p>
              </div>
            </h1>
            <div class="diversity" style="margin-bottom: 30px; width: 100%; height:520px; float: left;">
                <img class="diversity-left" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/beta-diversity-jaccard.png')" alt="#">
                <img class="diversity-right" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/beta-diversity-bray.png')" alt="#">
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The microbiota with age correlation in {{route.query.Species + " " + route.query.Tissue}}
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringtax = true" @mouseleave="isHoveringtax = false">
              <div v-if="isHoveringtax" style="position: relative; margin-left: 1224px; top: -35px; left: -1190px; height: 45px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  Spearman correlation was performed between sample age and microbiome abundance.
                  Only microbiota with significant age correlation (p&lt;0.05) will be shown here.
                </p>
              </div>
            </h1>
            <div style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 14px; line-height: 1.42857143; font-family: Poppins; box-sizing: border-box; float: right; text-align: right; color: #333;">
              <label style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 24px; line-height: 1.42857143; font-family: Poppins; text-align: right; color: #333; box-sizing: border-box; display: inline-block; max-width: 100%; margin-bottom: 15px; font-weight: bold;">
                Search:
                <input v-model="taxsearchKeyword" placeholder="Firmicutes" type="search" style="width: 340px; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0; font: inherit; color: inherit; font-family: Poppins; font-size: 18px; line-height: inherit; box-sizing: border-box; -webkit-appearance: none; margin-left: 0.5em;" aria-controls="myTable">
              </label>
            </div>
          <div class="sheet" style="overflow-y: auto; margin-bottom: 30px; width: 100%; height:720px; float: left;">
              <el-table :data="filteredHumanGutmicrobiometaxData" border fit :row-style="{height: '55px'}">
                  <el-table-column sortable prop="Taxonomy" label="Taxonomy" width="920"></el-table-column>
                  <el-table-column sortable prop="Animal" label="Animal" width="135"></el-table-column>
                  <el-table-column sortable prop="Tissue" label="Tissue" width="105"></el-table-column>
                  <el-table-column sortable prop="r_value" label="r_value" width="200"></el-table-column>
                  <el-table-column sortable prop="p_value" label="p_value" width="200"></el-table-column>
              </el-table>
          </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The microbiota shows differential abundance between age group in {{route.query.Species + " " + route.query.Tissue}}
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringlefse = true" @mouseleave="isHoveringlefse = false">
              <div v-if="isHoveringlefse" style="position: relative; margin-left: 1224px; top: -83px; left: -1190px; height: 95px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  LEfSe (Linear discriminant analysis Effect Size) was used to calculated the differential abundance microbiota. Enriched group means the microbiota shows enrichment in this group than the other. The LDA score is a measure of the effect size to identify the differential microbiota. A higher LDA score indicates that the feature is more abundant in one group compared to the other. We only left the microbiota with LDA score&gt;1 and p&lt;0.05.
                </p>
              </div>
            </h1>
            <div style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 14px; line-height: 1.42857143; font-family: Poppins; box-sizing: border-box; float: right; text-align: right; color: #333;">
              <label style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 24px; line-height: 1.42857143; font-family: Poppins; text-align: right; color: #333; box-sizing: border-box; display: inline-block; max-width: 100%; margin-bottom: 15px; font-weight: bold;">
                Search:
                <input v-model="lefsesearchKeyword" placeholder="Firmicutes" type="search" style="width: 340px; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0; font: inherit; color: inherit; font-family: Poppins; font-size: 18px; line-height: inherit; box-sizing: border-box; -webkit-appearance: none; margin-left: 0.5em;" aria-controls="myTable">
              </label>
            </div>
          <div class="sheet" style="overflow-y: auto; margin-bottom: 20px; width: 100%; height: 800px; float: left;">
              <el-table :data="filteredHumanGutmicrobiomelefseData" border fit :row-style="{height: '55px'}">
                  <el-table-column sortable prop="Taxonomy" label="Taxonomy" width="670"></el-table-column>
                  <el-table-column sortable prop="Animal" label="Animal" width="110"></el-table-column>
                  <el-table-column sortable prop="Tissue" label="Tissue" width="150"></el-table-column>
                  <el-table-column sortable prop="Enriched_group" label="Enriched group" width="130"></el-table-column>
                  <el-table-column sortable prop="LDA_score" label="LDA score" width="220"></el-table-column>
                  <el-table-column sortable prop="Pvalue" label="Pvalue" width="280"></el-table-column>
              </el-table>
          </div>
        </el-main>
        </template>
        <template v-else-if="route.query.Species + route.query.Tissue === 'Rhesus macaquesPulmonary'">
          <el-main style="margin-left: auto; width: 1600px; height: 3421px; margin-right: auto;">
            <div>
              <div>
                <h1 class="title" style="background-color: #248067;margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">
                  Detail information of {{route.query.Species + " " + route.query.Tissue}} dataset
                </h1>
              </div>
              <div style="margin-left: 250px; width: 100%px; height: 800px; margin-right: auto; float: left;">
                <el-table :data="Data5()" border :show-header="false" fit :row-style="{height: '65px'}">
                  <el-table-column sortable prop="col11" width="380"></el-table-column>
                  <el-table-column sortable prop="col12" width="720"></el-table-column>
                </el-table>
              </div>
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The relative abundance of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringbar = true" @mouseleave="isHoveringbar = false">
              <div v-if="isHoveringbar" style="position: relative; margin-left: 1224px; top: -52px; left: -1190px; height: 65px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">The relative abundance of the microbiome refers to the proportional representation of
                  different microbial taxa within a given sample, indicating the relative prevalence of each
                  taxon in relation to the total microbial community</p>
              </div>
            </h1>
            <div id="graphRhesusAdult" style="margin-bottom: 50px; width: 100%; height:800px; float: left;">
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The alpha diversity difference of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringalpha = true" @mouseleave="isHoveringalpha = false">
              <div v-if="isHoveringalpha" style="position: relative; margin-left: 1224px; top: -134px; left: -1190px; height: 145px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  1. The Shannon α diversity measuring the richness and evenness of species within a community to estimate the diversity index based on the Shannon entropy formula. In general, higher Shannon alpha diversity indicates a more diverse and evenly distributed community of species within a given sample.
                  <br />2．Simpson diversity is a measure used to assess the diversity or richness of microbial communities within a microbiome. It takes into account both the abundance and evenness of different microbial species present in the community. The index is calculated by summing the squared proportions of each microbial species in the community. The Simpson diversity index ranges from 0 to 1, with higher values indicating greater diversity.
                </p>
              </div>
            </h1>
            <div class="diversity" style="margin-bottom: 10px; width: 100%; height:550px; float: left;">
                <img class="diversity-left" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/alpha-diversity-shannon.png')" alt="#">
                <img class="diversity-right" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/alpha-diversity-simpson.png')" alt="#">
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The beta diversity difference of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringbeta = true" @mouseleave="isHoveringbeta = false">
              <div v-if="isHoveringbeta" style="position: relative; margin-left: 1224px; top: -154px; left: -1190px; height: 167px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  1.The Jaccard distance is a measure of dissimilarity between two samples or communities based on their shared and unique features. The resulting value ranges from 0
                    (complete similarity) to 1 (complete dissimilarity). Jaccard distance can be calculated using the formula: (Number of unique features in A and B) / (Number of unique features in A or B). A and B refer to two different samples.
                    <br />2.The Bray-curtis distance can be calculated using the formula: Bray-Curtis dissimilarity = (Σ|A[i] - B[i]|) / (Σ(A[i] + B[i]))
                    <br />Where: A[i] represents the abundance of the i-th feature in sample A; B[i] represents the abundance of the i-th feature in sample B; Σ represents the sum across all features.
                    <br />A higher Bray-Curtis distance indicates greater dissimilarity or dissimilarity between two samples in terms of their community composition.
                </p>
              </div>
            </h1>
            <div class="diversity" style="margin-bottom: 30px; width: 100%; height:520px; float: left;">
                <img class="diversity-left" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/beta-diversity-jaccard.png')" alt="#">
                <img class="diversity-right" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/beta-diversity-bray.png')" alt="#">
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The microbiota with age correlation in {{route.query.Species + " " + route.query.Tissue}}
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringtax = true" @mouseleave="isHoveringtax = false">
              <div v-if="isHoveringtax" style="position: relative; margin-left: 1224px; top: -35px; left: -1190px; height: 45px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  Spearman correlation was performed between sample age and microbiome abundance.
                  Only microbiota with significant age correlation (p&lt;0.05) will be shown here.
                </p>
              </div>
            </h1>
            <div style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 14px; line-height: 1.42857143; font-family: Poppins; box-sizing: border-box; float: right; text-align: right; color: #333;">
              <label style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 24px; line-height: 1.42857143; font-family: Poppins; text-align: right; color: #333; box-sizing: border-box; display: inline-block; max-width: 100%; margin-bottom: 15px; font-weight: bold;">
                Search:
                <input v-model="taxsearchKeyword" placeholder="Firmicutes" type="search" style="width: 340px; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0; font: inherit; color: inherit; font-family: Poppins; font-size: 18px; line-height: inherit; box-sizing: border-box; -webkit-appearance: none; margin-left: 0.5em;" aria-controls="myTable">
              </label>
            </div>
            <div class="sheet" style="margin-bottom: 20px; width: 100%; height:150px; float: left;">
                <el-table :data="filteredRhesustaxData" border fit :row-style="{height: '55px'}">
                    <el-table-column sortable prop="Taxonomy" label="Taxonomy" width="660"></el-table-column>
                    <el-table-column sortable prop="Animal" label="Animal" width="250"></el-table-column>
                    <el-table-column sortable prop="Tissue" label="Tissue" width="170"></el-table-column>
                    <el-table-column sortable prop="r_value" label="r_value" width="220"></el-table-column>
                    <el-table-column sortable prop="p_value" label="p_value" width="260"></el-table-column>
                </el-table>
            </div>
          </el-main>
        </template>
        <template v-else-if="route.query.Species + route.query.Tissue === 'Micro-pigGut'">
          <el-main style="margin-left: auto; width: 1600px; height: 4995px; margin-right: auto;">
            <div>
              <div>
                <h1 class="title" style="background-color: #248067;margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">
                  Detail information of {{route.query.Species + " " + route.query.Tissue}} dataset
                </h1>
              </div>
              <div style="margin-left: 250px; width: 100%px; height: 800px; margin-right: auto; float: left;">
                <el-table :data="Data6()" border :show-header="false" fit :row-style="{height: '65px'}">
                  <el-table-column sortable prop="col11" width="380"></el-table-column>
                  <el-table-column sortable prop="col12" width="720"></el-table-column>
                </el-table>
              </div>
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The relative abundance of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringbar = true" @mouseleave="isHoveringbar = false">
              <div v-if="isHoveringbar" style="position: relative; margin-left: 1224px; top: -52px; left: -1190px; height: 65px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">The relative abundance of the microbiome refers to the proportional representation of
                  different microbial taxa within a given sample, indicating the relative prevalence of each
                  taxon in relation to the total microbial community</p>
              </div>
            </h1>
          <div class="graph">
              <div id="graphMicropigFirst" style="margin:30px 15px 50px 0; width: 100%; height:800px; float: left;">
              </div>
          </div>
          <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The alpha diversity difference of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringalpha = true" @mouseleave="isHoveringalpha = false">
              <div v-if="isHoveringalpha" style="position: relative; margin-left: 1224px; top: -134px; left: -1190px; height: 145px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  1. The Shannon α diversity measuring the richness and evenness of species within a community to estimate the diversity index based on the Shannon entropy formula. In general, higher Shannon alpha diversity indicates a more diverse and evenly distributed community of species within a given sample.
                  <br />2．Simpson diversity is a measure used to assess the diversity or richness of microbial communities within a microbiome. It takes into account both the abundance and evenness of different microbial species present in the community. The index is calculated by summing the squared proportions of each microbial species in the community. The Simpson diversity index ranges from 0 to 1, with higher values indicating greater diversity.
                </p>
              </div>
            </h1>
          <div class="diversity" style="margin-bottom: 10px; width: 100%; height:550px; float: left;">
                <img class="diversity-left" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/alpha-diversity-shannon.png')" alt="#">
                <img class="diversity-right" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/alpha-diversity-simpson.png')" alt="#">
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The beta diversity difference of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringbeta = true" @mouseleave="isHoveringbeta = false">
              <div v-if="isHoveringbeta" style="position: relative; margin-left: 1224px; top: -154px; left: -1190px; height: 167px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  1.The Jaccard distance is a measure of dissimilarity between two samples or communities based on their shared and unique features. The resulting value ranges from 0
                    (complete similarity) to 1 (complete dissimilarity). Jaccard distance can be calculated using the formula: (Number of unique features in A and B) / (Number of unique features in A or B). A and B refer to two different samples.
                    <br />2.The Bray-curtis distance can be calculated using the formula: Bray-Curtis dissimilarity = (Σ|A[i] - B[i]|) / (Σ(A[i] + B[i]))
                    <br />Where: A[i] represents the abundance of the i-th feature in sample A; B[i] represents the abundance of the i-th feature in sample B; Σ represents the sum across all features.
                    <br />A higher Bray-Curtis distance indicates greater dissimilarity or dissimilarity between two samples in terms of their community composition.
                </p>
              </div>
            </h1>
            <div class="diversity" style="margin-bottom: 30px; width: 100%; height:520px; float: left;">
                <img class="diversity-left" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/beta-diversity-jaccard.png')" alt="#">
                <img class="diversity-right" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/beta-diversity-bray.png')" alt="#">
            </div>
            <h1 class="title" style="background-color: #248067;margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The microbiota with age correlation in {{route.query.Species + " " + route.query.Tissue}}</h1>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The microbiota with age correlation in {{route.query.Species + " " + route.query.Tissue}}
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringtax = true" @mouseleave="isHoveringtax = false">
              <div v-if="isHoveringtax" style="position: relative; margin-left: 1224px; top: -35px; left: -1190px; height: 45px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  Spearman correlation was performed between sample age and microbiome abundance.
                  Only microbiota with significant age correlation (p&lt;0.05) will be shown here.
                </p>
              </div>
            </h1>
            <div style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 14px; line-height: 1.42857143; font-family: Poppins; box-sizing: border-box; float: right; text-align: right; color: #333;">
              <label style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 24px; line-height: 1.42857143; font-family: Poppins; text-align: right; color: #333; box-sizing: border-box; display: inline-block; max-width: 100%; margin-bottom: 15px; font-weight: bold;">
                Search:
                <input v-model="taxsearchKeyword" placeholder="Firmicutes" type="search" style="width: 340px; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0; font: inherit; color: inherit; font-family: Poppins; font-size: 18px; line-height: inherit; box-sizing: border-box; -webkit-appearance: none; margin-left: 0.5em;" aria-controls="myTable">
              </label>
            </div>
          <div class="sheet" style="margin-bottom: 40px; width: 100%; height:700px; position: relative; overflow-y: auto; float: left;">
              <el-table :data="filteredMicroGuttaxData" border fit :row-style="{height: '65px'}">
                  <el-table-column sortable prop="Taxonomy" label="Taxonomy" width="900"></el-table-column>
                  <el-table-column sortable prop="Animal" label="Animal" width="140"></el-table-column>
                  <el-table-column sortable prop="Tissue" label="Tissue" width="110"></el-table-column>
                  <el-table-column sortable prop="r_value" label="r_value" width="200"></el-table-column>
                  <el-table-column sortable prop="p_value" label="p_value" width="250"></el-table-column>
              </el-table>
          </div>
          <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The microbiota shows differential abundance between age group in {{route.query.Species + " " + route.query.Tissue}}
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringlefse = true" @mouseleave="isHoveringlefse = false">
              <div v-if="isHoveringlefse" style="position: relative; margin-left: 1224px; top: -83px; left: -1190px; height: 95px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  LEfSe (Linear discriminant analysis Effect Size) was used to calculated the differential abundance microbiota. Enriched group means the microbiota shows enrichment in this group than the other. The LDA score is a measure of the effect size to identify the differential microbiota. A higher LDA score indicates that the feature is more abundant in one group compared to the other. We only left the microbiota with LDA score&gt;1 and p&lt;0.05.
                </p>
              </div>
            </h1>
            <div style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 14px; line-height: 1.42857143; font-family: Poppins; box-sizing: border-box; float: right; text-align: right; color: #333;">
              <label style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 24px; line-height: 1.42857143; font-family: Poppins; text-align: right; color: #333; box-sizing: border-box; display: inline-block; max-width: 100%; margin-bottom: 15px; font-weight: bold;">
                Search:
                <input v-model="lefsesearchKeyword" placeholder="Firmicutes" type="search" style="width: 340px; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0; font: inherit; color: inherit; font-family: Poppins; font-size: 18px; line-height: inherit; box-sizing: border-box; -webkit-appearance: none; margin-left: 0.5em;" aria-controls="myTable">
              </label>
            </div>
          <div class="sheet" style="margin-bottom: 40px; width: 100%; height: 700px; overflow-y: auto; float: left;">
              <el-table :data="filteredMicroGutlefseData" border fit :row-style="{height: '55px'}">
                  <el-table-column sortable prop="Taxonomy" label="Taxonomy" width="680"></el-table-column>
                  <el-table-column sortable prop="Animal" label="Animal" width="125"></el-table-column>
                  <el-table-column sortable prop="Tissue" label="Tissue" width="110"></el-table-column>
                  <el-table-column sortable prop="Enriched_group" label="Enriched group" width="130"></el-table-column>
                  <el-table-column sortable prop="LDA_score" label="LDA score" width="220"></el-table-column>
                  <el-table-column sortable prop="Pvalue" label="Pvalue" width="275"></el-table-column>
              </el-table>
          </div>
        </el-main>
        </template>
        <template v-else-if="route.query.Species + route.query.Tissue === 'MouseGut'">
          <el-main style="margin-left: auto; width: 1600px; height: 5021px; margin-right: auto;">
            <div>
              <div>
                <h1 class="title" style="background-color: #248067;margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">
                  Detail information of {{route.query.Species + " " + route.query.Tissue}} dataset
                </h1>
              </div>
              <div style="margin-left: 250px; width: 100%px; height: 800px; margin-right: auto; float: left;">
                <el-table :data="Data7()" border :show-header="false" fit :row-style="{height: '65px'}">
                  <el-table-column sortable prop="col11" width="380"></el-table-column>
                  <el-table-column sortable prop="col12" width="720"></el-table-column>
                </el-table>
              </div>
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The relative abundance of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringbar = true" @mouseleave="isHoveringbar = false">
              <div v-if="isHoveringbar" style="position: relative; margin-left: 1224px; top: -52px; left: -1190px; height: 65px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">The relative abundance of the microbiome refers to the proportional representation of
                  different microbial taxa within a given sample, indicating the relative prevalence of each
                  taxon in relation to the total microbial community</p>
              </div>
            </h1>
          <div class="graph">
              <div id="graphMouseGutFirst" style="margin:30px 15px 50px 0; width: 100%; height:800px; float: left;">
              </div>
          </div>
          <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The alpha diversity difference of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringalpha = true" @mouseleave="isHoveringalpha = false">
              <div v-if="isHoveringalpha" style="position: relative; margin-left: 1224px; top: -134px; left: -1190px; height: 145px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  1. The Shannon α diversity measuring the richness and evenness of species within a community to estimate the diversity index based on the Shannon entropy formula. In general, higher Shannon alpha diversity indicates a more diverse and evenly distributed community of species within a given sample.
                  <br />2．Simpson diversity is a measure used to assess the diversity or richness of microbial communities within a microbiome. It takes into account both the abundance and evenness of different microbial species present in the community. The index is calculated by summing the squared proportions of each microbial species in the community. The Simpson diversity index ranges from 0 to 1, with higher values indicating greater diversity.
                </p>
              </div>
          </h1>
          <div class="diversity" style="margin-bottom: 10px; width: 100%; height:550px; float: left;">
                <img class="diversity-left" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/alpha-diversity-shannon.png')" alt="#">
                <img class="diversity-right" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/alpha-diversity-simpson.png')" alt="#">
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The beta diversity difference of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringbeta = true" @mouseleave="isHoveringbeta = false">
              <div v-if="isHoveringbeta" style="position: relative; margin-left: 1224px; top: -154px; left: -1190px; height: 167px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  1.The Jaccard distance is a measure of dissimilarity between two samples or communities based on their shared and unique features. The resulting value ranges from 0
                    (complete similarity) to 1 (complete dissimilarity). Jaccard distance can be calculated using the formula: (Number of unique features in A and B) / (Number of unique features in A or B). A and B refer to two different samples.
                    <br />2.The Bray-curtis distance can be calculated using the formula: Bray-Curtis dissimilarity = (Σ|A[i] - B[i]|) / (Σ(A[i] + B[i]))
                    <br />Where: A[i] represents the abundance of the i-th feature in sample A; B[i] represents the abundance of the i-th feature in sample B; Σ represents the sum across all features.
                    <br />A higher Bray-Curtis distance indicates greater dissimilarity or dissimilarity between two samples in terms of their community composition.
                </p>
              </div>
            </h1>
            <div class="diversity" style="margin-bottom: 30px; width: 100%; height:520px; float: left;">
                <img class="diversity-left" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/beta-diversity-jaccard.png')" alt="#">
                <img class="diversity-right" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/beta-diversity-bray.png')" alt="#">
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The microbiota with age correlation in {{route.query.Species + " " + route.query.Tissue}}
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringtax = true" @mouseleave="isHoveringtax = false">
              <div v-if="isHoveringtax" style="position: relative; margin-left: 1224px; top: -35px; left: -1190px; height: 45px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  Spearman correlation was performed between sample age and microbiome abundance.
                  Only microbiota with significant age correlation (p&lt;0.05) will be shown here.
                </p>
              </div>
            </h1>
            <div style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 14px; line-height: 1.42857143; font-family: Poppins; box-sizing: border-box; float: right; text-align: right; color: #333;">
              <label style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 24px; line-height: 1.42857143; font-family: Poppins; text-align: right; color: #333; box-sizing: border-box; display: inline-block; max-width: 100%; margin-bottom: 15px; font-weight: bold;">
                Search:
                <input v-model="taxsearchKeyword" placeholder="Firmicutes" type="search" style="width: 340px; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0; font: inherit; color: inherit; font-family: Poppins; font-size: 18px; line-height: inherit; box-sizing: border-box; -webkit-appearance: none; margin-left: 0.5em;" aria-controls="myTable">
              </label>
            </div>
          <div class="sheet" style="overflow-y: auto; margin-bottom: 30px; width: 100%; height:720px; float: left;">
              <el-table :data="filteredMouseGuttaxData" border fit :row-style="{height: '55px'}">
                  <el-table-column sortable prop="Taxonomy" label="Taxonomy" width="920"></el-table-column>
                  <el-table-column sortable prop="Animal" label="Animal" width="135"></el-table-column>
                  <el-table-column sortable prop="Tissue" label="Tissue" width="105"></el-table-column>
                  <el-table-column sortable prop="r_value" label="r_value" width="200"></el-table-column>
                  <el-table-column sortable prop="p_value" label="p_value" width="200"></el-table-column>
              </el-table>
          </div>
          <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The microbiota shows differential abundance between age group in {{route.query.Species + " " + route.query.Tissue}}
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringlefse = true" @mouseleave="isHoveringlefse = false">
              <div v-if="isHoveringlefse" style="position: relative; margin-left: 1224px; top: -83px; left: -1190px; height: 95px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  LEfSe (Linear discriminant analysis Effect Size) was used to calculated the differential abundance microbiota. Enriched group means the microbiota shows enrichment in this group than the other. The LDA score is a measure of the effect size to identify the differential microbiota. A higher LDA score indicates that the feature is more abundant in one group compared to the other. We only left the microbiota with LDA score&gt;1 and p&lt;0.05.
                </p>
              </div>
            </h1>
            <div style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 14px; line-height: 1.42857143; font-family: Poppins; box-sizing: border-box; float: right; text-align: right; color: #333;">
              <label style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 24px; line-height: 1.42857143; font-family: Poppins; text-align: right; color: #333; box-sizing: border-box; display: inline-block; max-width: 100%; margin-bottom: 15px; font-weight: bold;">
                Search:
                <input v-model="lefsesearchKeyword" placeholder="Firmicutes" type="search" style="width: 340px; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0; font: inherit; color: inherit; font-family: Poppins; font-size: 18px; line-height: inherit; box-sizing: border-box; -webkit-appearance: none; margin-left: 0.5em;" aria-controls="myTable">
              </label>
            </div>
          <div class="sheet" style="overflow-y: auto; margin-bottom: 30px; width: 100%; height: 800px; float: left;">
              <el-table :data="filteredMouseGutlefseData" border fit :row-style="{height: '55px'}">
                  <el-table-column sortable prop="Taxonomy" label="Taxonomy" width="700"></el-table-column>
                  <el-table-column sortable prop="Animal" label="Animal" width="130"></el-table-column>
                  <el-table-column sortable prop="Tissue" label="Tissue" width="100"></el-table-column>
                  <el-table-column sortable prop="Enriched_group" label="Enriched group" width="130"></el-table-column>
                  <el-table-column sortable prop="LDA_score" label="LDA score" width="220"></el-table-column>
                  <el-table-column sortable prop="Pvalue" label="Pvalue" width="280"></el-table-column>
              </el-table>
          </div>
        </el-main>
        </template>
        <template v-else-if="route.query.Species + route.query.Tissue === 'Macaca mulattaOral'">
          <el-main style="margin-left: auto; width: 1600px; height: 4018px; margin-right: auto;">
            <div>
              <div>
                <h1 class="title" style="background-color: #248067;margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">
                  Detail information of {{route.query.Species + " " + route.query.Tissue}} dataset
                </h1>
              </div>
              <div style="margin-left: 250px; width: 100%px; height: 800px; margin-right: auto; float: left;">
                <el-table :data="Data8()" border :show-header="false" fit :row-style="{height: '65px'}">
                  <el-table-column sortable prop="col11" width="380"></el-table-column>
                  <el-table-column sortable prop="col12" width="720"></el-table-column>
                </el-table>
              </div>
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The relative abundance of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringbar = true" @mouseleave="isHoveringbar = false">
              <div v-if="isHoveringbar" style="position: relative; margin-left: 1224px; top: -52px; left: -1190px; height: 65px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">The relative abundance of the microbiome refers to the proportional representation of
                  different microbial taxa within a given sample, indicating the relative prevalence of each
                  taxon in relation to the total microbial community</p>
              </div>
            </h1>
          <div class="graph">
            <div id="graphMacacaOralFirst" style="margin:30px 15px 50px 0; width: 100%; height:800px; float: left;">
            </div>
          </div>
          <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The alpha diversity difference of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringalpha = true" @mouseleave="isHoveringalpha = false">
              <div v-if="isHoveringalpha" style="position: relative; margin-left: 1224px; top: -134px; left: -1190px; height: 145px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  1. The Shannon α diversity measuring the richness and evenness of species within a community to estimate the diversity index based on the Shannon entropy formula. In general, higher Shannon alpha diversity indicates a more diverse and evenly distributed community of species within a given sample.
                  <br />2．Simpson diversity is a measure used to assess the diversity or richness of microbial communities within a microbiome. It takes into account both the abundance and evenness of different microbial species present in the community. The index is calculated by summing the squared proportions of each microbial species in the community. The Simpson diversity index ranges from 0 to 1, with higher values indicating greater diversity.
                </p>
              </div>
            </h1>
          <div class="diversity" style="margin-bottom: 10px; width: 100%; height:550px; float: left;">
                <img class="diversity-left" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/alpha-diversity-shannon.png')" alt="#">
                <img class="diversity-right" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/alpha-diversity-simpson.png')" alt="#">
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The beta diversity difference of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringbeta = true" @mouseleave="isHoveringbeta = false">
              <div v-if="isHoveringbeta" style="position: relative; margin-left: 1224px; top: -154px; left: -1190px; height: 167px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  1.The Jaccard distance is a measure of dissimilarity between two samples or communities based on their shared and unique features. The resulting value ranges from 0
                    (complete similarity) to 1 (complete dissimilarity). Jaccard distance can be calculated using the formula: (Number of unique features in A and B) / (Number of unique features in A or B). A and B refer to two different samples.
                    <br />2.The Bray-curtis distance can be calculated using the formula: Bray-Curtis dissimilarity = (Σ|A[i] - B[i]|) / (Σ(A[i] + B[i]))
                    <br />Where: A[i] represents the abundance of the i-th feature in sample A; B[i] represents the abundance of the i-th feature in sample B; Σ represents the sum across all features.
                    <br />A higher Bray-Curtis distance indicates greater dissimilarity or dissimilarity between two samples in terms of their community composition.
                </p>
              </div>
            </h1>
            <div class="diversity" style="margin-bottom: 30px; width: 100%; height:520px; float: left;">
                <img class="diversity-left" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/beta-diversity-jaccard.png')" alt="#">
                <img class="diversity-right" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/beta-diversity-bray.png')" alt="#">
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The microbiota with age correlation in {{route.query.Species + " " + route.query.Tissue}}
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringtax = true" @mouseleave="isHoveringtax = false">
              <div v-if="isHoveringtax" style="position: relative; margin-left: 1224px; top: -35px; left: -1190px; height: 45px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  Spearman correlation was performed between sample age and microbiome abundance.
                  Only microbiota with significant age correlation (p&lt;0.05) will be shown here.
                </p>
              </div>
            </h1>
            <div style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 14px; line-height: 1.42857143; font-family: Poppins; box-sizing: border-box; float: right; text-align: right; color: #333;">
              <label style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 24px; line-height: 1.42857143; font-family: Poppins; text-align: right; color: #333; box-sizing: border-box; display: inline-block; max-width: 100%; margin-bottom: 15px; font-weight: bold;">
                Search:
                <input v-model="taxsearchKeyword" placeholder="Firmicutes" type="search" style="width: 340px; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0; font: inherit; color: inherit; font-family: Poppins; font-size: 18px; line-height: inherit; box-sizing: border-box; -webkit-appearance: none; margin-left: 0.5em;" aria-controls="myTable">
              </label>
            </div>
          <div class="sheet" style="overflow-y: auto; margin-bottom: 30px; width: 100%; height: 675px; float: left;">
              <el-table :data="filteredMacacaOraltaxData" border fit :row-style="{height: '55px'}">
                  <el-table-column sortable prop="Taxonomy" label="Taxonomy" width="860"></el-table-column>
                  <el-table-column sortable prop="Animal" label="Animal" width="205"></el-table-column>
                  <el-table-column sortable prop="Tissue" label="Tissue" width="95"></el-table-column>
                  <el-table-column sortable prop="r_value" label="r_value" width="200"></el-table-column>
                  <el-table-column sortable prop="p_value" label="p_value" width="200"></el-table-column>
              </el-table>
          </div>
        </el-main>
        </template>
        <template v-else-if="route.query.Species + route.query.Tissue === 'RatGut'">
          <el-main style="margin-left: auto; width: 1600px; height: 4150px; margin-right: auto;">
            <div>
              <div>
                <h1 class="title" style="background-color: #248067;margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">
                  Detail information of {{route.query.Species + " " + route.query.Tissue}} dataset
                </h1>
              </div>
              <div style="margin-left: 250px; width: 100%px; height: 800px; margin-right: auto; float: left;">
                <el-table :data="Data9()" border :show-header="false" fit :row-style="{height: '65px'}">
                  <el-table-column sortable prop="col11" width="380"></el-table-column>
                  <el-table-column sortable prop="col12" width="720"></el-table-column>
                </el-table>
              </div>
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The relative abundance of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringbar = true" @mouseleave="isHoveringbar = false">
              <div v-if="isHoveringbar" style="position: relative; margin-left: 1224px; top: -52px; left: -1190px; height: 65px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">The relative abundance of the microbiome refers to the proportional representation of
                  different microbial taxa within a given sample, indicating the relative prevalence of each
                  taxon in relation to the total microbial community</p>
              </div>
            </h1>
          <div class="graph">
            <div id="graphRatGutFirst" style="margin:30px 15px 50px 0; width: 100%; height:800px; float: left;">
            </div>
          </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The alpha diversity difference of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringalpha = true" @mouseleave="isHoveringalpha = false">
              <div v-if="isHoveringalpha" style="position: relative; margin-left: 1224px; top: -134px; left: -1190px; height: 145px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  1. The Shannon α diversity measuring the richness and evenness of species within a community to estimate the diversity index based on the Shannon entropy formula. In general, higher Shannon alpha diversity indicates a more diverse and evenly distributed community of species within a given sample.
                  <br />2．Simpson diversity is a measure used to assess the diversity or richness of microbial communities within a microbiome. It takes into account both the abundance and evenness of different microbial species present in the community. The index is calculated by summing the squared proportions of each microbial species in the community. The Simpson diversity index ranges from 0 to 1, with higher values indicating greater diversity.
                </p>
              </div>
            </h1>
          <div class="diversity" style="margin-bottom: 10px; width: 100%; height:550px; float: left;">
                <img class="diversity-left" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/alpha-diversity-shannon.png')" alt="#">
                <img class="diversity-right" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/alpha-diversity-simpson.png')" alt="#">
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The beta diversity difference of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringbeta = true" @mouseleave="isHoveringbeta = false">
              <div v-if="isHoveringbeta" style="position: relative; margin-left: 1224px; top: -154px; left: -1190px; height: 167px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  1.The Jaccard distance is a measure of dissimilarity between two samples or communities based on their shared and unique features. The resulting value ranges from 0
                    (complete similarity) to 1 (complete dissimilarity). Jaccard distance can be calculated using the formula: (Number of unique features in A and B) / (Number of unique features in A or B). A and B refer to two different samples.
                    <br />2.The Bray-curtis distance can be calculated using the formula: Bray-Curtis dissimilarity = (Σ|A[i] - B[i]|) / (Σ(A[i] + B[i]))
                    <br />Where: A[i] represents the abundance of the i-th feature in sample A; B[i] represents the abundance of the i-th feature in sample B; Σ represents the sum across all features.
                    <br />A higher Bray-Curtis distance indicates greater dissimilarity or dissimilarity between two samples in terms of their community composition.
                </p>
              </div>
            </h1>
            <div class="diversity" style="margin-bottom: 30px; width: 100%; height:520px; float: left;">
                <img class="diversity-left" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/beta-diversity-jaccard.png')" alt="#">
                <img class="diversity-right" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/beta-diversity-bray.png')" alt="#">
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The microbiota shows differential abundance between age group in {{route.query.Species + " " + route.query.Tissue}}
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringlefse = true" @mouseleave="isHoveringlefse = false">
              <div v-if="isHoveringlefse" style="position: relative; margin-left: 1224px; top: -83px; left: -1190px; height: 95px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  LEfSe (Linear discriminant analysis Effect Size) was used to calculated the differential abundance microbiota. Enriched group means the microbiota shows enrichment in this group than the other. The LDA score is a measure of the effect size to identify the differential microbiota. A higher LDA score indicates that the feature is more abundant in one group compared to the other. We only left the microbiota with LDA score&gt;1 and p&lt;0.05.
                </p>
              </div>
            </h1>
            <div style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 14px; line-height: 1.42857143; font-family: Poppins; box-sizing: border-box; float: right; text-align: right; color: #333;">
              <label style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 24px; line-height: 1.42857143; font-family: Poppins; text-align: right; color: #333; box-sizing: border-box; display: inline-block; max-width: 100%; margin-bottom: 15px; font-weight: bold;">
                Search:
                <input v-model="lefsesearchKeyword" placeholder="Firmicutes" type="search" style="width: 340px; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0; font: inherit; color: inherit; font-family: Poppins; font-size: 18px; line-height: inherit; box-sizing: border-box; -webkit-appearance: none; margin-left: 0.5em;" aria-controls="myTable">
              </label>
            </div>
          <div class="sheet" style="overflow-y: auto; margin-bottom: 20px; width: 100%; height: 800px; float: left;">
              <el-table :data="filteredRatGutlefseData" border fit :row-style="{height: '55px'}">
                  <el-table-column sortable prop="Taxonomy" label="Taxonomy" width="670"></el-table-column>
                  <el-table-column sortable prop="Animal" label="Animal" width="110"></el-table-column>
                  <el-table-column sortable prop="Tissue" label="Tissue" width="150"></el-table-column>
                  <el-table-column sortable prop="Enriched_group" label="Enriched group" width="130"></el-table-column>
                  <el-table-column sortable prop="LDA_score" label="LDA score" width="220"></el-table-column>
                  <el-table-column sortable prop="Pvalue" label="Pvalue" width="280"></el-table-column>
              </el-table>
          </div>
        </el-main>
        </template>
        <template v-else-if="route.query.Species + route.query.Tissue === 'Blattella germanicaGut'">
          <el-main style="margin-left: auto; width: 1600px; height: 3760px; margin-right: auto;">
            <div>
              <div>
                <h1 class="title" style="background-color: #248067;margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">
                  Detail information of {{route.query.Species + " " + route.query.Tissue}} dataset
                </h1>
              </div>
              <div style="margin-left: 250px; width: 100%px; height: 800px; margin-right: auto; float: left;">
                <el-table :data="Data10()" border :show-header="false" fit :row-style="{height: '65px'}">
                  <el-table-column sortable prop="col11" width="380"></el-table-column>
                  <el-table-column sortable prop="col12" width="720"></el-table-column>
                </el-table>
              </div>
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The relative abundance of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringbar = true" @mouseleave="isHoveringbar = false">
              <div v-if="isHoveringbar" style="position: relative; margin-left: 1224px; top: -52px; left: -1190px; height: 65px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">The relative abundance of the microbiome refers to the proportional representation of
                  different microbial taxa within a given sample, indicating the relative prevalence of each
                  taxon in relation to the total microbial community</p>
              </div>
            </h1>
          <div class="graph">
            <div id="graphBlattellaGutFirst" style="margin:30px 15px 50px 0; width: 100%; height:800px; float: left;">
            </div>
          </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The alpha diversity difference of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringalpha = true" @mouseleave="isHoveringalpha = false">
              <div v-if="isHoveringalpha" style="position: relative; margin-left: 1224px; top: -134px; left: -1190px; height: 145px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  1. The Shannon α diversity measuring the richness and evenness of species within a community to estimate the diversity index based on the Shannon entropy formula. In general, higher Shannon alpha diversity indicates a more diverse and evenly distributed community of species within a given sample.
                  <br />2．Simpson diversity is a measure used to assess the diversity or richness of microbial communities within a microbiome. It takes into account both the abundance and evenness of different microbial species present in the community. The index is calculated by summing the squared proportions of each microbial species in the community. The Simpson diversity index ranges from 0 to 1, with higher values indicating greater diversity.
                </p>
              </div>
            </h1>
          <div class="diversity" style="margin-bottom: 10px; width: 100%; height:550px; float: left;">
                <img class="diversity-left" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/alpha-diversity-shannon.png')" alt="#">
                <img class="diversity-right" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/alpha-diversity-simpson.png')" alt="#">
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The beta diversity difference of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringbeta = true" @mouseleave="isHoveringbeta = false">
              <div v-if="isHoveringbeta" style="position: relative; margin-left: 1224px; top: -154px; left: -1190px; height: 167px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  1.The Jaccard distance is a measure of dissimilarity between two samples or communities based on their shared and unique features. The resulting value ranges from 0
                    (complete similarity) to 1 (complete dissimilarity). Jaccard distance can be calculated using the formula: (Number of unique features in A and B) / (Number of unique features in A or B). A and B refer to two different samples.
                    <br />2.The Bray-curtis distance can be calculated using the formula: Bray-Curtis dissimilarity = (Σ|A[i] - B[i]|) / (Σ(A[i] + B[i]))
                    <br />Where: A[i] represents the abundance of the i-th feature in sample A; B[i] represents the abundance of the i-th feature in sample B; Σ represents the sum across all features.
                    <br />A higher Bray-Curtis distance indicates greater dissimilarity or dissimilarity between two samples in terms of their community composition.
                </p>
              </div>
            </h1>
            <div class="diversity" style="margin-bottom: 30px; width: 100%; height:520px; float: left;">
                <img class="diversity-left" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/beta-diversity-jaccard.png')" alt="#">
                <img class="diversity-right" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
                :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/beta-diversity-bray.png')" alt="#">
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The microbiota with age correlation in {{route.query.Species + " " + route.query.Tissue}}
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringtax = true" @mouseleave="isHoveringtax = false">
              <div v-if="isHoveringtax" style="position: relative; margin-left: 1224px; top: -35px; left: -1190px; height: 45px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  Spearman correlation was performed between sample age and microbiome abundance.
                  Only microbiota with significant age correlation (p&lt;0.05) will be shown here.
                </p>
              </div>
            </h1>
            <div style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 14px; line-height: 1.42857143; font-family: Poppins; box-sizing: border-box; float: right; text-align: right; color: #333;">
              <label style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 24px; line-height: 1.42857143; font-family: Poppins; text-align: right; color: #333; box-sizing: border-box; display: inline-block; max-width: 100%; margin-bottom: 15px; font-weight: bold;">
                Search:
                <input v-model="taxsearchKeyword" placeholder="Firmicutes" type="search" style="width: 340px; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0; font: inherit; color: inherit; font-family: Poppins; font-size: 18px; line-height: inherit; box-sizing: border-box; -webkit-appearance: none; margin-left: 0.5em;" aria-controls="myTable">
              </label>
            </div>
          <div class="sheet" style="overflow-y: auto; margin-bottom: 30px; width: 100%; height:450px; float: left;">
              <el-table :data="filteredBlattellaGuttaxData" border fit :row-style="{height: '55px'}">
                  <el-table-column sortable prop="Taxonomy" label="Taxonomy" width="730"></el-table-column>
                  <el-table-column sortable prop="Animal" label="Animal" width="215"></el-table-column>
                  <el-table-column sortable prop="Tissue" label="Tissue" width="95"></el-table-column>
                  <el-table-column sortable prop="r_value" label="r_value" width="250"></el-table-column>
                  <el-table-column sortable prop="p_value" label="p_value" width="270"></el-table-column>
              </el-table>
          </div>
        </el-main>
        </template>
        <template v-else-if="route.query.Species + route.query.Tissue === 'Queen beeGut'">
          <el-main style="margin-left: auto; width: 1600px; height: 4994px; margin-right: auto;">
            <div>
              <div>
                <h1 class="title" style="background-color: #248067;margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">
                  Detail information of {{route.query.Species + " " + route.query.Tissue}} dataset
                </h1>
              </div>
              <div style="margin-left: 250px; width: 100%px; height: 800px; margin-right: auto; float: left;">
                <el-table :data="Data11()" border :show-header="false" fit :row-style="{height: '65px'}">
                  <el-table-column sortable prop="col11" width="380"></el-table-column>
                  <el-table-column sortable prop="col12" width="720"></el-table-column>
                </el-table>
              </div>
            </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The relative abundance of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringbar = true" @mouseleave="isHoveringbar = false">
              <div v-if="isHoveringbar" style="position: relative; margin-left: 1224px; top: -52px; left: -1190px; height: 65px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">The relative abundance of the microbiome refers to the proportional representation of
                  different microbial taxa within a given sample, indicating the relative prevalence of each
                  taxon in relation to the total microbial community</p>
              </div>
            </h1>
          <div id="graphQueenGutyoung" style="margin-bottom: 50px; width: 100%; height:800px; float: left;">
          </div>
            <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The alpha diversity difference of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringalpha = true" @mouseleave="isHoveringalpha = false">
              <div v-if="isHoveringalpha" style="position: relative; margin-left: 1224px; top: -134px; left: -1190px; height: 145px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  1. The Shannon α diversity measuring the richness and evenness of species within a community to estimate the diversity index based on the Shannon entropy formula. In general, higher Shannon alpha diversity indicates a more diverse and evenly distributed community of species within a given sample.
                  <br />2．Simpson diversity is a measure used to assess the diversity or richness of microbial communities within a microbiome. It takes into account both the abundance and evenness of different microbial species present in the community. The index is calculated by summing the squared proportions of each microbial species in the community. The Simpson diversity index ranges from 0 to 1, with higher values indicating greater diversity.
                </p>
              </div>
            </h1>
          <div class="diversity" style="margin-bottom: 10px; width: 100%; height:550px; float: left;">
              <img class="diversity-left" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
              :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/alpha-diversity-shannon.png')" alt="#">
              <img class="diversity-right" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
              :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/alpha-diversity-simpson.png')" alt="#">
          </div>
          <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The beta diversity difference of {{route.query.Species + " " + route.query.Tissue}} between age groups
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringbeta = true" @mouseleave="isHoveringbeta = false">
              <div v-if="isHoveringbeta" style="position: relative; margin-left: 1224px; top: -154px; left: -1190px; height: 167px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  1.The Jaccard distance is a measure of dissimilarity between two samples or communities based on their shared and unique features. The resulting value ranges from 0
                    (complete similarity) to 1 (complete dissimilarity). Jaccard distance can be calculated using the formula: (Number of unique features in A and B) / (Number of unique features in A or B). A and B refer to two different samples.
                    <br />2.The Bray-curtis distance can be calculated using the formula: Bray-Curtis dissimilarity = (Σ|A[i] - B[i]|) / (Σ(A[i] + B[i]))
                    <br />Where: A[i] represents the abundance of the i-th feature in sample A; B[i] represents the abundance of the i-th feature in sample B; Σ represents the sum across all features.
                    <br />A higher Bray-Curtis distance indicates greater dissimilarity or dissimilarity between two samples in terms of their community composition.
                </p>
              </div>
            </h1>
          <div class="diversity" style="margin-bottom: 30px; width: 100%; height:520px; float: left;">
              <img class="diversity-left" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
              :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/beta-diversity-jaccard.png')" alt="#">
              <img class="diversity-right" style="margin: 20px 0 0 0; width: 50%; height: 494px;"
              :src="require('@/assets/' + route.query.Species + route.query.Tissue + '/beta-diversity-bray.png')" alt="#">
          </div>
          <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The microbiota with age correlation in {{route.query.Species + " " + route.query.Tissue}}
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringtax = true" @mouseleave="isHoveringtax = false">
              <div v-if="isHoveringtax" style="position: relative; margin-left: 1224px; top: -35px; left: -1190px; height: 45px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  Spearman correlation was performed between sample age and microbiome abundance.
                  Only microbiota with significant age correlation (p&lt;0.05) will be shown here.
                </p>
              </div>
            </h1>
            <div style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 14px; line-height: 1.42857143; font-family: Poppins; box-sizing: border-box; float: right; text-align: right; color: #333;">
              <label style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 24px; line-height: 1.42857143; font-family: Poppins; text-align: right; color: #333; box-sizing: border-box; display: inline-block; max-width: 100%; margin-bottom: 15px; font-weight: bold;">
                Search:
                <input v-model="taxsearchKeyword" placeholder="Firmicutes" type="search" style="width: 340px; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0; font: inherit; color: inherit; font-family: Poppins; font-size: 18px; line-height: inherit; box-sizing: border-box; -webkit-appearance: none; margin-left: 0.5em;" aria-controls="myTable">
              </label>
            </div>
          <div class="sheet" style="overflow-y: auto; margin-bottom: 80px; width: 100%; height:700px; float: left;">
              <el-table :data="filteredQueenbeeGuttaxData" fit border :row-style="{height: '55px'}">
                  <el-table-column sortable prop="Taxonomy" label="Taxonomy" width="830"></el-table-column>
                  <el-table-column sortable prop="Animal" label="Animal" width="205"></el-table-column>
                  <el-table-column sortable prop="Tissue" label="Tissue" width="125"></el-table-column>
                  <el-table-column sortable prop="r_value" label="r_value" width="200"></el-table-column>
                  <el-table-column sortable prop="p_value" label="p_value" width="200"></el-table-column>
              </el-table>
          </div>
          <h1 class="title" style="background-color: #248067; margin: 20px 0 10px 0; padding: 10px 0 40px 0; width: 100%; height:20px; float: left;">The microbiota shows differential abundance between age group in {{route.query.Species + " " + route.query.Tissue}}
              <img src="../../public/images/icon/question.png" style="height: 30px; width: 30px; margin-right: 20px; float: right;" alt="image" @mouseenter="isHoveringlefse = true" @mouseleave="isHoveringlefse = false">
              <div v-if="isHoveringlefse" style="position: relative; margin-left: 1224px; top: -83px; left: -1190px; height: 95px; width: 91%; background-color: #303133;">
                <p style="text-align: justify; padding: 10px; font-size: 16px; line-height: 1.5; min-width: 10px; word-wrap: break-word; color: white;">
                  LEfSe (Linear discriminant analysis Effect Size) was used to calculated the differential abundance microbiota. Enriched group means the microbiota shows enrichment in this group than the other. The LDA score is a measure of the effect size to identify the differential microbiota. A higher LDA score indicates that the feature is more abundant in one group compared to the other. We only left the microbiota with LDA score&gt;1 and p&lt;0.05.
                </p>
              </div>
            </h1>
            <div style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 14px; line-height: 1.42857143; font-family: Poppins; box-sizing: border-box; float: right; text-align: right; color: #333;">
              <label style="-webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 24px; line-height: 1.42857143; font-family: Poppins; text-align: right; color: #333; box-sizing: border-box; display: inline-block; max-width: 100%; margin-bottom: 15px; font-weight: bold;">
                Search:
                <input v-model="lefsesearchKeyword" placeholder="Firmicutes" type="search" style="width: 340px; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0; font: inherit; color: inherit; font-family: Poppins; font-size: 18px; line-height: inherit; box-sizing: border-box; -webkit-appearance: none; margin-left: 0.5em;" aria-controls="myTable">
              </label>
            </div>
          <div class="sheet" style="overflow-y: auto; margin-bottom: 30px; width: 100%; height: 777px; float: left;">
              <el-table :data="filteredQueenbeeGutlefseData" border fit :row-style="{height: '55px'}">
                  <el-table-column sortable prop="Taxonomy" label="Taxonomy" width="620"></el-table-column>
                  <el-table-column sortable prop="Animal" label="Animal" width="210"></el-table-column>
                  <el-table-column sortable prop="Tissue" label="Tissue" width="95"></el-table-column>
                  <el-table-column sortable prop="Enriched_group" label="Enriched group" width="125"></el-table-column>
                  <el-table-column sortable prop="LDA_score" label="LDA score" width="220"></el-table-column>
                  <el-table-column sortable prop="Pvalue" label="Pvalue" width="290"></el-table-column>
              </el-table>
          </div>
        </el-main>
        </template>
  </el-container>
  </template>

<script setup>
// import App from '@/App.vue'
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import Menus from '../layout/menu-item'
import
{
  getOptionHumanSkinYounger, getHumanSkintaxData, getHumanSkinlefseData,
  getHumanAirwaytaxData, getHumanAirwaylefseData, getOptionHumanAirwayYoung,
  getHumanGuttaxData, getOptionHumanGutYoung,
  getHumanGutmicrobiometaxData, getHumanGutmicrobiomelefseData, getOptionHumanGutmicrobiomeYoung,
  getRhesusagetaxData, getOptionRhesusAdult,
  getRatGutlefseData, getOptionRatGutFirst,
  getMicroGuttaxData, getMicroGutlefseData, getOptionMicroGutFirst,
  getMouseGuttaxData, getMouseGutlefseData, getOptionMouseGutFirst,
  getMacacaOraltaxData, getOptionMacacaOralFirst,
  getBlattellaGuttaxData, getOptionBlattellaGutFirst,
  getQueenbeeGutagetaxData, getQueenbeeGutlefseData, getOptionQueenbeeGutYoung
} from '@/api/microDetail'

const echarts = require('echarts/lib/echarts')
require('echarts/lib/component/title')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')
require('echarts/lib/component/visualMap')
require('echarts/lib/chart/sunburst')
const route = useRoute()
console.log('@@@@@@@@@@', getHumanSkintaxData())
// const QueenbeeGutlefseData = getQueenbeeGutlefseData()
let myChart = {}

const Data1 = () => {
  return [{
    col11: 'Dataset ID',
    col12: 'AMO-MB-001'
  },
  {
    col11: 'Accession',
    col12: 'PRJNA427175'
  },
  {
    col11: 'Database',
    col12: 'NCBI'
  },
  {
    col11: 'Publication',
    col12: 'Shift in skin microbiota of Western European women across aging'
  },
  {
    col11: 'Year',
    col12: '2018'
  },
  {
    col11: 'Pubmed',
    col12: '29791788'
  },
  {
    col11: 'Species',
    col12: 'Homo sapiens (Human)'
  },
  {
    col11: 'Tissue',
    col12: 'Skin'
  },
  {
    col11: 'Data type',
    col12: '16S rRNA gene sequence'
  },
  {
    col11: 'Sample size',
    col12: '34'
  },
  {
    col11: 'Age group',
    col12: 'Young:21-31 years old; Aged: 54-69years old'
  },
  {
    col11: 'Maximum lifespan (year)',
    col12: '122.5'
  }]
}
const Data2 = () => {
  return [{
    col11: 'Dataset ID',
    col12: 'AMO-MB-002'
  },
  {
    col11: 'Accession',
    col12: 'PRJNA559069'
  },
  {
    col11: 'Database',
    col12: 'NCBI'
  },
  {
    col11: 'Publication',
    col12: 'Airway microbiome composition correlates with lung function and arterial stiffness in an age-dependent manner'
  },
  {
    col11: 'Year',
    col12: '2019'
  },
  {
    col11: 'Pubmed',
    col12: '31770392'
  },
  {
    col11: 'Species',
    col12: 'Homo sapiens (Human)'
  },
  {
    col11: 'Tissue',
    col12: 'Airway'
  },
  {
    col11: 'Data type',
    col12: '16S rRNA gene sequence'
  },
  {
    col11: 'Sample size',
    col12: '48'
  },
  {
    col11: 'Age group',
    col12: 'Young:<40 years old; Aged: >60 years old'
  },
  {
    col11: 'Maximum lifespan (year)',
    col12: '122.5'
  }]
}
const Data3 = () => {
  return [{
    col11: 'Dataset ID',
    col12: 'AMO-MB-003'
  },
  {
    col11: 'Accession',
    col12: '16687'
  },
  {
    col11: 'Database',
    col12: 'MG-RAST'
  },
  {
    col11: 'Publication',
    col12: 'Comparative analysis of the gut microbiota in centenarians and young adults shows a common signature across genotypically non-related populations'
  },
  {
    col11: 'Year',
    col12: '2019'
  },
  {
    col11: 'Pubmed',
    col12: '30738080'
  },
  {
    col11: 'Species',
    col12: 'Homo sapiens (Human)'
  },
  {
    col11: 'Tissue',
    col12: 'Gut'
  },
  {
    col11: 'Data type',
    col12: '16S rRNA gene sequence'
  },
  {
    col11: 'Sample size',
    col12: '60'
  },
  {
    col11: 'Age group',
    col12: 'Young:28-47 years old; Aged: 97-110 years old'
  },
  {
    col11: 'Maximum lifespan (year)',
    col12: '122.5'
  }]
}
const Data4 = () => {
  return [{
    col11: 'Dataset ID',
    col12: 'AMO-MB-004'
  },
  {
    col11: 'Accession',
    col12: 'PRJNA830660'
  },
  {
    col11: 'Database',
    col12: 'NCBI'
  },
  {
    col11: 'Publication',
    col12: 'Longevity of centenarians is reflected by the gut microbiome with youth-associated signatures'
  },
  {
    col11: 'Year',
    col12: '2023'
  },
  {
    col11: 'Pubmed',
    col12: '37117794'
  },
  {
    col11: 'Species',
    col12: 'Homo sapiens (Human)'
  },
  {
    col11: 'Tissue',
    col12: 'Gut'
  },
  {
    col11: 'Data type',
    col12: '16S rRNA gene sequence'
  },
  {
    col11: 'Sample size',
    col12: '1567'
  },
  {
    col11: 'Age group',
    col12: 'Young: 20 - 69 years old; Aged: 70 - 117'
  },
  {
    col11: 'Maximum lifespan (year)',
    col12: '122.5'
  }]
}
const Data5 = () => {
  return [{
    col11: 'Dataset ID',
    col12: 'AMO-MB-005'
  },
  {
    col11: 'Accession',
    col12: 'PRJNA800766'
  },
  {
    col11: 'Database',
    col12: 'NCBI'
  },
  {
    col11: 'Publication',
    col12: 'Functional, transcriptional, and microbial shifts associated with healthy pulmonary aging in rhesus macaques'
  },
  {
    col11: 'Year',
    col12: '2022'
  },
  {
    col11: 'Pubmed',
    col12: '35443183'
  },
  {
    col11: 'Species',
    col12: 'Rhesus macaques'
  },
  {
    col11: 'Tissue',
    col12: 'Pulmonary'
  },
  {
    col11: 'Data type',
    col12: '16S rRNA gene sequence'
  },
  {
    col11: 'Sample size',
    col12: '68'
  },
  {
    col11: 'Age group',
    col12: 'Young:4.2-9.9 years old; Aged:18-29 years old'
  },
  {
    col11: 'Maximum lifespan (year)',
    col12: '40'
  }]
}
const Data6 = () => {
  return [{
    col11: 'Dataset ID',
    col12: 'AMO-MB-006'
  },
  {
    col11: 'Accession',
    col12: 'PRJEB33907'
  },
  {
    col11: 'Database',
    col12: 'NCBI'
  },
  {
    col11: 'Publication',
    col12: 'Age-related compositional and functional changes in micro-pig gut microbiome'
  },
  {
    col11: 'Year',
    col12: '2019'
  },
  {
    col11: 'Pubmed',
    col12: '31659582'
  },
  {
    col11: 'Species',
    col12: 'Micro-pig'
  },
  {
    col11: 'Tissue',
    col12: 'Gut'
  },
  {
    col11: 'Data type',
    col12: '16S rRNA gene sequence'
  },
  {
    col11: 'Sample size',
    col12: '126'
  },
  {
    col11: 'Age group',
    col12: '0-1 years old; 2-3 years old; 4-5 years old; 6-7 years old; 8-10 years old'
  },
  {
    col11: 'Maximum lifespan (year)',
    col12: '27'
  }]
}
const Data7 = () => {
  return [{
    col11: 'Dataset ID',
    col12: 'AMO-MB-007'
  },
  {
    col11: 'Accession',
    col12: 'PRJEB43096'
  },
  {
    col11: 'Database',
    col12: 'NCBI'
  },
  {
    col11: 'Publication',
    col12: 'Ageing and rejuvenation models reveal changes in key microbial communities associated with healthy ageing'
  },
  {
    col11: 'Year',
    col12: '2021'
  },
  {
    col11: 'Pubmed',
    col12: '34906228'
  },
  {
    col11: 'Species',
    col12: 'Mus musculus (Mouse)'
  },
  {
    col11: 'Tissue',
    col12: ''
  },
  {
    col11: 'Data type',
    col12: '16S rRNA gene sequence'
  },
  {
    col11: 'Sample size',
    col12: '21'
  },
  {
    col11: 'Age group',
    col12: '1 week; 4 weeks; 20 weeks; 50 weeks; 100 weeks'
  },
  {
    col11: 'Maximum lifespan (year)',
    col12: '4'
  }]
}
const Data8 = () => {
  return [{
    col11: 'Dataset ID',
    col12: 'AMO-MB-008'
  },
  {
    col11: 'Accession',
    col12: 'PRJNA516659'
  },
  {
    col11: 'Database',
    col12: 'NCBI'
  },
  {
    col11: 'Publication',
    col12: 'Oral Microbiome and Gingival Transcriptome Profiles of Ligature-Induced Periodontitis'
  },
  {
    col11: 'Year',
    col12: '2020'
  },
  {
    col11: 'Pubmed',
    col12: '32075482'
  },
  {
    col11: 'Species',
    col12: 'Macaca mulatta'
  },
  {
    col11: 'Tissue',
    col12: 'Oral'
  },
  {
    col11: 'Data type',
    col12: '16S rRNA gene sequence'
  },
  {
    col11: 'Sample size',
    col12: '84'
  },
  {
    col11: 'Age group',
    col12: 'Young: 3 years old; Adolescent: 7 years old; Adult: 12 years old; Aged: 23 years old'
  },
  {
    col11: 'Maximum lifespan (year)',
    col12: '40'
  }]
}
const Data9 = () => {
  return [{
    col11: 'Dataset ID',
    col12: 'AMO-MB-009'
  },
  {
    col11: 'Accession',
    col12: 'PRJNA675735'
  },
  {
    col11: 'Database',
    col12: 'NCBI'
  },
  {
    col11: 'Publication',
    col12: 'Age-related functional changes of intestinal flora in rats'
  },
  {
    col11: 'Year',
    col12: '2021'
  },
  {
    col11: 'Pubmed',
    col12: '34003293'
  },
  {
    col11: 'Species',
    col12: 'Rattus norvegicus (Rat)'
  },
  {
    col11: 'Tissue',
    col12: 'Gut'
  },
  {
    col11: 'Data type',
    col12: '16S rRNA gene sequence'
  },
  {
    col11: 'Sample size',
    col12: '42'
  },
  {
    col11: 'Age group',
    col12: '1 day; 1 week; 3 weeks; 7 weeks; 12 weeks; 56 weeks; 111 weeks'
  },
  {
    col11: 'Maximum lifespan (year)',
    col12: '4.2'
  }]
}
const Data10 = () => {
  return [{
    col11: 'Dataset ID',
    col12: 'AMO-MB-010'
  },
  {
    col11: 'Accession',
    col12: 'ERP002663'
  },
  {
    col11: 'Database',
    col12: 'EBI'
  },
  {
    col11: 'Publication',
    col12: 'Succession of the gut microbiota in the cockroach Blattella germanica'
  },
  {
    col11: 'Year',
    col12: '2014'
  },
  {
    col11: 'Pubmed',
    col12: '26418854'
  },
  {
    col11: 'Species',
    col12: 'Blattella germanica'
  },
  {
    col11: 'Tissue',
    col12: 'Gut'
  },
  {
    col11: 'Data type',
    col12: '16S rRNA gene sequence'
  },
  {
    col11: 'Sample size',
    col12: '14'
  },
  {
    col11: 'Age group',
    col12: 'Embryo; nymphal instar1 (n1): 2 days; nymphal instar2 (n2): 11 days; nymphal instar3 (n3):15 days; nymphal instar4 (n4): 22 days; nymphal instar5 (n5): 34 days; Adults: 68 days'
  },
  {
    col11: 'Maximum lifespan (year)',
    col12: '1'
  }]
}
const Data11 = () => {
  return [{
    col11: 'Dataset ID',
    col12: 'AMO-MB-011'
  },
  {
    col11: 'Accession',
    col12: 'PRJNA438524'
  },
  {
    col11: 'Database',
    col12: 'NCBI'
  },
  {
    col11: 'Publication',
    col12: 'The queen’s gut refines with age: longevity phenotypes in a social insect model'
  },
  {
    col11: 'Year',
    col12: '2018'
  },
  {
    col11: 'Pubmed',
    col12: '29914555'
  },
  {
    col11: 'Species',
    col12: 'Queen bee'
  },
  {
    col11: 'Tissue',
    col12: 'Gut'
  },
  {
    col11: 'Data type',
    col12: '16S rRNA gene sequence'
  },
  {
    col11: 'Sample size',
    col12: '63'
  },
  {
    col11: 'Age group',
    col12: 'Young: 4-6 months; Aged: 16-18 months'
  },
  {
    col11: 'Maximum lifespan (year)',
    col12: '8'
  }]
}

const isHoveringtax = ref(false)
const isHoveringlefse = ref(false)
const isHoveringbar = ref(false)
const isHoveringalpha = ref(false)
const isHoveringbeta = ref(false)

// const caption = 'XXXXXXXXXXXXXXXXXXXXXXXX'getHumanSkinlefseData()

const taxsearchKeyword = ref('')
const lefsesearchKeyword = ref('')

const filteredHumanSkintaxData = computed(() => {
  if (!taxsearchKeyword.value) {
    return getHumanSkintaxData()
  }
  const keyword = taxsearchKeyword.value.toLowerCase()
  return getHumanSkintaxData().filter(item => {
    return (
      item.Taxonomy.toLowerCase().includes(keyword) ||
      item.Animal.toLowerCase().includes(keyword) ||
      item.Tissue.toLowerCase().includes(keyword) ||
      item.r_value.toString().includes(keyword) ||
      item.p_value.toString().includes(keyword)
    )
  })
})
const filteredHumanSkinlefseData = computed(() => {
  if (!lefsesearchKeyword.value) {
    return getHumanSkinlefseData()
  }
  const keyword = lefsesearchKeyword.value.toLowerCase()
  return getHumanSkinlefseData().filter(item => {
    return (
      item.Taxonomy.toLowerCase().includes(keyword) ||
      item.Animal.toLowerCase().includes(keyword) ||
      item.Tissue.toLowerCase().includes(keyword) ||
      item.Enriched_group.toString().includes(keyword) ||
      item.LDA_score.toString().includes(keyword) ||
      item.Pvalue.toString().includes(keyword)
    )
  })
})

const filteredHumanAirwaytaxData = computed(() => {
  if (!taxsearchKeyword.value) {
    return getHumanAirwaytaxData()
  }
  const keyword = taxsearchKeyword.value.toLowerCase()
  return getHumanAirwaytaxData().filter(item => {
    return (
      item.Taxonomy.toLowerCase().includes(keyword) ||
      item.Animal.toLowerCase().includes(keyword) ||
      item.Tissue.toLowerCase().includes(keyword) ||
      item.r_value.toString().includes(keyword) ||
      item.p_value.toString().includes(keyword)
    )
  })
})
const filteredHumanAirwaylefseData = computed(() => {
  if (!lefsesearchKeyword.value) {
    return getHumanAirwaylefseData()
  }
  const keyword = lefsesearchKeyword.value.toLowerCase()
  return getHumanAirwaylefseData().filter(item => {
    return (
      item.Taxonomy.toLowerCase().includes(keyword) ||
      item.Animal.toLowerCase().includes(keyword) ||
      item.Tissue.toLowerCase().includes(keyword) ||
      item.Enriched_group.toString().includes(keyword) ||
      item.LDA_score.toString().includes(keyword) ||
      item.Pvalue.toString().includes(keyword)
    )
  })
})

const filteredHumanGuttaxData = computed(() => {
  if (!taxsearchKeyword.value) {
    return getHumanGuttaxData()
  }
  const keyword = taxsearchKeyword.value.toLowerCase()
  return getHumanGuttaxData().filter(item => {
    return (
      item.Taxonomy.toLowerCase().includes(keyword) ||
      item.Animal.toLowerCase().includes(keyword) ||
      item.Tissue.toLowerCase().includes(keyword) ||
      item.r_value.toString().includes(keyword) ||
      item.p_value.toString().includes(keyword)
    )
  })
})

const filteredHumanGutmicrobiometaxData = computed(() => {
  if (!taxsearchKeyword.value) {
    return getHumanGutmicrobiometaxData()
  }
  const keyword = taxsearchKeyword.value.toLowerCase()
  return getHumanGutmicrobiometaxData().filter(item => {
    return (
      item.Taxonomy.toLowerCase().includes(keyword) ||
      item.Animal.toLowerCase().includes(keyword) ||
      item.Tissue.toLowerCase().includes(keyword) ||
      item.r_value.toString().includes(keyword) ||
      item.p_value.toString().includes(keyword)
    )
  })
})
const filteredHumanGutmicrobiomelefseData = computed(() => {
  if (!lefsesearchKeyword.value) {
    return getHumanGutmicrobiomelefseData()
  }
  const keyword = lefsesearchKeyword.value.toLowerCase()
  return getHumanGutmicrobiomelefseData().filter(item => {
    return (
      item.Taxonomy.toLowerCase().includes(keyword) ||
      item.Animal.toLowerCase().includes(keyword) ||
      item.Tissue.toLowerCase().includes(keyword) ||
      item.Enriched_group.toString().includes(keyword) ||
      item.LDA_score.toString().includes(keyword) ||
      item.Pvalue.toString().includes(keyword)
    )
  })
})

const filteredRhesustaxData = computed(() => {
  if (!taxsearchKeyword.value) {
    return getRhesusagetaxData()
  }
  const keyword = taxsearchKeyword.value.toLowerCase()
  return getRhesusagetaxData().filter(item => {
    return (
      item.Taxonomy.toLowerCase().includes(keyword) ||
      item.Animal.toLowerCase().includes(keyword) ||
      item.Tissue.toLowerCase().includes(keyword) ||
      item.r_value.toString().includes(keyword) ||
      item.p_value.toString().includes(keyword)
    )
  })
})

const filteredRatGutlefseData = computed(() => {
  if (!lefsesearchKeyword.value) {
    return getRatGutlefseData()
  }
  const keyword = lefsesearchKeyword.value.toLowerCase()
  return getRatGutlefseData().filter(item => {
    return (
      item.Taxonomy.toLowerCase().includes(keyword) ||
      item.Animal.toLowerCase().includes(keyword) ||
      item.Tissue.toLowerCase().includes(keyword) ||
      item.Enriched_group.toString().includes(keyword) ||
      item.LDA_score.toString().includes(keyword) ||
      item.Pvalue.toString().includes(keyword)
    )
  })
})

const filteredMicroGuttaxData = computed(() => {
  if (!taxsearchKeyword.value) {
    return getMicroGuttaxData()
  }
  const keyword = taxsearchKeyword.value.toLowerCase()
  return getMicroGuttaxData().filter(item => {
    return (
      item.Taxonomy.toLowerCase().includes(keyword) ||
      item.Animal.toLowerCase().includes(keyword) ||
      item.Tissue.toLowerCase().includes(keyword) ||
      item.r_value.toString().includes(keyword) ||
      item.p_value.toString().includes(keyword)
    )
  })
})
const filteredMicroGutlefseData = computed(() => {
  if (!lefsesearchKeyword.value) {
    return getMicroGutlefseData()
  }
  const keyword = lefsesearchKeyword.value.toLowerCase()
  return getMicroGutlefseData().filter(item => {
    return (
      item.Taxonomy.toLowerCase().includes(keyword) ||
      item.Animal.toLowerCase().includes(keyword) ||
      item.Tissue.toLowerCase().includes(keyword) ||
      item.Enriched_group.toString().includes(keyword) ||
      item.LDA_score.toString().includes(keyword) ||
      item.Pvalue.toString().includes(keyword)
    )
  })
})

const filteredMouseGuttaxData = computed(() => {
  if (!taxsearchKeyword.value) {
    return getMouseGuttaxData()
  }
  const keyword = taxsearchKeyword.value.toLowerCase()
  return getMouseGuttaxData().filter(item => {
    return (
      item.Taxonomy.toLowerCase().includes(keyword) ||
      item.Animal.toLowerCase().includes(keyword) ||
      item.Tissue.toLowerCase().includes(keyword) ||
      item.r_value.toString().includes(keyword) ||
      item.p_value.toString().includes(keyword)
    )
  })
})
const filteredMouseGutlefseData = computed(() => {
  if (!lefsesearchKeyword.value) {
    return getMouseGutlefseData()
  }
  const keyword = lefsesearchKeyword.value.toLowerCase()
  return getMouseGutlefseData().filter(item => {
    return (
      item.Taxonomy.toLowerCase().includes(keyword) ||
      item.Animal.toLowerCase().includes(keyword) ||
      item.Tissue.toLowerCase().includes(keyword) ||
      item.Enriched_group.toString().includes(keyword) ||
      item.LDA_score.toString().includes(keyword) ||
      item.Pvalue.toString().includes(keyword)
    )
  })
})

const filteredMacacaOraltaxData = computed(() => {
  if (!taxsearchKeyword.value) {
    return getMacacaOraltaxData()
  }
  const keyword = taxsearchKeyword.value.toLowerCase()
  return getMacacaOraltaxData().filter(item => {
    return (
      item.Taxonomy.toLowerCase().includes(keyword) ||
      item.Animal.toLowerCase().includes(keyword) ||
      item.Tissue.toLowerCase().includes(keyword) ||
      item.r_value.toString().includes(keyword) ||
      item.p_value.toString().includes(keyword)
    )
  })
})

const filteredBlattellaGuttaxData = computed(() => {
  if (!taxsearchKeyword.value) {
    return getBlattellaGuttaxData()
  }
  const keyword = taxsearchKeyword.value.toLowerCase()
  return getBlattellaGuttaxData().filter(item => {
    return (
      item.Taxonomy.toLowerCase().includes(keyword) ||
      item.Animal.toLowerCase().includes(keyword) ||
      item.Tissue.toLowerCase().includes(keyword) ||
      item.r_value.toString().includes(keyword) ||
      item.p_value.toString().includes(keyword)
    )
  })
})

const filteredQueenbeeGuttaxData = computed(() => {
  if (!taxsearchKeyword.value) {
    return getQueenbeeGutagetaxData()
  }
  const keyword = taxsearchKeyword.value.toLowerCase()
  return getQueenbeeGutagetaxData().filter(item => {
    return (
      item.Taxonomy.toLowerCase().includes(keyword) ||
      item.Animal.toLowerCase().includes(keyword) ||
      item.Tissue.toLowerCase().includes(keyword) ||
      item.r_value.toString().includes(keyword) ||
      item.p_value.toString().includes(keyword)
    )
  })
})
const filteredQueenbeeGutlefseData = computed(() => {
  if (!lefsesearchKeyword.value) {
    return getQueenbeeGutlefseData()
  }
  const keyword = lefsesearchKeyword.value.toLowerCase()
  return getQueenbeeGutlefseData().filter(item => {
    return (
      item.Taxonomy.toLowerCase().includes(keyword) ||
      item.Animal.toLowerCase().includes(keyword) ||
      item.Tissue.toLowerCase().includes(keyword) ||
      item.Enriched_group.toString().includes(keyword) ||
      item.LDA_score.toString().includes(keyword) ||
      item.Pvalue.toString().includes(keyword)
    )
  })
})
if (route.query.Species + route.query.Tissue === 'HumanSkin (forehead)') {
  onMounted(() => {
    const option = getOptionHumanSkinYounger()
    myChart = echarts.init(document.getElementById('graphHumanSkinYounger'))
    myChart.setOption(option)
  })
}
if (route.query.Species + route.query.Tissue === 'HumanAirway') {
  onMounted(() => {
    const option = getOptionHumanAirwayYoung()
    myChart = echarts.init(document.getElementById('graphHumanAirwayYoung'))
    myChart.setOption(option)
  })
}
if (route.query.Species + route.query.Tissue === 'HumanGut') {
  onMounted(() => {
    const option = getOptionHumanGutYoung()
    myChart = echarts.init(document.getElementById('graphHumanGutyoung'))
    myChart.setOption(option)
  })
}
if (route.query.Species + route.query.Tissue === 'HumanGut microbiome') {
  onMounted(() => {
    const option = getOptionHumanGutmicrobiomeYoung()
    myChart = echarts.init(document.getElementById('graphHumanGutmicrobiomeyoung'))
    myChart.setOption(option)
  })
}
if (route.query.Species + route.query.Tissue === 'Rhesus macaquesPulmonary') {
  onMounted(() => {
    const option = getOptionRhesusAdult()
    myChart = echarts.init(document.getElementById('graphRhesusAdult'))
    myChart.setOption(option)
  })
}
if (route.query.Species + route.query.Tissue === 'Micro-pigGut') {
  onMounted(() => {
    const option = getOptionMicroGutFirst()
    myChart = echarts.init(document.getElementById('graphMicropigFirst'))
    myChart.setOption(option)
  })
}
if (route.query.Species + route.query.Tissue === 'MouseGut') {
  onMounted(() => {
    const option = getOptionMouseGutFirst()
    myChart = echarts.init(document.getElementById('graphMouseGutFirst'))
    myChart.setOption(option)
  })
}
if (route.query.Species + route.query.Tissue === 'Macaca mulattaOral') {
  onMounted(() => {
    const option = getOptionMacacaOralFirst()
    myChart = echarts.init(document.getElementById('graphMacacaOralFirst'))
    myChart.setOption(option)
  })
}
if (route.query.Species + route.query.Tissue === 'RatGut') {
  onMounted(() => {
    const option = getOptionRatGutFirst()
    myChart = echarts.init(document.getElementById('graphRatGutFirst'))
    myChart.setOption(option)
  })
}
if (route.query.Species + route.query.Tissue === 'Blattella germanicaGut') {
  onMounted(() => {
    const option = getOptionBlattellaGutFirst()
    myChart = echarts.init(document.getElementById('graphBlattellaGutFirst'))
    myChart.setOption(option)
  })
}
if (route.query.Species + route.query.Tissue === 'Queen beeGut') {
  onMounted(() => {
    const option = getOptionQueenbeeGutYoung()
    myChart = echarts.init(document.getElementById('graphQueenGutyoung'))
    myChart.setOption(option)
  })
}

</script>
<style scoped src="../styles/dataset.css">

/* .el-table .cell {
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-all;
  line-height: 30px;
  padding: 5px 12px;
  text-align: center;
} */
</style>
