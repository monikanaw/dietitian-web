$(document).ready(function() {
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".header-nav");
      var $drop = $(".drop-down-menu")
      $nav.toggleClass('header-nav-2', $(this).scrollTop() > $nav.height());
      $drop.toggleClass('drop-down-menu-2', $(this).scrollTop() > $nav.height());
    });
  });

    map = new OpenLayers.Map("mapdiv");
    map.addLayer(new OpenLayers.Layer.OSM());

    var lonLat = new OpenLayers.LonLat(  17.0347980 , 51.1110390 )
          .transform(
            new OpenLayers.Projection("EPSG:4326"),
            map.getProjectionObject()
          );
    var zoom=18;

    var markers = new OpenLayers.Layer.Markers( "Markers" );
    map.addLayer(markers);

    markers.addMarker(new OpenLayers.Marker(lonLat));
    map.setCenter (lonLat, zoom);
});
