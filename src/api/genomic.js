import request from './request'

export const getgenomic = (params) => {
  return request({
    url: '/genomic',
    params
  })
}

export const getgenomicde = (params) => {
  return request({
    url: '/genomicde',
    params
  })
}

export const getgenomiceqtl = (params) => {
  return request({
    url: '/genomiceqtl',
    params
  })
}

export const getgenomicvep = (params) => {
  return request({
    url: '/genomicvep',
    params
  })
}
