function initMap() {
  var myLatLng = {lat: 49.576656, lng: 25.624144};

  var map = new google.maps.Map(document.getElementById('gMap'), {
    zoom: 15,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'СТЕН - Будматеріали гуртом та в роздріб'
  });

  // To add the marker to the map, call setMap();
  marker.setMap(map);
}