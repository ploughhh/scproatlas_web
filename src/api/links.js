import request from './request'

export const getLinks = (params) => {
  return request({
    url: '/links',
    params
  })
}

export const getcLinks = (params) => {
  return request({
    url: '/interaction',
    params
  })
}


export const getLCol = () => {
  return ['Source', 'Target', 'Interacting_pair', 'Category', 'Source_type', 'Target_type']
}
