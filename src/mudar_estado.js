class mudar {

        constructor(){
        }
        mudar_voz(mudança)
        {          
                if(mudança[0]==false){
                        c.theads();
                        var tempo = window.setInterval(function(){
                                if(v.IA.pending == false && v.IA.speaking == false){
                                        v.IA.pause();
                                        m.estado = true;
                                        s.mudar_mapa([m.estado]);
                                        c.texto =  "parte_2";
                                        clearInterval(tempo);
                                }
                        },2000);
                }
                else this.mudar_mapa(mudança[0]);                           
        }
        mudar_mapa(mudança)
        {
                if(mudança[0] == true){
                        e.theads();
                }
                else this.mudar_voz(mudança[0]);
        }   
    }
const s = new mudar();
if(m instanceof mapa)m.inicial();
    
