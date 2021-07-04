$(document).ready(function(){  
  $('#default-demo').slickLightbox({
    itemSelector: '.main-img',
    background: 'rgba(0, 0, 0, .7)',    
    arrows: true,
    caption: 'caption',
    next: '<i class="bi bi-chevron-left"></i>'
  });
});

$('.slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  centerMode: true,
  centerPadding: '',
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToScroll: 1,
  responsive: [
      {
        breakpoint: 1200,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        },
      },
      {
          breakpoint: 480,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1
          }
      }
  ]
});
$('.slider-2').slick({
  dots: true,
  arrows: false,
  initialSlide: 3,
  infinite: true,
  slidesToShow: 6,
  autoplay: true,
  autoplaySpeed: 5000,
  adaptiveHeight: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

$(document).ready(function () 
{
  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $(".filter").show("1000");
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  });


 

  $(document).ready(function () {
    $(".filter-button").click(function () {
      $(".filter-button").removeClass("active");
      $(this).addClass("active");
    });
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".sticky-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});





$(".open-popup-link").magnificPopup({
  type: "inline",
  midClick: true,
  mainClass: "mfp-fade-in",
});
$(document).ready(function () {
  /* Check width on page load*/
  if ($(window).width() < 769) {
    $("nav ul").addClass("mfp-hide");
  } else {
  }
});

$(window).resize(function () {
  /*If browser resized, check width again */
  if ($(window).width() < 769) {
    $("nav ul").addClass("mfp-hide");
  } else {
    $("nav ul").removeClass("mfp-hide");
  }
});
AOS.init({
  offset: 400,
  duration: 1000,
});

$(".counter").counterUp({
  delay: 10,
  mirror: false,
  easing: "ease-in-out",
  time: 1000,
})
;
