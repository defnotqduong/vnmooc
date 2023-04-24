$(document).ready(function () {
  var toggleFilterBtn = $(".toggle_filter_btn");

  var isShowFilter = false;

  function toggleFilter() {
    if (!isShowFilter) {
      isShowFilter = true;
      $(toggleFilterBtn).children("span:nth-child(1)").text("Ẩn bộ lọc");
    } else {
      isShowFilter = false;
      $(toggleFilterBtn).children("span:nth-child(1)").text("Hiện bộ lọc");
    }
  }

  toggleFilterBtn.on("click", toggleFilter);
});
