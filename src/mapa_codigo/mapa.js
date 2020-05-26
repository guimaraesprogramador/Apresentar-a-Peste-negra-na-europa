
class mapa {
   estado = true;
   constructor(){
       this.inicial();
}
   inicial(){
        let initialCoordinates = [43.280555,5.345467]; // cidade de marselha
        //latitude e a longitude
     var initialZoomLevel = 13;
// create a map in the "map" div, set the view to a given place and zoom
    this.map =  L.map("map").setView(initialCoordinates, initialZoomLevel);
// add an OpenStreetMap tile layer
     L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
         attribution: '&copy; Contribuidores do <a href="http://osm.org/copyright">OpenStreetMap</a>'
     }).addTo(this.map);
     var legend = L.control({ position: "bottomleft" });
     legend.onAdd = function(map) {
        var div = L.DomUtil.create("div", "legend");
        div.innerHTML += "<h4>Legenda</h4>"; 
        div.innerHTML += '<i style="background: #dc143c"></i><span>Peste bubônica</span><br>';
        return div;
     }
     legend.addTo(this.map);
    }
    ponto_inicial(latitude,longitude){
        var parte_1 = [latitude, longitude,"1348", "porto de Marselha"]
        return parte_1;
    }
    circle(latitude,longitude,Local){
        if(Local != "porto de Marselha"){
            var posicao = [ latitude,longitude,"1349",Local];
            return posicao;
        }
       
    }
}

const m = new mapa();
self.addEventListener("message",event=>{
    var tipo = event.data[0];
    var circulo  = null;
    switch(tipo){
        case "porto de Marselha":
           var inicial = m.ponto_inicial(43.2803051,5.3454696);
           postMessage({dados:inicial});
            self.close();
        break;
        default:
            var latitude = event.data[1];
            var longitude = event.data[2];
            circulo = m.circle(latitude,longitude,tipo);
            postMessage({dados:circulo});
            self.close();
            break;
    }
})