function initEchart(myChart, option) {
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

echart1 = echarts.init(document.getElementById('cell1_echart'));
option1 = option = {
    tooltip: {
        show: false,
    },
    series: [
        {
            name: '今日用电',
            type: 'gauge',
            center: ['50%', '50%'],
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 360,
            splitNumber: 6,
            radius: '50%',
            axisLine: {
                show: true,
                lineStyle: {
                    color: [[1, '#08609077']],
                    shadowColor: 'rgba(255, 255, 255, 0.5)',
                    shadowBlur: 20,
                    width: 45,
                },

            },
            splitLine: {
                show: false,

            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            itemStyle: {
                color: '#FCF103',
                shadowColor: 'rgba(255,255,255,0.5)',
                shadowBlur: 10,
            },
            detail: { show: false },
            data: [{ value: 0, name: '完成率' }],
            title: {
                show: false
            },
            pointer: {
                width: 2,
            },
            animation: true,
        },
        {
            name: '今日用电',
            type: 'gauge',
            center: ['50%', '50%'],
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 360,
            splitNumber: 6,
            radius: '55%',
            axisLine: {
                show: false,
            },
            splitLine: {
                length: '6%',
                lineStyle: {
                    color: '#96ABB5'

                },
            },
            axisTick: {
                length: "5%",
                lineStyle: {
                    color: '#405F7E'

                },
            },
            axisLabel: {
                show: false
            },
            itemStyle: {
                color: '#FCF103',
                shadowColor: 'rgba(255,255,255,0.5)',
                shadowBlur: 10,
            },
            detail: { show: false },
            data: null,
            title: {
                show: false
            },
            pointer: {
                show: false,
            }
        },
        {
            name: '今日用水',
            type: 'gauge',
            center: ['20%', '50%'],
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 360,
            splitNumber: 6,
            radius: '40%',
            axisLine: {
                show: true,
                lineStyle: {
                    color: [[1, '#08609077']],
                    shadowColor: 'rgba(255, 255, 255, 0.5)',
                    shadowBlur: 20,
                    width: 30,
                },

            },
            splitLine: {
                show: false,

            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            itemStyle: {
                color: '#FCF103',
                shadowColor: 'rgba(255,255,255,0.5)',
                shadowBlur: 10,
            },
            detail: { show: false },
            data: [{ value: 0, name: '完成率' }],
            title: {
                show: false
            },
            pointer: {
                width: 2,
            },
            animation: true,
        },
        {
            name: '今日用水',
            type: 'gauge',
            center: ['20%', '50%'],
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 360,
            splitNumber: 6,
            radius: '45%',
            axisLine: {
                show: false,
            },
            splitLine: {
                length: '6%',
                lineStyle: {
                    color: '#96ABB5'

                },
            },
            axisTick: {
                length: "5%",
                lineStyle: {
                    color: '#405F7E'

                },
            },
            axisLabel: {
                show: false
            },
            itemStyle: {
                color: '#FCF103',
                shadowColor: 'rgba(255,255,255,0.5)',
                shadowBlur: 10,
            },
            detail: { show: false },
            data: null,
            title: {
                show: false
            },
            pointer: {
                show: false,
            }
        },
        {
            name: '今日用气',
            type: 'gauge',
            center: ['80%', '50%'],
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 360,
            splitNumber: 6,
            radius: '40%',
            axisLine: {
                show: true,
                lineStyle: {
                    color: [[1, '#08609077']],
                    shadowColor: 'rgba(255, 255, 255, 0.5)',
                    shadowBlur: 20,
                    width: 30,
                },

            },
            splitLine: {
                show: false,

            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            itemStyle: {
                color: '#FCF103',
                shadowColor: 'rgba(255,255,255,0.5)',
                shadowBlur: 10,
            },
            detail: { show: false },
            data: [{ value: 0, name: '完成率' }],
            title: {
                show: false
            },
            pointer: {
                width: 2,
            },
            animation: true,
        },
        {
            name: '今日用气',
            type: 'gauge',
            center: ['80%', '50%'],
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 360,
            splitNumber: 6,
            radius: '45%',
            axisLine: {
                show: false,
            },
            splitLine: {
                length: '6%',
                lineStyle: {
                    color: '#96ABB5'

                },
            },
            axisTick: {
                length: "5%",
                lineStyle: {
                    color: '#405F7E'

                },
            },
            axisLabel: {
                show: false
            },
            itemStyle: {
                color: '#FCF103',
                shadowColor: 'rgba(255,255,255,0.5)',
                shadowBlur: 10,
            },
            detail: { show: false },
            data: null,
            title: {
                show: false
            },
            pointer: {
                show: false,
            }
        },
    ]
};
echart3 = echarts.init(document.getElementById('cell3_echart'));
option3 = {
    color: ['#3CAEDE', '#5FAF49',],
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            var result = `${params[0].axisValueLabel}:00 <br/>`;
            params.forEach(function (item) {
                result += `${item.marker} ${item.seriesName} : ${item.value} <br/>`;
            });
            return result;
        },
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        top: "15%",
        right: "0%",
        data: ['昨日能耗', '今日能耗'],
        textStyle: {
            color: '#5C75A6',
            fontWeight: 'bolder',
        },
        icon: 'line',
    },

    grid: {
        top: '30%',
        left: '5%',
        right: '10%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        name: '时',
        nameTextStyle: {
            color: '#5C75A6',
            fontWeight: 'bolder',
        },
        boundaryGap: false,
        data: ['00', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24'],
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#475B83',
                width: 1,
            }
        },
        axisLabel: {
            color: '#5C75A6',
            fontWeight: 'bolder',
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#2A487C15'
            }
        }
    },
    yAxis: {
        type: 'value',
        name: '水耗:m³',
        nameTextStyle: {
            color: '#5C75A6',
            fontWeight: 'bolder',
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#475B83',
                width: 1,
            }
        },
        axisLabel: {
            color: '#5C75A6',
            fontWeight: 'bolder',
        },
        splitLine: {
            lineStyle: {
                color: '#2A487C15'
            }
        },
    }
    ,
    series: [
        {
            name: '昨日能耗',
            type: 'line',
            stack: '总量',
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#3CAEDE90'
                    },
                    {
                        offset: 1,
                        color: '#3CAEDE33'
                    },
                ]),
            },
            smooth: true,
            data: [120, 132, 101, 134, 90, 230, 210, 213, 12, 15, 12, 54, 45]
        },
        {
            name: '今日能耗',
            type: 'line',
            stack: '总量',
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#5FAF4990'
                    },
                    {
                        offset: 1,
                        color: '#5FAF4933'
                    },
                ]),
            },
            smooth: true,
            data: [220, 182, 191, 234, 290, 330, 310, 152, 489, 45, 645, 45, 12, 32]
        },
    ]
};
echart8 = echarts.init(document.getElementById('cell8_echart'));
option8 = {
    color: ['#E45E5B', '#CA7245', '#2F88B3', '#44BCBA', '#58B264'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    // dataZoom: {},
    legend: {
        data: ['一级', '二级', '三级', '四级', '五级'],
        top: "15%",
        right: "0%",
        textStyle: {
            color: '#5C75A6',
            fontWeight: 'bolder',
        },
        icon: 'circle',
    },
    // visualMap: {
    //     orient: 'horizontal',
    // },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        name: '数量:个',
        nameTextStyle: {
            color: '#5C75A6',
            fontWeight: 'bolder',
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#475B83',
                width: 1,
            }
        },
        axisLabel: {
            color: '#5C75A6',
            fontWeight: 'bolder',
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#2A487C15'
            }
        },
    },
    xAxis: {
        type: 'category',
        data: ['分公司1', '分公司2', '分公司3', '分公司4', '分公司5', '分公司6', '分公司7'],
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#475B83',
                width: 1,
            }
        },
        axisLabel: {
            color: '#5C75A6',
            fontWeight: 'bolder',
            interval: 0
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#2A487C15'
            }
        }
    },
    series: [
        {
            name: '一级',
            type: 'bar',
            stack: '总量',
            barWidth: 20,
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: '二级',
            type: 'bar',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '三级',
            type: 'bar',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '四级',
            type: 'bar',
            stack: '总量',
            data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
            name: '五级',
            type: 'bar',
            stack: '总量',
            data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
    ]
};
echart4 = echarts.init(document.getElementById('cell4_echart'));
option4 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },

    grid: {
        left: '3%',
        right: '5%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        name: 'kwh',
        nameLocation: 'center',
        nameTextStyle: {
            color: '#5C75A6',
            fontWeight: 'bolder',
            padding: [0, 6, 10, 6]
        },

        position: 'top',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#475B83',
                width: 1,
            }
        },
        axisLabel: {
            color: '#5C75A6',
            fontWeight: 'bolder',
            interval: 0
        },
        splitLine: {
            show: false,
        }
    },
    yAxis: {
        type: 'category',
        inverse: true,
        data: ['商业广场1', '商业广场2', '商业广场3', '商业广场4', '商业广场5', '商业广场6', '商业广场7', '商业广场8', '商业广场9', '商业广场10'],
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#475B83',
                width: 1,
            }
        },
        axisLabel: {
            color: '#5C75A6',
            fontWeight: 'bolder',
            interval: 0
        },
        splitLine: {
            show: false,
        }
    },
    series: [
        {
            name: '实际能耗',
            type: 'bar',
            // showBackground: true,
            // backgroundStyle: {
            //     color: '#182B55'
            // },
            // barGap: '-100%',
            // barCategoryGap: '120%',
            barWidth: 10,

            color: new echarts.graphic.LinearGradient(
                1, 0, 0, 1,
                [
                    { offset: 0, color: '#33BCE2' },
                    { offset: 1, color: '#085296' }
                ]
            ),
            data: [44000, 40000, 39034, 24970, 21744, 10230, 9856, 8652, 7561, 6520]
        },


    ]
};

echart6 = echarts.init(document.getElementById('cell6_echart'));
option6 = {
    color: ['#2BB9EB'],
    xAxis: {
        type: 'category',
        position: 'top',
        data: ['电耗节能', '水耗节能', '气耗节能',],
        axisTick: {
            show: false,

        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#475B83',
                width: 1,
            }
        },
        axisLabel: {
            color: '#5C75A6',
            fontWeight: 'bolder',
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#2A487C15'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#475B83',
                width: 1,
            }
        },
        axisLabel: {
            color: '#5C75A6',
            fontWeight: 'bolder',
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#2A487C15'
            }
        }
    },
    grid: {
        top: '30%',
        left: '5%',
        right: '10%',
        bottom: '20%',
        containLabel: true
    },
    series: [
        {
            data: [75, 30, 55],
            type: 'bar',
            stack: '总量',
            barWidth: 50,
            showBackground: true,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c}%'
                }
            }
        },
        {
            data: [25, 70, 45],
            type: 'bar',
            stack: '总量',
            barWidth: 50,
            itemStyle: {
                color: 'transparent'
            }
        },
    ]
};




