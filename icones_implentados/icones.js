class contado_historia{
    constructor(){
        this.texto;
        this.numero;
        this.navio = document.createElement("img");
           this.navio.src = "./documentos/imagens/etapa 2/historic-ship.png";
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
           var div = m.legend._container;
                div.innerHTML += "<i >" + " " +  o.navio.outerHTML.toString() + 
                                " " + "</i><span> "+ "Navio" + "</span></br> ";
                div.innerHTML += "<i >" + " " +  o.linha_trajetoria.outerHTML.toString() + 
                                " " + "</i><span> "+ "Linha" + "</span></br> ";
           
                
                div.innerHTML += o.controle_volume.voltar.image.outerHTML.toString();
                div.innerHTML += o.controle_volume.play.image.outerHTML.toString();
                div.innerHTML += o.controle_volume.stop.image.outerHTML.toString();
                div.innerHTML += o.controle_volume.avançar.image.outerHTML.toString();
                
            //  controle.div.children[10].onclick = function(){
            //  play();
            //    }
           switch(o.nome){
               case "introdução":
                
                   break;
               case "parte_2":
                    
                    
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
const o = new ordem();
o.ordem_contada();