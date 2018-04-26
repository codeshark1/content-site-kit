jQuery(document).ready(function($){

    function navigation_show(button, menu) {
        $(menu).hide();
        $(button).click(function(){
            if ( $(menu).is(':visible')){
                $(menu).slideUp();
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
                $(menu).slideDown();
            }
        });
    }

    navigation_show('#nav-toggle','.nav-menu-mob-wrapper');

    function menu_nested(menu_id) {
        $(menu_id).find('ul').hide();
        $(menu_id).find('.menu-item--has-children a').click(function(e){
            e.preventDefault();
            $(this).siblings('.sub-menu').slideDown();
            if ( $(this).parent().hasClass('menu-item--active') ) {
                $(this).siblings('.sub-menu').stop().slideUp();
                $(this).parent().removeClass('menu-item--active');
            } else {
                $(this).parent().addClass('menu-item--active').siblings('.menu-item--active').removeClass('expanded').find('.sub-menu').stop().slideUp();
                $(this).siblings('.sub-menu').stop().slideDown();
            }
        });
    }
    menu_nested('.menu-categs');



    /* LISTING VIEW---*/
    function unsquare() {
        $('#card-list')
            .removeClass('card-list-square')
            .find('.card-list-item-square')
            .removeClass('card-list-item-square')
            .addClass('card-list-item');
        $('#view-type-list').addClass('active').siblings().removeClass('active');
    }

    function view_type() {
        $('#view-type-list').click(function(e){
            e.preventDefault();
            unsquare();
        });

        $('#view-type-square').click(function(e){
            e.preventDefault();
            $(this).addClass('active').siblings().removeClass('active');
            $('#card-list')
                .addClass('card-list-square')
                .find('.card-list-item')
                .removeClass('card-list-item')
                .addClass('card-list-item-square');
        });        
    }
    view_type();

    if( $(window).width() < 992) {
        unsquare();
    }

    $(window).resize(function(){
        if( $(window).width() < 992) {
            unsquare();
        }        
    });
    /* --LISTING VIEW*/


    /*FILTER--*/
    function filter_toggle() {
        $('#filter-extra').hide();
        $('#filter-extra-btn').click(function(){
            if ( $('#filter-extra').is(':visible')){
                $('#filter-extra').slideUp();
                $(this)
                    .removeClass('active')
                    .find('span')
                    .text('Показать Весь Фильтр')
                ;
            } else {
                $('#filter-extra').slideDown();
                $(this).addClass('active')
                    .find('span')
                    .text('Скрыть Весь Фильтр')
                ;
            }
        });
    }
    
    filter_toggle();
    /*FILTER--*/


    /*CAROUSEL*/

    $('#carousel').slick({
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      prevArrow: "<button type='button' type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
      nextArrow: "<button type='button' type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


    /*BANNER*/
    function setPadding() {
        if ( $(window).width() > 992) {
            var spaceWidth = $('.container').offset();
            var bannerWidth = $('.col-ad').width();
            $('.col-content').css('padding-left', (bannerWidth - spaceWidth.left));
            $('.tab-bar').css('left', bannerWidth - spaceWidth.left + 15);
        } else {
            $('.col-content').css('padding-left', 0);
            $('.tab-bar').css('left', 15);
        }
    }
    
    setPadding();

    $(window).resize(function(){
        setPadding();
    });


    $(document).on('scroll resize', function() {
        var distanceFromBottom = Math.floor($(document).height() - $(document).scrollTop() - $(window).height());
        
        if ( $(window).width() > 992) {
            if(distanceFromBottom < $('#footer').outerHeight()) {
                $('.col-ad').css('bottom', $('#footer').outerHeight() + 40)
            } else {
                $('.col-ad').css('bottom', 0 )
            }
        }

    });   











    /*RANGE SLIDER*/
    var slider_1 = document.getElementById('slider-range-1');
    var slider_2 = document.getElementById('slider-range-2');
    var valuesDivs_1 = [
        document.getElementById('price-min'),
        document.getElementById('price-max')
    ];
    var valuesDivs_2 = [
        document.getElementById('invest-min'),
        document.getElementById('invest-max')
    ];

    noUiSlider.create(slider_1, {
        start: [10000, 500000],
        connect: true,
        step: 1000,
        range: {
            'min': 1000,
            'max': 1000000
        },
        format: wNumb({
            decimals: 0,
            thousand: ','
        })
    });

    noUiSlider.create(slider_2, {
        start: [10000, 500000],
        connect: true,
        step: 1000,
        range: {
            'min': 1000,
            'max': 1000000
        },
        format: wNumb({
            decimals: 0,
            thousand: ','
        })
    });

    slider_1.noUiSlider.on('update', function( values, handle ) {
        valuesDivs_1[handle].value = values[handle];
    });

    slider_2.noUiSlider.on('update', function( values, handle ) {
        valuesDivs_2[handle].value = values[handle];
    });
});