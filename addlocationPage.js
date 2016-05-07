function initMap(){
    var mapRef = document.getElementById("map");
    var geocoder = new google.maps.Geocoder;
    var myCenter = new google.maps.LatLng(3.065, 101.6008);
    var mapProp = {
        zoom: 15,
        center: myCenter
    };
    var map = new google.maps.Map(mapRef, mapProp);
    var marker=new google.maps.Marker({
        position:myCenter,
        animation:google.maps.Animation.BOUNCE
    });
    marker.setMap(map);
    document.getElementById('address').addEventListener('input', function() {
          geocodeAddress(geocoder, map);
        });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address }, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location,
          animation:google.maps.Animation.BOUNCE
      });
    }
  });
}
