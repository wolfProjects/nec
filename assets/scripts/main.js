// Created by sam mok 2015(Siso brand interactive team).

"use strict";

//  limit browser drag move
document.addEventListener('touchmove', function (e) {
    e.preventDefault();
},true);

var app = {
    common: function (){
        //  车型选择 select
        $('.car-type-select .item').click(function (e) {
            var carType = $(this).attr('data-value');
            var carTypeSelect = $('.car-type-select');

            if (carTypeSelect.hasClass(carType)) return;

            //  更换车系剪影
            $('.car-type-tab').removeClass('haohua suv jiaoche'.replace(carType, '')).addClass(carType);
            carTypeSelect.attr('data-value', carType);

            //  重置车系
            $('.car-type-tab .item').removeClass('active');
            $('.car-type-tab .item:first').addClass('active');
        });

        //  车系选择 tab
        $('.car-type-tab .item').click(function (e) {
            e.stopPropagation();
            $(this).addClass('active').siblings().removeClass('active');
        });
    },

    nav: function () {
        $('.nav .item').click(function () {
                var index = $(this).index()+1;
            $('.scene0' + index).fadeIn().siblings('.scene').fadeOut();

            if (index == 2 || index == 3 || index == 4) {
                $('.car-type-tab').fadeIn();
            } else {
                $('.car-type-tab').fadeOut();
            }
        });
    },

    scene01: function () {
        //  close btn
        $('.btn-close').click(function () {
            $('.scene01').fadeOut();
            $('.scene02, .car-type-tab').fadeIn();
        });
    },

    scene02: function () {

    },

    scene03: function () {
        $('.model-select .radio').click(function () {
            $(this).addClass('active').parents('.item').siblings().find('.radio').removeClass('active');
        });


        //  test data
        var modelInfo = [
            [
                {
                    'title': '厂商指导价',
                    'body': '138.68万'
                },
                {
                    'title': '级别',
                    'body': '中型车'
                },
                {
                    'title': '发动机',
                    'body': '1.8T 160马力 L4'
                },
                {
                    'title': '变速箱',
                    'body': '6档手动'
                },
                {
                    'title': '长*宽*高(mm)',
                    'body': '4761*1826*1439'
                },
                {
                    'title': '车身结构',
                    'body': '4门5座三厢车'
                },
                {
                    'title': '最高车速(km/h)',
                    'body': '220'
                },
                {
                    'title': '官方0-100km加速(s)',
                    'body': '8.3'
                },
                {
                    'title': '整车质保',
                    'body': '三年或10万公里'
                },
                {
                    'title': '车身结构',
                    'body': '4门5座三厢车'
                },
                {
                    'title': '最高车速(km/h)',
                    'body': '220'
                },
                {
                    'title': '官方0-100km加速(s)',
                    'body': '8.3'
                },
                {
                    'title': '整车质保',
                    'body': '三年或10万公里'
                }
            ]
        ];
        
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

        //  qrcode
        $('.scene03 .hotdot').click(function (e) {
            e.stopPropagation();
            $(this).toggleClass('active');
        });
    },

    globalCancel: function () {
        $('body').click(function () {
            //  cancel qrcode
            $('.scene03 .hotdot').removeClass('active');
        })
    },

    init: function (){
        this.common();
        this.globalCancel();
        this.nav();
        this.scene01();
        this.scene02();
        this.scene03();
    }
};

$(function (){
    // init app
    app.init();
    console.log('app started success...');
});

