$(document).ready(function() {
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".header-nav");
      $nav.toggleClass('header-nav-2', $(this).scrollTop() > $nav.height());
    });
  });
});

$(document).ready(function() {
    $('#dropbtn').on('mouseover', function() {
      $('#dropdownContent').removeClass("dropdown-content");
      $('#dropdownContent').addClass("dropdown-content2");
    });

    $('#dropdownContent').on('mouseout', function() {
      $('#dropdownContent').removeClass("dropdown-content2");
      $('#dropdownContent').addClass("dropdown-content");
    });
});
