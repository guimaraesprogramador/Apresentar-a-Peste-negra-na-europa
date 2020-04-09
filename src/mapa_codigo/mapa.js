
class mapa {
    map = null;
    lant = 0;
    long = 0;
    constructor(){
        this.lant = exibir.lantitude;
        this.long = exibir.longitude;
        let initialCoordinates = [this.lant,this.long]; // mapa do Brasil
        //latitude e a longitude
     var initialZoomLevel = 4;
// create a map in the "map" div, set the view to a given place and zoom
    this.map = L.map('map').setView(initialCoordinates, initialZoomLevel);
    console.log(this.map);
    }
    inicial(){
// add an OpenStreetMap tile layer
     L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
         attribution: '&copy; Contribuidores do <a href="http://osm.org/copyright">OpenStreetMap</a>'
     }).addTo(this.map);
   
    }
    ponto_inicial(lantitude,longitude){
      var latlng =  L.latLng(lantitude,longitude);
        L.circleMarker(latlng,{
            color:"red",
            fillColor: "#f03",
          fillOpacity: 0.5,
          radius: 20
        }).addTo(this.map);
    }
    circle(lantitude,longitude){

    }
}
const m = new mapa();
m.inicial();
function exibição_circulos(tipo){
var booleano = true;

    switch(tipo){
        case "exbir circulos  parte I":
            m.ponto_inicial(m.lant,m.long);
        return  booleano =  false;
    }
}
