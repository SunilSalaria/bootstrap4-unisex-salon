(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 56)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });

})(jQuery); // End of use strict

//on scroll navbar background changes
$(document).scroll(function() {
    if ($(document).scrollTop() >= 200) {
        $("#mainNav").css({ "background": "#334252" })
    } else if ($(document).scrollTop() <= 200) {
        $("#mainNav").css({ "background": "transparent" })
    }
});

//add active and remove active class form navbar
$(document).ready(function() {
    $("#navbarResponsive li a").click(function() {
        $("#navbarResponsive li a").removeClass("border-bottom");
        $(this).addClass("border-bottom");

    });
});