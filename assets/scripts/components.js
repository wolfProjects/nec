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
        
        $('body').click(function () {
            $('.select').removeClass('active');
        })
    },

    init: function (){
        this.select();
    }
};

$(function (){
    // init app
    components.init();
});

