
data_cell1 = [
    { iconUrl: './assets/img/icon/water.png', title: '今日用水(m³)', value: '114800', chainRatio: '3.1', yearBasis: '3.4' },
    { iconUrl: './assets/img/icon/electricity.png', title: '今日用电(kWh)', value: '114800', chainRatio: '3.1', yearBasis: '3.4' },
    { iconUrl: './assets/img/icon/gas.png', title: '今日用气(m³)', value: '114800', chainRatio: '3.1', yearBasis: '3.4' },
];
function changeValue_cell1_ul() {
    cell1_ul = document.getElementById('cell1_ul');
    var result = '';
    data_cell1.forEach((item, i) => {
        result += `
                    <li class="cell1-li">
                            <div class="cell1-li-div">
                                <img class="cell1-li-left-icon" src="${item.iconUrl}" alt="">
                                <div class="cell1-li-right-info">
                                    <span>${item.title}</span>
                                    <h1 class="cell1-h1"> ${item.value}</h1>
                                </div>
                            </div>
                            <p>
                                环比
                                <img class="cell1-li-p-icon" src="./assets/img/icon/arrow-down.png" alt="">
                                ${item.chainRatio}% 
                            </p>
                            <p>
                                同比
                                <img class="cell1-li-p-icon" src="./assets/img/icon/arrow-up.png" alt="">
                                ${item.yearBasis}%
                            </p>
                        </li>
                `;
    })
    cell1_ul.innerHTML = result;
}
data_cell7 = [
    { iconUrl: './assets/img/icon/icon-electricity.png', key1: '用量', value1: '1002040', unit1: 'kwh', key2: '费用', value2: '1250000', unit2: '元' },
    { iconUrl: './assets/img/icon/icon-water.png', key1: '用量', value1: '32300', unit1: 'm³', key2: '费用', value2: '90024', unit2: '元' },
    { iconUrl: './assets/img/icon/icon-gas.png', key1: '用量', value1: '400', unit1: 'm³', key2: '费用', value2: '2340', unit2: '元' },
];
function changeValue_cell7_ul() {
    cell7_ul = document.getElementById('cell7_ul');
    var result = '';
    data_cell7.forEach((item, i) => {
        result += `
                    <li class="cell7-li">
                        <div class="li-left">
                            <img class="li-left-icon" src="${item.iconUrl}" alt="">
                        </div>
                        <div class="li-right">
                            <p>${item.key1}: <span class="li-right-span">${item.value1}</span> ${item.unit1}</p>
                            <p>${item.key2}: ￥<span class="li-right-span">${item.value2}</span> ${item.unit2}</p>
                        </div>
                    </li>
                `;
    })
    cell7_ul.innerHTML = result;
}
data_cell9 = [
    { title: '项目数', marker: '', value: '621', unit: '件' },
    { title: '已监测时间', marker: '', value: '1234', unit: '天(2年8个月)' },
    { title: '已节能', marker: '', value: '3257918', unit: 'kwh' },
    { title: '已节省费用', marker: '￥', value: '6516781', unit: '元' },
];
function changeValue_cell9_ul() {
    cell9_ul = document.getElementById('cell9_ul');
    var result = '';
    data_cell9.forEach((item, i) => {
        result += `
                    <li class="cell9-li">
                <div class="cell9-li-left">${item.title}</div>
                <div class="cell9-li-right">
                    <span>${item.marker}</span>${item.value} &nbsp;<span>${item.unit}</span>
                </div>
            </li>
                `;
    })
    cell9_ul.innerHTML = result;
}
data_cell5 = [
    { td1: '商业区域1', td2: 3563000, td3: 24542, td4: 151 },
    { td1: '商业区域2', td2: 3563000, td3: 24542, td4: 151 },
    { td1: '商业区域3', td2: 3563000, td3: 24542, td4: 151 },
    { td1: '商业区域4', td2: 3563000, td3: 24542, td4: 151 },
    { td1: '商业区域5', td2: 3563000, td3: 24542, td4: 151 },
    { td1: '商业区域6', td2: 3563000, td3: 24542, td4: 151 },
    { td1: '商业区域7', td2: 3563000, td3: 24542, td4: 151 },
    { td1: '商业区域8', td2: 3563000, td3: 24542, td4: 151 },
    { td1: '商业区域9', td2: 3563000, td3: 24542, td4: 151 },
    { td1: '商业区域10', td2: 3563000, td3: 24542, td4: 151 },
];
function changeValue_cell5_ul() {
    cell5_ul = document.getElementById('cell5_ul');

    var result = '';
    data_cell5.forEach((item, i) => {
        result += `
                    <li class="table-tr">
                            <!-- 每行 -->
                            <ul class="table-tr-ul">
                                <li class="table-td" style="width: 100px;">
                                    ${item.td1}
                                </li>
                                <li class="table-td">
                                    ${item.td2}
                                </li>
                                <li class="table-td">
                                    ${item.td3}
                                </li>
                                <li class="table-td">
                                    ${item.td4}
                                </li>
                            </ul>
                        </li>
                `;
    })
    cell5_ul.innerHTML = result;
}