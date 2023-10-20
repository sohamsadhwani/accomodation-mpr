"use strict";


jQuery(document).ready(function () {

    $(window).on('load', function() {
        		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});
    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/



    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

    // $.localScroll();



    /*---------------------------------------------*
     * Counter 
     ---------------------------------------------*/

//    $('.statistic-counter').counterUp({
//        delay: 10,
//        time: 2000
//    });

//    $('.statistic').counterUp({
//        delay: 10,
//        time: 2000
 //   });




    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

        var wow = new WOW({
            mobile: false // trigger animations on mobile devices (default is true)
        });
        wow.init();


    /* ---------------------------------------------------------------------
     Carousel
     ---------------------------------------------------------------------= */

    $('#myCarousel').owlCarousel({
        items:1,
        rewind: true,
        autoplay:true,
        dots:false,
        responsiveClass: true,
        margin:30,
        nav: false,
        smartSpeed:450,
    });

    $( ".owl-prev").html(`
        <button class="owl_prev btn btn-pink-red rounded-circle m-0 " style='position:absolute;left:40%;'>
            <i class="fa fa-chevron-left fa-lg "></i>
        </button>`);

    $( ".owl-next").html(`
        <button class="owl_next btn btn-pink-red rounded-circle m-0 " style='position:absolute;right:40%;'>
            <i class="fa fa-chevron-right fa-lg "></i>
        </button>`);



	
//	$('.chart').easyPieChart({
//		animate: 2000,
//           scaleColor: false,
//            lineWidth: 10,
//            lineCap: 'square',
//            size: 130,
//            trackColor: false,
//           barColor: '#498af3',
//            onStep: function (from, to, percent) {
//                $(this.el).find('.percent').text(Math.round(percent));
//            }
//	});
	













	
	    
//$('#test').mixItUp({
//    animation: {
//      animateResizeContainer: false,
//      effects: 'fade rotateX(-45deg) translateY(-10%)'
//   }
// });

// main-menu-scroll

	jQuery(window).scroll(function () {
	  var top = jQuery(document).scrollTop();
		var height = 300;
	  //alert(batas);
	  
	  if (top > height) {
		jQuery('.navbar-fixed-top').addClass('menu-scroll');
	  } else {
	   jQuery('.navbar-fixed-top').removeClass('menu-scroll');
	  }
	});	 
	
// scroll Up

    $(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });	
   

    //End
});
