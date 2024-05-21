import request from './request'

export const getsinglecellInfo = (params) => {
  return request({
    url: '/singlecellInfo',
    params
  })
}
