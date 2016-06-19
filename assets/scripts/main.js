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
        $('body').on('click', '.car-type-select .item', function (e) {
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
            $('.hotdot').attr('class', 'pa hotdot').addClass(carType + '1');

            resetCarModelSelect(carType);
        });

        //  车型选择 select
        $('body').on('click', '.car-model-select .item', function (e) {
            var carType = $(this).attr('data-value');
            var carModelSelect = $('.car-model-select');

            if (carModelSelect.hasClass(carType)) return;
            carModelSelect.attr('data-value', carType);

            //  更新 车型选择 tab active 效果
            $('.car-model-tab .item').eq($(this).index()).addClass('active').siblings().removeClass('active');

            //  更新 车型选择 tab
            $('.car-model-tab .item').eq($(this).index()).trigger('click');

            //  更新 hotpot 位置
            $('.hotdot').attr('class', 'pa hotdot').addClass(carType);
        });

        //  车型选择 tab
        $('body').on('click', '.car-model-tab .item', function (e) {
            e.stopPropagation();
            var carType = $('.car-type-select').attr('data-value');
            $(this).addClass('active').siblings().removeClass('active');

            //  更新 车型选择 select
            $('.car-model-select .select-bd .item').eq($(this).index())[0].click();

            //  更新 车型全尺寸图
            $('.full-car').attr('class', 'full-car').addClass(carType + ($(this).index()+1));
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
            $('.hotdot').attr('class', 'pa hotdot').addClass(carType + '1');
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
            $('.full-car').attr('class', 'full-car').addClass(carType + '1');
        }
    },

    date: function () {
        var date = new Date();
        var hours = (date.getHours()+24-2)%24;
        var mid = 'AM';

        if(hours > 12) { mid ='PM'; }

        $('.scene01 .time').text(date.getHours() + ':' + date.getMinutes() + ' '  + mid);
    },

    //  导航与路由
    nav: function () {
        $('.nav .item').click(function () {
            var index = $(this).index()+1;
            if ($('.nav').hasClass('nav0' + index)) return;
            init(index, 'nav');
        });

        $('.entry-list .item').click(function () {
            var index = $(this).index()+1;
            init(index+1, 'entry');
        });

        function init (index, type) {
            //  当进入 Home 页时 隐藏公共 logo
            if (index == 1 && type == 'nav') {
                $('.nav, .logo-common').fadeOut();
            } else {
                $('.nav, .logo-common').fadeIn();
                //  给当前菜单加上 active 状态
                $('.nav').addClass('nav0' + index).removeClass('nav01 nav02 nav03 nav04 nav05 nav06'.replace('nav0' + index, ''));
            }

            //  给当前场景加上 active 状态
            $('.scene0' + index).addClass('active').fadeIn().siblings('.scene').fadeOut().removeClass('active');

            //  车型选择切换卡 where scene02,03,04
            if (index == 2 || index == 3 || index == 4) {
                $('.car-model-tab').addClass('active');
            } else {
                $('.car-model-tab').removeClass('active');
            }

            //  经销商查询出现 where scene05
            if (index == 5) {
                $('.dealer-query-select').addClass('active');
            } else {
                $('.dealer-query-select').removeClass('active');
            }

            //  背景控制
            if (index == 1) {
                $('.background').addClass('s01').removeClass('s01 s02 s05'.replace('s01', ''));
            } else if (index == 2 || index == 3 || index == 4 ) {
                $('.background').addClass('s02').removeClass('s01 s02 s05'.replace('s02', ''));
            } else if (index == 5 || index == 6 ) {
                $('.background').addClass('s05').removeClass('s01 s02 s05'.replace('s05', ''));
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
        $('.scene02, .car-model-tab').addClass('active');
        $('.logo-common').show();
    }
};

$(function (){
    // init app
    app.init();
    console.log('app started success...');
});

