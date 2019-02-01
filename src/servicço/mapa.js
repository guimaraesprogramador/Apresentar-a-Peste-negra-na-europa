let initialCoordinates = [-20.1515, -44.2011]; // brumandinho
//                          latitute e longitute
var initialZoomLevel = 13;

// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView(initialCoordinates, initialZoomLevel);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; Contribuidores do <a href="http://osm.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var grupo = [];
// corrigir mapa de brumandinho
d3.csv("/home/kevin/Downloads/mapa-de-kernel-brumandinho/programa/3109006.csv").then(function(data){
    //falta corrigir os datos dos pontos 
  
  for(var i = 0;i<data.length;i++){
grupo.push(data[i].area);
  }
//
})
console.log(grupo);
var coordenadas = [-20.1515,grupo[1]];
L.marker([-20.1515,grupo[1]]).addTo(map);

