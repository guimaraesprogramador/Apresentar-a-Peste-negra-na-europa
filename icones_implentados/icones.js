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
           
           function play(index){
         
           }
           function stop(index){

           }
           function voltar(index){

            }
            function avançar(index){

            }
            // play
            
            this.controle_volume.play.image.src = "https://img.icons8.com/nolan/26/youtube-music.png";
            this.controle_volume.play.input.alt = "play";
                    // stop
            this.controle_volume.stop.image.src = "https://img.icons8.com/nolan/26/stop.png"
            this.controle_volume.stop.input.alt = "stop";

           // this.controle_volume[0].stop.input.onclick = stop(o.valor);
            /*
            // seta para voltar 
            this.controle_volume[2].src = "https://img.icons8.com/nolan/26/circled-right-2.png";
            this.controle_volume[2].alt = "voltar";
           
            // this.controle_volume[2].onclick = voltar((o.valor = o.valor -1));
            
            // seta para avança
            this.controle_volume[3].src = "https://img.icons8.com/nolan/26/circled-left-2.png"; 
            this.controle_volume[3].alt = "avançar";
           // this.controle_volume[3].onclick = avançar((o.valor = o.valor +1));
            */
           var div = m.legend._container;
                div.innerHTML += "<i >" + " " +  o.navio.outerHTML.toString() + 
                                " " + "</i><span> "+ "Navio" + "</span></br> ";
                div.innerHTML += "<i >" + " " +  o.linha_trajetoria.outerHTML.toString() + 
                                " " + "</i><span> "+ "Linha" + "</span></br> ";
               div.innerHTML += "<a>" +o.controle_volume.play.image.outerHTML +
               " </a>";
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