//            codigo1
//            codigo1
//            codigo1
  var rendererOptions = {
  draggable: false
  };
  var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
  var directionsService = new google.maps.DirectionsService();
  var map;
  var destino = new google.maps.LatLng(18.0008621,-92.9459908);

  function initialize() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 17.989456, lng: -92.9475061},
        zoom: 15
      });

    var infoWindow = new google.maps.InfoWindow({map: map});

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

        calcRoute(pos.lat, pos.lng);

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        map.setCenter(pos);
      },
      function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    }
    else {
    // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
                    'Error: The Geolocation service failed.' :
                    'Error: Your browser doesn\'t support geolocation.');
                  }
    directionsDisplay.setMap(map);
  }


  function calcRoute(lat, lng) {

    var origen = new google.maps.LatLng(lat, lng);

    var request = {
      origin: origen,
      destination: destino,
      travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);



//            codigo2
//            codigo2
//            codigo2
//            codigo2
//   $(document).ready(function(){
//     var corvo = false, attano = true;
//     var m1 = null, m2 = null;
//     var m1pos, m2pos;
//     var sourceIcon = 's.png';
//     var strokeColor = '#131540';
//     var strokeOpacity = 0.6;
//     var strokeWeight = 6;
//
//     var mapObj = new GMaps({
//       el: '#map',
//       lat: 17.989456,
//       lng: -92.9475061,
//       zoom: 17,
//       click: function(e) {
//         if (corvo) {
//           mapObj.removeMarker((attano) ? m1 : m2);
//         }
//
//         if (attano) {
//           m1 = mapObj.addMarker({
//             lat: e.latLng.lat(),
//             lng: e.latLng.lng(),
//             icon: sourceIcon,
//             zoom: 17
//           });
//           m1pos = m1.getPosition();
//         } else {
//           m2 = mapObj.addMarker({
//             lat: 17.999316,
//             lng: -92.9411647,
//             zoom: 17
//           });
//           m2pos = m2.getPosition();
//         }
//         // If two markers have been placed
//         if (m1 !== null && m2 !== null) {
//           corvo = true;
//           $('#trace_route').prop('disabled', false);
//         }
//         attano = !attano;
//       }
//     });
//
//     $('#loc_button').click(function(){
//       GMaps.geolocate({
//         success: function(position) {
//           mapObj.setCenter(position.coords.latitude, position.coords.longitude);
//           mapObj.setZoom(17);
//         },
//         error: function(error) {
//           alert('Geolocation failed. Please try again or enter location manually.');
//         },
//         not_supported: function() {
//           alert("Your browser does not support geolocation");
//         }
//       });
//     });
//
//     $('#trace_route').click(function(){
//       // Remove previous route
//       mapObj.removePolylines();
//       mapObj.getRoutes({
//         origin: [m1pos.lat(), m1pos.lng()],
//         destination: [m2pos.lat(), m2pos.lng()],
//         travelMode: 'driving',
//         callback: function(result) {
//           var path = [];
//           // Convert object path to array of coordinates
//           $.each(result[0].overview_path, function(i, coord) {
//             path.push([coord.lat(), coord.lng()]);
//           });
//           mapObj.drawPolyline({
//             path: path,
//             strokeColor: strokeColor,
//             strokeOpacity: strokeOpacity,
//             strokeWeight: strokeWeight
//           });
//           getStaticMap(path);
//           // Empty `result` array
//           result.length = 0;
//         }
//       });
//     });
// });
