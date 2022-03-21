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
});