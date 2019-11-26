var banco = {
    dados:class sql {
        cidade = function(){
            alasql("create table cidade(cod_municipio number, cod_uf string, cod_setor string,"+
            "nome_uf string);");   
        }
        homens = function(){
            alasql("create table homens(idade number,sexo string);");
            importScripts("src/")
        }
        mulheres = function(){
            alasql("create table mulheres(idade number,sexo string);");
        }
        mapa = function(){
            let initialCoordinates = [-15.3561,-51.2831]; // mapa do Brasil
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
var mapa =  new banco.dados();
mapa.mapa();