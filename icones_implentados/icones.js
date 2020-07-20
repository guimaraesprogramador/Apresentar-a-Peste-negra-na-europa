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
           var navio = document.createElement("img");
           navio.src = "./documentos/imagens/etapa 2/historic-ship.png";
           Image
           switch(this.nome){
               case "porto de Marselha":
                
                    m.map.legend.removeFrom(m.map);
                    this.legend = L.control({ position: "bottomleft" });
                    this.legend.onAdd = function(map) {
                        var div = L.DomUtil.create("div", "legend");
                        div.innerHTML += "<h4>Legenda</h4>"; 
                        div.innerHTML += '<i style="background: #dc143c"></i><span>Peste bubônica</span><br>';

                        return div;
                    }

                   break;
               case "até o centro da itália":
                   break;
           }
       }
        
        
    }
}
const o = new ordem();