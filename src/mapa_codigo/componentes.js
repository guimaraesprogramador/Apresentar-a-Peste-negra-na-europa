// dados primarios
var exibir = {
    ANO:1347,
    Local:"porto de martilhas",
    lantitude:43.2945782,
    longitude:5.0843522,
    apresentar:{
        executar_linhas:function(){
            let linhas = [this.primeira_parte,
            this.segunda_linha,this.terceira_linha,
        this.quarta_linha, this.quinta_linha,
    this.sexta_linha];
           var soma = 0;
           var linha_executar = linhas[soma];
           linhas.shift();
           return linha_executar;
        },
        primeira_parte:"Essa historia \n não tem relação direta \n  com a Pandemia de Codiv-19, \n mais sim com os relados",
        segunda_linha:" que aconteceu \n no tempo estimado de 1346 a 1353 \n durante a Pandemia da Peste Bubônica \n",
        terceira_linha: " (conhecida como peste negra), \n  sendo assim \n não me responsabilizo \n por qualquer informação \n",
        quarta_linha:" irregular dessa Pandemia \n pois, \n as informação são exclusimante \n de site ou livros referentes na documentação.",
        quinta_linha:" Sendo assim, \n será realizado \n uma  projeção cartografica \n da Pandemia Peste Bubônica \n no tempo  estimado.",
        sexta_linha:" Obrigado \n pelo compreendimento.",
      
    }
}
function gps(qual){
var dados = null;
var url = "src/historia/componentes_json.json";
var xhttp = new XMLHttpRequest();
xhttp.open("GET", url, false);
xhttp.send();
var obj = JSON.parse(xhttp.responseText);

dados = [{anos,locais,lantitude,longitude}];
        obj.gps.forEach(function(value,key){
            if(key == qual){
                dados.push({
                    anos:value.anos,
                    locais:value.locais,
                    lantitude:value.coordenadas.lantitude,
                    longitude:value.coordenadas.longitude
                });
            }
        });
return dados;
}