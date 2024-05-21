import request from './request'

export const getsinglecells = (params) => {
  return request({
    url: '/singlecellDetail',
    params
  })
}
// postman

export const getSCtitle = () => {
  return ['MouseLiver', 'MouseLung']
}

// export const getPWcol = () => {
//   return ['Tissue', 'Category', 'Cell_type', 'Ontology', 'Pathway_name', 'GOID', 'Pvalue', 'Padj', 'Qvalue', 'Gene_ratio']
// }

// export const geData = (data) => {
//   for (const i of data) {
//     i.Gene_symbol = i.Gene_symbol.split('/')
//   }
//   return data
// }
