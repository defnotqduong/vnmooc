$(document).ready(function () {
  $(".slide-university").slick({
    slidesToShow: 6,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    draggable: false,
    prevArrow:
      "<button type='button' class='slick-prev pull-left d-none d-sm-block cursor-pointer'><i class='bi bi-arrow-left-circle-fill' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right d-none d-sm-block cursor-pointer'><i class='bi bi-arrow-right-circle-fill' aria-hidden='true'></i></button>",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".slide-partner").slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    draggable: false,
    prevArrow:
      "<button type='button' class='slick-prev pull-left cursor-pointer d-none'><i class='bi bi-arrow-left-circle-fill' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right cursor-pointer d-none'><i class='bi bi-arrow-right-circle-fill' aria-hidden='true'></i></button>",

    dots: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
