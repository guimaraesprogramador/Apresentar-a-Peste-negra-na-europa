class mudar {

        constructor(){
        }
        mudar_voz(mudança)
        {          
                if(mudança[0]==false){
                        c.theads();
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
    
