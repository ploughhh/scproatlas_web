import request from './request'

export const getmicrototalTableData = (params) => {
  return request({
    url: '/micrototalTable',
    params
  })
}
