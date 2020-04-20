var queryUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCehscpkC6zkVEWlEvPL-Ja64zJxeXMGmU&callback=initMap"
var city = ".expand"

function initMap() {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    var city = new google.maps.LatLng("city");
    var mapOptions = {
        zoom: 7,
        center: city
    }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsRenderer.setMap(map);
}

function calcRoute() {
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    var request = {
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
    };
    directionsService.route(request, function (result, status) {
        if (status == 'OK') {
            directionsRenderer.setDirections(result);
        }
    });
}