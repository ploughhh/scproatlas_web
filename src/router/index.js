import { createRouter, createWebHashHistory } from 'vue-router'
import FileList from '../components/FileList.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../layout')
  },
  {
    path: '/newSearch',
    name: 'newSearch',
    component: () => import('../components/newSearch.vue')
  },
  {
    path: '/speciessearchResult',
    name: 'speciessearchResult',
    component: () => import('../components/speciessearchResult.vue')
  },
  {
    path: '/microbiomeInfo',
    name: 'microbiomeInfo',
    component: () => import('../components/microbiomeInfo.vue')
  },
  {
    path: '/mitochondrialInfo',
    name: 'mitochondrialInfo',
    component: () => import('../components/mitochondrialInfo.vue')
  },
  {
    path: '/mitochondrialDetail',
    name: 'mitochondrialDetail',
    component: () => import('../components/mitochondrialDetail.vue')
  },
  {
    path: '/proteinInfo',
    name: 'proteinInfo',
    component: () => import('../components/proteinInfo.vue')
  },
  {
    path: '/interventions',
    name: 'interventions',
    component: () => import('../components/interventions.vue')
  },
  {
    path: '/metaInfo',
    name: 'metaInfo',
    component: () => import('../components/metaInfo.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/TCRInfo',
    name: 'TCRInfo',
    component: () => import('../components/TCRInfo.vue')
  },
  {
    path: '/singlecellInfo',
    name: 'singlecellInfo',
    component: () => import('../components/singlecellInfo.vue')
  },
  {
    path: '/singlecellDetail',
    name: 'singlecellDetail',
    component: () => import('../components/singlecellDetail.vue')
  },
  {
    path: '/epigeneticDetail',
    name: 'epigeneticDetail',
    component: () => import('../components/epigeneticDetail.vue')
  },
  // {
  //   path: '/detail',
  //   name: 'detail',
  //   component: () => import('../components/Detail.vue')
  // },
  {
    path: '/microDetail',
    name: 'microDetail',
    component: () => import('../components/microDetail.vue')
  },
  {
    path: '/geneSearchResult',
    name: 'geneSearchResult',
    component: () => import('../components/geneSearchResult.vue')
  },
  {
    path: '/metaDetail',
    name: 'metaDetail',
    component: () => import('../components/metaDetail.vue')
  },
  {
    path: '/proteinDetail',
    name: 'proteinDetail',
    component: () => import('../components/proteinDetail.vue')
  },
  {
    path: '/TCRDetail',
    name: 'TCRDetail',
    component: () => import('../components/TCRDetail.vue')
  },
  {
    path: '/dataset',
    name: 'dataset',
    component: () => import('../views/dataset.vue')
  },
  {
    path: '/DataArchive',
    name: 'DataArchive',
    component: () => import('../views/DataArchive.vue')
  },
  {
    path: '/immune',
    name: 'immune',
    component: () => import('../components/immune.vue')
  },
  {
    path: '/lifespan',
    name: 'lifespan',
    component: () => import('../components/lifespan.vue')
  },
  {
    path: '/integration',
    name: 'integration',
    component: () => import('../components/integration.vue')
  },
  // {
  //   path: '/genomic',
  //   name: 'genomic',
  //   component: () => import('../components/genomic.vue')
  // },
  {
    path: '/cell_type_viz',
    name: 'cell_type_viz',
    component: () => import('../components/cell_type_viz.vue')
  },
  {
    path: '/markerviz',
    name: 'markerviz',
    component: () => import('../components/markerviz.vue')
  },
  {
    path: '/neighborhood',
    name: 'neighborhood',
    component: () => import('../components/neighborhood_analysis.vue')
  },
  {
    path: '/neighborhoodnet',
    name: 'neighborhoodnet',
    component: () => import('../components/neighborhoodnets.vue')
  },
  {
    path: '/proximity',
    name: 'proximity',
    component: () => import('../components/proximity.vue')
  },
  {
    path: '/multimo',
    name: 'multimo',
    component: () => import('../components/multimo.vue')
  },
  {
    path: '/svg',
    name: 'svg',
    component: () => import('../components/svg.vue')
  },
  {
    path: '/dataset_statistics',
    name: 'dataset_statistics',
    component: () => import('../components/dataset_statistics.vue')
  },
  {
    path: '/genomicDetail',
    name: 'genomicDetail',
    component: () => import('../components/genomicDetail.vue')
  },
  {
    path: '/epigenetic',
    name: 'epigenetic',
    component: () => import('../components/epigenetic.vue')
  },
  {
    path: '/Help',
    name: 'Help',
    component: () => import('../views/Help.vue')
  },
  {
    path: '/Statistic',
    name: 'StatisticPage',
    component: () => import('../views/StatisticPage.vue')
  },
  {
    path: '/Download',
    name: 'Download',
    component: () => import('../views/downLoad.vue')
  },
  {
    path: '/searchResult',
    name: 'searchResult',
    component: () => import('../components/searchResult.vue')
  },
  {
    path: '/taxonomyDetail',
    name: 'taxonomyDetail',
    component: () => import('../components/taxonomyDetail.vue')
  },
  {
    path: '/file',
    name: 'file',
    component: FileList
  },
  {
    path: '/cci',
    name: 'cci',
    component: () => import('../components/cci.vue')
  },
  {
    path: '/wholePipeline',
    name: 'wholePipeline',
    component: () => import('../views/wholePipeline.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  base: '/AgeAnnoMO/'
})

export default router
