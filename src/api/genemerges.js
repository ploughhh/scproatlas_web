import request from './request'

export const genemerges = (params) => {
  return request({
    url: '/genemerges',
    params
  })
}
