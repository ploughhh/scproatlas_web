/* eslint-disable no-prototype-builtins */
import request from './request'

export const getmeta = (params) => {
  return request({
    url: '/metadetail',
    params
  })
}

export const Num1graph = (data) => {
  function getRandomColor () {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  const nodetemp = []
  const nodes = []

  const edge = [{
    source: "Levocarnitine",
    target: "gamma-Aminobutyric acid",
    value: '0.866653693436971'
  },
  {
    source: "Levocarnitine",
    target: "(2S)-2-ammoniohexanoate",
    value: '0.860655456277269'
  },
  {
    source: "Levocarnitine",
    target: "[2-[(Z)-heptadec-9-enoyl]oxy-3-hexadecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.851144688644689'
  },
  {
    source: "Levocarnitine",
    target: "(2S)-2-ammonio-4-(methylsulfanyl)butanoate",
    value: '0.848901098901099'
  },
  {
    source: "Levocarnitine",
    target: "[3-hexadecanoyloxy-2-[(9Z,12Z,15Z)-octadeca-9,12,15-trienoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.848122710622711'
  },
  {
    source: "Levocarnitine",
    target: "[2-[(4Z,7Z,10Z,13Z,16Z,19Z)-docosa-4,7,10,13,16,19-hexaenoyl]oxy-3-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.847710622710623'
  },
  {
    source: "Levocarnitine",
    target: "(2S)-6-amino-2-azaniumylhexanoate",
    value: '0.840201465201465'
  },
  {
    source: "Levocarnitine",
    target: "[2-[(11Z,14Z)-icosa-11,14-dienoyl]oxy-3-[(Z)-octadec-9-enoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.837042124542125'
  },
  {
    source: "Levocarnitine",
    target: "[2-[(9Z,12Z)-octadeca-9,12-dienoyl]oxy-3-[(Z)-octadec-9-enoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.834167057827749'
  },
  {
    source: "Levocarnitine",
    target: "1-(1Z-hexadecenyl)-2-(5Z,8Z,11Z-eicosatrienoyl)-sn-glycero-3-phosphocholine",
    value: '0.832921245421245'
  },
  {
    source: "Levocarnitine",
    target: "PC(P-18:1(11Z)/20:2(11Z,14Z))",
    value: '0.832783882783883'
  },
  {
    source: "Levocarnitine",
    target: "[2-[(4Z,7Z,10Z,13Z,16Z,19Z)-docosa-4,7,10,13,16,19-hexaenoyl]oxy-3-[(Z)-hexadec-9-enoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.831488455737349'
  },
  {
    source: "Levocarnitine",
    target: "1-(1Z-eicosenyl)-2-(6Z,9Z,12Z,15Z-octadecatetraenoyl)-glycero-3-phosphocholine",
    value: '0.830486744769167'
  },
  {
    source: "Levocarnitine",
    target: "PC(P-18:0/22:6(4Z,7Z,10Z,13Z,16Z,19Z))",
    value: '0.829624542124542'
  },
  {
    source: "Levocarnitine",
    target: "[3-hexadecanoyloxy-2-[(7Z,10Z,13Z)-hexadeca-7,10,13-trienoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.829158845138671'
  },
  {
    source: "Levocarnitine",
    target: "[2-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxy-3-tetradecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.826049131377914'
  },
  {
    source: "Levocarnitine",
    target: "[2-[(4Z,7Z,10Z,13Z,16Z,19Z)-docosa-4,7,10,13,16,19-hexaenoyl]oxy-3-tetradecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.825051227062521'
  },
  {
    source: "Levocarnitine",
    target: "[3-hexadecanoyloxy-2-[(12Z,15Z,18Z,21Z)-tetracosa-12,15,18,21-tetraenoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.821474358974359'
  },
  {
    source: "Levocarnitine",
    target: "Dioleoyl phosphatidylcholine",
    value: '0.81996336996337'
  },
  {
    source: "Levocarnitine",
    target: "(2-Heptadecanoyloxy-3-hexadecanoyloxypropyl) 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.816758241758242'
  },
  {
    source: "Levocarnitine",
    target: "[2-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxy-3-[(9Z,12Z)-octadeca-9,12-dienoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.816712454212454'
  },
  {
    source: "Levocarnitine",
    target: "[3-[(Z)-heptadec-9-enoyl]oxy-2-[(Z)-octadec-9-enoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.814010989010989'
  },
  {
    source: "Levocarnitine",
    target: "[3-[(11Z,14Z)-icosa-11,14-dienoyl]oxy-2-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.813965201465201'
  },
  {
    source: "Levocarnitine",
    target: "[2-[(9Z,12Z)-octadeca-9,12-dienoyl]oxy-3-pentadecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.811882549552696'
  },
  {
    source: "Levocarnitine",
    target: "(2-Octadecanoyloxy-3-tetradecoxypropyl) 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.810485347985348'
  },
  {
    source: "Levocarnitine",
    target: "[2-[(10Z,13Z,16Z)-docosa-10,13,16-trienoyl]oxy-3-[(Z)-heptadec-9-enoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.807926096839618'
  },
  {
    source: "Levocarnitine",
    target: "(3-Hexadecoxy-2-octadecanoyloxypropyl) 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.805631868131868'
  },
  {
    source: "Levocarnitine",
    target: "[(2R)-2-hexadecoxy-3-octadecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.805631868131868'
  },
  {
    source: "Levocarnitine",
    target: "Phosphatidylcholine 15:0-16:0",
    value: '0.804395604395604'
  },
  {
    source: "Levocarnitine",
    target: "[3-[(Z)-hexadec-9-enoyl]oxy-2-[(9Z,12Z)-octadeca-9,12-dienoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.804139289113879'
  },
  {
    source: "Levocarnitine",
    target: "1-(11Z,14Z-eicosadienoyl)-2-octadecanoyl-glycero-3-phosphocholine",
    value: '0.803511945015384'
  },
  {
    source: "Levocarnitine",
    target: "[2-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxy-3-pentadecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.802971852428772'
  },
  {
    source: "(2S)-2-amino-5-(diaminomethylideneazaniumyl)pentanoate",
    target: "Levocarnitine",
    value: '0.801520163973804'
  },
  {
    source: "Levocarnitine",
    target: "PC(20:2(11Z,14Z)/22:4(7Z,10Z,13Z,16Z))",
    value: '0.799642853107027'
  },
  {
    source: "Levocarnitine",
    target: "N-Methylvaline",
    value: '0.795741758241758'
  },
  {
    source: "Levocarnitine",
    target: "[3-[(15Z,18Z)-hexacosa-15,18-dienoyl]oxy-2-[(14Z,17Z,20Z,23Z)-hexacosa-14,17,20,23-tetraenoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.795128038290684'
  },
  {
    source: "Levocarnitine",
    target: "[2-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxy-3-[(Z)-nonadec-9-enoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.793910256410256'
  },
  {
    source: "Levocarnitine",
    target: "[3-heptadecanoyloxy-2-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.79235347985348'
  },
  {
    source: "Levocarnitine",
    target: "PC(20:1(11Z)/22:6(4Z,7Z,10Z,13Z,16Z,19Z))",
    value: '0.789088702990148'
  },
  {
    source: "Levocarnitine",
    target: "1-Palmitoyl-2-palmitoleoylphosphatidylcholine",
    value: '0.789056776556777'
  },
  {
    source: "Levocarnitine",
    target: "[2-[(15Z,18Z)-hexacosa-15,18-dienoyl]oxy-3-nonanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.788168092317739'
  },
  {
    source: "Levocarnitine",
    target: "Phosphatidylcholine 17:0-22:6",
    value: '0.787591575091575'
  },
  {
    source: "Levocarnitine",
    target: "[3-[(Z)-docos-13-enoyl]oxy-2-[(9Z,12Z)-octadeca-9,12-dienoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.786657051415718'
  },
  {
    source: "Levocarnitine",
    target: "1,2-Heptadecanoylphosphatidylcholine",
    value: '0.785265399151713'
  },
  {
    source: "Levocarnitine",
    target: "[3-icosanoyloxy-2-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.784349637753285'
  },
  {
    source: "Levocarnitine",
    target: "1,2-Distearoyllecithin",
    value: '0.784340659340659'
  },
  {
    source: "Levocarnitine",
    target: "[2-[(Z)-hexacos-15-enoyl]oxy-3-nonanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.783195970695971'
  },
  {
    source: "Levocarnitine",
    target: "Palmitoyleicosapentaenoyl Phosphatidylcholine",
    value: '0.782921245421245'
  },
  {
    source: "Levocarnitine",
    target: "[3-[(Z)-heptadec-9-enoyl]oxy-2-[(9Z,12Z)-octadeca-9,12-dienoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.781464989348238'
  },
  {
    source: "Levocarnitine",
    target: "2-Oleoyl-1-palmitoyl-sn-glycero-3-phosphocholine",
    value: '0.780860805860806'
  }]
  const edges = []
  const nodeDegrees = {}

  edge.forEach((item) => {
    if (item.value > 0) {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    } else {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: -item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    }

    // 获取当前边的 source 和 target 节点名称
    const sourceNodeName = item.source
    const targetNodeName = item.target
    // 对于 source 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(sourceNodeName)) {
      nodeDegrees[sourceNodeName] += 1
    } else {
      nodeDegrees[sourceNodeName] = 1
    }
    // 对于 target 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(targetNodeName)) {
      nodeDegrees[targetNodeName] += 1
    } else {
      nodeDegrees[targetNodeName] = 1
    }
  })
  const node = nodetemp.filter((item, index, array) => {
    // 如果当前元素第一次出现，则返回 true
    return array.findIndex((ele) => ele.name === item.name) === index
  })
  node.forEach((item) => {
    // 加入边数组
    nodes.push({
      name: item.name,
      itemStyle: {
        color: getRandomColor()
      },
      symbolSize: nodeDegrees[item.name]
    })
  })
  console.log('节点数nodes', nodes)
  console.log('连线数edges', edges)
  const option = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
      zoom: 0.8,
      draggable: true,
      type: 'graph',
      legendHoverLink: false,
      // layout: 'force',
      layout: 'circular',
      circular: {
        rotateLabel: true
      },
      roam: true,
      data: nodes,
      links: edges,
      lineStyle: {
        width: 2,
        curveness: 0.3
      },
      label: {
        show: true,
        position: 'right',
        formatter: function (node) {
          if (node.name.length < 25) {
            return node.name
          } else {
            return node.name.slice(0, 25)
          }
        }
      },
      emphasis: {
        focus: 'adjacency',
        lineStyle: {
          width: 10
        }
      }
    }]
  }
  return option
}

export const Num2graph = (data) => {
  function getRandomColor () {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  const nodetemp = []
  const nodes = []

  const edge = [{
    source: "Undecanoic acid",
    target: "Stearic Acid",
    value: '0.702818193472577'
  },
  {
    source: "Decanoic acid",
    target: "Stearic Acid",
    value: '0.69305267205298'
  },
  {
    source: "Stearic Acid",
    target: "(2-Hexacosanoyloxy-3-undecanoyloxypropyl) 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.688996363773258'
  },
  {
    source: "Pentadecanoic acid",
    target: "Stearic Acid",
    value: '0.660682140218632'
  },
  {
    source: "Stearic Acid",
    target: "PC(18:1(11Z)/22:6(4Z,7Z,10Z,13Z,16Z,19Z))",
    value: '0.644763244069079'
  },
  {
    source: "Lauric Acid",
    target: "Stearic Acid",
    value: '0.627448156682028'
  },
  {
    source: "Stearic Acid",
    target: "(Z)-N-[(4E,8E)-3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyheptadeca-4,8-dien-2-yl]hexacos-11-enamide",
    value: '-0.62330501989109'
  },
  {
    source: "Stearic Acid",
    target: "PE(20:3(8Z,11Z,14Z)/18:0)",
    value: '-0.615444978783492'
  },
  {
    source: "Stearic Acid",
    target: "[2-[(7Z,10Z,13Z,16Z,19Z)-docosa-7,10,13,16,19-pentaenoyl]oxy-3-pentadecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.609598329516938'
  },
  {
    source: "Stearic Acid",
    target: "1-Steroyl-2-oleoylphosphatidylcholine",
    value: '-0.605366743471582'
  },
  {
    source: "Stearic Acid",
    target: "[2-[(9Z,12Z)-heptadeca-9,12-dienoyl]oxy-3-[(Z)-tetracos-13-enoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.591275127895974'
  },
  {
    source: "Stearic Acid",
    target: "[2-[(7Z,10Z,13Z,16Z,19Z)-docosa-7,10,13,16,19-pentaenoyl]oxy-3-hexadecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.573859613371937'
  },
  {
    source: "Stearic Acid",
    target: "N-[3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadecan-2-yl]docosanamide",
    value: '0.571723451023445'
  },
  {
    source: "Stearic Acid",
    target: "PC(20:1(11Z)/22:4(7Z,10Z,13Z,16Z))",
    value: '-0.569369883797176'
  },
  {
    source: "Stearic Acid",
    target: "1-(11Z,14Z-eicosadienoyl)-2-(9Z,12Z-heptadecadienoyl)-glycero-3-phosphocholine",
    value: '-0.56693632036564'
  },
  {
    source: "Stearic Acid",
    target: "1,2-Distearoyl-sn-glycero-3-phosphocholine",
    value: '-0.563905623857319'
  },
  {
    source: "Stearic Acid",
    target: "PC(20:2(11Z,14Z)/18:3(6Z,9Z,12Z))",
    value: '-0.560606788606215'
  },
  {
    source: "Stearic Acid",
    target: "PC(20:5(5Z,8Z,11Z,14Z,17Z)/17:0)",
    value: '-0.556711671527938'
  },
  {
    source: "Stearic Acid",
    target: "N-[(E)-3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadec-4-en-2-yl]hexacosanamide",
    value: '0.54814708141321'
  },
  {
    source: "Stearic Acid",
    target: "(2-Octadecanoyloxy-3-undecanoyloxypropyl) 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.543390339386091'
  },
  {
    source: "Stearic Acid",
    target: "[2-[(11Z,14Z)-icosa-11,14-dienoyl]oxy-3-octadecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.539842549923195'
  },
  {
    source: "Stearic Acid",
    target: "PE(16:1(9Z)/20:4(5Z,8Z,11Z,14Z))",
    value: '0.53494623655914'
  },
  {
    source: "Stearic Acid",
    target: "Phosphatidylcholine 14:0-16:0",
    value: '-0.532594086021505'
  },
  {
    source: "Stearic Acid",
    target: "beta-L-fucose 1-phosphate",
    value: '-0.523983822808263'
  },
  {
    source: "Stearic Acid",
    target: "[3-[(Z)-heptadec-9-enoyl]oxy-2-[(9Z,12Z)-octadeca-9,12-dienoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.51807489437077'
  },
  {
    source: "Stearic Acid",
    target: "PE(P-18:1(11Z)/18:3(6Z,9Z,12Z))",
    value: '0.51094470046083'
  },
  {
    source: "Stearic Acid",
    target: "[3-hexadecanoyloxy-2-[(7Z,10Z,13Z)-hexadeca-7,10,13-trienoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.509846748389589'
  },
  {
    source: "Stearic Acid",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(9Z,12Z,15Z)-octadeca-9,12,15-trienoxy]propan-2-yl] (8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoate",
    value: '0.509360599078341'
  },
  {
    source: "Stearic Acid",
    target: "1-(11Z-eicosenyl)-2-(8Z,11Z,14Z,17Z-eicosatetraenoyl)-sn-glycero-3-phosphocholine",
    value: '-0.508437148770281'
  },
  {
    source: "Stearic Acid",
    target: "[2-[(9Z,12Z)-octadeca-9,12-dienoyl]oxy-3-tetracosanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.50749493028496'
  },
  {
    source: "Stearic Acid",
    target: "[1-[hydroxy-(2,3,4,5,6-pentahydroxycyclohexyl)oxyphosphoryl]oxy-3-octadecanoyloxypropan-2-yl] (7Z,10Z,13Z,16Z,19Z)-docosa-7,10,13,16,19-pentaenoate",
    value: '0.506192396313364'
  },
  {
    source: "Stearic Acid",
    target: "[3-heptadecanoyloxy-2-[(11Z,14Z,17Z)-icosa-11,14,17-trienoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.495097510071862'
  },
  {
    source: "Stearic Acid",
    target: "[2-[(4Z,7Z,10Z,13Z,16Z,19Z)-docosa-4,7,10,13,16,19-hexaenoyl]oxy-3-[(12Z,15Z,18Z,21Z)-tetracosa-12,15,18,21-tetraenoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.49212121244017'
  },
  {
    source: "Stearic Acid",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxypropan-2-yl] (4Z,7Z,10Z,13Z,16Z,19Z)-docosa-4,7,10,13,16,19-hexaenoate",
    value: '0.487711213517665'
  },
  {
    source: "Stearic Acid",
    target: "[3-hexadecanoyloxy-2-[(11Z,14Z)-icosa-11,14-dienoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.484014976958525'
  },
  {
    source: "Stearic Acid",
    target: "PC(20:2(11Z,14Z)/20:5(5Z,8Z,11Z,14Z,17Z))",
    value: '-0.482622887864823'
  },
  {
    source: "Stearic Acid",
    target: "(3-Octanoyloxy-2-tetracosanoyloxypropyl) 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.473550307219662'
  },
  {
    source: "Stearic Acid",
    target: "Dimyristoylphosphatidylcholine, DL-",
    value: '-0.472403902730623'
  },
  {
    source: "Stearic Acid",
    target: "Dilinoleoylphosphatidylcholine",
    value: '-0.468557987711214'
  },
  {
    source: "Stearic Acid",
    target: "1-(1Z-eicosenyl)-2-(9Z-nonadecenoyl)-glycero-3-phosphocholine",
    value: '-0.467990656189601'
  },
  {
    source: "Stearic Acid",
    target: "[3-hexadecanoyloxy-2-[(9Z,12Z,15Z)-octadeca-9,12,15-trienoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.464957757296467'
  },
  {
    source: "Stearic Acid",
    target: "[2-[(7Z,10Z,13Z,16Z,19Z)-docosa-7,10,13,16,19-pentaenoyl]oxy-3-octadecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.464579308060865'
  },
  {
    source: "Stearic Acid",
    target: "1-pentadecanoyl-2-(9Z-hexadecenoyl)-sn-glycero-3-phosphocholine",
    value: '-0.463325652841782'
  },
  {
    source: "Stearic Acid",
    target: "[2-[(4Z,7Z,10Z,13Z,16Z,19Z)-docosa-4,7,10,13,16,19-hexaenoyl]oxy-3-[(Z)-octadec-9-enoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.463277649769585'
  },
  {
    source: "Stearic Acid",
    target: "1-(9Z,12Z-octadecadienoyl)-2-heptadecanoyl-glycero-3-phosphocholine",
    value: '-0.461544682259776'
  },
  {
    source: "Stearic Acid",
    target: "1,2-Diheneicosanoyl-sn-glycero-3-phosphocholine",
    value: '-0.461054704635047'
  },
  {
    source: "Stearic Acid",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-hexadecanoyloxypropan-2-yl] (7Z,10Z,13Z,16Z,19Z)-docosa-7,10,13,16,19-pentaenoate",
    value: '0.459869431643625'
  },
  {
    source: "Stearic Acid",
    target: "(3-Heptadecanoyloxy-2-icosanoyloxypropyl) 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.457906800949844'
  },
  {
    source: "Stearic Acid",
    target: "[2-[(Z)-hexadec-9-enoyl]oxy-3-tetradecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.457229262672811'
  },
  {
    source: "Stearic Acid",
    target: "1-Palmitoyl-2-(9-oxo-nonanoyl)-sn-glycero-3-phosphocholine",
    value: '-0.454029403234564'
  }]
  const edges = []
  const nodeDegrees = {}

  edge.forEach((item) => {
    if (item.value > 0) {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    } else {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: -item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    }

    // 获取当前边的 source 和 target 节点名称
    const sourceNodeName = item.source
    const targetNodeName = item.target
    // 对于 source 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(sourceNodeName)) {
      nodeDegrees[sourceNodeName] += 1
    } else {
      nodeDegrees[sourceNodeName] = 1
    }
    // 对于 target 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(targetNodeName)) {
      nodeDegrees[targetNodeName] += 1
    } else {
      nodeDegrees[targetNodeName] = 1
    }
  })
  const node = nodetemp.filter((item, index, array) => {
    // 如果当前元素第一次出现，则返回 true
    return array.findIndex((ele) => ele.name === item.name) === index
  })
  node.forEach((item) => {
    // 加入边数组
    nodes.push({
      name: item.name,
      itemStyle: {
        color: getRandomColor()
      },
      symbolSize: nodeDegrees[item.name]
    })
  })
  console.log('节点数nodes', nodes)
  console.log('连线数edges', edges)
  const option = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
      zoom: 0.8,
      draggable: true,
      type: 'graph',
      legendHoverLink: false,
      // layout: 'force',
      layout: 'circular',
      circular: {
        rotateLabel: true
      },
      roam: true,
      data: nodes,
      links: edges,
      lineStyle: {
        width: 2,
        curveness: 0.3
      },
      label: {
        show: true,
        position: 'right',
        formatter: function (node) {
          if (node.name.length < 25) {
            return node.name
          } else {
            return node.name.slice(0, 25)
          }
        }
      },
      emphasis: {
        focus: 'adjacency',
        lineStyle: {
          width: 10
        }
      }
    }]
  }
  return option
}

export const Num3graph = (data) => {
  function getRandomColor () {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  const nodetemp = []
  const nodes = []

  const edge = [{
    source: "Nicotinamide",
    target: "1-Palmitoyl-2-eicsoatetraenoyl-3-docosahexaenoyl-glycerol",
    value: '0.747'
  },
  {
    source: "(2S)-2-amino-5-(diaminomethylideneazaniumyl)pentanoate",
    target: "Inosine",
    value: '0.746'
  },
  {
    source: "Nicotinamide",
    target: "1-Palmitoyl-2-palmitoyl-3-eicsoatetraenoyl-glycerol",
    value: '0.744'
  },
  {
    source: "Nicotinamide",
    target: "1-O,2-O-Dipalmitoyl-3-O-[(4Z,7Z,10Z,13Z,16Z,19Z)-1-oxo-4,7,10,13,16,19-docosahexaenyl]glycerol",
    value: '0.742'
  },
  {
    source: "Nicotinamide",
    target: "1-Palmitoyl-2-stearoyl-3-eicsoatetraenoyl-glycerol",
    value: '0.740'
  },
  {
    source: "(10Z,13Z,16Z)-docosatrienoic acid",
    target: "Inosine",
    value: '0.739'
  },
  {
    source: "Nicotinamide",
    target: "1-hexadecanoyl-2-(9Z-octadecenoyl)-3-(4Z,7Z,10Z,13Z,16Z,19Z-docosahexaenoyl)-sn-glycerol",
    value: '0.718'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(9Z,12Z)-octadeca-9,12-dienoxy]propan-2-yl] (11Z,14Z,17Z)-icosa-11,14,17-trienoate",
    value: '0.702'
  },
  {
    source: "Nicotinamide",
    target: "[2-[(4Z,7Z,10Z,13Z,16Z,19Z)-docosa-4,7,10,13,16,19-hexaenoyl]oxy-3-hexadecanoyloxypropyl] (4Z,7Z,10Z,13Z,16Z,19Z)-docosa-4,7,10,13,16,19-hexaenoate",
    value: '0.698'
  },
  {
    source: "Nicotinamide",
    target: "PE(16:1(9Z)/20:4(5Z,8Z,11Z,14Z))",
    value: '0.695'
  },
  {
    source: "Nicotinamide",
    target: "PE(22:4(7Z,10Z,13Z,16Z)/18:0)",
    value: '0.692'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-octadecanoyloxypropan-2-yl] (10Z,13Z,16Z,19Z)-docosa-10,13,16,19-tetraenoate",
    value: '0.692'
  },
  {
    source: "Nicotinamide",
    target: "(3-hexadecanoyloxy-2-octadecanoyloxypropyl) (4Z,7Z,10Z,13Z,16Z,19Z)-docosa-4,7,10,13,16,19-hexaenoate",
    value: '0.690'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(Z)-octadec-9-enoxy]propan-2-yl] (10Z,13Z,16Z,19Z)-docosa-10,13,16,19-tetraenoate",
    value: '0.684'
  },
  {
    source: "N-(1-Oxo-13-tetracosenyl)sphingosine",
    target: "Inosine",
    value: '0.677'
  },
  {
    source: "N-docosanoylsphingosine",
    target: "Inosine",
    value: '0.672'
  },
  {
    source: "Nicotinamide",
    target: "[1-hexadecanoyloxy-3-[(Z)-octadec-9-enoyl]oxypropan-2-yl] octadecanoate",
    value: '0.663'
  },
  {
    source: "Nicotinamide",
    target: "1-Stearoyl-2-stearoyl-3-eicsoatetraenoyl-glycerol",
    value: '0.662'
  },
  {
    source: "Nicotinamide",
    target: "1-Eicosyl-2-dodecanoyl-glycero-3-phosphoethanolamine",
    value: '0.656'
  },
  {
    source: "Nicotinamide",
    target: "Octadecanoic acid, 2,3-bis[(1-oxohexadecyl)oxy]propyl ester",
    value: '0.642'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxypropan-2-yl] (4Z,7Z,10Z,13Z,16Z,19Z)-docosa-4,7,10,13,16,19-hexaenoate",
    value: '0.640'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-heptadecanoyloxypropan-2-yl] (8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoate",
    value: '0.633'
  },
  {
    source: "Inosine",
    target: "Phosphorylcholine",
    value: '0.614'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(Z)-icos-11-enoyl]oxypropan-2-yl] (4Z,7Z,10Z,13Z,16Z,19Z)-docosa-4,7,10,13,16,19-hexaenoate",
    value: '0.613'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(9Z,12Z,15Z)-octadeca-9,12,15-trienoxy]propan-2-yl] (Z)-octadec-9-enoate",
    value: '0.612'
  },
  {
    source: "Inosine",
    target: "(2S)-6-amino-2-azaniumylhexanoate",
    value: '0.607'
  },
  {
    source: "(Z)-N-[(4E,8E)-1,3-dihydroxydocosa-4,8-dien-2-yl]icos-11-enamide",
    target: "Inosine",
    value: '0.604'
  },
  {
    source: "Inosine",
    target: "[2-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxy-3-pentadecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.598'
  },
  {
    source: "Inosine",
    target: "[2-[(11Z,14Z,17Z)-icosa-11,14,17-trienoyl]oxy-3-octadecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.584'
  },
  {
    source: "Inosine",
    target: "[2-[(Z)-heptadec-9-enoyl]oxy-3-hexadecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.583'
  },
  {
    source: "Inosine",
    target: "1,2-Heptadecanoylphosphatidylcholine",
    value: '0.582'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(9Z,12Z)-octadeca-9,12-dienoxy]propan-2-yl] (11Z,14Z)-icosa-11,14-dienoate",
    value: '0.580'
  },
  {
    source: "Inosine",
    target: "1-pentadecanoyl-2-(9Z-hexadecenoyl)-sn-glycero-3-phosphocholine",
    value: '0.580'
  },
  {
    source: "Cer(d18:1/24:1(15Z))",
    target: "Inosine",
    value: '0.572'
  },
  {
    source: "Nicotinamide",
    target: "(2-Hexacosanoyloxy-3-undecanoyloxypropyl) 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.570'
  },
  {
    source: "Inosine",
    target: "[2-[(4Z,7Z,10Z,13Z,16Z,19Z)-docosa-4,7,10,13,16,19-hexaenoyl]oxy-3-[(Z)-hexadec-9-enoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.566'
  },
  {
    source: "Inosine",
    target: "Phosphatidylcholine 15:0-16:0",
    value: '0.565'
  },
  {
    source: "3'-Adenylic acid",
    target: "Nicotinamide",
    value: '0.560'
  },
  {
    source: "Inosine",
    target: "[3-[(Z)-heptadec-9-enoyl]oxy-2-[(Z)-octadec-9-enoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.559'
  },
  {
    source: "Inosine",
    target: "[2-[(7Z,10Z,13Z,16Z,19Z)-docosa-7,10,13,16,19-pentaenoyl]oxy-3-hexadecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.556'
  },
  {
    source: "Inosine",
    target: "1-Palmitoyl-2-palmitoleoylphosphatidylcholine",
    value: '0.556'
  },
  {
    source: "Inosine",
    target: "PC(20:2(11Z,14Z)/20:5(5Z,8Z,11Z,14Z,17Z))",
    value: '0.556'
  },
  {
    source: "Inosine",
    target: "[2-[(11Z,14Z)-icosa-11,14-dienoyl]oxy-3-[(Z)-octadec-9-enoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.551'
  },
  {
    source: "Inosine",
    target: "PC(P-18:0/22:6(4Z,7Z,10Z,13Z,16Z,19Z))",
    value: '0.551'
  },
  {
    source: "Adenosine monophosphate",
    target: "Inosine",
    value: '-0.548'
  },
  {
    source: "Inosine",
    target: "[2-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxy-3-[(Z)-octadec-9-enoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.544'
  },
  {
    source: "Nicotinamide",
    target: "[3-[2,3-dihydroxypropoxy(hydroxy)phosphoryl]oxy-2-[(4Z,7Z,10Z,13Z,16Z,19Z)-docosa-4,7,10,13,16,19-hexaenoyl]oxypropyl] (7Z,10Z,13Z,16Z,19Z)-docosa-7,10,13,16,19-pentaenoate",
    value: '0.541'
  },
  {
    source: "Histidine",
    target: "Inosine",
    value: '0.537'
  },
  {
    source: "Inosine",
    target: "[3-hexadecanoyloxy-2-[(7Z,10Z,13Z)-hexadeca-7,10,13-trienoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.536'
  },
  {
    source: "Undecanoic acid",
    target: "Nicotinamide",
    value: '0.535'
  }]
  const edges = []
  const nodeDegrees = {}

  edge.forEach((item) => {
    if (item.value > 0) {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    } else {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: -item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    }

    // 获取当前边的 source 和 target 节点名称
    const sourceNodeName = item.source
    const targetNodeName = item.target
    // 对于 source 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(sourceNodeName)) {
      nodeDegrees[sourceNodeName] += 1
    } else {
      nodeDegrees[sourceNodeName] = 1
    }
    // 对于 target 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(targetNodeName)) {
      nodeDegrees[targetNodeName] += 1
    } else {
      nodeDegrees[targetNodeName] = 1
    }
  })
  const node = nodetemp.filter((item, index, array) => {
    // 如果当前元素第一次出现，则返回 true
    return array.findIndex((ele) => ele.name === item.name) === index
  })
  node.forEach((item) => {
    // 加入边数组
    nodes.push({
      name: item.name,
      itemStyle: {
        color: getRandomColor()
      },
      symbolSize: nodeDegrees[item.name]
    })
  })
  console.log('节点数nodes', nodes)
  console.log('连线数edges', edges)
  const option = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
      zoom: 0.8,
      draggable: true,
      type: 'graph',
      legendHoverLink: false,
      // layout: 'force',
      layout: 'circular',
      circular: {
        rotateLabel: true
      },
      roam: true,
      data: nodes,
      links: edges,
      lineStyle: {
        width: 2,
        curveness: 0.3
      },
      label: {
        show: true,
        position: 'right',
        formatter: function (node) {
          if (node.name.length < 25) {
            return node.name
          } else {
            return node.name.slice(0, 25)
          }
        }
      },
      emphasis: {
        focus: 'adjacency',
        lineStyle: {
          width: 10
        }
      }
    }]
  }
  return option
}

export const Num4graph = (data) => {
  function getRandomColor () {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  const nodetemp = []
  const nodes = []

  const edge = [{
    source: "Undecanoic acid",
    target: "Stearic Acid",
    value: '0.783918678'
  },
  {
    source: "Pentadecanoic acid",
    target: "Stearic Acid",
    value: '0.772161172'
  },
  {
    source: "Lauric Acid",
    target: "Stearic Acid",
    value: '0.728891941'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2,3-dihydroxypropoxy(hydroxy)phosphoryl]oxy-3-octadecanoyloxypropan-2-yl] (8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoate",
    value: '0.722252747'
  },
  {
    source: "Adenosine monophosphate",
    target: "Glutathione",
    value: '0.715247253'
  },
  {
    source: "3'-Adenylic acid",
    target: "Glutathione",
    value: '0.705998168'
  },
  {
    source: "Stearic Acid",
    target: "3Z,6Z,9Z,12Z,15Z-octadecapentaenoic acid",
    value: '0.700497969'
  },
  {
    source: "Stearic Acid",
    target: "[2-[(Z)-icos-11-enoyl]oxy-3-tridecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.696825742'
  },
  {
    source: "Stearic Acid",
    target: "Nicotinamide",
    value: '0.696336996'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(Z)-octadec-9-enoxy]propan-2-yl] (10Z,13Z,16Z,19Z)-docosa-10,13,16,19-tetraenoate",
    value: '0.689697802'
  },
  {
    source: "Stearic Acid",
    target: "[1-[2,3-dihydroxypropoxy(hydroxy)phosphoryl]oxy-3-octadecanoyloxypropan-2-yl] (8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoate",
    value: '0.677930403'
  },
  {
    source: "Stearic Acid",
    target: "1-Myristoyl-2-palmitoleoyl-3-eicsoatetraenoyl-glycerol",
    value: '0.674626525'
  },
  {
    source: "Stearic Acid",
    target: "1-Steroyl-2-oleoylphosphatidylcholine",
    value: '-0.664522259'
  },
  {
    source: "Stearic Acid",
    target: "[1-[2-Aminoethoxy(hydroxy)phosphoryl]oxy-3-octanoyloxypropan-2-yl] nonanoate",
    value: '0.648443223'
  },
  {
    source: "Nicotinamide",
    target: "Dipalmitoylphosphatidylglycerol",
    value: '0.640384615'
  },
  {
    source: "Nicotinamide",
    target: "[3-[2,3-dihydroxypropoxy(hydroxy)phosphoryl]oxy-2-[(Z)-octadec-9-enoyl]oxypropyl] octadecanoate",
    value: '0.631822344'
  },
  {
    source: "Stearic Acid",
    target: "1,2-Distearoyl-sn-glycero-3-phosphocholine",
    value: '-0.627242236'
  },
  {
    source: "Stearic Acid",
    target: "Dipalmitoylphosphatidylglycerol",
    value: '0.62481685'
  },
  {
    source: "Stearic Acid",
    target: "[2-[(9Z,12Z)-heptadeca-9,12-dienoyl]oxy-3-[(Z)-tetracos-13-enoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.624456249'
  },
  {
    source: "Stearic Acid",
    target: "[3-heptadecanoyloxy-2-[(11Z,14Z,17Z)-icosa-11,14,17-trienoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.607333804'
  },
  {
    source: "Stearic Acid",
    target: "[3-hexadecanoyloxy-2-[(11Z,14Z)-icosa-11,14-dienoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.605050482'
  },
  {
    source: "Nicotinamide",
    target: "[2-[(Z)-icos-11-enoyl]oxy-3-tridecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.604013324'
  },
  {
    source: "Stearic Acid",
    target: "1-(11Z,14Z-eicosadienoyl)-2-octadecanoyl-glycero-3-phosphocholine",
    value: '-0.591712454'
  },
  {
    source: "Stearic Acid",
    target: "[2-[(9Z,12Z)-octadeca-9,12-dienoyl]oxy-3-tetracosanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.581302442'
  },
  {
    source: "Stearic Acid",
    target: "[2-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxy-3-tetracosanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.580354179'
  },
  {
    source: "Stearic Acid",
    target: "(2-Octadecanoyloxy-3-undecanoyloxypropyl) 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.578866632'
  },
  {
    source: "Stearic Acid",
    target: "(2-Hexacosanoyloxy-3-undecanoyloxypropyl) 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.57588974'
  },
  {
    source: "Stearic Acid",
    target: "1-octadecyl-2-(5Z,8Z,11Z,14Z-eicosatetraenoyl)-glycero-3-phospho-(1'-myo-inositol)",
    value: '0.575739191'
  },
  {
    source: "Stearic Acid",
    target: "[2-[(11Z,14Z)-icosa-11,14-dienoyl]oxy-3-octadecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.572527473'
  },
  {
    source: "Glutathione",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(5Z,8Z,11Z,14Z,17Z)-icosa-5,8,11,14,17-pentaenoxy]propan-2-yl] (Z)-octadec-9-enoate",
    value: '-0.57202381'
  },
  {
    source: "Glutathione",
    target: "1-octadecyl-2-(5Z,8Z,11Z,14Z-eicosatetraenoyl)-glycero-3-phospho-(1'-myo-inositol)",
    value: '0.569809636'
  },
  {
    source: "Nicotinamide",
    target: "1-octadecyl-2-(5Z,8Z,11Z,14Z-eicosatetraenoyl)-glycero-3-phospho-(1'-myo-inositol)",
    value: '0.569786742'
  },
  {
    source: "Stearic Acid",
    target: "PC(20:2(11Z,14Z)/18:1(11Z))",
    value: '-0.567490842'
  },
  {
    source: "Pentadecanoic acid",
    target: "Nicotinamide",
    value: '0.567216117'
  },
  {
    source: "Stearic Acid",
    target: "[2-[(7Z,10Z,13Z,16Z,19Z)-docosa-7,10,13,16,19-pentaenoyl]oxy-3-octadecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.566163004'
  },
  {
    source: "Undecanoic acid",
    target: "Nicotinamide",
    value: '0.564906819'
  },
  {
    source: "Nicotinamide",
    target: "(3-hexadecanoyloxy-2-octadecanoyloxypropyl) (4Z,7Z,10Z,13Z,16Z,19Z)-docosa-4,7,10,13,16,19-hexaenoate",
    value: '0.564403133'
  },
  {
    source: "Glutathione",
    target: "(2-Hexacosanoyloxy-3-undecanoyloxypropyl) 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.562359056'
  },
  {
    source: "Stearic Acid",
    target: "1-(11Z,14Z-eicosadienoyl)-2-(9Z,12Z-heptadecadienoyl)-glycero-3-phosphocholine",
    value: '-0.560815066'
  },
  {
    source: "Stearic Acid",
    target: "[3-docosanoyloxy-2-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.556593407'
  },
  {
    source: "2-Octadecanoylaminooctadecane-1,3-diol",
    target: "Stearic Acid",
    value: '-0.555182782'
  },
  {
    source: "Glutathione",
    target: "Nicotinamide",
    value: '0.552564103'
  },
  {
    source: "Glutathione",
    target: "Nicotinamide",
    value: '0.552564103'
  },
  {
    source: "Stearic Acid",
    target: "Dilinoleoylphosphatidylcholine",
    value: '-0.547007177'
  },
  {
    source: "Nicotinamide",
    target: "1-Steroyl-2-oleoylphosphatidylcholine",
    value: '-0.54645772'
  },
  {
    source: "Glutathione",
    target: "[2-[(Z)-icos-11-enoyl]oxy-3-tridecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.541672867'
  },
  {
    source: "2-Octadecanoylaminooctadecane-1,3-diol",
    target: "Nicotinamide",
    value: '-0.53983675'
  },
  {
    source: "Stearic Acid",
    target: "PC(20:2(11Z,14Z)/18:3(6Z,9Z,12Z))",
    value: '-0.539108735'
  },
  {
    source: "Nicotinamide",
    target: "[2-[(9Z,12Z)-heptadeca-9,12-dienoyl]oxy-3-[(Z)-tetracos-13-enoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.534594075'
  },
  {
    source: "Stearic Acid",
    target: "Dimyristoylphosphatidylcholine, DL-",
    value: '-0.533116601'
  }]
  const edges = []
  const nodeDegrees = {}

  edge.forEach((item) => {
    if (item.value > 0) {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    } else {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: -item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    }

    // 获取当前边的 source 和 target 节点名称
    const sourceNodeName = item.source
    const targetNodeName = item.target
    // 对于 source 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(sourceNodeName)) {
      nodeDegrees[sourceNodeName] += 1
    } else {
      nodeDegrees[sourceNodeName] = 1
    }
    // 对于 target 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(targetNodeName)) {
      nodeDegrees[targetNodeName] += 1
    } else {
      nodeDegrees[targetNodeName] = 1
    }
  })
  const node = nodetemp.filter((item, index, array) => {
    // 如果当前元素第一次出现，则返回 true
    return array.findIndex((ele) => ele.name === item.name) === index
  })
  node.forEach((item) => {
    // 加入边数组
    nodes.push({
      name: item.name,
      itemStyle: {
        color: getRandomColor()
      },
      symbolSize: nodeDegrees[item.name]
    })
  })
  console.log('节点数nodes', nodes)
  console.log('连线数edges', edges)
  const option = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
      zoom: 0.8,
      draggable: true,
      type: 'graph',
      legendHoverLink: false,
      // layout: 'force',
      layout: 'circular',
      circular: {
        rotateLabel: true
      },
      roam: true,
      data: nodes,
      links: edges,
      lineStyle: {
        width: 2,
        curveness: 0.3
      },
      label: {
        show: true,
        position: 'right',
        formatter: function (node) {
          if (node.name.length < 25) {
            return node.name
          } else {
            return node.name.slice(0, 25)
          }
        }
      },
      emphasis: {
        focus: 'adjacency',
        lineStyle: {
          width: 10
        }
      }
    }]
  }
  return option
}

export const Num5graph = (data) => {
  function getRandomColor () {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  const nodetemp = []
  const nodes = []

  const edge = [{
    source: "Undecanoic acid",
    target: "Stearic Acid",
    value: '0.737856626'
  },
  {
    source: "N-icosanoylsphingosine",
    target: "Arachidonic acid",
    value: '0.73094278'
  },
  {
    source: "Pentadecanoic acid",
    target: "Stearic Acid",
    value: '0.725095107'
  },
  {
    source: "Undecanoic acid",
    target: "Arachidonic acid",
    value: '0.668098953'
  },
  {
    source: "9,11-Octadecadienoic acid",
    target: "Arachidonic acid",
    value: '0.660138249'
  },
  {
    source: "Arachidonic acid",
    target: "Tricosanoic acid",
    value: '0.658778067'
  },
  {
    source: "N-(9Z-octadecenoyl)-sphinganine",
    target: "Arachidonic acid",
    value: '0.649049539'
  },
  {
    source: "N-[(E)-1,3-dihydroxyicos-4-en-2-yl]octadecanamide",
    target: "Nicotinamide",
    value: '0.647849462'
  },
  {
    source: "Nicotinamide",
    target: "1-(1Z-eicosenyl)-2-(5Z,8Z,11Z,14Z-eicosatetraenoyl)-glycero-3-phosphoethanolamine",
    value: '0.643673195'
  },
  {
    source: "Lauric Acid",
    target: "Stearic Acid",
    value: '0.63671275'
  },
  {
    source: "N-[(E)-1,3-dihydroxyicos-4-en-2-yl]octadecanamide",
    target: "Arachidonic acid",
    value: '0.630280338'
  },
  {
    source: "9,11-Octadecadienoic acid",
    target: "Nicotinamide",
    value: '0.62437596'
  },
  {
    source: "N-icosanoylsphingosine",
    target: "Nicotinamide",
    value: '0.623223886'
  },
  {
    source: "Arachidonic acid",
    target: "Nicotinamide",
    value: '0.61391129'
  },
  {
    source: "Tricosanoic acid",
    target: "Nicotinamide",
    value: '0.612358539'
  },
  {
    source: "Stearic Acid",
    target: "Octacosanoic acid",
    value: '0.610685741'
  },
  {
    source: "Stearic Acid",
    target: "Arachidonic acid",
    value: '0.600086406'
  },
  {
    source: "Stearic Acid",
    target: "N-[3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadecan-2-yl]octadecanamide",
    value: '0.584060389'
  },
  {
    source: "N-(9Z-octadecenoyl)-sphinganine",
    target: "Nicotinamide",
    value: '0.576660906'
  },
  {
    source: "Nicotinamide",
    target: "PE(P-18:0/20:4(8Z,11Z,14Z,17Z))",
    value: '0.576468894'
  },
  {
    source: "Nicotinamide",
    target: "1-(1Z-octadecenyl)-2-(5Z,8Z,11Z,14Z-eicosatetraenoyl)-sn-glycero-3-phosphoethanolamine",
    value: '0.576468894'
  },
  {
    source: "Arachidonic acid",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(Z)-octadec-9-enoxy]propan-2-yl] (10Z,13Z,16Z,19Z)-docosa-10,13,16,19-tetraenoate",
    value: '0.567444316'
  },
  {
    source: "Stearic Acid",
    target: "3Z,6Z,9Z,12Z,15Z-octadecapentaenoic acid",
    value: '0.566079402'
  },
  {
    source: "Arachidonic acid",
    target: "1-Stearidonoyl-2-stearidonoyl-3-eicosapentaenoyl-glycerol",
    value: '0.556639664'
  },
  {
    source: "N-[(E)-1,3-dihydroxyicos-4-en-2-yl]octadecanamide",
    target: "Stearic Acid",
    value: '0.553955453'
  },
  {
    source: "Stearic Acid",
    target: "Pentacosanoic acid",
    value: '0.553722083'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(Z)-octadec-9-enoxy]propan-2-yl] (10Z,13Z,16Z,19Z)-docosa-10,13,16,19-tetraenoate",
    value: '0.546226959'
  },
  {
    source: "Stearic Acid",
    target: "1-Steroyl-2-oleoylphosphatidylcholine",
    value: '-0.545842934'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(9Z,12Z,15Z)-octadeca-9,12,15-trienoxy]propan-2-yl] (8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoate",
    value: '0.541361143'
  },
  {
    source: "Stearic Acid",
    target: "N-[3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadecan-2-yl]docosanamide",
    value: '0.52750576'
  },
  {
    source: "Lauric Acid",
    target: "Arachidonic acid",
    value: '0.523089478'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-Aminoethoxy(hydroxy)phosphoryl]oxy-3-tetradecoxypropan-2-yl] icosanoate",
    value: '0.522766004'
  },
  {
    source: "Stearic Acid",
    target: "1-(1Z-eicosenyl)-2-nonadecanoyl-glycero-3-phosphoethanolamine",
    value: '0.522562528'
  },
  {
    source: "Arachidonic acid",
    target: "1-(1Z-eicosenyl)-2-(5Z,8Z,11Z,14Z-eicosatetraenoyl)-glycero-3-phosphoethanolamine",
    value: '0.518145161'
  },
  {
    source: "N-(9Z-octadecenoyl)-sphinganine",
    target: "Stearic Acid",
    value: '0.513008833'
  },
  {
    source: "Arachidonic acid",
    target: "(2-Hexacosanoyloxy-3-undecanoyloxypropyl) 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.493381497'
  },
  {
    source: "Stearic Acid",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(Z)-octadec-9-enoxy]propan-2-yl] (10Z,13Z,16Z,19Z)-docosa-10,13,16,19-tetraenoate",
    value: '0.492607527'
  },
  {
    source: "Stearic Acid",
    target: "Nicotinamide",
    value: '0.492223502'
  },
  {
    source: "Stearic Acid",
    target: "Nicotinamide",
    value: '0.492223502'
  },
  {
    source: "Pentadecanoic acid",
    target: "Arachidonic acid",
    value: '0.491965389'
  },
  {
    source: "Stearic Acid",
    target: "1,2-Distearoyl-sn-glycero-3-phosphocholine",
    value: '-0.48882115'
  },
  {
    source: "Arachidonic acid",
    target: "[1-[2-Aminoethoxy(hydroxy)phosphoryl]oxy-3-tetradecoxypropan-2-yl] icosanoate",
    value: '0.488082951'
  },
  {
    source: "Stearic Acid",
    target: "Tricosanoic acid",
    value: '0.487597057'
  },
  {
    source: "Stearic Acid",
    target: "N-[(E)-3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadec-4-en-2-yl]hexacosanamide",
    value: '0.487471198'
  },
  {
    source: "Stearic Acid",
    target: "N-[(E)-3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadec-4-en-2-yl]tetracosanamide",
    value: '0.486511137'
  },
  {
    source: "Stearic Acid",
    target: "Hexacosanoic acid",
    value: '0.483432344'
  },
  {
    source: "Arachidonic acid",
    target: "Pentacosanoic acid",
    value: '0.476988251'
  },
  {
    source: "N-icosanoylsphingosine",
    target: "Stearic Acid",
    value: '0.473502304'
  },
  {
    source: "Stearic Acid",
    target: "9,11-Octadecadienoic acid",
    value: '0.469518049'
  },
  {
    source: "Stearic Acid",
    target: "(2-Octadecanoyloxy-3-undecanoyloxypropyl) 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.468903772'
  }]
  const edges = []
  const nodeDegrees = {}

  edge.forEach((item) => {
    if (item.value > 0) {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    } else {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: -item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    }

    // 获取当前边的 source 和 target 节点名称
    const sourceNodeName = item.source
    const targetNodeName = item.target
    // 对于 source 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(sourceNodeName)) {
      nodeDegrees[sourceNodeName] += 1
    } else {
      nodeDegrees[sourceNodeName] = 1
    }
    // 对于 target 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(targetNodeName)) {
      nodeDegrees[targetNodeName] += 1
    } else {
      nodeDegrees[targetNodeName] = 1
    }
  })
  const node = nodetemp.filter((item, index, array) => {
    // 如果当前元素第一次出现，则返回 true
    return array.findIndex((ele) => ele.name === item.name) === index
  })
  node.forEach((item) => {
    // 加入边数组
    nodes.push({
      name: item.name,
      itemStyle: {
        color: getRandomColor()
      },
      symbolSize: nodeDegrees[item.name]
    })
  })
  console.log('节点数nodes', nodes)
  console.log('连线数edges', edges)
  const option = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
      zoom: 0.8,
      draggable: true,
      type: 'graph',
      legendHoverLink: false,
      // layout: 'force',
      layout: 'circular',
      circular: {
        rotateLabel: true
      },
      data: nodes,
      links: edges,
      lineStyle: {
        width: 2,
        curveness: 0.3
      },
      formatter: function (node) {
        if (node.name.length < 25) {
          return node.name
        } else {
          return node.name.slice(0, 25)
        }
      },
      emphasis: {
        focus: 'adjacency',
        lineStyle: {
          width: 10
        }
      }
    }]
  }
  return option
}

export const Num6graph = (data) => {
  function getRandomColor () {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  const nodetemp = []
  const nodes = []

  const edge = [{
    source: "Pentadecanoic acid",
    target: "Stearic Acid",
    value: '0.804977163'
  },
  {
    source: "Undecanoic acid",
    target: "Stearic Acid",
    value: '0.76522237'
  },
  {
    source: "Nicotinamide",
    target: "1-(9Z-octadecenoyl)-2,3-di-(4Z,7Z,10Z,13Z,16Z,19Z-docosahexaenoyl)-sn-glycerol",
    value: '0.75753657'
  },
  {
    source: "Nicotinamide",
    target: "1-Stearoyl-2-oleoyl-3-eicsoatetraenoyl-glycerol",
    value: '0.748028162'
  },
  {
    source: "Nicotinamide",
    target: "2,3-Dipalmito-1-olein",
    value: '0.747246961'
  },
  {
    source: "Nicotinamide",
    target: "1-Palmitoyl-2-eicsoatetraenoyl-3-docosahexaenoyl-glycerol",
    value: '0.746148035'
  },
  {
    source: "N-[3,4-dihydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyheptadecan-2-yl]-2-hydroxyicosanamide",
    target: "Nicotinamide",
    value: '0.745773189'
  },
  {
    source: "Stearic Acid",
    target: "N-[3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadecan-2-yl]tetracosanamide",
    value: '0.74010989'
  },
  {
    source: "Nicotinamide",
    target: "[1-hexadecanoyloxy-3-[(Z)-octadec-9-enoyl]oxypropan-2-yl] octadecanoate",
    value: '0.737774725'
  },
  {
    source: "Nicotinamide",
    target: "1-hexadecanoyl-2-(9Z-octadecenoyl)-3-(4Z,7Z,10Z,13Z,16Z,19Z-docosahexaenoyl)-sn-glycerol",
    value: '0.735393773'
  },
  {
    source: "N-[(E)-1,3-dihydroxyicos-4-en-2-yl]octadecanamide",
    target: "Nicotinamide",
    value: '0.734157509'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(Z)-octadec-9-enoxy]propan-2-yl] (10Z,13Z,16Z,19Z)-docosa-10,13,16,19-tetraenoate",
    value: '0.727838828'
  },
  {
    source: "Nicotinamide",
    target: "1-Palmitoyl-2-oleoyl-3-eicsoatetraenoyl-glycerol",
    value: '0.727176987'
  },
  {
    source: "Nicotinamide",
    target: "1,2-di-(9Z-octadecenoyl)-3-(4Z,7Z,10Z,13Z,16Z,19Z-docosahexaenoyl)-sn-glycerol",
    value: '0.723087138'
  },
  {
    source: "Lauric Acid",
    target: "Stearic Acid",
    value: '0.705586081'
  },
  {
    source: "Nicotinamide",
    target: "1-hexadecanoyl-2-(9Z,12Z-octadecadienoyl)-3-(5Z,8Z,11Z,14Z,17Z-eicosapentaenoyl)-sn-glycerol",
    value: '0.703939009'
  },
  {
    source: "Nicotinamide",
    target: "1-O,2-O-Dipalmitoyl-3-O-[(4Z,7Z,10Z,13Z,16Z,19Z)-1-oxo-4,7,10,13,16,19-docosahexaenyl]glycerol",
    value: '0.698703053'
  },
  {
    source: "Nicotinamide",
    target: "Octadecanoic acid, 2,3-bis[(1-oxohexadecyl)oxy]propyl ester",
    value: '0.698214286'
  },
  {
    source: "Nicotinamide",
    target: "1-Palmitoyl-2-palmitoyl-3-eicsoatetraenoyl-glycerol",
    value: '0.697276693'
  },
  {
    source: "Nicotinamide",
    target: "1-octadecanoyl-2-(9Z-octadecenoyl)-3-(4Z,7Z,10Z,13Z,16Z,19Z-docosahexaenoyl)-sn-glycerol",
    value: '0.697055727'
  },
  {
    source: "N-Acetyl-L-aspartic acid",
    target: "Nicotinamide",
    value: '0.689423077'
  },
  {
    source: "Nicotinamide",
    target: "1-hexadecanoyl-2-(9Z,12Z-octadecadienoyl)-3-(4Z,7Z,10Z,13Z,16Z,19Z-docosahexaenoyl)-sn-glycerol",
    value: '0.689403313'
  },
  {
    source: "Stearic Acid",
    target: "N-[3,4-dihydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyheptadecan-2-yl]-2-hydroxyicosanamide",
    value: '0.686843943'
  },
  {
    source: "Nicotinamide",
    target: "(3-hexadecanoyloxy-2-octadecanoyloxypropyl) (4Z,7Z,10Z,13Z,16Z,19Z)-docosa-4,7,10,13,16,19-hexaenoate",
    value: '0.685302198'
  },
  {
    source: "Nicotinamide",
    target: "1-Palmitoyl-2-stearoyl-3-eicsoatetraenoyl-glycerol",
    value: '0.685028103'
  },
  {
    source: "Nicotinamide",
    target: "1-Behenoyl-3-stearoyl-2-oleoyl glycerol",
    value: '0.67736618'
  },
  {
    source: "Nicotinamide",
    target: "Glycerol 1-myristate 2-palmitate 3-stearate",
    value: '0.67576323'
  },
  {
    source: "Nicotinamide",
    target: "1,2-Dioleoyl-3-palmitoylglycerol",
    value: '0.667582418'
  },
  {
    source: "Nicotinamide",
    target: "(3-hexadecanoyloxy-2-octadecanoyloxypropyl) (Z)-icos-11-enoate",
    value: '0.666704824'
  },
  {
    source: "Nicotinamide",
    target: "Glycerin 1-O-docosanoate 2-O-[(Z)-9-octadecenoate]3-O-palmitate",
    value: '0.66649877'
  },
  {
    source: "Stearic Acid",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(Z)-octadec-9-enoxy]propan-2-yl] (10Z,13Z,16Z,19Z)-docosa-10,13,16,19-tetraenoate",
    value: '0.665064103'
  },
  {
    source: "5Z-tetradecenoic acid",
    target: "Stearic Acid",
    value: '0.663980311'
  },
  {
    source: "Stearic Acid",
    target: "(2-Hexacosanoyloxy-3-undecanoyloxypropyl) 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.661630037'
  },
  {
    source: "Stearic Acid",
    target: "[2-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxy-3-tetracosanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.655547797'
  },
  {
    source: "Stearic Acid",
    target: "Nicotinamide",
    value: '0.653846154'
  },
  {
    source: "Stearic Acid",
    target: "PC(P-16:0/20:5(5Z,8Z,11Z,14Z,17Z))",
    value: '-0.646134133'
  },
  {
    source: "Nicotinamide",
    target: "[(E)-3-hydroxy-2-(tetracosanoylamino)octadec-4-enyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.644734432'
  },
  {
    source: "N-(docosanoyl)-sphinganine",
    target: "Stearic Acid",
    value: '0.642681349'
  },
  {
    source: "(3-Hexacosanoyloxy-2-hydroxypropyl) 2-(trimethylazaniumyl)ethyl phosphate",
    target: "Nicotinamide",
    value: '0.642275772'
  },
  {
    source: "Stearic Acid",
    target: "3Z,6Z,9Z,12Z,15Z-octadecapentaenoic acid",
    value: '0.641611815'
  },
  {
    source: "N-[(E)-3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadec-4-en-2-yl]tetracosanamide",
    target: "Nicotinamide",
    value: '0.638827839'
  },
  {
    source: "(4Z,7Z,10Z,13Z)-hexadeca-4,7,10,13-tetraenoic acid",
    target: "Stearic Acid",
    value: '0.637364913'
  },
  {
    source: "Nicotinamide",
    target: "(2-Hexacosanoyloxy-3-undecanoyloxypropyl) 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.635851648'
  },
  {
    source: "Stearic Acid",
    target: "[3-[2-aminoethoxy(hydroxy)phosphoryl]oxy-2-hydroxypropyl] (8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoate",
    value: '0.632554945'
  },
  {
    source: "Stearic Acid",
    target: "Phosphatidylcholine 14:0-16:0",
    value: '-0.631501832'
  },
  {
    source: "Nicotinamide",
    target: "1-Stearoyl-2-stearoyl-3-eicsoatetraenoyl-glycerol",
    value: '0.627631444'
  },
  {
    source: "Stearic Acid",
    target: "[1-[2-Aminoethoxy(hydroxy)phosphoryl]oxy-3-octanoyloxypropan-2-yl] nonanoate",
    value: '0.626831502'
  },
  {
    source: "Stearic Acid",
    target: "[3-hexadecanoyloxy-2-[(11Z,14Z)-icosa-11,14-dienoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.626106068'
  },
  {
    source: "Stearic Acid",
    target: "Dimyristoylphosphatidylcholine, DL-",
    value: '-0.624778214'
  },
  {
    source: "Nicotinamide",
    target: "1-(1Z-eicosenyl)-2-(5Z,8Z,11Z,14Z-eicosatetraenoyl)-glycero-3-phosphoethanolamine",
    value: '0.622481685'
  }]
  const edges = []
  const nodeDegrees = {}

  edge.forEach((item) => {
    if (item.value > 0) {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    } else {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: -item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    }

    // 获取当前边的 source 和 target 节点名称
    const sourceNodeName = item.source
    const targetNodeName = item.target
    // 对于 source 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(sourceNodeName)) {
      nodeDegrees[sourceNodeName] += 1
    } else {
      nodeDegrees[sourceNodeName] = 1
    }
    // 对于 target 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(targetNodeName)) {
      nodeDegrees[targetNodeName] += 1
    } else {
      nodeDegrees[targetNodeName] = 1
    }
  })
  const node = nodetemp.filter((item, index, array) => {
    // 如果当前元素第一次出现，则返回 true
    return array.findIndex((ele) => ele.name === item.name) === index
  })
  node.forEach((item) => {
    // 加入边数组
    nodes.push({
      name: item.name,
      itemStyle: {
        color: getRandomColor()
      },
      symbolSize: nodeDegrees[item.name]
    })
  })
  console.log('节点数nodes', nodes)
  console.log('连线数edges', edges)
  const option = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
      zoom: 0.8,
      draggable: true,
      type: 'graph',
      legendHoverLink: false,
      // layout: 'force',
      layout: 'circular',
      circular: {
        rotateLabel: true
      },
      roam: true,
      data: nodes,
      links: edges,
      lineStyle: {
        width: 2,
        curveness: 0.3
      },
      label: {
        show: true,
        position: 'right',
        formatter: function (node) {
          if (node.name.length < 25) {
            return node.name
          } else {
            return node.name.slice(0, 25)
          }
        }
      },
      emphasis: {
        focus: 'adjacency',
        lineStyle: {
          width: 10
        }
      }
    }]
  }
  return option
}

export const Num7graph = (data) => {
  function getRandomColor () {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  const nodetemp = []
  const nodes = []

  const edge = [{
    source: "Choline Alfoscerate",
    target: "[3-[(Z)-hexadec-9-enoyl]oxy-2-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.828956707101563'
  },
  {
    source: "Choline Alfoscerate",
    target: "[3-icosanoyloxy-2-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.828937728937729'
  },
  {
    source: "Choline Alfoscerate",
    target: "[3-[(Z)-docos-13-enoyl]oxy-2-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.828466443122537'
  },
  {
    source: "Choline Alfoscerate",
    target: "[2-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxy-3-[(Z)-tetracos-13-enoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.814423076923077'
  },
  {
    source: "Choline Alfoscerate",
    target: "[2-[(9Z,12Z)-octadeca-9,12-dienoyl]oxy-3-[(Z)-octadec-9-enoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.813553113553114'
  },
  {
    source: "Choline Alfoscerate",
    target: "1-(1Z,11Z-octadecadienyl)-2-octadecanoyl-sn-glycero-3-phosphocholine",
    value: '0.813049450549451'
  },
  {
    source: "Choline Alfoscerate",
    target: "[3-docosanoyloxy-2-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.812637362637363'
  },
  {
    source: "Choline Alfoscerate",
    target: "Palmitoyleicosapentaenoyl Phosphatidylcholine",
    value: '0.809908651967104'
  },
  {
    source: "Choline Alfoscerate",
    target: "1-Palmitoyl-2-palmitoleoylphosphatidylcholine",
    value: '0.807326007326007'
  },
  {
    source: "Choline Alfoscerate",
    target: "2,3-bis[[(Z)-hexadec-9-enoyl]oxy]propyl 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.804565070623576'
  },
  {
    source: "Choline Alfoscerate",
    target: "[2-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxy-3-tetradecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.80451480753051'
  },
  {
    source: "Choline Alfoscerate",
    target: "[2-[(11Z,14Z)-icosa-11,14-dienoyl]oxy-3-[(Z)-octadec-9-enoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.802655677655678'
  },
  {
    source: "Choline Alfoscerate",
    target: "[2-[(Z)-hexadec-9-enoyl]oxy-3-tetradecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.800274725274725'
  },
  {
    source: "Choline Alfoscerate",
    target: "[2-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxy-3-pentadecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.798928476653936'
  },
  {
    source: "Choline Alfoscerate",
    target: "[3-docosanoyloxy-2-[(9Z,12Z)-octadeca-9,12-dienoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.797957828913994'
  },
  {
    source: "Choline Alfoscerate",
    target: "[3-[(Z)-docos-13-enoyl]oxy-2-[(9Z,12Z)-octadeca-9,12-dienoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.795192307692308'
  },
  {
    source: "Choline Alfoscerate",
    target: "[3-hexadecanoyloxy-2-[(12Z,15Z,18Z,21Z)-tetracosa-12,15,18,21-tetraenoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.794001831501831'
  },
  {
    source: "Choline Alfoscerate",
    target: "1-pentadecanoyl-2-(9Z-hexadecenoyl)-sn-glycero-3-phosphocholine",
    value: '0.792582417582418'
  },
  {
    source: "Choline Alfoscerate",
    target: "(2-Octadecanoyloxy-3-tetradecoxypropyl) 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.791849816849817'
  },
  {
    source: "Choline Alfoscerate",
    target: "[2-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxy-3-tetracosanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.788232600732601'
  },
  {
    source: "Choline Alfoscerate",
    target: "[3-octadecanoyloxy-2-[(12Z,15Z,18Z,21Z)-tetracosa-12,15,18,21-tetraenoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.787051133878647'
  },
  {
    source: "Choline Alfoscerate",
    target: "[2-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxy-3-[(9Z,12Z)-octadeca-9,12-dienoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.786410100899747'
  },
  {
    source: "Choline Alfoscerate",
    target: "Phosphatidylcholine 15:0-16:0",
    value: '0.784752747252747'
  },
  {
    source: "Choline Alfoscerate",
    target: "Dioleoyl phosphatidylcholine",
    value: '0.784203296703297'
  },
  {
    source: "Choline Alfoscerate",
    target: "Dimyristoylphosphatidylcholine, DL-",
    value: '0.781899976012491'
  },
  {
    source: "Choline Alfoscerate",
    target: "1-(1Z-hexadecenyl)-2-(5Z,8Z,11Z-eicosatrienoyl)-sn-glycero-3-phosphocholine",
    value: '0.781822344322344'
  },
  {
    source: "Choline Alfoscerate",
    target: "Phosphatidylcholine 14:0-16:0",
    value: '0.780357142857143'
  },
  {
    source: "Choline Alfoscerate",
    target: "1,2-Distearoyllecithin",
    value: '0.779120879120879'
  },
  {
    source: "Choline Alfoscerate",
    target: "(2-Octadecanoyloxy-3-undecanoyloxypropyl) 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.775974175455185'
  },
  {
    source: "Choline Alfoscerate",
    target: "[3-hexadecanoyloxy-2-[(9Z,12Z,15Z)-octadeca-9,12,15-trienoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.775512540258458'
  },
  {
    source: "Choline Alfoscerate",
    target: "[2-[(Z)-icos-11-enoyl]oxy-3-[(Z)-octadec-9-enoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.77518315018315'
  },
  {
    source: "Choline Alfoscerate",
    target: "PC(O-16:0/18:3(6Z,9Z,12Z))",
    value: '0.77493875677911'
  },
  {
    source: "Choline Alfoscerate",
    target: "PC(P-18:1(11Z)/20:2(11Z,14Z))",
    value: '0.773818381671367'
  },
  {
    source: "Choline Alfoscerate",
    target: "[2-[(9Z,12Z)-octadeca-9,12-dienoyl]oxy-3-pentadecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.772740803617802'
  },
  {
    source: "Choline Alfoscerate",
    target: "[2-[(11Z,14Z,17Z)-icosa-11,14,17-trienoyl]oxy-3-[(Z)-octadec-9-enoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.771199633699634'
  },
  {
    source: "Choline Alfoscerate",
    target: "Dilinoleoylphosphatidylcholine",
    value: '0.77032967032967'
  },
  {
    source: "Choline Alfoscerate",
    target: "[2-[(4Z,7Z,10Z,13Z,16Z,19Z)-docosa-4,7,10,13,16,19-hexaenoyl]oxy-3-tetradecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.769251904413892'
  },
  {
    source: "Choline Alfoscerate",
    target: "[2-[(Z)-heptadec-9-enoyl]oxy-3-hexadecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.768818681318681'
  },
  {
    source: "Choline Alfoscerate",
    target: "[2-[(9Z,12Z)-octadeca-9,12-dienoyl]oxy-3-[(Z)-tetracos-13-enoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.767453839952295'
  },
  {
    source: "Choline Alfoscerate",
    target: "(2-Heptadecanoyloxy-3-hexadecanoyloxypropyl) 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.765049966281422'
  },
  {
    source: "Choline Alfoscerate",
    target: "1,2-Diacyl-sn-glycero-3-phosphocholine",
    value: '0.763232600732601'
  },
  {
    source: "Choline Alfoscerate",
    target: "[2-[(7Z,10Z,13Z,16Z,19Z)-docosa-7,10,13,16,19-pentaenoyl]oxy-3-hexadecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.76231684981685'
  },
  {
    source: "Choline Alfoscerate",
    target: "[3-[(Z)-hexacos-15-enoyl]oxy-2-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.761080586080586'
  },
  {
    source: "Choline Alfoscerate",
    target: "[3-nonadecanoyloxy-2-[(9Z,12Z)-octadeca-9,12-dienoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.76065431156897'
  },
  {
    source: "Choline Alfoscerate",
    target: "PC(20:2(11Z,14Z)/20:1(11Z))",
    value: '0.760622710622711'
  },
  {
    source: "Choline Alfoscerate",
    target: "[2-[(4Z,7Z,10Z,13Z,16Z,19Z)-docosa-4,7,10,13,16,19-hexaenoyl]oxy-3-[(11Z,14Z,17Z)-icosa-11,14,17-trienoyl]oxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.759320947824613'
  },
  {
    source: "Choline Alfoscerate",
    target: "PC(O-16:0/20:3(8Z,11Z,14Z))",
    value: '0.758653846153846'
  },
  {
    source: "Choline Alfoscerate",
    target: "Phosphorylcholine",
    value: '0.758379120879121'
  },
  {
    source: "Choline Alfoscerate",
    target: "1-(1Z-eicosenyl)-2-(6Z,9Z,12Z,15Z-octadecatetraenoyl)-glycero-3-phosphocholine",
    value: '0.758296225968018'
  },
  {
    source: "Choline Alfoscerate",
    target: "PC(20:1(11Z)/22:6(4Z,7Z,10Z,13Z,16Z,19Z))",
    value: '0.757778337614744'
  }]
  const edges = []
  const nodeDegrees = {}

  edge.forEach((item) => {
    if (item.value > 0) {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    } else {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: -item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    }

    // 获取当前边的 source 和 target 节点名称
    const sourceNodeName = item.source
    const targetNodeName = item.target
    // 对于 source 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(sourceNodeName)) {
      nodeDegrees[sourceNodeName] += 1
    } else {
      nodeDegrees[sourceNodeName] = 1
    }
    // 对于 target 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(targetNodeName)) {
      nodeDegrees[targetNodeName] += 1
    } else {
      nodeDegrees[targetNodeName] = 1
    }
  })
  const node = nodetemp.filter((item, index, array) => {
    // 如果当前元素第一次出现，则返回 true
    return array.findIndex((ele) => ele.name === item.name) === index
  })
  node.forEach((item) => {
    // 加入边数组
    nodes.push({
      name: item.name,
      itemStyle: {
        color: getRandomColor()
      },
      symbolSize: nodeDegrees[item.name]
    })
  })
  console.log('节点数nodes', nodes)
  console.log('连线数edges', edges)
  const option = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
      zoom: 0.8,
      draggable: true,
      type: 'graph',
      legendHoverLink: false,
      // layout: 'force',
      layout: 'circular',
      circular: {
        rotateLabel: true
      },
      data: nodes,
      links: edges,
      lineStyle: {
        width: 2,
        curveness: 0.3
      },
      label: {
        show: true,
        position: 'right',
        formatter: function (node) {
          if (node.name.length < 25) {
            return node.name
          } else {
            return node.name.slice(0, 25)
          }
        }
      },
      emphasis: {
        focus: 'adjacency',
        lineStyle: {
          width: 10
        }
      }
    }]
  }
  return option
}

export const Num8graph = (data) => {
  function getRandomColor () {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  const nodetemp = []
  const nodes = []

  const edge = [{
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(Z)-octadec-9-enoxy]propan-2-yl] (10Z,13Z,16Z,19Z)-docosa-10,13,16,19-tetraenoate",
    value: '0.723397436'
  },
  {
    source: "Nicotinamide",
    target: "[(E)-3-hydroxy-2-(tetracosanoylamino)octadec-4-enyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.664880952'
  },
  {
    source: "N-[3,4-dihydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyheptadecan-2-yl]-2-hydroxyicosanamide",
    target: "Nicotinamide",
    value: '0.640018315'
  },
  {
    source: "(Z)-N-[3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxynonacosan-2-yl]tridec-8-enamide",
    target: "Nicotinamide",
    value: '0.60242674'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(Z)-octadec-9-enoxy]propan-2-yl] (Z)-docos-13-enoate",
    value: '0.587774725'
  },
  {
    source: "(Z)-N-[3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxytricosan-2-yl]henicos-9-enamide",
    target: "Nicotinamide",
    value: '0.586080586'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(Z)-icos-11-enoyl]oxypropan-2-yl] (10Z,13Z,16Z,19Z)-docosa-10,13,16,19-tetraenoate",
    value: '0.578372005'
  },
  {
    source: "Tetracosanamide, N-[2-hydroxy-1-(hydroxymethyl)heptadecyl]-",
    target: "Nicotinamide",
    value: '0.574617383'
  },
  {
    source: "Nicotinamide",
    target: "(2-Hexacosanoyloxy-3-undecanoyloxypropyl) 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.565139253'
  },
  {
    source: "N-[3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadecan-2-yl]octadecanamide",
    target: "Nicotinamide",
    value: '0.564102564'
  },
  {
    source: "Nicotinamide",
    target: "[3-Hydroxy-2-(tetracosanoylamino)octadecyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.558608059'
  },
  {
    source: "Nicotinamide",
    target: "[(4E,8E)-3-hydroxy-2-(icosanoylamino)tetracosa-4,8-dienyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.55782967'
  },
  {
    source: "Nicotinamide",
    target: "1-docosanoyl-2-(13Z-octadecenoyl)-sn-glycero-3-phosphoethanolamine",
    value: '0.556119003'
  },
  {
    source: "(E)-N-[(2S,3R)-3-hydroxy-1-[(2S,5R,6S)-3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadecan-2-yl]docos-13-enamide",
    target: "Nicotinamide",
    value: '0.552518315'
  },
  {
    source: "Nicotinamide",
    target: "[3-Hydroxy-2-(tricosanoylamino)octadecyl] 2-(trimethylazaniumyl)ethyl phosphate",
    value: '0.55167756'
  },
  {
    source: "N-[3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadecan-2-yl]docosanamide",
    target: "Nicotinamide",
    value: '0.541712454'
  },
  {
    source: "N-[3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadecan-2-yl]icosanamide",
    target: "Nicotinamide",
    value: '0.541254579'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(5Z,8Z,11Z,14Z,17Z)-icosa-5,8,11,14,17-pentaenoxy]propan-2-yl] (7Z,10Z,13Z,16Z,19Z)-docosa-7,10,13,16,19-pentaenoate",
    value: '0.535216749'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(Z)-octadec-9-enoxy]propan-2-yl] icosanoate",
    value: '0.528479853'
  },
  {
    source: "N-[(E)-3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadec-4-en-2-yl]hexacosanamide",
    target: "Nicotinamide",
    value: '0.521016484'
  },
  {
    source: "Nicotinamide",
    target: "[2-[(E)-2-(hexadecanoylamino)-3-hydroxyoctadec-4-enoxy]-3,5-dihydroxy-6-(hydroxymethyl)oxan-4-yl] hydrogen sulfate",
    value: '0.519093407'
  },
  {
    source: "Nicotinamide",
    target: "1-(11Z-docosenoyl)-2-(9Z-octadecenoyl)-glycero-3-phosphoethanolamine",
    value: '0.518498168'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(Z)-octadec-9-enoyl]oxypropan-2-yl] (Z)-docos-13-enoate",
    value: '0.518498168'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(Z)-octadec-9-enoxy]propan-2-yl] docosanoate",
    value: '0.516191806'
  },
  {
    source: "N-[3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadecan-2-yl]tetracosanamide",
    target: "Nicotinamide",
    value: '0.513507326'
  },
  {
    source: "Nicotinamide",
    target: "[3,5-Dihydroxy-2-(hydroxymethyl)-6-[3-hydroxy-2-(tetracosanoylamino)octadecoxy]oxan-4-yl] hydrogen sulfate",
    value: '0.513003663'
  },
  {
    source: "(Z)-N-[(E)-3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyheptadec-4-en-2-yl]pentacos-11-enamide",
    target: "Nicotinamide",
    value: '0.510210623'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoxy]propan-2-yl] hexadecanoate",
    value: '0.508259212'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-Aminoethoxy(hydroxy)phosphoryl]oxy-3-tetradecoxypropan-2-yl] docosanoate",
    value: '0.506232901'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-Aminoethoxy(hydroxy)phosphoryl]oxy-3-tetradecoxypropan-2-yl] tetracosanoate",
    value: '0.504756345'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(Z)-octadec-9-enoyl]oxypropan-2-yl] (11Z,14Z,17Z)-icosa-11,14,17-trienoate",
    value: '0.503800366'
  },
  {
    source: "Nicotinamide",
    target: "1-(1Z-eicosenyl)-2-nonadecanoyl-glycero-3-phosphoethanolamine",
    value: '0.491849817'
  },
  {
    source: "Nicotinamide",
    target: "[1-[Hydroxy-(2,3,4,5,6-pentahydroxycyclohexyl)oxyphosphoryl]oxy-3-tetradecanoyloxypropan-2-yl] hexadecanoate",
    value: '0.488827839'
  },
  {
    source: "Nicotinamide",
    target: "[1-hexadecanoyloxy-3-[hydroxy-(2,3,4,5,6-pentahydroxycyclohexyl)oxyphosphoryl]oxypropan-2-yl] (Z)-octadec-9-enoate",
    value: '0.484020147'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-Aminoethoxy(hydroxy)phosphoryl]oxy-3-tetradecoxypropan-2-yl] icosanoate",
    value: '0.48264652'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(9Z,12Z,15Z)-octadeca-9,12,15-trienoxy]propan-2-yl] (8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoate",
    value: '0.482600733'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-decanoyloxypropan-2-yl] (Z)-tridec-9-enoate",
    value: '0.477615357'
  },
  {
    source: "Nicotinamide",
    target: "[1-[hydroxy-(2,3,4,5,6-pentahydroxycyclohexyl)oxyphosphoryl]oxy-3-octadecanoyloxypropan-2-yl] (7Z,10Z,13Z,16Z,19Z)-docosa-7,10,13,16,19-pentaenoate",
    value: '0.476356185'
  },
  {
    source: "Nicotinamide",
    target: "[2-[(Z)-hexadec-9-enoyl]oxy-3-[hydroxy-(2,3,4,5,6-pentahydroxycyclohexyl)oxyphosphoryl]oxypropyl] hexadecanoate",
    value: '0.467857143'
  },
  {
    source: "N-[3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadecan-2-yl]tricosanamide",
    target: "Nicotinamide",
    value: '0.466117216'
  },
  {
    source: "Nicotinamide",
    target: "[3,5-dihydroxy-2-(hydroxymethyl)-6-[3-hydroxy-2-[[(Z)-tetracos-11-enoyl]amino]octadecoxy]oxan-4-yl] hydrogen sulfate",
    value: '0.466071429'
  },
  {
    source: "(Z)-N-[3,4-dihydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadecan-2-yl]-2-hydroxyhenicos-9-enamide",
    target: "Nicotinamide",
    value: '0.464130771'
  },
  {
    source: "Nicotinamide",
    target: "PE(P-18:1(11Z)/18:3(6Z,9Z,12Z))",
    value: '0.463324176'
  },
  {
    source: "Nicotinamide",
    target: "(2-Nonanoyloxy-3-octanoyloxypropyl) 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.456734017'
  },
  {
    source: "N-[(E)-3,4-dihydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyheptadec-8-en-2-yl]-2-hydroxytetracosanamide",
    target: "Nicotinamide",
    value: '0.453828455'
  },
  {
    source: "3'-Adenylic acid",
    target: "Nicotinamide",
    value: '0.453617216'
  },
  {
    source: "N-[(4E,8E)-3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyhenicosa-4,8-dien-2-yl]tricosanamide",
    target: "Nicotinamide",
    value: '0.45027988'
  },
  {
    source: "Nicotinamide",
    target: "1-octadecyl-2-(5Z,8Z,11Z,14Z-eicosatetraenoyl)-glycero-3-phospho-(1'-myo-inositol)",
    value: '0.448855311'
  },
  {
    source: "Nicotinamide",
    target: "[3-[Hydroxy-(2,3,4,5,6-pentahydroxycyclohexyl)oxyphosphoryl]oxy-2-tetradecanoyloxypropyl] tetradecanoate",
    value: '0.447191463'
  },
  {
    source: "Nicotinamide",
    target: "(3-Heptadecanoyloxy-2-hexacosanoyloxypropyl) 2-(trimethylazaniumyl)ethyl phosphate",
    value: '-0.445688382'
  }]
  const edges = []
  const nodeDegrees = {}

  edge.forEach((item) => {
    if (item.value > 0) {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    } else {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: -item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    }

    // 获取当前边的 source 和 target 节点名称
    const sourceNodeName = item.source
    const targetNodeName = item.target
    // 对于 source 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(sourceNodeName)) {
      nodeDegrees[sourceNodeName] += 1
    } else {
      nodeDegrees[sourceNodeName] = 1
    }
    // 对于 target 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(targetNodeName)) {
      nodeDegrees[targetNodeName] += 1
    } else {
      nodeDegrees[targetNodeName] = 1
    }
  })
  const node = nodetemp.filter((item, index, array) => {
    // 如果当前元素第一次出现，则返回 true
    return array.findIndex((ele) => ele.name === item.name) === index
  })
  node.forEach((item) => {
    // 加入边数组
    nodes.push({
      name: item.name,
      itemStyle: {
        color: getRandomColor()
      },
      symbolSize: nodeDegrees[item.name]
    })
  })
  console.log('节点数nodes', nodes)
  console.log('连线数edges', edges)
  const option = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
      zoom: 0.8,
      draggable: true,
      type: 'graph',
      legendHoverLink: false,
      // layout: 'force',
      layout: 'circular',
      circular: {
        rotateLabel: true
      },
      data: nodes,
      links: edges,
      lineStyle: {
        width: 2,
        curveness: 0.3
      },
      label: {
        show: true,
        position: 'right',
        formatter: function (node) {
          if (node.name.length < 25) {
            return node.name
          } else {
            return node.name.slice(0, 25)
          }
        }
      },
      emphasis: {
        focus: 'adjacency',
        lineStyle: {
          width: 10
        }
      }
    }]
  }
  return option
}

export const Num9graph = (data) => {
  function getRandomColor () {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  const nodetemp = []
  const nodes = []

  const edge = [{
    source: "Nicotinamide",
    target: "Uridine",
    value: '0.683899769585253'
  },
  {
    source: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(Z)-octadec-9-enoxy]propan-2-yl] docosanoate",
    target: "Uridine",
    value: '0.624279953917051'
  },
  {
    source: "N-[(E)-3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadec-4-en-2-yl]hexacosanamide",
    target: "Uridine",
    value: '0.622839861751152'
  },
  {
    source: "[2-[(E)-2-(hexadecanoylamino)-3-hydroxyoctadec-4-enoxy]-3,5-dihydroxy-6-(hydroxymethyl)oxan-4-yl] hydrogen sulfate",
    target: "Uridine",
    value: '0.607510170816726'
  },
  {
    source: "[1-[2-Aminoethoxy(hydroxy)phosphoryl]oxy-3-tetradecoxypropan-2-yl] tetracosanoate",
    target: "Uridine",
    value: '0.607430875576037'
  },
  {
    source: "[1-[2-Aminoethoxy(hydroxy)phosphoryl]oxy-3-tetradecoxypropan-2-yl] docosanoate",
    target: "Uridine",
    value: '0.602342549923195'
  },
  {
    source: "[1-[2-Aminoethoxy(hydroxy)phosphoryl]oxy-3-tetradecoxypropan-2-yl] icosanoate",
    target: "Uridine",
    value: '0.596582181259601'
  },
  {
    source: "1-docosanoyl-2-(13Z-octadecenoyl)-sn-glycero-3-phosphoethanolamine",
    target: "Uridine",
    value: '0.596054147465438'
  },
  {
    source: "N-[3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadecan-2-yl]docosanamide",
    target: "Uridine",
    value: '0.588373655913978'
  },
  {
    source: "(Z)-N-[3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxytricosan-2-yl]henicos-9-enamide",
    target: "Uridine",
    value: '0.587931738162298'
  },
  {
    source: "N-[3,4-dihydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyheptadecan-2-yl]-2-hydroxyicosanamide",
    target: "Uridine",
    value: '0.583621351766513'
  },
  {
    source: "Tetracosanamide, N-[2-hydroxy-1-(hydroxymethyl)heptadecyl]-",
    target: "Uridine",
    value: '0.581067134075161'
  },
  {
    source: "(Z)-N-[3,4-dihydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadecan-2-yl]-2-hydroxyhenicos-9-enamide",
    target: "Uridine",
    value: '0.575124807987711'
  },
  {
    source: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(9Z,12Z,15Z)-octadeca-9,12,15-trienoxy]propan-2-yl] (8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoate",
    target: "Uridine",
    value: '0.56989247311828'
  },
  {
    source: "N-[(E)-3,4-dihydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyheptadec-8-en-2-yl]-2-hydroxytetracosanamide",
    target: "Uridine",
    value: '0.557411674347158'
  },
  {
    source: "N-[(4E,8E)-3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyhenicosa-4,8-dien-2-yl]tricosanamide",
    target: "Uridine",
    value: '0.532594086021505'
  },
  {
    source: "(Z)-N-[(E)-3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyheptadec-4-en-2-yl]pentacos-11-enamide",
    target: "Uridine",
    value: '0.529665898617512'
  },
  {
    source: "[1-[Hydroxy-(2,3,4,5,6-pentahydroxycyclohexyl)oxyphosphoryl]oxy-3-tetradecanoyloxypropan-2-yl] hexadecanoate",
    target: "Uridine",
    value: '0.523233486943164'
  },
  {
    source: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(Z)-octadec-9-enoxy]propan-2-yl] (Z)-docos-13-enoate",
    target: "Uridine",
    value: '0.507488479262673'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(9Z,12Z,15Z)-octadeca-9,12,15-trienoxy]propan-2-yl] (8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoate",
    value: '0.504704301075269'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(Z)-octadec-9-enoxy]propan-2-yl] (10Z,13Z,16Z,19Z)-docosa-10,13,16,19-tetraenoate",
    value: '0.503504224270353'
  },
  {
    source: "[2-[(Z)-icos-11-enoyl]oxy-3-tridecanoyloxypropyl] 2-(trimethylazaniumyl)ethyl phosphate",
    target: "Uridine",
    value: '-0.502683343096201'
  },
  {
    source: "[2-[(Z)-hexadec-9-enoyl]oxy-3-[hydroxy-(2,3,4,5,6-pentahydroxycyclohexyl)oxyphosphoryl]oxypropyl] hexadecanoate",
    target: "Uridine",
    value: '0.499039938556068'
  },
  {
    source: "(Z)-N-[3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxynonacosan-2-yl]tridec-8-enamide",
    target: "Uridine",
    value: '0.498175883256528'
  },
  {
    source: "(E)-N-[(2S,3R)-3-hydroxy-1-[(2S,5R,6S)-3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadecan-2-yl]docos-13-enamide",
    target: "Uridine",
    value: '0.486175115207373'
  },
  {
    source: "[(E)-3-hydroxy-2-(tetracosanoylamino)octadec-4-enyl] 2-(trimethylazaniumyl)ethyl phosphate",
    target: "Uridine",
    value: '0.478638632872504'
  },
  {
    source: "[1-hexadecanoyloxy-3-[hydroxy-(2,3,4,5,6-pentahydroxycyclohexyl)oxyphosphoryl]oxypropan-2-yl] (Z)-octadec-9-enoate",
    target: "Uridine",
    value: '0.459965437788018'
  },
  {
    source: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(8Z,11Z,14Z,17Z)-icosa-8,11,14,17-tetraenoxy]propan-2-yl] hexadecanoate",
    target: "Uridine",
    value: '0.449266144259313'
  },
  {
    source: "N-[3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadecan-2-yl]octadecanamide",
    target: "Uridine",
    value: '0.449260752688172'
  },
  {
    source: "Guanosine",
    target: "Nicotinamide",
    value: '0.443836405529954'
  },
  {
    source: "(Z)-N-[3,4-dihydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadecan-2-yl]-2-hydroxyhenicos-9-enamide",
    target: "Nicotinamide",
    value: '0.441724270353303'
  },
  {
    source: "Phosphatidylglyceride 18:0-22:6",
    target: "Uridine",
    value: '0.44112952587573'
  },
  {
    source: "Nicotinamide",
    target: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(Z)-octadec-9-enoxy]propan-2-yl] (Z)-docos-13-enoate",
    value: '0.438124039938556'
  },
  {
    source: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-decanoyloxypropan-2-yl] (Z)-tridec-9-enoate",
    target: "Uridine",
    value: '0.436017137333833'
  },
  {
    source: "[3-Hydroxy-2-(tetracosanoylamino)octadecyl] 2-(trimethylazaniumyl)ethyl phosphate",
    target: "Uridine",
    value: '0.426171274961598'
  },
  {
    source: "N-[3,4-dihydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyheptadecan-2-yl]-2-hydroxyicosanamide",
    target: "Nicotinamide",
    value: '0.420218894009217'
  },
  {
    source: "N-[(4E,8E)-3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadeca-4,8-dien-2-yl]icosanamide",
    target: "Uridine",
    value: '-0.41065706597273'
  },
  {
    source: "[3,5-dihydroxy-2-(hydroxymethyl)-6-[(E)-3-hydroxy-2-[[(Z)-tetracos-11-enoyl]amino]octadec-4-enoxy]oxan-4-yl] hydrogen sulfate",
    target: "Uridine",
    value: '-0.405673963133641'
  },
  {
    source: "(2-Nonanoyloxy-3-octanoyloxypropyl) 2-(trimethylazaniumyl)ethyl phosphate",
    target: "Uridine",
    value: '-0.403144314692733'
  },
  {
    source: "N-[3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadecan-2-yl]icosanamide",
    target: "Uridine",
    value: '0.402169738863287'
  },
  {
    source: "N-[3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyoctadecan-2-yl]tricosanamide",
    target: "Uridine",
    value: '0.394825268817204'
  },
  {
    source: "[1-[hydroxy-(2,3,4,5,6-pentahydroxycyclohexyl)oxyphosphoryl]oxy-3-octadecanoyloxypropan-2-yl] (7Z,10Z,13Z,16Z,19Z)-docosa-7,10,13,16,19-pentaenoate",
    target: "Uridine",
    value: '0.394008500401457'
  },
  {
    source: "[3,5-dihydroxy-2-(hydroxymethyl)-6-[(E)-3-hydroxy-2-[[(Z)-pentacos-11-enoyl]amino]octadec-4-enoxy]oxan-4-yl] hydrogen sulfate",
    target: "Uridine",
    value: '-0.387336789554531'
  },
  {
    source: "Tetracosanamide, N-[2-hydroxy-1-(hydroxymethyl)heptadecyl]-",
    target: "Nicotinamide",
    value: '0.384633847889399'
  },
  {
    source: "Nicotinamide",
    target: "1-docosanoyl-2-(13Z-octadecenoyl)-sn-glycero-3-phosphoethanolamine",
    value: '0.384216589861751'
  },
  {
    source: "N-[(4E,8E)-3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxyhenicosa-4,8-dien-2-yl]tricosanamide",
    target: "Nicotinamide",
    value: '0.383976574500768'
  },
  {
    source: "Dioleoyl phosphatidylglycerol",
    target: "Uridine",
    value: '0.379324828714296'
  },
  {
    source: "PC(o-18:1(11Z)/18:2(9Z,12Z))",
    target: "Uridine",
    value: '-0.373799923195084'
  },
  {
    source: "(10Z,12Z)-N-[3-hydroxy-1-[3,4,5-trihydroxy-6-(hydroxymethyl)oxan-2-yl]oxytricosan-2-yl]octadeca-10,12-dienamide",
    target: "Uridine",
    value: '-0.365035139370243'
  },
  {
    source: "[1-[2-aminoethoxy(hydroxy)phosphoryl]oxy-3-[(9Z,12Z)-octadeca-9,12-dienoxy]propan-2-yl] (Z)-icos-11-enoate",
    target: "Uridine",
    value: '-0.358486943164363'
  }]
  const edges = []
  const nodeDegrees = {}

  edge.forEach((item) => {
    if (item.value > 0) {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    } else {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: -item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    }

    // 获取当前边的 source 和 target 节点名称
    const sourceNodeName = item.source
    const targetNodeName = item.target
    // 对于 source 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(sourceNodeName)) {
      nodeDegrees[sourceNodeName] += 1
    } else {
      nodeDegrees[sourceNodeName] = 1
    }
    // 对于 target 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(targetNodeName)) {
      nodeDegrees[targetNodeName] += 1
    } else {
      nodeDegrees[targetNodeName] = 1
    }
  })
  const node = nodetemp.filter((item, index, array) => {
    // 如果当前元素第一次出现，则返回 true
    return array.findIndex((ele) => ele.name === item.name) === index
  })
  node.forEach((item) => {
    // 加入边数组
    nodes.push({
      name: item.name,
      itemStyle: {
        color: getRandomColor()
      },
      symbolSize: nodeDegrees[item.name]
    })
  })
  console.log('节点数nodes', nodes)
  console.log('连线数edges', edges)
  const option = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
      zoom: 0.8,
      draggable: true,
      type: 'graph',
      legendHoverLink: false,
      // layout: 'force',
      layout: 'circular',
      circular: {
        rotateLabel: true
      },
      data: nodes,
      links: edges,
      lineStyle: {
        width: 2,
        curveness: 0.3
      },
      label: {
        show: true,
        position: 'right',
        formatter: function (node) {
          if (node.name.length < 25) {
            return node.name
          } else {
            return node.name.slice(0, 25)
          }
        }
      },
      emphasis: {
        focus: 'adjacency',
        lineStyle: {
          width: 10
        }
      }
    }]
  }
  return option
}

export const Num10graph = (data) => {
  function getRandomColor () {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  const nodetemp = []
  const nodes = []

  const edge = [{
    source: "Acetyl-L-carnitine",
    target: "Osthol",
    value: '0.875'
  },
  {
    source: "DL-Carnitine",
    target: "CAPROYL SARCOSINE",
    value: '0.865196078'
  },
  {
    source: "Glutamic acid",
    target: "2-O-Phosphonohexose",
    value: '0.865196078'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "Butyl O-phosphonoserinate",
    value: '0.862745098'
  },
  {
    source: "DL-Carnitine",
    target: "3-Methoxy-5-(methylsulfonyl)-4-isothiazolecarbonitrile",
    value: '-0.860294118'
  },
  {
    source: "DL-Carnitine",
    target: "Oxprenolol",
    value: '0.860294118'
  },
  {
    source: "Glutamic acid",
    target: "D-Sphingosine",
    value: '0.860294118'
  },
  {
    source: "Inosine-5'-monophosphate (IMP)",
    target: "Glutamic acid",
    value: '0.848039216'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "2-O-Phosphonohexose",
    value: '0.845588235'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "Pentahydroxyphosphorane",
    value: '0.840686275'
  },
  {
    source: "Glutamic acid",
    target: "Olomoucine",
    value: '0.840686275'
  },
  {
    source: "N-[(3s)-2-Oxotetrahydrofuran-3-Yl]decamide",
    target: "Arachidonic acid",
    value: '0.840686275'
  },
  {
    source: "1-arachidonoyl-sn-glycero-3-phosphocholine",
    target: "Arachidonic acid",
    value: '0.833333333'
  },
  {
    source: "Glutamic acid",
    target: "Osthol",
    value: '0.823529412'
  },
  {
    source: "alpha-Glyceryl linoleate",
    target: "2-Arachidonoyl glycerol",
    value: '0.81127451'
  },
  {
    source: "Hypoxanthine",
    target: "NPPB",
    value: '0.801470588'
  },
  {
    source: "Glutamic acid",
    target: "Butyl O-phosphonoserinate",
    value: '0.794117647'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "Olomoucine",
    value: '0.791666667'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "Thiamine",
    value: '0.786764706'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "Propyl dibutylcarbamodithioate",
    value: '0.784313725'
  },
  {
    source: "Glutamic acid",
    target: "monomethyl phosphate",
    value: '0.784313725'
  },
  {
    source: "Glutamic acid",
    target: "Thiamine",
    value: '0.769607843'
  },
  {
    source: "Inosine",
    target: "[Amino(4-hydroxyphenyl)methyl]phosphonic acid",
    value: '-0.769607843'
  },
  {
    source: "Hypoxanthine",
    target: "2-Isopropyl-5-methylbenzoic acid",
    value: '0.75245098'
  },
  {
    source: "Glutamic acid",
    target: "Tanaproget",
    value: '-0.745098039'
  },
  {
    source: "Inosine",
    target: "Benzoic acid",
    value: '-0.745098039'
  },
  {
    source: "DL-Carnitine",
    target: "N-Heptanoylhomoserine lactone",
    value: '0.742647059'
  },
  {
    source: "Hypoxanthine",
    target: "4-[3-(Diphenylmethylene)cyclopentyl]-2-butanone",
    value: '0.742647059'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "Inosine-5'-monophosphate (IMP)",
    value: '0.740196078'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "2-Ethylhexyl thioglycolate",
    value: '0.737745098'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "D-Sphingosine",
    value: '0.735294118'
  },
  {
    source: "Inosine",
    target: "2-Indolinecarboxylic acid",
    value: '-0.735294118'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "L-Glutamic acid",
    value: '0.732843137'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "Phloroglucinol",
    value: '0.730392157'
  },
  {
    source: "Glutamic acid",
    target: "Alphenal",
    value: '0.727941176'
  },
  {
    source: "DL-Carnitine",
    target: "Butoxytriglycol",
    value: '0.725490196'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "trans-beta-Nitrostyrene",
    value: '0.723039216'
  },
  {
    source: "Docosahexaenoic acid",
    target: "Arachidonic acid",
    value: '0.723039216'
  },
  {
    source: "Hypoxanthine",
    target: "Arachidonic acid",
    value: '0.723039216'
  },
  {
    source: "Inosine",
    target: "Methyl [1-(sulfanylmethyl)cyclopropyl]acetate",
    value: '0.723039216'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "monomethyl phosphate",
    value: '0.720588235'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "(+)-Alantolactone",
    value: '0.718137255'
  },
  {
    source: "Hypoxanthine",
    target: "Boc-Gln-Oh",
    value: '-0.715686275'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "Benzoic acid",
    value: '0.713235294'
  },
  {
    source: "DL-Lysine",
    target: "Inosine",
    value: '-0.710784314'
  },
  {
    source: "Hypoxanthine",
    target: "Caprolactam",
    value: '0.710784314'
  },
  {
    source: "Pipecolic acid",
    target: "Inosine",
    value: '-0.710784314'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "Alphenal",
    value: '0.703431373'
  },
  {
    source: "Prolinamide",
    target: "Inosine",
    value: '-0.703431373'
  },
  {
    source: "alpha-Glyceryl linoleate",
    target: "Bis(2-aminoethyl) hydrogen phosphate",
    value: '-0.698529412'
  }]
  const edges = []
  const nodeDegrees = {}

  edge.forEach((item) => {
    if (item.value > 0) {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    } else {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: -item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    }

    // 获取当前边的 source 和 target 节点名称
    const sourceNodeName = item.source
    const targetNodeName = item.target
    // 对于 source 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(sourceNodeName)) {
      nodeDegrees[sourceNodeName] += 1
    } else {
      nodeDegrees[sourceNodeName] = 1
    }
    // 对于 target 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(targetNodeName)) {
      nodeDegrees[targetNodeName] += 1
    } else {
      nodeDegrees[targetNodeName] = 1
    }
  })
  const node = nodetemp.filter((item, index, array) => {
    // 如果当前元素第一次出现，则返回 true
    return array.findIndex((ele) => ele.name === item.name) === index
  })
  node.forEach((item) => {
    // 加入边数组
    nodes.push({
      name: item.name,
      itemStyle: {
        color: getRandomColor()
      },
      symbolSize: nodeDegrees[item.name]
    })
  })
  console.log('节点数nodes', nodes)
  console.log('连线数edges', edges)
  const option = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
      zoom: 0.8,
      draggable: true,
      type: 'graph',
      legendHoverLink: false,
      // layout: 'force',
      layout: 'circular',
      circular: {
        rotateLabel: true
      },
      data: nodes,
      links: edges,
      lineStyle: {
        width: 2,
        curveness: 0.3
      },
      label: {
        show: true,
        position: 'right',
        formatter: function (node) {
          return node.name
        }
      },
      emphasis: {
        focus: 'adjacency',
        lineStyle: {
          width: 10
        }
      }
    }]
  }
  return option
}

export const Num11graph = (data) => {
  function getRandomColor () {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  const nodetemp = []
  const nodes = []

  const edge = [{
    source: "1-arachidonoyl-sn-glycero-3-phosphocholine",
    target: "Arachidonic acid",
    value: '0.833333333'
  },
  {
    source: "1-arachidonoyl-sn-glycero-3-phosphoethanolamine",
    target: "Arachidonic acid",
    value: '0.683823529'
  },
  {
    source: "1-O-Tetradecanoyl-D-glucitol",
    target: "Hypoxanthine",
    value: '0.659313725'
  },
  {
    source: "3-Acetyl-4-thiazolidinecarboxylic acid",
    target: "L-(+)-Aspartic acid",
    value: '-0.693627451'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "Tanaproget",
    value: '-0.661764706'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "Roxatidine",
    value: '0.649509804'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "pyrrolizidine",
    value: '0.651960784'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "Ethyl lactate",
    value: '0.676470588'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "Ethosuximide",
    value: '0.68872549'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "Guanosine monophosphate",
    value: '0.691176471'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "Alphenal",
    value: '0.703431373'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "Benzoic acid",
    value: '0.713235294'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "(+)-Alantolactone",
    value: '0.718137255'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "monomethyl phosphate",
    value: '0.720588235'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "trans-beta-Nitrostyrene",
    value: '0.723039216'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "Phloroglucinol",
    value: '0.730392157'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "L-Glutamic acid",
    value: '0.732843137'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "D-Sphingosine",
    value: '0.735294118'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "2-Ethylhexyl thioglycolate",
    value: '0.737745098'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "Inosine-5'-monophosphate (IMP)",
    value: '0.740196078'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "Propyl dibutylcarbamodithioate",
    value: '0.784313725'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "Thiamine",
    value: '0.786764706'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "Olomoucine",
    value: '0.791666667'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "Pentahydroxyphosphorane",
    value: '0.840686275'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "2-O-Phosphonohexose",
    value: '0.845588235'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "Butyl O-phosphonoserinate",
    value: '0.862745098'
  },
  {
    source: "Acetyl-L-carnitine",
    target: "Osthol",
    value: '0.875'
  },
  {
    source: "alpha-Glyceryl linoleate",
    target: "Bis(2-aminoethyl) hydrogen phosphate",
    value: '-0.698529412'
  },
  {
    source: "alpha-Glyceryl linoleate",
    target: "2-[1-Hydroxy-2-(trimethylammonio)ethyl]-3-oxododecanoat",
    value: '-0.671568627'
  },
  {
    source: "alpha-Glyceryl linoleate",
    target: "Roxatidine",
    value: '-0.651960784'
  },
  {
    source: "alpha-Glyceryl linoleate",
    target: "Eicosapentaenoic acid methyl ester",
    value: '-0.642156863'
  },
  {
    source: "alpha-Glyceryl linoleate",
    target: "leucoline",
    value: '0.659313725'
  },
  {
    source: "alpha-Glyceryl linoleate",
    target: "2-Arachidonoyl glycerol",
    value: '0.81127451'
  },
  {
    source: "Aspartic acid",
    target: "[(Dicyclohexylamino)sulfanyl](dimethylamino)methanethione",
    value: '0.674019608'
  },
  {
    source: "D-Glycerate",
    target: "(2R)-3-{[(2-Aminoethoxy)(hydroxy)phosphoryl]oxy}-2-(hexanoyloxy)propyl hexanoate",
    value: '0.666666667'
  },
  {
    source: "DL-Carnitine",
    target: "3-Methoxy-5-(methylsulfonyl)-4-isothiazolecarbonitrile",
    value: '-0.860294118'
  },
  {
    source: "DL-Carnitine",
    target: "3-(imidazol-4-yl)-2-oxopropyl dihydrogen phosphate",
    value: '-0.666666667'
  },
  {
    source: "DL-Carnitine",
    target: "1H-Inden-1-ylidene",
    value: '0.642156863'
  },
  {
    source: "DL-Carnitine",
    target: "1-Boc-4-piperidinol",
    value: '0.683823529'
  },
  {
    source: "DL-Carnitine",
    target: "2-Butoxyethanol acetate",
    value: '0.693627451'
  },
  {
    source: "DL-Carnitine",
    target: "Butoxytriglycol",
    value: '0.725490196'
  },
  {
    source: "DL-Carnitine",
    target: "N-Heptanoylhomoserine lactone",
    value: '0.742647059'
  },
  {
    source: "DL-Carnitine",
    target: "Oxprenolol",
    value: '0.860294118'
  },
  {
    source: "DL-Carnitine",
    target: "CAPROYL SARCOSINE",
    value: '0.865196078'
  },
  {
    source: "DL-Lysine",
    target: "Inosine",
    value: '-0.710784314'
  },
  {
    source: "Docosahexaenoic acid",
    target: "Arachidonic acid",
    value: '0.723039216'
  },
  {
    source: "Glutamic acid",
    target: "Tanaproget",
    value: '-0.745098039'
  },
  {
    source: "Glutamic acid",
    target: "3-Oxalomalic acid",
    value: '0.683823529'
  },
  {
    source: "Glutamic acid",
    target: "Alphenal",
    value: '0.727941176'
  },
  {
    source: "Glutamic acid",
    target: "Thiamine",
    value: '0.769607843'
  },
  {
    source: "Glutamic acid",
    target: "monomethyl phosphate",
    value: '0.784313725'
  },
  {
    source: "Glutamic acid",
    target: "Butyl O-phosphonoserinate",
    value: '0.794117647'
  },
  {
    source: "Glutamic acid",
    target: "Osthol",
    value: '0.823529412'
  },
  {
    source: "Glutamic acid",
    target: "Olomoucine",
    value: '0.840686275'
  },
  {
    source: "Glutamic acid",
    target: "D-Sphingosine",
    value: '0.860294118'
  },
  {
    source: "Glutamic acid",
    target: "2-O-Phosphonohexose",
    value: '0.865196078'
  },
  {
    source: "Hypoxanthine",
    target: "Boc-Gln-Oh",
    value: '-0.715686275'
  },
  {
    source: "Hypoxanthine",
    target: "[4-[1-(1-cyclopentyl-5-tetrazolyl)propyl]-1-piperazinyl]-(2-furanyl)methanone",
    value: '-0.666666667'
  },
  {
    source: "Hypoxanthine",
    target: "p-Hexyloxybenzoic Acid",
    value: '0.644607843'
  },
  {
    source: "Hypoxanthine",
    target: "Docosahexaenoic acid",
    value: '0.647058824'
  },
  {
    source: "Hypoxanthine",
    target: "Temozolomide",
    value: '0.68872549'
  },
  {
    source: "Hypoxanthine",
    target: "N-[(3s)-2-Oxotetrahydrofuran-3-Yl]decamide",
    value: '0.693627451'
  },
  {
    source: "Hypoxanthine",
    target: "Caprolactam",
    value: '0.710784314'
  },
  {
    source: "Hypoxanthine",
    target: "Arachidonic acid",
    value: '0.723039216'
  },
  {
    source: "Hypoxanthine",
    target: "4-[3-(Diphenylmethylene)cyclopentyl]-2-butanone",
    value: '0.742647059'
  },
  {
    source: "Hypoxanthine",
    target: "2-Isopropyl-5-methylbenzoic acid",
    value: '0.75245098'
  },
  {
    source: "Hypoxanthine",
    target: "NPPB",
    value: '0.801470588'
  },
  {
    source: "Inosine",
    target: "[Amino(4-hydroxyphenyl)methyl]phosphonic acid",
    value: '-0.769607843'
  },
  {
    source: "Inosine",
    target: "Benzoic acid",
    value: '-0.745098039'
  },
  {
    source: "Inosine",
    target: "2-Indolinecarboxylic acid",
    value: '-0.735294118'
  },
  {
    source: "Inosine",
    target: "pyrrolizidine",
    value: '-0.696078431'
  },
  {
    source: "Inosine",
    target: "Timonacic",
    value: '-0.644607843'
  },
  {
    source: "Inosine",
    target: "Methyl [1-(sulfanylmethyl)cyclopropyl]acetate",
    value: '0.723039216'
  },
  {
    source: "Inosine-5'-monophosphate (IMP)",
    target: "Glutamic acid",
    value: '0.848039216'
  },
  {
    source: "Methyl indole-3-acetate",
    target: "Propionylcarnitine",
    value: '0.654411765'
  },
  {
    source: "N-[(3s)-2-Oxotetrahydrofuran-3-Yl]decamide",
    target: "Arachidonic acid",
    value: '0.840686275'
  },
  {
    source: "N-methylethanolamine phosphate",
    target: "Glutamic acid",
    value: '0.642156863'
  },
  {
    source: "Pipecolic acid",
    target: "Inosine",
    value: '-0.710784314'
  },
  {
    source: "Prolinamide",
    target: "Inosine",
    value: '-0.703431373'
  },
  {
    source: "Spermidine",
    target: "Inosine",
    value: '-0.696078431'
  }]
  const edges = []
  const nodeDegrees = {}

  edge.forEach((item) => {
    if (item.value > 0) {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    } else {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: -item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    }

    // 获取当前边的 source 和 target 节点名称
    const sourceNodeName = item.source
    const targetNodeName = item.target
    // 对于 source 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(sourceNodeName)) {
      nodeDegrees[sourceNodeName] += 1
    } else {
      nodeDegrees[sourceNodeName] = 1
    }
    // 对于 target 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(targetNodeName)) {
      nodeDegrees[targetNodeName] += 1
    } else {
      nodeDegrees[targetNodeName] = 1
    }
  })
  const node = nodetemp.filter((item, index, array) => {
    // 如果当前元素第一次出现，则返回 true
    return array.findIndex((ele) => ele.name === item.name) === index
  })
  node.forEach((item) => {
    // 加入边数组
    nodes.push({
      name: item.name,
      itemStyle: {
        color: getRandomColor()
      },
      symbolSize: nodeDegrees[item.name]
    })
  })
  console.log('节点数nodes', nodes)
  console.log('连线数edges', edges)
  const option = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
      zoom: 0.8,
      draggable: true,
      type: 'graph',
      legendHoverLink: false,
      // layout: 'force',
      layout: 'circular',
      circular: {
        rotateLabel: true
      },
      roam: true,
      data: nodes,
      links: edges,
      lineStyle: {
        width: 2,
        curveness: 0.3
      },
      label: {
        show: true,
        position: 'right',
        formatter: function (node) {
          return node.name
        }
      },
      emphasis: {
        focus: 'adjacency',
        lineStyle: {
          width: 10
        }
      }
    }]
  }
  return option
}

// export const Num12table = () => {
//   return [{
//     cmpdname: "5-Aminovaleric acid",
//     cid: "138",
//     mf: "C5H11NO2",
//     mw: "117.15",
//     plsda_vip: "2.73624",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Acetic Acid",
//     cid: "176",
//     mf: "C2H4O2",
//     mw: "60.05",
//     plsda_vip: "2.620515",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Cadaverine",
//     cid: "273",
//     mf: "C5H14N2",
//     mw: "102.18",
//     plsda_vip: "0.104421",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "3-Hydroxybutyric acid",
//     cid: "441",
//     mf: "C4H8O3",
//     mw: "104.1",
//     plsda_vip: "1.895161",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Hippuric Acid",
//     cid: "464",
//     mf: "C9H9NO3",
//     mw: "179.17",
//     plsda_vip: "-2.493995",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Methylmalonic acid",
//     cid: "487",
//     mf: "C4H6O4",
//     mw: "118.09",
//     plsda_vip: "0.551672",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "creatinine",
//     cid: "588",
//     mf: "C4H7N3O",
//     mw: "113.12",
//     plsda_vip: "1.309947",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Lactic Acid",
//     cid: "612",
//     mf: "C3H6O3",
//     mw: "90.08",
//     plsda_vip: "0.644465",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "N,N-dimethylglycine",
//     cid: "673",
//     mf: "C4H9NO2",
//     mw: "103.12",
//     plsda_vip: "2.609073",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Glyceric acid",
//     cid: "752",
//     mf: "C3H6O4",
//     mw: "106.08",
//     plsda_vip: "0.572063",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Glycerophosphoric acid",
//     cid: "754",
//     mf: "C3H9O6P",
//     mw: "172.07",
//     plsda_vip: "1.359259",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Nicotinamide",
//     cid: "936",
//     mf: "C6H6N2O",
//     mw: "122.12",
//     plsda_vip: "0.926077",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Taurine",
//     cid: "1123",
//     mf: "C2H7NO3S",
//     mw: "125.15",
//     plsda_vip: "1.148401",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Xanthine",
//     cid: "1188",
//     mf: "C5H4N4O2",
//     mw: "152.11",
//     plsda_vip: "10.907114",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Homovanillic acid",
//     cid: "1738",
//     mf: "C9H10O4",
//     mw: "182.17",
//     plsda_vip: "1.515234",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Azelaic Acid",
//     cid: "2266",
//     mf: "C9H16O4",
//     mw: "188.22",
//     plsda_vip: "0.835105",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "3-Indolepropionic acid",
//     cid: "3744",
//     mf: "C11H11NO2",
//     mw: "189.21",
//     plsda_vip: "3.108092",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Alanine",
//     cid: "5950",
//     mf: "C3H7NO2",
//     mw: "89.09",
//     plsda_vip: "1.320767",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Serine",
//     cid: "5951",
//     mf: "C3H7NO3",
//     mw: "105.09",
//     plsda_vip: "1.787437",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Aspartic Acid",
//     cid: "5960",
//     mf: "C4H7NO4",
//     mw: "133.1",
//     plsda_vip: "2.293462",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Sucrose",
//     cid: "5988",
//     mf: "C12H22O11",
//     mw: "342.3",
//     plsda_vip: "3.581499",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Cholesterol",
//     cid: "5997",
//     mf: "C27H46O",
//     mw: "386.7",
//     plsda_vip: "0.997548",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Leucine",
//     cid: "6106",
//     mf: "C6H13NO2",
//     mw: "131.169999999999",
//     plsda_vip: "0.661931",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "beta-Lactose",
//     cid: "6134",
//     mf: "C12H22O11",
//     mw: "342.3",
//     plsda_vip: "1.25669",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Valine",
//     cid: "6287",
//     mf: "C5H11NO2",
//     mw: "117.15",
//     plsda_vip: "0.806403",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "L-threonine",
//     cid: "6288",
//     mf: "C4H9NO3",
//     mw: "119.12",
//     plsda_vip: "0.771169",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "l-Isoleucine",
//     cid: "6306",
//     mf: "C6H13NO2",
//     mw: "131.169999999999",
//     plsda_vip: "0.679829",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Taurocholic acid",
//     cid: "6675",
//     mf: "C26H45NO7S",
//     mw: "515.7",
//     plsda_vip: "9.383167",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Xylitol",
//     cid: "6912",
//     mf: "C5H12O5",
//     mw: "152.15",
//     plsda_vip: "0.525987",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Choline phosphate",
//     cid: "7886",
//     mf: "C5H15ClNO4P",
//     mw: "219.6",
//     plsda_vip: "1.049869",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Chenodeoxycholic acid",
//     cid: "10133",
//     mf: "C24H40O4",
//     mw: "392.6",
//     plsda_vip: "2.199637",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Hexadecanedioic acid",
//     cid: "10459",
//     mf: "C16H30O4",
//     mw: "286.41",
//     plsda_vip: "2.292369",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Glycochenodeoxycholic acid",
//     cid: "12544",
//     mf: "C26H43NO5",
//     mw: "449.6",
//     plsda_vip: "3.724624",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Nonadecanoic acid",
//     cid: "12591",
//     mf: "C19H38O2",
//     mw: "298.5",
//     plsda_vip: "1.907834",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Dodecanedioic acid",
//     cid: "12736",
//     mf: "C12H22O4",
//     mw: "230.3",
//     plsda_vip: "1.03872",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Tetradecanedioic acid",
//     cid: "13185",
//     mf: "C14H26O4",
//     mw: "258.35",
//     plsda_vip: "2.334474",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Vitamin E",
//     cid: "14985",
//     mf: "C29H50O2",
//     mw: "430.7",
//     plsda_vip: "0.772176",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Ursodeoxycholic acid",
//     cid: "31401",
//     mf: "C24H40O4",
//     mw: "392.6",
//     plsda_vip: "2.907193",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Glutamic Acid",
//     cid: "33032",
//     mf: "C5H9NO4",
//     mw: "147.13",
//     plsda_vip: "1.874359",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "S-adenosylmethionine",
//     cid: "34755",
//     mf: "C15H22N6O5S",
//     mw: "398.4",
//     plsda_vip: "2.101519",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Oxiglutatione",
//     cid: "65359",
//     mf: "C20H32N6O12S2",
//     mw: "612.6",
//     plsda_vip: "0.857192",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Leucylproline",
//     cid: "80817",
//     mf: "C11H20N2O3",
//     mw: "228.29",
//     plsda_vip: "0.691523",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "gamma-Glutamyltyrosine",
//     cid: "94340",
//     mf: "C14H18N2O6",
//     mw: "310.3",
//     plsda_vip: "3.67751",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "2-Hydroxy-2-methylbutyric acid",
//     cid: "95433",
//     mf: "C5H10O3",
//     mw: "118.13",
//     plsda_vip: "2.132843",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "2-Hydroxy-3-methylbutyric acid",
//     cid: "99823",
//     mf: "C5H10O3",
//     mw: "118.13",
//     plsda_vip: "2.444592",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Glycohyodeoxycholic acid",
//     cid: "114611",
//     mf: "C26H43NO5",
//     mw: "449.6",
//     plsda_vip: "6.699573",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "N8-Acetylspermidine",
//     cid: "123689",
//     mf: "C9H21N3O",
//     mw: "187.28",
//     plsda_vip: "1.393291",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "gamma-Glu-leu",
//     cid: "151023",
//     mf: "C11H20N2O5",
//     mw: "260.29",
//     plsda_vip: "2.532985",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Cholic acid",
//     cid: "221493",
//     mf: "C24H40O5",
//     mw: "408.6",
//     plsda_vip: "7.861248",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Deoxycholic Acid",
//     cid: "222528",
//     mf: "C24H40O4",
//     mw: "392.6",
//     plsda_vip: "0.099511",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "N-[4-(3-acetamidopropylamino)butyl]acetamide",
//     cid: "389613",
//     mf: "C11H23N3O2",
//     mw: "229.32",
//     plsda_vip: "2.418393",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "S-adenosyl-L-homocysteine",
//     cid: "439155",
//     mf: "C14H20N6O5S",
//     mw: "384.41",
//     plsda_vip: "0.787723",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Raffinose",
//     cid: "439242",
//     mf: "C18H32O16",
//     mw: "504.4",
//     plsda_vip: "2.529355",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Arachidonic Acid",
//     cid: "444899",
//     mf: "C20H32O2",
//     mw: "304.5",
//     plsda_vip: "1.339241",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Docosahexaenoic Acid",
//     cid: "445580",
//     mf: "C22H32O2",
//     mw: "328.5",
//     plsda_vip: "3.34603",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Palmitoleic Acid",
//     cid: "445638",
//     mf: "C16H30O2",
//     mw: "254.41",
//     plsda_vip: "1.701404",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Glycodeoxycholic acid",
//     cid: "3035026",
//     mf: "C26H43NO5",
//     mw: "449.6",
//     plsda_vip: "3.473752",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Linoleic Acid",
//     cid: "5280450",
//     mf: "C18H32O2",
//     mw: "280.399999999999",
//     plsda_vip: "2.206958",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Heptadecenoic acid",
//     cid: "5282747",
//     mf: "C17H32O2",
//     mw: "268.399999999999",
//     plsda_vip: "1.21998",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Nonadecenoic acid",
//     cid: "5282766",
//     mf: "C19H36O2",
//     mw: "296.5",
//     plsda_vip: "1.597857",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "cis-11-Eicosenoic acid",
//     cid: "5282768",
//     mf: "C20H38O2",
//     mw: "310.5",
//     plsda_vip: "1.468571",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Sphingosine 1-phosphate",
//     cid: "5283560",
//     mf: "C18H38NO5P",
//     mw: "379.5",
//     plsda_vip: "1.504499",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Hyodeoxycholic acid",
//     cid: "5283820",
//     mf: "C24H40O4",
//     mw: "392.6",
//     plsda_vip: "6.788761",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "beta-Muricholic acid",
//     cid: "5283853",
//     mf: "C24H40O5",
//     mw: "408.6",
//     plsda_vip: "5.432591",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "3-Indoleacrylic acid",
//     cid: "5375048",
//     mf: "C11H9NO2",
//     mw: "187.19",
//     plsda_vip: "4.872396",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Acetyl-L-carnitine",
//     cid: "7045767",
//     mf: "C9H17NO4",
//     mw: "203.24",
//     plsda_vip: "1.071073",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Phosphocreatine",
//     cid: "9548602",
//     mf: "C4H10N3O5P",
//     mw: "211.11",
//     plsda_vip: "1.637748",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "gamma-Glutamyllysine",
//     cid: "14284565",
//     mf: "C11H21N3O5",
//     mw: "275.3",
//     plsda_vip: "2.218914",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "(3S)-3-[(2-carboxyacetyl)oxy]-4-(trimethylazaniumyl)butanoate",
//     cid: "22833583",
//     mf: "C10H17NO6",
//     mw: "247.24",
//     plsda_vip: "0.53344",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Tetradecadienoic acid",
//     cid: "53438082",
//     mf: "C14H24O2",
//     mw: "224.34",
//     plsda_vip: "1.665995",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Guanosine",
//     cid: "135398635",
//     mf: "C10H13N5O5",
//     mw: "283.24",
//     plsda_vip: "5.969852",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Hypoxanthine",
//     cid: "135398638",
//     mf: "C5H4N4O",
//     mw: "136.11",
//     plsda_vip: "9.003522",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   },
//   {
//     cmpdname: "Inosine",
//     cid: "135398641",
//     mf: "C10H12N4O5",
//     mw: "268.23",
//     plsda_vip: "9.517085",
//     is_AgeRelatedMetabolite: "False",
//     detail: 'PubChem',
//   }]
// }

export const Num13table = () => {
  return [{
    cmpdname: "3-Methyl-2-oxobutanoic acid",
    cid: "49",
    mf: "C5H8O3",
    mw: "116.11",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "4-Aminobutanal",
    cid: "118",
    mf: "C4H9NO",
    mw: "87.12",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Benzyl Alcohol",
    cid: "244",
    mf: "C7H8O",
    mw: "108.14",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Palmitic Acid",
    cid: "985",
    mf: "C16H32O2",
    mw: "256.42",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Sulfate",
    cid: "1117",
    mf: "O4S-2",
    mw: "96.07",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Sulfate",
    cid: "1117",
    mf: "O4S-2",
    mw: "96.07",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Bronopol",
    cid: "2450",
    mf: "C3H6BrNO4",
    mw: "199.99",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Diphenidol",
    cid: "3055",
    mf: "C21H27NO",
    mw: "309.4",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Methionine",
    cid: "6137",
    mf: "C5H11NO2S",
    mw: "149.21",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Phenylalanine",
    cid: "6140",
    mf: "C9H11NO2",
    mw: "165.19",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "3,4-Dichloroaniline",
    cid: "7257",
    mf: "C6H5Cl2N",
    mw: "162.01",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "4-Bromophenol",
    cid: "7808",
    mf: "C6H5BrO",
    mw: "173.01",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Proxan",
    cid: "7919",
    mf: "C4H8OS2",
    mw: "136.2",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "2-(Methylthio)benzothiazole",
    cid: "11989",
    mf: "C8H7NS2",
    mw: "181.3",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "4-Chlorocatechol",
    cid: "16496",
    mf: "C6H5ClO2",
    mw: "144.55",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Benzyl thiocyanate",
    cid: "18170",
    mf: "C8H7NS",
    mw: "149.21",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Dimethyl trisulfide",
    cid: "19310",
    mf: "C2H6S3",
    mw: "126.3",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "O-Phospho-L-tyrosine",
    cid: "30819",
    mf: "C9H12NO6P",
    mw: "261.17",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Phenelzine sulfate",
    cid: "61100",
    mf: "C8H14N2O4S",
    mw: "234.28",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Phenelzine sulfate",
    cid: "61100",
    mf: "C8H14N2O4S",
    mw: "234.28",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Esprocarb",
    cid: "91740",
    mf: "C15H23NOS",
    mw: "265.4",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Cyclic-2,3-diphosphoglycerate",
    cid: "139319",
    mf: "C3H6O9P2",
    mw: "248.02",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Cyclic-2,3-diphosphoglycerate",
    cid: "139319",
    mf: "C3H6O9P2",
    mw: "248.02",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Benzenamine, N-(acetyloxy)-",
    cid: "153367",
    mf: "C8H9NO2",
    mw: "151.16",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Sulfobetaine",
    cid: "160765",
    mf: "C4H8O2S",
    mw: "120.17",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Acivicin",
    cid: "294641",
    mf: "C5H7ClN2O3",
    mw: "178.57",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Crotanecine",
    cid: "394146",
    mf: "C8H13NO3",
    mw: "171.19",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "(S)-Ureidoglycolate",
    cid: "439269",
    mf: "C3H6N2O4",
    mw: "134.09",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "N-Methylethanolamine phosphate",
    cid: "439436",
    mf: "C3H10NO4P",
    mw: "155.09",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "4-Hydroxybut-2-ynal",
    cid: "439778",
    mf: "C4H4O2",
    mw: "84.07",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Thiomorpholine-3-carboxylic acid",
    cid: "440159",
    mf: "C5H9NO2S",
    mw: "147.2",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "5-Hydroxyindoleacetylglycine",
    cid: "440806",
    mf: "C12H12N2O4",
    mw: "248.23",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "5-Hydroxyindoleacetylglycine",
    cid: "440806",
    mf: "C12H12N2O4",
    mw: "248.23",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "2-Pyridyl hydroxymethane sulfonic acid",
    cid: "443125",
    mf: "C6H7NO4S",
    mw: "189.19",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Ergometrine",
    cid: "443884",
    mf: "C19H23N3O2",
    mw: "325.4",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Sodium diethyldithiocarbamate",
    cid: "533728",
    mf: "C5H10NNaS2",
    mw: "171.3",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Dimethylmaleic acid",
    cid: "3032309",
    mf: "C6H8O4",
    mw: "144.12",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Phenylphosphonate",
    cid: "5194779",
    mf: "C6H5O3P-2",
    mw: "156.08",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Gallium",
    cid: "5360835",
    mf: "Ga",
    mw: "69.723",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "L-malate",
    cid: "5459792",
    mf: "C4H4O5-2",
    mw: "132.07",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "2-Aminobenzenesulfonate",
    cid: "5460186",
    mf: "C6H6NO3S-",
    mw: "172.18",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "3-(2-Hydroxyphenyl)propanoate",
    cid: "6930705",
    mf: "C9H9O3-",
    mw: "165.17",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Paspalicine",
    cid: "14733160",
    mf: "C27H31NO3",
    mw: "417.5",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Sodium fluoroacetate",
    cid: "16212360",
    mf: "C2H2FNaO2",
    mw: "100.02",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "4-Amino-3-methoxybenzoate",
    cid: "40784877",
    mf: "C8H8NO3-",
    mw: "166.15",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Enol-oxaloacetate",
    cid: "54684453",
    mf: "C4H2O5-2",
    mw: "130.06",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Sethoxydim",
    cid: "135491830",
    mf: "C17H29NO3S",
    mw: "327.5",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Sethoxydim",
    cid: "135491830",
    mf: "C17H29NO3S",
    mw: "327.5",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "brassicicene E",
    cid: "139583166",
    mf: "C23H34O7",
    mw: "422.5",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "2'-Aminobiphenyl-2,3-diol",
    cid: "441379",
    mf: "C12H11NO2",
    mw: "201.22",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "2-Hydroxypyridine",
    cid: "8871",
    mf: "C5H5NO",
    mw: "95.1",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "2,3,5-Trihydroxytoluene",
    cid: "13026",
    mf: "C7H8O3",
    mw: "140.1399",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Maleamic acid",
    cid: "5280451",
    mf: "C4H5NO3",
    mw: "115.09",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "DL-Norvaline",
    cid: "824",
    mf: "C5H11NO2",
    mw: "117.15",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "L-selenocysteine",
    cid: "6326983",
    mf: "C3H6NO2Se",
    mw: "167.06",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Tretinoin",
    cid: "444795",
    mf: "C20H28O2",
    mw: "300.399",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Halacrinate",
    cid: "114868",
    mf: "C12H7BrClNO2",
    mw: "312.54",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Oleic Acid",
    cid: "445639",
    mf: "C18H34O2",
    mw: "282.5",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "5-Hydroxyindoleacetylglycine",
    cid: "440806",
    mf: "C12H12N2O4",
    mw: "248.23",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Cyclic-2,3-diphosphoglycerate",
    cid: "139319",
    mf: "C3H6O9P2",
    mw: "248.02",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Glorin",
    cid: "134782",
    mf: "C15H25N3O5",
    mw: "327.38",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Arginine",
    cid: "6322",
    mf: "C6H14N4O2",
    mw: "174.2",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Jatrophone",
    cid: "5281373",
    mf: "C20H24O3",
    mw: "312.399999999999",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "7,8-Dihydroneopterin",
    cid: "135398602",
    mf: "C9H13N5O4",
    mw: "255.23",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "4-Chlorobenzyl cyanide",
    cid: "241582",
    mf: "C8H6ClN",
    mw: "151.59",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Halacrinate",
    cid: "114868",
    mf: "C12H7BrClNO2",
    mw: "312.54",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Cyclic-2,3-diphosphoglycerate",
    cid: "139319",
    mf: "C3H6O9P2",
    mw: "248.02",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Lichenin",
    cid: "439241",
    mf: "C6H10O5",
    mw: "162.139999999999",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Docebenone",
    cid: "1967",
    mf: "C21H26O3",
    mw: "326.399999999999",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "Phosphate ion",
    cid: "1061",
    mf: "O4P-3",
    mw: "94.971",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "5-Hydroxyindoleacetylglycine",
    cid: "440806",
    mf: "C12H12N2O4",
    mw: "248.23",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "3,4-Dichloroaniline",
    cid: "7257",
    mf: "C6H5Cl2N",
    mw: "162.01",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "o-Phosphohomoserine",
    cid: "151187",
    mf: "C4H10NO6P",
    mw: "199.1",
    plsda_vip: "N.A.",
    is_AgeRelatedMetabolite: "False",
    detail: 'PubChem',
  },
  {
    cmpdname: "None",
    cid: "None",
    mf: "None",
    mw: "None",
    plsda_vip: "None",
    is_AgeRelatedMetabolite: "None",
    detail: 'PubChem',
  }]
}

export const Num12graph = (data) => {
  function getRandomColor () {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  const nodetemp = []
  const nodes = []

  const edge = [{
    source: "1-Methyluric acid",
    target: "1-Methylxanthine",
    value: '0.950964573559014'
  },
  {
    source: "1-Methylxanthine",
    target: "Quinic acid",
    value: '0.756526438636203'
  },
  {
    source: "1-Methylxanthine",
    target: "Fumaric acid",
    value: '0.477356214704754'
  },
  {
    source: "1-Methylxanthine",
    target: "Salicyl alcohol",
    value: '0.442047261363013'
  },
  {
    source: "1-Methylxanthine",
    target: "N-Acetyl-L-tryptophan",
    value: '0.282123080056081'
  },
  {
    source: "1-Methyluric acid",
    target: "N-Acetyl-L-tryptophan",
    value: '0.278696357099778'
  },
  {
    source: "Fumaric acid",
    target: "N-Acetyl-L-tryptophan",
    value: '0.248797709774189'
  },
  {
    source: "1-Methylxanthine",
    target: "1-Deoxy-1-(7,8-dimethyl-2,4-dioxo-3,4-dihydro-2H-benzo[G]pteridin-1-ID-10(5H)-YL)-5-O-phosphonato-D-ribitol",
    value: '-0.243542095822923'
  },
  {
    source: "Salicyl alcohol",
    target: "N-Acetyl-L-tryptophan",
    value: '0.242890039397523'
  },
  {
    source: "1-Methylxanthine",
    target: "N4-Acetylcytidine",
    value: '-0.240129079758445'
  },
  {
    source: "N-Acetyl-L-tryptophan",
    target: "Quinic acid",
    value: '0.230015351718844'
  }]
  const edges = []
  const nodeDegrees = {}

  edge.forEach((item) => {
    if (item.value > 0) {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    } else {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: -item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    }

    // 获取当前边的 source 和 target 节点名称
    const sourceNodeName = item.source
    const targetNodeName = item.target
    // 对于 source 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(sourceNodeName)) {
      nodeDegrees[sourceNodeName] += 1
    } else {
      nodeDegrees[sourceNodeName] = 1
    }
    // 对于 target 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(targetNodeName)) {
      nodeDegrees[targetNodeName] += 1
    } else {
      nodeDegrees[targetNodeName] = 1
    }
  })
  const node = nodetemp.filter((item, index, array) => {
    // 如果当前元素第一次出现，则返回 true
    return array.findIndex((ele) => ele.name === item.name) === index
  })
  node.forEach((item) => {
    // 加入边数组
    nodes.push({
      name: item.name,
      itemStyle: {
        color: getRandomColor()
      },
      symbolSize: nodeDegrees[item.name]
    })
  })
  console.log('节点数nodes', nodes)
  console.log('连线数edges', edges)
  const option = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
      zoom: 0.8,
      draggable: true,
      type: 'graph',
      legendHoverLink: false,
      // layout: 'force',
      layout: 'circular',
      circular: {
        rotateLabel: true
      },
      data: nodes,
      links: edges,
      lineStyle: {
        width: 2,
        curveness: 0.3
      },
      label: {
        show: true,
        position: 'right',
        formatter: function (node) {
          return node.name
        }
      },
      emphasis: {
        focus: 'adjacency',
        lineStyle: {
          width: 10
        }
      }
    }]
  }
  return option
}

export const Num13graph = (data) => {
  function getRandomColor () {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  const nodetemp = []
  const nodes = []

  const edge = [{
    source: "Guanosine",
    target: "Uridine",
    value: '0.790745326'
  },
  {
    source: "Hypoxanthine",
    target: "Uridine",
    value: '0.775036284'
  },
  {
    source: "D-Glucose",
    target: "L-Lactic acid",
    value: '0.771706651'
  },
  {
    source: "Aspartic acid",
    target: "beta-Alanine",
    value: '0.742166823'
  },
  {
    source: "Ophthalmic acid",
    target: "Pyroglutamic acid",
    value: '0.68966106'
  },
  {
    source: "Aspartic acid",
    target: "L-Lactic acid",
    value: '0.679159908'
  },
  {
    source: "Ophthalmic acid",
    target: "Pyridoxal",
    value: '0.656108597'
  },
  {
    source: "6-Phosphonoglucono-D-lactone",
    target: "Aspartic acid",
    value: '-0.650046956'
  },
  {
    source: "Alanine",
    target: "Ophthalmic acid",
    value: '0.648510202'
  },
  {
    source: "Aspartic acid",
    target: "D-Glucose",
    value: '0.639887305'
  },
  {
    source: "Alanine",
    target: "Pyroglutamic acid",
    value: '0.603602834'
  },
  {
    source: "Aspartic acid",
    target: "Uridine",
    value: '-0.586186289'
  },
  {
    source: "Aspartic acid",
    target: "Kynurenic acid",
    value: '-0.577563391'
  },
  {
    source: "Ophthalmic acid",
    target: "L-Threonine",
    value: '-0.569111244'
  },
  {
    source: "beta-Alanine",
    target: "D-Glucose",
    value: '0.568428242'
  },
  {
    source: "Adipic acid",
    target: "Aspartic acid",
    value: '-0.566464612'
  },
  {
    source: "2-Oxoglutaric acid",
    target: "L-Aspartic acid",
    value: '-0.561427474'
  },
  {
    source: "Alanine",
    target: "L-Threonine",
    value: '-0.557073337'
  },
  {
    source: "Alanine",
    target: "Pyridoxal",
    value: '0.552804576'
  },
  {
    source: "L-Ornithine",
    target: "Pyroglutamic acid",
    value: '0.527277384'
  },
  {
    source: "beta-Alanine",
    target: "Uridine",
    value: '-0.525313754'
  },
  {
    source: "Alanine",
    target: "L-Lysine",
    value: '0.522667122'
  },
  {
    source: "2-Oxoglutaric acid",
    target: "Kynurenic acid",
    value: '0.507897208'
  },
  {
    source: "Dihydroxyacetone phosphate",
    target: "Uridine",
    value: '0.507214206'
  },
  {
    source: "L-Lactic acid",
    target: "Uridine",
    value: '-0.504482199'
  },
  {
    source: "Aspartic acid",
    target: "Hypoxanthine",
    value: '-0.500213438'
  },
  {
    source: "6-Phosphonoglucono-D-lactone",
    target: "D-Glucose",
    value: '-0.480918637'
  },
  {
    source: "Hippuric acid",
    target: "Orotic acid",
    value: '0.475113122'
  },
  {
    source: "D-Glucose",
    target: "Kynurenic acid",
    value: '-0.466234099'
  },
  {
    source: "Aspartic acid",
    target: "Dihydroxyacetone phosphate",
    value: '-0.466234099'
  },
  {
    source: "Acetyl-CoA",
    target: "Uridine",
    value: '0.463672842'
  },
  {
    source: "6-Phosphonoglucono-D-lactone",
    target: "Uridine",
    value: '0.451805686'
  },
  {
    source: "Ophthalmic acid",
    target: "Uridine",
    value: '0.439511654'
  },
  {
    source: "Ophthalmic acid",
    target: "Xanthosine",
    value: '0.430547255'
  },
  {
    source: "L-Pyroglutamic acid",
    target: "Saccharopine",
    value: '0.430035004'
  },
  {
    source: "2-Oxoglutaric acid",
    target: "beta-Alanine",
    value: '-0.425936993'
  },
  {
    source: "Dihydroxyacetone phosphate",
    target: "D-Glucose",
    value: '-0.423887988'
  },
  {
    source: "Ophthalmic acid",
    target: "Ornithine",
    value: '0.423034235'
  },
  {
    source: "L-Pyroglutamic acid",
    target: "L-Threonine",
    value: '-0.421070605'
  },
  {
    source: "Kynurenic acid",
    target: "Uridine",
    value: '0.406727568'
  },
  {
    source: "D-Glucose",
    target: "Uridine",
    value: '-0.405446939'
  },
  {
    source: "L-Pyroglutamic acid",
    target: "Xanthosine",
    value: '0.394860412'
  },
  {
    source: "2-Oxoglutaric acid",
    target: "Ophthalmic acid",
    value: '0.394604286'
  },
  {
    source: "2-Oxoglutaric acid",
    target: "Hypoxanthine",
    value: '0.394006659'
  },
  {
    source: "Aspartic acid",
    target: "Pyridoxal",
    value: '-0.392299155'
  },
  {
    source: "Alanine",
    target: "Xanthosine",
    value: '0.387603517'
  },
  {
    source: "Aspartic acid",
    target: "Guanosine",
    value: '-0.386237514'
  },
  {
    source: "2-Oxoglutaric acid",
    target: "L-Lactic acid",
    value: '-0.385725263'
  },
  {
    source: "2-Oxoglutaric acid",
    target: "Uridine",
    value: '0.383847008'
  },
  {
    source: "Hippuric acid",
    target: "Kynurenic acid",
    value: '0.383505507'
  }]
  const edges = []
  const nodeDegrees = {}

  edge.forEach((item) => {
    if (item.value > 0) {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    } else {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: -item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    }

    // 获取当前边的 source 和 target 节点名称
    const sourceNodeName = item.source
    const targetNodeName = item.target
    // 对于 source 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(sourceNodeName)) {
      nodeDegrees[sourceNodeName] += 1
    } else {
      nodeDegrees[sourceNodeName] = 1
    }
    // 对于 target 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(targetNodeName)) {
      nodeDegrees[targetNodeName] += 1
    } else {
      nodeDegrees[targetNodeName] = 1
    }
  })
  const node = nodetemp.filter((item, index, array) => {
    // 如果当前元素第一次出现，则返回 true
    return array.findIndex((ele) => ele.name === item.name) === index
  })
  node.forEach((item) => {
    // 加入边数组
    nodes.push({
      name: item.name,
      itemStyle: {
        color: getRandomColor()
      },
      symbolSize: nodeDegrees[item.name]
    })
  })
  console.log('节点数nodes', nodes)
  console.log('连线数edges', edges)
  const option = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
      zoom: 0.8,
      draggable: true,
      type: 'graph',
      legendHoverLink: false,
      layout: 'circular',
      circular: {
        rotateLabel: true
      },
      data: nodes,
      links: edges,
      lineStyle: {
        width: 2,
        curveness: 0.3
      },
      label: {
        show: true,
        position: 'right',
        formatter: function (node) {
          return node.name
        }
      },
      emphasis: {
        focus: 'adjacency',
        lineStyle: {
          width: 10
        }
      }
    }]
  }
  return option
}

export const Num14graph = (data) => {
  function getRandomColor () {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  const nodetemp = []
  const nodes = []

  const edge = [{
    source: "Isobutyryl-L-carnitine",
    target: "Isovalerylcarnitine",
    value: '0.928571428571429'
  },
  {
    source: "Uridine-diphosphate-N-acetylglucosamine",
    target: "Nicotinamide",
    value: '0.753968253968254'
  },
  {
    source: "Glucose 6-phosphate",
    target: "Nicotinamide",
    value: '0.740537240537241'
  },
  {
    source: "DL-Glutamic acid",
    target: "N-Acetyl-L-glutamic acid",
    value: '0.722222222222222'
  },
  {
    source: "Nicotinamide",
    target: "S-adenosyl-L-methionine",
    value: '0.71001221001221'
  },
  {
    source: "Phosphoenolpyruvate",
    target: "DL-Glutamic acid",
    value: '0.68986568986569'
  },
  {
    source: "Glucose 6-phosphate",
    target: "DL-Glutamic acid",
    value: '0.621489621489622'
  },
  {
    source: "Fructose-1,6-diphosphate",
    target: "DL-Glutamic acid",
    value: '0.618437118437118'
  },
  {
    source: "DL-Valine",
    target: "Isobutyryl-L-carnitine",
    value: '0.575091575091575'
  },
  {
    source: "2-Imino-1-methylimidazolidin-4-one",
    target: "Isobutyryl-L-carnitine",
    value: '0.551892551892552'
  },
  {
    source: "Adenosine",
    target: "Isovalerylcarnitine",
    value: '0.539072039072039'
  },
  {
    source: "Uridine-diphosphate-N-acetylglucosamine",
    target: "DL-Glutamic acid",
    value: '0.534798534798535'
  },
  {
    source: "Adenosine",
    target: "Isobutyryl-L-carnitine",
    value: '0.514652014652015'
  },
  {
    source: "Fructose-1,6-diphosphate",
    target: "Nicotinamide",
    value: '0.506105006105006'
  },
  {
    source: "2-Oxoglutaric acid",
    target: "DL-Methionine",
    value: '-0.501221001221001'
  }]
  const edges = []
  const nodeDegrees = {}

  edge.forEach((item) => {
    if (item.value > 0) {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    } else {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: -item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    }

    // 获取当前边的 source 和 target 节点名称
    const sourceNodeName = item.source
    const targetNodeName = item.target
    // 对于 source 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(sourceNodeName)) {
      nodeDegrees[sourceNodeName] += 1
    } else {
      nodeDegrees[sourceNodeName] = 1
    }
    // 对于 target 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(targetNodeName)) {
      nodeDegrees[targetNodeName] += 1
    } else {
      nodeDegrees[targetNodeName] = 1
    }
  })
  const node = nodetemp.filter((item, index, array) => {
    // 如果当前元素第一次出现，则返回 true
    return array.findIndex((ele) => ele.name === item.name) === index
  })
  node.forEach((item) => {
    // 加入边数组
    nodes.push({
      name: item.name,
      itemStyle: {
        color: getRandomColor()
      },
      symbolSize: 3 * nodeDegrees[item.name]
    })
  })
  console.log('节点数nodes', nodes)
  console.log('连线数edges', edges)
  const option = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
      zoom: 0.8,
      draggable: true,
      type: 'graph',
      legendHoverLink: false,
      // layout: 'force',
      // force: {
      //   edgeLength: 350,
      //   friction: 0.6
      // },
      layout: 'circular',
      circular: {
        rotateLabel: true
      },
      data: nodes,
      links: edges,
      lineStyle: {
        width: 2,
        curveness: 0.3
      },
      label: {
        show: true,
        position: 'right',
        formatter: function (node) {
          return node.name
        }
      },
      emphasis: {
        focus: 'adjacency',
        lineStyle: {
          width: 10
        }
      }
    }]
  }
  return option
}

export const Num15graph = (data) => {
  function getRandomColor () {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  const nodetemp = []
  const nodes = []

  const edge = [{
    source: "L-Octanoylcarnitine",
    target: "Decanoylcarnitine",
    value: '0.982243210726808'
  },
  {
    source: "Decanoylcarnitine",
    target: "Lauroylcarnitine",
    value: '0.926815290218078'
  },
  {
    source: "Decanoylcarnitine",
    target: "cis-5-Tetradecenoylcarnitine",
    value: '0.897258877919998'
  },
  {
    source: "Decanoylcarnitine",
    target: "trans-2-Dodecenoylcarnitine",
    value: '0.887040436391222'
  },
  {
    source: "Decanoylcarnitine",
    target: "9-Decenoylcarnitine",
    value: '0.858430697147984'
  },
  {
    source: "Phenylacetylglutamine",
    target: "p-Cresol glucuronide",
    value: '0.827247000302661'
  },
  {
    source: "1-Methylxanthine",
    target: "5-Acetylamino-6-amino-3-methyluracil",
    value: '0.815632702448118'
  },
  {
    source: "Decanoylcarnitine",
    target: "Undecanoylcarnitine",
    value: '0.729413492529469'
  },
  {
    source: "2-Imino-1-methylimidazolidin-4-one",
    target: "1-Methyl-L-histidine",
    value: '0.653988272043786'
  },
  {
    source: "Theophylline",
    target: "1-Methylxanthine",
    value: '0.640168235348156'
  },
  {
    source: "2-Imino-1-methylimidazolidin-4-one",
    target: "N-Acetyl-L-carnosine",
    value: '0.625209432539902'
  },
  {
    source: "1-Methylxanthine",
    target: "1-Methyluric acid",
    value: '0.602578229330083'
  },
  {
    source: "Hydroxyproline",
    target: "(2S,4R)-4-hydroxy-1-[(2S)-pyrrolidin-1-ium-2-carbonyl]pyrrolidine-2-carboxylate",
    value: '0.594605167435535'
  },
  {
    source: "Caffeine",
    target: "1-Methylxanthine",
    value: '0.572885506537648'
  },
  {
    source: "2-Imino-1-methylimidazolidin-4-one",
    target: "11-beta-Hydroxyandrosterone-3-glucuronide",
    value: '0.55145412142924'
  },
  {
    source: "2-Imino-1-methylimidazolidin-4-one",
    target: "Androsterone glucuronide",
    value: '0.515168514014889'
  },
  {
    source: "2-Imino-1-methylimidazolidin-4-one",
    target: "(2S)-2-Hydroxy-3-(1H-indol-3-YL)propanoic acid",
    value: '0.511033903617896'
  },
  {
    source: "Decanoylcarnitine",
    target: "trans-Hexadec-2-enoyl carnitine",
    value: '0.510189371908264'
  },
  {
    source: "Phenylacetylglutamine",
    target: "(2S,3S,4S,5R)-6-[[(3R,5R,8R,9S,10S,12S,13R,14S)-17-[(2R)-4-carboxybutan-2-yl]-12-hydroxy-10,13-dimethyl-2,3,4,5,6,7,8,9,11,12,14,15,16,17-tetradecahydro-1H-cyclopenta[a]phenanthren-3-yl]oxy]-3,4,5-trihydroxyoxane-2-carboxylic acid",
    value: '0.505865787136548'
  },
  {
    source: "Levocarnitine",
    target: "Betaine",
    value: '0.495772843163151'
  },
  {
    source: "Pyruvic acid",
    target: "L-cystine",
    value: '-0.492628579147092'
  },
  {
    source: "Caffeine",
    target: "(2S,4R)-4-hydroxy-1-[(2S)-pyrrolidin-1-ium-2-carbonyl]pyrrolidine-2-carboxylate",
    value: '-0.483303167959539'
  },
  {
    source: "Phenylacetylglutamine",
    target: "12-Ketolithocholic acid",
    value: '0.470018436900797'
  },
  {
    source: "2-Imino-1-methylimidazolidin-4-one",
    target: "Tetrahydrocortisone",
    value: '0.462669120259035'
  },
  {
    source: "2-Hydroxy-3-(4-hydroxyphenyl)propanoic acid",
    target: "2-Methylbutyroylcarnitine",
    value: '0.452000973724602'
  },
  {
    source: "D-Glucuronic Acid",
    target: "5-Methoxysalicylic acid",
    value: '0.451925234037582'
  },
  {
    source: "(2S,3R,4S,5S,6R)-6-(hydroxymethyl)oxane-2,3,4,5-tetrol",
    target: "L-cystine",
    value: '0.443708687958005'
  },
  {
    source: "Levocarnitine",
    target: "2-Methylbutyroylcarnitine",
    value: '0.435664012618892'
  },
  {
    source: "Phenylacetylglutamine",
    target: "3b-Hydroxy-5-cholenoic acid",
    value: '0.428821030427474'
  },
  {
    source: "L-cystine",
    target: "D-Glucuronic Acid",
    value: '0.420701262576072'
  },
  {
    source: "2-Imino-1-methylimidazolidin-4-one",
    target: "2-Hydroxy-3-(4-hydroxyphenyl)propanoic acid",
    value: '0.418012050954352'
  },
  {
    source: "5-Methoxysalicylic acid",
    target: "1-Methylxanthine",
    value: '0.414682120202331'
  },
  {
    source: "(2S,3R,4S,5S,6R)-6-(hydroxymethyl)oxane-2,3,4,5-tetrol",
    target: "5-Methyluridine",
    value: '0.414294603166343'
  },
  {
    source: "Decanoylcarnitine",
    target: "Eicosapentaenoic acid",
    value: '0.413446673428185'
  },
  {
    source: "Hydroxyproline",
    target: "2-Methylbutyroylcarnitine",
    value: '0.412735313525804'
  },
  {
    source: "D-Glucuronic Acid",
    target: "1-Methyluric acid",
    value: '0.411656896184742'
  },
  {
    source: "Decanoylcarnitine",
    target: "LysoPE(0:0/22:6(4Z,7Z,10Z,13Z,16Z,19Z))",
    value: '0.40780903362322'
  },
  {
    source: "Betaine",
    target: "2-Methylbutyroylcarnitine",
    value: '0.40562596533783'
  },
  {
    source: "Theophylline",
    target: "(2S,4R)-4-hydroxy-1-[(2S)-pyrrolidin-1-ium-2-carbonyl]pyrrolidine-2-carboxylate",
    value: '-0.397252143712669'
  },
  {
    source: "2-Imino-1-methylimidazolidin-4-one",
    target: "Theophylline",
    value: '0.394163507803597'
  },
  {
    source: "Hippuric acid",
    target: "Phenylacetylglutamine",
    value: '0.387912002363472'
  },
  {
    source: "Creatine",
    target: "Phenylpyruvic acid",
    value: '0.385988580440899'
  },
  {
    source: "L-cystine",
    target: "Allopregnanolone",
    value: '0.382917637320655'
  },
  {
    source: "Decanoylcarnitine",
    target: "N-[(11Z)-octadecenoyl]-sphingosine-1-phosphocholine",
    value: '0.38054215368951'
  },
  {
    source: "2-Imino-1-methylimidazolidin-4-one",
    target: "Undecanoylcarnitine",
    value: '0.379720890929668'
  },
  {
    source: "D-Glucuronic Acid",
    target: "3-Carboxy-4-methyl-5-propyl-2-furanpropionic acid",
    value: '0.373545786233894'
  },
  {
    source: "1-Methylxanthine",
    target: "Pyrocatechol sulfate",
    value: '0.367036881819668'
  },
  {
    source: "1-Methyl-L-histidine",
    target: "2-Methylbutyroylcarnitine",
    value: '0.364436970553054'
  },
  {
    source: "Hippuric acid",
    target: "p-Cresol glucuronide",
    value: '0.363565181176671'
  },
  {
    source: "2-Imino-1-methylimidazolidin-4-one",
    target: "Piperine",
    value: '0.362865614953745'
  }]
  const edges = []
  const nodeDegrees = {}

  edge.forEach((item) => {
    if (item.value > 0) {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    } else {
      edges.push({
        source: item.source,
        target: item.target,
        value: item.value,
        lineStyle: {
          color: getRandomColor(),
          width: -item.value
        }
      })
      if (!nodetemp[item.source] || !nodetemp[item.target]) {
        nodetemp.push({
          name: item.source
        })
        nodetemp.push({
          name: item.target
        })
      }
    }

    // 获取当前边的 source 和 target 节点名称
    const sourceNodeName = item.source
    const targetNodeName = item.target
    // 对于 source 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(sourceNodeName)) {
      nodeDegrees[sourceNodeName] += 1
    } else {
      nodeDegrees[sourceNodeName] = 1
    }
    // 对于 target 节点，增加其度数
    if (nodeDegrees.hasOwnProperty(targetNodeName)) {
      nodeDegrees[targetNodeName] += 1
    } else {
      nodeDegrees[targetNodeName] = 1
    }
  })
  const node = nodetemp.filter((item, index, array) => {
    // 如果当前元素第一次出现，则返回 true
    return array.findIndex((ele) => ele.name === item.name) === index
  })
  node.forEach((item) => {
    // 加入边数组
    nodes.push({
      name: item.name,
      itemStyle: {
        color: getRandomColor()
      },
      symbolSize: nodeDegrees[item.name]
    })
  })
  console.log('节点数nodes', nodes)
  console.log('连线数edges', edges)
  const option = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
      zoom: 0.8,
      draggable: true,
      type: 'graph',
      legendHoverLink: false,
      // layout: 'force',
      layout: 'circular',
      circular: {
        rotateLabel: true
      },
      data: nodes,
      links: edges,
      lineStyle: {
        width: 2,
        curveness: 0.3
      },
      label: {
        show: true,
        position: 'right',
        formatter: function (node) {
          return node.name
        }
      },
      emphasis: {
        focus: 'adjacency',
        lineStyle: {
          width: 10
        }
      }
    }]
  }
  return option
}
