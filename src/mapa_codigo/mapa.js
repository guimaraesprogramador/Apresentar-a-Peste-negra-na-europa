
class mapa {
    map = null;
    carregar = true;
    constructor(){
        let initialCoordinates = [43.2945782,5.0843522]; // mapa do Brasil
        //latitude e a longitude
     var initialZoomLevel = 4;
// create a map in the "map" div, set the view to a given place and zoom
    this.map = L.map('map').setView(initialCoordinates, initialZoomLevel);
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
if(m.carregar == true){
    m.carregar = false;
    m.inicial();
    s.mudar_voz([m.carregar])
}
self.addEventListener("message",event=>{
    var tipo = event.data[0];
    switch(tipo){
        case "abertura":
            m.ponto_inicial(m.lant,m.long);
            postMessage({resposta:"primeira_parte_compelta"});
        break;
    }
})
