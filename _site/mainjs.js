$(document).ready(function() {
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".header-nav");
      $nav.toggleClass('header-nav-2', $(this).scrollTop() > $nav.height());
    });
  });
});
