/**

Florian Rainer
Buero Flo

hallo@bueroflo.com
http://www.bueroflo.com

Ö 0043 664 377 84 31
D 0049 152 294 963 44

**/

jQuery(window).on('load', function() {


    // HIDE PRELAODER
    $(".preloader").addClass("preloader-hidden");

    // SHOW/ANIMATE ANIMATION CONTAINER
    setTimeout(function(){

        $(".hero .animation-container").each(function(){

            var e = $(this);

            setTimeout(function(){

                e.addClass("run-animation");

            }, e.data("animation-delay") );

        });

    }, 900 );


});


jQuery(document).ready(function($) {
	"use strict";


    $(window).on('load', function() {

        // HIDE PRELAODER
        $(".preloader").addClass("preloader-hidden");

        // SHOW/ANIMATE ANIMATION CONTAINER
        setTimeout(function(){

            $(".hero .animation-container").each(function(){

                var e = $(this);

                setTimeout(function(){

                    e.addClass("run-animation");

                }, e.data("animation-delay") );

            });

        }, 900 );

    });


    // INIT PARALLAX PLUGIN
    $(".hero .background-content.parallax-on").parallax({
        scalarX: 24,
        scalarY: 15,
        frictionX: 0.1,
        frictionY: 0.1,
    });


    //OPEN POPUP SEQUENCE
    $(".js-open-popup").click(function(){
        $(".popup").addClass("show");
        $(".popup").append('<div class="close-popup backface"></div>');
    });

    // CLOSE POPUP SEQUENCE
    $(document).on('click', '.close-popup', function(){

        $(".popup").removeClass("show");
        $(".popup .backface").remove();

    });


    // AJAX SUBSCRIBE FORM
    // $('.subscribe-form').submit(function() {
    //
    //     var postdata = $('.subscribe-form').serialize();
    //
    //     $.ajax({
    //
    //         type: 'POST',
    //         url: 'daten/php/subscribe.php',
    //         data: postdata,
    //         dataType: 'json',
    //         success: function(json) {
    //
    //             $('.subscribe-form').removeClass("form-error");
    //
    //             if(json.valid === 0) {
    //
    //                 $('.subscribe-form').addClass("form-error");
    //
    //             } else {
    //
    //                 $('.subscribe-form').addClass("form-success");
    //                 $('.subscribe-form input,.subscribe-form button').val('').prop('disabled', true);
    //
    //             }
    //
    //         }
    //
    //     });
    //
    //     return false;
    //
    // });


});
