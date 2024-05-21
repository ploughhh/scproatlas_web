import request from './request'

export const getspeciesmerges = (params) => {
  return request({
    url: '/speciesmerges',
    params
  })
}
