var body = $('body');
var theme = $('.theme-switch-btn');
var index = 0;
var text = $('.text');
var icon = $('.fa-moon');

$(document).ready(function() {
    theme.click(function() {
        body.toggleClass('dark');
        if (text.text() == 'Dark') {
            text.text('Light');
        } else {
            text.text('Dark');
        }
        icon.toggleClass('fa-sun');
    });
});