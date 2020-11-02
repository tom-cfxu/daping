echart2 = echarts.init(document.getElementById('cell2_echart'));
function randomValue() {
    return Math.round(Math.random() * 1000);
}
var data = [                        //元素为对象的数组
    { name: '设备一', value: 41 },
    { name: '设备二', value: 58 },
    { name: '设备三', value: 47 },
    { name: '设备四', value: 39 },
    { name: '设备五', value: 31 },
    { name: '设备六', value: 70 },
    { name: '设备七', value: 60 },
    { name: '设备八', value: 78 },
];

var geoCoordMap = {                 //对象
    '设备一': [119.207922, 26.019216],
    '设备二': [119.306796, 26.095054],
    '设备三': [119.329448, 25.94142],
    '设备四': [118.434018, 25.688227],
    '设备五': [119.756324, 26.577744],
    '设备六': [119.724129, 25.982721],
    '设备七': [119.816115, 25.522445],
    '设备八': [119.16876, 25.579817],
}
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)   //新值= 坐标+旧值；
            });
        }
    }
    return res;                                         // [113.57, 37.85, 31]
};
option2 = {
    tooltip: {           //提示框组件
        trigger: 'item',
        formatter: '{b} <br/> ',  //{c@[2]}
        show: false
    },
    grid: {
        bottom: "0%",
        top: "0%",
    },
    geo: {
        map: '福州',
        center: [119.20, 26.02],
        zoom: 7, //当前视角的缩放比例
        roam: true, //是否开启平游或缩放
        scaleLimit: { //滚轮缩放的极限控制
            min: 1,
            max: 7
        },
        label: {
            normal: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            },
            emphasis: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        itemStyle: {
            // opacity: 0.3,
            normal: {
                borderColor: '#168291',
                areaColor: '#093856',
                borderWidth: 2,
                shadowColor: '#00000088',
                shadowBlur: 30
            },
            emphasis: {
                // areaColor: '#168291',
                shadowColor: '#00000088',
                shadowBlur: 0,
                // borderColor: '#28B3DF',
                borderWidth: 0
            }
        },
    },
    series: [{
        name: '设备数',
        type: 'effectScatter', // series图表类型
        coordinateSystem: 'geo', // series坐标系类型
        label: {
            normal: {
                formatter: '{b}:{@2}',
                position: 'right',
                show: false
            },
            emphasis: {
                show: true,
                color: '#fff'
            }
        },
        symbolSize: function (val) {
            return val[2] / 2;        //res数组中的第三个元素
        },
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke'
        },
        hoverAnimation: true,
        itemStyle: {
            normal: {
                color: '#f4e925',
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },

        zlevel: 1,

        animation: false,
        data: convertData(data.sort(function (a, b) {
            return b.value - a.value;
        }).slice(0, 8)),
    }]
};
