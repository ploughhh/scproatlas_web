import request from './request'

export const getdatasetData = (params) => {
  return request({
    url: '/dataset',
    params
  })
}
