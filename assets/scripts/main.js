// Created by sam mok 2015(Siso brand interactive team).

"use strict";

//  limit browser drag move
document.addEventListener('touchmove', function (e) {
    e.preventDefault();
},true);

var app = {
    common: function (){
        var CAR_DATA = DATA.carType;

        //  初始化 车类选择 select && 车型选择 select && 车型选择 tab
        resetCarTypeSelect('car');

        //  车类选择 select
        $('.car-type-select').on('click', '.item', function (e) {
            var carType = $(this).attr('data-value');
            var carTypeSelect = $('.car-type-select');

            //  update select
            $('.car-type-select .select-hd span').text($(this).text());
            $('.car-type-select').attr('data-value', carType);

            if (carTypeSelect.hasClass(carType)) return;
            carTypeSelect.attr('data-value', carType);

            //  更换车系剪影
            $('.car-model-tab').removeClass('luxury suv car'.replace(carType, '')).addClass(carType).attr('data-value', '1');

            //  重置车系剪影 active 效果
            $('.car-model-tab .item').removeClass('active');
            $('.car-model-tab .item:first').addClass('active');

            //  更新 车类介绍 typed 效果
            if ($('.scene02').hasClass('active')) {
                $(".scene02 .description").typed('reset');
                $(".scene02 .car").empty().append('<div class="description"></div>');
                $(".scene02 .description").typed({
                    strings: [DATA.description[carType + $('.car-model-tab').attr('data-value')]],
                    contentType: 'html', // or 'text'
                    showCursor: false,
                    startDelay: 1200
                });
            }

            //  更新 车型全尺寸图
            $('.full-car').removeClass($('.full-car').attr('class').replace(/full-car|shadow|comparison/g, '')).addClass(carType + 1);

            //  更新 hotpot 位置
            $('.hotdot').attr('class', 'pa hotdot').hide().addClass(carType + '1');
            setTimeout(function () {
                $('.hotdot').fadeIn();
            }, 600);
        });

        //  车型选择 tab
        $('.car-model-tab').on('click', '.item', function (e) {
            e.stopPropagation();
            var carType = $('.car-type-select').attr('data-value');
            $(this).parents('.car-model-tab').attr('data-value', $(this).attr('data-value'));
            $(this).addClass('active').siblings().removeClass('active');

            //  更新 车型全尺寸图
            $('.full-car').removeClass($('.full-car').attr('class').replace(/full-car|shadow|comparison/g, '')).addClass(carType + ($(this).index()+1));

            //  更新 hotpot 位置
            $('.hotdot').attr('class', 'pa hotdot').hide().addClass(carType + ($(this).index() + 1));
            setTimeout(function () {
                $('.hotdot').fadeIn();
            }, 600);

            //  更新 车类介绍 typed 效果
            if ($('.scene02').hasClass('active')) {
                $(".scene02 .description").typed('reset');
                $(".scene02 .car").empty().append('<div class="description"></div>');
                $(".scene02 .description").typed({
                    strings: [DATA.description[carType + $('.car-model-tab').attr('data-value')]],
                    contentType: 'html', // or 'text'
                    showCursor: false,
                    startDelay: 1200
                });
            }
        });

        function resetCarTypeSelect (carType) {
            //  生成 options
            $('.car-type-select .select-hd span').text(CAR_DATA[carType].name);
            $('.car-type-select .select-bd .bd').empty();

            var dom = '';
            for (var key in CAR_DATA) {
                if (CAR_DATA.hasOwnProperty(key)) dom += '<div class="item" data-value="' + key + '">' + CAR_DATA[key].name + '</div>'
            }
            $('.car-type-select .select-bd .bd').append($(dom));

            //  更新 车型全尺寸图
            $('.full-car').removeClass($('.full-car').attr('class').replace(/full-car|shadow|comparison/g, '')).addClass(carType + 1);

            //  更新 车型选择 tab
            $('.car-model-tab').attr('data-value', 1);

            //  更新 hotpot 位置
            $('.hotdot').attr('class', 'pa hotdot').hide().addClass(carType + '1');
            setTimeout(function () {
                $('.hotdot').fadeIn();
            }, 600);
        }
    },

    date: function () {
        setInterval(function () {
            var date = new Date();
            var hours = (date.getHours()+24-2)%24;
            var mid = 'AM';

            if(hours > 12) { mid ='PM'; }

            $('.scene01 .time').text(date.getHours() + ':' + date.getMinutes() + ' '  + mid);
        }, 1000);
    },

    animationBg: {
        preloadSprites: [],

        mainSprites: [],

        preload: function (cb) {
            var that = this;
            var img = null;
            var total = 35 + 250;
            var count = 0;

            for (var i = 0; i <= 34; i++) {
                img = new Image();
                img.index = i;
                img.onload = function () {
                    that.preloadSprites[this.index] = this;
                    count += 1;
                    checkLoading();
                };
                img.onerror = function () {
                    total -= 1;
                    checkLoading();
                };
                img.src = './assets/images/animation/car-comparison-loading-' + fixedIndex(i) + '.png';
            }

            for (i = 0; i <= 249; i++) {
                img = new Image();
                img.index = i;
                img.onload = function () {
                    that.mainSprites[this.index] = this;
                    count += 1;
                    checkLoading();
                };
                img.onerror = function () {
                    total -= 1;
                    checkLoading();
                };
                img.src = './assets/images/animation/car-comparison-animation-' + fixedIndex(i) + '.png';
            }

            function checkLoading () {
                if (count == total && cb) cb();
            }

            function fixedIndex (i) {
                if (i < 10) return '000' + i;
                if (i < 100) return '00' + i;
                if (i < 1000) return '0' + i;
            }
        },

        timer: null,

        play: function () {
            var that = this;
            var canvas = $('.animation-bg')[0];
            var ctx = canvas.getContext('2d');
            var curIndex = 0;

            clearInterval(that.timer);

            requestAnimationFrame(function () {
                that.timer = setInterval(function () {
                    ctx.clearRect(0, 0, 1280, 720);
                    ctx.drawImage(that.preloadSprites[curIndex], 0, 0, 1280, 720);
                    curIndex += 1;

                    if (curIndex > that.preloadSprites.length - 1) {
                        clearInterval(that.timer);
                        curIndex = 0;
                        playMainAnimation();
                    }
                }, 1000/25);
            });

            function playMainAnimation () {
                play();
                that.timer = setInterval(play, 1000/25);

                function play () {
                    ctx.clearRect(0, 0, 1280, 720);
                    ctx.drawImage(that.mainSprites[curIndex], 0, 0, 1280, 720);
                    curIndex += 1;

                    if (curIndex > that.mainSprites.length - 1) {
                        curIndex = 0;
                        ctx.drawImage(that.preloadSprites[curIndex], 0, 0, 1280, 720);
                    }
                }
            }
        },

        pause: function () {
            clearInterval(this.timer);
        }
    },

    //  导航与路由
    nav: function () {
        var that = this;

        //  dock 导航
        $('.nav .item').click(function () {
            var index = $(this).index()+1;
            if ($('.nav').hasClass('nav0' + index)) return;
            init(index, 'nav');
        });

        //  首页导航
        $('.entry-list .item').click(function () {
            var index = $(this).index()+1;
            init(index+1, 'entry', $(this));
        });

        var isFreeze = false;
        function init (index, type, curTarget) {
            if (isFreeze) return;

            var carType = $('.car-type-select').attr('data-value');

            if (type == 'entry') {
                isFreeze = true;
                curTarget.addClass('loading');
                setTimeout(doing, 900);
            } else {
                doing();
            }

            function doing () {
                isFreeze = false;
                $('.entry-list .item').removeClass('loading');

                //  给当前场景加上 active 状态
                var curScene = $('.scene0' + index);
                curScene.siblings('.scene').hide().removeClass('active');
                curScene.show();
                setTimeout(function () {
                    //  延迟添加 active 状态 来修复 transition 瞬间完成 BUG
                    curScene.addClass('active');
                },10);

                //  当进入 Home 页时 隐藏公共 logo
                if (index == 1 && type == 'nav') {
                    $('.nav, .logo-common').fadeOut();
                } else {
                    $('.nav, .logo-common').fadeIn();
                    //  给当前菜单加上 active 状态
                    $('.nav').addClass('nav0' + index).removeClass('nav01 nav02 nav03 nav04 nav05 nav06'.replace('nav0' + index, ''));
                }

                //  车型选择切换卡 where scene02,03,04
                if (index == 2 || index == 4) {
                    $('.car-model-tab').show();

                    $('.full-car').fadeIn();
                    setTimeout(function () {
                        $('.car-model-tab').addClass('active');
                    }, 10);
                } else {
                    $('.car-model-tab').hide().removeClass('active');
                    $('.full-car').hide();
                }

                //  车型背景动画
                if (index == 2) {
                    $('.animation-bg').fadeIn();
                    that.animationBg.play();
                } else {
                    $('.animation-bg').hide();
                    that.animationBg.pause();
                }

                //  车类介绍 typed 效果
                if (index == 2) {
                    $(".scene02 .description").typed('reset');
                    $(".scene02 .car").empty().append('<div class="description"></div>');
                    $(".scene02 .description").typed({
                        strings: [DATA.description[carType + $('.car-model-tab').attr('data-value')]],
                        contentType: 'html', // or 'text'
                        showCursor: false,
                        startDelay: 1200
                    });
                }
                console.log(carType + $('.car-model-tab').attr('data-value'));

                //  汽车阴影
                if (index == 4) {
                    $('.full-car').addClass('shadow comparison');
                    $('.hotdot').addClass('transform');
                } else {
                    $('.full-car').removeClass('shadow comparison');
                    $('.hotdot').removeClass('transform');
                }

                //  热点
                $('.hotdot').hide();

                setTimeout(function () {
                    $('.hotdot').fadeIn();
                }, 600);

                //  背景图
                if (index == 1) $('.background').attr('class', 'background').addClass('s01');
                if (index == 2) $('.background').attr('class', 'background').addClass('s02');
                if (index == 3) $('.background').attr('class', 'background').addClass('s03');
                if (index == 4) $('.background').attr('class', 'background').addClass('s04');
                if (index == 5 || index == 6 ) $('.background').attr('class', 'background').addClass('s05');

                //  经销商查询出现 where scene05
                if (index == 5) {
                    $('.dealer-query-select').show();
                    setTimeout(function () {
                        $('.dealer-query-select').addClass('active')
                    }, 10);
                } else {
                    $('.dealer-query-select').hide().removeClass('active');
                }
            }
        }
    },

    scene01: function () {
        //  进入第二屏
        $('.btn-close').click(function () {
            $('.entry-list .item01').click();
        });
    },

    scene02: function () {

    },

    scene03: function () {
        initPanel($('.scene03 .car-a'));
        initPanel($('.scene03 .car-b'));

        function initPanel (scene) {
            resetCarTypeSelect(scene);
            resetCarInformation(scene);

            //  车类选择 select
            scene.find('.s03-car-type-select').on('click', '.item', function (e) {
                var carType = $(this).attr('data-value');

                if ($(this).hasClass(carType)) return;

                //  更新 option
                scene.find('.car-type-select .select-hd span').text($(this).text());
                scene.find('.car-type-select').attr('data-value', carType);
                $(this).parents('.select').attr('data-value', carType);

                //  更换车系剪影
                scene.find('.s03-car-model-tab').removeClass('luxury suv car'.replace(carType, '')).addClass(carType)
                    .find('.item').removeClass('active').eq(0).addClass('active');

                //  更新 全尺寸车图
                scene.find('.car-viewer').removeClass(scene.find('.car-viewer').attr('class').replace(/car-viewer/g, '')).addClass(carType + 1);

                //  更新 hotpot 位置
                scene.find('.hotdot').attr('class', 'pa hotdot').hide().addClass(carType + '1');
                setTimeout(function () {
                    scene.find('.hotdot').fadeIn();
                }, 250);

                //  重置 车名
                scene.find('.car-viewer .name').text(DATA.carType[carType].name + 1);

                //  重置 车型对比信息面板 滚动条
                $('.car-panel').find('.panel-bd-item .body').scrollTop(0);
            });

            //  同步滚动
            $('.scene03 .panel-bd-item .body').scroll(function () {
                $(this).parents('.car-panel').siblings('.car-panel').find('.panel-bd-item .body').scrollTop($(this).scrollTop());
            });

            //  车型选择 tab
            scene.find('.s03-car-model-tab').on('click', '.item', function (e) {
                var carType = scene.find('.s03-car-type-select').attr('data-value');
                var carModelSelect = scene.find('.s03-car-model-tab');
                var index = ($(this).index()+1);

                if ($(this).hasClass('active')) return;
                carModelSelect.attr('data-value', carType + index);

                //  更新 车系剪影 active 效果
                $(this).addClass('active').siblings().removeClass('active');

                //  更新 全尺寸车图
                scene.find('.car-viewer').removeClass(scene.find('.car-viewer').attr('class').replace(/car-viewer/g, '')).addClass(carType + ($(this).index() + 1));

                //  更新 车型信息
                resetCarInformation(scene);

                //  更新 hotpot 位置
                scene.find('.hotdot').attr('class', 'pa hotdot').hide().addClass(carType + index);
                setTimeout(function () {
                    scene.find('.hotdot').fadeIn();
                }, 250);

                //  重置 车名
                scene.find('.car-viewer .name').text(DATA.carType[carType].name + index);

                //  重置 车型对比信息面板 滚动条
                $('.car-panel').find('.panel-bd-item .body').scrollTop(0);
            });

            function resetCarTypeSelect (scene) {
                var data = DATA.carType;
                scene.find('.s03-car-type-select .select-hd span').text(data['car'].name);
                scene.find('.s03-car-type-select .select-bd .bd').empty();

                var dom = '';
                for (var key in data) {
                    if (data.hasOwnProperty(key)) dom += '<div class="item" data-value="' + key + '">' + data[key].name + '</div>'
                }
                scene.find('.s03-car-type-select .select-bd .bd').append($(dom));

                //  重置 car model tab
                var carModelTab = scene.find('.s03-car-model-tab');
                var carType = scene.find('.s03-car-type-select').attr('data-value');
                carModelTab.attr('data-value', carType + 1);

                //  重置 hotpot 位置
                scene.find('.hotdot').attr('class', 'pa hotdot').hide().addClass(carType + '1');
                setTimeout(function () {
                    scene.find('.hotdot').fadeIn();
                }, 250);

                //  重置 车名
                scene.find('.car-viewer .name').text(data['car'].name + 1);
            }

            function resetCarInformation (scene) {
                var carType = scene.find('.s03-car-model-tab').attr('data-value');
                var data = DATA.model[carType];
                var dom = '';

                data.forEach(function (item) {
                    var body = item.body;

                    if (item.title == '厂商指导价') {
                        var matchPrice = body.match(/(.+)万/);
                        body = '<strong>' + matchPrice[1] + '</strong>' + '万';
                    }

                    dom += '<div class="row">';
                    dom += '<p class="tt">' + item.title + '</p>';
                    dom += '<p class="bd">' + body + '</p>';
                    dom += '</div>';
                });
                scene.find('.panel-bd-item .body').empty().append($(dom));
            }
        }

        //  二维码按钮
        $('.scene03 .hotdot').click(function (e) {
            e.stopPropagation();
            $(this).toggleClass('active');
        });
    },

    scene04: function () {
        var data = DATA.cities;
        var citySelect = $('.scene04 .city');
        var optionsAmount = 0;

        var dom = '';
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                dom += '<div class="item" data-value="' + data[key].position + '">' + data[key].name + '</div>';
                optionsAmount += 1;
            }
        }
        citySelect.find('.select-bd .container').append($(dom));

        //  如果 option 大于6个 添加滚动提示
        if (optionsAmount > 6) {
            citySelect.addClass('scroll');
        } else {
            citySelect.removeClass('scroll')
        }
    },

    scene05: function () {
        var data = DATA.cities;
        var citySelect = $('.dealer-query-select .city');
        var optionsAmount = 0;
        var timer = null;

        var dom = '';
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                dom += '<div class="item" data-value="' + data[key].position + '">' + data[key].name + '</div>';
                optionsAmount += 1;
            }
        }
        citySelect.find('.select-bd .container').empty().append($(dom));

        //  如果 option 大于6个 添加滚动提示
        if (optionsAmount > 6) {
            citySelect.addClass('scroll');
        } else {
            citySelect.removeClass('scroll')
        }

        //  切换城市
        $('.dealer-query-select .city .item').on('click', function () {
            setMap($(this).attr('data-value').split(','));
            console.log($(this).attr('data-value').split(','));
        });

        //  初始化默认地图
        //  查询坐标的网页: http://api.map.baidu.com/lbsapi/getpoint/index.html
        setMap(DATA.cities[0].position.split(','));

        function setMap(place) {
            clearTimeout(timer);
            $('#map1').empty();
            $('#map1').parents('.map').removeClass('finished');

            // 百度地图API功能
            var map = new BMap.Map("map1");
            var point = new BMap.Point(place[0],place[1]);

            map.setMapStyle({style: 'grayscale'});
            map.enableScrollWheelZoom(true);
            map.centerAndZoom(point, 18);
            map.addOverlay(new BMap.Marker(point));// 将标注添加到地图中
            var label = new BMap.Label("", {offset: new BMap.Size(-20, -20)});

            timer = setTimeout(function () {
                $('#map1').parents('.map').addClass('finished');
            }, 1000);
        }
    },

    scene06: function () {
        // 百度地图API功能
        var map = new BMap.Map("map2");
        var point = new BMap.Point(121.468548, 31.247761);
        map.setMapStyle({style: 'grayscale'});
        map.enableScrollWheelZoom(true);
        map.centerAndZoom(point, 18);
        map.addOverlay(new BMap.Marker(point));// 将标注添加到地图中
        var label = new BMap.Label("", {offset: new BMap.Size(-20, -20)});
        $('#map2').parents('.map').addClass('finished');
    },

    //  全局用 点击任意地方后 关闭组件
    globalCancel: function () {
        $('body').click(function () {
            //  cancel qrcode
            $('.scene03 .hotdot').removeClass('active');
        })
    },

    //  初始化各部分函数
    init: function (){
        this.common();
        this.globalCancel();
        this.nav();
        this.date();
        this.scene01();
        this.scene02();
        this.scene03();
        this.scene04();
        this.scene05();
        this.scene06();
        this.animationBg.preload(function () {
            //  图片素材加载完毕后 开始运行主界面
            $('.scene01').addClass('active');
        });

        $('.background').addClass('s01');

        //
        //$('.scene03').addClass('active');
        //$('.nav, .logo-common').fadeIn();
        //$('.background').addClass('s03');

        //$('.scene02').addClass('active');
        //$('.nav, .logo-common').fadeIn();
        //$('.background').addClass('s02');

        //$('.scene04').addClass('active');
        //$('.nav, .logo-common').fadeIn();
        //$('.background').addClass('s04');
    }
};

$(function (){
    // init app
    app.init();
    console.log('app started success...');
});

