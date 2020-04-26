var map = null;
class mapa {
   estado= true;
   constructor(){
}
   inicial(){
        let initialCoordinates = [43.2945782, 5.0843522]; // mapa do Brasil
        //latitude e a longitude
     var initialZoomLevel = 4;
// create a map in the "map" div, set the view to a given place and zoom
    this.map = new L.Map("map");
    this.map.setView(initialCoordinates, initialZoomLevel);
// add an OpenStreetMap tile layer
     L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
         attribution: '&copy; Contribuidores do <a href="http://osm.org/copyright">OpenStreetMap</a>'
     }).addTo(this.map);
     m.estado = false;
     s.mudar_voz([m.estado])
    }
    ponto_inicial(latitude,longitude){
    var circulo =  L.circle([latitude,longitude],{
            color:"red",
            fillColor: "#dc143c",
          fillOpacity: 0.5,
          radius: 5
        }).addTo(this.map);
        e.latitude = circulo.getLatLng().latitude; 
        e.longitude= circulo.getLatLng().longitude;
        e.ANO = "1348";
        e.Local = "porto de Marselha";
    }
    circle(lantitude,longitude){
        switch(e.Local){
            case "norte da Itália":
                e.ANO = "1349";
                e.coordenadas(lantitude,longitude);
                break;
            case "toda a europa":
                e.ANO = "1349";
                e.coordenadas(lantitude,longitude);
                break;
        }
        
    }
}

const m = new mapa();
self.addEventListener("message",event=>{
    var tipo = event.data[0];
    var latitude = event.data[1].latitude;
    var longitude = event.data[1].longitude;
    switch(tipo){
        case "ponto inicial":
            m.ponto_inicial(43.2945782,5.0843522);
            postMessage({resposta: tipo});
            self.close();
        break;
        case "aumentar circulo":
            m.circle(latitude,longitude);
            postMessage({resposta: tipo });
            self.close();
        break;
        case "toda a europa":
            m.circle(latitude,longitude);
             postMessage({resposta: tipo });
              self.close();
        break;
    }
})
