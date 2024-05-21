import request from './request'

export const getintegrationData1 = (params) => {
  return request({
    url: '/integration',
    params
  })
}

export const getintegrationData2 = (params) => {
  return request({
    url: '/prometas',
    params
  })
}