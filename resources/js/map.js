function initMap() {
  //координаты Минска
  var lat = 53.9045398;
  var lng = 27.5615244;


  var centerLatLng = new google.maps.LatLng(lat, lng);
  var mapOptions = {
    center: centerLatLng,
    zoom: 13,
    scrollwheel: false
  };

  var map = new google.maps.Map(document.getElementById("map-container"), mapOptions);

  // Добавляем маркер
  addMarker(map, 53.93365545, 27.6384287);
  addMarker(map, 53.89563992, 27.53259659);


  google.maps.event.addDomListener(window, "load", initMap);
}


function addMarker(map, marker_lat, marker_lng) {
  var image = "resources/img/marker.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(marker_lat, marker_lng), // Координаты расположения маркера. В данном случае координаты нашего маркера совпадают с центром карты, но разумеется нам никто не мешает создать отдельную переменную и туда поместить другие координаты.
    map: map,
    icon: image
  });
}
