   

   // Initializing the map

     var map, infoWindow;
       function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
         map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru

        });
        

      }
      	// Code block that handles the loading of the map.
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?

                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }


      // Function to run the map and expected location, if there are no errors

      function locate(){
      	navigator.geolocation.getCurrentPosition(onSuccess, onError);
      }


      //If the map has all the needed parameters it will load the location
      // @return latitude and longitude
      //@param position
      function onSuccess(position) {

    var element = document.getElementById('geolocation');

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
     var pos = {lat: latitude, lng: longitude};


     // Red pin marker
    var marker = new google.maps.Marker({
          position: pos,
          map: map

        });
    map.setCenter(pos);

}

//Handles the errors.
function onError(error) {
    alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}


