import request from './request'

export const getproteinInfo = (params) => {
  return request({
    url: '/proteinInfo',
    params
  })
}
