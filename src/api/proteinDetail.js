import request from './request'

export const getproteinDetail = (params) => {
  return request({
    url: '/proteinDetail',
    params
  })
}

export const getproteincor = (params) => {
  return request({
    url: '/proteincor',
    params
  })
}

export const getproteindiff = (params) => {
  return request({
    url: '/proteindiff',
    params
  })
}



export const Num1echartsData = () => [
  {
    "#node1": 'Rps10',
    node2: 'Rps3',
    combined_score: '0.999'
  },
  {
    "#node1": 'Grb2',
    node2: 'Mapk3',
    combined_score: '0.998'
  },
  {
    "#node1": 'Sdc4',
    node2: 'Sdcbp',
    combined_score: '0.998'
  },
  {
    "#node1": 'Rpl37',
    node2: 'Rps3',
    combined_score: '0.996'
  },
  {
    "#node1": 'Hsp90aa1',
    node2: 'Mapk3',
    combined_score: '0.991'
  },
  {
    "#node1": 'Rpl37',
    node2: 'Rps10',
    combined_score: '0.973'
  },
  {
    "#node1": 'Adh1',
    node2: 'Aldh2',
    combined_score: '0.967'
  },
  {
    "#node1": 'Adh7',
    node2: 'Aldh2',
    combined_score: '0.965'
  },
  {
    "#node1": 'Akt2',
    node2: 'Hsp90aa1',
    combined_score: '0.965'
  },
  {
    "#node1": 'Acss1',
    node2: 'Cs',
    combined_score: '0.956'
  },
  {
    "#node1": 'Dcn',
    node2: 'Sdc4',
    combined_score: '0.953'
  },
  {
    "#node1": 'Eif4ebp1',
    node2: 'Mapk3',
    combined_score: '0.944'
  },
  {
    "#node1": 'Acss1',
    node2: 'Aldh2',
    combined_score: '0.943'
  },
  {
    "#node1": 'Btk',
    node2: 'Grb2',
    combined_score: '0.931'
  },
  {
    "#node1": 'Akt2',
    node2: 'Mapk3',
    combined_score: '0.896'
  },
  {
    "#node1": 'Mapk3',
    node2: 'Sqstm1',
    combined_score: '0.896'
  },
  {
    "#node1": 'Clu',
    node2: 'Pon1',
    combined_score: '0.893'
  },
  {
    "#node1": 'Clu',
    node2: 'Vtn',
    combined_score: '0.893'
  },
  {
    "#node1": 'Eif4a2',
    node2: 'Eif4ebp1',
    combined_score: '0.89'
  },
  {
    "#node1": 'Eif5a',
    node2: 'Rps3',
    combined_score: '0.885'
  },
  {
    "#node1": 'Adh1',
    node2: 'Aldh1a1',
    combined_score: '0.883'
  },
  {
    "#node1": 'Akt2',
    node2: 'Eif4ebp1',
    combined_score: '0.862'
  },
  {
    "#node1": 'Adh7',
    node2: 'Aldh1a1',
    combined_score: '0.853'
  },
  {
    "#node1": 'Aldh2',
    node2: 'Glul',
    combined_score: '0.833'
  },
  {
    "#node1": 'Hsp90aa1',
    node2: 'Rps3',
    combined_score: '0.82'
  },
  {
    "#node1": 'B2m',
    node2: 'Grb2',
    combined_score: '0.818'
  },
  {
    "#node1": 'Sdc4',
    node2: 'Vtn',
    combined_score: '0.808'
  },
  {
    "#node1": 'Akt2',
    node2: 'Grb2',
    combined_score: '0.806'
  },
  {
    "#node1": 'Btk',
    node2: 'Plek',
    combined_score: '0.801'
  },
  {
    "#node1": 'Adh1',
    node2: 'Gstm1',
    combined_score: '0.794'
  },
  {
    "#node1": 'Pex5',
    node2: 'Sqstm1',
    combined_score: '0.763'
  },
  {
    "#node1": 'B2m',
    node2: 'Btk',
    combined_score: '0.754'
  },
  {
    "#node1": 'Agpat2',
    node2: 'Gpd1',
    combined_score: '0.75'
  },
  {
    "#node1": 'Fth1',
    node2: 'Rps3',
    combined_score: '0.746'
  },
  {
    "#node1": 'Mapk3',
    node2: 'Sdc4',
    combined_score: '0.745'
  },
  {
    "#node1": 'Arhgap1',
    node2: 'Arhgap18',
    combined_score: '0.743'
  },
  {
    "#node1": 'Hsp90aa1',
    node2: 'Vtn',
    combined_score: '0.731'
  },
  {
    "#node1": 'Adh7',
    node2: 'Gstm1',
    combined_score: '0.724'
  },
  {
    "#node1": 'Akt2',
    node2: 'Plek',
    combined_score: '0.723'
  },
  {
    "#node1": 'Eif4a2',
    node2: 'Rps3',
    combined_score: '0.716'
  },
  {
    "#node1": 'Fermt3',
    node2: 'Plek',
    combined_score: '0.712'
  },
  {
    "#node1": 'Adcy9',
    node2: 'Akt2',
    combined_score: '0.657'
  },
  {
    "#node1": 'Adh1',
    node2: 'Adh7',
    combined_score: '0.653'
  },
  {
    "#node1": 'Akt2',
    node2: 'Trap1',
    combined_score: '0.643'
  },
  {
    "#node1": 'C3',
    node2: 'Clu',
    combined_score: '0.643'
  },
  {
    "#node1": 'Polb',
    node2: 'Rps3',
    combined_score: '0.642'
  },
  {
    "#node1": 'Dcn',
    node2: 'Vtn',
    combined_score: '0.631'
  },
  {
    "#node1": 'Igfbp2',
    node2: 'Vtn',
    combined_score: '0.619'
  },
  {
    "#node1": 'Grb2',
    node2: 'Plek',
    combined_score: '0.611'
  },
  {
    "#node1": 'Cs',
    node2: 'Hsp90aa1',
    combined_score: '0.603'
  },
  {
    "#node1": 'Eif4ebp1',
    node2: 'Sqstm1',
    combined_score: '0.603'
  },
  {
    "#node1": 'Irak4',
    node2: 'Sqstm1',
    combined_score: '0.596'
  },
  {
    "#node1": 'B2m',
    node2: 'Psmb10',
    combined_score: '0.591'
  },
  {
    "#node1": 'Hsp90aa1',
    node2: 'Sqstm1',
    combined_score: '0.551'
  },
  {
    "#node1": 'C3',
    node2: 'Vtn',
    combined_score: '0.55'
  },
  {
    "#node1": 'B2m',
    node2: 'Fth1',
    combined_score: '0.544'
  },
  {
    "#node1": 'Atp7a',
    node2: 'Eif4ebp1',
    combined_score: '0.538'
  },
  {
    "#node1": 'Mapk3',
    node2: 'Trap1',
    combined_score: '0.534'
  },
  {
    "#node1": 'Grb2',
    node2: 'Hsp90aa1',
    combined_score: '0.531'
  },
  {
    "#node1": 'Pon1',
    node2: 'Vtn',
    combined_score: '0.528'
  },
  {
    "#node1": 'Fabp4',
    node2: 'Med1',
    combined_score: '0.527'
  },
  {
    "#node1": 'Jund',
    node2: 'Mapk3',
    combined_score: '0.517'
  },
  {
    "#node1": 'Eif5a',
    node2: 'Sdcbp',
    combined_score: '0.516'
  },
  {
    "#node1": 'C3',
    node2: 'Itfg1',
    combined_score: '0.511'
  },
  {
    "#node1": 'Eif5a',
    node2: 'Rps10',
    combined_score: '0.506'
  },
  {
    "#node1": 'Btk',
    node2: 'Hsp90aa1',
    combined_score: '0.494'
  },
  {
    "#node1": 'Eif4ebp1',
    node2: 'Plek',
    combined_score: '0.491'
  },
  {
    "#node1": 'Eif4ebp1',
    node2: 'Hsp90aa1',
    combined_score: '0.491'
  },
  {
    "#node1": 'Terf2',
    node2: 'Tpp1',
    combined_score: '0.49'
  },
  {
    "#node1": 'B2m',
    node2: 'Clu',
    combined_score: '0.484'
  },
  {
    "#node1": 'Agpat2',
    node2: 'Fabp4',
    combined_score: '0.483'
  },
  {
    "#node1": 'Eif4a2',
    node2: 'Eif5a',
    combined_score: '0.481'
  },
  {
    "#node1": 'Fermt3',
    node2: 'Vtn',
    combined_score: '0.47'
  },
  {
    "#node1": 'C1qc',
    node2: 'Plek',
    combined_score: '0.466'
  },
  {
    "#node1": 'Eif4a2',
    node2: 'Rps10',
    combined_score: '0.466'
  },
  {
    "#node1": 'Mapk3',
    node2: 'Plek',
    combined_score: '0.463'
  },
  {
    "#node1": 'Hsp90aa1',
    node2: 'Ssr1',
    combined_score: '0.46'
  },
  {
    "#node1": 'B2m',
    node2: 'Hsp90aa1',
    combined_score: '0.458'
  },
  {
    "#node1": 'Grb2',
    node2: 'Txnip',
    combined_score: '0.458'
  },
  {
    "#node1": 'C3',
    node2: 'Pon1',
    combined_score: '0.457'
  }
]
export const Num2echartsData = () => [{
  "#node1": 'Fgf2',
  node2: 'Gm3839',
  combined_score: '0.634'
},
{
  "#node1": 'Gm3839',
  node2: 'Slc2a4',
  combined_score: '0.52'
}]
export const Num3echartsData = () => [  {
  "#node1": 'B0001.4',
  node2: 'F25H9.6',
  combined_score: '0.402'
},
{
  "#node1": 'B0001.4',
  node2: 'T05G5.5',
  combined_score: '0.405'
},
{
  "#node1": 'B0001.4',
  node2: 'F52C9.3',
  combined_score: '0.405'
},
{
  "#node1": 'B0001.4',
  node2: 'B0286.3',
  combined_score: '0.41'
},
{
  "#node1": 'B0001.4',
  node2: 'apm-1',
  combined_score: '0.413'
},
{
  "#node1": 'B0001.4',
  node2: 'bcat-1',
  combined_score: '0.417'
},
{
  "#node1": 'B0001.4',
  node2: 'src-1',
  combined_score: '0.419'
},
{
  "#node1": 'B0001.4',
  node2: 'Y47G6A.5',
  combined_score: '0.419'
},
{
  "#node1": 'B0001.4',
  node2: 'sup-17',
  combined_score: '0.425'
},
{
  "#node1": 'B0001.4',
  node2: 'F38B6.4',
  combined_score: '0.425'
},
{
  "#node1": 'B0001.4',
  node2: 'hda-5',
  combined_score: '0.428'
},
{
  "#node1": 'B0001.4',
  node2: 'C06A8.6',
  combined_score: '0.439'
},
{
  "#node1": 'B0001.4',
  node2: 'F13C5.2',
  combined_score: '0.443'
},
{
  "#node1": 'B0001.4',
  node2: 'act-5',
  combined_score: '0.45'
},
{
  "#node1": 'B0001.4',
  node2: 'F13E6.4',
  combined_score: '0.452'
},
{
  "#node1": 'B0001.4',
  node2: 'C52B11.5',
  combined_score: '0.455'
},
{
  "#node1": 'B0001.4',
  node2: 'hda-6',
  combined_score: '0.461'
},
{
  "#node1": 'B0001.4',
  node2: 'T22B11.3',
  combined_score: '0.462'
},
{
  "#node1": 'B0001.4',
  node2: 'sec-6',
  combined_score: '0.467'
},
{
  "#node1": 'B0001.4',
  node2: 'rpc-1',
  combined_score: '0.47'
},
{
  "#node1": 'B0001.4',
  node2: 'hum-5',
  combined_score: '0.473'
},
{
  "#node1": 'B0001.4',
  node2: 'hum-8',
  combined_score: '0.482'
},
{
  "#node1": 'B0001.4',
  node2: 'ndk-1',
  combined_score: '0.482'
},
{
  "#node1": 'B0001.4',
  node2: 'age-1',
  combined_score: '0.485'
},
{
  "#node1": 'B0001.4',
  node2: 'alh-13',
  combined_score: '0.49'
},
{
  "#node1": 'B0001.4',
  node2: 'daf-1',
  combined_score: '0.494'
},
{
  "#node1": 'B0001.4',
  node2: 'skr-20',
  combined_score: '0.512'
},
{
  "#node1": 'B0001.4',
  node2: 'skr-3',
  combined_score: '0.512'
},
{
  "#node1": 'B0001.4',
  node2: 'skr-8',
  combined_score: '0.512'
},
{
  "#node1": 'B0001.4',
  node2: 'dpyd-1',
  combined_score: '0.513'
},
{
  "#node1": 'B0001.4',
  node2: 'kgb-1',
  combined_score: '0.514'
},
{
  "#node1": 'B0001.4',
  node2: 'C49C3.10',
  combined_score: '0.514'
},
{
  "#node1": 'B0001.4',
  node2: 'skr-2',
  combined_score: '0.519'
},
{
  "#node1": 'B0001.4',
  node2: 'gpd-3',
  combined_score: '0.522'
},
{
  "#node1": 'B0001.4',
  node2: 'skr-18',
  combined_score: '0.524'
},
{
  "#node1": 'B0001.4',
  node2: 'gpd-1',
  combined_score: '0.537'
},
{
  "#node1": 'B0001.4',
  node2: 'cdh-4',
  combined_score: '0.539'
},
{
  "#node1": 'B0001.4',
  node2: 'fbp-1',
  combined_score: '0.54'
},
{
  "#node1": 'B0001.4',
  node2: 'xpo-1',
  combined_score: '0.562'
},
{
  "#node1": 'B0001.4',
  node2: 'dhod-1',
  combined_score: '0.578'
},
{
  "#node1": 'B0001.4',
  node2: 'hpo-3',
  combined_score: '0.589'
},
{
  "#node1": 'B0001.4',
  node2: 'hda-2',
  combined_score: '0.593'
},
{
  "#node1": 'B0001.4',
  node2: 'rgs-7',
  combined_score: '0.594'
},
{
  "#node1": 'B0001.4',
  node2: 'ech-6',
  combined_score: '0.603'
},
{
  "#node1": 'B0001.4',
  node2: 'R12E2.11',
  combined_score: '0.609'
},
{
  "#node1": 'B0001.4',
  node2: 'cdh-1',
  combined_score: '0.61'
},
{
  "#node1": 'B0001.4',
  node2: 'cdh-10',
  combined_score: '0.61'
},
{
  "#node1": 'B0001.4',
  node2: 'hda-3',
  combined_score: '0.611'
},
{
  "#node1": 'B0001.4',
  node2: 'F38B2.4',
  combined_score: '0.618'
},
{
  "#node1": 'B0001.4',
  node2: 'ptp-2',
  combined_score: '0.637'
},
{
  "#node1": 'B0001.4',
  node2: 'spe-4',
  combined_score: '0.651'
},
{
  "#node1": 'B0001.4',
  node2: 'dsh-2',
  combined_score: '0.703'
},
{
  "#node1": 'B0001.4',
  node2: 'mig-5',
  combined_score: '0.72'
},
{
  "#node1": 'B0001.4',
  node2: 'ctps-1',
  combined_score: '0.757'
},
{
  "#node1": 'B0001.4',
  node2: 'F25B5.3',
  combined_score: '0.824'
},
{
  "#node1": 'B0001.4',
  node2: 'ZK563.7',
  combined_score: '0.922'
},
{
  "#node1": 'B0001.4',
  node2: 'apy-1',
  combined_score: '0.922'
},
{
  "#node1": 'B0001.4',
  node2: 'upp-1',
  combined_score: '0.975'
},
{
  "#node1": 'B0001.4',
  node2: 'cdd-1',
  combined_score: '0.985'
},
{
  "#node1": 'B0024.11',
  node2: 'Y48E1B.2',
  combined_score: '0.4'
},
{
  "#node1": 'B0024.11',
  node2: 'C27F2.4',
  combined_score: '0.409'
},
{
  "#node1": 'B0024.11',
  node2: 'mrpl-11',
  combined_score: '0.414'
},
{
  "#node1": 'B0024.11',
  node2: 'ZK1058.5',
  combined_score: '0.419'
},
{
  "#node1": 'B0024.11',
  node2: 'mrpl-47',
  combined_score: '0.465'
},
{
  "#node1": 'B0024.11',
  node2: 'ZC434.4',
  combined_score: '0.466'
},
{
  "#node1": 'B0024.11',
  node2: 'pcm-1',
  combined_score: '0.482'
},
{
  "#node1": 'B0024.11',
  node2: 'mrpl-21',
  combined_score: '0.488'
},
{
  "#node1": 'B0024.11',
  node2: 'F25B5.6',
  combined_score: '0.499'
},
{
  "#node1": 'B0024.11',
  node2: 'F53F4.11',
  combined_score: '0.503'
},
{
  "#node1": 'B0024.11',
  node2: 'T02H6.1',
  combined_score: '0.51'
},
{
  "#node1": 'B0024.11',
  node2: 'C34E10.10',
  combined_score: '0.518'
},
{
  "#node1": 'B0024.11',
  node2: 'metl-2',
  combined_score: '0.522'
},
{
  "#node1": 'B0024.11',
  node2: 'ctps-1',
  combined_score: '0.542'
},
{
  "#node1": 'B0024.11',
  node2: 'cat-4',
  combined_score: '0.566'
},
{
  "#node1": 'B0024.11',
  node2: 'B0280.9',
  combined_score: '0.579'
},
{
  "#node1": 'B0024.11',
  node2: 'tut-1',
  combined_score: '0.587'
},
{
  "#node1": 'B0024.11',
  node2: 'W02G9.3',
  combined_score: '0.592'
},
{
  "#node1": 'B0024.11',
  node2: 'T20B12.3',
  combined_score: '0.604'
},
{
  "#node1": 'B0024.11',
  node2: 'R02D5.8',
  combined_score: '0.62'
},
{
  "#node1": 'B0024.11',
  node2: 'W02A11.1',
  combined_score: '0.627'
}]
export const Num4echartsData = () => [  {
  "#node1": 'ACAT2',
  node2: 'HMGCS1',
  combined_score: '0.999'
},
{
  "#node1": 'F2',
  node2: 'SERPINC1',
  combined_score: '0.999'
},
{
  "#node1": 'FGA',
  node2: 'FGB',
  combined_score: '0.999'
},
{
  "#node1": 'F2',
  node2: 'FGA',
  combined_score: '0.998'
},
{
  "#node1": 'PSMB7',
  node2: 'PSMD12',
  combined_score: '0.998'
},
{
  "#node1": 'PSMD12',
  node2: 'PSMD13',
  combined_score: '0.996'
},
{
  "#node1": 'SPCS1',
  node2: 'SPCS2',
  combined_score: '0.995'
},
{
  "#node1": 'ATF7IP',
  node2: 'SETDB1',
  combined_score: '0.994'
},
{
  "#node1": 'F2',
  node2: 'FGB',
  combined_score: '0.994'
},
{
  "#node1": 'SNRPD1',
  node2: 'SNRPD3',
  combined_score: '0.994'
},
{
  "#node1": 'FAU',
  node2: 'RPL14',
  combined_score: '0.992'
},
{
  "#node1": 'CAT',
  node2: 'SOD3',
  combined_score: '0.991'
},
{
  "#node1": 'ENSCJAP00000007628',
  node2: 'FAU',
  combined_score: '0.991'
},
{
  "#node1": 'AKAP3',
  node2: 'ROPN1L',
  combined_score: '0.99'
},
{
  "#node1": 'RPL14',
  node2: 'RPL23',
  combined_score: '0.988'
},
{
  "#node1": 'NUP37',
  node2: 'SEH1L',
  combined_score: '0.987'
},
{
  "#node1": 'FAU',
  node2: 'RPL39',
  combined_score: '0.985'
},
{
  "#node1": 'FAU',
  node2: 'GNB2L1',
  combined_score: '0.985'
},
{
  "#node1": 'FAU',
  node2: 'RPL4',
  combined_score: '0.985'
},
{
  "#node1": 'ARL3',
  node2: 'PDE6D',
  combined_score: '0.982'
},
{
  "#node1": 'GNB2L1',
  node2: 'RPL14',
  combined_score: '0.982'
},
{
  "#node1": 'FAU',
  node2: 'RPL36',
  combined_score: '0.981'
},
{
  "#node1": 'FAU',
  node2: 'RPL23',
  combined_score: '0.979'
},
{
  "#node1": 'FAU',
  node2: 'RPL13',
  combined_score: '0.978'
},
{
  "#node1": 'MYL9',
  node2: 'MYLK',
  combined_score: '0.977'
},
{
  "#node1": 'RPL14',
  node2: 'RPL4',
  combined_score: '0.977'
},
{
  "#node1": 'ENSCJAP00000007628',
  node2: 'RPL14',
  combined_score: '0.976'
},
{
  "#node1": 'ENSCJAP00000041632',
  node2: 'FAU',
  combined_score: '0.975'
},
{
  "#node1": 'RPL14',
  node2: 'RPL36',
  combined_score: '0.975'
},
{
  "#node1": 'CAT',
  node2: 'GPX7',
  combined_score: '0.974'
},
{
  "#node1": 'MYL2',
  node2: 'MYLK',
  combined_score: '0.971'
},
{
  "#node1": 'ACAT2',
  node2: 'HADHA',
  combined_score: '0.97'
},
{
  "#node1": 'FGA',
  node2: 'SERPINC1',
  combined_score: '0.97'
},
{
  "#node1": 'MYH9',
  node2: 'MYL9',
  combined_score: '0.97'
},
{
  "#node1": 'SART1',
  node2: 'SNRPD3',
  combined_score: '0.968'
},
{
  "#node1": 'SYCP2',
  node2: 'SYCP3',
  combined_score: '0.968'
},
{
  "#node1": 'PSMB7',
  node2: 'PSMD13',
  combined_score: '0.967'
},
{
  "#node1": 'RPL14',
  node2: 'RPL39',
  combined_score: '0.967'
},
{
  "#node1": 'SART1',
  node2: 'SNRPD1',
  combined_score: '0.967'
},
{
  "#node1": 'FGB',
  node2: 'SERPINC1',
  combined_score: '0.966'
},
{
  "#node1": 'MYL6',
  node2: 'MYL9',
  combined_score: '0.965'
},
{
  "#node1": 'RPL13',
  node2: 'RPL14',
  combined_score: '0.965'
},
{
  "#node1": 'SEC23B',
  node2: 'SEC24D',
  combined_score: '0.965'
},
{
  "#node1": 'SYCE2',
  node2: 'TEX12',
  combined_score: '0.964'
},
{
  "#node1": 'ADK',
  node2: 'AK2',
  combined_score: '0.963'
},
{
  "#node1": 'MYH9',
  node2: 'MYL6',
  combined_score: '0.963'
},
{
  "#node1": 'MYL2',
  node2: 'MYL4',
  combined_score: '0.962'
},
{
  "#node1": 'RPL14',
  node2: 'RPL3',
  combined_score: '0.96'
},
{
  "#node1": 'RPL23',
  node2: 'RPL36',
  combined_score: '0.959'
},
{
  "#node1": 'RASA1',
  node2: 'RRAS',
  combined_score: '0.958'
},
{
  "#node1": 'BAK1',
  node2: 'BAX',
  combined_score: '0.956'
},
{
  "#node1": 'PYGB',
  node2: 'PYGL',
  combined_score: '0.955'
},
{
  "#node1": 'GNB2L1',
  node2: 'RPL23',
  combined_score: '0.953'
},
{
  "#node1": 'RPL23',
  node2: 'RPL4',
  combined_score: '0.953'
},
{
  "#node1": 'MYL6',
  node2: 'MYLK',
  combined_score: '0.949'
},
{
  "#node1": 'MYL12A',
  node2: 'MYL6',
  combined_score: '0.948'
},
{
  "#node1": 'MYL12A',
  node2: 'MYLK',
  combined_score: '0.947'
},
{
  "#node1": 'MYL2',
  node2: 'MYL6',
  combined_score: '0.944'
},
{
  "#node1": 'RPL36',
  node2: 'RPL4',
  combined_score: '0.944'
},
{
  "#node1": 'FAU',
  node2: 'RPL6',
  combined_score: '0.942'
},
{
  "#node1": 'FAU',
  node2: 'RPL5',
  combined_score: '0.942'
},
{
  "#node1": 'GALM',
  node2: 'GLA',
  combined_score: '0.942'
},
{
  "#node1": 'MYH9',
  node2: 'MYL12A',
  combined_score: '0.942'
},
{
  "#node1": 'GPX7',
  node2: 'SOD3',
  combined_score: '0.941'
},
{
  "#node1": 'MYL12A',
  node2: 'MYL6B',
  combined_score: '0.941'
},
{
  "#node1": 'MYL6B',
  node2: 'MYL9',
  combined_score: '0.941'
},
{
  "#node1": 'RPL14',
  node2: 'RPL5',
  combined_score: '0.941'
},
{
  "#node1": 'GNB2L1',
  node2: 'RPL4',
  combined_score: '0.938'
},
{
  "#node1": 'MYL4',
  node2: 'MYLK',
  combined_score: '0.936'
},
{
  "#node1": 'ALOX15',
  node2: 'GPX3',
  combined_score: '0.935'
},
{
  "#node1": 'MYH9',
  node2: 'MYL6B',
  combined_score: '0.935'
},
{
  "#node1": 'MYL2',
  node2: 'MYL6B',
  combined_score: '0.935'
},
{
  "#node1": 'ENSCJAP00000016811',
  node2: 'FAU',
  combined_score: '0.932'
},
{
  "#node1": 'ENSCJAP00000040723',
  node2: 'FAU',
  combined_score: '0.932'
},
{
  "#node1": 'ENSCJAP00000007628',
  node2: 'GNB2L1',
  combined_score: '0.93'
},
{
  "#node1": 'GPX3',
  node2: 'SOD3',
  combined_score: '0.93'
},
{
  "#node1": 'RBM8A',
  node2: 'SNRPD3',
  combined_score: '0.929'
},
{
  "#node1": 'GNB2L1',
  node2: 'RPL36',
  combined_score: '0.927'
},
{
  "#node1": 'MYH9',
  node2: 'MYL2',
  combined_score: '0.927'
},
{
  "#node1": 'RPL13',
  node2: 'RPL23',
  combined_score: '0.927'
},
]
export const Num5echartsData = () => [  {
  "#node1": 'Tnnc1',
  node2: 'Tnni3',
  combined_score: '0.998'
},
{
  "#node1": 'Krt18',
  node2: 'Krt7',
  combined_score: '0.867'
},
{
  "#node1": 'Krt7',
  node2: 'Pip',
  combined_score: '0.744'
},
{
  "#node1": 'Krt16',
  node2: 'Krt7',
  combined_score: '0.685'
},
{
  "#node1": 'Krt35',
  node2: 'Krt73',
  combined_score: '0.674'
},
{
  "#node1": 'Krt16',
  node2: 'Krt73',
  combined_score: '0.653'
},
{
  "#node1": 'Krt18',
  node2: 'Krt73',
  combined_score: '0.635'
},
{
  "#node1": 'Krt35',
  node2: 'Krt7',
  combined_score: '0.612'
},
{
  "#node1": 'Hint1',
  node2: 'Rbx1',
  combined_score: '0.533'
},
{
  "#node1": 'Krt18',
  node2: 'Krt35',
  combined_score: '0.52'
},
{
  "#node1": 'Krt7',
  node2: 'Krt73',
  combined_score: '0.514'
},
{
  "#node1": 'Krt16',
  node2: 'Krt35',
  combined_score: '0.503'
},
]
export const Num6echartsData = () => [  {
  "#node1": 'ATPsynB',
  node2: 'blw',
  combined_score: '0.999'
},
{
  "#node1": 'ATPsynB',
  node2: 'ATPsynF',
  combined_score: '0.999'
},
{
  "#node1": 'ATPsynB',
  node2: 'ATPsynD',
  combined_score: '0.999'
},
{
  "#node1": 'ATPsynB',
  node2: 'CG7610',
  combined_score: '0.999'
},
{
  "#node1": 'ATPsynB',
  node2: 'ATPsynO',
  combined_score: '0.999'
},
{
  "#node1": 'ATPsynB',
  node2: 'ATPsynCF6',
  combined_score: '0.999'
},
{
  "#node1": 'ATPsynCF6',
  node2: 'blw',
  combined_score: '0.999'
},
{
  "#node1": 'ATPsynCF6',
  node2: 'ATPsynF',
  combined_score: '0.999'
},
{
  "#node1": 'ATPsynCF6',
  node2: 'ATPsynO',
  combined_score: '0.999'
},
{
  "#node1": 'ATPsynCF6',
  node2: 'ATPsynD',
  combined_score: '0.999'
},
{
  "#node1": 'ATPsynD',
  node2: 'blw',
  combined_score: '0.999'
},
{
  "#node1": 'ATPsynD',
  node2: 'ATPsynF',
  combined_score: '0.999'
},
{
  "#node1": 'ATPsynD',
  node2: 'ATPsynO',
  combined_score: '0.999'
},
{
  "#node1": 'ATPsynD',
  node2: 'CG7610',
  combined_score: '0.999'
},
{
  "#node1": 'ATPsynF',
  node2: 'blw',
  combined_score: '0.999'
},
{
  "#node1": 'ATPsynF',
  node2: 'ATPsynO',
  combined_score: '0.999'
},
{
  "#node1": 'ATPsynO',
  node2: 'blw',
  combined_score: '0.999'
},
{
  "#node1": 'ATPsynO',
  node2: 'CG7610',
  combined_score: '0.999'
},
{
  "#node1": 'Ald',
  node2: 'Tpi',
  combined_score: '0.999'
},
{
  "#node1": 'CG10306',
  node2: 'Tango7',
  combined_score: '0.999'
},
{
  "#node1": 'CG10306',
  node2: 'eIF-3p40',
  combined_score: '0.999'
},
{
  "#node1": 'CG10306',
  node2: 'eIF3-S8',
  combined_score: '0.999'
},
{
  "#node1": 'CG10306',
  node2: 'CG9769',
  combined_score: '0.999'
},
{
  "#node1": 'CG10306',
  node2: 'Int6',
  combined_score: '0.999'
},
{
  "#node1": 'CG11876',
  node2: 'l(1)G0334',
  combined_score: '0.999'
},
{
  "#node1": 'CG11876',
  node2: 'CG7430',
  combined_score: '0.999'
},
{
  "#node1": 'CG33303',
  node2: 'Ost48',
  combined_score: '0.999'
},
{
  "#node1": 'CG4390',
  node2: 'Fdh',
  combined_score: '0.999'
},
{
  "#node1": 'CG5525',
  node2: 'T-cp1',
  combined_score: '0.999'
},
{
  "#node1": 'CG5525',
  node2: 'Tcp-1eta',
  combined_score: '0.999'
},
{
  "#node1": 'CG5525',
  node2: 'Cctgamma',
  combined_score: '0.999'
},
{
  "#node1": 'CG7610',
  node2: 'blw',
  combined_score: '0.999'
},
{
  "#node1": 'CG9769',
  node2: 'Int6',
  combined_score: '0.999'
},
{
  "#node1": 'CG9769',
  node2: 'eIF3-S8',
  combined_score: '0.999'
},
{
  "#node1": 'CG9769',
  node2: 'eIF-3p40',
  combined_score: '0.999'
},
{
  "#node1": 'CG9769',
  node2: 'Tango7',
  combined_score: '0.999'
},
{
  "#node1": 'Cctgamma',
  node2: 'Tcp-1eta',
  combined_score: '0.999'
},
{
  "#node1": 'Cctgamma',
  node2: 'T-cp1',
  combined_score: '0.999'
},
{
  "#node1": 'Crc',
  node2: 'Pdi',
  combined_score: '0.999'
},
{
  "#node1": 'Ef1beta',
  node2: 'RpL8',
  combined_score: '0.999'
},
{
  "#node1": 'Ef1beta',
  node2: 'RpL4',
  combined_score: '0.999'
},
{
  "#node1": 'Ef1beta',
  node2: 'RpL31',
  combined_score: '0.999'
},
{
  "#node1": 'Ef1beta',
  node2: 'RpLP2',
  combined_score: '0.999'
},
{
  "#node1": 'Ef1beta',
  node2: 'RpL15',
  combined_score: '0.999'
},
{
  "#node1": 'Ef1beta',
  node2: 'RpLP0',
  combined_score: '0.999'
},
{
  "#node1": 'Galphaq',
  node2: 'norpA',
  combined_score: '0.999'
},
{
  "#node1": 'Int6',
  node2: 'Tango7',
  combined_score: '0.999'
},
{
  "#node1": 'Int6',
  node2: 'eIF-3p40',
  combined_score: '0.999'
},
{
  "#node1": 'Int6',
  node2: 'eIF3-S8',
  combined_score: '0.999'
},
{
  "#node1": 'Int6',
  node2: 'eIF-3p66',
  combined_score: '0.999'
},
{
  "#node1": 'ND-42',
  node2: 'ND-75',
  combined_score: '0.999'
},
{
  "#node1": 'Pgd',
  node2: 'Tal',
  combined_score: '0.999'
},
{
  "#node1": 'Pgd',
  node2: 'Zw',
  combined_score: '0.999'
},
{
  "#node1": 'Prosalpha2',
  node2: 'Prosalpha3',
  combined_score: '0.999'
},
{
  "#node1": 'Prosalpha2',
  node2: 'Prosalpha4',
  combined_score: '0.999'
},
{
  "#node1": 'Prosalpha2',
  node2: 'Rpn1',
  combined_score: '0.999'
},
{
  "#node1": 'Prosalpha2',
  node2: 'Rpn10',
  combined_score: '0.999'
},
{
  "#node1": 'Prosalpha2',
  node2: 'Rpn11',
  combined_score: '0.999'
},
{
  "#node1": 'Prosalpha2',
  node2: 'Prosbeta3',
  combined_score: '0.999'
},
{
  "#node1": 'Prosalpha2',
  node2: 'Rpn7',
  combined_score: '0.999'
},
{
  "#node1": 'Prosalpha2',
  node2: 'Rpn8',
  combined_score: '0.999'
},
{
  "#node1": 'Prosalpha2',
  node2: 'Rpn2',
  combined_score: '0.999'
},
{
  "#node1": 'Prosalpha2',
  node2: 'Prosalpha7',
  combined_score: '0.999'
},
{
  "#node1": 'Prosalpha3',
  node2: 'Rpn10',
  combined_score: '0.999'
},
{
  "#node1": 'Prosalpha3',
  node2: 'Prosalpha4',
  combined_score: '0.999'
},
{
  "#node1": 'Prosalpha3',
  node2: 'Prosalpha7',
  combined_score: '0.999'
},
{
  "#node1": 'Prosalpha3',
  node2: 'Prosbeta3',
  combined_score: '0.999'
},
{
  "#node1": 'Prosalpha4',
  node2: 'Prosalpha7',
  combined_score: '0.999'
},
{
  "#node1": 'Prosalpha4',
  node2: 'Prosbeta3',
  combined_score: '0.999'
},
{
  "#node1": 'Prosalpha7',
  node2: 'Rpn1',
  combined_score: '0.999'
},
{
  "#node1": 'Prosalpha7',
  node2: 'Rpn10',
  combined_score: '0.999'
},
{
  "#node1": 'Prosalpha7',
  node2: 'Rpn11',
  combined_score: '0.999'
},
{
  "#node1": 'Prosalpha7',
  node2: 'Prosbeta3',
  combined_score: '0.999'
},
{
  "#node1": 'Prosalpha7',
  node2: 'Rpn7',
  combined_score: '0.999'
},
{
  "#node1": 'Prosalpha7',
  node2: 'Rpn2',
  combined_score: '0.999'
},
{
  "#node1": 'Prosalpha7',
  node2: 'Rpn8',
  combined_score: '0.999'
},
{
  "#node1": 'Prosbeta3',
  node2: 'Rpn1',
  combined_score: '0.999'
},
{
  "#node1": 'Prosbeta3',
  node2: 'Rpn10',
  combined_score: '0.999'
},
{
  "#node1": 'Prosbeta3',
  node2: 'Rpn11',
  combined_score: '0.999'
},
{
  "#node1": 'Prosbeta3',
  node2: 'Rpn8',
  combined_score: '0.999'
},
]
export const Num7echartsData = () => [  {
  "#node1": 'ARPC2',
  node2: 'ARPC3',
  combined_score: '0.999'
},
{
  "#node1": 'ARPC2',
  node2: 'ARPC4',
  combined_score: '0.999'
},
{
  "#node1": 'ARPC3',
  node2: 'ARPC4',
  combined_score: '0.999'
},
{
  "#node1": 'ATG16L1',
  node2: 'ATG5',
  combined_score: '0.999'
},
{
  "#node1": 'ATG3',
  node2: 'ATG5',
  combined_score: '0.999'
},
{
  "#node1": 'ATP6V1A',
  node2: 'ATP6V1D',
  combined_score: '0.999'
},
{
  "#node1": 'ATP6V1B2',
  node2: 'ATP6V1C1',
  combined_score: '0.999'
},
{
  "#node1": 'ATP6V1B2',
  node2: 'ATP6V1D',
  combined_score: '0.999'
},
{
  "#node1": 'ATP6V1C1',
  node2: 'ATP6V1D',
  combined_score: '0.999'
},
{
  "#node1": 'BCKDHA',
  node2: 'DBT',
  combined_score: '0.999'
},
{
  "#node1": 'C11orf59',
  node2: 'RRAGA',
  combined_score: '0.999'
},
{
  "#node1": 'CYC1',
  node2: 'UQCRC1',
  combined_score: '0.999'
},
{
  "#node1": 'CYC1',
  node2: 'UQCRQ',
  combined_score: '0.999'
},
{
  "#node1": 'CYC1',
  node2: 'UQCRFS1',
  combined_score: '0.999'
},
{
  "#node1": 'CYC1',
  node2: 'UQCR',
  combined_score: '0.999'
},
{
  "#node1": 'CYC1',
  node2: 'UQCRC2',
  combined_score: '0.999'
},
{
  "#node1": 'DBT',
  node2: 'DLD',
  combined_score: '0.999'
},
{
  "#node1": 'DBT',
  node2: 'IVD',
  combined_score: '0.999'
},
{
  "#node1": 'DLAT',
  node2: 'DLD',
  combined_score: '0.999'
},
{
  "#node1": 'DLAT',
  node2: 'PDHB',
  combined_score: '0.999'
},
{
  "#node1": 'DLD',
  node2: 'DLST',
  combined_score: '0.999'
},
{
  "#node1": 'DLD',
  node2: 'PDHB',
  combined_score: '0.999'
},
{
  "#node1": 'DOCK1',
  node2: 'ELMO1',
  combined_score: '0.999'
},
{
  "#node1": 'EIF3A',
  node2: 'EIF3H',
  combined_score: '0.999'
},
{
  "#node1": 'FGB',
  node2: 'FGG',
  combined_score: '0.999'
},
{
  "#node1": 'HIBADH',
  node2: 'HIBCH',
  combined_score: '0.999'
},
{
  "#node1": 'IDH3A',
  node2: 'IDH3B',
  combined_score: '0.999'
},
{
  "#node1": 'LOC694823',
  node2: 'RANGAP1',
  combined_score: '0.999'
},
{
  "#node1": 'MRE11A',
  node2: 'RAD50',
  combined_score: '0.999'
},
{
  "#node1": 'NDUFA12',
  node2: 'NDUFS3',
  combined_score: '0.999'
},
{
  "#node1": 'NDUFA12',
  node2: 'NDUFB9',
  combined_score: '0.999'
},
{
  "#node1": 'NDUFA12',
  node2: 'NDUFA9',
  combined_score: '0.999'
},
{
  "#node1": 'NDUFA12',
  node2: 'NDUFS8',
  combined_score: '0.999'
},
{
  "#node1": 'NDUFA9',
  node2: 'NDUFS3',
  combined_score: '0.999'
},
{
  "#node1": 'NDUFA9',
  node2: 'NDUFS8',
  combined_score: '0.999'
},
{
  "#node1": 'NDUFS3',
  node2: 'NDUFV3',
  combined_score: '0.999'
},
{
  "#node1": 'NDUFS3',
  node2: 'NDUFS8',
  combined_score: '0.999'
},
{
  "#node1": 'PDHA1',
  node2: 'PDHB',
  combined_score: '0.999'
},
{
  "#node1": 'PPP2CB',
  node2: 'PPP2R1A',
  combined_score: '0.999'
},
{
  "#node1": 'PSMA1',
  node2: 'PSMD6',
  combined_score: '0.999'
},
{
  "#node1": 'PSMA1',
  node2: 'PSMD7',
  combined_score: '0.999'
},
{
  "#node1": 'PSMA1',
  node2: 'PSMB2',
  combined_score: '0.999'
},
{
  "#node1": 'PSMA1',
  node2: 'PSMD3',
  combined_score: '0.999'
},
{
  "#node1": 'PSMA1',
  node2: 'PSMC4',
  combined_score: '0.999'
},
{
  "#node1": 'PSMA2',
  node2: 'PSMD6',
  combined_score: '0.999'
},
{
  "#node1": 'PSMA2',
  node2: 'PSMC4',
  combined_score: '0.999'
},
{
  "#node1": 'PSMA4',
  node2: 'PSMD2',
  combined_score: '0.999'
},
{
  "#node1": 'PSMA4',
  node2: 'PSMD6',
  combined_score: '0.999'
},
{
  "#node1": 'PSMA4',
  node2: 'PSMD12',
  combined_score: '0.999'
},
{
  "#node1": 'PSMA4',
  node2: 'PSMD7',
  combined_score: '0.999'
},
{
  "#node1": 'PSMB2',
  node2: 'PSMD6',
  combined_score: '0.999'
},
{
  "#node1": 'PSMB2',
  node2: 'PSMD12',
  combined_score: '0.999'
},
{
  "#node1": 'PSMB2',
  node2: 'PSMD7',
  combined_score: '0.999'
},
{
  "#node1": 'PSMB2',
  node2: 'PSMC4',
  combined_score: '0.999'
},
{
  "#node1": 'PSMB7',
  node2: 'PSMC4',
  combined_score: '0.999'
},
{
  "#node1": 'PSMD12',
  node2: 'PSMD3',
  combined_score: '0.999'
},
{
  "#node1": 'RPS11',
  node2: 'RPS27',
  combined_score: '0.999'
},
{
  "#node1": 'RPS11',
  node2: 'RPS19',
  combined_score: '0.999'
},
{
  "#node1": 'RPS19',
  node2: 'RPS27',
  combined_score: '0.999'
},
{
  "#node1": 'TIMM10',
  node2: 'TIMM9',
  combined_score: '0.999'
},
{
  "#node1": 'UQCR',
  node2: 'UQCRC1',
  combined_score: '0.999'
},
{
  "#node1": 'UQCRC1',
  node2: 'UQCRQ',
  combined_score: '0.999'
},
{
  "#node1": 'UQCRC1',
  node2: 'UQCRFS1',
  combined_score: '0.999'
},
{
  "#node1": 'UQCRC1',
  node2: 'UQCRC2',
  combined_score: '0.999'
},
{
  "#node1": 'UQCRC2',
  node2: 'UQCRQ',
  combined_score: '0.999'
},
{
  "#node1": 'UQCRC2',
  node2: 'UQCRFS1',
  combined_score: '0.999'
},
{
  "#node1": 'ARPC2',
  node2: 'WASL',
  combined_score: '0.998'
},
{
  "#node1": 'ATP6V1A',
  node2: 'ATP6V1B2',
  combined_score: '0.998'
},
{
  "#node1": 'BCAT2',
  node2: 'BCKDHA',
  combined_score: '0.998'
},
{
  "#node1": 'BCKDHA',
  node2: 'DLD',
  combined_score: '0.998'
},
{
  "#node1": 'BLVRA',
  node2: 'HMOX2',
  combined_score: '0.998'
},
{
  "#node1": 'CAB39',
  node2: 'STK11',
  combined_score: '0.998'
},
{
  "#node1": 'CYC1',
  node2: 'NDUFS3',
  combined_score: '0.998'
},
{
  "#node1": 'DCTN1',
  node2: 'DCTN2',
  combined_score: '0.998'
},
{
  "#node1": 'DIABLO',
  node2: 'VPS16',
  combined_score: '0.998'
},
{
  "#node1": 'EIF3A',
  node2: 'EIF3J',
  combined_score: '0.998'
},
{
  "#node1": 'EIF3B',
  node2: 'EIF3H',
  combined_score: '0.998'
},
{
  "#node1": 'EIF3H',
  node2: 'EIF3J',
  combined_score: '0.998'
},
{
  "#node1": 'EPRS',
  node2: 'RARS',
  combined_score: '0.998'
},
{
  "#node1": 'FARSA',
  node2: 'FARSB',
  combined_score: '0.998'
},
]
export const Num8echartsData = () => [  {
  "#node1": 'F2',
  node2: 'SERPINC1',
  combined_score: '0.999'
},
{
  "#node1": 'F2',
  node2: 'SERPIND1',
  combined_score: '0.999'
},
{
  "#node1": 'F9',
  node2: 'SERPINC1',
  combined_score: '0.999'
},
{
  "#node1": 'KLKB1',
  node2: 'KNG1',
  combined_score: '0.997'
},
{
  "#node1": 'F10',
  node2: 'SERPINC1',
  combined_score: '0.996'
},
{
  "#node1": 'F2',
  node2: 'SERPINA5',
  combined_score: '0.994'
},
{
  "#node1": 'PROZ',
  node2: 'SERPINA10',
  combined_score: '0.99'
},
{
  "#node1": 'C6',
  node2: 'C8A',
  combined_score: '0.989'
},
{
  "#node1": 'APOA2',
  node2: 'APOE',
  combined_score: '0.981'
},
{
  "#node1": 'CFB',
  node2: 'CFD',
  combined_score: '0.981'
},
{
  "#node1": 'F12',
  node2: 'KLKB1',
  combined_score: '0.98'
},
{
  "#node1": 'APOC1',
  node2: 'APOE',
  combined_score: '0.978'
},
{
  "#node1": 'C6',
  node2: 'C9',
  combined_score: '0.977'
},
{
  "#node1": 'C6',
  node2: 'C7',
  combined_score: '0.976'
},
{
  "#node1": 'C8A',
  node2: 'C9',
  combined_score: '0.976'
},
{
  "#node1": 'F12',
  node2: 'SERPINC1',
  combined_score: '0.971'
},
{
  "#node1": 'GLNC1',
  node2: 'HBB',
  combined_score: '0.965'
},
{
  "#node1": 'C4B',
  node2: 'EGK_14737',
  combined_score: '0.964'
},
{
  "#node1": 'APOA2',
  node2: 'APOC3',
  combined_score: '0.963'
},
{
  "#node1": 'ALB',
  node2: 'HPX',
  combined_score: '0.961'
},
{
  "#node1": 'F13A1',
  node2: 'F2',
  combined_score: '0.96'
},
{
  "#node1": 'APOA1',
  node2: 'APOA2',
  combined_score: '0.955'
},
{
  "#node1": 'C4B',
  node2: 'C4BPA',
  combined_score: '0.953'
},
{
  "#node1": 'ENSMMUP00000026415',
  node2: 'LOC702129',
  combined_score: '0.953'
},
{
  "#node1": 'APOA1',
  node2: 'APOC3',
  combined_score: '0.945'
},
{
  "#node1": 'F10',
  node2: 'F9',
  combined_score: '0.944'
},
{
  "#node1": 'APOC1',
  node2: 'APOC3',
  combined_score: '0.938'
},
{
  "#node1": 'ALB',
  node2: 'AMBP',
  combined_score: '0.931'
},
{
  "#node1": 'IGFBP1',
  node2: 'IGFBP4',
  combined_score: '0.93'
},
{
  "#node1": 'C4B',
  node2: 'MBL2',
  combined_score: '0.928'
},
{
  "#node1": 'EGK_14737',
  node2: 'MBL2',
  combined_score: '0.927'
},
{
  "#node1": 'ALB',
  node2: 'F2',
  combined_score: '0.926'
},
{
  "#node1": 'F7',
  node2: 'SERPINC1',
  combined_score: '0.918'
},
{
  "#node1": 'CP',
  node2: 'MPO',
  combined_score: '0.917'
},
{
  "#node1": 'LPA',
  node2: 'SERPINC1',
  combined_score: '0.917'
},
{
  "#node1": 'HBB',
  node2: 'HP',
  combined_score: '0.916'
},
{
  "#node1": 'ALB',
  node2: 'SERPINA1',
  combined_score: '0.914'
},
{
  "#node1": 'ALB',
  node2: 'LOC703984',
  combined_score: '0.913'
},
{
  "#node1": 'CFB',
  node2: 'ENSMMUP00000026415',
  combined_score: '0.913'
},
{
  "#node1": 'SERPINC1',
  node2: 'VTN',
  combined_score: '0.902'
},
{
  "#node1": 'C7',
  node2: 'C9',
  combined_score: '0.899'
},
{
  "#node1": 'F12',
  node2: 'KNG1',
  combined_score: '0.899'
},
{
  "#node1": 'AMBP',
  node2: 'ITIH2',
  combined_score: '0.898'
},
{
  "#node1": 'LOC703984',
  node2: 'SERPINA1',
  combined_score: '0.898'
},
{
  "#node1": 'C7',
  node2: 'C8A',
  combined_score: '0.895'
},
{
  "#node1": 'KLKB1',
  node2: 'SERPINC1',
  combined_score: '0.895'
},
{
  "#node1": 'F12',
  node2: 'SERPING1',
  combined_score: '0.885'
},
{
  "#node1": 'KLKB1',
  node2: 'SERPING1',
  combined_score: '0.885'
},
{
  "#node1": 'APOC3',
  node2: 'APOE',
  combined_score: '0.884'
},
{
  "#node1": 'GLNC1',
  node2: 'HP',
  combined_score: '0.884'
},
{
  "#node1": 'F7',
  node2: 'F9',
  combined_score: '0.881'
},
{
  "#node1": 'CLU',
  node2: 'LTF',
  combined_score: '0.875'
},
{
  "#node1": 'F10',
  node2: 'SERPIND1',
  combined_score: '0.875'
},
{
  "#node1": 'F10',
  node2: 'SERPINA10',
  combined_score: '0.875'
},
{
  "#node1": 'ALB',
  node2: 'SERPINC1',
  combined_score: '0.871'
},
{
  "#node1": 'MBL2',
  node2: 'SERPING1',
  combined_score: '0.87'
},
{
  "#node1": 'ALB',
  node2: 'APOA2',
  combined_score: '0.869'
},
{
  "#node1": 'HP',
  node2: 'LOC703984',
  combined_score: '0.868'
},
{
  "#node1": 'F10',
  node2: 'F7',
  combined_score: '0.861'
},
{
  "#node1": 'F2',
  node2: 'SERPINF2',
  combined_score: '0.861'
},
{
  "#node1": 'ALB',
  node2: 'HP',
  combined_score: '0.859'
},
{
  "#node1": 'APOA1',
  node2: 'APOE',
  combined_score: '0.858'
},
{
  "#node1": 'AGT',
  node2: 'F2',
  combined_score: '0.857'
},
{
  "#node1": 'C4B',
  node2: 'C8A',
  combined_score: '0.857'
},
{
  "#node1": 'C8A',
  node2: 'ENSMMUP00000026415',
  combined_score: '0.856'
},
{
  "#node1": 'HPX',
  node2: 'LOC703984',
  combined_score: '0.855'
},
{
  "#node1": 'A2M',
  node2: 'KLKB1',
  combined_score: '0.854'
},
{
  "#node1": 'LPA',
  node2: 'SERPINF2',
  combined_score: '0.852'
},
{
  "#node1": 'ITIH2',
  node2: 'SERPINC1',
  combined_score: '0.851'
},
{
  "#node1": 'A2M',
  node2: 'F2',
  combined_score: '0.848'
},
{
  "#node1": 'APOA2',
  node2: 'APOC1',
  combined_score: '0.847'
},
{
  "#node1": 'CD163',
  node2: 'HP',
  combined_score: '0.845'
},
{
  "#node1": 'ALB',
  node2: 'APOE',
  combined_score: '0.844'
},
{
  "#node1": 'F2',
  node2: 'LOC722289',
  combined_score: '0.844'
},
{
  "#node1": 'ENSMMUP00000017501',
  node2: 'F2',
  combined_score: '0.842'
},
{
  "#node1": 'F9',
  node2: 'KLKB1',
  combined_score: '0.842'
},
{
  "#node1": 'LPA',
  node2: 'VTN',
  combined_score: '0.84'
},
{
  "#node1": 'ALB',
  node2: 'SERPINA6',
  combined_score: '0.839'
},
{
  "#node1": 'EGK_14737',
  node2: 'ENSMMUP00000026415',
  combined_score: '0.838'
},
{
  "#node1": 'ALB',
  node2: 'SERPINA7',
  combined_score: '0.835'
},
]
export const Num9echartsData = () => [  {
  "#node1": 'PSMB1',
  node2: 'PSMB4',
  combined_score: '0.999'
},
{
  "#node1": 'PSMA3',
  node2: 'PSMB4',
  combined_score: '0.998'
},
{
  "#node1": 'PSMA3',
  node2: 'PSMB1',
  combined_score: '0.998'
},
{
  "#node1": 'PSMB1',
  node2: 'PSMB6',
  combined_score: '0.998'
},
{
  "#node1": 'PSMB4',
  node2: 'PSMB6',
  combined_score: '0.998'
},
{
  "#node1": 'PSMB4',
  node2: 'PSMB5',
  combined_score: '0.997'
},
{
  "#node1": 'PSMA3',
  node2: 'PSMB6',
  combined_score: '0.996'
},
{
  "#node1": 'PSMB5',
  node2: 'PSMB6',
  combined_score: '0.996'
},
{
  "#node1": 'PSMA3',
  node2: 'PSMB8',
  combined_score: '0.995'
},
{
  "#node1": 'PSMA3',
  node2: 'PSMB5',
  combined_score: '0.995'
},
{
  "#node1": 'PSMB1',
  node2: 'PSMB5',
  combined_score: '0.995'
},
{
  "#node1": 'PSMB1',
  node2: 'PSMB8',
  combined_score: '0.995'
},
{
  "#node1": 'PSMB4',
  node2: 'PSMB8',
  combined_score: '0.993'
},
{
  "#node1": 'PFDN1',
  node2: 'PFDN4',
  combined_score: '0.991'
},
{
  "#node1": 'PSMA6',
  node2: 'PSMB4',
  combined_score: '0.99'
},
{
  "#node1": 'PSMB1',
  node2: 'PSMD9',
  combined_score: '0.989'
},
{
  "#node1": 'PSMB5',
  node2: 'PSMD9',
  combined_score: '0.987'
},
{
  "#node1": 'PSMA6',
  node2: 'PSMB1',
  combined_score: '0.985'
},
{
  "#node1": 'PSMA3',
  node2: 'PSMD9',
  combined_score: '0.982'
},
{
  "#node1": 'PSMA6',
  node2: 'PSMB5',
  combined_score: '0.982'
},
{
  "#node1": 'PSMB4',
  node2: 'PSMD9',
  combined_score: '0.981'
},
{
  "#node1": 'PSMB6',
  node2: 'PSMB8',
  combined_score: '0.979'
},
{
  "#node1": 'ENSMMUP00000015192',
  node2: 'PSMB1',
  combined_score: '0.978'
},
{
  "#node1": 'PSMA6',
  node2: 'PSMD9',
  combined_score: '0.978'
},
{
  "#node1": 'PSMA3',
  node2: 'PSMA6',
  combined_score: '0.974'
},
{
  "#node1": 'ENSMMUP00000015192',
  node2: 'PSMB4',
  combined_score: '0.973'
},
{
  "#node1": 'PSMA6',
  node2: 'PSMB6',
  combined_score: '0.973'
},
{
  "#node1": 'ENSMMUP00000015192',
  node2: 'PSMB5',
  combined_score: '0.971'
},
{
  "#node1": 'ENSMMUP00000015192',
  node2: 'PSMA3',
  combined_score: '0.97'
},
{
  "#node1": 'ENSMMUP00000015192',
  node2: 'PSMB6',
  combined_score: '0.969'
},
{
  "#node1": 'PSMA6',
  node2: 'PSMB8',
  combined_score: '0.966'
},
{
  "#node1": 'PSMB6',
  node2: 'PSMD9',
  combined_score: '0.965'
},
{
  "#node1": 'ENSMMUP00000015192',
  node2: 'PSMB8',
  combined_score: '0.964'
},
{
  "#node1": 'M6PR',
  node2: 'PLIN3',
  combined_score: '0.946'
},
{
  "#node1": 'RPS11',
  node2: 'UBA52',
  combined_score: '0.94'
},
{
  "#node1": 'AMPD3',
  node2: 'HPRT1',
  combined_score: '0.939'
},
{
  "#node1": 'ENSMMUP00000015192',
  node2: 'PSMD9',
  combined_score: '0.931'
},
{
  "#node1": 'RBX1',
  node2: 'UBE2R2',
  combined_score: '0.925'
},
{
  "#node1": 'ABCE1',
  node2: 'EIF2S2',
  combined_score: '0.924'
},
{
  "#node1": 'ENSMMUP00000015192',
  node2: 'PSMA6',
  combined_score: '0.909'
},
{
  "#node1": 'EIF2S2',
  node2: 'RPS11',
  combined_score: '0.895'
},
{
  "#node1": 'ABCE1',
  node2: 'RPS11',
  combined_score: '0.868'
},
{
  "#node1": 'PSMB5',
  node2: 'PSMB8',
  combined_score: '0.856'
},
{
  "#node1": 'EFTUD2',
  node2: 'RPS11',
  combined_score: '0.848'
},
{
  "#node1": 'PSMB1',
  node2: 'UBA52',
  combined_score: '0.846'
},
{
  "#node1": 'BOLA2',
  node2: 'GLRX3',
  combined_score: '0.844'
},
{
  "#node1": 'CAT',
  node2: 'LOC720828',
  combined_score: '0.841'
},
{
  "#node1": 'PSMA3',
  node2: 'UBA52',
  combined_score: '0.841'
},
{
  "#node1": 'PSMB4',
  node2: 'UBA52',
  combined_score: '0.836'
},
{
  "#node1": 'LOC713768',
  node2: 'VDAC2',
  combined_score: '0.833'
},
{
  "#node1": 'PSMB6',
  node2: 'RBX1',
  combined_score: '0.833'
},
{
  "#node1": 'PSMB4',
  node2: 'RBX1',
  combined_score: '0.831'
},
{
  "#node1": 'PSMB8',
  node2: 'PSMD9',
  combined_score: '0.821'
},
{
  "#node1": 'PSMB5',
  node2: 'UBA52',
  combined_score: '0.813'
},
{
  "#node1": 'PSMB8',
  node2: 'UBA52',
  combined_score: '0.813'
},
{
  "#node1": 'RAD23A',
  node2: 'UBA52',
  combined_score: '0.812'
},
{
  "#node1": 'ADAM10',
  node2: 'TSPAN14',
  combined_score: '0.8'
},
{
  "#node1": 'FKBP5',
  node2: 'SUGT1',
  combined_score: '0.798'
},
{
  "#node1": 'ATP6V1A',
  node2: 'LOC713768',
  combined_score: '0.791'
},
{
  "#node1": 'CAT',
  node2: 'GCLC',
  combined_score: '0.785'
},
{
  "#node1": 'PSMB6',
  node2: 'UBA52',
  combined_score: '0.784'
},
{
  "#node1": 'CLTA',
  node2: 'ITSN2',
  combined_score: '0.771'
},
{
  "#node1": 'PSMB1',
  node2: 'RBX1',
  combined_score: '0.768'
},
{
  "#node1": 'FKBP5',
  node2: 'PPP5C',
  combined_score: '0.761'
},
{
  "#node1": 'RBX1',
  node2: 'UBA52',
  combined_score: '0.758'
},
{
  "#node1": 'LOC713768',
  node2: 'PSMB4',
  combined_score: '0.753'
},
{
  "#node1": 'NEDD4L',
  node2: 'WNK1',
  combined_score: '0.752'
},
{
  "#node1": 'EIF2S2',
  node2: 'EIF4B',
  combined_score: '0.748'
},
{
  "#node1": 'NEDD4L',
  node2: 'UBE2R2',
  combined_score: '0.747'
},
{
  "#node1": 'ENSMMUP00000015192',
  node2: 'UBA52',
  combined_score: '0.744'
},
{
  "#node1": 'EFTUD2',
  node2: 'VPS35',
  combined_score: '0.741'
},
{
  "#node1": 'PSMA6',
  node2: 'RBX1',
  combined_score: '0.731'
},
{
  "#node1": 'CCT7',
  node2: 'PSMA3',
  combined_score: '0.727'
},
{
  "#node1": 'PSMA6',
  node2: 'UBA52',
  combined_score: '0.717'
},
{
  "#node1": 'HGS',
  node2: 'VPS35',
  combined_score: '0.716'
},
{
  "#node1": 'NEDD4L',
  node2: 'UBA52',
  combined_score: '0.711'
},
{
  "#node1": 'ABCE1',
  node2: 'UBA52',
  combined_score: '0.701'
},
{
  "#node1": 'HGS',
  node2: 'NEDD4L',
  combined_score: '0.701'
},
{
  "#node1": 'HGS',
  node2: 'UBA52',
  combined_score: '0.692'
},
{
  "#node1": 'CLTA',
  node2: 'PSMB4',
  combined_score: '0.691'
},
]
export const Num10echartsData = () => [  {
  "#node1": 'Abat',
  node2: 'Aldh5a1',
  combined_score: '0.999'
},
{
  "#node1": 'Acat1',
  node2: 'Oxct1',
  combined_score: '0.999'
},
{
  "#node1": 'Atp5d',
  node2: 'Atp5i',
  combined_score: '0.999'
},
{
  "#node1": 'Dync1h1',
  node2: 'Pafah1b1',
  combined_score: '0.999'
},
{
  "#node1": 'ND4',
  node2: 'ND5',
  combined_score: '0.999'
},
{
  "#node1": 'ND4',
  node2: 'Ndufs2',
  combined_score: '0.999'
},
{
  "#node1": 'ND5',
  node2: 'Ndufv2',
  combined_score: '0.999'
},
{
  "#node1": 'ND5',
  node2: 'Ndufs2',
  combined_score: '0.999'
},
{
  "#node1": 'Ndufs2',
  node2: 'Ndufs4',
  combined_score: '0.999'
},
{
  "#node1": 'Ndufs2',
  node2: 'Ndufv2',
  combined_score: '0.999'
},
{
  "#node1": 'Ndufs4',
  node2: 'Ndufv2',
  combined_score: '0.999'
},
{
  "#node1": 'Rps14',
  node2: 'Rps5',
  combined_score: '0.999'
},
{
  "#node1": 'Uqcrc1',
  node2: 'Uqcrq',
  combined_score: '0.999'
},
{
  "#node1": 'Cct2',
  node2: 'Cct3',
  combined_score: '0.998'
},
{
  "#node1": 'Dync1h1',
  node2: 'Dync1li1',
  combined_score: '0.998'
},
{
  "#node1": 'ND4',
  node2: 'Ndufv2',
  combined_score: '0.998'
},
{
  "#node1": 'ND5',
  node2: 'Ndufs4',
  combined_score: '0.998'
},
{
  "#node1": 'Prkacb',
  node2: 'Prkar2b',
  combined_score: '0.998'
},
{
  "#node1": 'Rpl18',
  node2: 'Rps5',
  combined_score: '0.998'
},
{
  "#node1": 'Ndufs2',
  node2: 'Uqcrc1',
  combined_score: '0.996'
},
{
  "#node1": 'Ndufs2',
  node2: 'Uqcrq',
  combined_score: '0.996'
},
{
  "#node1": 'Rps25',
  node2: 'Rps5',
  combined_score: '0.996'
},
{
  "#node1": 'ND4',
  node2: 'Ndufs4',
  combined_score: '0.994'
},
{
  "#node1": 'Ndufs4',
  node2: 'Uqcrq',
  combined_score: '0.994'
},
{
  "#node1": 'Actr2',
  node2: 'Actr3',
  combined_score: '0.993'
},
{
  "#node1": 'Atp6v0c',
  node2: 'Atp6v1c1',
  combined_score: '0.993'
},
{
  "#node1": 'Ndufv2',
  node2: 'Uqcrc1',
  combined_score: '0.992'
},
{
  "#node1": 'Actr2',
  node2: 'Arpc5l',
  combined_score: '0.989'
},
{
  "#node1": 'Rps14',
  node2: 'Rps25',
  combined_score: '0.989'
},
{
  "#node1": 'Atp5d',
  node2: 'Ndufs2',
  combined_score: '0.987'
},
{
  "#node1": 'Atp5d',
  node2: 'Uqcrc1',
  combined_score: '0.987'
},
{
  "#node1": 'Atp5d',
  node2: 'Ndufv2',
  combined_score: '0.986'
},
{
  "#node1": 'Rpl18',
  node2: 'Rpl3',
  combined_score: '0.986'
},
{
  "#node1": 'Actr1a',
  node2: 'Dync1h1',
  combined_score: '0.981'
},
{
  "#node1": 'ENSRNOP00000027246',
  node2: 'Rps5',
  combined_score: '0.981'
},
{
  "#node1": 'Ndufv2',
  node2: 'Uqcrq',
  combined_score: '0.981'
},
{
  "#node1": 'Ppme1',
  node2: 'Ppp2r2a',
  combined_score: '0.981'
},
{
  "#node1": 'LOC684988',
  node2: 'Rps5',
  combined_score: '0.98'
},
{
  "#node1": 'Rpl3',
  node2: 'Rps5',
  combined_score: '0.98'
},
{
  "#node1": 'Aprt',
  node2: 'Gda',
  combined_score: '0.973'
},
{
  "#node1": 'ENSRNOP00000027246',
  node2: 'Rps14',
  combined_score: '0.971'
},
{
  "#node1": 'Ndufs4',
  node2: 'Uqcrc1',
  combined_score: '0.971'
},
{
  "#node1": 'Rpl18',
  node2: 'Rps14',
  combined_score: '0.97'
},
{
  "#node1": 'Abat',
  node2: 'Aldh2',
  combined_score: '0.969'
},
{
  "#node1": 'Hist1h2bh',
  node2: 'LOC690131',
  combined_score: '0.969'
},
{
  "#node1": 'Rab7a',
  node2: 'Tbc1d2',
  combined_score: '0.967'
},
{
  "#node1": 'Atp5d',
  node2: 'Dlst',
  combined_score: '0.964'
},
{
  "#node1": 'Actr3',
  node2: 'Arpc5l',
  combined_score: '0.962'
},
{
  "#node1": 'ND5',
  node2: 'Uqcrc1',
  combined_score: '0.959'
},
{
  "#node1": 'Atp5i',
  node2: 'Uqcrq',
  combined_score: '0.956'
},
{
  "#node1": 'Atp5d',
  node2: 'Atp6v0c',
  combined_score: '0.955'
},
{
  "#node1": 'LOC684988',
  node2: 'Rpl18',
  combined_score: '0.952'
},
{
  "#node1": 'Rps18',
  node2: 'Rps5',
  combined_score: '0.952'
},
{
  "#node1": 'Sars',
  node2: 'Yars',
  combined_score: '0.951'
},
{
  "#node1": 'Atp5i',
  node2: 'Ndufv2',
  combined_score: '0.95'
},
{
  "#node1": 'ND4',
  node2: 'Uqcrc1',
  combined_score: '0.947'
},
{
  "#node1": 'Nme1',
  node2: 'Nme2',
  combined_score: '0.946'
},
{
  "#node1": 'Fh',
  node2: 'Got1',
  combined_score: '0.943'
},
{
  "#node1": 'Calr',
  node2: 'Pdia6',
  combined_score: '0.94'
},
{
  "#node1": 'Itpr1',
  node2: 'Prkacb',
  combined_score: '0.937'
},
{
  "#node1": 'Atp5d',
  node2: 'Uqcrq',
  combined_score: '0.931'
},
{
  "#node1": 'ENSRNOP00000021725',
  node2: 'Rpl3',
  combined_score: '0.93'
},
{
  "#node1": 'LOC684988',
  node2: 'Rps14',
  combined_score: '0.93'
},
{
  "#node1": 'Rps14',
  node2: 'Rps18',
  combined_score: '0.93'
},
{
  "#node1": 'ND4',
  node2: 'Uqcrq',
  combined_score: '0.929'
},
{
  "#node1": 'ND5',
  node2: 'Uqcrq',
  combined_score: '0.929'
},
{
  "#node1": 'ENSRNOP00000021725',
  node2: 'Rps5',
  combined_score: '0.926'
},
{
  "#node1": 'ENSRNOP00000027246',
  node2: 'Rps25',
  combined_score: '0.922'
},
{
  "#node1": 'Rpl18',
  node2: 'Rps25',
  combined_score: '0.921'
},
{
  "#node1": 'Atp5i',
  node2: 'Ndufs4',
  combined_score: '0.916'
},
{
  "#node1": 'Eno1',
  node2: 'Pgk1',
  combined_score: '0.914'
},
{
  "#node1": 'Atp5d',
  node2: 'Ndufs4',
  combined_score: '0.913'
},
{
  "#node1": 'Dlst',
  node2: 'Fh',
  combined_score: '0.913'
},
{
  "#node1": 'ENSRNOP00000021725',
  node2: 'Rpl18',
  combined_score: '0.911'
},
{
  "#node1": 'Got1',
  node2: 'Lap3',
  combined_score: '0.91'
},
{
  "#node1": 'Dync1h1',
  node2: 'Tubb3',
  combined_score: '0.902'
},
{
  "#node1": 'ENSRNOP00000027246',
  node2: 'Rpl18',
  combined_score: '0.902'
},
{
  "#node1": 'Rpl18',
  node2: 'Rps18',
  combined_score: '0.901'
},
{
  "#node1": 'Dync1li1',
  node2: 'Pafah1b1',
  combined_score: '0.899'
},
{
  "#node1": 'Actr1a',
  node2: 'Pafah1b1',
  combined_score: '0.898'
},
]
export const Num11echartsData = () => [  {
  "#node1": 'COX1',
  node2: 'COX3',
  combined_score: '0.999'
},
{
  "#node1": 'COX1',
  node2: 'Uqcrfs1',
  combined_score: '0.998'
},
{
  "#node1": 'COX1',
  node2: 'ND4',
  combined_score: '0.997'
},
{
  "#node1": 'COX3',
  node2: 'ND4',
  combined_score: '0.996'
},
{
  "#node1": 'COX3',
  node2: 'Uqcrfs1',
  combined_score: '0.995'
},
{
  "#node1": 'Atp5f1',
  node2: 'Uqcrfs1',
  combined_score: '0.989'
},
{
  "#node1": 'ND4',
  node2: 'Uqcrfs1',
  combined_score: '0.984'
},
{
  "#node1": 'Kras',
  node2: 'Uba52',
  combined_score: '0.909'
},
{
  "#node1": 'Park7',
  node2: 'Sod2',
  combined_score: '0.89'
},
{
  "#node1": 'Rpl7a',
  node2: 'Uba52',
  combined_score: '0.841'
},
{
  "#node1": 'Prdx3',
  node2: 'Sod2',
  combined_score: '0.758'
},
{
  "#node1": 'Glo1',
  node2: 'Park7',
  combined_score: '0.722'
},
{
  "#node1": 'Atp5f1',
  node2: 'Prdx3',
  combined_score: '0.7'
},
{
  "#node1": 'Park7',
  node2: 'Prdx3',
  combined_score: '0.673'
},
{
  "#node1": 'Kras',
  node2: 'Rap1b',
  combined_score: '0.672'
},
{
  "#node1": 'Prdx3',
  node2: 'Uqcrfs1',
  combined_score: '0.648'
},
{
  "#node1": 'Rab2a',
  node2: 'Rab7a',
  combined_score: '0.633'
},
{
  "#node1": 'Sod2',
  node2: 'Uqcrfs1',
  combined_score: '0.577'
},
{
  "#node1": 'Apoe',
  node2: 'Cst3',
  combined_score: '0.567'
},
{
  "#node1": 'Rab7a',
  node2: 'Rap1b',
  combined_score: '0.561'
},
{
  "#node1": 'Park7',
  node2: 'Uba52',
  combined_score: '0.543'
},
{
  "#node1": 'Rab14',
  node2: 'Rab2a',
  combined_score: '0.53'
},
{
  "#node1": 'COX1',
  node2: 'Sod2',
  combined_score: '0.502'
},
{
  "#node1": 'Atp5f1',
  node2: 'COX1',
  combined_score: '0.452'
},
{
  "#node1": 'Gstp1',
  node2: 'Sod2',
  combined_score: '0.438'
},
{
  "#node1": 'Gstp1',
  node2: 'Prdx3',
  combined_score: '0.424'
},
{
  "#node1": 'Glo1',
  node2: 'Sod2',
  combined_score: '0.418'
},
{
  "#node1": 'COX3',
  node2: 'Sod2',
  combined_score: '0.412'
},
{
  "#node1": 'Myl6',
  node2: 'Park7',
  combined_score: '0.412'
},
{
  "#node1": 'Park7',
  node2: 'Uqcrfs1',
  combined_score: '0.403'
},
]
export const Num12echartsData = () => [  {
  "#node1": 'Got2',
  node2: 'Mdh2',
  combined_score: '0.997'
},
{
  "#node1": 'Pgam1',
  node2: 'Pgk1',
  combined_score: '0.996'
},
{
  "#node1": 'Gapdh',
  node2: 'Pgk1',
  combined_score: '0.984'
},
{
  "#node1": 'LOC500959',
  node2: 'Pgk1',
  combined_score: '0.974'
},
{
  "#node1": 'Gapdh',
  node2: 'LOC500959',
  combined_score: '0.965'
},
{
  "#node1": 'Mdh2',
  node2: 'Suclg1',
  combined_score: '0.96'
},
{
  "#node1": 'Ywhab',
  node2: 'Ywhag',
  combined_score: '0.95'
},
{
  "#node1": 'LOC500959',
  node2: 'Pgam1',
  combined_score: '0.93'
},
{
  "#node1": 'Anxa5',
  node2: 'Sod1',
  combined_score: '0.924'
},
{
  "#node1": 'Gnb1',
  node2: 'Gnb2',
  combined_score: '0.905'
},
{
  "#node1": 'Map2k1',
  node2: 'Ywhab',
  combined_score: '0.893'
},
{
  "#node1": 'Anxa5',
  node2: 'Gapdh',
  combined_score: '0.821'
},
{
  "#node1": 'Got2',
  node2: 'LOC500959',
  combined_score: '0.798'
},
{
  "#node1": 'LOC500959',
  node2: 'Mdh2',
  combined_score: '0.787'
},
{
  "#node1": 'Mdh2',
  node2: 'Pgk1',
  combined_score: '0.766'
},
{
  "#node1": 'Map2k1',
  node2: 'Ywhag',
  combined_score: '0.726'
},
{
  "#node1": 'Got2',
  node2: 'Hspd1',
  combined_score: '0.681'
},
{
  "#node1": 'LOC500959',
  node2: 'Sod1',
  combined_score: '0.638'
},
{
  "#node1": 'Gapdh',
  node2: 'Map2k1',
  combined_score: '0.627'
},
{
  "#node1": 'Gapdh',
  node2: 'Mbp',
  combined_score: '0.607'
},
{
  "#node1": 'Got2',
  node2: 'Sod1',
  combined_score: '0.579'
},
{
  "#node1": 'Gapdh',
  node2: 'Pgam1',
  combined_score: '0.576'
},
{
  "#node1": 'Slc1a2',
  node2: 'Sod1',
  combined_score: '0.575'
},
{
  "#node1": 'Mdh2',
  node2: 'Pgam1',
  combined_score: '0.572'
},
{
  "#node1": 'Gapdh',
  node2: 'Sod1',
  combined_score: '0.551'
},
{
  "#node1": 'Mbp',
  node2: 'Syn1',
  combined_score: '0.546'
},
{
  "#node1": 'Pgk1',
  node2: 'Suclg1',
  combined_score: '0.535'
},
{
  "#node1": 'Gapdh',
  node2: 'Mdh2',
  combined_score: '0.509'
},
{
  "#node1": 'Gnb2',
  node2: 'Ywhab',
  combined_score: '0.508'
},
{
  "#node1": 'Mbp',
  node2: 'Slc1a2',
  combined_score: '0.508'
},
{
  "#node1": 'Gapdh',
  node2: 'Syn1',
  combined_score: '0.504'
},
{
  "#node1": 'Gapdh',
  node2: 'Slc1a2',
  combined_score: '0.502'
},
{
  "#node1": 'Hspd1',
  node2: 'Pgk1',
  combined_score: '0.487'
},
{
  "#node1": 'Hspd1',
  node2: 'Mdh2',
  combined_score: '0.479'
},
{
  "#node1": 'Gapdh',
  node2: 'Got2',
  combined_score: '0.478'
},
{
  "#node1": 'Hspd1',
  node2: 'Suclg1',
  combined_score: '0.475'
},
{
  "#node1": 'LOC500959',
  node2: 'Suclg1',
  combined_score: '0.473'
},
{
  "#node1": 'Gnb1',
  node2: 'Map2k1',
  combined_score: '0.468'
},
{
  "#node1": 'Slc1a2',
  node2: 'Syn1',
  combined_score: '0.466'
},
{
  "#node1": 'Anxa5',
  node2: 'Map2k1',
  combined_score: '0.465'
},
{
  "#node1": 'Got2',
  node2: 'Pgk1',
  combined_score: '0.451'
},
{
  "#node1": 'Pgam1',
  node2: 'Suclg1',
  combined_score: '0.449'
},
{
  "#node1": 'Got2',
  node2: 'Suclg1',
  combined_score: '0.443'
},
{
  "#node1": 'ENSRNOP00000014441',
  node2: 'Syn1',
  combined_score: '0.433'
},
{
  "#node1": 'Gnb2',
  node2: 'Map2k1',
  combined_score: '0.431'
},
{
  "#node1": 'Gapdh',
  node2: 'Hspd1',
  combined_score: '0.418'
},
{
  "#node1": 'Dpysl4',
  node2: 'Syn1',
  combined_score: '0.413'
},
]
export const Num13echartsData = () => [  {
  "#node1": 'DIS3L',
  node2: 'EXOSC9',
  combined_score: '0.999'
},
{
  "#node1": 'FN1',
  node2: 'ITGB1',
  combined_score: '0.999'
},
{
  "#node1": 'HSPB1',
  node2: 'MAPKAPK2',
  combined_score: '0.999'
},
{
  "#node1": 'LSM4',
  node2: 'LSM5',
  combined_score: '0.999'
},
{
  "#node1": 'MRPS5',
  node2: 'MRPS9',
  combined_score: '0.999'
},
{
  "#node1": 'RPL32',
  node2: 'RPL5',
  combined_score: '0.999'
},
{
  "#node1": 'RPL32',
  node2: 'RPS10',
  combined_score: '0.999'
},
{
  "#node1": 'RPL32',
  node2: 'RPL9',
  combined_score: '0.999'
},
{
  "#node1": 'RPL32',
  node2: 'RPL7',
  combined_score: '0.999'
},
{
  "#node1": 'RPL5',
  node2: 'RPL9',
  combined_score: '0.999'
},
{
  "#node1": 'RPL5',
  node2: 'RPL7',
  combined_score: '0.999'
},
{
  "#node1": 'RPL7',
  node2: 'RPS10',
  combined_score: '0.999'
},
{
  "#node1": 'RPL7',
  node2: 'RPL9',
  combined_score: '0.999'
},
{
  "#node1": 'RPL9',
  node2: 'RPS10',
  combined_score: '0.999'
},
{
  "#node1": 'EXOSC9',
  node2: 'MTREX',
  combined_score: '0.998'
},
{
  "#node1": 'RICTOR',
  node2: 'RPTOR',
  combined_score: '0.998'
},
{
  "#node1": 'LSM4',
  node2: 'ZMAT2',
  combined_score: '0.997'
},
{
  "#node1": 'EVC',
  node2: 'EVC2',
  combined_score: '0.995'
},
{
  "#node1": 'RPL5',
  node2: 'RPS10',
  combined_score: '0.995'
},
{
  "#node1": 'CREBBP',
  node2: 'PPARG',
  combined_score: '0.994'
},
{
  "#node1": 'LSM4',
  node2: 'PRPF4',
  combined_score: '0.994'
},
{
  "#node1": 'LSM5',
  node2: 'ZMAT2',
  combined_score: '0.993'
},
{
  "#node1": 'PIKFYVE',
  node2: 'SACM1L',
  combined_score: '0.993'
},
{
  "#node1": 'MTREX',
  node2: 'UTP15',
  combined_score: '0.992'
},
{
  "#node1": 'LSM5',
  node2: 'PRPF4',
  combined_score: '0.991'
},
{
  "#node1": 'AXIN1',
  node2: 'CSNK1A1',
  combined_score: '0.99'
},
{
  "#node1": 'MRPS10',
  node2: 'MRPS17',
  combined_score: '0.99'
},
{
  "#node1": 'MRPS10',
  node2: 'MRPS9',
  combined_score: '0.989'
},
{
  "#node1": 'NBR1',
  node2: 'SQSTM1',
  combined_score: '0.988'
},
{
  "#node1": 'MRPS17',
  node2: 'MRPS35',
  combined_score: '0.987'
},
{
  "#node1": 'MRPS35',
  node2: 'MRPS5',
  combined_score: '0.987'
},
{
  "#node1": 'DIS3L',
  node2: 'MTREX',
  combined_score: '0.986'
},
{
  "#node1": 'BUD13',
  node2: 'SF3B4',
  combined_score: '0.984'
},
{
  "#node1": 'MRPS10',
  node2: 'MRPS5',
  combined_score: '0.984'
},
{
  "#node1": 'MRPS17',
  node2: 'MRPS9',
  combined_score: '0.984'
},
{
  "#node1": 'MRPS17',
  node2: 'MRPS5',
  combined_score: '0.984'
},
{
  "#node1": 'MRPS35',
  node2: 'MRPS9',
  combined_score: '0.982'
},
{
  "#node1": 'GAPDH',
  node2: 'GPI',
  combined_score: '0.981'
},
{
  "#node1": 'HRAS',
  node2: 'RASGRF1',
  combined_score: '0.981'
},
{
  "#node1": 'FN1',
  node2: 'THBS1',
  combined_score: '0.98'
},
{
  "#node1": 'NCOR2',
  node2: 'PPARG',
  combined_score: '0.98'
},
{
  "#node1": 'MEAF6',
  node2: 'TRRAP',
  combined_score: '0.979'
},
{
  "#node1": 'BRD7',
  node2: 'SMARCB1',
  combined_score: '0.976'
},
{
  "#node1": 'NDUFA12',
  node2: 'NDUFB8',
  combined_score: '0.975'
},
{
  "#node1": 'ACOX1',
  node2: 'ACOX3',
  combined_score: '0.973'
},
{
  "#node1": 'DRG1',
  node2: 'ZC3H15',
  combined_score: '0.973'
},
{
  "#node1": 'ING3',
  node2: 'TRRAP',
  combined_score: '0.973'
},
{
  "#node1": 'AXIN1',
  node2: 'AXIN2',
  combined_score: '0.972'
},
{
  "#node1": 'COQ7',
  node2: 'COQ9',
  combined_score: '0.972'
},
{
  "#node1": 'AK3',
  node2: 'NME3',
  combined_score: '0.971'
},
{
  "#node1": 'AMBRA1',
  node2: 'PIK3R4',
  combined_score: '0.97'
},
{
  "#node1": 'TBK1',
  node2: 'TRAF2',
  combined_score: '0.97'
},
{
  "#node1": 'NLE1',
  node2: 'UTP15',
  combined_score: '0.968'
},
{
  "#node1": 'GALM',
  node2: 'GLA',
  combined_score: '0.966'
},
{
  "#node1": 'PRPF18',
  node2: 'ZMAT2',
  combined_score: '0.966'
},
{
  "#node1": 'GLI1',
  node2: 'SMO',
  combined_score: '0.964'
},
{
  "#node1": 'TNFRSF9',
  node2: 'TRAF2',
  combined_score: '0.964'
},
{
  "#node1": 'NT5C',
  node2: 'TK1',
  combined_score: '0.963'
},
{
  "#node1": 'ALDH7A1',
  node2: 'UPB1',
  combined_score: '0.962'
},
{
  "#node1": 'ACOX3',
  node2: 'ACSS3',
  combined_score: '0.96'
},
{
  "#node1": 'ATF2',
  node2: 'CREBBP',
  combined_score: '0.959'
},
{
  "#node1": 'CANT1',
  node2: 'NT5C',
  combined_score: '0.955'
},
{
  "#node1": 'COL4A1',
  node2: 'ITGB1',
  combined_score: '0.954'
},
{
  "#node1": 'PI4KB',
  node2: 'SACM1L',
  combined_score: '0.954'
},
{
  "#node1": 'ACOX1',
  node2: 'ALDH7A1',
  combined_score: '0.953'
},
{
  "#node1": 'ACOX3',
  node2: 'ALDH7A1',
  combined_score: '0.951'
},
{
  "#node1": 'ATG12',
  node2: 'SQSTM1',
  combined_score: '0.951'
},
{
  "#node1": 'PRPF4',
  node2: 'SF3B4',
  combined_score: '0.95'
},
{
  "#node1": 'FZD10',
  node2: 'ROR1',
  combined_score: '0.949'
},
{
  "#node1": 'MRPL35',
  node2: 'MRPS5',
  combined_score: '0.949'
},
{
  "#node1": 'MRPS10',
  node2: 'MRPS35',
  combined_score: '0.949'
},
{
  "#node1": 'SF3B4',
  node2: 'ZMAT2',
  combined_score: '0.949'
},
{
  "#node1": 'AP2B1',
  node2: 'AP2S1',
  combined_score: '0.947'
},
{
  "#node1": 'AXIN2',
  node2: 'CSNK1A1',
  combined_score: '0.947'
},
{
  "#node1": 'FNTA',
  node2: 'HRAS',
  combined_score: '0.947'
},
{
  "#node1": 'AK3',
  node2: 'NT5C',
  combined_score: '0.946'
},
{
  "#node1": 'AK3',
  node2: 'PDE3B',
  combined_score: '0.946'
},
{
  "#node1": 'GSPT1',
  node2: 'RPL9',
  combined_score: '0.945'
},
{
  "#node1": 'LSM4',
  node2: 'SF3B4',
  combined_score: '0.945'
},
{
  "#node1": 'ADAMTS5',
  node2: 'THBS1',
  combined_score: '0.944'
},
]
export const Num14echartsData = () => [  {
  "#node1": 'AGER',
  node2: 'HMGB1',
  combined_score: '0.999'
},
{
  "#node1": 'ANXA2',
  node2: 'PLAT',
  combined_score: '0.999'
},
{
  "#node1": 'ANXA2',
  node2: 'PLG',
  combined_score: '0.999'
},
{
  "#node1": 'ANXA2',
  node2: 'S100A4',
  combined_score: '0.999'
},
{
  "#node1": 'APOE',
  node2: 'LRP1',
  combined_score: '0.999'
},
{
  "#node1": 'APOE',
  node2: 'LRP8',
  combined_score: '0.999'
},
{
  "#node1": 'AREG',
  node2: 'EGFR',
  combined_score: '0.999'
},
{
  "#node1": 'ARTN',
  node2: 'GFRA3',
  combined_score: '0.999'
},
{
  "#node1": 'B2M',
  node2: 'CALR',
  combined_score: '0.999'
},
{
  "#node1": 'BDNF',
  node2: 'NTRK2',
  combined_score: '0.999'
},
{
  "#node1": 'BDNF',
  node2: 'NTRK1',
  combined_score: '0.999'
},
{
  "#node1": 'BMP7',
  node2: 'BMPR1A',
  combined_score: '0.999'
},
{
  "#node1": 'BTC',
  node2: 'EGFR',
  combined_score: '0.999'
},
{
  "#node1": 'C1R',
  node2: 'SERPING1',
  combined_score: '0.999'
},
{
  "#node1": 'C3',
  node2: 'CFI',
  combined_score: '0.999'
},
{
  "#node1": 'C3',
  node2: 'CFH',
  combined_score: '0.999'
},
{
  "#node1": 'C3',
  node2: 'CFB',
  combined_score: '0.999'
},
{
  "#node1": 'CCNB1',
  node2: 'PLK1',
  combined_score: '0.999'
},
{
  "#node1": 'CD27',
  node2: 'CD70',
  combined_score: '0.999'
},
{
  "#node1": 'CD4',
  node2: 'LCK',
  combined_score: '0.999'
},
{
  "#node1": 'CD47',
  node2: 'THBS1',
  combined_score: '0.999'
},
{
  "#node1": 'CD47',
  node2: 'SIRPA',
  combined_score: '0.999'
},
{
  "#node1": 'CDH1',
  node2: 'EGFR',
  combined_score: '0.999'
},
{
  "#node1": 'CDH1',
  node2: 'MET',
  combined_score: '0.999'
},
{
  "#node1": 'CDH1',
  node2: 'SRC',
  combined_score: '0.999'
},
{
  "#node1": 'CDH5',
  node2: 'KDR',
  combined_score: '0.999'
},
{
  "#node1": 'CDON',
  node2: 'SHH',
  combined_score: '0.999'
},
{
  "#node1": 'CRK',
  node2: 'SRC',
  combined_score: '0.999'
},
{
  "#node1": 'CRLF2',
  node2: 'IL7R',
  combined_score: '0.999'
},
{
  "#node1": 'CRLF2',
  node2: 'TSLP',
  combined_score: '0.999'
},
{
  "#node1": 'CSF1',
  node2: 'CSF1R',
  combined_score: '0.999'
},
{
  "#node1": 'EFNA5',
  node2: 'EPHA5',
  combined_score: '0.999'
},
{
  "#node1": 'EFNA5',
  node2: 'EPHB2',
  combined_score: '0.999'
},
{
  "#node1": 'EFNA5',
  node2: 'EPHA2',
  combined_score: '0.999'
},
{
  "#node1": 'EFNB1',
  node2: 'EPHB2',
  combined_score: '0.999'
},
{
  "#node1": 'EFNB2',
  node2: 'EPHB4',
  combined_score: '0.999'
},
{
  "#node1": 'EFNB2',
  node2: 'EPHB2',
  combined_score: '0.999'
},
{
  "#node1": 'EGF',
  node2: 'ERBB2',
  combined_score: '0.999'
},
{
  "#node1": 'EGF',
  node2: 'ERBB3',
  combined_score: '0.999'
},
{
  "#node1": 'EGF',
  node2: 'EGFR',
  combined_score: '0.999'
},
{
  "#node1": 'EGFR',
  node2: 'PLCG1',
  combined_score: '0.999'
},
{
  "#node1": 'EGFR',
  node2: 'EREG',
  combined_score: '0.999'
},
{
  "#node1": 'EGFR',
  node2: 'STAT3',
  combined_score: '0.999'
},
{
  "#node1": 'EGFR',
  node2: 'NRG1',
  combined_score: '0.999'
},
{
  "#node1": 'EGFR',
  node2: 'SHC1',
  combined_score: '0.999'
},
{
  "#node1": 'EGFR',
  node2: 'PTPN11',
  combined_score: '0.999'
},
{
  "#node1": 'EGFR',
  node2: 'GRB2',
  combined_score: '0.999'
},
{
  "#node1": 'ENG',
  node2: 'TGFB1',
  combined_score: '0.999'
},
{
  "#node1": 'ENG',
  node2: 'TGFB3',
  combined_score: '0.999'
},
{
  "#node1": 'ENG',
  node2: 'GDF2',
  combined_score: '0.999'
},
{
  "#node1": 'EPOR',
  node2: 'JAK2',
  combined_score: '0.999'
},
{
  "#node1": 'ERBB2',
  node2: 'GRB2',
  combined_score: '0.999'
},
{
  "#node1": 'ERBB2',
  node2: 'SHC1',
  combined_score: '0.999'
},
{
  "#node1": 'ERBB2',
  node2: 'NRG1',
  combined_score: '0.999'
},
{
  "#node1": 'ERBB3',
  node2: 'NRG1',
  combined_score: '0.999'
},
{
  "#node1": 'ERBB3',
  node2: 'GRB2',
  combined_score: '0.999'
},
{
  "#node1": 'ERBB3',
  node2: 'SHC1',
  combined_score: '0.999'
},
{
  "#node1": 'ERBB4',
  node2: 'NRG1',
  combined_score: '0.999'
},
{
  "#node1": 'ERBB4',
  node2: 'GRB2',
  combined_score: '0.999'
},
{
  "#node1": 'ERBB4',
  node2: 'SHC1',
  combined_score: '0.999'
},
{
  "#node1": 'ESR1',
  node2: 'MED1',
  combined_score: '0.999'
},
{
  "#node1": 'ESR1',
  node2: 'JUN',
  combined_score: '0.999'
},
{
  "#node1": 'ESR1',
  node2: 'SRC',
  combined_score: '0.999'
},
{
  "#node1": 'F10',
  node2: 'SERPINC1',
  combined_score: '0.999'
},
{
  "#node1": 'F2',
  node2: 'SERPIND1',
  combined_score: '0.999'
},
{
  "#node1": 'F2',
  node2: 'SERPINC1',
  combined_score: '0.999'
},
{
  "#node1": 'F9',
  node2: 'SERPINC1',
  combined_score: '0.999'
},
{
  "#node1": 'FAS',
  node2: 'FASLG',
  combined_score: '0.999'
},
{
  "#node1": 'FGF1',
  node2: 'FGFR1',
  combined_score: '0.999'
},
{
  "#node1": 'FGF9',
  node2: 'FGFR3',
  combined_score: '0.999'
},
{
  "#node1": 'FGFR1',
  node2: 'PLCG1',
  combined_score: '0.999'
},
{
  "#node1": 'FIGF',
  node2: 'KDR',
  combined_score: '0.999'
},
{
  "#node1": 'FLT3',
  node2: 'FLT3LG',
  combined_score: '0.999'
},
{
  "#node1": 'GAPDH',
  node2: 'SYNCRIP',
  combined_score: '0.999'
},
{
  "#node1": 'GAPDH',
  node2: 'TPI1',
  combined_score: '0.999'
},
{
  "#node1": 'GAS1',
  node2: 'SHH',
  combined_score: '0.999'
},
{
  "#node1": 'GDNF',
  node2: 'GFRA1',
  combined_score: '0.999'
},
{
  "#node1": 'GDNF',
  node2: 'RET',
  combined_score: '0.999'
},
{
  "#node1": 'GFRA1',
  node2: 'RET',
  combined_score: '0.999'
},
{
  "#node1": 'GH1',
  node2: 'GHR',
  combined_score: '0.999'
},
]
export const Num15echartsData = () => [  {
  "#node1": 'A1BG',
  node2: 'CHL1',
  combined_score: '9606.ENSP00000263100'
},
{
  "#node1": 'A1BG',
  node2: 'ITIH3',
  combined_score: '9606.ENSP00000263100'
},
{
  "#node1": 'A1BG',
  node2: 'ITIH1',
  combined_score: '9606.ENSP00000263100'
},
{
  "#node1": 'ALDOB',
  node2: 'APOC3',
  combined_score: '9606.ENSP00000363988'
},
{
  "#node1": 'APOC3',
  node2: 'ITIH3',
  combined_score: '9606.ENSP00000227667'
},
{
  "#node1": 'APOC3',
  node2: 'APOD',
  combined_score: '9606.ENSP00000227667'
},
{
  "#node1": 'APOC3',
  node2: 'ENSP00000252490',
  combined_score: '9606.ENSP00000227667'
},
{
  "#node1": 'APOC3',
  node2: 'LRP1',
  combined_score: '9606.ENSP00000227667'
},
{
  "#node1": 'APOD',
  node2: 'PTGDS',
  combined_score: '9606.ENSP00000345179'
},
{
  "#node1": 'C1QA',
  node2: 'LRP1',
  combined_score: '9606.ENSP00000363773'
},
{
  "#node1": 'C1QA',
  node2: 'VWF',
  combined_score: '9606.ENSP00000363773'
},
{
  "#node1": 'C1QA',
  node2: 'VCAM1',
  combined_score: '9606.ENSP00000363773'
},
{
  "#node1": 'C1QA',
  node2: 'MASP1',
  combined_score: '9606.ENSP00000363773'
},
{
  "#node1": 'C1QA',
  node2: 'CD14',
  combined_score: '9606.ENSP00000363773'
},
{
  "#node1": 'CD14',
  node2: 'LUM',
  combined_score: '9606.ENSP00000304236'
},
{
  "#node1": 'CD14',
  node2: 'CD44',
  combined_score: '9606.ENSP00000304236'
},
{
  "#node1": 'CD44',
  node2: 'MMP2',
  combined_score: '9606.ENSP00000398632'
},
{
  "#node1": 'CD44',
  node2: 'SRGN',
  combined_score: '9606.ENSP00000398632'
},
{
  "#node1": 'CD44',
  node2: 'LRP1',
  combined_score: '9606.ENSP00000398632'
},
{
  "#node1": 'CD44',
  node2: 'CHL1',
  combined_score: '9606.ENSP00000398632'
},
{
  "#node1": 'CD44',
  node2: 'VWF',
  combined_score: '9606.ENSP00000398632'
},
{
  "#node1": 'CD44',
  node2: 'LUM',
  combined_score: '9606.ENSP00000398632'
},
{
  "#node1": 'CD44',
  node2: 'ITIH1',
  combined_score: '9606.ENSP00000398632'
},
{
  "#node1": 'CD44',
  node2: 'VCAM1',
  combined_score: '9606.ENSP00000398632'
},
{
  "#node1": 'CD44',
  node2: 'CD59',
  combined_score: '9606.ENSP00000398632'
},
{
  "#node1": 'CD59',
  node2: 'MASP1',
  combined_score: '9606.ENSP00000379191'
},
{
  "#node1": 'FBLN1',
  node2: 'MMP2',
  combined_score: '9606.ENSP00000331544'
},
{
  "#node1": 'FBLN1',
  node2: 'LUM',
  combined_score: '9606.ENSP00000331544'
},
{
  "#node1": 'LRP1',
  node2: 'MMP2',
  combined_score: '9606.ENSP00000243077'
},
{
  "#node1": 'LRP1',
  node2: 'VWF',
  combined_score: '9606.ENSP00000243077'
},
{
  "#node1": 'LUM',
  node2: 'MMP2',
  combined_score: '9606.ENSP00000266718'
},
{
  "#node1": 'MMP2',
  node2: 'VWF',
  combined_score: '9606.ENSP00000219070'
},
{
  "#node1": 'MMP2',
  node2: 'VCAM1',
  combined_score: '9606.ENSP00000219070'
},
{
  "#node1": 'MMRN1',
  node2: 'VWF',
  combined_score: '9606.ENSP00000378431'
},
{
  "#node1": 'VCAM1',
  node2: 'VWF',
  combined_score: '9606.ENSP00000294728'
},
]
export const Num16echartsData = () => [  {
  "#node1": 'ACTN2',
  node2: 'TTN',
  combined_score: '0.999'
},
{
  "#node1": 'AHSA1',
  node2: 'HSP90AA1',
  combined_score: '0.999'
},
{
  "#node1": 'ANGPT1',
  node2: 'TEK',
  combined_score: '0.999'
},
{
  "#node1": 'ANGPT2',
  node2: 'TEK',
  combined_score: '0.999'
},
{
  "#node1": 'APOA1',
  node2: 'APOC3',
  combined_score: '0.999'
},
{
  "#node1": 'APOA1',
  node2: 'PLTP',
  combined_score: '0.999'
},
{
  "#node1": 'APOA1',
  node2: 'APOA2',
  combined_score: '0.999'
},
{
  "#node1": 'AREG',
  node2: 'EGFR',
  combined_score: '0.999'
},
{
  "#node1": 'B2M',
  node2: 'CALR',
  combined_score: '0.999'
},
{
  "#node1": 'B2M',
  node2: 'TFRC',
  combined_score: '0.999'
},
{
  "#node1": 'B2M',
  node2: 'CD8A',
  combined_score: '0.999'
},
{
  "#node1": 'BAD',
  node2: 'BCL2L1',
  combined_score: '0.999'
},
{
  "#node1": 'BRAF',
  node2: 'KRAS',
  combined_score: '0.999'
},
{
  "#node1": 'BRAF',
  node2: 'MAP2K1',
  combined_score: '0.999'
},
{
  "#node1": 'C1R',
  node2: 'SERPING1',
  combined_score: '0.999'
},
{
  "#node1": 'CALR',
  node2: 'PDIA3',
  combined_score: '0.999'
},
{
  "#node1": 'CALR',
  node2: 'P4HB',
  combined_score: '0.999'
},
{
  "#node1": 'CCT7',
  node2: 'CCT8',
  combined_score: '0.999'
},
{
  "#node1": 'CD47',
  node2: 'THBS1',
  combined_score: '0.999'
},
{
  "#node1": 'CD47',
  node2: 'SIRPA',
  combined_score: '0.999'
},
{
  "#node1": 'CDC25B',
  node2: 'YWHAB',
  combined_score: '0.999'
},
{
  "#node1": 'CDC37',
  node2: 'HSP90AB1',
  combined_score: '0.999'
},
{
  "#node1": 'CDC37',
  node2: 'HSP90AA1',
  combined_score: '0.999'
},
{
  "#node1": 'CDH1',
  node2: 'EGFR',
  combined_score: '0.999'
},
{
  "#node1": 'CDH1',
  node2: 'MET',
  combined_score: '0.999'
},
{
  "#node1": 'CDH1',
  node2: 'SRC',
  combined_score: '0.999'
},
{
  "#node1": 'CDH5',
  node2: 'KDR',
  combined_score: '0.999'
},
{
  "#node1": 'CDON',
  node2: 'SHH',
  combined_score: '0.999'
},
{
  "#node1": 'COX5B',
  node2: 'COX6C',
  combined_score: '0.999'
},
{
  "#node1": 'CPLX1',
  node2: 'STX1A',
  combined_score: '0.999'
},
{
  "#node1": 'CRLF2',
  node2: 'IL7R',
  combined_score: '0.999'
},
{
  "#node1": 'CRLF2',
  node2: 'TSLP',
  combined_score: '0.999'
},
{
  "#node1": 'DNAJB1',
  node2: 'HSPA8',
  combined_score: '0.999'
},
{
  "#node1": 'DNAJB1',
  node2: 'HSP90AA1',
  combined_score: '0.999'
},
{
  "#node1": 'EFNA3',
  node2: 'EPHA4',
  combined_score: '0.999'
},
{
  "#node1": 'EFNA5',
  node2: 'EPHA4',
  combined_score: '0.999'
},
{
  "#node1": 'EFNA5',
  node2: 'EPHA5',
  combined_score: '0.999'
},
{
  "#node1": 'EFNA5',
  node2: 'EPHA2',
  combined_score: '0.999'
},
{
  "#node1": 'EFNB1',
  node2: 'EPHB1',
  combined_score: '0.999'
},
{
  "#node1": 'EFNB2',
  node2: 'EPHA4',
  combined_score: '0.999'
},
{
  "#node1": 'EFNB2',
  node2: 'EPHB1',
  combined_score: '0.999'
},
{
  "#node1": 'EGF',
  node2: 'ERBB3',
  combined_score: '0.999'
},
{
  "#node1": 'EGF',
  node2: 'EGFR',
  combined_score: '0.999'
},
{
  "#node1": 'EGFR',
  node2: 'EREG',
  combined_score: '0.999'
},
{
  "#node1": 'EGFR',
  node2: 'STAT3',
  combined_score: '0.999'
},
{
  "#node1": 'EGFR',
  node2: 'SHC1',
  combined_score: '0.999'
},
{
  "#node1": 'EGFR',
  node2: 'PTPN11',
  combined_score: '0.999'
},
{
  "#node1": 'EGFR',
  node2: 'GRB2',
  combined_score: '0.999'
},
{
  "#node1": 'EGFR',
  node2: 'HSP90AA1',
  combined_score: '0.999'
},
{
  "#node1": 'EIF4E',
  node2: 'EIF4EBP2',
  combined_score: '0.999'
},
{
  "#node1": 'ENG',
  node2: 'TGFB1',
  combined_score: '0.999'
},
{
  "#node1": 'ENG',
  node2: 'TGFB3',
  combined_score: '0.999'
},
{
  "#node1": 'ERBB3',
  node2: 'GRB2',
  combined_score: '0.999'
},
{
  "#node1": 'ERBB3',
  node2: 'SHC1',
  combined_score: '0.999'
},
{
  "#node1": 'ERBB4',
  node2: 'GRB2',
  combined_score: '0.999'
},
{
  "#node1": 'ERBB4',
  node2: 'SHC1',
  combined_score: '0.999'
},
{
  "#node1": 'ESR1',
  node2: 'IGF1R',
  combined_score: '0.999'
},
{
  "#node1": 'ESR1',
  node2: 'HSP90AA1',
  combined_score: '0.999'
},
{
  "#node1": 'ESR1',
  node2: 'JUN',
  combined_score: '0.999'
},
{
  "#node1": 'ESR1',
  node2: 'SRC',
  combined_score: '0.999'
},
{
  "#node1": 'F10',
  node2: 'SERPINC1',
  combined_score: '0.999'
},
{
  "#node1": 'F2',
  node2: 'SERPIND1',
  combined_score: '0.999'
},
{
  "#node1": 'F2',
  node2: 'FGA',
  combined_score: '0.999'
},
{
  "#node1": 'F2',
  node2: 'SERPINC1',
  combined_score: '0.999'
},
{
  "#node1": 'F8',
  node2: 'VWF',
  combined_score: '0.999'
},
{
  "#node1": 'F9',
  node2: 'SERPINC1',
  combined_score: '0.999'
},
{
  "#node1": 'FAS',
  node2: 'FASLG',
  combined_score: '0.999'
},
{
  "#node1": 'FGF1',
  node2: 'FGFR2',
  combined_score: '0.999'
},
{
  "#node1": 'FGF10',
  node2: 'FGFR2',
  combined_score: '0.999'
},
{
  "#node1": 'FGF7',
  node2: 'FGFR2',
  combined_score: '0.999'
},
{
  "#node1": 'FGF9',
  node2: 'FGFR3',
  combined_score: '0.999'
},
{
  "#node1": 'FGFR2',
  node2: 'GRB2',
  combined_score: '0.999'
},
{
  "#node1": 'FKBP4',
  node2: 'HSP90AA1',
  combined_score: '0.999'
},
{
  "#node1": 'FKBP4',
  node2: 'NR3C1',
  combined_score: '0.999'
},
{
  "#node1": 'FLT1',
  node2: 'NRP1',
  combined_score: '0.999'
},
{
  "#node1": 'FLT1',
  node2: 'PGF',
  combined_score: '0.999'
},
{
  "#node1": 'FLT4',
  node2: 'VEGFC',
  combined_score: '0.999'
},
{
  "#node1": 'GAPDH',
  node2: 'SYNCRIP',
  combined_score: '0.999'
},
{
  "#node1": 'GAPDH',
  node2: 'TPI1',
  combined_score: '0.999'
},
{
  "#node1": 'GAS1',
  node2: 'SHH',
  combined_score: '0.999'
},
]
export const Num17echartsData = () => [  {
  "#node1": 'ABCE1',
  node2: 'EIF3J',
  combined_score: '0.999'
},
{
  "#node1": 'ABHD5',
  node2: 'PLIN1',
  combined_score: '0.999'
},
{
  "#node1": 'ABI1',
  node2: 'EPS8',
  combined_score: '0.999'
},
{
  "#node1": 'ABI1',
  node2: 'CYFIP2',
  combined_score: '0.999'
},
{
  "#node1": 'ACIN1',
  node2: 'RNPS1',
  combined_score: '0.999'
},
{
  "#node1": 'ACIN1',
  node2: 'SAP18',
  combined_score: '0.999'
},
{
  "#node1": 'ACTB',
  node2: 'SMARCA4',
  combined_score: '0.999'
},
{
  "#node1": 'ACTL6A',
  node2: 'SMARCA4',
  combined_score: '0.999'
},
{
  "#node1": 'ACTL6A',
  node2: 'RUVBL2',
  combined_score: '0.999'
},
{
  "#node1": 'ACTR3',
  node2: 'ARPC3',
  combined_score: '0.999'
},
{
  "#node1": 'ACTR3',
  node2: 'ARPC1A',
  combined_score: '0.999'
},
{
  "#node1": 'ACTR3',
  node2: 'ARPC2',
  combined_score: '0.999'
},
{
  "#node1": 'ACTR3',
  node2: 'ARPC5',
  combined_score: '0.999'
},
{
  "#node1": 'ACTR3',
  node2: 'ARPC4',
  combined_score: '0.999'
},
{
  "#node1": 'ACTR3',
  node2: 'ARPC1B',
  combined_score: '0.999'
},
{
  "#node1": 'AHNAK',
  node2: 'ANXA2',
  combined_score: '0.999'
},
{
  "#node1": 'AHNAK',
  node2: 'S100A10',
  combined_score: '0.999'
},
{
  "#node1": 'AKT1',
  node2: 'PHLPP1',
  combined_score: '0.999'
},
{
  "#node1": 'AKT1',
  node2: 'APPL1',
  combined_score: '0.999'
},
{
  "#node1": 'AKT1',
  node2: 'MTOR',
  combined_score: '0.999'
},
{
  "#node1": 'ALYREF',
  node2: 'THOC2',
  combined_score: '0.999'
},
{
  "#node1": 'ALYREF',
  node2: 'NCBP1',
  combined_score: '0.999'
},
{
  "#node1": 'ALYREF',
  node2: 'DDX39B',
  combined_score: '0.999'
},
{
  "#node1": 'ALYREF',
  node2: 'NXF1',
  combined_score: '0.999'
},
{
  "#node1": 'AMOT',
  node2: 'ARHGAP17',
  combined_score: '0.999'
},
{
  "#node1": 'AMOT',
  node2: 'INADL',
  combined_score: '0.999'
},
{
  "#node1": 'AMT',
  node2: 'GCSH',
  combined_score: '0.999'
},
{
  "#node1": 'ANXA2',
  node2: 'PLAT',
  combined_score: '0.999'
},
{
  "#node1": 'ANXA2',
  node2: 'S100A10',
  combined_score: '0.999'
},
{
  "#node1": 'AP2A2',
  node2: 'AP2M1',
  combined_score: '0.999'
},
{
  "#node1": 'AP2B1',
  node2: 'AP2M1',
  combined_score: '0.999'
},
{
  "#node1": 'AR',
  node2: 'SRC',
  combined_score: '0.999'
},
{
  "#node1": 'ARCN1',
  node2: 'COPZ1',
  combined_score: '0.999'
},
{
  "#node1": 'ARHGDIA',
  node2: 'CDC42',
  combined_score: '0.999'
},
{
  "#node1": 'ARHGDIB',
  node2: 'RAC2',
  combined_score: '0.999'
},
{
  "#node1": 'ARHGEF7',
  node2: 'PAK2',
  combined_score: '0.999'
},
{
  "#node1": 'ARHGEF7',
  node2: 'CDC42',
  combined_score: '0.999'
},
{
  "#node1": 'ARID1B',
  node2: 'SMARCA4',
  combined_score: '0.999'
},
{
  "#node1": 'ARPC1A',
  node2: 'ARPC3',
  combined_score: '0.999'
},
{
  "#node1": 'ARPC1A',
  node2: 'ARPC5',
  combined_score: '0.999'
},
{
  "#node1": 'ARPC1A',
  node2: 'ARPC4',
  combined_score: '0.999'
},
{
  "#node1": 'ARPC1A',
  node2: 'ARPC2',
  combined_score: '0.999'
},
{
  "#node1": 'ARPC1B',
  node2: 'ARPC3',
  combined_score: '0.999'
},
{
  "#node1": 'ARPC1B',
  node2: 'ARPC5',
  combined_score: '0.999'
},
{
  "#node1": 'ARPC1B',
  node2: 'ARPC2',
  combined_score: '0.999'
},
{
  "#node1": 'ARPC1B',
  node2: 'ARPC5L',
  combined_score: '0.999'
},
{
  "#node1": 'ARPC1B',
  node2: 'ARPC4',
  combined_score: '0.999'
},
{
  "#node1": 'ARPC2',
  node2: 'ARPC3',
  combined_score: '0.999'
},
{
  "#node1": 'ARPC2',
  node2: 'ARPC5',
  combined_score: '0.999'
},
{
  "#node1": 'ARPC2',
  node2: 'ARPC5L',
  combined_score: '0.999'
},
{
  "#node1": 'ARPC2',
  node2: 'ARPC4',
  combined_score: '0.999'
},
{
  "#node1": 'ARPC3',
  node2: 'ARPC5L',
  combined_score: '0.999'
},
{
  "#node1": 'ARPC3',
  node2: 'ARPC5',
  combined_score: '0.999'
},
{
  "#node1": 'ARPC3',
  node2: 'ARPC4',
  combined_score: '0.999'
},
{
  "#node1": 'ARPC4',
  node2: 'ARPC5',
  combined_score: '0.999'
},
{
  "#node1": 'ARPC4',
  node2: 'ARPC5L',
  combined_score: '0.999'
},
{
  "#node1": 'ASL',
  node2: 'ASS1',
  combined_score: '0.999'
},
{
  "#node1": 'ATG16L1',
  node2: 'ATG5',
  combined_score: '0.999'
},
{
  "#node1": 'ATP1A1',
  node2: 'ATP1B1',
  combined_score: '0.999'
},
{
  "#node1": 'ATP5A1',
  node2: 'ATP5D',
  combined_score: '0.999'
},
{
  "#node1": 'ATP5A1',
  node2: 'ATP5J2',
  combined_score: '0.999'
},
{
  "#node1": 'ATP5A1',
  node2: 'ATP5C1',
  combined_score: '0.999'
},
{
  "#node1": 'ATP5C1',
  node2: 'ATP5D',
  combined_score: '0.999'
},
{
  "#node1": 'ATP5D',
  node2: 'ATP5J2',
  combined_score: '0.999'
},
{
  "#node1": 'ATP5D',
  node2: 'ATP5J',
  combined_score: '0.999'
},
{
  "#node1": 'ATP5D',
  node2: 'ATP5L',
  combined_score: '0.999'
},
{
  "#node1": 'ATP5J',
  node2: 'ATP5J2',
  combined_score: '0.999'
},
{
  "#node1": 'B2M',
  node2: 'FCGRT',
  combined_score: '0.999'
},
{
  "#node1": 'BABAM1',
  node2: 'BRCC3',
  combined_score: '0.999'
},
{
  "#node1": 'BCAS2',
  node2: 'PRPF19',
  combined_score: '0.999'
},
{
  "#node1": 'BCAS2',
  node2: 'PRPF8',
  combined_score: '0.999'
},
{
  "#node1": 'BCAS2',
  node2: 'PLRG1',
  combined_score: '0.999'
},
{
  "#node1": 'BCAS2',
  node2: 'EFTUD2',
  combined_score: '0.999'
},
{
  "#node1": 'CASC3',
  node2: 'RBM8A',
  combined_score: '0.999'
},
{
  "#node1": 'CASC3',
  node2: 'MAGOH',
  combined_score: '0.999'
},
{
  "#node1": 'CASC3',
  node2: 'MAGOHB',
  combined_score: '0.999'
},
{
  "#node1": 'CASC3',
  node2: 'EIF4A3',
  combined_score: '0.999'
},
{
  "#node1": 'CASP3',
  node2: 'XIAP',
  combined_score: '0.999'
},
{
  "#node1": 'CAV1',
  node2: 'EGFR',
  combined_score: '0.999'
},
{
  "#node1": 'CAV1',
  node2: 'SRC',
  combined_score: '0.999'
},
]
