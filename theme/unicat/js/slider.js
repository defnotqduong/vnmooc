$(document).ready(function () {
  const SlideItem = $(".slide-university .slide-item");

  $(".slide-university").slick({
    slidesToShow: SlideItem.length - 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    draggable: false,
    prevArrow:
      "<button type='button' class='btn slick-prev pull-left d-none d-sm-block cursor-pointer'><i class='bi bi-arrow-left-circle-fill' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='btn slick-next pull-right d-none d-sm-block cursor-pointer'><i class='bi bi-arrow-right-circle-fill' aria-hidden='true'></i></button>",

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
  const SlideItem = $(".slide-partner .slide-item");

  $(".slide-partner").slick({
    slidesToShow: SlideItem.length - 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
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
