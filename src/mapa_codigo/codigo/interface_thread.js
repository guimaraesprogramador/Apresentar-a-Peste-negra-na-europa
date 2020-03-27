var banco = {
    dados:class sql {
        
        mapa = function(){
            let initialCoordinates = [43.2954326,0.883166]; // mapa do Brasil
               //latitude e a longitude
            var initialZoomLevel = 4;
// create a map in the "map" div, set the view to a given place and zoom
            var map = L.map('map').setView(initialCoordinates, initialZoomLevel);

// add an OpenStreetMap tile layer
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; Contribuidores do <a href="http://osm.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
        }

    }
}
var mapas =  new banco.dados();
mapas.mapa();