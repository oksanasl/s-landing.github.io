// function initializeMapMarker() {
//   var LatLng = {lat: 49.576656, lng: 25.624144};
//
//   var mapProp = {
//     center:new google.maps.LatLng(49.576656, 25.624144),
//     zoom:15,
//     scrollwheel: false,
//     mapTypeId:google.maps.MapTypeId.ROADMAP
//   };
//   var map=new google.maps.Map(document.getElementById("Map"),mapProp);
//
//   var marker = new google.maps.Marker({
//     position: new google.maps.LatLng(49.576656, 25.624144),
//     map: map,
//     title: "СТЕН - Будматеріали гуртом та в роздріб"
//   });
// }
// google.maps.event.addDomListener(window, "load", initialize);

// function CustomMarker(latlng, map) {
//   this.latlng = latlng;
//   this.setMap(map);
// }
// CustomMarker.prototype = new google.maps.OverlayView();

// function addMarker () {
//
//   var marker = new google.maps.Marker(document.getElementById("Map")({
//     position: new google.maps.LatLng(49.576656, 25.624144),
//   });
//
//   marker.setMap(map);
// }