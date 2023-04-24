$(document).ready(function () {
  // const slideIn = [{ transform: "translateX(-280px)" }, { transform: "translateX(0)" }];
  // const newTiming = {
  //   duration: 400,
  //   iterations: Infinity,
  // };

  var header = $(".header");

  var headerMenuModal = $(".header_menu_modal");
  var headerMenuContent = $(".header_menu_content");
  var menuOpenBtn = $(".header_menu_open_btn");
  var menuCloseBtn = $(".header_menu_close_btn");

  function openMenu() {
    headerMenuModal.addClass("active");
    // headerMenuContent.animate(slideIn, newTiming);
  }
  function closeMenu() {
    headerMenuModal.removeClass("active");
  }

  // Open and close menu on mobile
  $(menuOpenBtn).on("click", openMenu);
  $(menuCloseBtn).on("click", closeMenu);
  $(".mb_login_btn").on("click", closeMenu);

  // Label Input
  $(".login_modal .form-input").focus(function () {
    $(this).parents(".form-group").addClass("focused");
  });

  $(".login_modal .form-input").blur(function () {
    var inputValue = $(this).val();
    if (inputValue == "") {
      $(this).parents(".form-group").removeClass("focused");
    }
  });

  // Reset input when modal closed
  $(".modal").on("hidden.bs.modal", function () {
    $(this).find("form").trigger("reset");

    $(".login_modal .form-input").each(function () {
      $(this).removeClass("filled");
      $(this).parents(".form-group").removeClass("focused");
    });
  });
});
