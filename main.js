$('.fr__slider-content').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll:1,
  prevArrow: "<img src='../images/frSlider/right-arrow1.svg' class='prev__fr' alt='1'>",
  nextArrow: "<img src='../images/frSlider/Vector2.svg'class='next__fr' alt='2'>",
  responsive: [
    {
      breakpoint: 1245,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
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
$('.production__slider').slick({
  dots: false,  
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: "<img src='../images/frSlider/right-arrow1.svg' class='prev__production' alt='1'>",
  nextArrow: "<img src='../images/frSlider/Vector2.svg'class='next__production' alt='2'>",
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
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
$(document).ready(function() {
  $('.menu-burger__header').click(function(){
      $('.menu-burger__header').toggleClass('open-menu');
      $('.header__nav').toggleClass('open-menu');
  });
});







// window.onscroll = function showHeader () {
//   var header__navigation = document.querySelector('.header__navigation');
//   if(window.pageYOffset > 200){
//     header__navigation.classList.add('header__fixxed');
//   }
// }
