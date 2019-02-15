let initialCoordinates = [-20.1515, -44.2011]; // brumandinho
//                       latitude e a longitude
var initialZoomLevel = 13;

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
/* teve uma ideia de fazer uma reconhecimento da area
de brumadinho com os Dados do Sicar - Sistema Nacional de Cadastro Ambiental Rural
,o codigo precisa ser trabalhado muito para marcar as localização de latitude e 
a longitude de cada area mas estou com problema em calcular essas posições, se estivem com voltade 
pode ser um grande ajuda então obrigado pela  oportunidade de ajuda vocês.
 
*/
var grupo = [];
d3.csv("../programa/Homicdio-Consumado.csv").then(function(data){ 
  
  /*for(var i = 0;i<data.length;i++){
grupo.push(data[i].area);
  }*/
  console.log(data);
//
})
