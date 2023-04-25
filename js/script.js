console.log("Work!");

$(".burger").click(function () {
  $(this).toggleClass("active");
  $("nav").slideToggle();
});

$(document).ready(function () {
  const owlCarousel = document.getElementById("owl");
  if (owlCarousel) {
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
        595: {
          items: 4,
        },
      },
    });
  }

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
  function scrollToElem(elem) {
    event.preventDefault();
    const target = document.querySelector(elem.hash);
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  }

  if (owlCarousel) {
    $("#owl-services").owlCarousel({
      loop: true,
      nav: false,
      items: 1,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
      },
    });
  }
});
