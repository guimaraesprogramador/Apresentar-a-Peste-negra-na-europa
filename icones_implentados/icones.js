class contado_historia{
    constructor(){
        this.texto;
        this.numero;
    }
   get nome(){
       return this.texto;
   }
   set nome(tipo){
       this.texto = tipo;
   }
   get valor(){
        return this.numero; 
   }
   set valor(tipo){
       this.numero = tipo;
   }
}
class  ordem  extends contado_historia{
    constructor(){
        super();
    }
    ordem_contada(){
       if(this.nome != undefined){
           this.navio = document.createElement("img");
           this.navio.src = "./documentos/imagens/etapa 2/historic-ship.png";
           this.navio.alt = "navio";
           this.linha_trajetoria = document.createElement("img");
           this.linha_trajetoria.src =  "./documentos/imagens/etapa 2/Linha tracejada.png";
           this.linha_trajetoria.alt  = "Linha trajetoria";
           this.controle_volume =[ 
            // play   
            document.createElement("img"),
           //pause 
           document.createElement("img"),
           // stop
           document.createElement("img"),
           // voltar
           document.createElement("img"),
           // avançar
           document.createElement("img")];

           
           function play(index){

           }
           function pause(index){

           }
           function stop(index){

           }
           function voltar(index){

            }
            function avançar(index){

            }
            this.controle_volume[0].src = "https://img.icons8.com/nolan/26/youtube-music.png";
            this.controle_volume[0].alt = "play";
            this.controle_volume[0].onclick = play(this.valor);
           switch(this.nome){
               case "parte_2":
                    m.legend.removeFrom(m.map);
                    
                    this.legend = L.control({ position: "bottomleft" });
                    this.legend.onAdd = function(map) {
                        var div = L.DomUtil.create("div", "legend");
                        div.innerHTML += "<h4>Legenda</h4>"; 
                        div.innerHTML += '<i style="background: #dc143c"></i><span>Peste bubônica</span><br>';
                        div.innerHTML += '<i >'+' <img src='+ this.navio.src.toString() + " alt= "+
                        this.navio.alt.toString()  + "</i> <span> "+ "Navio" + "</span><br>";
                        div.innerHTML += '<i >'+' <img src='+ this.linha_trajetoria.src.toString() + " alt= "+
                        this.linha_trajetoria.alt.toString()  + "</i> <span> "+ "Linha trajetoria" + "</span><br>";

                        return div;
                    }
                    
                   

                    this.legend.addTo(m.map);
                    this.control = L.control({ position: "bottomleft" });
                    this.control.onAdd = function(map) {
                        var div = L.DomUtil.create("div", "audio");
                        div.innerHTML +=  controle_volume[0].innerHTML.toString(); 
                        // play 
                        div.innerHTML += '<i >'+' <img src='+ this.controle_volume[0].src.toString() + " alt= "+
                        this.controle_volume[0].alt.toString()  + "> ";
                        // pause
                        div.innerHTML += '<i >'+' <img src='+ this.controle_volume[1].src.toString() + " alt= "+
                        this.controle_volume[1].alt.toString()  + "> ";
                        
                        return div;
                    }
                    this.control.onAdd(m.map);

                   break;
                case "parte_2-1":
                    break;
                case "parte_3-1":
                    break;
               case "parte_3-2":
                    break;
                case "parte_4":
                    break
                default:
                    break;
           }
       }
        
        
    }
}
const o = new ordem();