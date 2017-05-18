window.$ = window.jQuery = require('jquery');


require('bootstrap');

window.Vue = require('vue');
require('vue-resource');


/*
require('./modules/select');
*/


$(document).ready(function (){
    $(".scroll").click(function (){
        var href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 2500);
    });
});