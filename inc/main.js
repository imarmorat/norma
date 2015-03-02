$(document).ready(function() {
	$(".up").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	$('.show').click(function () {
		$('nav li a').not('.k-nav-current').toggle();
		$('.show').toggleClass('show-toggled');
		return false
	});

	var albumCount = $('.amount-check').html();
	if (albumCount === '1') {
		$('#slideshow_nav').hide();
	};

	function responsiveNav () {
        if ($(window).width() <= 540){  
            $('nav').addClass('mobile');
            $('.show').addClass('mobileOpen');
        }   
    }
    responsiveNav();

    $('.mobileOpen').click(function () {
    	$('nav.mobile ul').toggle();
    });
});