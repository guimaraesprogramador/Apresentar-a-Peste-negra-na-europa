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
                                                s.mudar_mapa([m.estado]);
                                                c.texto =  "parte_2";
                                                clearInterval(tempo);
                                        }
                                }
                        },1000);
                }                     
        }
        mudar_mapa(mudança)
        {
                if(mudança[0] == true){
                        e.theads();
                }
        }   
    }
const s = new mudar();
if(m instanceof mapa)m.inicial();
    
