var winHeight;
var winWidth;
var scrollTop;
var isMobile = false;
var isTablet = false;
$(document).ready(function () {
    initVariables();
});

$(window).resize(function () {
    initVariables();
});

$(window).load(function () {
    initVariables();
});

function initVariables() {
    winHeight = $(window).height();
    winWidth = $(window).width();
    if (winWidth < 600) {
        isMobile = true;
    } else
        isMobile = false;

    if (winWidth > 600 && winWidth < 1024) {
        isTablet = true;
    } else
        isTablet = false;
}