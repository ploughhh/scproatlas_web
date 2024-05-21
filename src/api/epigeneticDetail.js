import request from './request'

export const getepigeneticDetail = (params) => {
  return request({
    url: '/epigeneticDetail',
    params
  })
}
