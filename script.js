   
  
// function load(){
// 	 navigator.geolocation.getCurrentPosition(onSuccess, onError);

// }
   
     var map, infoWindow;
       function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
         map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru

        });
        

      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?

                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

      

      function locate(){
      	navigator.geolocation.getCurrentPosition(onSuccess, onError);
      }

      function onSuccess(position) {

    var element = document.getElementById('geolocation');

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
     var pos = {lat: latitude, lng: longitude};

    var marker = new google.maps.Marker({
          position: pos,
          map: map

        });
    map.setCenter(pos);

}

function onError(error) {
    alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}


