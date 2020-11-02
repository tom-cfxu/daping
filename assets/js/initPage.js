function initPage() {
    var boxAll = document.querySelectorAll('.box');
    var title = document.querySelector('header >div.title');
    //添加header下的背景框
    for (var i = 1; i <= 5; i++) {
        var titlebg = document.createElement('div');
        titlebg.classList.add(`title-bg${i}`);
        title.appendChild(titlebg);
    }
    //各框菜单合集
    menuArr = [
        "能耗 | 费用",
        "今日逐时能耗比",
        "能耗Top10排名",
        "节能目标完成情况",
        "能耗预测",
        "待处理告警",
        "基础信息",
    ];
    //添加边框
    boxAll.forEach((box, index) => {
        for (var i = 1; i <= 4; i++) {
            var line = document.createElement('div');
            line.classList.add("line", `line-${i}`);
            box.appendChild(line);
        }
        var menu = document.createElement('div');
        menu.classList.add("menu");
        menu.innerHTML = `
            <span>${menuArr[index]}</span>
            <div class="menu-bg"></div>`
        box.appendChild(menu);
    })
}