import { atRate } from './atMap.js'
export const getCat = () => {
  return ['old vs mid', 'mid vs youth', 'old vs youth', 'supold vs youth', 'supold vs mid', 'supold vs old']
}

// export const getCell = async (param) => {
//   console.log(param)
//   const res = await getRate(param)
//   const temp = res.data[0].Cell_types.split(';')
//   for (let i = 0; i < temp.length; i++) {
//     temp[i] = temp[i] + ' cell'
//   }
//   return temp
// }

export const atCell = async (param) => {
  console.log(param)
  const res = await atRate(param)
  const temp = res.data[0].Cell_types.split(';')
  return temp
}

export const getTissue = () => {
  return ['Bladder', 'Hypothalamus', 'Blood', 'Bone-Marrow', 'Brain', 'Heart', 'Intestine', 'Kidneys', 'Liver', 'Lung', 'Oesophagus', 'Pancreas', 'Prostate', 'Retina', 'Skeletal-Muscle', 'Skin', 'Stomach', 'Testis']
}

export const getGroup = () => {
  return ['youth', 'old', 'mid', 'supold']
}

export const atTissue = () => {
  return ['Adipose-Visceral', 'Artery-Aorta', 'Brain', 'Colon-Sigmoid', 'Colon-Transverse', 'Esophagus-Muscularis', 'Lung', 'Pancreas', 'Skeletal-Muscle', 'Skin', 'Stomach']
}
