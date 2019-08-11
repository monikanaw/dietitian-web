$(function () {
  $(document).scroll(function () {
    var $nav = $(".header-nav");
    var $drop = $(".drop-down-menu")
    $nav.toggleClass('header-nav-2', $(this).scrollTop() > $nav.height());
    $drop.toggleClass('drop-down-menu-2', $(this).scrollTop() > $nav.height());
  });
});

$(document).ready(function() {
  $("#name").focus();
  $("#form").submit(function(event){
      event.preventDefault();
      $('#form').find('input, textarea').val('');
  });

  if(document.title == "Harmonydiet") {
    $('#dropDownMenu').addClass("drop-down-menu")
    $('body').css('background', '#fff');
  }
  else if(document.title == "Harmonydiet- Contact") {
    $('#dropDownMenu').addClass("drop-down-menu-2")
    $('body').css('background', '#fff');
  }else{
    $('#dropDownMenu').addClass("drop-down-menu-2")
    $('body').css('background', '#eeecec');
  }

  $('#hoverDropDownMenu').on('click touchstart',function() {
    $('.hidden-drop-down-menu').toggleClass('show-drop-down-menu');
  });

   var map = L.map('map').setView([51.1110390,17.0347980], 18);

   L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);

   var marker = L.marker([51.1110390,17.0347980]).addTo(map);

   var popup = marker.bindPopup('Harmonydiet');
   popup.openPopup();

   map.scrollWheelZoom.disable();
    this.map.on('click touchstart', () => { this.map.scrollWheelZoom.enable();});
    this.map.on('mouseout', () => { this.map.scrollWheelZoom.disable();});
});
