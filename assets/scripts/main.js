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
        resetCarModelSelect();

        //  车类选择 select
        $('.car-type-select').on('click', '.item', function (e) {
            var carType = $(this).attr('data-value');
            var carTypeSelect = $('.car-type-select');

            if (carTypeSelect.hasClass(carType)) return;
            carTypeSelect.attr('data-value', carType);

            //  更换车系剪影
            $('.car-model-tab').removeClass('luxury suv car'.replace(carType, '')).addClass(carType);

            //  重置车系剪影 active 效果
            $('.car-model-tab .item').removeClass('active');
            $('.car-model-tab .item:first').addClass('active');

            //  更新 hotpot 位置
            $('.hotdot').attr('class', 'pa hotdot').hide().addClass(carType + '1');
            setTimeout(function () {
                $('.hotdot').fadeIn();
            }, 600);

            //  更新 车类介绍 typed 效果
            $(".scene02 .description").typed('reset');
            $(".scene02 .car").empty().append('<div class="description"></div>');
            $(".scene02 .description").typed({
                strings: [CAR_DATA[carType].description],
                contentType: 'html', // or 'text'
                showCursor: false,
                startDelay: 1200
            });

            resetCarModelSelect(carType);
        });

        //  车型选择 select
        $('.car-model-select').on('click', '.item', function (e) {
            var carType = $(this).attr('data-value');
            var carModelSelect = $('.car-model-select');

            if (carModelSelect.hasClass(carType)) return;
            carModelSelect.attr('data-value', carType);

            //  更新 车型选择 tab active 效果
            $('.car-model-tab .item').eq($(this).index()).addClass('active').siblings().removeClass('active');

            //  更新 车型选择 tab
            $('.car-model-tab .item').eq($(this).index()).trigger('click');

            //  更新 hotpot 位置
            $('.hotdot').attr('class', 'pa hotdot').hide().addClass(carType);
            setTimeout(function () {
                $('.hotdot').fadeIn();
            }, 600);
        });

        //  车型选择 tab
        $('.car-model-tab').on('click', '.item', function (e) {
            e.stopPropagation();
            var carType = $('.car-type-select').attr('data-value');
            $(this).addClass('active').siblings().removeClass('active');

            //  更新 车型选择 select
            $('.car-model-select .select-bd .item').eq($(this).index())[0].click();

            //  更新 车型全尺寸图
            $('.full-car').removeClass($('.full-car').attr('class').replace(/full-car||shadow||comparision/g, '')).addClass(carType + ($(this).index()+1));
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

            //  更新 hotpot 位置
            $('.hotdot').attr('class', 'pa hotdot').hide().addClass(carType + '1');
            setTimeout(function () {
                $('.hotdot').fadeIn();
            }, 600);
        }

        function resetCarModelSelect () {
            var carType = $('.car-type-select').attr('data-value');

            //  更新 车型 二级select
            $('.car-model-select .select-hd span').text(CAR_DATA[carType].models[0]);
            $('.car-model-select .select-bd .bd').empty();

            var dom = '';
            CAR_DATA[carType].models.forEach(function (item, index) {
                dom += '<div class="item" data-value="' + carType + (index+1) + '">' + item + '</div>'
            });
            $('.car-model-select .select-bd .bd').append($(dom));

            //  更新 全尺寸车图
            $('.full-car').removeClass($('.full-car').attr('class').replace(/full-car||shadow||comparision/g, '')).addClass(carType + '1');
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

    //  导航与路由
    nav: function () {
        //  dock 导航
        $('.nav .item').click(function () {
            var index = $(this).index()+1;
            if ($('.nav').hasClass('nav0' + index)) return;
            init(index, 'nav');
        });

        //  首页导航
        $('.entry-list .item').click(function () {
            var index = $(this).index()+1;
            init(index+1, 'entry');
        });

        function init (index, type) {
            var CAR_DATA = DATA.carType;
            var carType = $('.car-type-select').attr('data-value');

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
            if (index == 2 || index == 3 || index == 4) {
                $('.car-model-tab').addClass('active');
                $('.full-car').fadeIn();
            } else {
                $('.car-model-tab').removeClass('active');
                $('.full-car').hide();
            }

            //  汽车阴影
            if (index == 3 || index == 4) {
                $('.full-car').addClass('shadow comparison');
                $('.hotdot').addClass('transform');
            } else {
                $('.full-car').removeClass('shadow comparison');
                $('.hotdot').removeClass('transform');
            }

            //  地图 模拟加载
            if (index == 5 || index == 6) {
                setTimeout(function () {
                    $('.map').addClass('finished');
                }, 1000);
            } else {
                $('.map').removeClass('finished');
            }

            //  车类介绍 typed 效果
            if (index == 2) {
                $(".scene02 .description").typed('reset');
                $(".scene02 .car").empty().append('<div class="description"></div>');
                $(".scene02 .description").typed({
                    strings: [CAR_DATA[carType].description],
                    contentType: 'html', // or 'text'
                    showCursor: false,
                    startDelay: 1200
                });
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
    },

    scene01: function () {
        //  进入第二屏
        $('.btn-close').click(function () {
            $('.scene01').fadeOut();
            $('.scene02, .car-model-tab').fadeIn();
        });
    },

    scene02: function () {

    },

    scene03: function () {
        //  车型选择 radio 点击效果
        $('.model-select .radio').click(function () {
            $(this).addClass('active').parents('.item').siblings().find('.radio').removeClass('active');
        });

        //  车型参数 模拟数据测试
        var modelInfo = DATA.model;

        modelInfo.forEach(function (model) {
           var dom = '';

           model.forEach(function (item) {
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
           $('.panel-bd-item .body').append($(dom));
        });

        //  二维码按钮
        $('.scene03 .hotdot').click(function (e) {
            e.stopPropagation();
            $(this).toggleClass('active');
        });
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

        //test
        $('.scene01').addClass('active');
        $('.background').addClass('s01');

        //$('.scene02, .car-model-tab').addClass('active');
        //$('.nav, .logo-common').fadeIn();
        //$('.background').addClass('s02');
    }
};

$(function (){
    // init app
    app.init();
    console.log('app started success...');
});

