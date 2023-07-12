$(document).ready(function () {
  const header = $(".header");
  const footer = $(".footer");

  const headerMenuModal = $(".header_menu_modal");
  const headerMenuContent = $(".header_menu_content");
  const menuOpenBtn = $(".header_menu_open_btn");
  const menuCloseBtn = $(".header_menu_close_btn");
  const loginBtn = $(".mb_login_btn");

  let isBodyClicked = false;

  function openMenu() {
    $(headerMenuModal).fadeIn().removeClass("fade-out").addClass("fade-in");
    $(headerMenuContent).removeClass("slide-out").addClass("slide-in");
    document.body.style.overflow = "hidden";
  }
  function closeMenu() {
    $(headerMenuModal).removeClass("fade-in").addClass("fade-out");
    $(headerMenuContent).removeClass("slide-in").addClass("slide-out");
    document.body.style.overflow = "visible";
    setTimeout(function () {
      $(headerMenuModal).fadeOut();
    }, 400);
  }

  // Open and close menu on mobile
  $(menuOpenBtn).on("click", openMenu);
  $(menuCloseBtn).on("click", closeMenu);
  $(loginBtn).on("click", closeMenu);

  $(headerMenuContent).on("click", function (e) {
    isBodyClicked = true;
  });
  $(headerMenuModal).on("click", function (e) {
    if (!isBodyClicked) {
      closeMenu();
    }
    isBodyClicked = false;
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

  // Toggle q&a modal
  const mainQAModal = $(".main_qa_modal");
  const mainQABody = $(".main_qa_body");
  const mainQABtn = $(".main_qa_btn");
  const mainQACloseBtn = $(".main_qa_close_btn");

  function openQAModal() {
    $(mainQAModal).fadeIn().removeClass("fade-out").addClass("fade-in");
    $(mainQABody).removeClass("slide-out").addClass("slide-in");
    document.body.style.overflow = "hidden";
  }

  function closeQAModal() {
    $(mainQAModal).removeClass("fade-in").addClass("fade-out");
    $(mainQABody).removeClass("slide-in").addClass("slide-out");
    document.body.style.overflow = "visible";
    setTimeout(function () {
      $(mainQAModal).fadeOut();
    }, 400);
  }

  $(mainQABody).on("click", function (e) {
    isBodyClicked = true;
  });
  $(mainQAModal).on("click", function (e) {
    if (!isBodyClicked) {
      closeQAModal();
    }
    isBodyClicked = false;
  });

  $(mainQABtn).on("click", openQAModal);

  $(mainQACloseBtn).on("click", closeQAModal);

  // Toggle Course modal
  const mainCourseBtn = $(".main_course_btn");
  const mainCourseModal = $(".main_course_modal");
  const mainCourseBody = $(".main_course_body");
  const mainCourseCloseBtn = $(".main_course_close_btn");

  function openCourseModal() {
    $(mainCourseModal).addClass("show");
    document.body.style.overflow = "hidden";
  }

  function closeCourseModal() {
    $(mainCourseModal).removeClass("show");
    document.body.style.overflow = "visible";
  }

  $(mainCourseBody).on("click", function (e) {
    isBodyClicked = true;
  });
  $(mainCourseModal).on("click", function (e) {
    if (!isBodyClicked) {
      closeCourseModal();
    }
    isBodyClicked = false;
  });

  $(mainCourseBtn).on("click", openCourseModal);
  $(mainCourseCloseBtn).on("click", closeCourseModal);

  // Toggle q&a button
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const footerPosition = footer.offset().top;
    const scrollHeight = $(window).scrollTop() + windowHeight;

    if (scrollHeight > footerPosition + 50) {
      mainQABtn.removeClass("show").on("transitionend", function () {
        $(this).css("display", "none");
      });
    } else {
      mainQABtn.addClass("show").css("display", "block");
    }
  });
});
