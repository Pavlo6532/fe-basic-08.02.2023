console.log("Work!");

$(".burger").click(function () {
  $(this).toggleClass("active");
  $("nav").slideToggle();
});

$(document).ready(function () {
  $("#owl").owlCarousel({
    loop: true,
    nav: false,
    margin: 40,
    items: 4,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        dotsEach: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 4,
      },
    },
  });
});
$(".modal").click(function () {
  $(".modal-wrapper").addClass("active");
});
$(".modal-window .close, .modal-wrapper").click(function (event) {
  console.log(this);
  console.log(event.target);
  if (this === event.target) {
    console.log("Our target");
    $(".modal-wrapper").removeClass("active");
  }
});
