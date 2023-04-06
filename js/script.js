console.log('Work!');

$('.burger').click(function() {
    $(this).toggleClass('active')
    $('nav').slideToggle()
});
