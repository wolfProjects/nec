// Created by sam mok 2015(Siso brand interactive team).

"use strict";

var components = {
    select: function (){
        $('body')
            .on('click', '.select-hd', function (e) {
                e.stopPropagation();
                $('.select').removeClass('active');
                $(this).parent('.select').toggleClass('active');
                $(this).parent('.select').find('.select-bd .container').scrollTop(0);
            })
            .on('click', '.select-bd .item', function (e) {
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

