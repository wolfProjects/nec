// Created by sam mok 2015(Siso brand interactive team).

"use strict";

var components = {
    select: function (){
        $('.select-hd').click(function (e) {
            e.stopPropagation();
            $(this).parent('.select').toggleClass('active');
        });

        $('.select-bd .item').click(function () {
            $(this).parents('.select').find('.select-hd span').text($(this).text());
            $(this).parents('.select').toggleClass('active');
        });
    },
    
    radio: function () {
        $('.radio').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
    },

    globalCancel: function () {
        $('body').click(function () {
            //  cancel select
            $('.select').removeClass('active');
        })
    },

    init: function (){
        this.select();
        this.radio();
        this.globalCancel();
    }
};

$(function (){
    // init app
    components.init();
});

