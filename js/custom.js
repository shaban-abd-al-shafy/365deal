/*global window, jQuery, document, $, console*/

(function ($) {
    "use strict";
    // Add smooth scrolling to all links in navbar
    $(".navbar a.smooth-scroll, a.mouse-hover, .overlay-detail a").on('click', function (event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function () {
            window.location.hash = hash;
        });
    });
})(jQuery);
/*start scroll top button*/

/* start scroll navigation */
$(document).ready(function () {
    "use strict";
    var scrollTop = 0;
    
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        $('.counter').html(scrollTop);

        if (scrollTop >= 200) {
            $('.navbar-header a').removeClass('brand-scrolled').addClass('navbar-brand').css("transition","all .6s ease-in-out");
            $('#top').fadeOut("fast");
            $('#bottom').fadeOut("fast");
            $('.navbar-default').css({
                top: "0",
                boxShadow: "4px 4px 17px -4px #000"
            });
        } else if (scrollTop < 200) {
            $('.navbar-header a').addClass('brand-scrolled').removeClass('navbar-brand').css("transition","all .6s ease-in-out");
            $('#top').fadeIn("fast");
            $('#bottom').fadeIn("fast");
            $('.navbar-default').css({
                top: "30px",
                boxShadow: "0 0 0 0"
            });
        }

    });
  
});
/* end scroll navigation */

//cashing the button to use it 
var scrollButton = $("#scroll-top");

$(window).on("scroll", function () {
    "use strict";
    if ($(this).scrollTop() >= 700) {
        
        scrollButton.show();
    } else {
        
        scrollButton.hide();
    }
//this is the shortcut for if condition
//$(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
});

scrollButton.click(function () {
    "use strict";
    $("html,body").animate({scrollTop : 0}, 600);
});
/*end scroll top button*/

//$(window).load(function () {
$(window).on("load", function () {
    // Animate loader off screen
    "use strict";
    // $(".loading").fadeOut(100);
    // $("body").css("overflow", "auto");
    
    $('[data-toggle="tooltip"]').tooltip(); //display: -webkit-inline-box;
    
    $('#hicon').click(function () {
        $('.division').fadeToggle();
    });
    
    $('.header-products .site-list .list:nth-child(1)').click(function () {
        $('.header-products .site-list .list:nth-child(1) .list-down').fadeToggle().css("display","-webkit-inline-box");
        $('.header-products .site-list .list:nth-child(2) .list-down').fadeOut();
        $('.header-products .site-list .list:nth-child(3) .list-down').fadeOut();
    });
    
    $('.header-products .site-list .list:nth-child(2)').click(function () {
        $('.header-products .site-list .list:nth-child(2) .list-down').fadeToggle().css("display","-webkit-inline-box");
        $('.header-products .site-list .list:nth-child(1) .list-down').fadeOut();
        $('.header-products .site-list .list:nth-child(3) .list-down').fadeOut();
    });
    
    $('.header-products .site-list .list:nth-child(3)').click(function () {
        $('.header-products .site-list .list:nth-child(3) .list-down').fadeToggle().css("display","-webkit-inline-box");
        $('.header-products .site-list .list:nth-child(1) .list-down').fadeOut();
        $('.header-products .site-list .list:nth-child(2) .list-down').fadeOut();
    });
    
    /* start tap slider */
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        rtl:true,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    /* end tap slider */
    
    $("ul.nav-tabs a").click(function (e) {
      e.preventDefault();  
        $(this).tab('show');
    });
    
    $('.carousel').carousel({
      interval: false
    });
    
    $(".comment-show .col-sm-8 > span.down").click(function () {
        
        $(".col-sm-8").removeClass('comment-limit');
        $(".comment-show .col-sm-8 > span.down").hide();
        $(".comment-show .col-sm-8 > span.up").show();
        /*$(".subscribe .form-inline .col-sm-8").removeClass('comment-limit');*/
    });
    
    $(".comment-show .col-sm-8 > span.up").click(function () {
        
        $(".col-sm-8").addClass('comment-limit');
        $(".comment-show .col-sm-8 > span.down").show();
        $(".comment-show .col-sm-8 > span.up").hide();
        /*$(".subscribe .form-inline .col-sm-8").removeClass('comment-limit');*/
    });
    
    // Check Radio-box
    $(".rating input:radio").attr("checked", false);

    $('.rating input').click(function () {
        $(".rating span").removeClass('checked');
        $(this).parent().addClass('checked');
    });

    $('input:radio').change(
      function(){
        var userRating = this.value;
        
    });
    
    /*$(function() {
        $('#so').hide(); 
        $('#soflow').change(function(){
            if($('#soflow option').val() == 'chosen') {
                $('#so').show(); 
            } else {
                $('#so').hide(); 
            } 
        });
    });*/
    
    /* start page services */
    $(".services .col-sm-3 .a").click(function () {
        $(".other-services").fadeToggle();
    });
    
});

/* show select by click on option*/
$(document).ready(function () {
    
    $('select.add-services').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden'); 
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });    
    
});


/* show select by click on option*/
$(document).ready(function(){
    
    $(".select-hide").hide();
    
    $('.selected .select-options li').on('click', function () {
        $(".select-hide").hide();
        $(".select-box-little").removeClass("col-md-6");
    });
    
    $('.selected .select-options li').on('click', function () {
        $(".select-hide").fadeIn();
        $(".select-box-little").addClass("col-md-6");
    });
});

/* show select by click on option*/
$(document).ready(function(){
    
    $(".apear").hide();
    $(".hide-services").removeClass("col-md-6").addClass("col-md-12");
    
    $('.selected-selected .select-options li').on('click', function () {
        $(".apear").hide();
        $(".hide-services").removeClass("col-md-6").addClass("col-md-12");
    });
    
    $('.selected-selected .select-options li').on('click', function () {
        $(".apear").fadeIn();
        $(".hide-services").removeClass("col-md-12").addClass("col-md-6");
    });
});

/* show select by click on option*/
$(document).ready(function(){
    
    $(".so").hide();
    
    $('.offer-selected .select-options li').on('click', function () {
        $(".so").hide();
        
    });
    
    $('.offer-selected .select-options li:last-child').on('click', function () {
        $(".so").fadeIn();
    });
    
});

/* start products page put this to the js file after disting it*/
$(document).ready(function(){
    "use strict";
    $(".products .products-hidden").hide();
    $(".products .products-hidden .products-item").hide();
    
    $('.products .col-xs-3:first-child .product-choose').on('click', function () {
        $(".products .col-xs-3:first-child .product-choose").css("background", "#fff");
        $(".products .col-xs-3:last-child .product-choose").css("background", "none");
        $(".products .products-hidden.hide-new").fadeIn(1500);
        $(".products .products-hidden.hide-used").fadeOut(1500);
    });
    
    $('.products .col-xs-3:last-child .product-choose').on('click', function () {
        $(".products .col-xs-3:last-child .product-choose").css("background", "#fff");
        $(".products .col-xs-3:first-child .product-choose").css("background", "none");
        $(".products .products-hidden.hide-new").fadeOut(1500);
        $(".products .products-hidden.hide-used").fadeIn(1500);
    });
    
    
    $('.products .products-hidden.hide-new .owl-carousel .item').on('click', function () {
        $(".products .products-hidden.hide-new .products-item").fadeIn();
        $(".products .products-hidden.hide-used .products-item").fadeOut();
    });
    
    $('.products .products-hidden.hide-used .owl-carousel .item').on('click', function () {
        $(".products .products-hidden.hide-used .products-item").fadeIn();
        $(".products .products-hidden.hide-new .products-item").fadeOut();
    });
    
});

var owl = $('.product-carousel');
    owl.owlCarousel({
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        rtl:true,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:8
            }
        }
    });
/* end products page */

/* start events page put this to the js file after disting it*/
$(document).ready(function(){
    "use strict";
    $(".main-events .events .events-item").hide();
    $(".most-view.main-events .events .events-item").show();
    
    $('.main-events .events .events-choose .button-past').on('click', function () {
        $(".main-events .events .events-item").fadeIn();
    });

    $('.main-events .events .events-choose .button-today').on('click', function () {
        $(".main-events .events .events-item").fadeIn();
    });
    
    $('.main-events .events .events-choose .button-future').on('click', function () {
        $(".main-events .events .events-item").fadeIn();
    });
    
});


