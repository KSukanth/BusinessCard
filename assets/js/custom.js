/*------------------------------------- Slider-------------------------------------*/
$('.services-sec-wrap').slick({
  dots: true,
  arrows: false,
  infinite: true,
  autoplay:true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  slidesToScroll: 1,
  responsive: [
  {
    breakpoint: 370,
    settings: {
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
       centerMode:false,
    }
  }
  ]
});

$('.product-bottom-sec, .portfolio-bottom').slick({
  dots: false,
  arrows: false,
  infinite:false,
  autoplay:true,
  speed: 300,
  slidesToShow: 1.5,
  slidesToScroll: 1,
   responsive: [
  {
    breakpoint: 370,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }
  ]
});

$('.client-logo-wrap').slick({
  dots: true,
  arrows: false,
  infinite:true,
  autoplay:true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
   responsive: [
  {
    breakpoint: 320,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }
  ]
});

/*------------------------------------- Preloader -------------------------------------*/
$(window).on("load", function() {
  $('.preloader').delay(1000).fadeOut(800); 
});