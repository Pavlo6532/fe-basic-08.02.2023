console.log('Work!');

$('.burger').click(function() {
    $(this).toggleClass('active')
    $('nav').slideToggle()
});

$(document).ready(function(){
    $('#slider_about').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
    });
  });
   
 