console.log('Work!');

$('.burger').click(function() {
    $(this).toggleClass('active')
    $('nav').slideToggle()
});

// $(document).ready(function(){
//     $('#slider_about').slick({
//         infinite: true,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         dots: true,
//     });
//   });
   
//   $(document).ready(function(){
//     $('.owl-carousel').owlCarousel({
//         loop:true,
//         margin:10,
//         nav:true,
//         responsive:{
//             0:{
//                 items:1
//             },
//             600:{
//                 items:3
//             },
//             1000:{
//                 items:4
//             }
//         }
//     })
//     });

$(document).ready(function(){
    $('#owl').owlCarousel({
      loop: true,
      nav: false,
      margin: 40,
      items: 4,
    });
  });