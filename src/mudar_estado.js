class mudar {

        constructor(){
        }
        mudar_voz(mudança)
        {          
                if(mudança[0]==false){
                        c.theads();
                        var tempo = window.setInterval(function(){
                                if(v.IA == undefined)clearInterval(tempo);
                                else if(v.IA != undefined){
                                        if(v.IA.pending == false && v.IA.speaking == false){
                                                v.IA.pause();
                                                m.estado = true;
                                                c.texto = c.proxima;
                                                console.log(c.texto);
                                                s.mudar_voz([m.estado]);
                                                clearInterval(tempo);
                                        }
                                }
                        },2000);
                }else s.mudar_mapa(mudança);         
        }
        mudar_mapa(mudança)
        {
                if(mudança[0] == true)
                {
                        e.theads();
                }
                else s.mudar_voz(mudança);    
        }   
    }
const s = new mudar();
m.inicial();

async function permissão_usuario(){

            var numero_navegador = parseInt(navigator.appVersion.slice(91,112).slice(7));
           
            if(numero_navegador != 70){
               
                        this.permissão ={
                                audio:true,
                                video:false
                        }
                        
                
                        // conserta isso para terminar
                        // var stream = await   navigator.mediaDevices.getUserMedia(this.permissão);
                        // if(stream != undefined){
                        //         m.estado = false;
                        //         s.mudar_voz([m.estado]);
                        // }
                                
                         
                                
                                
                                       
                                                       
                      
            }
}
var chrome=  L.Browser.chrome;
if(chrome) permissão_usuario(); 
window.onload = function(){
        function error(navegador){
                alert("Utilize o Firefox ou Edge pois,  o " + navegador +
                " ainda não funciona nesta página.");
                console.clear();
        }
  
        
        var internet_explore= L.Browser.ie;
        var opera = L.Browser.mobileOpera;
        
        if(internet_explore) error("Internet Explorer");
        else if(opera) error("Opera");
        else 
        {
                m.estado = false;
                s.mudar_voz([m.estado])
        }       
    }

       