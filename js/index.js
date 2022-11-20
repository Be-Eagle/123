
(function ()
    {
        var chart = echarts.init(document.getElementById('doom'));
        var option = {
            title : {
                name:"测试",
            },
            tooltip:{
                name:"平方",
            },
            legend:{},
            xAxis:{
                data:['1','2','3','4','5']
            },
            yAxis:{

            },
            series:[
                {
                    name:"平方",
                    type:"line",
                    data:[1,4,9,16,25],
                    smooth:true,
                }
            ]
        };
    chart.setOption(option);
})();

(function (){
    var chart = echarts.init(document.getElementById('halo'));
    var option = {
        title : {
            name:"测试",
        },
        tooltip:{
            name:"平方",
        },
        legend:{},
        xAxis:{
            data:[5,4,3,2,1]
        },
        yAxis:{

        },
        series:[
            {
                name:"平方",
                type:"line",
                data:[25,16,9,4,1],
                smooth:true,
            }
        ]
    };
chart.setOption(option);
})();

