$(function () {
  $(document).scroll(function () {
    var $nav = $(".header-nav");
    var $drop = $(".drop-down-menu")
    $nav.toggleClass('header-nav-2', $(this).scrollTop() > $nav.height());
    $drop.toggleClass('drop-down-menu-2', $(this).scrollTop() > $nav.height());
  });
});

$(document).ready(function() {
  if(document.title == "Harmonydiet") {
    $('#dropDownMenu').addClass("drop-down-menu")
  } else {
    $('#dropDownMenu').addClass("drop-down-menu-2")
  }

   var map = L.map('map').setView([51.1110390,17.0347980], 18);

   L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);

   var marker = L.marker([51.1110390,17.0347980]).addTo(map);

   var popup = marker.bindPopup('Harmonydiet');
   popup.openPopup();

   map.scrollWheelZoom.disable();
    this.map.on('click', () => { this.map.scrollWheelZoom.enable();});
    this.map.on('mouseout', () => { this.map.scrollWheelZoom.disable();});
});
