let initialCoordinates = [-18.512178, -44.555031]; // brumandinho
//                       latitude e a longitude
var initialZoomLevel = 8;

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
let grupo2 = [];
d3.json("../programa/municipios.json").then(function(resp){
  for(var i = 0;i<resp.length;i++){
    grupo2.push(resp[i]);
  }

});
let grupo = [];
d3.csv("../programa/Homicdio-Consumado.csv").then(function(data){ 
  for(var i = 0;i<data.length;i++){
      grupo.push(data[i]);
    

  }
//
})
grupo2.forEach(function(value,index,array){
  console.log(index + value.latitude);
  L.marker([value.latitude,value.longitude]).addTo(map).bindPopup("ok em teste");

})
/*for(var i = 0;i<grupo2.length;i++){
  
}*/

