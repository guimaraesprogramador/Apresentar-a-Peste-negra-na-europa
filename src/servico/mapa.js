let initialCoordinates = [-19.8157, -43.9542]; // estado de minas gerais
//                       latitude e a longitude
var initialZoomLevel = 5;

// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView(initialCoordinates, initialZoomLevel);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; Contribuidores do <a href="http://osm.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var poup = L.popup();
function marcar(e){
  poup.setLatLng(e.latlng)
  .setContent("latitude e a longitude " + e.latlng.toString())
        .openOn(map);
  var marcador = L.marker(e.latlng).addTo(map);
  marcador.bindPopup(e.latlng.toString());

}
map.on('click', marcar);
