function initMap() {
    var position = { lat: -34.8931605, lng: -56.0681885} 
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: position,
            zoom: 16
        });

        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: 'Local Carrasco'
        })

}
