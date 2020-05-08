var echarts = require('echarts');

var mainDiv = document.getElementById('main'),
    mainOrderDiv = document.getElementById('main-order');
var myCharts = echarts.init(mainDiv);
var myOrderCharts = echarts.init(mainOrderDiv);

myCharts.setOption({
    // title: {
    //     text: 'Echart 入门示例' .
    // },
    tooltip: {},
    xAxis: {
        data: ['喜茶', 'CoCo', '快乐柠檬', '鲍师傅', '一点点']
    },
    yAxis: {},
    series: [{
        name: '喜欢程度',
        type: 'bar',
        data: [5, 4, 2, 3, 2]
    }]
})

myOrderCharts.setOption({
    itemStyle: {
        // 阴影的大小
        shadowBlur: 200,
        // 阴影水平方向上的偏移
        shadowOffsetX: 0,
        // 阴影垂直方向上的偏移
        shadowOffsetY: 0,
        // 阴影颜色
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
            ]
        }
    ]
})