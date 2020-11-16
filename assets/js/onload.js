window.onload = () => {
    initPage();
    initEchart(echart1, option1);
    setEachart1();
    initEchart(echart2, option2);
    initEchart(echart3, option3);
    initEchart(echart4, option4);
    initEchart(echart6, option6);
    initEchart(echart8, option8);
    changeValue_cell1_ul();
    changeValue_cell5_ul();
    changeValue_cell7_ul();
    changeValue_cell9_ul();
}
function setEachart1() {
    var value1 = (Math.random() * 360).toFixed(0) - 0;
    var color1 = [[value1 / 360, '#DEAB50'], [1, '#08609077']];
    var value2 = (Math.random() * 360).toFixed(0) - 0;
    var color2 = [[value2 / 360, '#2EADCE'], [1, '#08609077']];
    var value3 = (Math.random() * 360).toFixed(0) - 0;
    var color3 = [[value3 / 360, '#D47463'], [1, '#08609077']];
    option1.series[0].data[0].value = value1;
    option1.series[0].axisLine.lineStyle.color = color1;
    option1.series[2].data[0].value = value2;
    option1.series[2].axisLine.lineStyle.color = color2;
    option1.series[4].data[0].value = value3;
    option1.series[4].axisLine.lineStyle.color = color3;
    echart1.setOption(option1, true);
}