/*
 * @Author: your name
 * @Date: 2021-01-07 16:08:29
 * @LastEditTime: 2021-01-11 09:39:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\index.js
 */
$(function () {

    var mySwiper = new Swiper('.container', {
        direction :'vertical',
         
    on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
      } 
    }
  })


    // 地图部分
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    rate: data[i].rate,
                    means: data[i].means,
                    house: data[i].house,
                    area:data[i].area,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };
    var data = [
        { name: '上海', value: 344, rate: '90%', means: '1.5亿', house: '69户' ,area:'A赛区' },
        {name: '辽宁',value:257,rate:'90%',means:'1.5亿',house:'69户',area:'A赛区'},
        {name: '深圳', value: 259,rate:'90%',means:'1.5亿',house:'69户',area:'A赛区'},
        { name: '北京', value:322,rate: '90%', means: '1.5亿', house: '69户' ,area:'A赛区'},
        { name: '重庆', value:457,rate: '90%', means: '1.5亿', house: '69户' ,area:'A赛区'},
        { name: '湖北', value: 298, rate: '90%', means: '1.5亿', house: '69户', area: 'A赛区' },
        { name: '新疆', value: 356, rate: '90%', means: '1.5亿', house: '69户', area: 'A赛区' },
        {name: '广东',value: 379,rate:'90%',means:'1.5亿',house:'69户',area:'A赛区'},
        {name: '安徽', value: 288,rate:'90%',means:'1.5亿',house:'69户',area:'A赛区'},
        {name: '天津', value: 34,rate:'90%',means:'1.5亿',house:'69户',area:'A赛区'},
        {name: '河北', value: 279,rate:'90%',means:'1.5亿',house:'69户',area:'A赛区'},
        { name: '陕西', value: 130,rate: '90%', means: '1.5亿', house: '69户' ,area:'A赛区'},
        { name: '浙江', value: 233,rate: '90%', means: '1.5亿', house: '69户',area:'A赛区'},
        {name: '山西', value: 123,rate:'90%',means:'1.5亿',house:'69户',area:'A赛区'},
        {name: '吉林', value: 47,rate:'90%',means:'1.5亿',house:'69户',area:'A赛区'},
        {name: '黑龙江', value: 55,rate:'90%',means:'1.5亿',house:'69户',area:'A赛区'},
        {name: '山东',value:145,rate:'90%',means:'1.5亿',house:'69户',area:'A赛区'},
        {name: '河南', value:  135,rate:'90%',means:'1.5亿',house:'69户',area:'A赛区'},
        {name: '湖南', value:  2,rate:'90%',means:'1.5亿',house:'69户',area:'A赛区'},
        {name: '海南', value:  4,rate:'90%',means:'1.5亿',house:'69户',area:'A赛区'},
        {name: '四川', value:  5,rate:'90%',means:'1.5亿',house:'69户',area:'A赛区'},
        {name: '贵州', value:  6,rate:'90%',means:'1.5亿',house:'69户',area:'A赛区'},
        {name: '福建',value: 7,rate:'90%',means:'1.5亿',house:'69户',area:'A赛区'},
        {name: '云南', value:  8,rate:'90%',means:'1.5亿',house:'69户',area:'A赛区'},
        {name: '江西', value:  9,rate:'90%',means:'1.5亿',house:'69户',area:'A赛区'},
        {name: '甘肃', value:10,rate:'90%',means:'1.5亿',house:'69户',area:'A赛区'},
        {name: '广西',value: 11,rate:'90%',means:'1.5亿',house:'69户',area:'A赛区'},
        {name: '内蒙古', value:  13,rate:'90%',means:'1.5亿',house:'69户',area:'A赛区'},
        {name: '江苏', value:  14,rate:'90%',means:'1.5亿',house:'69户',area:'A赛区'},
        
    ];
    var geoCoordMap = {
        '上海': [121.48, 31.22],
        '深圳':[22.33,114.07],
        '北京':[116.46,39.92],
        '重庆': [106.54, 29.59],
        '浙江': [120.19, 30.26],
        '湖北': [114.31, 30.52],
        '新疆': [87.68, 43.77],
        '广东': [113.23, 23.16],
        '天津': [117.2, 39.13],
        '河北': [114.48, 38.03],
        '山西': [112.53, 37.87],
        '辽宁': [123.38, 41.8],
        '吉林': [125.35, 43.88],
        '黑龙江': [126.63, 45.75],
        '山东': [106.54, 29.59],
        '河南': [113.65, 34.76],
        '湖南': [113, 28.21],
        '海南': [110.35, 20.02],
        '四川': [104.06, 30.67],
        '贵州': [106.71, 26.57],
        '福建': [119.3, 26.08],
        '云南': [102.73, 25.04],
        '江西': [115.89, 28.68],
        '陕西': [108.95, 34.27],
        '甘肃': [103.73 ,36.03],
        '广西': [106.54, 29.59],
        '内蒙古': [111.65, 40.82],
        '江苏': [118.78, 32.04],
        '安徽': [117.27, 31.86],





    };
    let map=echarts.init(document.querySelector(".maps"));

    let option3={
        geo:{
            type: 'map',
            map: 'china',
            zoom:5.5,
            layoutCenter:["50.5%","55%"],
            layoutSize: 60,
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#b11111',
                    borderColor: 'rgba(255,255,255,255)',
                    borderWidth: 2,
                },
                emphasis: {
                    areaColor: '#ead3ae',
                    borderWidth: 0.1,
                    borderColor: 'rgba(255,255,255,0.1)',
                }
            }
        },
        tooltip: {
            trigger: 'item',
            borderColor:"rgb(74, 223, 255)",
            alwaysShowContent:true,
            // borderWidth:4,
            padding: 4,
            textStyle: {
                fontSize:12
            },
            position:'left',
            formatter: function (params) {
                // console.log(params)
                // return params.name + ' : ' + params.value[2];
                return `<div class="active">
                    <div class="modal">
                        <div class="address">投资业务资产规模</div>
                        <div class="text">所属赛区：${params.data.area}</div>
                        <div class="car-num">
                            <div class="left">
                                <span>城市：${params.data.name}</span>
                            </div>
                        </div>
                    </div>
                </div>`
            }
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x:'right',
            data:['pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },
        series: [
            {
                type: 'map',
            map: 'china',
            zoom:5.5,
            layoutCenter:["50.5%","55%"],
            layoutSize: 60,
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#b11111',
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderWidth: 1,
                },
                emphasis: {
                    areaColor: '#ead3ae',
                    borderWidth: 0.1,
                    borderColor: 'rgba(255,255,255,0.1)',
                }
            }
            },
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                //气泡大小
                symbolSize: function (val) {
                    return val[1] / 7;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ebd6b2'
                    }
                }
            },
            {
                name: 'Top5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 9)),
                symbolSize: function (val) {
                    
                    return val[2]/ 35;

                
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        fontSize:8,
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#fcf9f4',
                        shadowBlur: 10,
                        shadowColor: '#ffffff'
                    }
                },
                zlevel: 1
            }
        ]

    }
    map.setOption(option3);
    window.human = false;

var canvasEl = document.querySelector('.fireworks');
var ctx = canvasEl.getContext('2d');
var numberOfParticules = Number(location.href.split('?')[1]) || 40;
var pointerX = 0;
var pointerY = 0;
var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
var colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];

function setCanvasSize() {
    canvasEl.width = window.innerWidth * 2;
    canvasEl.height = window.innerHeight * 2;
    canvasEl.style.width = window.innerWidth + 'px';
    canvasEl.style.height = window.innerHeight + 'px';
    canvasEl.getContext('2d').scale(1.5, 1.5);
}

function updateCoords(e) {
    pointerX = e.clientX || e.touches[0].clientX;
    pointerY = e.clientY || e.touches[0].clientY;
}
function setParticuleDirection(p) {
    var angle = anime.random(0, 360) * Math.PI / 180;
    var value = anime.random(50, 700);
    var radius = [-1, 1][anime.random(0, 1)] * value;
    return {
        x: p.x + radius * Math.cos(angle),
        y: p.y + radius * Math.sin(angle)
    }
}

function createParticule(x, y) {
    var p = {};
    p.x = x;
    p.y = y;
    p.color = colors[anime.random(0, colors.length - 1)];
    p.radius = anime.random(6, 8);
    p.endPos = setParticuleDirection(p);
    p.draw = function() {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = p.color;
        ctx.fill();
    }
    return p;
}

function createCircle(x, y) {
    var p = {};
    p.x = x;
    p.y = y;
    p.color = '#FFF';
    p.radius = 0.1;
    p.alpha = .3;
    p.lineWidth = 1;
    p.draw = function() {
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.lineWidth = p.lineWidth;
        ctx.strokeStyle = p.color;
        ctx.stroke();
        ctx.globalAlpha = 1;
    }
    return p;
}

function renderParticule(anim) {
    for (var i = 0; i < anim.animatables.length; i++) {
        anim.animatables[i].target.draw();
    }
}

function animateParticules(x, y) {
    var circle = createCircle(x, y);
    var particules = [];
    for (var i = 0; i < numberOfParticules; i++) {
        particules.push(createParticule(x, y));
    }
    anime.timeline().add({
            targets: particules,
            x: function(p) {
                return p.endPos.x;
            },
            y: function(p) {
                return p.endPos.y;
            },
            radius: 0.1,
            duration: anime.random(1200, 1800),
            easing: 'easeOutExpo',
            update: renderParticule
        })
        .add({
            targets: circle,
            radius: anime.random(80, 100),
            lineWidth: 0,
            alpha: {
                value: 0,
                easing: 'linear',
                duration: anime.random(600, 800),
            },
            duration: anime.random(1200, 1800),
            easing: 'easeOutExpo',
            update: renderParticule,
            offset: 0
        });
}

var render = anime({
    duration: Infinity,
    update: function() {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    }
});

document.addEventListener(tap, function(e) {
    window.human = true;
    render.play();
    updateCoords(e);
    animateParticules(pointerX, pointerY);
}, false);

var centerX = window.innerWidth / 2;
var centerY = window.innerHeight / 2;

function autoClick() {
    if (window.human) return;
    animateParticules(
        anime.random(centerX - 50, centerX + 50),
        anime.random(centerY - 50, centerY + 50)
    );
    anime({
        duration: 800
    }).finished.then(autoClick);
}

autoClick();
setCanvasSize();
window.addEventListener('resize', setCanvasSize, false);
})