$(document).ready(function () {
  const header = $(".header");

  const headerMenuModal = $(".header_menu_modal");
  const headerMenuContent = $(".header_menu_content");
  const menuOpenBtn = $(".header_menu_open_btn");
  const menuCloseBtn = $(".header_menu_close_btn");
  const loginBtn = $(".mb_login_btn");

  let isHeaderMenuContentClicked = false;

  function openMenu() {
    headerMenuModal.addClass("show");
  }
  function closeMenu() {
    headerMenuModal.removeClass("show");
  }

  // Open and close menu on mobile
  $(menuOpenBtn).on("click", openMenu);
  $(menuCloseBtn).on("click", closeMenu);
  $(loginBtn).on("click", closeMenu);

  $(headerMenuContent).on("click", function (e) {
    isHeaderMenuContentClicked = true;
  });
  $(headerMenuModal).on("click", function (e) {
    if (!isHeaderMenuContentClicked) {
      closeMenu();
    }
    isHeaderMenuContentClicked = false;
  });

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

  // q&a modal
  const mainQAModal = $(".main_qa_modal");
  const mainQABody = $(".main_qa_body");
  const mainQABtn = $(".main_qa_btn");
  const mainQACloseBtn = $(".main_qa_close_btn");

  let isQABodyClicked = false;

  function openQAModal() {
    $(mainQAModal).fadeIn().removeClass("fade-out").addClass("fade-in");
    $(mainQABody).removeClass("slide-out").addClass("slide-in");
  }

  function closeQAModal() {
    $(mainQAModal).removeClass("fade-in").addClass("fade-out");
    $(mainQABody).removeClass("slide-in").addClass("slide-out");
    setTimeout(function () {
      $(mainQAModal).fadeOut();
    }, 500);
  }

  $(mainQABody).on("click", function (e) {
    isQABodyClicked = true;
  });
  $(mainQAModal).on("click", function (e) {
    if (!isQABodyClicked) {
      closeQAModal();
    }
    isQABodyClicked = false;
  });

  $(mainQABtn).on("click", openQAModal);

  $(mainQACloseBtn).on("click", closeQAModal);

  // Course modal
  const mainCourseBtn = $(".main_course_btn");
  const mainCourseModal = $(".main_course_modal");
  const mainCourseBody = $(".main_course_body");
  const mainCourseCloseBtn = $(".main_course_close_btn");

  let isCourseBodyClicked = false;

  function openCourseModal() {
    $(mainCourseModal).addClass("show");
  }

  function closeCourseModal() {
    $(mainCourseModal).removeClass("show");
  }

  $(mainCourseBody).on("click", function (e) {
    isCourseBodyClicked = true;
  });
  $(mainCourseModal).on("click", function (e) {
    if (!isCourseBodyClicked) {
      closeCourseModal();
    }
    isCourseBodyClicked = false;
  });

  $(mainCourseBtn).on("click", openCourseModal);
  $(mainCourseCloseBtn).on("click", closeCourseModal);
});
