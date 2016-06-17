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
            var carType = $(this).attr('data-type');
            var carTypeSelect = $('.car-type-select');

            if (carTypeSelect.hasClass(carType)) return;

            //  更换车系剪影
            $('.car-type-tab').removeClass('haohua suv jiaoche'.replace(carType, '')).addClass(carType);
            carTypeSelect.attr('data-type', carType);

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

    init: function (){
        this.common();

        $('.icon-close').click(function () {
           $('.scene01').fadeOut();
           $('.scene02').fadeIn();
        });
    }
};

$(function (){
    // init app
    app.init();
    console.log('app started success...');
});

