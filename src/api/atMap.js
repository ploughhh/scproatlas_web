import request from './request'

export const atRate = (params) => {
  return request({
    url: '/atMap',
    params
  })
}

export const getMark = (params) => {
  return request({
    url: '/atMarker',
    params
  })
}

export const getSeries = (data) => {
  const series = []
  console.log('!!!!!!atMap.js中的data', data)
  // if (data.Middle !== 'None') {
  //   series.push({
  //     name: 'Mid',
  //     type: 'bar',
  //     emphasis: {
  //       focus: 'series'
  //     },
  //     data: data.Middle.split(';'),
  //     itemStyle: {
  //       color: '#CC3300'
  //     }
  //   })
  // }
  // if (data.Old !== 'None') {
  //   series.push({
  //     name: 'Old',
  //     type: 'bar',
  //     emphasis: {
  //       focus: 'series'
  //     },
  //     data: data.Old.split(';'),
  //     itemStyle: {
  //       color: '#333366'
  //     }
  //   })
  // }
  return series
}
