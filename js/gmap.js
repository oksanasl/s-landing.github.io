function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(49.576656, 25.624144), 
    zoom:15,
    scrollwheel: false,
	mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(49.576656, 25.624144),
    map: map,
    title: 'СТЕН - Будматеріали гуртом та в роздріб'
  });
}
google.maps.event.addDomListener(window, 'load', initialize);