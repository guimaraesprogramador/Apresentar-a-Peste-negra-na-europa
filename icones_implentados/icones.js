class contado_historia{
    constructor(){
        this.texto;
        this.numero;
        this.navio = document.createElement("img");
           this.navio.src = "https://img.icons8.com/ios-filled/26/000000/historic-ship.png";
           this.navio.alt = "navio";
           this.linha_trajetoria = document.createElement("img");
           this.linha_trajetoria.src =  "https://img.icons8.com/dotty/26/000000/dashed-line.png";
           this.linha_trajetoria.alt  = "Linha trajetoria";
           this.controle_volume ={
               play:{
                   image:document.createElement("img")
               },
               stop:{
                image:document.createElement("img")
               },
               voltar:{
                image:document.createElement("img")
               },
               avançar:{
                image:document.createElement("img")
               }
           };
           
           
            // play
            
            this.controle_volume.play.image.src = "https://img.icons8.com/nolan/26/youtube-music.png";
            this.controle_volume.play.image.alt = "play";
            // this.controle_volume.play.image.setAttribute("onclick","play()");
                    // stop
            this.controle_volume.stop.image.src = "https://img.icons8.com/nolan/26/stop.png"
            this.controle_volume.stop.image.alt = "stop";

            
            // seta para voltar 
            this.controle_volume.voltar.image.src = "https://img.icons8.com/nolan/26/circled-right-2.png";
            this.controle_volume.voltar.image.alt = "voltar";
           
            
            // seta para avança
            this.controle_volume.avançar.image.src = "https://img.icons8.com/nolan/26/circled-left-2.png"; 
            this.controle_volume.avançar.image.alt = "avançar";
            
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
        function play(){
            console.log("play");
              }
              function stop(){
   
              }
              function voltar(){
   
               }
               function avançar(){
   
               }
               var pontos = [
                [45.052106,33.1369009],
                [38.2365903,12.8096511]
                
               ]
               var myIcon = L.icon({
                   iconUrl:"https://img.icons8.com/ios-filled/26/000000/historic-ship.png"
               });
               var linha = L.icon({
                   iconUrl:"https://img.icons8.com/dotty/26/000000/dashed-line.png"
               })
               if(o.nome == undefined){
           
                var div = m.legend._container;
                div.innerHTML += "<i >" + " " +  o.navio.outerHTML.toString() + 
                                " " + "</i><span> "+ "Navio" + "</span></br> ";
                div.innerHTML += "<i >" + " " +  o.linha_trajetoria.outerHTML.toString() + 
                                " " + "</i><span> "+ "Linha" + "</span></br> ";
           
                this.controle = L.control({ position: "topleft" });
                this.controle.onAdd = function(map){
                    this.div = L.DomUtil.create("div", "audio");
                    this.div.innerHTML += o.controle_volume.voltar.image.outerHTML.toString();
                    this.div.innerHTML += o.controle_volume.play.image.outerHTML.toString();
                    this.div.innerHTML += o.controle_volume.stop.image.outerHTML.toString();
                    this.div.innerHTML += o.controle_volume.avançar.image.outerHTML.toString();
                    return this.div;
                }
                this.controle.addTo(m.map);
                o.nome = "parte 1";
                o.valor = 3;
            }
                else{
                
                            switch(o.valor){
                                case 3:
                                L.marker([pontos[0][0],pontos[0][1]],{icon:myIcon}).addTo(m.map);
                                o.valor++;
                                break;
                                case 4:
                                this.p1 = new  L.marker([pontos[0][0],pontos[0][1]],{icon:myIcon});
                                this.p2 = new L.marker([pontos[1][0],pontos[1][1]],{icon:myIcon});
                                var poligon = L.polygon(pontos,{icon:linha});
                                this.layerGroup = L.layerGroup([this.p1,this.p2, poligon]);
                                this.layerGroup.addTo(m.map);
                                o.valor++;
                                pontos.push([43.280555,5.345467]);
                                this.p3 = new  L.marker([pontos[2][0],pontos[2][1]],{icon:myIcon});
                                var poligon = L.polygon(pontos,{icon:linha});
                                this.layerGroup.addLayer(this.p3);
                                this.layerGroup = L.layerGroup([this.p1,this.p2, poligon]);
                                this.layerGroup.addTo(m.map);
                                clearInterval(tempo2);
                                break;
                            

                       }      
                    }
                    if(o.controle != undefined){
                        // voltar
                        o.controle.div.children[0].onclick = function(){
                            voltar();
                            }
                        // play
                        o.controle.div.children[1].onclick = function(){
                            play();
                        }
                        // stop
                        o.controle.div.children[2].onclick = function(){
                            stop();
                        }
                        // avançar
                        o.controle.div.children[3].onclick = function(){
                            avançar();
                        }
                }
               }
               
       
         
        }
        
    
const o = new ordem();
o.ordem_contada();

