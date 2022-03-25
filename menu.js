var menuBtn = $('.menu-btn');
var closeBtn = $('.close-btn');
var sideMenu = $('.side-menu');

$(document).ready(function() {
    menuBtn.click(function() {
        sideMenu.addClass('active');
    });
    closeBtn.click(function() {
        sideMenu.removeClass('active');
    });
    $(window).bind('scroll', function() {
        var menu = $('.initial-landing');
        if ($(window).scrollTop()) {
            menu.addClass('fixed');
        } else {
            menu.removeClass('fixed');
        }
    });
});