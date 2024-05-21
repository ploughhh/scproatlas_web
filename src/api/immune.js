export const getImData = (tissue) => {
  let data = [
    {
      name: 'Immune',
      children: [
        {
          name: 'Bladder',
          children: [
            { name: 'Mast cell', value: 0.084 },
            { name: 'Monocyte cell', value: 0.1069 },
            { name: 'Myeloid cell', value: 0.0963 },
            {
              name: 'T cell',
              children: [
                { name: 'CD8+ T cell', value: 0.4249 },
                { name: 'Naive CD4+ T cell', value: 0.1496 },
                { name: 'NK T cell', value: 0.0427 },
                { name: 'Effector CD4+ T cell', value: 0.0911 }
              ]
            }
          ]
        },
        {
          name: 'Prostate',
          value: 1,
          children: [
            { name: 'Marcophage cell', value: 0.5734 },
            { name: 'CD8+ T cell', value: 0.3456 },
            { name: 'CD4+ T cell', value: 0.0811 }
          ]
        },
        {
          name: 'Skin',
          value: 1,
          children: [
            { name: 'CD8+ T cell', value: 0.5385 },
            { name: 'CD4+T cell', value: 0.0832 },
            { name: 'NK T cell', value: 0.0220 },
            { name: 'NK cell', value: 0.0691 },
            { name: 'Monocyte cell', value: 0.1036 },
            { name: 'Plasma cell', value: 0.1031 },
            { name: 'Macrophage cell', value: 0.0806 }
          ]
        },
        {
          name: 'Stomach',
          value: 1,
          children: [
            { name: 'B cell', value: 0.1307 },
            { name: 'Dentritic cell', value: 0.0109 },
            { name: 'Monocyte cell', value: 0.0192 },
            { name: 'Plasma cell', value: 0.1104 },
            {
              name: 'T cell',
              children: [
                { name: 'CD8+ T cell', value: 0.3586 },
                { name: 'CD4+ T cell', value: 0.2610 },
                { name: 'NK T cell', value: 0.1093 }
              ]
            }
          ]
        },
        {
          name: 'Oesphagus',
          value: 1,
          children: [
            { name: 'CD27- B cell', value: 0.3018 },
            { name: 'Mast cell', value: 0.0044 },
            { name: 'Mono-macro cell', value: 0.1154 },
            { name: 'CD4+ T cell', value: 0.5783 }
          ]
        },
        {
          name: 'Heart',
          value: 1,
          children: [
            { name: 'Myeloid cell', value: 0.5967 },
            {
              name: 'Lymphoid cell',
              children: [
                { name: 'CD8+ T cell', value: 0.0804 },
                { name: 'NK T cell', value: 0.0202 },
                { name: 'NK cell', value: 0.2764 },
                { name: 'B cell', value: 0.0262 }
              ]
            }
          ]
        },
        {
          name: 'Intestine',
          value: 1,
          children: [
            { name: 'B cell', value: 0.0574 },
            { name: 'Monocyle cell', value: 0.7296 },
            { name: 'Plasma cell', value: 0.0785 },
            {
              name: 'T cell',
              children: [
                { name: 'CD8+ T cell', value: 0.0422 },
                { name: 'CD4+ T cell', value: 0.0648 },
                { name: 'NK T cell', value: 0.0275 }
              ]
            }
          ]
        },
        {
          name: 'Skeletal Muscle',
          value: 1,
          children: [
            {
              name: 'B/T/NK cell',
              children: [
                { name: 'CD8+ T cell', value: 0.2168 },
                { name: 'CD4+ T cell', value: 0.3691 },
                { name: 'B cell', value: 0.0704 },
                { name: 'NK cell', value: 0.3437 }
              ]
            }
          ]
        },
        {
          name: 'Lung',
          value: 1,
          children: [
            { name: 'Mast cell', value: 0.0296 },
            { name: 'Naive B cell', value: 0.0182 },
            { name: 'Myeloid cell', value: 0.5199 },
            {
              name: 'T cell',
              children: [
                { name: 'CD8+ T cell', value: 0.1936 },
                { name: 'Effector CD4+ T cell', value: 0.1452 },
                { name: 'NK T cell', value: 0.0771 },
                { name: 'Treg cell', value: 0.0164 }
              ]
            }
          ]
        },
        {
          name: 'Blood',
          value: 1,
          children: [
            { name: 'Activated CD8+ T cell', value: 0.2929 },
            { name: 'Blood derived monocyte cell', value: 0.0358 },
            { name: 'Granulocyte cell', value: 0.1463 },
            { name: 'Naive B cell cell', value: 0.1395 },
            { name: 'Naive CD4+ T cell', value: 0.3444 },
            { name: 'Plasmacytoid dendritic cell', value: 0.0032 },
            { name: 'Myeloid dendritic cell', value: 0.0077 },
            { name: 'Cytotoxic T cell', value: 0.0184 },
            { name: 'γδ T cell', value: 0.0118 }
          ]
        },
        {
          name: 'Liver',
          value: 1,
          children: [
            {
              name: 'T cell',
              children: [
                { name: 'CD8+ T cell', value: 0.4913 },
                { name: 'Naive CD4+ T cell', value: 0.2587 },
                { name: 'Memory CD4+ T cell', value: 0.0109 },
                { name: 'NK cell', value: 0.0516 },
                { name: 'NK T cell', value: 0.1359 }
              ]
            },
            { name: 'Naive B cell', value: 0.0516 }
          ]
        },
        {
          name: 'Bone_Marrow',
          value: 1,
          children: [
            { name: 'CD14+ monocytes cell', value: 0.1025 },
            { name: 'CD16+ monocytes cell', value: 0.0245 },
            { name: 'CD20+ B cell', value: 0.0597 },
            { name: 'Naive CD4+ T cell', value: 0.4321 },
            { name: 'Dendritic cell', value: 0.0002 },
            { name: 'Monocyte progenitors cell', value: 0.0485 },
            { name: 'NK cell', value: 0.3114 },
            { name: 'Plasma cell', value: 0.0113 },
            { name: 'Plasmacytoid dendritic cell', value: 0.0089 }
          ]
        }
      ]
    }
  ]
  data = [data[0].children.find(item => item.name === tissue)]
  const option = {
    tooltip: {
      formatter: function (params) {
        return (params.value * 100).toFixed(2) + '%'
      }
    },
    title: { text: 'Immune cell proportion in old group' },
    label: { fontSize: 18 },
    visualMap: {
      type: 'continuous',
      min: 0,
      max: 1,
      inRange: {
        color: ['#2F93C8', '#AEC48F', '#FFDB5C', '#F98862']
      }
    },
    series: [
      {
        type: 'sunburst',
        data: data,
        radius: [0, '75%'],
        label: {
          rotate: 'radial'
        }
      }
    ]
  }
  return option
}

export const getMid = (tissue) => {
  let data = [
    {
      name: 'Immune',
      children: [
        {
          name: 'Bladder',
          value: 1,
          children: [
            { name: 'Mast cell', value: 0.0853 },
            { name: 'Monocyte cell', value: 0.3710 },
            { name: 'Myeloid cell', value: 0.2729 },
            {
              name: 'T cell',
              children: [
                { name: 'CD8+ T cell', value: 0.1343 },
                { name: 'Naive CD4+ T cell', value: 0.0597 },
                { name: 'Effector CD4+ T cell', value: 0.0768 }
              ]
            }
          ]
        },
        {
          name: 'Prostate',
          value: 1,
          children: [
            { name: 'Marcophage cell', value: 0.9048 },
            { name: 'CD8+ T cell', value: 0.0476 },
            { name: 'CD4+ T cell', value: 0.0476 }
          ]
        },
        {
          name: 'Skin',
          value: 1,
          children: [
            { name: 'CD8+ T cell', value: 0.4713 },
            { name: 'CD4+ T cell', value: 0.2056 },
            { name: 'NK T cell', value: 0.0048 },
            { name: 'NK cell', value: 0.0234 },
            { name: 'Monocyte cell', value: 0.1280 },
            { name: 'Plasma cell', value: 0.0840 },
            { name: 'Macrophage cell', value: 0.0828 }
          ]
        },
        {
          name: 'Stomach',
          value: 1,
          children: [
            { name: 'B cell', value: 0.3714 },
            { name: 'Dentritic cell', value: 0.0143 },
            { name: 'Monocyte cell', value: 0.2286 },
            { name: 'Plasma cell', value: 0.2048 },
            {
              name: 'T cell',
              children: [
                { name: 'CD8+ T cell', value: 0.0524 },
                { name: 'CD4+ T cell', value: 0.1048 },
                { name: 'NK T cell', value: 0.0238 }
              ]
            }
          ]
        },
        {
          name: 'Oesphagus',
          value: 1,
          children: [
            { name: 'CD27- B cell', value: 0.2363 },
            { name: 'Mast cell', value: 0.0487 },
            { name: 'Mono-macro cell', value: 0.2737 },
            { name: 'CD4+ T cell', value: 0.4414 }
          ]
        },
        {
          name: 'Heart',
          value: 1,
          children: [
            { name: 'Myeloid cell', value: 0.6161 },
            {
              name: 'Lymphoid cell',
              children: [
                { name: 'CD8+ T cell', value: 0.0025 },
                { name: 'NK T cell', value: 0.3490 },
                { name: 'NK cell', value: 0.0318 },
                { name: 'B cell', value: 0.0006 }
              ]
            }
          ]
        },
        {
          name: 'Intestine',
          value: 1,
          children: [
            { name: 'B cell', value: 0.0764 },
            { name: 'Monocyte cell', value: 0.7005 },
            { name: 'Plasma cell', value: 0.0963 },
            {
              name: 'T cell',
              children: [
                { name: 'CD8+ T cell', value: 0.0396 },
                { name: 'CD4+ T cell', value: 0.0712 },
                { name: 'NK T cell', value: 0.0160 }
              ]
            }
          ]
        },
        {
          name: 'Skeletal Muscle',
          value: 1,
          children: [
            {
              name: 'B/T/NK cell',
              children: [
                { name: 'CD8+ T cell', value: 0.3160 },
                { name: 'CD4+ T cell', value: 0.2320 },
                { name: 'B cell', value: 0.1320 },
                { name: 'NK cell', value: 0.3200 }
              ]
            }
          ]
        },
        {
          name: 'Lung',
          value: 1,
          children: [
            { name: 'Mast cell', value: 0.1189 },
            { name: 'Naive B cell', value: 0.0049 },
            { name: 'Myeloid cell', value: 0.7486 },
            {
              name: 'T cell',
              children: [
                { name: 'CD8+ T cell', value: 0.0438 },
                { name: 'Effector CD4+ T cell', value: 0.0189 },
                { name: 'NK T cell', value: 0.0634 },
                { name: 'Treg cell', value: 0.0018 }
              ]
            }
          ]
        },
        {
          name: 'Blood',
          value: 1,
          children: [
            { name: 'Activated CD8+ T cell', value: 0.2704 },
            { name: 'Blood derived monocyte cell', value: 0.110 },
            { name: 'Granulocyte cell', value: 0.1309 },
            { name: 'Naive B cell cell', value: 0.0412 },
            { name: 'Naive CD4+ T cell', value: 0.5007 },
            { name: 'Plasmacytoid dendritic cell', value: 0.0046 },
            { name: 'Myeloid dendritic cell', value: 0.0203 },
            { name: 'Cytotoxic T cell', value: 0.0138 },
            { name: 'γδ T cell', value: 0.0071 }
          ]
        },
        {
          name: 'Liver',
          value: 1,
          children: [
            {
              name: 'T cell',
              children: [
                { name: 'CD8+ T cell', value: 0.3950 },
                { name: 'Naive CD4+ T cell', value: 0.2780 },
                { name: 'Memory CD4+ T cell', value: 0.0669 },
                { name: 'NK cell', value: 0.0543 },
                { name: 'NK T cell', value: 0.1651 }
              ]
            },
            { name: 'Naive B cell', value: 0.0408 }
          ]
        },
        {
          name: 'Bone_Marrow',
          value: 1,
          children: [
            { name: 'CD14+ monocyte cell', value: 0.1145 },
            { name: 'CD16+ monocyte cell', value: 0.0279 },
            { name: 'CD20+ B cell', value: 0.0827 },
            { name: 'Naive CD4+ T cell', value: 0.4530 },
            { name: 'Dendritic cell', value: 0.0003 },
            { name: 'Monocyte progenitor cell', value: 0.0465 },
            { name: 'NK cell', value: 0.2533 },
            { name: 'Plasma cell', value: 0.0092 },
            { name: 'Plasmacytoid dendritic cell', value: 0.0127 }
          ]
        }
      ]
    }
  ]
  data = [data[0].children.find(item => item.name === tissue)]
  const option = {
    tooltip: {
      formatter: function (params) {
        return (params.value * 100).toFixed(2) + '%'
      }
    },
    title: { text: 'Immune cell proportion in mid group' },
    label: { fontSize: 18 },
    visualMap: {
      type: 'continuous',
      min: 0,
      max: 1,
      inRange: {
        color: ['#2F93C8', '#AEC48F', '#FFDB5C', '#F98862']
      }
    },
    series: [
      {
        type: 'sunburst',
        data: data,
        radius: [0, '75%'],
        label: {
          rotate: 'radial'
        }
      }
    ]
  }
  return option
}

export const getYouth = (tissue) => {
  let data = [
    {
      name: 'Immune',
      children: [
        {
          name: 'Blood',
          value: 1,
          children: [
            { name: 'Activated CD8+ T cell', value: 0.2258 },
            { name: 'Blood derived monocyte cell', value: 0.0104 },
            { name: 'Granulocyte cell', value: 0.0499 },
            { name: 'Naive B cell', value: 0.1966 },
            { name: 'Naive CD4+ T cell', value: 0.4862 },
            { name: 'Plasmacytoid dendritic cell', value: 0.0035 },
            { name: 'Myeloid dendritic cell', value: 0.0026 },
            { name: 'Cytotoxic T cell', value: 0.0146 },
            { name: 'γδ T cell', value: 0.0104 }
          ]
        },
        {
          name: 'Intestine',
          value: 1,
          children: [
            { name: 'B cell', value: 0.3421 },
            { name: 'Monocyte cell', value: 0.3215 },
            { name: 'Plasma cell', value: 0.0366 },
            {
              name: 'T cell',
              children: [
                { name: 'CD8+ T cell', value: 0.1185 },
                { name: 'CD4+ T cell', value: 0.1509 },
                { name: 'NK T cell', value: 0.0305 }
              ]
            }
          ]
        },
        {
          name: 'Skin',
          value: 1,
          children: [
            { name: 'CD8+ T cell', value: 0.4065 },
            { name: 'CD4+ T cell', value: 0.3230 },
            { name: 'NK T cell', value: 0.0091 },
            { name: 'NK cell', value: 0.0181 },
            { name: 'Monocyte cell', value: 0.0672 },
            { name: 'Plasma cell', value: 0.1252 },
            { name: 'Macrophage cell', value: 0.0508 }
          ]
        }
      ]
    }
  ]
  data = [data[0].children.find(item => item.name === tissue)]
  const option = {
    tooltip: {
      formatter: function (params) {
        return (params.value * 100).toFixed(2) + '%'
      }
    },
    title: { text: 'Immune cell proportion in youth group' },
    label: { fontSize: 18 },
    visualMap: {
      type: 'continuous',
      min: 0,
      max: 1,
      inRange: {
        color: ['#2F93C8', '#AEC48F', '#FFDB5C', '#F98862']
      }
    },
    series: [
      {
        type: 'sunburst',
        data: data,
        radius: [0, '75%'],
        label: {
          rotate: 'radial'
        }
      }
    ]
  }
  return option
}

export const getSup = (tissue) => {
  let data = [
    {
      name: 'Immune',
      children: [
        {
          name: 'Blood',
          value: 1,
          children: [
            { name: 'Activated CD8+ T cell', value: 0.6539 },
            { name: 'Blood derived monocyte cell', value: 0.0221 },
            { name: 'Granulocyte cell', value: 0.1538 },
            { name: 'Naive B cell', value: 0.0307 },
            { name: 'Naive CD4+ T cell', value: 0.1008 },
            { name: 'Plasmacytoid dendritic cell', value: 0.0031 },
            { name: 'Myeloid dendritic cell', value: 0.0070 },
            { name: 'Cytotoxic T cell', value: 0.0094 },
            { name: 'γδ T cell', value: 0.0192 }
          ]
        }
      ]
    }
  ]
  data = [data[0].children.find(item => item.name === tissue)]
  const option = {
    tooltip: {
      formatter: function (params) {
        return (params.value * 100).toFixed(2) + '%'
      }
    },
    title: { text: 'Immune cell proportion in super old group' },
    label: { fontSize: 18 },
    visualMap: {
      type: 'continuous',
      min: 0,
      max: 1,
      inRange: {
        color: ['#2F93C8', '#AEC48F', '#FFDB5C', '#F98862']
      }
    },
    series: [
      {
        type: 'sunburst',
        data: data,
        radius: [0, '75%'],
        label: {
          rotate: 'radial'
        }
      }
    ]
  }
  return option
}
