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

    function up() {
        $('#up').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
                || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    }

    function but_up() {
        if ( $(window).scrollTop() > 100 ) {
            $("#up").css('opacity',1);
        } else {
            $("#up").css('opacity',0);
        }
    }

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


    //up();
    //but_up();
    $(window).scroll(function() {
        //but_up();
    });


});