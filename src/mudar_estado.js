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
                                                c.texto =  c.proxima;
                                                console.log(c.falar);
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
window.onload = function(){
        function error(navegador){
                alert("Utilize o Firefox ou Edge pois,  o " + navegador +
                " ainda não funciona nesta página.");
                console.clear();
        }
        var chrome=  L.Browser.chrome;
        var internet_explore= L.Browser.ie;
        var opera = L.Browser.mobileOpera;
        if(chrome)
        {
            var numero_navegador = parseInt(navigator.appVersion.slice(91,112).slice(7));
            if(numero_navegador != 70){
               error("Chrome");
            }
        } 
        else if(internet_explore) error("Internet Explorer");
        else if(opera) error("Opera");
        else 
        {
                m.estado = false;
                s.mudar_voz([m.estado])
        }       
    }
       